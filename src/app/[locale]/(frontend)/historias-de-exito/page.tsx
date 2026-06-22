import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import {
  getSuccessCasesPage,
  getSuccessCasesPageStatic,
  type SuccessCase,
  type SuccessCaseLocale,
} from '@/catalog/success-cases'

export async function generateMetadata() {
  const locale = ((await getLocale()) as SuccessCaseLocale) || 'es'
  // Para metadata usamos el catálogo estático: es síncrono y suficiente
  // mientras el meta no se edite desde el CMS.
  const t = getSuccessCasesPageStatic(locale)
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/historias-de-exito' },
    openGraph: {
      title: `${t.metaTitle} — Motorflash`,
      description: t.metaOg,
      url: '/historias-de-exito',
    },
  }
}

function isNumericStat(v: string) {
  return /^[+\-]?\d+([%]?)$/.test(v)
}

function parseNumericValue(v: string): { num: number; suffix: string } {
  const m = v.match(/^([+\-]?)(\d+)(.*)$/)
  if (!m) return { num: 0, suffix: '' }
  const sign = m[1] === '-' ? -1 : 1
  return { num: sign * parseInt(m[2], 10), suffix: m[3] }
}

export default async function CasosExitoPage() {
  const locale = ((await getLocale()) as SuccessCaseLocale) || 'es'
  const t = await getSuccessCasesPage(locale)

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 70% 100%, rgba(255, 128, 0, 0.10), transparent 60%)' }} />
        <div className="mf-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.heroEyebrow}</span>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                {t.heroTitle1} <span className="text-primary">{t.heroTitle2}</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant mb-8">
                {t.heroLead}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cinta de logos */}
      <section className="py-12 md:py-16 bg-white border-y border-outline-variant">
        <div className="mf-container">
          <Reveal>
            <p className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">
              {t.trustHeading}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center">
              {t.cases.map((c) => (
                <a
                  key={c.slug}
                  href={`#${c.slug}`}
                  className="group flex items-center justify-center px-4 py-6 md:py-8 rounded-2xl border border-outline-variant bg-white hover:shadow-lg transition-all"
                >
                  {c.logo ? (
                    <Image
                      src={c.logo.src}
                      alt={c.logo.alt}
                      width={c.logo.width}
                      height={c.logo.height}
                      className="h-8 md:h-10 w-auto object-contain"
                    />
                  ) : (
                    <span
                      className={`font-display text-xl md:text-2xl leading-none whitespace-nowrap ${c.style.wordmarkClass ?? 'font-bold'}`}
                      style={{ color: c.style.primary }}
                    >
                      {c.wordmark}
                    </span>
                  )}
                </a>
              ))}
              <a
                href="#mas"
                className="group flex items-center justify-center px-3 py-6 md:py-8 rounded-2xl border border-dashed border-outline-variant bg-surface-container-low"
              >
                <span className="font-display text-base md:text-lg font-semibold text-on-surface-variant text-center leading-tight">
                  {t.morePill1}
                  <br />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.morePill2}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Casos */}
      <div className="space-y-0">
        {t.cases.map((c, idx) => (
          <CaseSection key={c.slug} caseItem={c} isAlt={idx % 2 === 1} productsLabel={t.productsLabel} />
        ))}
      </div>

      {/* CTA */}
      <section id="mas" className="py-20 md:py-28">
        <div className="mf-container">
          <Reveal>
            <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-tight">{t.ctaTitle}</h2>
              <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.ctaLead}</p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-primary px-7 md:px-8 py-3 md:py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
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

