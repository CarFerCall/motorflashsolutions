/**
 * Catalan rich product content (placeholder).
 *
 * Esta primera iteración no incluye todavía las secciones completas
 * (highlights, features, process, cta) traducidas al catalán. El
 * selector `productContentBySlug(slug, 'ca')` cae a español si el
 * slug no existe en este Record (ver product-content.ts).
 *
 * Los `subtitle` y los textos del catálogo (`products-i18n.ts`)
 * SÍ están traducidos al catalán, así que la ficha mostrará la
 * cabecera en catalán y el resto del cuerpo en español como
 * fallback hasta que se completen las traducciones.
 */
import type { ProductContent } from './product-content'

export const productContent: Record<string, ProductContent> = {}
