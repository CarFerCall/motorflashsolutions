import { productBySlug, type Product } from '@/catalog/products'
import { ProductCarousel } from '@/components/ProductCarousel'
import { Reveal } from '@/components/Reveal'

interface Props {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  productSlugs: string[]
}

/**
 * Bloque del page builder. El carrusel detecta el locale en cliente y
 * cae al STATIC del wrapper `product-ui-content`. Cuando se usa fuera
 * del editor (server pages) puedes pasar `t` directamente al
 * `<ProductCarousel />` desde el padre con `getProductUiCopy(locale)`.
 */
export function ProductCarouselBlock({ eyebrow, title, description, productSlugs }: Props) {
  const products = (productSlugs ?? [])
    .map((s) => productBySlug(s))
    .filter((p): p is Product => Boolean(p))

  if (!products.length) return null

  return (
    <section className="py-20" style={{ background: '#f9fafb' }}>
      <div className="mf-container">
        {(eyebrow || title || description) && (
          <Reveal>
            <div className="text-center mb-10 max-w-3xl mx-auto">
              {eyebrow && <span className="mf-eyebrow">{eyebrow}</span>}
              {title && <h2 className="text-3xl md:text-4xl font-semibold mb-3">{title}</h2>}
              {description && <p className="text-on-surface-variant">{description}</p>}
            </div>
          </Reveal>
        )}
        <ProductCarousel products={products} />
      </div>
    </section>
  )
}
