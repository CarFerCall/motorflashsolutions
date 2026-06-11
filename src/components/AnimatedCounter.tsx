'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Cuenta desde 0 hasta `target` cuando entra en el viewport.
 * Equivalente al `.counter` con data-target del Symfony anterior.
 */
export function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || startedRef.current) continue
          startedRef.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const ratio = Math.min(1, elapsed / duration)
            // Easing easeOutCubic
            const eased = 1 - Math.pow(1 - ratio, 3)
            setValue(Math.round(target * eased))
            if (ratio < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
