import 'server-only'
import { cache } from 'react'
import {
  productContentBySlug,
  type ProductContent,
  type ProductContentSection,
  type ProductContentLocale,
} from './product-content'

interface CmsSectionDoc {
  blockType: 'features' | 'highlights' | 'process' | 'cta'
  title?: string
  lead?: string
  items?: { title?: string; description?: string; icon?: string }[]
  highlights?: { title?: string; description?: string }[]
  bullets?: { text?: string }[]
  steps?: { title?: string; description?: string }[]
}

interface CmsProductContentDoc {
  subtitle?: string
  sections?: CmsSectionDoc[]
  product?: { slug?: string } | string
}

function sectionFromCms(doc: CmsSectionDoc): ProductContentSection | null {
  if (doc.blockType === 'features') {
    return {
      type: 'features',
      title: doc.title ?? '',
      lead: doc.lead ?? '',
      items: (doc.items ?? []).map((i) => ({
        title: i.title ?? '',
        description: i.description ?? '',
        icon: i.icon ?? 'check_circle',
      })),
    }
  }
  if (doc.blockType === 'highlights') {
    return {
      type: 'highlights',
      title: doc.title ?? '',
      lead: doc.lead ?? '',
      highlights: (doc.highlights ?? []).map((h) => ({
        title: h.title ?? '',
        description: h.description ?? '',
      })),
      bullets: (doc.bullets ?? []).map((b) => b.text ?? '').filter(Boolean),
    }
  }
  if (doc.blockType === 'process') {
    return {
      type: 'process',
      title: doc.title ?? '',
      steps: (doc.steps ?? []).map((s) => ({
        title: s.title ?? '',
        description: s.description ?? '',
      })),
    }
  }
  if (doc.blockType === 'cta') {
    return {
      type: 'cta',
      title: doc.title ?? '',
      lead: doc.lead ?? '',
    }
  }
  return null
}

const fetchCmsContentBySlug = cache(
  async (slug: string, locale: ProductContentLocale): Promise<ProductContent | null> => {
    try {
      const { getPayloadClient } = await import('@/lib/payload')
      const payload = await getPayloadClient()
      const productResult = (await payload.find({
        collection: 'products' as any,
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 0,
        locale: locale as any,
      })) as { docs: Array<{ id: string | number }> }
      const productId = productResult.docs?.[0]?.id
      if (!productId) return null
      const contentResult = (await payload.find({
        collection: 'product-content' as any,
        where: { product: { equals: productId } },
        limit: 1,
        depth: 0,
        locale: locale as any,
      })) as { docs: CmsProductContentDoc[] }
      const doc = contentResult.docs?.[0]
      if (!doc) return null
      const sections = (doc.sections ?? [])
        .map(sectionFromCms)
        .filter((s): s is ProductContentSection => s !== null)
      if (sections.length === 0 && !doc.subtitle) return null
      return {
        subtitle: doc.subtitle ?? '',
        sections,
      }
    } catch {
      return null
    }
  },
)

export async function getProductContentBySlug(
  slug: string,
  locale: ProductContentLocale = 'es',
): Promise<ProductContent | undefined> {
  const fromCms = await fetchCmsContentBySlug(slug, locale)
  if (fromCms) return fromCms
  return productContentBySlug(slug, locale)
}

export { productContentBySlug }
