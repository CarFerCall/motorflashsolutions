'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { MainMenuData, MenuItem } from '@/lib/navigation'

interface Props {
  menu: MainMenuData
}

export function NavbarClient({ menu }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra al cambiar de ruta
  useEffect(() => {
    setOpenIndex(null)
  }, [pathname])

  // Cierra al hacer click fuera o Escape
  useEffect(() => {
    if (openIndex === null) return
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenIndex(null)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [openIndex])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-outline-variant backdrop-blur-md transition-all ${
        scrolled ? 'h-16 shadow-md' : 'h-20'
      }`}
      style={{ background: 'rgba(255, 255, 255, 0.95)' }}
    >
      <div ref={containerRef} className="mf-container flex items-center h-full gap-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-motorflash.png"
            alt="Motorflash"
            width={140}
            height={32}
            priority
            style={{ height: 32, width: 'auto' }}
          />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
          {menu.items.map((item, idx) => (
            <NavItem
              key={`${item.label}-${idx}`}
              item={item}
              pathname={pathname}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((v) => (v === idx ? null : idx))}
            />
          ))}
        </div>

        <div className="ml-auto md:ml-0 flex items-center gap-3">
          {menu.cta?.label && menu.cta?.url && (
            <Link href={menu.cta.url} className="btn-primary !py-2.5 !px-6 !text-sm">
              {menu.cta.label}
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

function NavItem({
  item,
  pathname,
  isOpen,
  onToggle,
}: {
  item: MenuItem
  pathname: string | null
  isOpen: boolean
  onToggle: () => void
}) {
  if (item.kind === 'dropdown') {
    const children = item.children ?? []
    const isActive = children.some((c) => c.url && pathname?.startsWith(c.url))
    return (
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${
            isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          {item.label}
          <span
            className="material-symbols-outlined text-[18px] transition-transform"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            expand_more
          </span>
        </button>

        {isOpen && children.length > 0 && (
          <div role="menu" className="absolute left-0 top-full pt-2 w-80 z-50" onClick={onToggle}>
            <div className="bg-white rounded-2xl shadow-2xl border border-outline-variant p-2">
              {children.map((c, i) => (
                <Link
                  key={`${c.url}-${i}`}
                  href={c.url}
                  role="menuitem"
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container transition-colors text-sm font-medium text-on-surface"
                >
                  {c.icon && <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">{c.icon}</span>}
                  <span className="flex-1">
                    <span className="block">{c.label}</span>
                    {c.description && <span className="block text-xs text-on-surface-variant font-normal mt-0.5">{c.description}</span>}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  const isActive = item.url && (item.url === '/' ? pathname === '/' : pathname?.startsWith(item.url))
  return (
    <Link
      href={item.url ?? '#'}
      target={item.newTab ? '_blank' : undefined}
      rel={item.newTab ? 'noopener noreferrer' : undefined}
      className={`text-sm font-medium transition-colors ${
        isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      {item.label}
    </Link>
  )
}
