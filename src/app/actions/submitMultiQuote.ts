'use server'

import { getPayloadClient } from '@/lib/payload'
import { computeLineCents, volumeDiscountRate } from '@/lib/multiQuotePricing'

interface MultiQuoteInput {
  selectedSlugs: string[]
  licences: number
  contactName: string
  email: string
  companyName: string | null
  phone: string | null
  message: string | null
  privacy: boolean
}

interface MultiQuoteResult {
  ok: boolean
  error: string
  quoteId?: number
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

const fmt = (cents: number) =>
  `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €`

export async function submitMultiQuote(input: MultiQuoteInput): Promise<MultiQuoteResult> {
  if (!input.privacy) return { ok: false, error: 'Debes aceptar la política de privacidad para continuar.' }
  if (!input.contactName.trim()) return { ok: false, error: 'El nombre es obligatorio.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return { ok: false, error: 'Email no válido.' }
  if (!input.selectedSlugs.length) return { ok: false, error: 'Selecciona al menos un producto.' }

  const licences = Math.max(1, Math.min(100, Math.round(input.licences || 1)))

  const payload = await getPayloadClient()
  const { docs: plans } = await payload.find({
    collection: 'pricing-plans',
    where: {
      productSlug: { in: input.selectedSlugs },
      enabled: { equals: true },
    },
    limit: 100,
  })

  const lines = plans
    .filter((p) => p.basePriceCents > 0)
    .map((p) => ({
      productSlug: p.productSlug,
      productName: p.productName,
      unitPriceCents: p.basePriceCents,
      totalCents: computeLineCents(p.basePriceCents, licences),
    }))

  if (!lines.length) return { ok: false, error: 'Ninguno de los productos seleccionados tiene precio configurado.' }

  const subtotalCents = lines.reduce((acc, l) => acc + l.totalCents, 0)
  const discountCents = Math.round(subtotalCents * volumeDiscountRate(licences))
  const totalCents = subtotalCents - discountCents

  const linesHtml = lines
    .map(
      (l) => `
      <tr>
        <td style="padding:8px 0;border-bottom:1px solid #f0f0f0">
          <strong>${escapeHtml(l.productName)}</strong>
          <div style="color:#666;font-size:12px">${licences} ${licences === 1 ? 'licencia' : 'licencias'} · base ${fmt(l.unitPriceCents)}/mes</div>
        </td>
        <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;text-align:right;font-weight:600">${fmt(l.totalCents)}</td>
      </tr>`,
    )
    .join('')

  const productList = lines.map((l) => l.productName).join(', ')
  const commercialEmail = process.env.COMMERCIAL_EMAIL || 'comercial@motorflash.com'

  const internalHtml = `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#1a1c1c;background:#f8f9fa;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e2e2">
  <p style="color:#ff8000;margin:0 0 4px;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.08em">Nueva cotización · Configurador multi-producto</p>
  <h1 style="font-size:20px;margin:0 0 24px">${escapeHtml(input.contactName)} pide presupuesto</h1>
  <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
  ${input.phone ? `<p style="margin:8px 0"><strong>Teléfono:</strong> ${escapeHtml(input.phone)}</p>` : ''}
  ${input.companyName ? `<p style="margin:8px 0"><strong>Empresa:</strong> ${escapeHtml(input.companyName)}</p>` : ''}
  <p style="margin:8px 0"><strong>Licencias:</strong> ${licences}</p>
  <table style="width:100%;border-collapse:collapse;margin:24px 0 8px">
    <thead><tr><th style="text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding-bottom:8px;border-bottom:2px solid #e2e2e2">Producto</th><th style="text-align:right;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding-bottom:8px;border-bottom:2px solid #e2e2e2">Importe/mes</th></tr></thead>
    <tbody>${linesHtml}</tbody>
    <tfoot>
      <tr><td style="padding:8px 0">Subtotal</td><td style="padding:8px 0;text-align:right">${fmt(subtotalCents)}</td></tr>
      ${discountCents > 0 ? `<tr><td style="padding:8px 0;color:#ff8000">Descuento por volumen</td><td style="padding:8px 0;text-align:right;color:#ff8000">-${fmt(discountCents)}</td></tr>` : ''}
      <tr><td style="padding:12px 0 0;border-top:2px solid #e2e2e2;font-weight:700">Total mensual</td><td style="padding:12px 0 0;border-top:2px solid #e2e2e2;text-align:right;font-size:20px;font-weight:700;color:#ff8000">${fmt(totalCents)}</td></tr>
    </tfoot>
  </table>
  ${input.message ? `<p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e2e2e2;white-space:pre-wrap"><strong>Mensaje:</strong><br>${escapeHtml(input.message)}</p>` : ''}
</div></body></html>`

  const confirmHtml = `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#1a1c1c;background:#f8f9fa;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e2e2">
  <h1 style="font-size:24px;margin:0 0 12px">Hola ${escapeHtml(input.contactName)},</h1>
  <p style="color:#454747;font-size:15px;line-height:1.5">Hemos recibido tu solicitud de presupuesto para <strong>${escapeHtml(productList)}</strong> con ${licences} ${licences === 1 ? 'licencia' : 'licencias'}. Nuestro equipo comercial te contactará en menos de 24 horas con la propuesta cerrada.</p>
  <div style="background:#fff5e6;border-left:4px solid #ff8000;padding:16px;border-radius:8px;margin:24px 0">
    <p style="margin:0 0 4px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.08em;font-weight:700">Estimación inicial</p>
    <p style="margin:0;font-size:28px;font-weight:700;color:#ff8000">${fmt(totalCents)}<span style="font-size:14px;color:#666;font-weight:400"> /mes + IVA</span></p>
  </div>
  <p style="color:#454747;font-size:13px;margin-top:16px">Este importe es una estimación basada en los productos y el número de licencias seleccionados. La oferta final puede ajustarse según las particularidades de tu concesionario, integraciones específicas o descuentos adicionales por volumen.</p>
  <p style="margin-top:24px">Si necesitas hablar antes con nosotros, llámanos al <a href="tel:+34910788575" style="color:#ff8000;text-decoration:none;font-weight:600">+34 910 788 575</a>.</p>
  <p style="color:#454747;font-size:12px;margin-top:32px;padding-top:16px;border-top:1px solid #e2e2e2">Motorflash Ibérica de Negocios S.L. — Calle Basauri 17, Edf. B, 28023 Madrid</p>
</div></body></html>`

  let createdId: number | undefined
  try {
    const created = await payload.create({
      collection: 'quotes',
      data: {
        productSlug: lines.map((l) => l.productSlug).join(','),
        productName: productList,
        contactName: input.contactName.trim(),
        email: input.email.trim(),
        companyName: input.companyName?.trim() || undefined,
        phone: input.phone?.trim() || undefined,
        message: input.message?.trim() || undefined,
        selectedItems: { licences, lines, subtotalCents, discountCents } as any,
        totalCents,
        currency: 'EUR',
        billingCycle: 'month',
        status: 'new',
      } as any,
    })
    createdId = Number((created as any).id)
  } catch (err) {
    payload.logger?.warn?.({ err }, 'multi-quote persist failed (continúa con emails)')
  }

  try {
    await payload.sendEmail({
      to: commercialEmail,
      replyTo: input.email,
      subject: `[Cotización${createdId ? ` #${createdId}` : ''}] ${input.contactName} · ${productList} · ${fmt(totalCents)}/mes`,
      html: internalHtml,
    })
    await payload.sendEmail({
      to: input.email,
      subject: 'Tu cotización Motorflash · Estimación inicial',
      html: confirmHtml,
    })
  } catch (err) {
    payload.logger?.error?.({ err }, 'multi-quote emails failed')
    return { ok: false, error: 'No hemos podido enviar la solicitud. Llámanos al +34 910 788 575 o inténtalo en unos minutos.' }
  }

  return { ok: true, error: '', quoteId: createdId }
}
