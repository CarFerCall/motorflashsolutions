'use server'

import { getPayloadClient } from '@/lib/payload'
import { productBySlug } from '@/catalog/products'
import { sanitizeHeader } from '@/lib/email-safety'

interface ContactInput {
  contactName: string
  email: string
  companyName: string | null
  phone: string | null
  servicio: string | null
  message: string | null
  privacy: boolean
}

interface ContactResult {
  ok: boolean
  error: string
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  if (!input.privacy) return { ok: false, error: 'Debes aceptar la política de privacidad para continuar.' }
  if (!input.contactName.trim()) return { ok: false, error: 'El nombre es obligatorio.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return { ok: false, error: 'Email no válido.' }

  const payload = await getPayloadClient()

  const product = input.servicio ? productBySlug(input.servicio) : null
  const productName = product?.name ?? '(sin especificar)'

  const commercialEmail = process.env.COMMERCIAL_EMAIL || 'comercial@motorflash.com'
  const internalHtml = `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#1a1c1c;background:#f8f9fa;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e2e2">
  <p style="color:#ff8000;margin:0 0 4px;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.08em">Nuevo contacto · Web Motorflash</p>
  <h1 style="font-size:20px;margin:0 0 24px">${escapeHtml(input.contactName)} quiere hablar contigo</h1>
  <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
  ${input.phone ? `<p style="margin:8px 0"><strong>Teléfono:</strong> ${escapeHtml(input.phone)}</p>` : ''}
  ${input.companyName ? `<p style="margin:8px 0"><strong>Empresa:</strong> ${escapeHtml(input.companyName)}</p>` : ''}
  <p style="margin:8px 0"><strong>Servicio de interés:</strong> ${escapeHtml(productName)}</p>
  ${input.message ? `<p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e2e2e2;white-space:pre-wrap"><strong>Mensaje:</strong><br>${escapeHtml(input.message)}</p>` : ''}
</div></body></html>`

  const confirmHtml = `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;color:#1a1c1c;background:#f8f9fa;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e2e2">
  <h1 style="font-size:24px;margin:0 0 12px">Hola ${escapeHtml(input.contactName)},</h1>
  <p style="color:#454747;font-size:15px;line-height:1.5">Hemos recibido tu mensaje${product ? ` sobre <strong>${escapeHtml(product.name)}</strong>` : ''} y nuestro equipo comercial te contactará en menos de 24 horas.</p>
  ${input.message ? `<p style="color:#454747;font-size:13px;margin-top:24px;padding:16px;background:#f8f9fa;border-radius:8px;border-left:4px solid #ff8000;white-space:pre-wrap"><strong>Tu mensaje:</strong><br>${escapeHtml(input.message)}</p>` : ''}
  <p style="margin-top:32px">Si necesitas hablar antes con nosotros, llámanos al <a href="tel:+34910788575" style="color:#ff8000;text-decoration:none;font-weight:600">+34 910 788 575</a> o respondiendo a este email.</p>
  <p style="color:#454747;font-size:12px;margin-top:32px;padding-top:16px;border-top:1px solid #e2e2e2">Motorflash Ibérica de Negocios S.L. — Calle Basauri 17, Edf. B, 28023 Madrid</p>
</div></body></html>`

  try {
    await payload.sendEmail({
      to: commercialEmail,
      replyTo: input.email,
      subject: sanitizeHeader(`[Web] ${input.contactName}${product ? ` · ${product.name}` : ''}`),
      html: internalHtml,
    })
    await payload.sendEmail({
      to: input.email,
      subject: 'Hemos recibido tu mensaje · Motorflash',
      html: confirmHtml,
    })
  } catch (err) {
    payload.logger?.error?.({ err }, 'Contact emails failed')
    return { ok: false, error: 'No hemos podido enviar el mensaje. Llámanos al +34 910 788 575 o inténtalo en unos minutos.' }
  }

  return { ok: true, error: '' }
}
