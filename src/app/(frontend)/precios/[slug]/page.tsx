import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { productBySlug } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { PricingConfigurator, type PlanData } from '@/components/pricing/PricingConfigurator'
import { normalizeItem, type RawPricingItem } from '@/lib/pricing'
import { breadcrumbSchema, jsonLdScript } from '@/lib/seo/schema'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = productBySlug(slug)
  const canonical = `/precios/${slug}`
  if (!product) {
    return {
      title: 'Configurador de precios',
      alternates: { canonical },
    }
  }
  const title = `Configurar precio — ${product.name}`
  const description = `Configura tu plan de ${product.name} y obtén una estimación en directo. Sin permanencia.`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title: `${title} | Motorflash`, description, url: canonical },
  }
}

export default async function PrecioProductoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productBySlug(slug)
  if (!product) notFound()

  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pricing-plans',
    where: { productSlug: { equals: slug }, enabled: { equals: true } },
    limit: 1,
  })
  const plan = docs[0]

  if (!plan) {
    return (
      <section className="py-32">
        <div className="mf-container text-center">
          <span className="mf-eyebrow">Precios</span>
          <h1 className="text-4xl md:text-display-lg font-semibold mb-3">{product.name}</h1>
          <p className="text-on-surface-variant mx-auto max-w-2xl mb-8">
            Este servicio se cotiza siempre a medida según las necesidades del concesionario. Solicita una propuesta personalizada
            y nuestro equipo comercial te llamará en 24 horas.
          </p>
          <Link href={`/contacto?servicio=${slug}`} className="btn-primary">
            Solicitar presupuesto
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    )
  }

  // Pasa al Client Component los items ya normalizados (sin JSON)
  const planData: PlanData = {
    id: String(plan.id),
    productSlug: plan.productSlug,
    productName: plan.productName,
    introText: plan.introText ?? null,
    basePriceCents: plan.basePriceCents,
    currency: plan.currency,
    billingCycle: plan.billingCycle,
    items: (plan.items ?? []).map((item: any) => normalizeItem(item as RawPricingItem)),
  }

  const jsonLd = jsonLdScript(
    breadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Precios', url: '/precios' },
      { name: product.name, url: `/precios/${product.slug}` },
    ]),
  )

  return (
    <section className="py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mf-container">
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Inicio</Link> /{' '}
          <Link href="/precios" className="hover:text-primary">Precios</Link> /{' '}
          <span className="text-on-surface">{product.name}</span>
        </nav>

        <div className="text-center mb-10">
          <span className="mf-eyebrow">Configurador</span>
          <h1 className="text-3xl md:text-display-lg font-semibold mb-3">{product.name}</h1>
          <p className="text-on-surface-variant mx-auto max-w-2xl">{planData.introText ?? product.tagline}</p>
        </div>

        <PricingConfigurator plan={planData} />
      </div>
    </section>
  )
}
