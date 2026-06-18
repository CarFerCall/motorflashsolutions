'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { MainMenuData, MenuItem } from '@/lib/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'

interface Props {
  menu: MainMenuData
}

export function NavbarClient({ menu }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
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
    setMobileOpen(false)
  }, [pathname])

  // Bloquea scroll del body cuando el drawer móvil está abierto
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileOpen])

  // Cierra al hacer click fuera o Escape (solo desktop dropdowns)
  useEffect(() => {
    if (openIndex === null) return
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenIndex(null)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenIndex(null)
        setMobileOpen(false)
      }
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
    <>
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

          {/* Menú desktop */}
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
            {/* Selector de idioma (oculto en móvil porque ya aparece dentro del drawer) */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {menu.cta?.label && menu.cta?.url && (
              <Link href={menu.cta.url} className="btn-primary !py-2.5 !px-6 !text-sm hidden sm:inline-flex">
                {menu.cta.label}
              </Link>
            )}

            {/* Botón hamburguesa (solo móvil) */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-xl hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface" style={{ fontSize: 28 }}>
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer móvil */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menu={menu}
        pathname={pathname}
        topOffset={scrolled ? 64 : 80}
      />
    </>
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

function MobileDrawer({
  open,
  onClose,
  menu,
  pathname,
  topOffset,
}: {
  open: boolean
  onClose: () => void
  menu: MainMenuData
  pathname: string | null
  topOffset: number
}) {
  const [expanded, setExpanded] = useState<number | null>(null)

  // Cuando se cierra el drawer, recoge los desplegables
  useEffect(() => {
    if (!open) setExpanded(null)
  }, [open])

  return (
    <>
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <aside
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 bg-white overflow-y-auto transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ top: topOffset, maxHeight: `calc(100vh - ${topOffset}px)` }}
        aria-hidden={!open}
      >
        <nav className="p-4 pb-8">
          <ul className="space-y-1">
            {menu.items.map((item, idx) => (
              <li key={`${item.label}-${idx}`}>
                {item.kind === 'dropdown' ? (
                  <MobileDropdown
                    item={item}
                    pathname={pathname}
                    isExpanded={expanded === idx}
                    onToggle={() => setExpanded((v) => (v === idx ? null : idx))}
                    onLinkClick={onClose}
                  />
                ) : (
                  <Link
                    href={item.url ?? '#'}
                    target={item.newTab ? '_blank' : undefined}
                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                    onClick={onClose}
                    className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive(item.url, pathname) ? 'text-primary bg-primary/5' : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {menu.cta?.label && menu.cta?.url && (
            <div className="mt-6 pt-6 border-t border-outline-variant">
              <Link href={menu.cta.url} onClick={onClose} className="btn-primary w-full justify-center">
                {menu.cta.label}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          )}

          {/* Selector de idioma dentro del drawer móvil */}
          <div className="mt-6 pt-6 border-t border-outline-variant">
            <LanguageSwitcher fullWidth />
          </div>
        </nav>
      </aside>
    </>
  )
}

function MobileDropdown({
  item,
  pathname,
  isExpanded,
  onToggle,
  onLinkClick,
}: {
  item: MenuItem
  pathname: string | null
  isExpanded: boolean
  onToggle: () => void
  onLinkClick: () => void
}) {
  const children = item.children ?? []
  const isActiveSection = children.some((c) => c.url && pathname?.startsWith(c.url))
  return (
    <div className="rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 text-base font-semibold transition-colors ${
          isActiveSection ? 'text-primary' : 'text-on-surface hover:bg-surface-container'
        }`}
      >
        <span>{item.label}</span>
        <span
          className="material-symbols-outlined text-on-surface-variant transition-transform"
          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </button>
      {isExpanded && (
        <ul className="pl-2 pb-2 space-y-0.5">
          {children.map((c, i) => (
            <li key={`${c.url}-${i}`}>
              <Link
                href={c.url}
                onClick={onLinkClick}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container transition-colors"
              >
                {c.icon && <span className="material-symbols-outlined text-primary text-[20px]">{c.icon}</span>}
                <span className="flex-1">
                  <span className="block">{c.label}</span>
                  {c.description && <span className="block text-xs text-on-surface-variant font-normal mt-0.5">{c.description}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function isActive(url: string | null | undefined, pathname: string | null): boolean {
  if (!url) return false
  if (url === '/') return pathname === '/'
  return Boolean(pathname?.startsWith(url))
}
