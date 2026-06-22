import type { Product } from './products'
import { productI18n, type ProductLocale } from './products-i18n'

/**
 * Aplica la traducción de los campos visibles según locale. Si no
 * hay traducción específica para el slug en ese idioma, se queda con
 * el original en español. Aislado del módulo principal para que
 * `products-cms.ts` (server-only) pueda reutilizarlo sin que ese
 * import contamine el bundle del cliente.
 */
export function localize(product: Product, locale: ProductLocale = 'es'): Product {
  if (locale === 'es') return product
  const t = productI18n[locale]?.[product.slug]
  if (!t) return product
  return { ...product, ...t }
}
