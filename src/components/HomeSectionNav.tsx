'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export interface HomeSection {
  id: string
  label: string
}

interface Props {
  sections: HomeSection[]
}

/**
 * Menú desplegable de "saltar a sección" para la home.
 * Queda sticky bajo el navbar y al hacer click despliega la lista
 * completa de epígrafes. Cada item hace smooth-scroll a la
 * sección correspondiente (`#id`) con offset para el navbar.
 *
 * El componente también resalta la sección actualmente visible
 * usando un IntersectionObserver — útil cuando el usuario
 * scrollea sin abrir el dropdown.
 */
export function HomeSectionNav({ sections }: Props) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Cierra el panel al hacer click fuera o pulsar Escape.
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  // Marca como activa la sección con mayor proporción visible.
  useEffect(() => {
    if (typeof window === 'undefined' || sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    // Offset del navbar fijo (~80 px) para que el título no quede
    // tapado por el menú principal.
    const offset = 96
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setOpen(false)
  }, [])

  const activeLabel = sections.find((s) => s.id === activeId)?.label ?? sections[0]?.label ?? 'Saltar a sección'

  return (
    <div className="sticky top-20 z-30 flex justify-center px-4 -mt-4 mb-4" ref={containerRef}>
      <div className="relative w-full max-w-md">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-3 bg-white border border-outline-variant rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 20 }}>
              menu_book
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant shrink-0">
              Saltar a
            </span>
            <span className="text-sm font-semibold text-on-surface truncate">{activeLabel}</span>
          </span>
          <span
            className="material-symbols-outlined text-on-surface-variant shrink-0"
            style={{ fontSize: 22, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
          >
            expand_more
          </span>
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute left-0 right-0 mt-2 bg-white border border-outline-variant rounded-2xl shadow-2xl py-2 max-h-[60vh] overflow-y-auto"
          >
            {sections.map((s) => {
              const isActive = s.id === activeId
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-5 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                      isActive ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface hover:bg-surface-container-low'
                    }`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: isActive ? 'var(--primary)' : 'rgba(0,0,0,0.2)' }}
                    />
                    <span className="truncate">{s.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
