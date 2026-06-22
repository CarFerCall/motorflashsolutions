'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import type { Product } from '@/catalog/products'
import { Reveal } from '@/components/Reveal'
import {
  STATIC_PRODUCT_UI,
  type ProductUiCopy,
  type ProductUiLocale,
} from '@/lib/product-ui-content'

/**
 * Subset del copy del CMS que necesita el carrusel. Cuando viene por
 * prop (server padre que lee `getProductUiCopy(locale)`) lo usamos tal
 * cual. Cuando no viene (p. ej. dentro del editor visual Puck, que
 * renderiza en cliente) caemos al STATIC del wrapper.
 */
export type ProductCarouselLabels = {
  eyebrow: ProductUiCopy['carouselEyebrow']
  title: ProductUiCopy['carouselTitle']
  lead: ProductUiCopy['carouselLead']
  prevAria: ProductUiCopy['carouselPrevAria']
  nextAria: ProductUiCopy['carouselNextAria']
  view: ProductUiCopy['carouselView']
  viewAll: ProductUiCopy['carouselViewAll']
}

function labelsFromStatic(locale: ProductUiLocale): ProductCarouselLabels {
  const c = STATIC_PRODUCT_UI[locale] ?? STATIC_PRODUCT_UI.es
  return {
    eyebrow: c.carouselEyebrow,
    title: c.carouselTitle,
    lead: c.carouselLead,
    prevAria: c.carouselPrevAria,
    nextAria: c.carouselNextAria,
    view: c.carouselView,
    viewAll: c.carouselViewAll,
  }
}

export function ProductCarousel({ products, t }: { products: Product[]; t?: ProductCarouselLabels }) {
  const locale = useLocale() as ProductUiLocale
  const labels = useMemo<ProductCarouselLabels>(() => t ?? labelsFromStatic(locale), [t, locale])

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateButtons = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateButtons()
    el.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      el.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <div className="mf-container">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="mf-eyebrow">{labels.eyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">{labels.title}</h2>
            <p className="text-on-surface-variant mt-3">{labels.lead}</p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              aria-label={labels.prevAria}
              className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-current"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              aria-label={labels.nextAria}
              className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-current"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </Reveal>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-8 -mx-5 px-5 md:-mx-16 md:px-16 scroll-smooth"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'thin' }}
      >
        {products.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}
            className="flex-shrink-0"
          >
            <Link
              href={`/servicios/${p.slug}`}
              className={`mf-product-card block w-[320px] md:w-[380px] h-full ${p.highlight ? 'highlight' : ''}`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="mf-icon-tile">
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.name}</h3>
              <p className={`mb-4 ${p.highlight ? '' : 'text-on-surface-variant'}`}>{p.tagline}</p>
              <span className={`inline-flex items-center gap-2 font-bold ${p.highlight ? '' : 'text-primary'}`}>
                {labels.view} {p.name}
                <span className="material-symbols-outlined">east</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/servicios" className="btn-secondary">
          {labels.viewAll}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  )
}
