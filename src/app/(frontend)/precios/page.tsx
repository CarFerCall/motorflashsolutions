import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/Reveal'
import { PricingConfigurator, type ConfiguratorProduct } from '@/components/PricingConfigurator'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Precios — Motorflash Ibérica',
  description: 'Selecciona los servicios que tu concesionario necesita y obtén una estimación en directo. Sin permanencia.',
}

export default async function PreciosPage() {
  const products = orderedProducts()

  const payload = await getPayloadClient()
  const { docs: plans } = await payload.find({
    collection: 'pricing-plans',
    where: { enabled: { equals: true } },
    limit: 100,
  })
  const planBySlug = new Map<string, (typeof plans)[number]>(plans.map((p) => [p.productSlug, p]))

  // Productos que entran al configurador: los que tienen plan habilitado
  // con precio base > 0. Los demás se ofrecen abajo como "Cotización
  // personalizada".
  const configurable: ConfiguratorProduct[] = products
    .map((p) => {
      const plan = planBySlug.get(p.slug)
      if (!plan || plan.basePriceCents <= 0) return null
      return {
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        icon: p.icon,
        basePriceCents: plan.basePriceCents,
      }
    })
    .filter(Boolean) as ConfiguratorProduct[]

  const onDemand = products.filter((p) => {
    const plan = planBySlug.get(p.slug)
    return !plan || plan.basePriceCents <= 0
  })

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="mf-eyebrow">Precios</span>
              <h1 className="text-4xl md:text-display-lg font-semibold mb-3">Planes a tu medida</h1>
              <p className="text-on-surface-variant mx-auto max-w-2xl">
                Selecciona las herramientas que tu concesionario necesita y escala según tu volumen de negocio. Estimación en vivo, sin permanencia.
              </p>
            </div>
          </Reveal>

          {configurable.length > 0 ? (
            <Reveal>
              <PricingConfigurator products={configurable} />
            </Reveal>
          ) : (
            <div className="text-center text-on-surface-variant py-12">
              Aún no hay planes activos en el CMS. <Link href="/contacto" className="text-primary underline">Pide presupuesto</Link>.
            </div>
          )}
        </div>
      </section>

      {/* Productos sin precio público — cotización a medida */}
      {onDemand.length > 0 && (
        <section className="py-16 md:py-24" style={{ background: '#f9fafb' }}>
          <div className="mf-container">
            <Reveal>
              <div className="text-center mb-10">
                <span className="mf-eyebrow">Más servicios</span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3">Soluciones a medida</h2>
                <p className="text-on-surface-variant mx-auto max-w-2xl">
                  El resto del catálogo se cotiza según las necesidades de cada concesionario. Pide presupuesto sin compromiso.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onDemand.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}>
                  <div className="bg-white rounded-2xl border border-outline-variant p-6 h-full flex flex-col">
                    <div className="mf-icon-tile mb-4">
                      <span className="material-symbols-outlined">{p.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                    <p className="text-on-surface-variant text-sm mb-4">{p.tagline}</p>
                    <Link href={`/contacto?servicio=${p.slug}`} className="btn-secondary mt-auto">
                      Solicitar presupuesto
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA detalle por producto */}
      {configurable.length > 0 && (
        <section className="py-16">
          <div className="mf-container">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">¿Quieres afinar la configuración de un producto?</h2>
                <p className="text-on-surface-variant mb-6">
                  Para CRM4YOU y otros productos con módulos opcionales puedes entrar al configurador individual y elegir cada item.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {configurable.slice(0, 6).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/precios/${p.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{p.icon}</span>
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  )
}
