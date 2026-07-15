import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/Reveal'
import { PricingConfigurator, type ConfiguratorProduct } from '@/components/PricingConfigurator'
import { normalizeItem, type RawPricingItem } from '@/lib/pricing'
import { getPricingCopy, getPricingCopyStatic, type PricingLocale } from '@/lib/pricing-content'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

const BC_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BC_PRICING: Record<SeoLocale, string> = { es: 'Precios', ca: 'Preus', en: 'Pricing', zh: '价格' }

export const dynamic = 'force-dynamic'

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

export async function generateMetadata() {
  const locale = await resolveLocale()
  const t = getPricingCopyStatic(locale as PricingLocale)
  return buildPageMetadata({
    locale,
    path: '/precios',
    title: t.metaTitle,
    description: t.metaDescription,
    ogTitle: `${t.metaTitle} — Motorflash`,
    ogDescription: t.metaOg,
  })
}

export default async function PreciosPage() {
  const locale = await resolveLocale()
  const products = orderedProducts(locale as PricingLocale)
  const t = await getPricingCopy(locale as PricingLocale)

  const path = localizedPath(locale, '/precios')
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`
  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'CollectionPage',
      path,
      name: t.metaTitle,
      description: t.metaDescription,
      inLanguage: HREFLANG_MAP[locale],
      breadcrumbId,
    }),
    breadcrumbSchema(
      [
        { name: BC_HOME[locale], url: localizedPath(locale, '/') },
        { name: BC_PRICING[locale], url: path },
      ],
      breadcrumbId,
    ),
  ])

  const payload = await getPayloadClient()
  const { docs: plans } = await payload.find({
    collection: 'pricing-plans',
    where: { enabled: { equals: true } },
    limit: 100,
  })
  const planBySlug = new Map<string, (typeof plans)[number]>(plans.map((p) => [p.productSlug, p]))

  const configurable: ConfiguratorProduct[] = products
    .map((p) => {
      const plan = planBySlug.get(p.slug)
      if (!plan) return null
      const items = (plan.items ?? []).map((raw) => normalizeItem(raw as RawPricingItem))
      if (plan.basePriceCents <= 0 && items.length === 0) return null
      return {
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        icon: p.icon,
        basePriceCents: plan.basePriceCents,
        items,
      }
    })
    .filter(Boolean) as ConfiguratorProduct[]

  const configurableSlugs = new Set(configurable.map((c) => c.slug))
  const onDemand = products.filter((p) => !configurableSlugs.has(p.slug))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="py-24 md:py-32">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="mf-eyebrow">{t.eyebrow}</span>
              <h1 className="text-4xl md:text-display-lg font-semibold mb-3">{t.title}</h1>
              <p className="text-on-surface-variant mx-auto max-w-2xl">{t.lead}</p>
            </div>
          </Reveal>

          {configurable.length > 0 ? (
            <Reveal>
              <PricingConfigurator products={configurable} />
            </Reveal>
          ) : (
            <div className="text-center text-on-surface-variant py-12">
              {t.noPlansPre} <Link href="/contacto" className="text-primary underline">{t.noPlansLink}</Link>{t.noPlansPost}
            </div>
          )}
        </div>
      </section>

      {onDemand.length > 0 && (
        <section className="py-16 md:py-24" style={{ background: '#f9fafb' }}>
          <div className="mf-container">
            <Reveal>
              <div className="text-center mb-10">
                <span className="mf-eyebrow">{t.onDemandEyebrow}</span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3">{t.onDemandTitle}</h2>
                <p className="text-on-surface-variant mx-auto max-w-2xl">{t.onDemandLead}</p>
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
                      {t.onDemandCta}
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {configurable.length > 0 && (
        <section className="py-16">
          <div className="mf-container">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">{t.fineTuneTitle}</h2>
                <p className="text-on-surface-variant mb-6">{t.fineTuneLead}</p>
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
