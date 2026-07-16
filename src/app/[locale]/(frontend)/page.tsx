import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { ProductCarousel, type ProductCarouselLabels } from '@/components/ProductCarousel'
import { EcosystemZones } from '@/components/EcosystemZones'
import { HomeSectionNav } from '@/components/HomeSectionNav'
import { getHomeCopy, type HomeLocale } from '@/lib/home-content'
import { getProductUiCopy } from '@/lib/product-ui-content'

export default async function HomePage() {
  const locale = ((await getLocale()) as HomeLocale) || 'es'
  const products = orderedProducts(locale)
  const t = await getHomeCopy(locale)
  const productUi = await getProductUiCopy(locale)
  const carouselLabels: ProductCarouselLabels = {
    eyebrow: productUi.carouselEyebrow,
    title: productUi.carouselTitle,
    lead: productUi.carouselLead,
    prevAria: productUi.carouselPrevAria,
    nextAria: productUi.carouselNextAria,
    view: productUi.carouselView,
    viewAll: productUi.carouselViewAll,
  }

  return (
    <>
      {/* Hero */}
      <section id="home-hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20 pb-16">
        <div aria-hidden className="absolute -top-[10%] -right-[10%] w-1/2 h-1/2 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />
        <div aria-hidden className="absolute -bottom-[10%] -left-[10%] w-2/5 h-2/5 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />

        <div className="mf-container relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mf-chip mb-6 mx-auto">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>{t.heroChip}</span>
              </div>
              <h1 className="text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                {t.heroTitle1} <span className="text-primary">{t.heroTitleAccent}</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{t.heroLead}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/servicios" className="btn-primary">
                  {t.heroCtaServices}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/contacto" className="btn-secondary">{t.heroCtaContact}</Link>
                <Link href="/compania#trabaja-con-nosotros" className="btn-secondary">{t.heroCtaWork}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeSectionNav sections={t.navSections} />

      {/* Catálogo por zonas del ecosistema */}
      <section id="catalogo-timeline" className="py-16 md:py-24 bg-white overflow-hidden">
        <Reveal>
          <EcosystemZones />
        </Reveal>
      </section>

      {/* Social proof bar */}
      <section className="py-6 bg-surface-container border-y border-outline-variant">
        <div className="mf-container">
          <Reveal>
            <p className="text-center text-sm md:text-base text-on-surface-variant">
              <strong className="text-on-surface">{t.socialProofDealers}</strong>{t.socialProofMid}<strong className="text-on-surface">{t.socialProofCalls}</strong>{t.socialProofMid2}<strong className="text-on-surface">{t.socialProofCars}</strong>{t.socialProofPost}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sobre Motorflash */}
      <section id="sobre-motorflash" className="py-24">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <span className="mf-eyebrow">{t.aboutEyebrow}</span>
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6 leading-tight">{t.aboutTitle}</h2>
              <p className="text-lg text-on-surface-variant mb-4 leading-relaxed">
                {t.aboutP1Pre}<strong>{t.aboutP1Strong}</strong>{t.aboutP1Post}
              </p>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                {t.aboutP2Pre}<strong>{t.aboutP2Strong}</strong>{t.aboutP2Post}
              </p>
              <Link href="/compania" className="btn-secondary mt-2">
                {t.aboutCta}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: 20, suffix: '+', l: t.aboutStats[0] },
                  { v: 1500, suffix: '+', l: t.aboutStats[1] },
                  { v: 10, suffix: 'M€', l: t.aboutStats[2] },
                  { v: 200, suffix: '+', l: t.aboutStats[3] },
                ].map((s) => (
                  <div key={s.l} className="mf-product-card" style={{ padding: '1.5rem' }}>
                    <div className="font-display text-3xl md:text-4xl font-semibold text-primary mb-1">
                      <AnimatedCounter target={s.v} suffix={s.suffix} />
                    </div>
                    <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qué resolvemos */}
      <section id="que-resolvemos" className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.solveEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.solveTitle}</h2>
              <p className="text-lg text-on-surface-variant">{t.solveLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.solveRows.map((row, i) => (
              <Reveal key={i} delay={Math.min(300, (i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{row.icon}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant m-0 mb-1">{t.solveBefore}</p>
                  <p className="text-base mb-3 line-through" style={{ color: '#9ca3af' }}>{row.before}</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary m-0 mb-1">{t.solveAfter}</p>
                  <p className="text-base font-semibold m-0">{row.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo te ayudamos */}
      <section id="como-te-ayudamos" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.helpEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.helpTitle}</h2>
              <p className="text-on-surface-variant">{t.helpLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {t.helpSteps.map((step, i) => (
              <Reveal key={i} delay={Math.min(300, i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full relative" style={{ minHeight: 280 }}>
                  <div className="absolute top-4 right-4 font-display font-semibold text-primary/10" style={{ fontSize: 80, lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {i + 1}
                  </div>
                  <div className="mf-icon-tile relative z-10">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 relative z-10">{step.t}</h3>
                  <p className="text-on-surface-variant m-0 relative z-10">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados reales */}
      <section id="resultados-reales" className="py-24" style={{ background: 'linear-gradient(135deg, #ff8000 0%, #ff9533 100%)' }}>
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="block text-sm font-semibold uppercase mb-4 tracking-widest" style={{ color: 'rgba(255,255,255,0.85)' }}>{t.resultsEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3 text-white">{t.resultsTitle}</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>{t.resultsLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {t.resultsStats.map((s, i) => (
              <Reveal key={s.l} delay={Math.min(300, i * 100) as 0 | 100 | 200 | 300}>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                  +<AnimatedCounter target={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.9)' }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel productos */}
      <section id="catalogo-productos" className="py-24 overflow-hidden">
        <ProductCarousel products={products} t={carouselLabels} />
      </section>

      {/* Ecosistema técnico teaser */}
      <section id="ecosistema-tecnico-teaser" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #121414 0%, #1f1f1f 100%)' }}>
              <div aria-hidden className="absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,128,0,0.25), transparent 70%)' }} />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 md:p-16">
                <div className="text-white">
                  <span className="inline-flex items-center gap-2 mf-eyebrow !text-primary !mb-3">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hub</span>
                    {t.ecoEyebrowAccent}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                    {t.ecoTitle1} <span className="text-primary">HUB</span> {t.ecoTitle2}
                  </h2>
                  <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>{t.ecoLead}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <span><strong className="text-primary">8</strong> {t.ecoStatHubs}</span>
                    <span className="opacity-30">·</span>
                    <span><strong className="text-primary">+40</strong> {t.ecoStatInt}</span>
                    <span className="opacity-30">·</span>
                    <span><strong className="text-primary">1</strong> {t.ecoStatEntry}</span>
                  </div>
                  <Link href="/ecosistema-tecnico" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                    {t.ecoCta}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative" style={{ width: 280, height: 280 }}>
                    <div
                      className="absolute rounded-full flex items-center justify-center text-white"
                      style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 90, height: 90, background: 'linear-gradient(135deg, #ff8000, #d96f00)', boxShadow: '0 0 0 12px rgba(255,128,0,0.15), 0 12px 32px rgba(255,128,0,0.40)' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 36 }}>hub</span>
                    </div>
                    {['inventory_2', 'language', 'account_balance', 'local_shipping', 'database', 'gavel', 'factory', 'hub'].map((icon, i) => {
                      const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
                      const r = 120
                      return (
                        <div
                          key={i}
                          className="absolute rounded-full bg-white flex items-center justify-center mf-hub-node"
                          style={{ left: `calc(50% + ${r * Math.cos(angle)}px)`, top: `calc(50% + ${r * Math.sin(angle)}px)`, transform: 'translate(-50%, -50%)', width: 44, height: 44, animationDelay: `${i * 0.1}s`, boxShadow: '0 6px 16px rgba(0,0,0,0.25)' }}
                        >
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{icon}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Publicación avanzada — demo por matrícula */}
      <section id="publicacion-avanzada-teaser" className="py-24 bg-white">
        <div className="mf-container">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-outline-variant shadow-xl bg-white">
              <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(255,128,0,0.15), transparent 65%)' }} />
              <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(255,128,0,0.10), transparent 65%)' }} />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 md:p-14">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 text-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-5">
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>workspace_premium</span>
                    {t.pubAv.eyebrow}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                    {t.pubAv.title1} <span className="text-primary">{t.pubAv.titleAccent}</span>
                    {t.pubAv.title2 ? ` ${t.pubAv.title2}` : ''}
                  </h2>
                  <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-7 max-w-lg">{t.pubAv.lead}</p>
                  <ul className="space-y-2.5 mb-8">
                    {t.pubAv.checks.map((c) => (
                      <li key={c} className="flex gap-2 items-start text-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0" style={{ fontSize: 18 }}>check_circle</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link href="/publicacion-avanzada" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/30">
                    {t.pubAv.cta}
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </Link>
                </div>

                {/* Mock de resultado */}
                <div className="hidden lg:block">
                  <div className="relative rounded-2xl border border-outline-variant bg-white shadow-2xl p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="inline-flex items-stretch bg-[#003399] text-white rounded-lg overflow-hidden border-2 border-[#001a6e]">
                        <div className="flex flex-col items-center justify-center px-2 border-r border-white/30 py-2">
                          <span className="text-[7px] font-black text-[#FFD700] leading-none">★★★</span>
                          <span className="text-[8px] font-black text-[#FFD700] mt-1 leading-none">ES</span>
                        </div>
                        <span className="text-lg font-black tracking-[3px] px-4 py-2 self-center">6784·KBX</span>
                      </div>
                      <span className="rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-widest border" style={{ background: '#d1fae5', color: '#059669', borderColor: '#a7f3d0' }}>CERO</span>
                    </div>
                    <p className="text-xl font-bold leading-tight mb-1">Audi A7 Sportback</p>
                    <p className="text-sm text-on-surface-variant mb-4">55 TFSIe 270 kW quattro S tronic</p>
                    <div className="grid grid-cols-3 gap-3 border-y border-outline-variant py-4 mb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Comb.</p>
                        <p className="text-sm font-semibold">Híbrido</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Potencia</p>
                        <p className="text-sm font-semibold text-primary">270 kW · 367 CV</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Matr.</p>
                        <p className="text-sm font-semibold">14/03/2021</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">{t.pubAv.mockExtrasLabel}</p>
                    <div className="space-y-1.5">
                      {[
                        { code: 'CF6', desc: 'Llantas Audi Sport 9J x 20 titanio mate', precio: '1.939,99 €' },
                        { code: 'PCC', desc: 'Paquete asistentes Tour', precio: '2.350,50 €' },
                        { code: '1BL', desc: 'Suspensión regulable damper control', precio: '834,26 €' },
                      ].map((e) => (
                        <div key={e.code} className="flex items-center gap-3 text-xs">
                          <span className="inline-block bg-surface-container-low text-primary font-bold text-[10px] px-1.5 py-0.5 rounded tracking-wider flex-shrink-0">{e.code}</span>
                          <span className="flex-1 text-on-surface truncate">{e.desc}</span>
                          <span className="font-bold whitespace-nowrap">{e.precio}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-outline-variant mt-4 pt-3 flex justify-between items-baseline">
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.pubAv.mockTotalLabel}</span>
                      <span className="text-lg font-black text-primary">96.749,66 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Para quién */}
      <section id="para-quien" className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.audiencesEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">{t.audiencesTitle}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.audiences.map((s, i) => (
              <Reveal key={s.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary mb-3" style={{ background: 'rgba(255, 128, 0, 0.1)', padding: '4px 10px', borderRadius: 999 }}>
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-on-surface-variant m-0">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">{t.testimonialsEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">{t.testimonialsTitle}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((it, i) => (
              <Reveal key={i} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full flex flex-col">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: 36, opacity: 0.4 }}>format_quote</span>
                  <p className="text-base mb-6 flex-grow italic">&ldquo;{it.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold m-0">{it.name}</p>
                    <p className="text-xs text-on-surface-variant m-0">{it.where}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-xs text-on-surface-variant mt-6 italic">
            {t.testimonialsNda} <Link href="/historias-de-exito" className="underline">{t.testimonialsLink}</Link>
          </p>
        </div>
      </section>

      {/* Nuestra historia teaser */}
      <section id="nuestra-historia" className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">{t.historyEyebrow}</span>
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6">{t.historyTitle}</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">{t.historyLead}</p>
              <Link href="/compania" className="btn-secondary">
                {t.historyCta}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/home-expertise.png" alt="Motorflash team" width={720} height={480} className="w-full h-auto" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display text-2xl font-semibold m-0">{t.historyBadgeYears}</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 m-0">{t.historyBadgeLead}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto-cta" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl" style={{ background: '#121414' }}>
              <div className="p-12 md:p-20 text-center">
                <h2 className="text-3xl md:text-display-lg font-semibold mb-6 text-white">{t.ctaTitle}</h2>
                <p className="mb-10 mx-auto text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>{t.ctaLead}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contacto" className="btn-primary">
                    {t.ctaPrimary}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+34910788575"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:bg-white/10"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <span className="material-symbols-outlined">call</span>
                    +34 910 788 575
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