function CaseSection({ caseItem, isAlt, productsLabel }: { caseItem: SuccessCase; isAlt: boolean; productsLabel: string }) {
  const bgClass = isAlt ? 'bg-surface-container' : 'bg-white'
  const { style } = caseItem
  return (
    <section id={caseItem.slug} className={`py-16 md:py-24 ${bgClass} scroll-mt-20`}>
      <div className="mf-container">
        <Reveal>
          {/* Banner corporativo del cliente con su look & feel */}
          <div className="relative overflow-hidden rounded-3xl mb-8 md:mb-10" style={{ background: style.banner }}>
            <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, white 1px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                {caseItem.logo ? (
                  <div className="inline-flex items-center justify-center bg-white rounded-2xl px-5 py-3 md:px-6 md:py-4 mb-4 shadow-lg">
                    <Image src={caseItem.logo.src} alt={caseItem.logo.alt} width={caseItem.logo.width} height={caseItem.logo.height} className="h-10 md:h-14 w-auto object-contain" priority />
                  </div>
                ) : (
                  <span className={`block font-display text-4xl md:text-6xl leading-none mb-3 text-white ${style.wordmarkClass ?? 'font-bold'}`}>{caseItem.wordmark}</span>
                )}
                <span className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{caseItem.tagline}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: style.primary, boxShadow: `0 0 12px ${style.primary}` }} />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white">{caseItem.badge}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Header del caso */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 ${isAlt ? 'lg:[&>div:first-child]:order-2' : ''}`}>
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">{caseItem.headline}</h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed" dangerouslySetInnerHTML={{ __html: caseItem.introHtml }} />
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {caseItem.stats.map((s, i) => {
                  const delay = (Math.min(3, i) * 100) as 0 | 100 | 200 | 300
                  return (
                    <Reveal key={s.label} delay={delay}>
                      <div className="bg-white rounded-2xl p-4 md:p-5 h-full border-t-4" style={{ borderTopColor: style.primary, borderRight: '1px solid var(--outline-variant)', borderBottom: '1px solid var(--outline-variant)', borderLeft: '1px solid var(--outline-variant)' }}>
                        <div className="font-display text-2xl md:text-3xl font-bold leading-none mb-2 tabular-nums" style={{ color: style.primary }}>
                          {isNumericStat(s.value) ? (
                            <>
                              {parseNumericValue(s.value).num < 0 && '-'}
                              <AnimatedCounter target={Math.abs(parseNumericValue(s.value).num)} suffix={parseNumericValue(s.value).suffix} />
                            </>
                          ) : (
                            s.value
                          )}
                        </div>
                        <div className="text-[11px] md:text-xs font-semibold text-on-surface-variant uppercase tracking-wider leading-tight">{s.label}</div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quote */}
          <Reveal delay={100}>
            <blockquote
              className="rounded-2xl md:rounded-3xl p-6 md:p-8 mb-10 relative overflow-hidden"
              style={
                caseItem.quoteVariant === 'dark'
                  ? { background: style.ink, color: '#fff' }
                  : { background: '#fff', borderLeft: `4px solid ${style.primary}`, border: `1px solid var(--outline-variant)`, borderLeftWidth: 4, borderLeftColor: style.primary }
              }
            >
              <span className="material-symbols-outlined mb-3 block" style={{ fontSize: 28, color: style.primary }}>format_quote</span>
              <p className={`text-lg md:text-xl font-medium leading-relaxed mb-4 ${caseItem.quoteVariant === 'dark' ? 'text-white' : 'text-on-surface'}`}>
                &ldquo;{caseItem.quote}&rdquo;
              </p>
              <footer className={`text-sm font-semibold ${caseItem.quoteVariant === 'dark' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                — {caseItem.author}
              </footer>
            </blockquote>
          </Reveal>

          {/* Ecosistema contratado */}
          <Reveal delay={200}>
            <div className="bg-white border border-outline-variant rounded-2xl md:rounded-3xl p-6 md:p-8">
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: style.primary }}>{productsLabel}</span>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{caseItem.ecosystemTitle}</h3>
                <p className="text-sm md:text-base text-on-surface-variant">{caseItem.ecosystemLead}</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseItem.ecosystemItems.map((it) => (
                  <li key={it} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant">
                    <span className="material-symbols-outlined shrink-0" style={{ fontSize: 22, color: style.primary }}>check_circle</span>
                    <span className="text-sm font-medium">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  )
}
