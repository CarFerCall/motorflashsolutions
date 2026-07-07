import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import type { Product } from '@/catalog/products'
import { productContentBySlug, type ProductContentLocale } from '@/catalog/product-content'
import { orderedProducts } from '@/catalog/products'
import { getProductUiCopy } from '@/lib/product-ui-content'
import { MultipublicadorAnimation } from './MultipublicadorAnimation'

// Productos que muestran una imagen real en el hero en lugar del
// icono de Material Symbols con el tile naranja.
const HERO_IMAGE_BY_SLUG: Record<
  string,
  { src: string; alt: string; width?: number; height?: number; glow?: string }
> = {
  'motorflash-message': { src: '/images/products/whatsapp.webp', alt: 'WhatsApp Business' },
  apex: {
    src: '/images/products/apex-logo.png',
    alt: 'Apex by Motorflash',
    width: 480,
    height: 222,
    glow: 'rgba(37, 63, 138, 0.28)',
  },
}

// Componentes custom que se inyectan justo debajo del hero por
// slug. Permite enriquecer un producto concreto con animaciones o
// demos sin tocar el resto del layout. Los componentes pueden ser
// asíncronos (server components que leen el locale).
const AFTER_HERO_BY_SLUG: Record<string, React.ComponentType<unknown> | (() => Promise<React.ReactElement>)> = {
  dealer: MultipublicadorAnimation,
}

