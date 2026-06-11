import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/Reveal'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Precios — Motorflash Ibérica',
  description: 'Configura el plan que necesitas para cada servicio y recibe una cotización personalizada.',
}

export default async function PreciosPage() {
  const products = orderedProducts()

  const payload = await getPayloadClient()
  const { docs: plans } = await payload.find({
    collection: 'pricing-plans',
    where: { enabled: { equals: true } },
    limit: 100,
  })
  const planBySlug = new Map(plans.map((p) => [p.productSlug, p]))

  return (
    <section className="py-32">
      <div className="mf-container">
        <Reveal>
          <div className="text-center mb-12">
            <span className="mf-eyebrow">Precios</span>
            <h1 className="text-4xl md:text-display-lg font-semibold mb-3">Planes adaptados a cada concesionario</h1>
            <p className="text-on-surface-variant mx-auto max-w-2xl">
              Configura el plan que necesitas para cada servicio y recibe una cotización personalizada en tu email en menos de 24 horas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const plan = planBySlug.get(product.slug)
            return (
              <Reveal key={product.slug} delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full flex flex-col">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{product.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-on-surface-variant mb-4 text-sm">{product.tagline}</p>

                  {plan ? (
                    <>
                      {plan.basePriceCents > 0 ? (
                        <>
                          <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold m-0">Desde</p>
                          <p className="font-display text-3xl font-semibold mb-4">
                            {(plan.basePriceCents / 100).toLocaleString('es-ES')} €
                            <span className="text-sm text-on-surface-variant font-medium">
                              /{plan.billingCycle === 'year' ? 'año' : plan.billingCycle === 'month' ? 'mes' : 'pago'}
                            </span>
                          </p>
                        </>
                      ) : (
                        <p className="text-on-surface-variant mb-4 text-sm">Precio según configuración.</p>
                      )}
                      <Link href={`/precios/${product.slug}`} className="btn-primary mt-auto">
                        Configurar precio
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <p className="text-on-surface-variant mb-4 text-sm">Cotización personalizada bajo demanda.</p>
                      <Link href={`/contacto?servicio=${product.slug}`} className="btn-secondary mt-auto">
                        Solicitar presupuesto
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
