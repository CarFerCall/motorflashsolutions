'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState, useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'

const LOCALE_META: Record<Locale, { label: string; flag: string; short: string }> = {
  es: { label: 'Español', flag: '🇪🇸', short: 'ES' },
  ca: { label: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿', short: 'CA' },
  en: { label: 'English', flag: '🇬🇧', short: 'EN' },
  zh: { label: '中文', flag: '🇨🇳', short: 'ZH' },
}

interface Props {
  // Cuando se usa dentro del drawer móvil, el botón debe ocupar el
  // ancho completo. Por defecto es estilo "chip" inline.
  fullWidth?: boolean
}

/**
 * Selector de idioma para la cabecera. Muestra un botón con el
 * idioma actual (bandera + código) y al hacer click despliega la
 * lista de idiomas disponibles. Al elegir uno, navegamos a la misma
 * ruta en el nuevo idioma usando el wrapper de next-intl que
 * preserva el path y los params.
 */
export function LanguageSwitcher({ fullWidth = false }: Props) {
  const t = useTranslations('LanguageSwitcher')
  const locale = useLocale() as Locale
  const router = useRouter()
  // `usePathname` de @/i18n/navigation devuelve el path SIN el
  // prefijo de locale y con los parámetros dinámicos sustituidos
  // (p. ej. `/servicios/crm4you`). Por eso basta con pasarlo tal
  // cual al `router.replace` con un `locale` distinto.
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const switchTo = useCallback(
    (next: Locale) => {
      if (next === locale) {
        setOpen(false)
        return
      }
      startTransition(() => {
        router.replace(pathname, { locale: next })
        setOpen(false)
      })
    },
    [locale, pathname, router],
  )

  const current = LOCALE_META[locale]

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('ariaLabel')}
        disabled={isPending}
        className={`inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white px-3 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container transition-colors ${
          fullWidth ? 'w-full justify-between' : ''
        } ${isPending ? 'opacity-60' : ''}`}
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden style={{ fontSize: 16, lineHeight: 1 }}>{current.flag}</span>
          <span className="tracking-wider">{current.short}</span>
        </span>
        <span
          className="material-symbols-outlined text-on-surface-variant"
          style={{ fontSize: 18, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}
        >
          expand_more
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('label')}
          className={`absolute z-50 mt-2 min-w-[180px] rounded-2xl bg-white border border-outline-variant shadow-2xl py-2 ${
            fullWidth ? 'left-0 right-0' : 'right-0'
          }`}
        >
          {routing.locales.filter((code) => code !== 'zh').map((code) => {
            const meta = LOCALE_META[code]
            const active = code === locale
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => switchTo(code)}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                    active ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span aria-hidden style={{ fontSize: 18, lineHeight: 1 }}>{meta.flag}</span>
                  <span className="flex-1">{meta.label}</span>
                  {active && (
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                      check
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
