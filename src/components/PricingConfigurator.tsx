'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { computeLineCents, volumeDiscountRate } from '@/lib/multiQuotePricing'
import { submitMultiQuote } from '@/app/actions/submitMultiQuote'

export interface ConfiguratorProduct {
  slug: string
  name: string
  tagline: string
  icon: string
  basePriceCents: number
}

interface Props {
  products: ConfiguratorProduct[]
}

const fmt = (cents: number) =>
  `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €`

export function PricingConfigurator({ products }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [licences, setLicences] = useState(1)
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

  const toggleProduct = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }

  const lines = useMemo(() => {
    const selectedProducts = products.filter((p) => selected.has(p.slug))
    return selectedProducts.map((p) => ({
      slug: p.slug,
      name: p.name,
      basePriceCents: p.basePriceCents,
      lineCents: computeLineCents(p.basePriceCents, licences),
    }))
  }, [products, selected, licences])

  const subtotalCents = lines.reduce((acc, l) => acc + l.lineCents, 0)
  const discountRate = volumeDiscountRate(licences)
  const discountCents = Math.round(subtotalCents * discountRate)
  const totalCents = subtotalCents - discountCents

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitting(true)
    const res = await submitMultiQuote({
      selectedSlugs: Array.from(selected),
      licences,
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
      <div className="mf-product-card text-center max-w-2xl mx-auto py-16">
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
      {/* Columna izquierda: selección de productos + slider */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white rounded-3xl border border-outline-variant shadow-sm p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-primary pl-4">Configura tus Soluciones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((p) => {
              const isSelected = selected.has(p.slug)
              return (
                <button
                  type="button"
                  key={p.slug}
                  onClick={() => toggleProduct(p.slug)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all group ${
                    isSelected
                      ? 'border-primary'
                      : 'border-outline-variant hover:border-primary/50'
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
                  <p className="text-primary font-bold">Desde {fmt(p.basePriceCents)}</p>
                </button>
              )
            })}
          </div>

          {/* Slider de licencias */}
          <div className="mt-10 p-6 rounded-2xl border border-outline-variant" style={{ background: '#f9fafb' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
              <div>
                <h4 className="text-lg font-semibold">Número de Licencias</h4>
                <p className="text-sm text-on-surface-variant">Ajusta el volumen de usuarios para tu red.</p>
              </div>
              <div className="flex items-end gap-2 text-primary">
                <span className="text-3xl md:text-4xl font-bold leading-none">{licences}</span>
                <span className="text-on-surface-variant text-sm">{licences === 1 ? 'licencia' : 'licencias'}</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              value={licences}
              onChange={(e) => setLicences(parseInt(e.target.value, 10))}
              className="w-full mf-range"
              aria-label="Número de licencias"
            />
            <div className="flex justify-between text-xs uppercase tracking-widest text-on-surface-variant font-semibold mt-2">
              <span>1 licencia</span>
              <span>25</span>
              <span>50+ licencias</span>
            </div>
            {discountRate > 0 && (
              <p className="mt-4 text-sm text-primary font-semibold">
                ✓ Descuento por volumen aplicado: {Math.round(discountRate * 100)} % sobre el subtotal
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Columna derecha: resumen sticky */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-3xl border border-outline-variant shadow-sm p-8 lg:sticky lg:top-28">
          <h2 className="text-2xl font-semibold mb-6">Resumen Mensual</h2>

          {lines.length === 0 ? (
            <p className="text-on-surface-variant italic text-center py-6">
              Selecciona un producto para comenzar
            </p>
          ) : (
            <div className="space-y-3 mb-6">
              {lines.map((l) => (
                <div key={l.slug} className="flex justify-between items-start gap-4 pb-3 border-b border-outline-variant/50">
                  <div>
                    <p className="font-semibold m-0">{l.name}</p>
                    <p className="text-xs text-on-surface-variant m-0">
                      {licences} {licences === 1 ? 'licencia' : 'licencias'}
                    </p>
                  </div>
                  <span className="font-semibold whitespace-nowrap">{fmt(l.lineCents)}</span>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4 border-t border-outline-variant space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">Descuento (volumen)</span>
              <span className="text-primary font-bold">{discountCents > 0 ? `-${fmt(discountCents)}` : '0 €'}</span>
            </div>
            <div className="flex justify-between items-end pt-3 border-t border-outline-variant">
              <span className="text-lg font-semibold">Total Neto</span>
              <div className="text-right">
                <div className="text-4xl font-bold leading-none">
                  {fmt(totalCents)}
                </div>
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
              Solicitar Presupuesto
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
                <input
                  type="checkbox"
                  required
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  Acepto la <Link href="/privacidad" className="text-primary underline">política de privacidad</Link>.
                </span>
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
