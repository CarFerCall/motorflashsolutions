import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { Reveal } from '@/components/Reveal'
import { EcosystemHub, type EcosystemHub as EcosystemHubType } from '@/components/EcosystemHub'

type LocaleKey = 'es' | 'en' | 'zh'

interface PageCopy {
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
}

const COPY: Record<LocaleKey, PageCopy> = {
  es: {
    metaTitle: 'Ecosistema técnico',
    metaDescription: 'Motorflash es el HUB central que conecta DMS, portales, CRM, NSC, logística, finanzas, admin/legal y bases de datos. +50 integraciones reales en producción con un único punto de entrada.',
    metaOg: 'Motorflash como HUB de integración: 8 sub-hubs conectan tu DMS, portales, CRM, financieras, logística y bases de datos del sector.',
    eyebrow: 'Ecosistema técnico',
    title1: 'Motorflash es el',
    title2: 'que conecta todo tu stack de automoción',
    intro: 'Un único punto de integración entre tu DMS, los portales, tu CRM, las financieras, la logística, las bases de datos del sector y los procesos administrativos. Tú te enchufas a Motorflash; nosotros nos encargamos del resto.',
    kpiHubs: 'Hubs especializados',
    kpiIntegrations: 'Integraciones reales',
    kpiEntry: 'Punto de entrada',
    hubsHint: 'Pulsa cualquier sub-hub para ver sus integraciones reales en producción. Se despliegan dentro del propio diagrama.',
    hubsHintMobile: 'Toca cada hub para ver las integraciones que conecta.',
    fullListEyebrow: 'Lista completa',
    fullListTitle: 'Cada integración, su hub correspondiente',
    fullListLead: 'Las integraciones llevan años funcionando en producción para nuestros clientes. Si la tuya no está, la añadimos.',
    integrationsLabel: 'integraciones',
    ctaTitle: '¿Tu sistema no está en esta lista?',
    ctaLead: 'Tenemos un equipo de integraciones dedicado. Si trabajas con un DMS, CRM o portal que no esté aquí, lo añadimos al HUB y empieza a funcionar para ti.',
    ctaButton: 'Hablar con el equipo técnico',
  },
  en: {
    metaTitle: 'Tech ecosystem',
    metaDescription: 'Motorflash is the central HUB connecting DMS, portals, CRM, NSC, logistics, finance, admin/legal and databases. 50+ real integrations live with a single entry point.',
    metaOg: 'Motorflash as an integration HUB: 8 sub-hubs connect your DMS, portals, CRM, lenders, logistics and sector databases.',
    eyebrow: 'Tech ecosystem',
    title1: 'Motorflash is the',
    title2: 'that connects your entire automotive stack',
    intro: 'A single integration point between your DMS, the portals, your CRM, the lenders, logistics, sector databases and admin processes. You plug into Motorflash; we handle the rest.',
    kpiHubs: 'Specialised hubs',
    kpiIntegrations: 'Live integrations',
    kpiEntry: 'Entry point',
    hubsHint: 'Click any sub-hub to see its live integrations. They expand inside the diagram itself.',
    hubsHintMobile: 'Tap each hub to see the integrations it connects.',
    fullListEyebrow: 'Full list',
    fullListTitle: 'Every integration, in its corresponding hub',
    fullListLead: "These integrations have been running in production for our clients for years. If yours isn't here, we add it.",
    integrationsLabel: 'integrations',
    ctaTitle: 'Your system not in the list?',
    ctaLead: "We have a dedicated integrations team. If you work with a DMS, CRM or portal that isn't here, we add it to the HUB and get it running for you.",
    ctaButton: 'Talk to the tech team',
  },
  zh: {
    metaTitle: '技术生态',
    metaDescription: 'Motorflash 是连接 DMS、门户、CRM、NSC、物流、金融、行政/法务与数据库的中央枢纽。50+ 项已上线集成、统一入口。',
    metaOg: 'Motorflash 作为集成枢纽:8 个子枢纽连接您的 DMS、门户、CRM、金融、物流与行业数据库。',
    eyebrow: '技术生态',
    title1: 'Motorflash 是连接您整个汽车技术栈的',
    title2: '',
    intro: '一个集成点,连接您的 DMS、门户、CRM、金融、物流、行业数据库与行政流程。您只需接入 Motorflash,其余我们来负责。',
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
  },
}

