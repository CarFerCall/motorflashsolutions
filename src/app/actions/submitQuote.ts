'use server'

import { getPayloadClient } from '@/lib/payload'
import { normalizeItem, type RawPricingItem } from '@/lib/pricing'
import { sanitizeHeader } from '@/lib/email-safety'

interface SubmitInput {
  productSlug: string
  selections: Record<string, string>
  contactName: string
  email: string
  companyName: string | null
  phone: string | null
  message: string | null
  privacy: boolean
}

type Line = { key: string; label: string; type: string; value: string; lineCents: number }

interface SubmitResult {
  ok: boolean
  error: string
  quoteId?: number
}

export async function submitQuote(input: SubmitInput): Promise<SubmitResult> {
  if (!input.privacy) return { ok: false, error: 'Debes aceptar la política de privacidad para continuar.' }
  if (!input.contactName.trim()) return { ok: false, error: 'El nombre es obligatorio.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return { ok: false, error: 'Email no válido.' }

  const payload = await getPayloadClient()

  // Re-lee el plan desde BD para recalcular total en servidor (no fiarse del cliente)
  const { docs } = await payload.find({
    collection: 'pricing-plans',
    where: { productSlug: { equals: input.productSlug }, enabled: { equals: true } },
    limit: 1,
  })
  const plan = docs[0]
  if (!plan) return { ok: false, error: 'Plan no encontrado.' }

  const lines: Line[] = []
  let totalCents = plan.basePriceCents
  if (plan.basePriceCents > 0) {
    lines.push({ key: '_base', label: 'Cuota base', type: 'base', value: '', lineCents: plan.basePriceCents })
  }

  for (const rawItem of (plan.items ?? []) as RawPricingItem[]) {
    const item = normalizeItem(rawItem)
    const raw = input.selections[item.itemKey]

    if (item.type === 'number') {
      const qty = Math.max(item.min, Math.min(item.max, Number(raw) || 0))
      if (qty > 0) {
        const cents = qty * item.unitPriceCents
        lines.push({ key: item.itemKey, label: item.label, type: 'number', value: String(qty), lineCents: cents })
        totalCents += cents
      }
    } else if (item.type === 'select') {
      const opt = item.options.find((o) => o.value === String(raw))
      if (opt) {
        lines.push({ key: item.itemKey, label: item.label, type: 'select', value: opt.label, lineCents: opt.priceCents })
        totalCents += opt.priceCents
      }
    } else {
      if (raw === 'true' || raw === '1' || raw === 'on') {
        lines.push({ key: item.itemKey, label: item.label, type: 'checkbox', value: '✓', lineCents: item.unitPriceCents })
        totalCents += item.unitPriceCents
      }
    }
  }

  // Crea la cotización
  const created = await payload.create({
    collection: 'quotes',
    data: {
      productSlug: plan.productSlug,
      productName: plan.productName,
      contactName: input.contactName.trim(),
      email: input.email.trim(),
      companyName: input.companyName?.trim() || undefined,
      phone: input.phone?.trim() || undefined,
      message: input.message?.trim() || undefined,
      selectedItems: lines,
      totalCents,
      currency: plan.currency,
      billingCycle: plan.billingCycle,
      status: 'new',
    },
  })

  // Envía emails (no rompe el flujo si fallan)
  const fmt = (cents: number) => `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
  const cycleLabel = plan.billingCycle === 'year' ? 'año' : plan.billingCycle === 'month' ? 'mes' : 'pago único'
  const tableRows = lines
    .map((l) => `<tr style="border-bottom:1px solid #e2e2e2"><td style="padding:8px">${escapeHtml(l.label)}</td><td style="padding:8px">${escapeHtml(l.value)}</td><td style="padding:8px;text-align:right">${fmt(l.lineCents)}</td></tr>`)
    .join('')

  const commercialEmail = process.env.COMMERCIAL_EMAIL || 'comercial@motorflash.com'

  try {
    await payload.sendEmail({
      to: commercialEmail,
      replyTo: input.email,
      subject: sanitizeHeader(`[Cotización #${created.id}] ${plan.productName} — ${input.contactName}`),
      html: internalEmail({ quote: created, lines, tableRows, totalCents, cycleLabel, fmt }),
    })
    await payload.sendEmail({
      to: input.email,
      subject: `Tu solicitud de ${plan.productName} en Motorflash`,
      html: confirmationEmail({ quote: created, lines, tableRows, totalCents, cycleLabel, fmt }),
    })
  } catch (err) {
    payload.logger?.error?.({ err }, 'Quote emails failed')
  }

  return { ok: true, error: '', quoteId: Number(created.id) }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

