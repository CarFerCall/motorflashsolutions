import { cache } from 'react'

export type ProductUiLocale = 'es' | 'ca' | 'en' | 'zh'

export interface MultiStat {
  v: string
  l: string
}

export interface ProductUiCopy {
  // Carrusel de productos (home — componente ProductCarousel).
  carouselEyebrow: string
  carouselTitle: string
  carouselLead: string
  carouselPrevAria: string
  carouselNextAria: string
  carouselView: string
  carouselViewAll: string
  // Animación del multipublicador (componente MultipublicadorAnimation).
  multiAriaLabel: string
  multiEyebrow: string
  multiTitle: string
  multiLead: string
  multiHubName: string
  multiHubSubline: string
  multiSendsTo: string
  multiStats: MultiStat[]
  // Plantilla genérica de página de producto (componente GenericProductPage).
  breadcrumbHome: string
  breadcrumbServices: string
  ctaInfo: string
  ctaViewAll: string
  comingSoonChip: string
  comingSoonTitle: string
  comingSoonLead: string
  comingSoonCta: string
  featuresEyebrow: string
  highlightsEyebrow: string
  processEyebrow: string
  ctaEyebrow: string
  ctaRequest: string
  othersEyebrow: string
  othersTitle: string
}

export const STATIC_PRODUCT_UI: Record<ProductUiLocale, ProductUiCopy> = {
  es: {
    carouselEyebrow: 'Catálogo completo',
    carouselTitle: '15 productos que se combinan a tu medida',
    carouselLead: 'Pasa por todos los productos con las flechas o desliza para ver más.',
    carouselPrevAria: 'Productos anteriores',
    carouselNextAria: 'Productos siguientes',
    carouselView: 'Ver',
    carouselViewAll: 'Ver catálogo completo',
    multiAriaLabel: 'Cómo Motorflash publica tu stock en los portales',
    multiEyebrow: 'Cómo funciona',
    multiTitle: 'Un solo clic. Tu coche en cada portal.',
    multiLead: 'Subes el vehículo una vez a Motorflash y replicamos su anuncio en tiempo real a Coches.net, AutoScout24, Wallapop y el resto de portales del sector.',
    multiHubName: 'MOTORFLASH',
    multiHubSubline: 'Publica · 1 clic',
    multiSendsTo: 'Envía a',
    multiStats: [
      { v: '+50', l: 'Portales conectados' },
      { v: '99 %', l: 'Integración por API' },
      { v: '<5 min', l: 'Hasta publicar' },
      { v: '24/7', l: 'Sincronización automática' },
    ],
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
    ctaInfo: 'Solicitar información',
    ctaViewAll: 'Ver todos los servicios',
    comingSoonChip: 'Próximamente',
    comingSoonTitle: 'Estamos preparando el detalle de este servicio',
    comingSoonLead: 'Mientras tanto, si quieres conocerlo en profundidad, contacta con nuestro equipo comercial y te lo presentamos en persona.',
    comingSoonCta: 'Hablar con un especialista',
    featuresEyebrow: 'Funcionalidades',
    highlightsEyebrow: 'En profundidad',
    processEyebrow: 'El proceso',
    ctaEyebrow: '¿Empezamos?',
    ctaRequest: 'Solicitar',
    othersEyebrow: 'Otros servicios',
    othersTitle: 'Combínalo con el resto del ecosistema Motorflash',
  },
  ca: {
    carouselEyebrow: 'Catàleg complet',
    carouselTitle: '15 productes que es combinen a la teva mida',
    carouselLead: "Passa per tots els productes amb les fletxes o llisca per veure'n més.",
    carouselPrevAria: 'Productes anteriors',
    carouselNextAria: 'Productes següents',
    carouselView: 'Veure',
    carouselViewAll: 'Veure el catàleg complet',
    multiAriaLabel: 'Com Motorflash publica el teu estoc als portals',
    multiEyebrow: 'Com funciona',
    multiTitle: 'Un sol clic. El teu cotxe a cada portal.',
    multiLead: 'Puges el vehicle un cop a Motorflash i repliquem el seu anunci en temps real a Coches.net, AutoScout24, Wallapop i la resta de portals del sector.',
    multiHubName: 'MOTORFLASH',
    multiHubSubline: 'Publica · 1 clic',
    multiSendsTo: 'Envia a',
    multiStats: [
      { v: '+50', l: 'Portals connectats' },
      { v: '99 %', l: 'Integració per API' },
      { v: '<5 min', l: 'Fins a publicar' },
      { v: '24/7', l: 'Sincronització automàtica' },
    ],
    breadcrumbHome: 'Inici',
    breadcrumbServices: 'Serveis',
    ctaInfo: 'Sol·licitar informació',
    ctaViewAll: 'Veure tots els serveis',
    comingSoonChip: 'Properament',
    comingSoonTitle: "Estem preparant el detall d'aquest servei",
    comingSoonLead: "Mentrestant, si vols conèixer-lo a fons, contacta amb el nostre equip comercial i te'l presentem en persona.",
    comingSoonCta: 'Parlar amb un especialista',
    featuresEyebrow: 'Funcionalitats',
    highlightsEyebrow: 'En profunditat',
    processEyebrow: 'El procés',
    ctaEyebrow: 'Comencem?',
    ctaRequest: 'Sol·licitar',
    othersEyebrow: 'Altres serveis',
    othersTitle: "Combina'l amb la resta de l'ecosistema Motorflash",
  },
  en: {
    carouselEyebrow: 'Full catalogue',
    carouselTitle: '15 products that combine to fit you',
    carouselLead: 'Cycle through every product with the arrows or swipe to see more.',
    carouselPrevAria: 'Previous products',
    carouselNextAria: 'Next products',
    carouselView: 'See',
    carouselViewAll: 'View full catalogue',
    multiAriaLabel: 'How Motorflash publishes your stock on portals',
    multiEyebrow: 'How it works',
    multiTitle: 'One click. Your car on every portal.',
    multiLead: 'Upload the vehicle once to Motorflash and we replicate its listing in real time to Coches.net, AutoScout24, Wallapop and the rest of the sector portals.',
    multiHubName: 'MOTORFLASH',
    multiHubSubline: 'Publish · 1 click',
    multiSendsTo: 'Sends to',
    multiStats: [
      { v: '+50', l: 'Connected portals' },
      { v: '99 %', l: 'API integration' },
      { v: '<5 min', l: 'To publication' },
      { v: '24/7', l: 'Automatic sync' },
    ],
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    ctaInfo: 'Request information',
    ctaViewAll: 'View all services',
    comingSoonChip: 'Coming soon',
    comingSoonTitle: "We're preparing the details of this service",
    comingSoonLead: 'In the meantime, if you want to get to know it in depth, contact our sales team and we will introduce it to you in person.',
    comingSoonCta: 'Talk to a specialist',
    featuresEyebrow: 'Features',
    highlightsEyebrow: 'In depth',
    processEyebrow: 'The process',
    ctaEyebrow: 'Shall we start?',
    ctaRequest: 'Request',
    othersEyebrow: 'Other services',
    othersTitle: 'Combine it with the rest of the Motorflash ecosystem',
  },
  zh: {
    carouselEyebrow: '完整目录',
    carouselTitle: '可按需组合的 15 款产品',
    carouselLead: '用方向键浏览所有产品,或滑动查看更多。',
    carouselPrevAria: '上一批产品',
    carouselNextAria: '下一批产品',
    carouselView: '查看',
    carouselViewAll: '查看完整目录',
    multiAriaLabel: 'Motorflash 如何将您的库存发布到门户',
    multiEyebrow: '如何运作',
    multiTitle: '一键发布。您的车辆上线到每个门户。',
    multiLead: '车辆只需上传一次到 Motorflash,我们便会实时同步广告到 Coches.net、AutoScout24、Wallapop 及行业其他门户。',
    multiHubName: 'MOTORFLASH',
    multiHubSubline: '发布 · 一键',
    multiSendsTo: '发送至',
    multiStats: [
      { v: '+50', l: '已对接门户' },
      { v: '99 %', l: 'API 集成' },
      { v: '<5 分钟', l: '至发布' },
      { v: '24/7', l: '自动同步' },
    ],
    breadcrumbHome: '首页',
    breadcrumbServices: '服务',
    ctaInfo: '申请资料',
    ctaViewAll: '查看所有服务',
    comingSoonChip: '即将推出',
    comingSoonTitle: '我们正在准备此服务的详情',
    comingSoonLead: '在此期间,如果您想深入了解,请联系我们的销售团队,我们将亲自为您介绍。',
    comingSoonCta: '与专家沟通',
    featuresEyebrow: '功能',
    highlightsEyebrow: '深入了解',
    processEyebrow: '流程',
    ctaEyebrow: '开始吧?',
    ctaRequest: '申请',
    othersEyebrow: '其他服务',
    othersTitle: '与 Motorflash 生态的其他模块组合使用',
  },
}

