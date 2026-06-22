/**
 * Selector multilingüe del contenido rico de cada producto.
 *
 * El contenido está particionado en tres archivos:
 *   - product-content.es.ts  → fuente de verdad (siempre completo).
 *   - product-content.en.ts  → traducciones EN (puede faltar algún producto).
 *   - product-content.zh.ts  → traducciones ZH (puede faltar algún producto).
 *
 * `productContentBySlug(slug, locale)` devuelve el contenido en el
 * locale pedido y, si no existe traducción, cae a español. Esto
 * permite ir traduciendo productos al ritmo de negocio sin romper la
 * web cuando un producto todavía no tiene EN/ZH.
 *
 * Los tipos `Features/Highlights/Process/Cta` se exportan desde aquí
 * para que existan en un solo lugar.
 */

export type FeaturesSection = {
  type: 'features'
  title: string
  lead: string
  items: { title: string; description: string; icon: string }[]
}

export type HighlightsSection = {
  type: 'highlights'
  title: string
  lead: string
  highlights: { title: string; description: string }[]
  bullets: string[]
}

export type ProcessSection = {
  type: 'process'
  title: string
  steps: { title: string; description: string }[]
}

export type CtaSection = {
  type: 'cta'
  title: string
  lead: string
}

export type ProductContentSection = FeaturesSection | HighlightsSection | ProcessSection | CtaSection

export interface ProductContent {
  subtitle: string
  sections: ProductContentSection[]
}

import { productContent as productContentES } from './product-content.es'
import { productContent as productContentCA } from './product-content.ca'
import { productContent as productContentEN } from './product-content.en'
import { productContent as productContentZH } from './product-content.zh'

export type ProductContentLocale = 'es' | 'ca' | 'en' | 'zh'

const REGISTRY: Record<ProductContentLocale, Record<string, ProductContent>> = {
  es: productContentES,
  ca: productContentCA,
  en: productContentEN,
  zh: productContentZH,
}

export function productContentBySlug(
  slug: string,
  locale: ProductContentLocale = 'es',
): ProductContent | undefined {
  return REGISTRY[locale]?.[slug] ?? REGISTRY.es[slug]
}

// Compat: alias antiguo del Record en español, por si algún consumidor
// importaba directamente `productContent` (mantenemos la API previa).
export const productContent = productContentES

// -----------------------------------------------------------------
// Wrapper asíncrono que lee la ficha del CMS (Payload) con fallback
// al contenido estático. Devuelve el mismo shape que la versión
// síncrona para ser drop-in cuando F5 migre los call sites.
// -----------------------------------------------------------------

import { cache } from 'react'

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

/**
 * Versión async: intenta leer del CMS y cae al contenido estático
 * si la query falla o el slug no está sembrado todavía. Misma firma
 * de retorno que `productContentBySlug` para ser drop-in.
 */
export async function getProductContentBySlug(
  slug: string,
  locale: ProductContentLocale = 'es',
): Promise<ProductContent | undefined> {
  const fromCms = await fetchCmsContentBySlug(slug, locale)
  if (fromCms) return fromCms
  return productContentBySlug(slug, locale)
}
