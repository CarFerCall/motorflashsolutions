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

export type SpotlightSection = {
  type: 'spotlight'
  badge: string
  title: string
  lead: string
  bullets?: string[]
  icon?: string
  badgeIcon?: string
}

export type ProductContentSection =
  | FeaturesSection
  | HighlightsSection
  | ProcessSection
  | CtaSection
  | SpotlightSection

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

