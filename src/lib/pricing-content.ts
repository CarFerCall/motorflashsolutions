import { cache } from 'react'

export type PricingLocale = 'es' | 'ca' | 'en' | 'zh'

export interface PricingCopy {
  metaTitle: string
  metaDescription: string
  metaOg: string
  eyebrow: string
  title: string
  lead: string
  noPlansPre: string
  noPlansLink: string
  noPlansPost: string
  onDemandEyebrow: string
  onDemandTitle: string
  onDemandLead: string
  onDemandCta: string
  fineTuneTitle: string
  fineTuneLead: string
}

export const STATIC_PRICING: Record<PricingLocale, PricingCopy> = {
  es: {
    metaTitle: 'Precios',
    metaDescription: 'Configura los servicios de Motorflash que necesita tu concesionario y obtén una estimación en directo. Mensual, anual o pago único. Sin permanencia.',
    metaOg: 'Configura los servicios de Motorflash que necesita tu concesionario y obtén una estimación en directo. Sin permanencia.',
    eyebrow: 'Precios',
    title: 'Planes a tu medida',
    lead: 'Selecciona las herramientas que tu concesionario necesita y escala según tu volumen de negocio. Estimación en vivo, sin permanencia.',
    noPlansPre: 'Aún no hay planes activos en el CMS.',
    noPlansLink: 'Pide presupuesto',
    noPlansPost: '.',
    onDemandEyebrow: 'Más servicios',
    onDemandTitle: 'Soluciones a medida',
    onDemandLead: 'El resto del catálogo se cotiza según las necesidades de cada concesionario. Pide presupuesto sin compromiso.',
    onDemandCta: 'Solicitar presupuesto',
    fineTuneTitle: '¿Quieres afinar la configuración de un producto?',
    fineTuneLead: 'Para CRM4YOU y otros productos con módulos opcionales puedes entrar al configurador individual y elegir cada item.',
  },
  ca: {
    metaTitle: 'Preus',
    metaDescription: "Configura els serveis de Motorflash que necessita el teu concessionari i obtén una estimació en directe. Mensual, anual o pagament únic. Sense permanència.",
    metaOg: 'Configura els serveis de Motorflash que necessita el teu concessionari i obtén una estimació en directe. Sense permanència.',
    eyebrow: 'Preus',
    title: 'Plans a la teva mida',
    lead: 'Selecciona les eines que el teu concessionari necessita i escala segons el teu volum de negoci. Estimació en directe, sense permanència.',
    noPlansPre: 'Encara no hi ha plans actius al CMS.',
    noPlansLink: 'Demana pressupost',
    noPlansPost: '.',
    onDemandEyebrow: 'Més serveis',
    onDemandTitle: 'Solucions a mida',
    onDemandLead: "La resta del catàleg es cotitza segons les necessitats de cada concessionari. Demana pressupost sense compromís.",
    onDemandCta: 'Sol·licitar pressupost',
    fineTuneTitle: "Vols afinar la configuració d'un producte?",
    fineTuneLead: "Per a CRM4YOU i altres productes amb mòduls opcionals pots entrar al configurador individual i triar cada element.",
  },
  en: {
    metaTitle: 'Pricing',
    metaDescription: "Configure the Motorflash services your dealership needs and get a live estimate. Monthly, yearly or one-off. No long-term commitment.",
    metaOg: "Configure the Motorflash services your dealership needs and get a live estimate. No long-term commitment.",
    eyebrow: 'Pricing',
    title: 'Plans built for your scale',
    lead: 'Select the tools your dealership needs and scale to your business volume. Live estimate, no long-term commitment.',
    noPlansPre: 'No active plans in the CMS yet.',
    noPlansLink: 'Request a quote',
    noPlansPost: '.',
    onDemandEyebrow: 'More services',
    onDemandTitle: 'Tailored solutions',
    onDemandLead: 'The rest of the catalogue is quoted to fit each dealership. Ask for a no-strings proposal.',
    onDemandCta: 'Request a quote',
    fineTuneTitle: 'Want to fine-tune a product?',
    fineTuneLead: 'For CRM4YOU and other products with optional modules you can open the individual configurator and pick each item.',
  },
  zh: {
    metaTitle: '价格',
    metaDescription: '为您的经销店配置所需的 Motorflash 服务并实时获得估算。月付、年付或一次性付款。无长期绑定。',
    metaOg: '为您的经销店配置所需的 Motorflash 服务并实时获得估算。无长期绑定。',
    eyebrow: '价格',
    title: '量身定制的方案',
    lead: '选择您经销店所需的工具,按业务规模灵活扩展。实时估算,无长期绑定。',
    noPlansPre: 'CMS 中尚无启用的方案。',
    noPlansLink: '申请报价',
    noPlansPost: '。',
    onDemandEyebrow: '更多服务',
    onDemandTitle: '定制化方案',
    onDemandLead: '目录中的其他产品按每家经销店的需求报价。免费且无义务申请报价。',
    onDemandCta: '申请报价',
    fineTuneTitle: '想精细调整某款产品吗?',
    fineTuneLead: '对于 CRM4YOU 等带可选模块的产品,可进入单独的配置器逐项选择。',
  },
}

function mergeWithFallback(doc: Partial<PricingCopy> | null | undefined, fallback: PricingCopy): PricingCopy {
  if (!doc) return fallback
  const out = { ...fallback }
  for (const k of Object.keys(fallback) as (keyof PricingCopy)[]) {
    const v = doc[k]
    if (typeof v === 'string' && v.trim().length > 0) out[k] = v
  }
  return out
}

export const getPricingCopy = cache(async (locale: PricingLocale = 'es'): Promise<PricingCopy> => {
  const fallback = STATIC_PRICING[locale] ?? STATIC_PRICING.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = (await payload.findGlobal({
      slug: 'pricing-page' as any,
      locale: locale as any,
      depth: 0,
    })) as Partial<PricingCopy> | null
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})

export function getPricingCopyStatic(locale: PricingLocale = 'es'): PricingCopy {
  return STATIC_PRICING[locale] ?? STATIC_PRICING.es
}
