import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import {
  getServicesListingCopy,
  getServicesListingCopyStatic,
  type ServicesListingLocale,
} from '@/lib/services-listing-content'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

const BREADCRUMB_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BREADCRUMB_SERVICES: Record<SeoLocale, string> = { es: 'Servicios', ca: 'Serveis', en: 'Services', zh: '服务' }

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

export async function generateMetadata() {
  const locale = await resolveLocale()
  const t = getServicesListingCopyStatic(locale as ServicesListingLocale)
  return buildPageMetadata({
    locale,
    path: '/servicios',
    title: t.metaTitle,
    description: t.metaDescription,
    ogTitle: `${t.metaTitle} — Motorflash`,
    ogDescription: t.metaOg,
  })
}

export default async function ServiciosPage() {
  const locale = await resolveLocale()
  const products = orderedProducts(locale as ServicesListingLocale)
  const t = await getServicesListingCopy(locale as ServicesListingLocale)

  const path = localizedPath(locale, '/servicios')
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
        { name: BREADCRUMB_HOME[locale], url: localizedPath(locale, '/') },
        { name: BREADCRUMB_SERVICES[locale], url: path },
      ],
      breadcrumbId,
    ),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: products.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: absoluteUrl(localizedPath(locale, `/servicios/${p.slug}`)),
        name: p.name,
      })),
    },
  ])

  return (
    <section className="py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mf-container">
        <div className="text-center mb-12">
          <span className="mf-eyebrow">{t.eyebrow}</span>
          <h1 className="text-4xl md:text-display-lg font-semibold mb-3">{t.title}</h1>
          <p className="text-on-surface-variant mx-auto max-w-2xl">{t.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/servicios/${product.slug}`}
              className={`mf-product-card h-full block ${product.highlight ? 'highlight' : ''}`}
            >
              <div className="mf-icon-tile">
                <span className="material-symbols-outlined">{product.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <p className={`mb-4 ${product.highlight ? '' : 'text-on-surface-variant'}`}>{product.tagline}</p>
              <span className={`inline-flex items-center gap-2 font-bold ${product.highlight ? '' : 'text-primary'}`}>
                {t.viewProduct} {product.name}
                <span className="material-symbols-outlined">east</span>
              </span>
              {product.placeholder && (
                <span className="mt-3 inline-flex mf-chip" style={{ fontSize: 10 }}>{t.comingSoon}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
