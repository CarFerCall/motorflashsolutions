import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import {
  getServicesListingCopy,
  getServicesListingCopyStatic,
  type ServicesListingLocale,
} from '@/lib/services-listing-content'

export async function generateMetadata() {
  const locale = ((await getLocale()) as ServicesListingLocale) || 'es'
  const t = getServicesListingCopyStatic(locale)
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/servicios' },
    openGraph: { title: `${t.metaTitle} — Motorflash`, description: t.metaOg, url: '/servicios' },
  }
}

export default async function ServiciosPage() {
  const locale = ((await getLocale()) as ServicesListingLocale) || 'es'
  const products = orderedProducts(locale)
  const t = await getServicesListingCopy(locale)

  return (
    <section className="py-32">
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
