import 'server-only'
import { cache } from 'react'
import {
  STATIC_PRODUCT_UI,
  mergeWithFallback,
  type ProductUiCopy,
  type ProductUiLocale,
} from './product-ui-static'

// Re-export para mantener compat con consumidores existentes que
// importan tipos/STATIC desde aquí. Los CLIENT components deben
// importar directamente de `./product-ui-static` para evitar arrastrar
// `node:fs` al bundle del cliente vía `@/lib/payload`.
export {
  STATIC_PRODUCT_UI,
  type ProductUiCopy,
  type ProductUiLocale,
  type MultiStat,
} from './product-ui-static'

export const getProductUiCopy = cache(async (locale: ProductUiLocale = 'es'): Promise<ProductUiCopy> => {
  const fallback = STATIC_PRODUCT_UI[locale] ?? STATIC_PRODUCT_UI.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'product-ui' as any,
      locale: locale as any,
      depth: 0,
    })
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})

export function getProductUiCopyStatic(locale: ProductUiLocale = 'es'): ProductUiCopy {
  return STATIC_PRODUCT_UI[locale] ?? STATIC_PRODUCT_UI.es
}