function isFilled(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

function mergeWithFallback(doc: any, fallback: ProductUiCopy): ProductUiCopy {
  if (!doc) return fallback
  const out: ProductUiCopy = { ...fallback }
  const scalarKeys: (keyof ProductUiCopy)[] = [
    'carouselEyebrow', 'carouselTitle', 'carouselLead', 'carouselPrevAria', 'carouselNextAria', 'carouselView', 'carouselViewAll',
    'multiAriaLabel', 'multiEyebrow', 'multiTitle', 'multiLead', 'multiHubName', 'multiHubSubline', 'multiSendsTo',
    'breadcrumbHome', 'breadcrumbServices', 'ctaInfo', 'ctaViewAll',
    'comingSoonChip', 'comingSoonTitle', 'comingSoonLead', 'comingSoonCta',
    'featuresEyebrow', 'highlightsEyebrow', 'processEyebrow', 'ctaEyebrow', 'ctaRequest', 'othersEyebrow', 'othersTitle',
  ]
  for (const k of scalarKeys) {
    const v = doc[k]
    if (isFilled(v)) (out[k] as string) = v
  }
  if (Array.isArray(doc.multiStats) && doc.multiStats.length > 0) {
    out.multiStats = doc.multiStats.map((s: any) => ({
      v: isFilled(s?.v) ? s.v : '',
      l: isFilled(s?.l) ? s.l : '',
    }))
  }
  return out
}

export const getProductUiCopy = cache(async (locale: ProductUiLocale = 'es'): Promise<ProductUiCopy> => {
  const fallback = STATIC_PRODUCT_UI[locale] ?? STATIC_PRODUCT_UI.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'product-ui' as any,
      locale: locale as any,
      depth: 0,
    })
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})

export function getProductUiCopyStatic(locale: ProductUiLocale = 'es'): ProductUiCopy {
  return STATIC_PRODUCT_UI[locale] ?? STATIC_PRODUCT_UI.es
}