function internalEmail({ quote, tableRows, totalCents, cycleLabel, fmt }: any): string {
  return `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#1a1c1c;background:#f8f9fa;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e2e2">
  <h1 style="font-size:20px;margin:0 0 4px">Nueva cotización solicitada</h1>
  <p style="color:#ff8000;margin:0 0 24px;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.08em">Motorflash CMS · Cotización #${quote.id}</p>
  <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:.08em;color:#454747;border-bottom:1px solid #e2e2e2;padding-bottom:8px">Cliente</h2>
  <p style="margin:8px 0"><strong>Contacto:</strong> ${escapeHtml(quote.contactName)}</p>
  <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${escapeHtml(quote.email)}">${escapeHtml(quote.email)}</a></p>
  ${quote.companyName ? `<p style="margin:8px 0"><strong>Empresa:</strong> ${escapeHtml(quote.companyName)}</p>` : ''}
  ${quote.phone ? `<p style="margin:8px 0"><strong>Teléfono:</strong> ${escapeHtml(quote.phone)}</p>` : ''}
  <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:.08em;color:#454747;border-bottom:1px solid #e2e2e2;padding-bottom:8px;margin-top:24px">Producto: ${escapeHtml(quote.productName)}</h2>
  <table style="width:100%;border-collapse:collapse;margin:16px 0"><thead><tr style="background:#f8f9fa"><th style="text-align:left;padding:8px">Item</th><th style="text-align:left;padding:8px">Valor</th><th style="text-align:right;padding:8px">Importe</th></tr></thead><tbody>${tableRows}</tbody></table>
  <div style="display:flex;justify-content:space-between;padding:16px;background:#fff5e6;border-radius:8px;border-left:4px solid #ff8000">
    <strong>Total estimado</strong>
    <strong style="color:#ff8000;font-size:18px">${fmt(totalCents)} / ${cycleLabel}</strong>
  </div>
  ${quote.message ? `<p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e2e2e2;white-space:pre-wrap"><strong>Mensaje:</strong><br>${escapeHtml(quote.message)}</p>` : ''}
</div></body></html>`
}

function confirmationEmail({ quote, tableRows, totalCents, cycleLabel, fmt }: any): string {
  return `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#1a1c1c;background:#f8f9fa;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e2e2">
  <h1 style="font-size:24px;margin:0 0 12px">Hola ${escapeHtml(quote.contactName)},</h1>
  <p style="color:#454747;font-size:15px;line-height:1.5">Hemos recibido tu solicitud de cotización para <strong>${escapeHtml(quote.productName)}</strong>. Un especialista comercial te llamará en menos de 24 horas para revisar contigo la propuesta y resolver cualquier duda.</p>
  <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:.08em;color:#454747;border-bottom:1px solid #e2e2e2;padding-bottom:8px;margin-top:32px">Resumen de tu configuración</h2>
  <table style="width:100%;border-collapse:collapse;margin:16px 0"><tbody>${tableRows}</tbody></table>
  <div style="display:flex;justify-content:space-between;padding:16px;background:#fff5e6;border-radius:8px;border-left:4px solid #ff8000">
    <strong>Total estimado</strong>
    <strong style="color:#ff8000;font-size:18px">${fmt(totalCents)} / ${cycleLabel}</strong>
  </div>
  <p style="color:#454747;font-size:13px;margin-top:24px">Este importe es una estimación basada en los parámetros seleccionados. La oferta final puede ajustarse según las particularidades de tu concesionario, integraciones específicas o descuentos por volumen.</p>
  <p style="margin-top:32px">Si necesitas hablar antes con nosotros, llámanos al <a href="tel:+34910788575" style="color:#ff8000;text-decoration:none;font-weight:600">+34 910 788 575</a> o respondiendo a este email.</p>
  <p style="color:#454747;font-size:12px;margin-top:32px;padding-top:16px;border-top:1px solid #e2e2e2">Motorflash Ibérica de Negocios S.L. — Calle Basauri 17, Edf. B, 28023 Madrid<br>Referencia interna #${quote.id}</p>
</div></body></html>`
}
