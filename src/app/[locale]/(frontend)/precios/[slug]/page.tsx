import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { productBySlug } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { PricingConfigurator, type PlanData } from '@/components/pricing/PricingConfigurator'
import { normalizeItem, type RawPricingItem } from '@/lib/pricing'
import { breadcrumbSchema, jsonLdScript, pageSchema, productSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

export const dynamic = 'force-dynamic'

const BC_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BC_PRICING: Record<SeoLocale, string> = { es: 'Precios', ca: 'Preus', en: 'Pricing', zh: '价格' }

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const locale = await resolveLocale()
  const product = productBySlug(slug)
  const path = `/precios/${slug}`
  if (!product) {
    return buildPageMetadata({
      locale,
      path,
      title: 'Configurador de precios',
    })
  }
  const title = `Configurar precio — ${product.name}`
  const description = `Configura tu plan de ${product.name} y obtén una estimación en directo. Sin permanencia.`
  return buildPageMetadata({
    locale,
    path,
    title,
    description,
    ogTitle: `${title} | Motorflash`,
    ogDescription: description,
  })
}

export default async function PrecioProductoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const locale = await resolveLocale()
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

  // Calcula priceRange a partir de base + items obligatorios más baratos/caros.
  // Simplificamos: usamos base como floor y base + suma de opciones más caras como ceiling.
  const optionalTotal = planData.items.reduce((acc, item) => {
    if ('unitCents' in item && typeof item.unitCents === 'number' && item.unitCents > 0) {
      return acc + item.unitCents
    }
    return acc
  }, 0)
  const currency = planData.currency || 'EUR'
  const floor = Math.round(planData.basePriceCents / 100)
  const ceiling = Math.round((planData.basePriceCents + optionalTotal) / 100)
  const priceRange = ceiling > floor ? `€${floor}–€${ceiling}` : `€${floor}`

  const path = localizedPath(locale, `/precios/${slug}`)
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`

  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'ItemPage',
      path,
      name: `Configurar precio — ${product.name}`,
      description: planData.introText || product.tagline,
      inLanguage: HREFLANG_MAP[locale],
      breadcrumbId,
    }),
    productSchema({
      name: product.name,
      description: planData.introText || product.tagline,
      slug: product.slug,
      priceCurrency: currency,
      priceRange,
    }),
    breadcrumbSchema(
      [
        { name: BC_HOME[locale], url: localizedPath(locale, '/') },
        { name: BC_PRICING[locale], url: localizedPath(locale, '/precios') },
        { name: product.name, url: path },
      ],
      breadcrumbId,
    ),
  ])

  return (
    <section className="py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mf-container">
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary">{BC_HOME[locale]}</Link> /{' '}
          <Link href="/precios" className="hover:text-primary">{BC_PRICING[locale]}</Link> /{' '}
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
