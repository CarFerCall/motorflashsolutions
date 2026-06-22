import { cache } from 'react'

export type ContactLocale = 'es' | 'ca' | 'en' | 'zh'

export interface ContactCopy {
  title: string
  lead: string
  phoneLabel: string
  phoneNumber: string
  emailLabel: string
  emailAddress: string
}

export const STATIC_CONTACT: Record<ContactLocale, ContactCopy> = {
  es: {
    title: '¿Hablamos sobre tu negocio?',
    lead: 'Cuéntanos tu caso y un especialista te llamará en menos de 24 horas para analizar cómo podemos ayudarte a vender más.',
    phoneLabel: 'Teléfono',
    phoneNumber: '+34 910 788 575',
    emailLabel: 'Correo Comercial',
    emailAddress: 'comercial@motorflash.com',
  },
  ca: {
    title: 'Parlem del teu negoci?',
    lead: "Explica'ns el teu cas i un especialista et trucarà en menys de 24 hores per analitzar com podem ajudar-te a vendre més.",
    phoneLabel: 'Telèfon',
    phoneNumber: '+34 910 788 575',
    emailLabel: 'Correu Comercial',
    emailAddress: 'comercial@motorflash.com',
  },
  en: {
    title: 'Shall we talk about your business?',
    lead: 'Tell us your case and a specialist will call you within 24 hours to analyse how we can help you sell more.',
    phoneLabel: 'Phone',
    phoneNumber: '+34 910 788 575',
    emailLabel: 'Sales email',
    emailAddress: 'comercial@motorflash.com',
  },
  zh: {
    title: '聊聊您的业务?',
    lead: '告诉我们您的情况,专家将在 24 小时内回电,分析我们如何帮助您卖得更多。',
    phoneLabel: '电话',
    phoneNumber: '+34 910 788 575',
    emailLabel: '商务邮箱',
    emailAddress: 'comercial@motorflash.com',
  },
}

function mergeWithFallback(doc: Partial<ContactCopy> | null | undefined, fallback: ContactCopy): ContactCopy {
  if (!doc) return fallback
  const out = { ...fallback }
  for (const k of Object.keys(fallback) as (keyof ContactCopy)[]) {
    const v = doc[k]
    if (typeof v === 'string' && v.trim().length > 0) out[k] = v
  }
  return out
}

export const getContactCopy = cache(async (locale: ContactLocale = 'es'): Promise<ContactCopy> => {
  const fallback = STATIC_CONTACT[locale] ?? STATIC_CONTACT.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = (await payload.findGlobal({
      slug: 'contact-page' as any,
      locale: locale as any,
      depth: 0,
    })) as Partial<ContactCopy> | null
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})
