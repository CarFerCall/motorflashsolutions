'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { orderedProducts } from '@/catalog/products'
import type { ProductLocale } from '@/catalog/products-i18n'

const SWIPE_HINT: Record<string, string> = {
  es: '← Desliza para ver todo el catálogo →',
  en: '← Swipe to see the full catalogue →',
  zh: '← 滑动查看完整目录 →',
}

/**
 * Línea horizontal con todos los productos del catálogo.
 *
 * Animación dirigida por scroll:
 *  - Al entrar la sección al viewport se "enciende" la línea naranja
 *    de izquierda a derecha (clip-path animado).
 *  - Los dots aparecen en cascada con un pequeño rebote (stagger).
 *  - Las cards caen desde arriba/abajo (según su lado) con stagger.
 *  - Sobre la línea, un flujo de energía discreto (dash que se mueve
 *    en loop infinito) que da sensación de "siempre activo".
 *  - Al pasar el ratón por una card: ligero zoom + sombra naranja.
 *
 * En desktop (lg+): grid sin scroll. En móvil/tablet: scroll lateral.
 */
export function ProductsTimeline() {
  const locale = useLocale() as ProductLocale
  const products = orderedProducts(locale)
  const total = products.length
  const swipeHint = SWIPE_HINT[locale] ?? SWIPE_HINT.es

  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative mf-products-tl ${inView ? 'mf-products-tl--in-view' : ''}`}>
      {/* ============================
          Desktop: rejilla sin scroll
          ============================ */}
      <div className="hidden lg:block mf-container">
        <div className="relative">
          {/* Pista base (línea gris) + capa de progreso naranja */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
            style={{ background: 'rgba(255,128,0,0.12)' }}
          />
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full mf-products-tl__line"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,128,0,0) 0%, rgba(255,128,0,0.85) 6%, rgba(255,128,0,0.85) 94%, rgba(255,128,0,0) 100%)',
            }}
          />
          {/* Capa de "flujo de energía" (dash que se mueve infinitamente) */}
          <div
            aria-hidden
            className="absolute left-[6%] right-[6%] top-1/2 h-[3px] -translate-y-1/2 rounded-full mf-products-tl__flow"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 8px, rgba(255,255,255,0.85) 10px, rgba(255,255,255,0) 14px)',
              backgroundSize: '60px 100%',
              mixBlendMode: 'overlay',
            }}
          />

          <ul
            className="relative grid grid-flow-col auto-cols-fr gap-1"
            style={{ minHeight: 200, padding: '20px 0' }}
          >
            {products.map((p, i) => {
              const above = i % 2 === 0
              return (
                <li
                  key={p.slug}
                  className="relative flex flex-col items-center mf-products-tl__item"
                  style={{ ['--i' as string]: i }}
                >
                  {/* Dot sobre la línea */}
                  <span
                    aria-hidden
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-[3px] border-surface-container z-10 mf-products-tl__dot"
                    style={{ boxShadow: '0 0 0 3px rgba(255, 128, 0, 0.15)' }}
                  />
                  {/* Card del producto */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[88px] mf-products-tl__card ${above ? 'bottom-[calc(50%+14px)] mf-products-tl__card--above' : 'top-[calc(50%+14px)] mf-products-tl__card--below'}`}
                  >
                    <Link
                      href={`/servicios/${p.slug}`}
                      className="block bg-white border border-outline-variant rounded-xl px-1.5 py-2 text-center hover:border-primary hover:shadow-lg transition-all group mf-products-tl__link"
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
              style={{ background: 'rgba(255,128,0,0.12)' }}
            />
            <div
              aria-hidden
              className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full mf-products-tl__line"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,128,0,0) 0%, rgba(255,128,0,0.85) 8%, rgba(255,128,0,0.85) 92%, rgba(255,128,0,0) 100%)',
              }}
            />
            <div
              aria-hidden
              className="absolute left-[8%] right-[8%] top-1/2 h-[3px] -translate-y-1/2 rounded-full mf-products-tl__flow"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 8px, rgba(255,255,255,0.85) 10px, rgba(255,255,255,0) 14px)',
                backgroundSize: '60px 100%',
                mixBlendMode: 'overlay',
              }}
            />
            <ul className="relative grid grid-flow-col auto-cols-fr gap-3 py-10" style={{ minHeight: 220 }}>
              {products.map((p, i) => {
                const above = i % 2 === 0
                return (
                  <li
                    key={p.slug}
                    className="relative flex flex-col items-center mf-products-tl__item"
                    style={{ ['--i' as string]: i }}
                  >
                    <span
                      aria-hidden
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-container z-10 mf-products-tl__dot"
                      style={{ boxShadow: '0 0 0 4px rgba(255, 128, 0, 0.15)' }}
                    />
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[120px] mf-products-tl__card ${above ? 'bottom-[calc(50%+18px)] mf-products-tl__card--above' : 'top-[calc(50%+18px)] mf-products-tl__card--below'}`}
                    >
                      <Link
                        href={`/servicios/${p.slug}`}
                        className="block bg-white border border-outline-variant rounded-2xl px-2 py-2.5 text-center hover:border-primary hover:shadow-md transition-all group mf-products-tl__link"
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
        <p className="text-center text-xs text-on-surface-variant mt-3">{swipeHint}</p>
      </div>
    </div>
  )
}
