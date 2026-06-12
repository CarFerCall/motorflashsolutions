'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { buildDefaultSelections, computeProductLine, type SelectionMap } from '@/lib/multiQuotePricing'
import type { NormalizedItem } from '@/lib/pricing'
import { submitMultiQuote } from '@/app/actions/submitMultiQuote'

export interface ConfiguratorProduct {
  slug: string
  name: string
  tagline: string
  icon: string
  basePriceCents: number
  items: NormalizedItem[]
}

interface Props {
  products: ConfiguratorProduct[]
}

const fmt = (cents: number) =>
  `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €`

export function PricingConfigurator({ products }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [selections, setSelections] = useState<SelectionMap>({})
  const [showForm, setShowForm] = useState(false)

  // Datos del formulario
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitOk, setSubmitOk] = useState(false)

  const productBySlug = useMemo(
    () => new Map(products.map((p) => [p.slug, p])),
    [products],
  )

  const toggleProduct = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
        // Inicializa selecciones del producto con sus defaults
        const product = productBySlug.get(slug)
        if (product) {
          setSelections((sel) => ({
            ...sel,
            [slug]: sel[slug] ?? buildDefaultSelections(product.items),
          }))
        }
      }
      return next
    })
  }

  const updateSelection = (productSlug: string, itemKey: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [productSlug]: { ...(prev[productSlug] ?? {}), [itemKey]: value },
    }))
  }

  const lines = useMemo(() => {
    return Array.from(selected)
      .map((slug) => {
        const product = productBySlug.get(slug)
        if (!product) return null
        const breakdown = computeProductLine(product.basePriceCents, product.items, selections[slug])
        return { product, breakdown }
      })
      .filter(Boolean) as Array<{ product: ConfiguratorProduct; breakdown: ReturnType<typeof computeProductLine> }>
  }, [selected, selections, productBySlug])

  const totalCents = lines.reduce((acc, l) => acc + l.breakdown.totalCents, 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitting(true)
    const res = await submitMultiQuote({
      selections: Object.fromEntries(Array.from(selected).map((s) => [s, selections[s] ?? {}])),
      contactName,
      email,
      companyName: companyName.trim() || null,
      phone: phone.trim() || null,
      message: message.trim() || null,
      privacy,
    })
    setSubmitting(false)
    if (!res.ok) {
      setSubmitError(res.error)
      return
    }
    setSubmitOk(true)
  }

  if (submitOk) {
    return (
      <div className="bg-white rounded-3xl border border-outline-variant shadow-sm text-center max-w-2xl mx-auto py-16 px-8">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 128, 0, 0.15)' }}>
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 36 }}>check_circle</span>
        </div>
        <h2 className="text-3xl font-semibold mb-3">¡Solicitud enviada!</h2>
        <p className="text-on-surface-variant mb-2">Te hemos enviado un email con la estimación inicial.</p>
        <p className="text-on-surface-variant mb-8">Nuestro equipo comercial te contactará en menos de 24 horas.</p>
        <Link href="/" className="btn-secondary">
          Volver al inicio
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Columna izquierda: cards + configuración por producto */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white rounded-3xl border border-outline-variant shadow-sm p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-primary pl-4">Elige tus soluciones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((p) => {
              const isSelected = selected.has(p.slug)
              return (
                <button
                  type="button"
                  key={p.slug}
                  onClick={() => toggleProduct(p.slug)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all group ${
                    isSelected ? 'border-primary' : 'border-outline-variant hover:border-primary/50'
                  }`}
                  style={isSelected ? { background: 'rgba(255, 128, 0, 0.05)' } : undefined}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                      style={{ background: isSelected ? 'rgba(255, 128, 0, 0.15)' : '#f9fafb' }}
                    >
                      <span className="material-symbols-outlined text-primary">{p.icon}</span>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-primary' : 'border-outline-variant'
                      }`}
                      style={isSelected ? { background: '#ff8000' } : undefined}
                    >
                      {isSelected && (
                        <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>check</span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-on-surface-variant mb-3 line-clamp-2">{p.tagline}</p>
                  <p className="text-primary font-bold">Desde {fmt(p.basePriceCents)}/mes</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Configuración detallada por producto seleccionado */}
        {lines.length > 0 && (
          <div className="bg-white rounded-3xl border border-outline-variant shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 border-l-4 border-primary pl-4">Personaliza cada producto</h2>
            <p className="text-on-surface-variant text-sm mb-6 pl-5">
              Ajusta las opciones que necesitas para cada solución. El resumen se actualiza al instante.
            </p>
            <div className="space-y-4">
              {lines.map(({ product, breakdown }) => (
                <ProductPanel
                  key={product.slug}
                  product={product}
                  selections={selections[product.slug] ?? {}}
                  onChange={(key, value) => updateSelection(product.slug, key, value)}
                  breakdown={breakdown}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Columna derecha: resumen sticky */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-3xl border border-outline-variant shadow-sm p-6 md:p-8 lg:sticky lg:top-28">
          <h2 className="text-2xl font-semibold mb-6">Resumen Mensual</h2>

          {lines.length === 0 ? (
            <p className="text-on-surface-variant italic text-center py-6">
              Selecciona un producto para comenzar
            </p>
          ) : (
            <div className="space-y-4 mb-6">
              {lines.map(({ product, breakdown }) => (
                <div key={product.slug} className="pb-4 border-b border-outline-variant/50 last:border-b-0">
                  <div className="flex justify-between items-baseline gap-3 mb-1">
                    <p className="font-semibold m-0">{product.name}</p>
                    <span className="font-bold whitespace-nowrap">{fmt(breakdown.totalCents)}</span>
                  </div>
                  <div className="text-xs text-on-surface-variant space-y-0.5">
                    <div className="flex justify-between">
                      <span>Cuota base</span>
                      <span>{fmt(breakdown.baseCents)}</span>
                    </div>
                    {breakdown.itemsDetail.map((d, i) => (
                      <div key={i} className="flex justify-between">
                        <span>+ {d.label} <em className="not-italic opacity-70">({d.valueLabel})</em></span>
                        <span>{fmt(d.cents)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4 border-t border-outline-variant">
            <div className="flex justify-between items-end">
              <span className="text-lg font-semibold">Total</span>
              <div className="text-right">
                <div className="text-4xl font-bold leading-none">{fmt(totalCents)}</div>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">/ mes + IVA</span>
              </div>
            </div>
          </div>

          {!showForm ? (
            <button
              type="button"
              disabled={lines.length === 0}
              onClick={() => setShowForm(true)}
              className="btn-primary w-full justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Solicitar presupuesto
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Nombre y apellidos *"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Empresa"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Teléfono"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos algo más (opcional)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary resize-none"
              />
              <label className="flex items-start gap-2 text-sm text-on-surface-variant">
                <input type="checkbox" required checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} className="mt-1" />
                <span>Acepto la <Link href="/privacidad" className="text-primary underline">política de privacidad</Link>.</span>
              </label>
              {submitError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">{submitError}</p>
              )}
              <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-50">
                {submitting ? 'Enviando…' : 'Enviar solicitud'}
                <span className="material-symbols-outlined">send</span>
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-sm text-on-surface-variant hover:text-primary w-full text-center">
                ← Volver al resumen
              </button>
            </form>
          )}

          <p className="text-xs text-on-surface-variant text-center mt-4">
            Sin permanencia obligatoria. Cancela cuando quieras.
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * Panel desplegable de un producto seleccionado con sus items configurables.
 */
function ProductPanel({
  product,
  selections,
  onChange,
  breakdown,
}: {
  product: ConfiguratorProduct
  selections: Record<string, string>
  onChange: (itemKey: string, value: string) => void
  breakdown: ReturnType<typeof computeProductLine>
}) {
  const hasItems = product.items.length > 0
  return (
    <details className="rounded-2xl border border-outline-variant overflow-hidden group" open={hasItems}>
      <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none" style={{ background: '#f9fafb' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255, 128, 0, 0.10)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{product.icon}</span>
          </div>
          <div>
            <p className="font-semibold m-0">{product.name}</p>
            <p className="text-xs text-on-surface-variant m-0">
              {hasItems ? `${product.items.length} ${product.items.length === 1 ? 'opción' : 'opciones'} configurables` : 'Cuota fija mensual'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold whitespace-nowrap">{fmt(breakdown.totalCents)}/mes</span>
          {hasItems && (
            <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
          )}
        </div>
      </summary>
      {hasItems && (
        <div className="p-5 border-t border-outline-variant bg-white space-y-5">
          {product.items.map((item) => (
            <ItemControl key={item.itemKey} item={item} value={selections[item.itemKey]} onChange={(v) => onChange(item.itemKey, v)} />
          ))}
        </div>
      )}
    </details>
  )
}

function ItemControl({ item, value, onChange }: { item: NormalizedItem; value: string | undefined; onChange: (v: string) => void }) {
  if (item.type === 'number') {
    const current = clamp(Number(value ?? item.default) || 0, item.min, item.max)
    return (
      <div>
        <div className="flex items-baseline justify-between mb-2 gap-3">
          <label className="font-medium">
            {item.label}
            {item.unit && <span className="text-on-surface-variant text-sm ml-1">({fmt(item.unitPriceCents)} / {item.unit})</span>}
          </label>
          <span className="text-primary font-bold">{current}</span>
        </div>
        {item.helpText && <p className="text-xs text-on-surface-variant mb-3">{item.helpText}</p>}
        <input
          type="range"
          min={item.min}
          max={item.max}
          value={current}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mf-range"
        />
        <div className="flex justify-between text-xs text-on-surface-variant mt-1">
          <span>{item.min}</span>
          <span>{item.max}</span>
        </div>
      </div>
    )
  }
  if (item.type === 'select') {
    const fallback = item.options.find((o) => o.isDefault) ?? item.options[0]
    const current = value ?? fallback?.value ?? ''
    return (
      <div>
        <label className="font-medium block mb-2">{item.label}</label>
        {item.helpText && <p className="text-xs text-on-surface-variant mb-3">{item.helpText}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {item.options.map((opt) => {
            const isActive = opt.value === current
            return (
              <button
                type="button"
                key={opt.value}
                onClick={() => onChange(opt.value)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${
                  isActive ? 'border-primary' : 'border-outline-variant hover:border-primary/50'
                }`}
                style={isActive ? { background: 'rgba(255, 128, 0, 0.05)' } : undefined}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm">{opt.label}</span>
                  <span className="text-xs text-primary font-bold whitespace-nowrap">{opt.priceCents > 0 ? `+${fmt(opt.priceCents)}` : 'incluido'}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }
  // checkbox
  const isChecked = value == null ? item.defaultChecked : value === '1' || value === 'true' || value === 'on'
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked ? '1' : '0')}
        className="mt-1 w-5 h-5 accent-primary"
      />
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-medium">{item.label}</span>
          <span className="text-primary font-bold text-sm">+{fmt(item.unitPriceCents)}/mes</span>
        </div>
        {item.helpText && <p className="text-xs text-on-surface-variant mt-1">{item.helpText}</p>}
      </div>
    </label>
  )
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.trunc(n)))
}