const HUBS: EcosystemHubType[] = [
  { key: 'dms', name: 'Motorflash DMS Hub', shortLabel: 'DMS Hub', icon: 'inventory_2', integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'] },
  { key: 'sites', name: 'Motorflash Sites Hub', shortLabel: 'Sites Hub', icon: 'language', integrations: ['Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', 'NSC Website', 'Dealer Website'] },
  { key: 'crm', name: 'Motorflash CRM & Aftersales Hub', shortLabel: 'CRM Hub', icon: 'hub', integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'] },
  { key: 'nsc', name: 'Motorflash NSC Hub', shortLabel: 'NSC Hub', icon: 'factory', integrations: ['VIN Info', 'Images', 'Campaigns'] },
  { key: 'logistics', name: 'Motorflash Logistics Hub', shortLabel: 'Logistics Hub', icon: 'local_shipping', integrations: ['Customs', 'Vehicle Homologation', 'Logistics', 'Storage', 'Transport', 'ITV', 'Registration Tax'] },
  { key: 'finance', name: 'Motorflash Finance Hub', shortLabel: 'Finance Hub', icon: 'account_balance', integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'] },
  { key: 'admin', name: 'Motorflash Admin & Legal Hub', shortLabel: 'Admin & Legal', icon: 'gavel', integrations: ['Dealer Billing', 'Documentation', 'Mandate'] },
  { key: 'data', name: 'Motorflash Databases Hub', shortLabel: 'Databases Hub', icon: 'database', integrations: ['JATO', 'Autovista', 'OEM Database (Motorflash)', 'Carfax', 'Autoinfo', 'Transit Authority (DGT)'] },
]

const TOTAL_INTEGRATIONS = HUBS.reduce((acc, h) => acc + h.integrations.length, 0)

export async function generateMetadata() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/ecosistema-tecnico' },
    openGraph: {
      title: `${t.metaTitle} — Motorflash`,
      description: t.metaOg,
      url: '/ecosistema-tecnico',
    },
  }
}

export default async function EcosistemaTecnicoPage() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255, 128, 0, 0.10), transparent 60%)' }} />
        <div className="mf-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.eyebrow}</span>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                {t.title1} <span className="text-primary">HUB</span> {t.title2}
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant mb-8">{t.intro}</p>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-md sm:max-w-lg mx-auto">
                {[
                  { v: String(HUBS.length), l: t.kpiHubs },
                  { v: `+${TOTAL_INTEGRATIONS}`, l: t.kpiIntegrations },
                  { v: '1', l: t.kpiEntry },
                ].map((s, i) => (
                  <div key={s.l} className={`text-center ${i > 0 ? 'border-l border-outline-variant' : ''}`}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tabular-nums leading-none mb-1">{s.v}</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-on-surface-variant leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Diagrama HUB */}
      <section className="pb-16 md:pb-32">
        <div className="mf-container">
          <Reveal>
            <p className="text-center text-sm text-on-surface-variant mb-8 max-w-xl mx-auto px-2">
              <span className="hidden lg:inline">{t.hubsHint}</span>
              <span className="lg:hidden">{t.hubsHintMobile}</span>
            </p>
            <EcosystemHub hubs={HUBS} />
          </Reveal>
        </div>
      </section>

      {/* Lista completa por hub */}
      <section className="hidden lg:block py-16 md:py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.fullListEyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-headline-lg font-semibold mb-3">{t.fullListTitle}</h2>
              <p className="text-sm md:text-base text-on-surface-variant">{t.fullListLead}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {HUBS.map((h, i) => (
              <Reveal key={h.key} delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}>
                <div className="bg-white border border-outline-variant rounded-2xl md:rounded-3xl p-5 md:p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl">{h.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-semibold m-0 leading-tight">{h.name}</h3>
                      <p className="text-xs text-on-surface-variant m-0 mt-0.5">{h.integrations.length} {t.integrationsLabel}</p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {h.integrations.map((it) => (
                      <li key={it} className="text-xs font-semibold px-2.5 md:px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mf-container">
          <Reveal>
            <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-tight">{t.ctaTitle}</h2>
              <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">{t.ctaLead}</p>
              <Link href="/contacto?servicio=integraciones" className="inline-flex items-center gap-2 bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                {t.ctaButton}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
