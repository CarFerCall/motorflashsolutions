import { cache } from 'react'

export type FooterLocale = 'es' | 'ca' | 'en' | 'zh'

export interface FooterCopy {
  tagline: string
  productsHeading: string
  viewAll: string
  companyHeading: string
  aboutUs: string
  successStories: string
  pricing: string
  contact: string
  reportingChannel: string
  hqHeading: string
  hqAddress1: string
  hqAddress2: string
  isoQuality: string
  isoSecurity: string
  isoQualityTitle: string
  isoSecurityTitle: string
  copyright: string
  privacy: string
  cookies: string
  legal: string
}

export const STATIC_FOOTER: Record<FooterLocale, FooterCopy> = {
  es: {
    tagline: 'La solución 360 para marcas y concesionarios del motor. Tecnología con IA integrada desde 2007.',
    productsHeading: 'Productos',
    viewAll: 'Ver todos →',
    companyHeading: 'La Compañía',
    aboutUs: 'Conócenos',
    successStories: 'Historias de éxito',
    pricing: 'Precios',
    contact: 'Contacto',
    reportingChannel: 'Canal de denuncias',
    hqHeading: 'Sede Madrid',
    hqAddress1: 'Calle Basauri 17 – Edf. B, Bajo Izq. D',
    hqAddress2: '28023 Madrid, España',
    isoQuality: 'ISO 9001 · Calidad',
    isoSecurity: 'ISO 27001 · Seguridad',
    isoQualityTitle: 'Sistema de Gestión de la Calidad',
    isoSecurityTitle: 'Sistema de Gestión de la Seguridad de la Información',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    legal: 'Aviso Legal',
  },
  ca: {
    tagline: 'La solució 360 per a marques i concessionaris del motor. Tecnologia amb IA integrada des del 2007.',
    productsHeading: 'Productes',
    viewAll: 'Veure tots →',
    companyHeading: 'La Companyia',
    aboutUs: 'Coneix-nos',
    successStories: "Històries d'èxit",
    pricing: 'Preus',
    contact: 'Contacte',
    reportingChannel: 'Canal de denúncies',
    hqHeading: 'Seu Madrid',
    hqAddress1: 'Carrer Basauri 17 – Edif. B, Baixos Esq. D',
    hqAddress2: '28023 Madrid, Espanya',
    isoQuality: 'ISO 9001 · Qualitat',
    isoSecurity: 'ISO 27001 · Seguretat',
    isoQualityTitle: 'Sistema de Gestió de la Qualitat',
    isoSecurityTitle: 'Sistema de Gestió de la Seguretat de la Informació',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: 'Privadesa',
    cookies: 'Galetes',
    legal: 'Avís legal',
  },
  en: {
    tagline: 'The 360 solution for automotive brands and dealerships. AI-integrated technology since 2007.',
    productsHeading: 'Products',
    viewAll: 'View all →',
    companyHeading: 'The Company',
    aboutUs: 'About us',
    successStories: 'Success stories',
    pricing: 'Pricing',
    contact: 'Contact',
    reportingChannel: 'Whistleblowing channel',
    hqHeading: 'Madrid HQ',
    hqAddress1: 'Calle Basauri 17 – Bldg. B, Lower Left D',
    hqAddress2: '28023 Madrid, Spain',
    isoQuality: 'ISO 9001 · Quality',
    isoSecurity: 'ISO 27001 · Security',
    isoQualityTitle: 'Quality Management System',
    isoSecurityTitle: 'Information Security Management System',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: 'Privacy',
    cookies: 'Cookies',
    legal: 'Legal notice',
  },
  zh: {
    tagline: '面向汽车品牌与经销商的 360 解决方案。自 2007 年起集成 AI 的技术。',
    productsHeading: '产品',
    viewAll: '查看全部 →',
    companyHeading: '公司',
    aboutUs: '关于我们',
    successStories: '成功案例',
    pricing: '价格',
    contact: '联系我们',
    reportingChannel: '举报渠道',
    hqHeading: '马德里总部',
    hqAddress1: 'Calle Basauri 17 – B 座,下左 D',
    hqAddress2: '28023 马德里,西班牙',
    isoQuality: 'ISO 9001 · 质量',
    isoSecurity: 'ISO 27001 · 安全',
    isoQualityTitle: '质量管理体系',
    isoSecurityTitle: '信息安全管理体系',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: '隐私政策',
    cookies: 'Cookies',
    legal: '法律声明',
  },
}

function mergeWithFallback(doc: Partial<FooterCopy> | null | undefined, fallback: FooterCopy): FooterCopy {
  if (!doc) return fallback
  const out = { ...fallback }
  for (const k of Object.keys(fallback) as (keyof FooterCopy)[]) {
    const v = doc[k]
    if (typeof v === 'string' && v.trim().length > 0) out[k] = v
  }
  return out
}

/**
 * Lee el global `footer` del CMS en el locale activo. Si falta o
 * falla, devuelve el COPY estático. Por campo, si una traducción
 * está vacía se rellena con el fallback estático.
 */
export const getFooterCopy = cache(async (locale: FooterLocale = 'es'): Promise<FooterCopy> => {
  const fallback = STATIC_FOOTER[locale] ?? STATIC_FOOTER.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = (await payload.findGlobal({
      slug: 'footer' as any,
      locale: locale as any,
      depth: 0,
    })) as Partial<FooterCopy> | null
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})
