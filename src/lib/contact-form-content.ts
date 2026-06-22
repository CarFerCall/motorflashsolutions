import { cache } from 'react'

export type ContactFormLocale = 'es' | 'ca' | 'en' | 'zh'

export interface ContactFormCopy {
  // Formulario (labels e inputs de /contacto)
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  companyLabel: string
  phoneLabel: string
  serviceLabel: string
  servicePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  privacy: string
  sending: string
  submit: string
  // Página /contacto/gracias
  thanksTitle: string
  thanksLead: string
  thanksExploreServices: string
  thanksBackHome: string
}

export const STATIC_CONTACT_FORM: Record<ContactFormLocale, ContactFormCopy> = {
  es: {
    nameLabel: 'Nombre *',
    namePlaceholder: 'Tu nombre…',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@ejemplo.com',
    companyLabel: 'Empresa',
    phoneLabel: 'Teléfono',
    serviceLabel: 'Servicio de interés',
    servicePlaceholder: 'Selecciona un servicio…',
    messageLabel: 'Mensaje',
    messagePlaceholder: '¿En qué podemos ayudarte?',
    privacy: 'He leído y acepto la Política de privacidad. Consiento el tratamiento de mis datos.',
    sending: 'Enviando…',
    submit: 'Enviar mensaje',
    thanksTitle: 'Hemos recibido tu mensaje',
    thanksLead: 'Un especialista comercial te contactará en menos de 24 horas. Te hemos enviado también una confirmación a tu email.',
    thanksExploreServices: 'Ver todos los servicios',
    thanksBackHome: 'Volver al inicio',
  },
  ca: {
    nameLabel: 'Nom *',
    namePlaceholder: 'El teu nom…',
    emailLabel: 'Correu electrònic *',
    emailPlaceholder: 'correu@exemple.com',
    companyLabel: 'Empresa',
    phoneLabel: 'Telèfon',
    serviceLabel: "Servei d'interès",
    servicePlaceholder: 'Selecciona un servei…',
    messageLabel: 'Missatge',
    messagePlaceholder: 'En què et podem ajudar?',
    privacy: 'He llegit i accepto la Política de privadesa. Consento el tractament de les meves dades.',
    sending: 'Enviant…',
    submit: 'Envia el missatge',
    thanksTitle: 'Hem rebut el teu missatge',
    thanksLead: "Un especialista comercial et contactarà en menys de 24 hores. També t'hem enviat una confirmació al teu correu.",
    thanksExploreServices: 'Veure tots els serveis',
    thanksBackHome: "Tornar a l'inici",
  },
  en: {
    nameLabel: 'Name *',
    namePlaceholder: 'Your name…',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@example.com',
    companyLabel: 'Company',
    phoneLabel: 'Phone',
    serviceLabel: 'Service of interest',
    servicePlaceholder: 'Pick a service…',
    messageLabel: 'Message',
    messagePlaceholder: 'How can we help?',
    privacy: 'I have read and accept the Privacy Policy. I consent to the processing of my data.',
    sending: 'Sending…',
    submit: 'Send message',
    thanksTitle: 'We have received your message',
    thanksLead: "A sales specialist will contact you within 24 hours. We've also sent a confirmation to your email.",
    thanksExploreServices: 'View all services',
    thanksBackHome: 'Back to home',
  },
  zh: {
    nameLabel: '姓名 *',
    namePlaceholder: '您的姓名…',
    emailLabel: '邮箱 *',
    emailPlaceholder: 'email@example.com',
    companyLabel: '公司',
    phoneLabel: '电话',
    serviceLabel: '感兴趣的服务',
    servicePlaceholder: '选择服务…',
    messageLabel: '留言',
    messagePlaceholder: '我们可以如何帮助您?',
    privacy: '我已阅读并接受隐私政策,同意对我的数据进行处理。',
    sending: '发送中…',
    submit: '发送留言',
    thanksTitle: '我们已收到您的消息',
    thanksLead: '商务专家将在 24 小时内与您联系。我们也已向您的邮箱发送了一份确认。',
    thanksExploreServices: '查看所有服务',
    thanksBackHome: '返回首页',
  },
}

function mergeWithFallback(doc: Partial<ContactFormCopy> | null | undefined, fallback: ContactFormCopy): ContactFormCopy {
  if (!doc) return fallback
  const out = { ...fallback }
  for (const k of Object.keys(fallback) as (keyof ContactFormCopy)[]) {
    const v = doc[k]
    if (typeof v === 'string' && v.trim().length > 0) out[k] = v
  }
  return out
}

export const getContactFormCopy = cache(async (locale: ContactFormLocale = 'es'): Promise<ContactFormCopy> => {
  const fallback = STATIC_CONTACT_FORM[locale] ?? STATIC_CONTACT_FORM.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = (await payload.findGlobal({
      slug: 'contact-form' as any,
      locale: locale as any,
      depth: 0,
    })) as Partial<ContactFormCopy> | null
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})

export function getContactFormCopyStatic(locale: ContactFormLocale = 'es'): ContactFormCopy {
  return STATIC_CONTACT_FORM[locale] ?? STATIC_CONTACT_FORM.es
}
