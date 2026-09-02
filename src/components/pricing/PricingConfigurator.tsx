'use client'

import { useMemo, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { submitQuote } from '@/app/actions/submitQuote'
import { PrivacyLayer1 } from '@/components/PrivacyLayer1'
import type { NormalizedItem } from '@/lib/pricing'
import { fmtMoney } from '@/lib/pricing'

export interface PlanData {
  id: string
  productSlug: string
  productName: string
  introText: string | null
  basePriceCents: number
  currency: string
  billingCycle: string
  items: NormalizedItem[]
}

type Selections = Record<string, string | number | boolean>

export function PricingConfigurator({ plan }: { plan: PlanData }) {
  const router = useRouter()
  const locale = useLocale()
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const initial: Selections = useMemo(() => {
    const out: Selections = {}
    for (const item of plan.items) {
      if (item.type === 'number') {
        out[item.itemKey] = item.default || (item.required ? Math.max(1, item.min) : 0)
      } else if (item.type === 'select') {
        const def = item.options.find((o) => o.isDefault) ?? item.options[0]
        out[item.itemKey] = def ? def.value : ''
      } else {
        out[item.itemKey] = item.defaultChecked
      }
    }
    return out
  }, [plan])

  const [selections, setSelections] = useState<Selections>(initial)
  const setItem = (key: string, value: string | number | boolean) =>
    setSelections((prev) => ({ ...prev, [key]: value }))

  const { lines, totalCents } = useMemo(() => {
    const lines: { label: string; value: string; lineCents: number }[] = []
    let totalCents = plan.basePriceCents
    if (plan.basePriceCents > 0) {
      lines.push({ label: 'Cuota base', value: '', lineCents: plan.basePriceCents })
    }
    for (const item of plan.items) {
      const value = selections[item.itemKey]
      if (item.type === 'number') {
        const qty = Number(value) || 0
        if (qty > 0) {
          const cents = qty * item.unitPriceCents
          lines.push({ label: item.label, value: `× ${qty}`, lineCents: cents })
          totalCents += cents
        }
      } else if (item.type === 'select') {
        const opt = item.options.find((o) => o.value === String(value))
        if (opt) {
          lines.push({ label: item.label, value: opt.label, lineCents: opt.priceCents })
          totalCents += opt.priceCents
        }
      } else {
        if (value) {
          lines.push({ label: item.label, value: '✓', lineCents: item.unitPriceCents })
          totalCents += item.unitPriceCents
        }
      }
    }
    return { lines, totalCents }
  }, [plan, selections])

  const fmt = (c: number) => fmtMoney(c, plan.currency)

  const handleSubmit = async (form: FormData) => {
    setError(null)
    startTransition(async () => {
      const result = await submitQuote({
        productSlug: plan.productSlug,
        selections: Object.fromEntries(Object.entries(selections).map(([k, v]) => [k, String(v)])),
        contactName: String(form.get('contactName') ?? ''),
        email: String(form.get('email') ?? ''),
        companyName: String(form.get('companyName') ?? '') || null,
        phone: String(form.get('phone') ?? '') || null,
        message: String(form.get('message') ?? '') || null,
        privacy: form.get('privacy') === 'on',
      })

      if (!result.ok) {
        setError(result.error)
        return
      }
      router.push(`/precios/${plan.productSlug}/gracias?quote=${result.quoteId}`)
    })
  }

  return (
    <form action={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="mf-product-card" style={{ padding: '2.5rem' }}>
            <h2 className="text-xl font-semibold mb-6">Configura tu plan</h2>

            {plan.basePriceCents > 0 && (
              <div className="flex justify-between items-baseline pb-3 mb-6 border-b border-outline-variant">
                <span className="font-semibold">Cuota base</span>
                <span className="font-semibold">{fmt(plan.basePriceCents)}</span>
              </div>
            )}

            <div className="space-y-6">
              {plan.items.map((item) => (
                <div key={item.itemKey}>
                  <label htmlFor={`item-${item.itemKey}`} className="block font-semibold mb-2">
                    {item.label}
                    {item.required && <span className="text-primary"> *</span>}
                  </label>

                  {item.type === 'number' && (
                    <div className="flex items-center gap-4">
                      <input
                        id={`item-${item.itemKey}`}
                        type="number"
                        min={item.min}
                        max={item.max}
                        value={Number(selections[item.itemKey] ?? 0)}
                        onChange={(e) => setItem(item.itemKey, Number(e.target.value))}
                        required={item.required}
                        className="w-48 px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none"
                      />
                      <span className="text-sm text-on-surface-variant">
                        × {fmt(item.unitPriceCents)}
                        {item.unit ? ` / ${item.unit}` : ''}
                      </span>
                    </div>
                  )}

                  {item.type === 'select' && (
                    <select
                      id={`item-${item.itemKey}`}
                      value={String(selections[item.itemKey] ?? '')}
                      onChange={(e) => setItem(item.itemKey, e.target.value)}
                      required={item.required}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none bg-white"
                    >
                      {!item.required && <option value="">— Ninguno —</option>}
                      {item.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label} — {fmt(opt.priceCents)}
                        </option>
                      ))}
                    </select>
                  )}

                  {item.type === 'checkbox' && (
                    <label className="flex gap-3 items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!selections[item.itemKey]}
                        onChange={(e) => setItem(item.itemKey, e.target.checked)}
                        className="mt-1 w-5 h-5 accent-primary"
                      />
                      <span>Activar — +{fmt(item.unitPriceCents)}</span>
                    </label>
                  )}

                  {item.helpText && <p className="text-xs text-on-surface-variant mt-2 mb-0">{item.helpText}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="mf-product-card mt-6" style={{ padding: '2.5rem' }}>
            <h2 className="text-xl font-semibold mb-6">Tus datos</h2>

            {error && <div className="p-4 mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactName" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">Nombre *</label>
                <input id="contactName" name="contactName" type="text" required className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">Email *</label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">Empresa</label>
                <input id="companyName" name="companyName" type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">Teléfono</label>
                <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">Mensaje (opcional)</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
              </div>
              <div className="sm:col-span-2 flex gap-3 items-start">
                <input id="privacy" name="privacy" type="checkbox" required className="mt-1 w-5 h-5 accent-primary" />
                <label htmlFor="privacy" className="text-xs text-on-surface-variant">
                  He leído y acepto la Política de privacidad. Consiento el tratamiento de mis datos para recibir esta cotización.
                </label>
              </div>
              <div className="sm:col-span-2">
                <PrivacyLayer1 locale={locale} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="mf-product-card sticky" style={{ top: 100, padding: '2.5rem' }}>
            <h2 className="text-xl font-semibold mb-6">Resumen</h2>

            <ul className="m-0 list-none p-0">
              {lines.length === 0 ? (
                <li className="text-on-surface-variant py-2 italic">Configura las opciones para ver el detalle.</li>
              ) : (
                lines.map((l, i) => (
                  <li key={i} className="flex justify-between py-2 border-b border-outline-variant text-sm">
                    <span>
                      <strong>{l.label}</strong>{' '}
                      {l.value && <span className="text-on-surface-variant text-xs">{l.value}</span>}
                    </span>
                    <span className="font-semibold">{fmt(l.lineCents)}</span>
                  </li>
                ))
              )}
            </ul>

            <div className="flex justify-between items-baseline pt-3 mt-3 border-t-2 border-on-surface">
              <span className="font-bold uppercase tracking-widest text-base">Total estimado</span>
              <span className="font-display text-3xl font-semibold text-primary">{fmt(totalCents)}</span>
            </div>
            <p className="text-on-surface-variant text-right mt-1 text-xs">
              /{plan.billingCycle === 'year' ? 'año' : plan.billingCycle === 'month' ? 'mes' : 'pago'}
            </p>

            <button type="submit" disabled={pending} className="btn-primary w-full mt-6" style={{ padding: '1.125rem 2rem' }}>
              {pending ? 'Enviando…' : 'Solicitar cotización'}
              {!pending && <span className="material-symbols-outlined">arrow_forward</span>}
            </button>

            <p className="text-on-surface-variant text-center mt-3 text-xs">
              Un especialista te contactará en menos de 24 horas con la oferta personalizada.
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}
