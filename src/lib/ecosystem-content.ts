import { cache } from 'react'

export type EcosystemLocale = 'es' | 'ca' | 'en' | 'zh'

export interface EcosystemHubCopy {
  key: string
  name: string
  shortLabel: string
  icon: string
  integrations: string[]
}

export interface EcosystemCopy {
  metaTitle: string
  metaDescription: string
  metaOg: string
  eyebrow: string
  title1: string
  title2: string
  intro: string
  kpiHubs: string
  kpiIntegrations: string
  kpiEntry: string
  hubsHint: string
  hubsHintMobile: string
  fullListEyebrow: string
  fullListTitle: string
  fullListLead: string
  integrationsLabel: string
  ctaTitle: string
  ctaLead: string
  ctaButton: string
  hubs: EcosystemHubCopy[]
}

const HUBS_BASE: EcosystemHubCopy[] = [
  { key: 'dms', name: 'Motorflash DMS Hub', shortLabel: 'DMS Hub', icon: 'inventory_2', integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'] },
  { key: 'sites', name: 'Motorflash Sites Hub', shortLabel: 'Sites Hub', icon: 'language', integrations: ['Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', 'NSC Website', 'Dealer Website'] },
  { key: 'crm', name: 'Motorflash CRM & Aftersales Hub', shortLabel: 'CRM Hub', icon: 'hub', integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'] },
  { key: 'nsc', name: 'Motorflash NSC Hub', shortLabel: 'NSC Hub', icon: 'factory', integrations: ['VIN Info', 'Images', 'Campaigns'] },
  { key: 'logistics', name: 'Motorflash Logistics Hub', shortLabel: 'Logistics Hub', icon: 'local_shipping', integrations: ['Customs', 'Vehicle Homologation', 'Logistics', 'Storage', 'Transport', 'ITV', 'Registration Tax'] },
  { key: 'finance', name: 'Motorflash Finance Hub', shortLabel: 'Finance Hub', icon: 'account_balance', integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'] },
  { key: 'admin', name: 'Motorflash Admin & Legal Hub', shortLabel: 'Admin & Legal', icon: 'gavel', integrations: ['Dealer Billing', 'Documentation', 'Mandate'] },
  { key: 'data', name: 'Motorflash Databases Hub', shortLabel: 'Databases Hub', icon: 'database', integrations: ['JATO', 'Autovista', 'OEM Database (Motorflash)', 'Carfax', 'Autoinfo', 'Transit Authority (DGT)'] },
]

export const STATIC_ECOSYSTEM: Record<EcosystemLocale, EcosystemCopy> = {
  es: {
    metaTitle: 'Ecosistema técnico',
    metaDescription:
      'Motorflash es el HUB central que conecta DMS, portales, CRM, NSC, logística, finanzas, admin/legal y bases de datos. +50 integraciones reales en producción con un único punto de entrada.',
    metaOg:
      'Motorflash como HUB de integración: 8 sub-hubs conectan tu DMS, portales, CRM, financieras, logística y bases de datos del sector.',
    eyebrow: 'Ecosistema técnico',
    title1: 'Motorflash es el',
    title2: 'que conecta todo tu stack de automoción',
    intro:
      'Un único punto de integración entre tu DMS, los portales, tu CRM, las financieras, la logística, las bases de datos del sector y los procesos administrativos. Tú te enchufas a Motorflash; nosotros nos encargamos del resto.',
    kpiHubs: 'Hubs especializados',
    kpiIntegrations: 'Integraciones reales',
    kpiEntry: 'Punto de entrada',
    hubsHint:
      'Pulsa cualquier sub-hub para ver sus integraciones reales en producción. Se despliegan dentro del propio diagrama.',
    hubsHintMobile: 'Toca cada hub para ver las integraciones que conecta.',
    fullListEyebrow: 'Lista completa',
    fullListTitle: 'Cada integración, su hub correspondiente',
    fullListLead:
      'Las integraciones llevan años funcionando en producción para nuestros clientes. Si la tuya no está, la añadimos.',
    integrationsLabel: 'integraciones',
    ctaTitle: '¿Tu sistema no está en esta lista?',
    ctaLead:
      'Tenemos un equipo de integraciones dedicado. Si trabajas con un DMS, CRM o portal que no esté aquí, lo añadimos al HUB y empieza a funcionar para ti.',
    ctaButton: 'Hablar con el equipo técnico',
    hubs: HUBS_BASE,
  },
  ca: {
    metaTitle: 'Ecosistema tècnic',
    metaDescription:
      "Motorflash és el HUB central que connecta DMS, portals, CRM, NSC, logística, finances, admin/legal i bases de dades. +50 integracions reals en producció amb un únic punt d'entrada.",
    metaOg:
      "Motorflash com a HUB d'integració: 8 sub-hubs connecten el teu DMS, portals, CRM, financeres, logística i bases de dades del sector.",
    eyebrow: 'Ecosistema tècnic',
    title1: 'Motorflash és el',
    title2: "que connecta tot el teu stack d'automoció",
    intro:
      "Un únic punt d'integració entre el teu DMS, els portals, el teu CRM, les financeres, la logística, les bases de dades del sector i els processos administratius. Tu et connectes a Motorflash; nosaltres ens encarreguem de la resta.",
    kpiHubs: 'Hubs especialitzats',
    kpiIntegrations: 'Integracions reals',
    kpiEntry: "Punt d'entrada",
    hubsHint:
      "Prem qualsevol sub-hub per veure'n les integracions reals en producció. Es despleguen dins del propi diagrama.",
    hubsHintMobile: 'Toca cada hub per veure les integracions que connecta.',
    fullListEyebrow: 'Llista completa',
    fullListTitle: 'Cada integració, el seu hub corresponent',
    fullListLead:
      "Les integracions porten anys funcionant en producció per als nostres clients. Si la teva no hi és, l'afegim.",
    integrationsLabel: 'integracions',
    ctaTitle: 'El teu sistema no és a la llista?',
    ctaLead:
      "Tenim un equip d'integracions dedicat. Si treballes amb un DMS, CRM o portal que no hi sigui, l'afegim al HUB i comença a funcionar per a tu.",
    ctaButton: "Parlar amb l'equip tècnic",
    hubs: HUBS_BASE,
  },
  en: {
    metaTitle: 'Tech ecosystem',
    metaDescription:
      'Motorflash is the central HUB connecting DMS, portals, CRM, NSC, logistics, finance, admin/legal and databases. 50+ real integrations live with a single entry point.',
    metaOg:
      'Motorflash as an integration HUB: 8 sub-hubs connect your DMS, portals, CRM, lenders, logistics and sector databases.',
    eyebrow: 'Tech ecosystem',
    title1: 'Motorflash is the',
    title2: 'that connects your entire automotive stack',
    intro:
      'A single integration point between your DMS, the portals, your CRM, the lenders, logistics, sector databases and admin processes. You plug into Motorflash; we handle the rest.',
    kpiHubs: 'Specialised hubs',
    kpiIntegrations: 'Live integrations',
    kpiEntry: 'Entry point',
    hubsHint:
      'Click any sub-hub to see its live integrations. They expand inside the diagram itself.',
    hubsHintMobile: 'Tap each hub to see the integrations it connects.',
    fullListEyebrow: 'Full list',
    fullListTitle: 'Every integration, in its corresponding hub',
    fullListLead:
      "These integrations have been running in production for our clients for years. If yours isn't here, we add it.",
    integrationsLabel: 'integrations',
    ctaTitle: 'Your system not in the list?',
    ctaLead:
      "We have a dedicated integrations team. If you work with a DMS, CRM or portal that isn't here, we add it to the HUB and get it running for you.",
    ctaButton: 'Talk to the tech team',
    hubs: HUBS_BASE,
  },
  zh: {
    metaTitle: '技术生态',
    metaDescription:
      'Motorflash 是连接 DMS、门户、CRM、NSC、物流、金融、行政/法务与数据库的中央枢纽。50+ 项已上线集成、统一入口。',
    metaOg:
      'Motorflash 作为集成枢纽:8 个子枢纽连接您的 DMS、门户、CRM、金融、物流与行业数据库。',
    eyebrow: '技术生态',
    title1: 'Motorflash 是连接您整个汽车技术栈的',
    title2: '',
    intro:
      '一个集成点,连接您的 DMS、门户、CRM、金融、物流、行业数据库与行政流程。您只需接入 Motorflash,其余我们来负责。',
    kpiHubs: '专业枢纽',
    kpiIntegrations: '已上线集成',
    kpiEntry: '接入点',
    hubsHint: '点击任一子枢纽即可查看其已上线的真实集成,直接在图示中展开。',
    hubsHintMobile: '点击每个枢纽查看其连接的集成。',
    fullListEyebrow: '完整列表',
    fullListTitle: '每项集成,归属其对应枢纽',
    fullListLead: '这些集成已经在我们客户的生产环境中运行多年。如果您所需的不在此列,我们会添加。',
    integrationsLabel: '项集成',
    ctaTitle: '您的系统不在列表中?',
    ctaLead: '我们有专门的集成团队。如果您使用的 DMS、CRM 或门户不在此处,我们会将其加入枢纽并为您运行。',
    ctaButton: '与技术团队沟通',
    hubs: HUBS_BASE,
  },
}

function isFilled(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

function mergeWithFallback(doc: any, fallback: EcosystemCopy): EcosystemCopy {
  if (!doc) return fallback
  const out: EcosystemCopy = { ...fallback }
  // Scalars (title2 puede venir vacío legítimamente — lo dejamos pasar tal cual).
  const scalarKeys: (keyof EcosystemCopy)[] = [
    'metaTitle', 'metaDescription', 'metaOg',
    'eyebrow', 'title1', 'intro',
    'kpiHubs', 'kpiIntegrations', 'kpiEntry',
    'hubsHint', 'hubsHintMobile',
    'fullListEyebrow', 'fullListTitle', 'fullListLead', 'integrationsLabel',
    'ctaTitle', 'ctaLead', 'ctaButton',
  ]
  for (const k of scalarKeys) {
    const v = doc[k]
    if (isFilled(v)) (out[k] as string) = v
  }
  // title2: aceptamos strings vacías porque en zh es legítimamente "".
  if (typeof doc.title2 === 'string') out.title2 = doc.title2

  // Array de hubs: si Payload devuelve algo, mapeamos respetando la forma del frontend.
  if (Array.isArray(doc.hubs) && doc.hubs.length > 0) {
    out.hubs = doc.hubs.map((h: any, i: number) => {
      const fb = fallback.hubs[i] ?? fallback.hubs[0]
      const integrationsRaw = Array.isArray(h?.integrations) ? h.integrations : []
      const integrations: string[] = integrationsRaw
        .map((it: any) => (typeof it === 'string' ? it : isFilled(it?.name) ? it.name : ''))
        .filter((s: string) => s.length > 0)
      return {
        key: isFilled(h?.key) ? h.key : fb?.key ?? '',
        name: isFilled(h?.name) ? h.name : fb?.name ?? '',
        shortLabel: isFilled(h?.shortLabel) ? h.shortLabel : fb?.shortLabel ?? '',
        icon: isFilled(h?.icon) ? h.icon : fb?.icon ?? 'hub',
        integrations: integrations.length > 0 ? integrations : fb?.integrations ?? [],
      }
    })
  }
  return out
}

export const getEcosystemCopy = cache(
  async (locale: EcosystemLocale = 'es'): Promise<EcosystemCopy> => {
    const fallback = STATIC_ECOSYSTEM[locale] ?? STATIC_ECOSYSTEM.es
    try {
      const { getPayloadClient } = await import('@/lib/payload')
      const payload = await getPayloadClient()
      const doc = await payload.findGlobal({
        slug: 'ecosystem-page' as any,
        locale: locale as any,
        depth: 0,
      })
      return mergeWithFallback(doc, fallback)
    } catch {
      return fallback
    }
  },
)

export function getEcosystemCopyStatic(locale: EcosystemLocale = 'es'): EcosystemCopy {
  return STATIC_ECOSYSTEM[locale] ?? STATIC_ECOSYSTEM.es
}
