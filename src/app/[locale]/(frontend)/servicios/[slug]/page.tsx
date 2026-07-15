import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { orderedProducts, productBySlug } from '@/catalog/products'
import type { ProductLocale } from '@/catalog/products-i18n'
import { GenericProductPage } from '@/components/product/GenericProductPage'
import { Crm4you } from '@/components/product/stitch/Crm4you'
import { Spyne } from '@/components/product/stitch/Spyne'
import { ContactCenter } from '@/components/product/stitch/ContactCenter'
import { Ia } from '@/components/product/stitch/Ia'
import { SolucionesWeb } from '@/components/product/stitch/SolucionesWeb'
import { MotorChat } from '@/components/product/stitch/MotorChat'
import { breadcrumbSchema, jsonLdScript, pageSchema, serviceSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

const stitchPages: Record<string, React.ComponentType> = {
  crm4you: Crm4you,
  spyne: Spyne,
  'contact-center': ContactCenter,
  ia: Ia,
  'soluciones-web': SolucionesWeb,
  motorchat: MotorChat,
}

const NOT_FOUND_TITLE: Record<string, string> = {
  es: 'Servicio no encontrado',
  ca: 'Servei no trobat',
  en: 'Service not found',
  zh: '未找到服务',
}

const BREADCRUMB_HOME: Record<SeoLocale, string> = {
  es: 'Inicio',
  ca: 'Inici',
  en: 'Home',
  zh: '首页',
}

const BREADCRUMB_SERVICES: Record<SeoLocale, string> = {
  es: 'Servicios',
  ca: 'Serveis',
  en: 'Services',
  zh: '服务',
}

export const dynamicParams = false

export function generateStaticParams() {
  return orderedProducts().map((p) => ({ slug: p.slug }))
}

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const locale = await resolveLocale()
  const product = productBySlug(slug, locale)
  if (!product) return { title: NOT_FOUND_TITLE[locale] ?? NOT_FOUND_TITLE.es }
  const path = `/servicios/${slug}`
  return buildPageMetadata({
    locale,
    path,
    title: `${product.name}`,
    description: product.tagline,
    ogTitle: `${product.name} — Motorflash`,
    ogDescription: product.intro || product.tagline,
  })
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const locale = await resolveLocale()
  const product = productBySlug(slug, locale)
  if (!product) notFound()

  const StitchComponent = stitchPages[slug]
  const path = localizedPath(locale, `/servicios/${slug}`)
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`

  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'ItemPage',
      path,
      name: `${product.name} — Motorflash`,
      description: product.intro || product.tagline,
      inLanguage: HREFLANG_MAP[locale],
      breadcrumbId,
    }),
    serviceSchema({
      name: product.name,
      description: product.intro || product.tagline,
      slug: product.slug,
    }),
    breadcrumbSchema(
      [
        { name: BREADCRUMB_HOME[locale], url: localizedPath(locale, '/') },
        { name: BREADCRUMB_SERVICES[locale], url: localizedPath(locale, '/servicios') },
        { name: product.name, url: path },
      ],
      breadcrumbId,
    ),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {StitchComponent ? <StitchComponent /> : <GenericProductPage product={product} />}
    </>
  )
}
