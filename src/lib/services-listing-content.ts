import { cache } from 'react'

export type ServicesListingLocale = 'es' | 'ca' | 'en' | 'zh'

export interface ServicesListingCopy {
  metaTitle: string
  metaDescription: string
  metaOg: string
  eyebrow: string
  title: string
  lead: string
  viewProduct: string
  comingSoon: string
}

export const STATIC_SERVICES_LISTING: Record<ServicesListingLocale, ServicesListingCopy> = {
  es: {
    metaTitle: 'Servicios',
    metaDescription: '15 productos integrados entre sí para cubrir el ciclo comercial completo del concesionario: publicación, stock, captación de leads, atención al cliente, IA y reporting.',
    metaOg: '15 productos integrados que cubren el ciclo comercial completo del concesionario.',
    eyebrow: 'Catálogo de Servicios',
    title: 'Toda la tecnología para vender más coches',
    lead: '15 productos integrados entre sí para cubrir el ciclo comercial completo del concesionario: publicación, stock, captación de leads, atención al cliente, IA y reporting.',
    viewProduct: 'Ver',
    comingSoon: 'Próximamente',
  },
  ca: {
    metaTitle: 'Serveis',
    metaDescription: "15 productes integrats entre si per cobrir el cicle comercial complet del concessionari: publicació, estoc, captació de leads, atenció al client, IA i reporting.",
    metaOg: 'Catàleg de 15 productes integrats que cobreixen tot el cicle comercial.',
    eyebrow: 'Catàleg de Serveis',
    title: 'Tota la tecnologia per vendre més cotxes',
    lead: "15 productes integrats entre si per cobrir el cicle comercial complet del concessionari: publicació, estoc, captació de leads, atenció al client, IA i reporting.",
    viewProduct: 'Veure',
    comingSoon: 'Properament',
  },
  en: {
    metaTitle: 'Services',
    metaDescription: '15 integrated products covering the dealership’s full sales cycle: publication, stock, lead capture, customer service, AI and reporting.',
    metaOg: "15 integrated products covering the dealership's full sales cycle.",
    eyebrow: 'Services catalogue',
    title: 'The technology to sell more cars',
    lead: "15 integrated products covering the dealership’s full sales cycle: publication, stock, lead capture, customer service, AI and reporting.",
    viewProduct: 'See',
    comingSoon: 'Coming soon',
  },
  zh: {
    metaTitle: '服务',
    metaDescription: '15 款相互集成的产品,覆盖经销店完整销售周期:发布、库存、潜客获取、客户服务、AI 与报告。',
    metaOg: '15 款相互集成的产品,覆盖经销店完整销售周期。',
    eyebrow: '服务目录',
    title: '为卖出更多车而生的全部技术',
    lead: '15 款相互集成的产品,覆盖经销店完整销售周期:发布、库存、潜客获取、客户服务、AI 与报告。',
    viewProduct: '查看',
    comingSoon: '即将推出',
  },
}

function mergeWithFallback(
  doc: Partial<ServicesListingCopy> | null | undefined,
  fallback: ServicesListingCopy,
): ServicesListingCopy {
  if (!doc) return fallback
  const out = { ...fallback }
  for (const k of Object.keys(fallback) as (keyof ServicesListingCopy)[]) {
    const v = doc[k]
    if (typeof v === 'string' && v.trim().length > 0) out[k] = v
  }
  return out
}

export const getServicesListingCopy = cache(
  async (locale: ServicesListingLocale = 'es'): Promise<ServicesListingCopy> => {
    const fallback = STATIC_SERVICES_LISTING[locale] ?? STATIC_SERVICES_LISTING.es
    try {
      const { getPayloadClient } = await import('@/lib/payload')
      const payload = await getPayloadClient()
      const doc = (await payload.findGlobal({
        slug: 'services-listing-page' as any,
        locale: locale as any,
        depth: 0,
      })) as Partial<ServicesListingCopy> | null
      return mergeWithFallback(doc, fallback)
    } catch {
      return fallback
    }
  },
)

export function getServicesListingCopyStatic(locale: ServicesListingLocale = 'es'): ServicesListingCopy {
  return STATIC_SERVICES_LISTING[locale] ?? STATIC_SERVICES_LISTING.es
}
