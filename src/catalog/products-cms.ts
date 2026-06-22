import 'server-only'
import { cache } from 'react'
import {
  products,
  type Product,
  productBySlug,
  orderedProducts,
} from './products'
import { localize } from './products-localize'
import type { ProductLocale } from './products-i18n'

interface CmsProductDoc {
  slug: string
  name?: string
  menuLabel?: string
  tagline?: string
  heroTitle?: string
  intro?: string
  icon?: string
  menuOrder?: number
  highlight?: boolean | null
  placeholder?: boolean | null
}

function isFilled(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function docToProduct(doc: CmsProductDoc, locale: ProductLocale, fallback?: Product): Product {
  const base = fallback ?? localize({
    slug: doc.slug,
    name: doc.name ?? doc.slug,
    menuLabel: doc.menuLabel ?? doc.name ?? doc.slug,
    menuOrder: doc.menuOrder ?? 100,
    tagline: doc.tagline ?? '',
    heroTitle: doc.heroTitle ?? doc.name ?? doc.slug,
    intro: doc.intro ?? '',
    icon: doc.icon ?? 'category',
  }, locale)
  return {
    ...base,
    icon: doc.icon ?? base.icon,
    menuOrder: doc.menuOrder ?? base.menuOrder,
    name: isFilled(doc.name) ? doc.name : base.name,
    menuLabel: isFilled(doc.menuLabel) ? doc.menuLabel : base.menuLabel,
    tagline: isFilled(doc.tagline) ? doc.tagline : base.tagline,
    heroTitle: isFilled(doc.heroTitle) ? doc.heroTitle : base.heroTitle,
    intro: isFilled(doc.intro) ? doc.intro : base.intro,
    highlight: doc.highlight ?? base.highlight,
    placeholder: doc.placeholder ?? base.placeholder,
  }
}

const fetchCmsProducts = cache(async (locale: ProductLocale): Promise<Product[] | null> => {
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const { docs } = (await payload.find({
      collection: 'products' as any,
      locale: locale as any,
      limit: 100,
      sort: 'menuOrder',
      depth: 0,
    })) as { docs: CmsProductDoc[] }
    if (!docs || docs.length === 0) return null
    const bySlug = new Map(products.map((p) => [p.slug, localize(p, locale)]))
    return docs
      .filter((d): d is CmsProductDoc => Boolean(d && d.slug))
      .map((d) => docToProduct(d, locale, bySlug.get(d.slug)))
      .sort((a, b) => a.menuOrder - b.menuOrder)
  } catch {
    return null
  }
})

export async function getOrderedProducts(locale: ProductLocale = 'es'): Promise<Product[]> {
  const fromCms = await fetchCmsProducts(locale)
  if (fromCms && fromCms.length > 0) return fromCms
  return orderedProducts(locale)
}

export async function getProductBySlug(
  slug: string,
  locale: ProductLocale = 'es',
): Promise<Product | undefined> {
  const all = await getOrderedProducts(locale)
  return all.find((p) => p.slug === slug)
}

export { productBySlug, orderedProducts }