export async function GenericProductPage({ product }: { product: Product }) {
  // Recupera el locale activo del segmento [locale] y selecciona
  // las traducciones del producto. Si el slug aún no tiene EN/ZH
  // traducido, productContentBySlug cae a español automáticamente.
  const locale = ((await getLocale()) as ProductContentLocale) || 'es'
  const t = await getProductUiCopy(locale as any)
  const content = productContentBySlug(product.slug, locale)
  const others = orderedProducts(locale).filter((p) => p.slug !== product.slug).slice(0, 8)
  const heroImage = HERO_IMAGE_BY_SLUG[product.slug]
  const AfterHero = AFTER_HERO_BY_SLUG[product.slug]

  return (
    <>
      {/* Hero */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-[10%] -right-[10%] w-1/2 h-1/2 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />
        <div className="mf-container relative z-10">
          <nav aria-label="breadcrumb" className="mb-6 text-sm text-on-surface-variant">
            <Link href="/" className="hover:text-primary">{t.breadcrumbHome}</Link>
            {' / '}
            <Link href="/servicios" className="hover:text-primary">{t.breadcrumbServices}</Link>
            {' / '}
            <span className="text-on-surface">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="mf-chip mb-6">
                <span className="material-symbols-outlined text-[18px]">{product.icon}</span>
                <span>{product.menuLabel}</span>
              </div>
              <h1 className="text-4xl md:text-display-lg font-semibold leading-tight mb-4">{product.heroTitle}</h1>
              {content?.subtitle && <p className="text-base font-medium text-on-surface-variant mb-4">{content.subtitle}</p>}
              <p className="text-lg text-on-surface-variant mb-8 max-w-2xl">{product.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/contacto?servicio=${product.slug}`} className="btn-primary">
                  {t.ctaInfo}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/servicios" className="btn-secondary">{t.ctaViewAll}</Link>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              {heroImage ? (
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: Math.max(heroImage.width ?? 240, 280),
                    height: Math.max(heroImage.height ?? 240, 280),
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${heroImage.glow ?? 'rgba(37, 211, 102, 0.18)'}, transparent 65%)`,
                    }}
                  />
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width ?? 240}
                    height={heroImage.height ?? 240}
                    priority
                    className="relative drop-shadow-2xl"
                    style={{
                      filter: `drop-shadow(0 24px 48px ${heroImage.glow ?? 'rgba(37, 211, 102, 0.35)'})`,
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              ) : (
                <div className="mf-icon-tile" style={{ width: 240, height: 240, borderRadius: '2.5rem', boxShadow: '0 24px 48px rgba(255, 128, 0, 0.18)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 120 }}>{product.icon}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {AfterHero && (await (AfterHero as () => Promise<React.ReactElement>)())}

      {product.placeholder && (
        <section className="py-24 bg-surface-container">
          <div className="mf-container text-center">
            <span className="mf-chip mb-4">{t.comingSoonChip}</span>
            <h2 className="text-3xl font-semibold mb-3">{t.comingSoonTitle}</h2>
            <p className="text-on-surface-variant mx-auto max-w-lg">{t.comingSoonLead}</p>
            <Link href={`/contacto?servicio=${product.slug}`} className="btn-primary mt-6">
              {t.comingSoonCta}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      )}

      {content?.sections.map((section, idx) => {
        const soft = (idx + 1) % 2 === 0
        if (section.type === 'features') {
          return (
            <section key={idx} className={`py-24 ${soft ? 'bg-surface-container' : ''}`}>
              <div className="mf-container">
                <div className="text-center mb-12">
                  <span className="mf-eyebrow">{t.featuresEyebrow}</span>
                  <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{section.title}</h2>
                  {section.lead && (
                    <p className="text-on-surface-variant mx-auto max-w-3xl">{section.lead}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="mf-product-card h-full">
                      <div className="mf-icon-tile">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                      <p className="text-on-surface-variant m-0">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        }
        if (section.type === 'highlights') {
          return (
            <section key={idx} className={`py-24 ${soft ? 'bg-surface-container' : ''}`}>
              <div className="mf-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-5">
                    <span className="mf-eyebrow">{t.highlightsEyebrow}</span>
                    <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{section.title}</h2>
                    {section.lead && <p className="text-on-surface-variant mb-6 leading-relaxed">{section.lead}</p>}
                    {section.bullets?.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span className="material-symbols-outlined text-primary flex-shrink-0" style={{ fontSize: 22 }}>check_circle</span>
                            <span className="text-on-surface-variant text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.highlights.map((h, i) => (
                        <div key={i} className="mf-product-card" style={{ padding: '1.75rem' }}>
                          <h4 className="font-semibold mb-2">{h.title}</h4>
                          <p className="text-sm text-on-surface-variant m-0">{h.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        if (section.type === 'process') {
          const cols = section.steps.length === 3 ? 'md:grid-cols-3' : section.steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2'
          return (
            <section key={idx} className={`py-24 ${soft ? 'bg-surface-container' : ''}`}>
              <div className="mf-container">
                <div className="text-center mb-12">
                  <span className="mf-eyebrow">{t.processEyebrow}</span>
                  <h2 className="text-3xl md:text-headline-lg font-semibold">{section.title}</h2>
                </div>
                <div className={`grid grid-cols-1 ${cols} gap-6`}>
                  {section.steps.map((step, i) => (
                    <div key={i} className="mf-product-card h-full">
                      <div className="mf-icon-tile" style={{ background: 'var(--primary)', color: '#fff' }}>
                        <span className="font-display text-2xl font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className="text-on-surface-variant m-0">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        }
        if (section.type === 'showcase') {
          const imageOnLeft = section.imagePosition === 'left'
          return (
            <section key={idx} className={`py-24 ${soft ? 'bg-surface-container' : ''}`}>
              <div className="mf-container">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  <div className={imageOnLeft ? 'lg:order-2' : ''}>
                    {section.eyebrow && (
                      <span className="mf-eyebrow">{section.eyebrow}</span>
                    )}
                    <h2 className="text-3xl md:text-headline-lg font-semibold mb-4 leading-tight">{section.title}</h2>
                    {section.lead && (
                      <p className="text-on-surface-variant mb-6 leading-relaxed">{section.lead}</p>
                    )}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5" style={{ fontSize: 22 }}>check_circle</span>
                            <span className="text-on-surface-variant text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`relative ${imageOnLeft ? 'lg:order-1' : ''}`}>
                    <div aria-hidden className="absolute -inset-6 rounded-[2rem] opacity-30 blur-2xl" style={{ background: 'radial-gradient(circle at 30% 40%, rgba(255,128,0,0.35), transparent 60%)' }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      loading="lazy"
                      className="relative rounded-2xl border border-outline-variant shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        }
        if (section.type === 'spotlight') {
          return (
            <section key={idx} className={`py-24 ${soft ? 'bg-surface-container' : ''}`}>
              <div className="mf-container">
                <div
                  className="relative overflow-hidden rounded-[2.5rem] shadow-2xl p-10 md:p-16 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #ff8c1a 0%, #ff7000 55%, #d96f00 100%)',
                    boxShadow: '0 24px 60px rgba(255,128,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset',
                  }}
                >
                  <div aria-hidden className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.6), transparent 55%)' }} />
                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-8">
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
                        style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                          {section.badgeIcon ?? 'workspace_premium'}
                        </span>
                        {section.badge}
                      </span>
                      <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">{section.title}</h2>
                      <p className="mt-5 text-base md:text-lg leading-relaxed opacity-95 max-w-2xl">{section.lead}</p>
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="material-symbols-outlined flex-shrink-0 mt-0.5" style={{ fontSize: 20 }}>
                                check_circle
                              </span>
                              <span className="text-sm md:text-[15px] leading-relaxed opacity-95">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="lg:col-span-4 flex justify-center lg:justify-end" aria-hidden>
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.16)', boxShadow: '0 0 0 12px rgba(255,255,255,0.06)' }}
                      >
                        <span className="material-symbols-outlined text-white" style={{ fontSize: 112 }}>
                          {section.icon ?? 'verified'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        if (section.type === 'cta') {
          return (
            <section key={idx} className="py-24">
              <div className="mf-container">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl" style={{ background: '#121414' }}>
                  <div className="p-12 md:p-20 text-center">
                    <span className="block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.ctaEyebrow}</span>
                    <h2 className="text-3xl md:text-display-lg font-semibold mb-4 text-white">{section.title}</h2>
                    <p className="mb-10 mx-auto text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>{section.lead}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href={`/contacto?servicio=${product.slug}`} className="btn-primary">
                        {t.ctaRequest} {product.name}
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                      <Link
                        href="/servicios"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white"
                        style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        {t.ctaViewAll}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        return null
      })}

      {/* Otros servicios */}
      <section className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="text-center mb-12">
            <span className="mf-eyebrow">{t.othersEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">{t.othersTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/servicios/${other.slug}`}
                className={`mf-product-card ${other.highlight ? 'highlight' : ''} block`}
              >
                <div className="mf-icon-tile">
                  <span className="material-symbols-outlined">{other.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{other.name}</h3>
                <p className={`text-sm m-0 ${other.highlight ? '' : 'text-on-surface-variant'}`}>{other.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
