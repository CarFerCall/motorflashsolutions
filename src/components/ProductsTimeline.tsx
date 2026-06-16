import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'

/**
 * Línea horizontal con todos los productos del catálogo.
 *
 * Cada producto es un "hito" sobre una línea naranja que cruza el ancho
 * de la pantalla. Icono + nombre + tagline corto. Scroll horizontal en
 * pantallas estrechas con un degradado en los bordes que indica que hay
 * más contenido a los lados.
 */
export function ProductsTimeline() {
  const products = orderedProducts()
  const total = products.length

  return (
    <div className="relative">
      {/* Indicadores laterales de scroll (sólo donde hay overflow) */}
      <div
        aria-hidden
        className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
        style={{ background: 'linear-gradient(90deg, rgba(232,234,237,1), rgba(232,234,237,0))' }}
      />
      <div
        aria-hidden
        className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
        style={{ background: 'linear-gradient(270deg, rgba(232,234,237,1), rgba(232,234,237,0))' }}
      />

      <div className="overflow-x-auto overscroll-x-contain pb-2 mf-timeline-scroll">
        <div
          className="relative"
          style={{
            paddingLeft: 32,
            paddingRight: 32,
            minWidth: `${Math.max(720, total * 160)}px`,
          }}
        >
          {/* Línea horizontal central */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,128,0,0) 0%, rgba(255,128,0,0.6) 8%, rgba(255,128,0,0.6) 92%, rgba(255,128,0,0) 100%)',
            }}
          />

          {/* Hitos */}
          <ul className="relative grid grid-flow-col auto-cols-fr gap-4 py-12">
            {products.map((p, i) => {
              // Alternamos arriba/abajo para que las cards no se monten.
              const above = i % 2 === 0
              return (
                <li key={p.slug} className="relative flex flex-col items-center" style={{ minHeight: 240 }}>
                  {/* Dot sobre la línea */}
                  <span
                    aria-hidden
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-container z-10"
                    style={{ boxShadow: '0 0 0 4px rgba(255, 128, 0, 0.15)' }}
                  />

                  {/* Card del producto: arriba o abajo de la línea */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[140px] ${above ? 'bottom-[calc(50%+18px)]' : 'top-[calc(50%+18px)]'}`}
                  >
                    <Link
                      href={`/servicios/${p.slug}`}
                      className="block bg-white border border-outline-variant rounded-2xl px-3 py-3 text-center hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors"
                      >
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
                          {p.icon}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-on-surface m-0 leading-tight">
                        {p.menuLabel ?? p.name}
                      </p>
                    </Link>
                    {/* Conector card → dot */}
                    <span
                      aria-hidden
                      className={`absolute left-1/2 -translate-x-1/2 w-px bg-outline-variant ${above ? 'top-full h-4' : 'bottom-full h-4'}`}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Pista de scroll en móvil */}
      <p className="text-center text-xs text-on-surface-variant mt-4 lg:hidden">
        ← Desliza para ver todo el catálogo →
      </p>
    </div>
  )
}
