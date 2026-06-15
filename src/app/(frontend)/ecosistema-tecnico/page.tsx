import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { EcosystemHub, type EcosystemHub as EcosystemHubType } from '@/components/EcosystemHub'

export const metadata = {
  title: 'Ecosistema técnico',
  description:
    'Motorflash es el HUB central que conecta DMS, portales, CRM, NSC, logística, finanzas, admin/legal y bases de datos. +50 integraciones reales en producción con un único punto de entrada.',
  alternates: { canonical: '/ecosistema-tecnico' },
  openGraph: {
    title: 'Ecosistema técnico — Motorflash',
    description:
      'Motorflash como HUB de integración: 8 sub-hubs conectan tu DMS, portales, CRM, financieras, logística y bases de datos del sector.',
    url: '/ecosistema-tecnico',
  },
}

const HUBS: EcosystemHubType[] = [
  {
    key: 'dms',
    name: 'Motorflash DMS Hub',
    shortLabel: 'DMS Hub',
    icon: 'inventory_2',
    integrations: ['Keyloop', 'Autoline', 'Aswin', 'Incadea', 'Pymecar', 'Nextlane', 'Quiter', 'Bee2link', 'Inventario.pro'],
  },
  {
    key: 'sites',
    name: 'Motorflash Sites Hub',
    shortLabel: 'Sites Hub',
    icon: 'language',
    integrations: ['Coches.net', 'Autoscout24', 'Autocasion', 'Wallapop', 'NSC Website', 'Dealer Website'],
  },
  {
    key: 'crm',
    name: 'Motorflash CRM & Aftersales Hub',
    shortLabel: 'CRM Hub',
    icon: 'hub',
    integrations: ['CRM4YOU', 'Salesforce', 'HubSpot'],
  },
  {
    key: 'nsc',
    name: 'Motorflash NSC Hub',
    shortLabel: 'NSC Hub',
    icon: 'factory',
    integrations: ['VIN Info', 'Images', 'Campaigns'],
  },
  {
    key: 'logistics',
    name: 'Motorflash Logistics Hub',
    shortLabel: 'Logistics Hub',
    icon: 'local_shipping',
    integrations: ['Customs', 'Vehicle Homologation', 'Logistics', 'Storage', 'Transport', 'ITV', 'Registration Tax'],
  },
  {
    key: 'finance',
    name: 'Motorflash Finance Hub',
    shortLabel: 'Finance Hub',
    icon: 'account_balance',
    integrations: ['Santander Consumer', 'CaixaBank', 'BBVA', 'NCS Financial Services', 'Sofinco'],
  },
  {
    key: 'admin',
    name: 'Motorflash Admin & Legal Hub',
    shortLabel: 'Admin & Legal',
    icon: 'gavel',
    integrations: ['Dealer Billing', 'Documentation', 'Mandate'],
  },
  {
    key: 'data',
    name: 'Motorflash Databases Hub',
    shortLabel: 'Databases Hub',
    icon: 'database',
    integrations: ['JATO', 'Autovista', 'OEM Database (Motorflash)', 'Carfax', 'Autoinfo', 'Transit Authority (DGT)'],
  },
]

const TOTAL_INTEGRATIONS = HUBS.reduce((acc, h) => acc + h.integrations.length, 0)

export default function EcosistemaTecnicoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255, 128, 0, 0.10), transparent 60%)' }} />
        <div className="mf-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="mf-eyebrow">Ecosistema técnico</span>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                Motorflash es el <span className="text-primary">HUB</span> que conecta todo tu stack de automoción
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant mb-8">
                Un único punto de integración entre tu DMS, los portales, tu CRM, las financieras, la logística, las bases de datos del sector y los procesos administrativos. Tú te enchufas a Motorflash; nosotros nos encargamos del resto.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-md sm:max-w-lg mx-auto">
                {[
                  { v: String(HUBS.length), l: 'Hubs especializados' },
                  { v: `+${TOTAL_INTEGRATIONS}`, l: 'Integraciones reales' },
                  { v: '1', l: 'Punto de entrada' },
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
              <span className="hidden lg:inline">Pulsa cualquier sub-hub para ver sus integraciones reales en producción. Se despliegan dentro del propio diagrama.</span>
              <span className="lg:hidden">Toca cada hub para ver las integraciones que conecta.</span>
            </p>
            <EcosystemHub hubs={HUBS} />
          </Reveal>
        </div>
      </section>

      {/* Lista completa por hub */}
      <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">Lista completa</span>
              <h2 className="text-2xl sm:text-3xl md:text-headline-lg font-semibold mb-3">Cada integración, su hub correspondiente</h2>
              <p className="text-sm md:text-base text-on-surface-variant">Las integraciones llevan años funcionando en producción para nuestros clientes. Si la tuya no está, la añadimos.</p>
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
                      <p className="text-xs text-on-surface-variant m-0 mt-0.5">{h.integrations.length} integraciones</p>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-tight">¿Tu sistema no está en esta lista?</h2>
              <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
                Tenemos un equipo de integraciones dedicado. Si trabajas con un DMS, CRM o portal que no esté aquí, lo añadimos al HUB y empieza a funcionar para ti.
              </p>
              <Link href="/contacto?servicio=integraciones" className="inline-flex items-center gap-2 bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Hablar con el equipo técnico
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
