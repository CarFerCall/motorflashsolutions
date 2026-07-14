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

// Las 8 áreas (aka "hubs") ahora tienen nombres pensados para que
// entienda un no-técnico. Cada locale mantiene su propia lista para
// traducir tanto los rótulos como las herramientas genéricas (marcas
// como Coches.net o Keyloop se dejan igual — son nombres propios).

const HUBS_ES: EcosystemHubCopy[] = [
  { key: 'dms', name: 'Los coches del concesionario', shortLabel: 'Coches en stock', icon: 'inventory_2', integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'] },
  { key: 'sites', name: 'Portales donde se anuncian los coches', shortLabel: 'Portales', icon: 'language', integrations: ['Motorflash.com', 'Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', 'Web de la marca', 'Web del concesionario'] },
  { key: 'crm', name: 'Clientes y postventa', shortLabel: 'Clientes', icon: 'hub', integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'] },
  { key: 'nsc', name: 'Marcas oficiales (Audi, VW…)', shortLabel: 'Marcas', icon: 'factory', integrations: ['Info VIN', 'Imágenes', 'Campañas'] },
  { key: 'logistics', name: 'Transporte del coche', shortLabel: 'Transporte', icon: 'local_shipping', integrations: ['Aduanas', 'Papeles para poder circular', 'Logística', 'Almacenaje', 'Transporte', 'ITV', 'Impuesto al matricular'] },
  { key: 'finance', name: 'Bancos y financiación', shortLabel: 'Financiación', icon: 'account_balance', integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'] },
  { key: 'admin', name: 'Papeleo y facturas', shortLabel: 'Papeleo', icon: 'gavel', integrations: ['Facturación del concesionario', 'Documentación', 'Mandato'] },
  { key: 'data', name: 'Datos oficiales del sector', shortLabel: 'Datos', icon: 'database', integrations: ['JATO', 'Autovista', 'Info oficial de las marcas', 'Carfax', 'Autoinfo', 'DGT (Tráfico)'] },
]

const HUBS_CA: EcosystemHubCopy[] = [
  { key: 'dms', name: 'Els cotxes del concessionari', shortLabel: 'Cotxes en estoc', icon: 'inventory_2', integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'] },
  { key: 'sites', name: "Portals on s'anuncien els cotxes", shortLabel: 'Portals', icon: 'language', integrations: ['Motorflash.com', 'Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', 'Web de la marca', 'Web del concessionari'] },
  { key: 'crm', name: 'Clients i postvenda', shortLabel: 'Clients', icon: 'hub', integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'] },
  { key: 'nsc', name: 'Marques oficials (Audi, VW…)', shortLabel: 'Marques', icon: 'factory', integrations: ['Info VIN', 'Imatges', 'Campanyes'] },
  { key: 'logistics', name: 'Transport del cotxe', shortLabel: 'Transport', icon: 'local_shipping', integrations: ['Duanes', 'Papers per poder circular', 'Logística', 'Emmagatzematge', 'Transport', 'ITV', 'Impost en matricular'] },
  { key: 'finance', name: 'Bancs i finançament', shortLabel: 'Finançament', icon: 'account_balance', integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'] },
  { key: 'admin', name: 'Papers i factures', shortLabel: 'Papers', icon: 'gavel', integrations: ['Facturació del concessionari', 'Documentació', 'Mandat'] },
  { key: 'data', name: 'Dades oficials del sector', shortLabel: 'Dades', icon: 'database', integrations: ['JATO', 'Autovista', 'Info oficial de les marques', 'Carfax', 'Autoinfo', 'DGT (Trànsit)'] },
]

const HUBS_EN: EcosystemHubCopy[] = [
  { key: 'dms', name: "The dealership's cars", shortLabel: 'Cars in stock', icon: 'inventory_2', integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'] },
  { key: 'sites', name: 'Portals where cars are listed', shortLabel: 'Portals', icon: 'language', integrations: ['Motorflash.com', 'Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', 'Brand website', 'Dealer website'] },
  { key: 'crm', name: 'Customers and after-sales', shortLabel: 'Customers', icon: 'hub', integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'] },
  { key: 'nsc', name: 'Official brands (Audi, VW…)', shortLabel: 'Brands', icon: 'factory', integrations: ['VIN info', 'Images', 'Campaigns'] },
  { key: 'logistics', name: 'Car transport', shortLabel: 'Transport', icon: 'local_shipping', integrations: ['Customs', 'Road-ready paperwork', 'Logistics', 'Storage', 'Transport', 'ITV', 'Registration tax'] },
  { key: 'finance', name: 'Banks and financing', shortLabel: 'Financing', icon: 'account_balance', integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'] },
  { key: 'admin', name: 'Paperwork and invoices', shortLabel: 'Paperwork', icon: 'gavel', integrations: ['Dealer billing', 'Documentation', 'Mandate'] },
  { key: 'data', name: 'Official industry data', shortLabel: 'Data', icon: 'database', integrations: ['JATO', 'Autovista', 'Official brand info', 'Carfax', 'Autoinfo', 'DGT (Traffic authority)'] },
]

const HUBS_ZH: EcosystemHubCopy[] = [
  { key: 'dms', name: '经销店的车辆', shortLabel: '在售库存', icon: 'inventory_2', integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'] },
  { key: 'sites', name: '发布车辆的门户网站', shortLabel: '门户', icon: 'language', integrations: ['Motorflash.com', 'Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', '品牌官网', '经销店官网'] },
  { key: 'crm', name: '客户与售后', shortLabel: '客户', icon: 'hub', integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'] },
  { key: 'nsc', name: '官方品牌(Audi、VW…)', shortLabel: '品牌', icon: 'factory', integrations: ['VIN 信息', '图片', '活动'] },
  { key: 'logistics', name: '车辆运输', shortLabel: '运输', icon: 'local_shipping', integrations: ['海关', '合法上路手续', '物流', '仓储', '运输', 'ITV', '登记税'] },
  { key: 'finance', name: '银行与融资', shortLabel: '融资', icon: 'account_balance', integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'] },
  { key: 'admin', name: '文书与发票', shortLabel: '文书', icon: 'gavel', integrations: ['经销店开票', '文档', '授权'] },
  { key: 'data', name: '行业官方数据', shortLabel: '数据', icon: 'database', integrations: ['JATO', 'Autovista', '品牌官方信息', 'Carfax', 'Autoinfo', 'DGT(交通局)'] },
]

export const STATIC_ECOSYSTEM: Record<EcosystemLocale, EcosystemCopy> = {
  es: {
    metaTitle: 'Ecosistema técnico',
    metaDescription:
      'Un concesionario usa muchas herramientas: el programa donde apunta sus coches, los portales donde los anuncia, los clientes, los bancos, el transporte, la ITV… Motorflash es el punto donde todas se conectan entre sí.',
    metaOg:
      'Motorflash conecta las 8 áreas de un concesionario en un solo sitio: coches, portales, clientes, marcas, transporte, financiación, papeleo y datos del sector.',
    eyebrow: 'Cómo funcionamos por dentro',
    title1: 'Motorflash es',
    title2: 'el punto donde todo se junta para vender coches',
    intro:
      'Un concesionario usa muchas herramientas al día: una para apuntar sus coches, otra para anunciarlos, otra para sus clientes, otra para hablar con los bancos, con el transporte, con la ITV… y ninguna se habla con las demás. Motorflash es como una centralita: te conectas a nosotros una sola vez y todas esas herramientas empiezan a entenderse entre sí.',
    kpiHubs: 'Áreas conectadas',
    kpiIntegrations: 'Herramientas ya enchufadas',
    kpiEntry: 'Una sola conexión',
    hubsHint: 'Pulsa en cada área para ver con qué herramientas hablamos.',
    hubsHintMobile: 'Toca cada área para ver sus herramientas.',
    fullListEyebrow: 'Lista completa',
    fullListTitle: 'Todas las herramientas, agrupadas por área',
    fullListLead:
      'Llevan años funcionando con nuestros clientes. Si tú usas alguna que no ves aquí, la añadimos.',
    integrationsLabel: 'herramientas',
    ctaTitle: '¿Tu herramienta no está en la lista?',
    ctaLead:
      'Tenemos un equipo dedicado a conectar herramientas nuevas. Si trabajas con un programa que no ves aquí, lo enchufamos a Motorflash y empieza a funcionar contigo.',
    ctaButton: 'Hablar con el equipo',
    hubs: HUBS_ES,
  },
  ca: {
    metaTitle: 'Ecosistema tècnic',
    metaDescription:
      "Un concessionari fa servir moltes eines: el programa on apunta els cotxes, els portals on els anuncia, els clients, els bancs, el transport, la ITV… Motorflash és el punt on totes es connecten entre si.",
    metaOg:
      "Motorflash connecta les 8 àrees d'un concessionari en un sol lloc: cotxes, portals, clients, marques, transport, finançament, paperassa i dades del sector.",
    eyebrow: 'Com funcionem per dins',
    title1: 'Motorflash és',
    title2: 'el punt on tot es connecta per vendre cotxes',
    intro:
      "Un concessionari fa servir moltes eines al dia: una per apuntar els cotxes, una altra per anunciar-los, una altra per als clients, una altra per parlar amb els bancs, amb el transport, amb la ITV… i cap parla amb les altres. Motorflash és com una centraleta: et connectes a nosaltres una sola vegada i totes aquestes eines comencen a entendre's entre si.",
    kpiHubs: 'Àrees connectades',
    kpiIntegrations: 'Eines ja connectades',
    kpiEntry: 'Una sola connexió',
    hubsHint: 'Prem cada àrea per veure amb quines eines parlem.',
    hubsHintMobile: 'Toca cada àrea per veure les seves eines.',
    fullListEyebrow: 'Llista completa',
    fullListTitle: 'Totes les eines, agrupades per àrea',
    fullListLead:
      "Porten anys funcionant amb els nostres clients. Si en fas servir alguna que no hi és, l'afegim.",
    integrationsLabel: 'eines',
    ctaTitle: 'La teva eina no és a la llista?',
    ctaLead:
      "Tenim un equip dedicat a connectar eines noves. Si treballes amb un programa que no hi és, l'endollem a Motorflash i comença a funcionar amb tu.",
    ctaButton: "Parlar amb l'equip",
    hubs: HUBS_CA,
  },
  en: {
    metaTitle: 'Tech ecosystem',
    metaDescription:
      'A dealership uses many tools: the program to log their cars, the portals to advertise them, the customers, the banks, the transport, the MOT/ITV… Motorflash is the point where they all connect to each other.',
    metaOg:
      'Motorflash connects the 8 areas of a dealership in one place: cars, portals, customers, brands, transport, financing, paperwork and industry data.',
    eyebrow: 'How we work under the hood',
    title1: 'Motorflash is',
    title2: 'the point where everything connects to sell cars',
    intro:
      "A dealership uses many tools every day: one to log their cars, another to advertise them, another for customers, another to talk to banks, transport, MOT/ITV… and none of them talks to the others. Motorflash is like a switchboard: you connect to us once and all those tools start talking to each other.",
    kpiHubs: 'Connected areas',
    kpiIntegrations: 'Tools already plugged in',
    kpiEntry: 'One single connection',
    hubsHint: 'Click each area to see which tools we talk to.',
    hubsHintMobile: 'Tap each area to see its tools.',
    fullListEyebrow: 'Full list',
    fullListTitle: 'Every tool, grouped by area',
    fullListLead:
      "They've been running with our clients for years. If you use one that's not here, we'll add it.",
    integrationsLabel: 'tools',
    ctaTitle: 'Your tool not in the list?',
    ctaLead:
      "We have a dedicated team to connect new tools. If you work with a program that's not here, we plug it into Motorflash and it starts working with you.",
    ctaButton: 'Talk to the team',
    hubs: HUBS_EN,
  },
  zh: {
    metaTitle: '技术生态',
    metaDescription:
      '一家经销店每天使用许多工具:登记车辆的程序、发布车辆的门户网站、客户系统、银行、运输、ITV(车辆检验)……Motorflash 是让这些工具彼此连接的枢纽。',
    metaOg:
      'Motorflash 在一处连接经销店的 8 大领域:车辆、门户、客户、品牌、运输、融资、文书和行业数据。',
    eyebrow: '我们的内在运作',
    title1: 'Motorflash 是',
    title2: '让一切串起来卖车的枢纽',
    intro:
      '一家经销店每天使用许多工具:一个用来登记车辆,一个用来发布车辆,一个用来管理客户,还要与银行、运输公司、ITV 沟通……而它们互相不能对话。Motorflash 就像一个总机:您只需接入我们一次,所有这些工具就开始互相理解。',
    kpiHubs: '连接的领域',
    kpiIntegrations: '已接入的工具',
    kpiEntry: '一次连接',
    hubsHint: '点击每个领域,查看我们与哪些工具对话。',
    hubsHintMobile: '点击每个领域查看其工具。',
    fullListEyebrow: '完整列表',
    fullListTitle: '所有工具,按领域分组',
    fullListLead: '这些工具在我们的客户那里已经运行多年。如果您有一款不在列表中,我们会添加。',
    integrationsLabel: '工具',
    ctaTitle: '您的工具不在列表中?',
    ctaLead: '我们有专门的团队负责接入新工具。如果您使用的程序不在这里,我们将其接入 Motorflash,它就能与您协同工作。',
    ctaButton: '与团队沟通',
    hubs: HUBS_ZH,
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
