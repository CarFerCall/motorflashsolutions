import Link from 'next/link'
import type { Product } from '@/catalog/products'
import { productContentBySlug } from '@/catalog/product-content'
import { orderedProducts } from '@/catalog/products'

export function GenericProductPage({ product }: { product: Product }) {
  const content = productContentBySlug(product.slug)
  const others = orderedProducts().filter((p) => p.slug !== product.slug).slice(0, 8)

  return (
    <>
      {/* Hero */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-[10%] -right-[10%] w-1/2 h-1/2 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />
        <div className="mf-container relative z-10">
          <nav aria-label="breadcrumb" className="mb-6 text-sm text-on-surface-variant">
            <Link href="/" className="hover:text-primary">Inicio</Link>
            {' / '}
            <Link href="/servicios" className="hover:text-primary">Servicios</Link>
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
                  Solicitar información
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/servicios" className="btn-secondary">Ver todos los servicios</Link>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              <div className="mf-icon-tile" style={{ width: 240, height: 240, borderRadius: '2.5rem', boxShadow: '0 24px 48px rgba(255, 128, 0, 0.18)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 120 }}>{product.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.placeholder && (
        <section className="py-24 bg-surface-container">
          <div className="mf-container text-center">
            <span className="mf-chip mb-4">Próximamente</span>
            <h2 className="text-3xl font-semibold mb-3">Estamos preparando el detalle de este servicio</h2>
            <p className="text-on-surface-variant mx-auto max-w-lg">
              Mientras tanto, si quieres conocerlo en profundidad, contacta con nuestro equipo comercial y te lo presentamos en persona.
            </p>
            <Link href={`/contacto?servicio=${product.slug}`} className="btn-primary mt-6">
              Hablar con un especialista
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
                  <span className="mf-eyebrow">Funcionalidades</span>
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
                    <span className="mf-eyebrow">En profundidad</span>
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
                  <span className="mf-eyebrow">El proceso</span>
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
        if (section.type === 'cta') {
          return (
            <section key={idx} className="py-24">
              <div className="mf-container">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl" style={{ background: '#121414' }}>
                  <div className="p-12 md:p-20 text-center">
                    <span className="block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>¿Empezamos?</span>
                    <h2 className="text-3xl md:text-display-lg font-semibold mb-4 text-white">{section.title}</h2>
                    <p className="mb-10 mx-auto text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>{section.lead}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href={`/contacto?servicio=${product.slug}`} className="btn-primary">
                        Solicitar {product.name}
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                      <Link
                        href="/servicios"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white"
                        style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        Ver todos los servicios
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
            <span className="mf-eyebrow">Otros servicios</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">Combínalo con el resto del ecosistema Motorflash</h2>
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
