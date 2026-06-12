'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
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

// Muestra precio sin decimales si es redondo (199 €) y con 2 decimales si
// no lo es (0,25 €). Antes formateaba todo sin decimales, así que un
// precio sub-euro salía como "0 €" y parecía que no se pintaba.
const fmt = (cents: number) => {
  const euros = cents / 100
  const hasDecimals = Math.abs(euros - Math.round(euros)) > 0.001
  const decimals = hasDecimals ? 2 : 0
  return `${euros.toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: 2 })} €`
}

export function PricingConfigurator({ products }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [selections, setSelections] = useState<SelectionMap>({})
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
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
        const product = productBySlug.get(slug)
        if (product) {
          setSelections((sel) => ({
            ...sel,
            [slug]: sel[slug] ?? buildDefaultSelections(product.items),
          }))
        }
        // Si nada está activo, este pasa a ser el activo
        setActiveSlug((prevActive) => prevActive ?? slug)
      }
      return next
    })
  }

  // Si el slug activo se deselecciona, salta al siguiente
  useEffect(() => {
    if (activeSlug && !selected.has(activeSlug)) {
      const next = Array.from(selected)[0] ?? null
      setActiveSlug(next)
    } else if (!activeSlug && selected.size > 0) {
      setActiveSlug(Array.from(selected)[0])
    }
  }, [selected, activeSlug])

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

  const linesBySlug = useMemo(() => new Map(lines.map((l) => [l.product.slug, l])), [lines])
  const totalCents = lines.reduce((acc, l) => acc + l.breakdown.totalCents, 0)
  const activeLine = activeSlug ? linesBySlug.get(activeSlug) : null

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
      {/* Columna izquierda: cards + tabs de configuración */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white rounded-3xl border border-outline-variant shadow-sm p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-primary pl-4">Elige tus soluciones</h2>
            {selected.size > 0 && (
              <span className="text-sm text-on-surface-variant whitespace-nowrap">
                {selected.size} {selected.size === 1 ? 'seleccionado' : 'seleccionados'}
              </span>
            )}
          </div>

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

        {/* Configurador por producto (tabs) */}
        {lines.length > 0 && activeLine && (
          <div className="bg-white rounded-3xl border border-outline-variant shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-outline-variant overflow-x-auto">
              <div className="flex min-w-max">
                {lines.map(({ product, breakdown }) => {
                  const isActive = product.slug === activeSlug
                  return (
                    <button
                      type="button"
                      key={product.slug}
                      onClick={() => setActiveSlug(product.slug)}
                      className={`flex items-center gap-3 px-5 py-4 border-b-2 transition-colors ${
                        isActive
                          ? 'border-primary text-on-surface bg-white'
                          : 'border-transparent text-on-surface-variant hover:text-on-surface'
                      }`}
                      style={isActive ? { background: 'rgba(255, 128, 0, 0.04)' } : undefined}
                      aria-pressed={isActive}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: isActive ? 'rgba(255, 128, 0, 0.15)' : '#f3f4f6' }}
                      >
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>{product.icon}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-sm m-0 leading-tight">{product.name}</p>
                        <p className="text-xs text-on-surface-variant m-0">{fmt(breakdown.totalCents)}/mes</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Panel activo */}
            <ProductPanel
              key={activeLine.product.slug}
              product={activeLine.product}
              selections={selections[activeLine.product.slug] ?? {}}
              onChange={(key, value) => updateSelection(activeLine.product.slug, key, value)}
              breakdown={activeLine.breakdown}
            />

            {/* Navegación entre tabs */}
            {lines.length > 1 && (
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-outline-variant" style={{ background: '#f9fafb' }}>
                <button
                  type="button"
                  onClick={() => {
                    const idx = lines.findIndex((l) => l.product.slug === activeSlug)
                    if (idx > 0) setActiveSlug(lines[idx - 1].product.slug)
                  }}
                  disabled={lines.findIndex((l) => l.product.slug === activeSlug) === 0}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  Anterior
                </button>
                <span className="text-xs text-on-surface-variant">
                  {lines.findIndex((l) => l.product.slug === activeSlug) + 1} de {lines.length}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const idx = lines.findIndex((l) => l.product.slug === activeSlug)
                    if (idx < lines.length - 1) setActiveSlug(lines[idx + 1].product.slug)
                  }}
                  disabled={lines.findIndex((l) => l.product.slug === activeSlug) === lines.length - 1}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            )}
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
                <button
                  type="button"
                  key={product.slug}
                  onClick={() => setActiveSlug(product.slug)}
                  className={`w-full text-left pb-4 border-b border-outline-variant/50 last:border-b-0 transition-colors rounded-lg px-2 py-2 -mx-2 ${
                    activeSlug === product.slug ? 'bg-primary/5' : 'hover:bg-surface-container/50'
                  }`}
                >
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
                        <span className="truncate">+ {d.label} <em className="not-italic opacity-70">({d.valueLabel})</em></span>
                        <span className="whitespace-nowrap ml-2">{fmt(d.cents)}</span>
                      </div>
                    ))}
                  </div>
                </button>
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
              <input type="text" required value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Nombre y apellidos *" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary" />
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Empresa" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary" />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Cuéntanos algo más (opcional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:outline-none focus:border-primary resize-none" />
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
 * Panel del producto activo: cabecera con icono + nombre + cuota, items
 * en grid de tarjetas según su tipo.
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
  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Cabecera del producto */}
      <div className="flex items-start gap-4 pb-6 border-b border-outline-variant">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255, 128, 0, 0.10)' }}>
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 30 }}>{product.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold m-0 leading-tight">{product.name}</h3>
          <p className="text-sm text-on-surface-variant m-0 mt-1">{product.tagline}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold m-0">Cuota base</p>
          <p className="text-xl font-bold text-on-surface m-0">{fmt(product.basePriceCents)}<span className="text-sm font-medium text-on-surface-variant">/mes</span></p>
        </div>
      </div>

      {product.items.length === 0 ? (
        <div className="text-center py-8 rounded-2xl" style={{ background: '#f9fafb' }}>
          <span className="material-symbols-outlined text-on-surface-variant mb-2" style={{ fontSize: 28 }}>info</span>
          <p className="text-sm text-on-surface-variant m-0">Este producto tiene cuota fija — no requiere configuración adicional.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.items.map((item) => (
            <ItemCard
              key={item.itemKey}
              item={item}
              value={selections[item.itemKey]}
              onChange={(v) => onChange(item.itemKey, v)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Card por item. Una tarjeta visualmente independiente con el control
 * apropiado al tipo. Los items "select" ocupan toda la fila porque
 * suelen tener varias opciones.
 */
function ItemCard({ item, value, onChange }: { item: NormalizedItem; value: string | undefined; onChange: (v: string) => void }) {
  const fullWidth = item.type === 'select'
  return (
    <div
      className={`p-5 rounded-2xl border border-outline-variant bg-white ${fullWidth ? 'md:col-span-2' : ''}`}
      style={{ background: '#fafbfc' }}
    >
      <ItemControl item={item} value={value} onChange={onChange} />
    </div>
  )
}

function ItemControl({ item, value, onChange }: { item: NormalizedItem; value: string | undefined; onChange: (v: string) => void }) {
  if (item.type === 'number') {
    const current = clamp(Number(value ?? item.default) || 0, item.min, item.max)
    const lineCents = current * item.unitPriceCents
    return (
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <p className="font-semibold m-0">{item.label}</p>
            {item.helpText && <p className="text-xs text-on-surface-variant m-0 mt-1">{item.helpText}</p>}
          </div>
          <div className="text-right shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onChange(String(Math.max(item.min, current - 1)))}
                disabled={current <= item.min}
                aria-label="Disminuir"
                className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>remove</span>
              </button>
              <span className="text-2xl font-bold text-primary w-10 text-center tabular-nums">{current}</span>
              <button
                type="button"
                onClick={() => onChange(String(Math.min(item.max, current + 1)))}
                disabled={current >= item.max}
                aria-label="Aumentar"
                className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
              </button>
            </div>
          </div>
        </div>
        <input
          type="range"
          min={item.min}
          max={item.max}
          value={current}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mf-range"
        />
        <div className="flex justify-between items-center text-xs text-on-surface-variant mt-2">
          <span>{item.min} {item.unit}</span>
          <span className="text-primary font-bold">
            {lineCents > 0 ? `+${fmt(lineCents)}/mes` : 'incluido'}
          </span>
          <span>{item.max} {item.unit}</span>
        </div>
      </div>
    )
  }
  if (item.type === 'select') {
    const fallback = item.options.find((o) => o.isDefault) ?? item.options[0]
    const current = value ?? fallback?.value ?? ''
    return (
      <div>
        <p className="font-semibold m-0">{item.label}</p>
        {item.helpText && <p className="text-xs text-on-surface-variant m-0 mt-1 mb-3">{item.helpText}</p>}
        <div className={`grid grid-cols-1 ${item.options.length === 2 ? 'sm:grid-cols-2' : item.options.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3'} gap-3 mt-3`}>
          {item.options.map((opt) => {
            const isActive = opt.value === current
            return (
              <button
                type="button"
                key={opt.value}
                onClick={() => onChange(opt.value)}
                className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col gap-1 ${
                  isActive ? 'border-primary' : 'border-outline-variant hover:border-primary/50'
                }`}
                style={isActive ? { background: 'rgba(255, 128, 0, 0.05)' } : { background: '#fff' }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm">{opt.label}</span>
                  {isActive && <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>check_circle</span>}
                </div>
                <span className="text-xs text-primary font-bold">
                  {opt.priceCents > 0 ? `+${fmt(opt.priceCents)}/mes` : 'Incluido'}
                </span>
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
      <span
        className={`mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 ${
          isChecked ? 'border-primary' : 'border-outline-variant'
        }`}
        style={isChecked ? { background: '#ff8000' } : undefined}
      >
        {isChecked && <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>check</span>}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked ? '1' : '0')}
          className="sr-only"
        />
      </span>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-semibold">{item.label}</span>
          <span className="text-primary font-bold text-sm whitespace-nowrap">+{fmt(item.unitPriceCents)}/mes</span>
        </div>
        {item.helpText && <p className="text-xs text-on-surface-variant mt-1 m-0">{item.helpText}</p>}
      </div>
    </label>
  )
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.trunc(n)))
}
