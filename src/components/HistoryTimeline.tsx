'use client'

import { useEffect, useRef, useState } from 'react'

export interface TimelineItem {
  year: string
  title: string
  desc: string
  icon: string
  accent?: boolean
}

interface Props {
  items: TimelineItem[]
}

/**
 * Timeline animada con scroll-driven activation.
 *
 *  - Una línea naranja central se va llenando del primer hito al hito
 *    actualmente más centrado en el viewport.
 *  - El dot del hito activo se agranda, el card hace zoom suave y el año
 *    cambia de "fantasma" a sólido naranja con un contador.
 *  - Los demás hitos quedan más tenues, dejando claro dónde estás en la
 *    línea temporal.
 *  - Mobile: cae a un acordeón vertical sin la línea central; cada card
 *    se ilumina al entrar en pantalla.
 */
export function HistoryTimeline({ items }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const [progressPct, setProgressPct] = useState(0)
  const [seen, setSeen] = useState<Set<number>>(new Set())

  useEffect(() => {
    const handle = () => {
      if (!containerRef.current) return
      const containerBox = containerRef.current.getBoundingClientRect()
      const viewportMid = window.innerHeight * 0.5

      // Activo = hito cuyo centro está más cerca del centro del viewport.
      let bestIdx = 0
      let bestDist = Infinity
      itemRefs.current.forEach((el, idx) => {
        if (!el) return
        const box = el.getBoundingClientRect()
        const mid = box.top + box.height / 2
        const dist = Math.abs(mid - viewportMid)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = idx
        }
      })

      setActiveIdx(bestIdx)
      setSeen((prev) => {
        if (prev.has(bestIdx)) return prev
        const next = new Set(prev)
        next.add(bestIdx)
        return next
      })

      // Progreso: 0 al inicio del contenedor, 1 al final.
      const containerStart = containerBox.top + window.scrollY
      const containerEnd = containerBox.top + window.scrollY + containerBox.height
      const scrollMid = window.scrollY + viewportMid
      const raw = (scrollMid - containerStart) / (containerEnd - containerStart)
      setProgressPct(Math.max(0, Math.min(1, raw)) * 100)
    }
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [items.length])

  return (
    <div ref={containerRef} className="relative">
      {/* Línea central (desktop) — fondo */}
      <div aria-hidden className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-outline-variant" />
      {/* Línea central (desktop) — progreso naranja */}
      <div
        aria-hidden
        className="hidden md:block absolute left-1/2 top-0 w-[3px] -translate-x-1/2 bg-primary rounded-full transition-[height] duration-200 ease-out"
        style={{
          height: `${progressPct}%`,
          boxShadow: '0 0 16px rgba(255, 128, 0, 0.45)',
        }}
      />

      <div className="space-y-12 md:space-y-20">
        {items.map((item, idx) => {
          const reversed = idx % 2 === 1
          const isActive = idx === activeIdx
          const isPast = seen.has(idx)
          return (
            <div
              key={item.year}
              ref={(el) => {
                itemRefs.current[idx] = el
              }}
              className="relative"
            >
              {/* Dot central */}
              <div
                aria-hidden
                className={`hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10 transition-all duration-300 ${
                  isActive ? 'bg-primary border-white scale-150' : isPast ? 'bg-primary border-primary/20' : 'bg-white border-outline-variant'
                }`}
                style={isActive ? { boxShadow: '0 0 0 12px rgba(255, 128, 0, 0.18), 0 0 40px rgba(255, 128, 0, 0.5)' } : undefined}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Lado del texto */}
                <div className={`${reversed ? 'md:order-2' : 'md:text-right md:order-1'}`}>
                  <span
                    className={`font-display block mb-2 leading-none font-semibold transition-all duration-500 ${
                      isActive ? 'text-primary text-7xl md:text-8xl' : isPast ? 'text-primary/40 text-6xl' : 'text-on-surface/10 text-6xl'
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3
                    className={`text-2xl md:text-3xl font-semibold mb-3 transition-colors duration-300 ${
                      isActive ? 'text-on-surface' : 'text-on-surface/70'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-on-surface-variant max-w-md ${reversed ? '' : 'md:ml-auto md:text-right'} transition-opacity duration-500`}
                    style={{ opacity: isActive ? 1 : 0.7 }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Lado del icono */}
                <div className={`${reversed ? 'md:order-1' : 'md:order-2'}`}>
                  <div
                    className={`h-64 rounded-3xl flex items-center justify-center border transition-all duration-500 ${
                      item.accent
                        ? 'bg-primary border-transparent text-white'
                        : isActive
                          ? 'bg-primary/10 border-primary/30 text-primary'
                          : 'bg-surface-container border-outline-variant text-primary/60'
                    }`}
                    style={{
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                      boxShadow: isActive ? '0 24px 60px rgba(255, 128, 0, 0.18)' : 'none',
                    }}
                  >
                    <span
                      className="material-symbols-outlined transition-transform duration-700"
                      style={{
                        fontSize: 80,
                        opacity: item.accent ? 0.3 : isActive ? 0.55 : 0.35,
                        transform: isActive ? 'rotate(-6deg) scale(1.1)' : 'rotate(0) scale(1)',
                      }}
                    >
                      {item.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
