import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'

/**
 * Línea horizontal con todos los productos del catálogo.
 *
 * En desktop (lg+): los 15 productos encajan sin scroll en una rejilla
 * que se distribuye uniformemente (auto-fit), con cards compactas.
 * En móvil/tablet: scroll horizontal con cards más grandes y legibles.
 */
export function ProductsTimeline() {
  const products = orderedProducts()
  const total = products.length

  return (
    <div className="relative">
      {/* ============================
          Desktop: rejilla sin scroll
          ============================ */}
      <div className="hidden lg:block mf-container">
        <div className="relative">
          {/* Línea horizontal central */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,128,0,0) 0%, rgba(255,128,0,0.6) 6%, rgba(255,128,0,0.6) 94%, rgba(255,128,0,0) 100%)',
            }}
          />
          <ul
            className="relative grid grid-flow-col auto-cols-fr gap-1"
            style={{ minHeight: 200, padding: '20px 0' }}
          >
            {products.map((p, i) => {
              const above = i % 2 === 0
              return (
                <li key={p.slug} className="relative flex flex-col items-center">
                  {/* Dot sobre la línea */}
                  <span
                    aria-hidden
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-[3px] border-surface-container z-10"
                    style={{ boxShadow: '0 0 0 3px rgba(255, 128, 0, 0.15)' }}
                  />
                  {/* Card del producto: arriba o abajo de la línea */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[88px] ${above ? 'bottom-[calc(50%+14px)]' : 'top-[calc(50%+14px)]'}`}
                  >
                    <Link
                      href={`/servicios/${p.slug}`}
                      className="block bg-white border border-outline-variant rounded-xl px-1.5 py-2 text-center hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>
                          {p.icon}
                        </span>
                      </div>
                      <p
                        className="text-[9px] font-bold uppercase tracking-tight text-on-surface m-0 leading-[1.15]"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {p.menuLabel ?? p.name}
                      </p>
                    </Link>
                    <span
                      aria-hidden
                      className={`absolute left-1/2 -translate-x-1/2 w-px bg-outline-variant ${above ? 'top-full h-3' : 'bottom-full h-3'}`}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* ============================
          Móvil/tablet: scroll horizontal
          ============================ */}
      <div className="lg:hidden relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10"
          style={{ background: 'linear-gradient(90deg, rgba(232,234,237,1), rgba(232,234,237,0))' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10"
          style={{ background: 'linear-gradient(270deg, rgba(232,234,237,1), rgba(232,234,237,0))' }}
        />
        <div className="overflow-x-auto overscroll-x-contain pb-2 mf-timeline-scroll">
          <div
            className="relative"
            style={{
              paddingLeft: 24,
              paddingRight: 24,
              minWidth: `${total * 130}px`,
            }}
          >
            <div
              aria-hidden
              className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,128,0,0) 0%, rgba(255,128,0,0.6) 8%, rgba(255,128,0,0.6) 92%, rgba(255,128,0,0) 100%)',
              }}
            />
            <ul className="relative grid grid-flow-col auto-cols-fr gap-3 py-10" style={{ minHeight: 220 }}>
              {products.map((p, i) => {
                const above = i % 2 === 0
                return (
                  <li key={p.slug} className="relative flex flex-col items-center">
                    <span
                      aria-hidden
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-container z-10"
                      style={{ boxShadow: '0 0 0 4px rgba(255, 128, 0, 0.15)' }}
                    />
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[120px] ${above ? 'bottom-[calc(50%+18px)]' : 'top-[calc(50%+18px)]'}`}
                    >
                      <Link
                        href={`/servicios/${p.slug}`}
                        className="block bg-white border border-outline-variant rounded-2xl px-2 py-2.5 text-center hover:border-primary hover:shadow-md transition-all group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-1.5 group-hover:bg-primary/20 transition-colors">
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
                            {p.icon}
                          </span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-tight text-on-surface m-0 leading-tight">
                          {p.menuLabel ?? p.name}
                        </p>
                      </Link>
                      <span
                        aria-hidden
                        className={`absolute left-1/2 -translate-x-1/2 w-px bg-outline-variant ${above ? 'top-full h-3.5' : 'bottom-full h-3.5'}`}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-on-surface-variant mt-3">
          ← Desliza para ver todo el catálogo →
        </p>
      </div>
    </div>
  )
}
