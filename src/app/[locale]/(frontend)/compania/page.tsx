import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { Reveal } from '@/components/Reveal'
import { HistoryTimeline } from '@/components/HistoryTimeline'
import { getCompanyCopy, getCompanyCopyStatic, type CompanyLocale } from '@/lib/company-content'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

const BC_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BC_COMPANY: Record<SeoLocale, string> = { es: 'La compañía', ca: 'La companyia', en: 'The company', zh: '公司' }

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

export async function generateMetadata() {
  const locale = await resolveLocale()
  const t = getCompanyCopyStatic(locale as CompanyLocale)
  return buildPageMetadata({
    locale,
    path: '/compania',
    title: t.metaTitle,
    description: t.metaDescription,
    ogTitle: `${t.metaTitle} — Motorflash`,
    ogDescription: t.ogDescription,
  })
}

export default async function CompaniaPage() {
  const locale = await resolveLocale()
  const t = await getCompanyCopy(locale as CompanyLocale)

  const path = localizedPath(locale, '/compania')
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`
  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'AboutPage',
      path,
      name: t.metaTitle,
      description: t.metaDescription,
      inLanguage: HREFLANG_MAP[locale],
      breadcrumbId,
    }),
    breadcrumbSchema(
      [
        { name: BC_HOME[locale], url: localizedPath(locale, '/') },
        { name: BC_COMPANY[locale], url: path },
      ],
      breadcrumbId,
    ),
  ])

  const kpis = [
    { v: t.kpiYearsValue, l: t.kpiYears },
    { v: t.kpiClientsValue, l: t.kpiClients },
    { v: t.kpiRevenueValue, l: t.kpiRevenue },
    { v: t.kpiTeamValue, l: t.kpiTeam },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="py-32">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">{t.eyebrow}</span>
              <h1 className="text-4xl md:text-display-lg font-semibold mb-6 leading-tight">{t.title}</h1>
              <p className="text-lg text-on-surface-variant mb-4">{t.intro1}</p>
              <p className="text-base text-on-surface-variant mb-8">{t.intro2}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-primary">
                  {t.ctaContact}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a href="#" className="btn-secondary">{t.ctaWork}</a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/home-expertise.png" alt="Motorflash team" width={720} height={480} className="w-full h-auto" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display text-2xl font-semibold m-0">{t.heroBadgeYears}</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 m-0">{t.heroBadgeLead}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {kpis.map((s, i) => (
              <Reveal key={s.l} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="font-display text-4xl md:text-5xl font-semibold text-primary mb-2">{s.v}</div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">{t.valuesEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.valuesTitle}</h2>
              <p className="text-on-surface-variant mx-auto max-w-3xl">{t.valuesLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={Math.min(300, (i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{v.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                  <p className="text-on-surface-variant m-0">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline 6 hitos */}
      <section className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">{t.historyEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">{t.historyTitle}</h2>
            </div>
          </Reveal>

          <HistoryTimeline items={t.timeline} />
        </div>
      </section>

      {/* Sede */}
      <section className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">{t.hqEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.hqTitle}</h2>
              <p className="text-lg text-on-surface-variant mb-4">
                {t.hqAddress}<br />
                {t.hqAddress2}
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-outline-variant" title={t.isoQualityTitle}>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoQuality}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-outline-variant" title={t.isoSecurityTitle}>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoSecurity}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="text-center">
                <span className="material-symbols-outlined" style={{ fontSize: 200, color: 'var(--primary)', opacity: 0.15 }}>location_on</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
