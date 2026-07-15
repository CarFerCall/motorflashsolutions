/**
 * Helpers para generar metadata SEO consistente en las 4 locales del sitio
 * (`es`, `ca`, `en`, `zh`). Cubren:
 *
 *   - canonical (path relativo, Next lo absolutiza con metadataBase)
 *   - alternates.languages con hreflang completo + x-default
 *   - openGraph con locale + alternateLocale + imagen absoluta
 *   - twitter card
 *   - keywords opcionales
 *
 * Usamos el prefijo `as-needed` de next-intl: `es` sin prefijo, el resto con
 * prefijo (`/en/...`, `/ca/...`, `/zh/...`). Ver `src/i18n/routing.ts`.
 */
import type { Metadata } from 'next'
import { absoluteUrl } from './site-url'

export const SEO_LOCALES = ['es', 'ca', 'en', 'zh'] as const
export type SeoLocale = (typeof SEO_LOCALES)[number]

export const HREFLANG_MAP: Record<SeoLocale, string> = {
  es: 'es-ES',
  ca: 'ca-ES',
  en: 'en',
  zh: 'zh-CN',
}

export const OG_LOCALE_MAP: Record<SeoLocale, string> = {
  es: 'es_ES',
  ca: 'ca_ES',
  en: 'en_US',
  zh: 'zh_CN',
}

/** Devuelve el path con prefijo de locale (`as-needed`: `es` sin prefijo). */
export function localizedPath(locale: SeoLocale, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  if (locale === 'es') return p
  if (p === '/') return `/${locale}`
  return `/${locale}${p}`
}

/**
 * Construye `alternates` con `canonical` apuntando al locale actual y
 * `languages` con las 4 URLs absolutas + `x-default` (apunta a `es`).
 */
export function buildAlternates(locale: SeoLocale, path: string): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {}
  for (const l of SEO_LOCALES) {
    languages[HREFLANG_MAP[l]] = absoluteUrl(localizedPath(l, path))
  }
  languages['x-default'] = absoluteUrl(localizedPath('es', path))
  return {
    canonical: localizedPath(locale, path),
    languages,
  }
}

interface OgParams {
  locale: SeoLocale
  path: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
}

export function buildOpenGraph(params: OgParams): NonNullable<Metadata['openGraph']> {
  const imagePath = params.image ?? '/images/home-hero.png'
  return {
    type: params.type ?? 'website',
    siteName: 'Motorflash',
    title: params.title,
    description: params.description,
    url: absoluteUrl(localizedPath(params.locale, params.path)),
    locale: OG_LOCALE_MAP[params.locale],
    alternateLocale: SEO_LOCALES.filter((l) => l !== params.locale).map((l) => OG_LOCALE_MAP[l]),
    images: [
      {
        url: absoluteUrl(imagePath),
        width: 1200,
        height: 630,
        alt: params.imageAlt ?? params.title,
      },
    ],
  }
}

/**
 * Genera un `Metadata` completo con hreflang, OG, Twitter y robots.
 *
 * En preview / dev (`VERCEL_ENV !== 'production'`) NO se sobreescribe
 * `robots`: el layout raíz ya lo pone en `noindex,nofollow`, así que dejamos
 * que herede. En producción añadimos `max-image-preview: large` y
 * `max-snippet: -1` para habilitar rich results grandes en SERP.
 */
export function buildPageMetadata(params: {
  locale: SeoLocale
  path: string
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  keywords?: string[]
  image?: string
  imageAlt?: string
}): Metadata {
  const og = buildOpenGraph({
    locale: params.locale,
    path: params.path,
    title: params.ogTitle ?? params.title,
    description: params.ogDescription ?? params.description,
    image: params.image,
    imageAlt: params.imageAlt,
  })
  const meta: Metadata = {
    title: params.title,
    description: params.description,
    keywords: params.keywords,
    alternates: buildAlternates(params.locale, params.path),
    openGraph: og,
    twitter: {
      card: 'summary_large_image',
      title: params.ogTitle ?? params.title,
      description: params.ogDescription ?? params.description,
      images: og.images,
    },
  }
  if (process.env.VERCEL_ENV === 'production') {
    meta.robots = {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    }
  }
  return meta
}
