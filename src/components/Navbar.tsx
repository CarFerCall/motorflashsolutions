'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { orderedProducts } from '@/catalog/products'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  // Navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el dropdown al cambiar de ruta
  useEffect(() => {
    setProductsOpen(false)
  }, [pathname])

  // Cierra al hacer click fuera o tecla Escape
  useEffect(() => {
    if (!productsOpen) return
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [productsOpen])

  const products = orderedProducts()
  const isProductRoute = pathname?.startsWith('/servicios') ?? false

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-outline-variant backdrop-blur-md transition-all ${
        scrolled ? 'h-16 shadow-md' : 'h-20'
      }`}
      style={{ background: 'rgba(255, 255, 255, 0.95)' }}
    >
      <div className="mf-container flex items-center h-full gap-6">
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
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Inicio
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              aria-haspopup="menu"
              className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                isProductRoute ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Productos
              <span
                className="material-symbols-outlined text-[18px] transition-transform"
                style={{ transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                expand_more
              </span>
            </button>

            {productsOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full pt-2 w-80 z-50"
                onClick={() => setProductsOpen(false)}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-outline-variant p-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/servicios/${p.slug}`}
                      role="menuitem"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container transition-colors text-sm font-medium text-on-surface"
                    >
                      <span className="material-symbols-outlined text-primary text-[18px]">{p.icon}</span>
                      <span>{p.menuLabel}</span>
                    </Link>
                  ))}
                  <div className="my-2 border-t border-outline-variant" />
                  <Link
                    href="/servicios"
                    role="menuitem"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-surface-container text-sm font-bold text-primary"
                  >
                    Ver catálogo completo →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/compania"
            className={`text-sm font-medium transition-colors ${pathname === '/compania' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Nosotros
          </Link>
          <Link
            href="/historias-de-exito"
            className={`text-sm font-medium transition-colors ${pathname === '/historias-de-exito' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Historias de éxito
          </Link>
          <Link
            href="/precios"
            className={`text-sm font-medium transition-colors ${pathname?.startsWith('/precios') ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Precios
          </Link>
        </div>

        <div className="ml-auto md:ml-0 flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hidden md:inline-block">language</span>
          <Link href="/contacto" className="btn-primary !py-2.5 !px-6 !text-sm">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}
