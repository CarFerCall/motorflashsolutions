/**
 * Textos i18n para la sección "Catálogo en una línea" (nuevo diseño por zonas).
 * No depende del CMS — es contenido estático inline en la home.
 */
export type CatalogZonesLocale = 'es' | 'ca' | 'en' | 'zh'

export interface CatalogZonesCopy {
  eyebrow: string
  title: string
  lead: string
  industrialKicker: string
  industrialSubtitle: string
  industrialLead: string
  publicationKicker: string
  publicationSubtitle: string
  salesKicker: string
  salesSubtitle: string
  apexIntro: string
  apexCta: string
  flowLabel: string
  viewAllCta: string
}

export const CATALOG_ZONES: Record<CatalogZonesLocale, CatalogZonesCopy> = {
  es: {
    eyebrow: 'Catálogo en una línea',
    title: 'Un ecosistema, tres zonas conectadas.',
    lead: 'Desde el fabricante hasta la venta y el seguimiento postventa. Cada producto encaja con el siguiente — sin duplicar datos, sin cambiar de herramienta.',
    industrialKicker: 'Zona industrial',
    industrialSubtitle: 'Origen del vehículo',
    industrialLead: 'Datos oficiales y disponibilidad desde el fabricante.',
    publicationKicker: 'Zona de publicación',
    publicationSubtitle: 'Captación y difusión',
    salesKicker: 'Zona de gestión comercial',
    salesSubtitle: 'Conversión y seguimiento',
    apexIntro: 'Todo lo anterior, integrado y en un único plan',
    apexCta: 'Apex →',
    flowLabel: 'Flujo del ecosistema',
    viewAllCta: 'Ver catálogo completo',
  },
  ca: {
    eyebrow: 'Catàleg en una línia',
    title: 'Un ecosistema, tres zones connectades.',
    lead: 'Des del fabricant fins a la venda i el seguiment postvenda. Cada producte encaixa amb el següent — sense duplicar dades, sense canviar d’eina.',
    industrialKicker: 'Zona industrial',
    industrialSubtitle: 'Origen del vehicle',
    industrialLead: 'Dades oficials i disponibilitat des del fabricant.',
    publicationKicker: 'Zona de publicació',
    publicationSubtitle: 'Captació i difusió',
    salesKicker: 'Zona de gestió comercial',
    salesSubtitle: 'Conversió i seguiment',
    apexIntro: 'Tot l’anterior, integrat i en un únic pla',
    apexCta: 'Apex →',
    flowLabel: 'Flux de l’ecosistema',
    viewAllCta: 'Veure el catàleg complet',
  },
  en: {
    eyebrow: 'The full catalogue in one line',
    title: 'One ecosystem, three connected zones.',
    lead: 'From the manufacturer through publishing and sales all the way to after-sales. Every product plugs into the next — no duplicated data, no tool switching.',
    industrialKicker: 'Industrial zone',
    industrialSubtitle: 'Vehicle origin',
    industrialLead: 'Official data and availability straight from the OEM.',
    publicationKicker: 'Publishing zone',
    publicationSubtitle: 'Reach and exposure',
    salesKicker: 'Commercial zone',
    salesSubtitle: 'Conversion and follow-up',
    apexIntro: 'Everything above, integrated in a single plan',
    apexCta: 'Apex →',
    flowLabel: 'Ecosystem flow',
    viewAllCta: 'View the full catalogue',
  },
  zh: {
    eyebrow: '一条线上的完整目录',
    title: '一个生态,三个相连的区域。',
    lead: '从主机厂到发布、销售,再到售后跟进。每个产品都与下一个衔接 — 数据不重复,工具不切换。',
    industrialKicker: '工业区',
    industrialSubtitle: '车辆来源',
    industrialLead: '来自主机厂的官方数据与库存。',
    publicationKicker: '发布区',
    publicationSubtitle: '曝光与传播',
    salesKicker: '商业管理区',
    salesSubtitle: '转化与跟进',
    apexIntro: '以上全部,整合在一个方案中',
    apexCta: 'Apex →',
    flowLabel: '生态流程',
    viewAllCta: '查看完整目录',
  },
}

/**
 * Mapa de zonas → slugs del catálogo. Sirve para el nuevo diseño de la
 * sección "Catálogo en una línea": cada zona muestra sus productos.
 * Apex NO va en ninguna zona — se enseña aparte, sutilmente, como
 * "todo integrado en un único plan".
 */
export const ZONE_TO_SLUGS = {
  industrial: ['soluciones-fabricantes'] as const,
  publication: [
    'dealer',
    'marketing-digital',
    'spyne',
    'lead-factory',
    'soluciones-web',
  ] as const,
  sales: [
    'contact-center',
    'motorflash-message',
    'crm4you',
    'motorchat',
    'motorflash-connect',
    'ia',
  ] as const,
} as const

export type CatalogZone = keyof typeof ZONE_TO_SLUGS
