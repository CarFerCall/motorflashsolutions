import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { Reveal } from '@/components/Reveal'
import { EcosystemHub, type EcosystemHub as EcosystemHubType } from '@/components/EcosystemHub'
import {
  getEcosystemCopy,
  getEcosystemCopyStatic,
  type EcosystemLocale,
} from '@/lib/ecosystem-content'

export async function generateMetadata() {
  const locale = ((await getLocale()) as EcosystemLocale) || 'es'
  const t = getEcosystemCopyStatic(locale)
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
  const locale = ((await getLocale()) as EcosystemLocale) || 'es'
  const t = await getEcosystemCopy(locale)
  const HUBS: EcosystemHubType[] = t.hubs
  const TOTAL_INTEGRATIONS = HUBS.reduce((acc, h) => acc + h.integrations.length, 0)

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
