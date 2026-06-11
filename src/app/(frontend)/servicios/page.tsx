import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'

export const metadata = {
  title: 'Servicios — Motorflash Ibérica',
  description: '14 productos integrados entre sí para cubrir el ciclo comercial completo del concesionario.',
}

export default function ServiciosPage() {
  const products = orderedProducts()

  return (
    <section className="py-32">
      <div className="mf-container">
        <div className="text-center mb-12">
          <span className="mf-eyebrow">Catálogo de Servicios</span>
          <h1 className="text-4xl md:text-display-lg font-semibold mb-3">Toda la tecnología para vender más coches</h1>
          <p className="text-on-surface-variant mx-auto max-w-2xl">
            14 productos integrados entre sí para cubrir el ciclo comercial completo del concesionario: publicación, stock,
            captación de leads, atención al cliente, IA y reporting.
          </p>
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
                Ver {product.name}
                <span className="material-symbols-outlined">east</span>
              </span>
              {product.placeholder && (
                <span className="mt-3 inline-flex mf-chip" style={{ fontSize: 10 }}>Próximamente</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
