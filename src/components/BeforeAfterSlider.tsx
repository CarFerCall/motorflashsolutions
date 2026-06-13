'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
  initial?: number // 0 a 100, posición inicial del divisor
}

/**
 * Slider de comparación "antes / después" con divisor vertical
 * arrastrable. Funciona con ratón, dedo y teclado (flechas izq/der).
 *
 * Layout: el contenedor mantiene la relación de aspecto de la imagen
 * "after" (foto procesada). La foto "before" se renderiza por encima
 * con un clip-path que se anima al mover el handle.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Antes',
  afterAlt = 'Después',
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  className = '',
  initial = 50,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(initial)
  const [isDragging, setIsDragging] = useState(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rel = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, rel)))
  }, [])

  // Drag handlers
  useEffect(() => {
    if (!isDragging) return
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0]?.clientX : (e as MouseEvent).clientX
      if (typeof x === 'number') updateFromClientX(x)
    }
    const onUp = () => setIsDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [isDragging, updateFromClientX])

  const onPointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const x = 'touches' in e ? e.touches[0]?.clientX : e.clientX
    if (typeof x === 'number') updateFromClientX(x)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
    if (e.key === 'Home') setPos(0)
    if (e.key === 'End') setPos(100)
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-xl bg-surface-container-low ${className}`}
      onMouseDown={onPointerDown}
      onTouchStart={onPointerDown}
    >
      {/* After (debajo) — define el aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
          priority
        />
        {/* Before (encima, recortado por clip-path) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Etiquetas */}
        <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-black/70 text-white pointer-events-none">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-white pointer-events-none">
          {afterLabel}
        </span>

        {/* Línea divisora */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none"
          style={{ left: `calc(${pos}% - 1.5px)`, boxShadow: '0 0 16px rgba(0,0,0,0.35)' }}
        />

        {/* Handle */}
        <div
          role="slider"
          aria-label="Compara antes y después"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary shadow-xl flex items-center justify-center cursor-ew-resize transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/30"
          style={{
            left: `${pos}%`,
            boxShadow: '0 8px 24px rgba(255, 128, 0, 0.4), 0 0 0 1px rgba(0,0,0,0.05)',
          }}
        >
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>swap_horiz</span>
        </div>
      </div>

      {/* Hint */}
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/80 pointer-events-none bg-black/40 px-3 py-1 rounded-full">
        Arrastra para comparar
      </p>
    </div>
  )
}
