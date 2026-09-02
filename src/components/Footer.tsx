import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { getFooterCopy, type FooterLocale } from '@/lib/footer-content'

const SOCIAL_LINKS: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/motorflash/',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/motorflashsolutions/',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.22-.96-.48-1.38-.9a3.72 3.72 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.55a5.88 5.88 0 0 0-2.13 1.39A5.88 5.88 0 0 0 .62 4.14c-.3.76-.5 1.63-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.55 2.91.31.8.72 1.48 1.39 2.13a5.88 5.88 0 0 0 2.13 1.39c.76.3 1.63.5 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.55a5.88 5.88 0 0 0 2.13-1.39 5.88 5.88 0 0 0 1.39-2.13c.3-.76.5-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.55-2.91a5.88 5.88 0 0 0-1.39-2.13A5.88 5.88 0 0 0 19.86.62c-.76-.3-1.63-.5-2.91-.55C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@motorflashsolutions',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M19.32 5.56a5.35 5.35 0 0 1-3.14-1.03 5.36 5.36 0 0 1-2.13-4.19h-3.4v13.66a3.24 3.24 0 0 1-3.24 3.16 3.24 3.24 0 0 1-3.24-3.24 3.24 3.24 0 0 1 4.28-3.07V7.4a6.66 6.66 0 0 0-1.04-.08A6.62 6.62 0 0 0 .77 13.94a6.62 6.62 0 0 0 6.63 6.62 6.62 6.62 0 0 0 6.63-6.62V8.68a8.75 8.75 0 0 0 5.29 1.78V7.11a5.24 5.24 0 0 1 0-1.55Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@motorflashsolutions',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.4.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.9.52 9.4.52 9.4.52s7.5 0 9.4-.52a3 3 0 0 0 2.1-2.12c.33-1.9.5-3.83.5-5.8 0-1.97-.17-3.9-.5-5.8ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z" />
      </svg>
    ),
  },
]

export async function Footer() {
  const localeRaw = ((await getLocale()) as string) || 'es'
  const locale = (['es', 'ca', 'en', 'zh'].includes(localeRaw) ? localeRaw : 'es') as FooterLocale
  const products = orderedProducts(locale).slice(0, 6)
  const year = new Date().getFullYear()
  const t = await getFooterCopy(locale)

  return (
    <footer className="bg-white border-t border-outline-variant pt-20 pb-12">
      <div className="mf-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo-motorflash.png" alt="Motorflash" width={140} height={32} className="mb-4" style={{ height: 32, width: 'auto' }} />
            <p className="text-sm text-on-surface-variant">{t.tagline}</p>
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="w-12 h-12 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">{t.productsHeading}</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link prefetch={false} href={`/servicios/${p.slug}`} className="hover:text-primary transition-colors">{p.name}</Link>
                </li>
              ))}
              <li className="mt-2">
                <Link prefetch={false} href="/servicios" className="font-bold text-on-surface hover:text-primary">{t.viewAll}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">{t.companyHeading}</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li><Link prefetch={false} href="/compania" className="hover:text-primary transition-colors">{t.aboutUs}</Link></li>
              <li><Link prefetch={false} href="/historias-de-exito" className="hover:text-primary transition-colors">{t.successStories}</Link></li>
              {/* Enlace a /precios oculto temporalmente — la página sigue accesible por URL directa. */}
              <li><Link prefetch={false} href="/contacto" className="hover:text-primary transition-colors">{t.contact}</Link></li>
              <li>
                <Link prefetch={false} href="/canal-denuncias" className="hover:text-primary transition-colors">
                  {t.reportingChannel}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">{t.hqHeading}</h5>
            <p className="text-sm text-on-surface-variant mb-3">
              {t.hqAddress1}<br />{t.hqAddress2}
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container border border-outline-variant" title={t.isoQualityTitle}>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoQuality}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container border border-outline-variant" title={t.isoSecurityTitle}>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoSecurity}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-12 pt-8 border-t border-outline-variant">
          <p className="text-xs text-on-surface-variant m-0">{t.copyright.replace('{year}', String(year))}</p>
          <div className="flex gap-6 text-xs font-bold text-on-surface-variant">
            <Link
              prefetch={false}
              href={locale === 'es' ? '/privacidad' : `/${locale}/privacidad`}
              className="hover:text-primary"
            >
              {t.privacy}
            </Link>
            <Link
              prefetch={false}
              href={locale === 'es' ? '/politica-cookies' : `/${locale}/politica-cookies`}
              className="hover:text-primary"
            >
              {t.cookies}
            </Link>
            <Link
              prefetch={false}
              href={locale === 'es' ? '/aviso-legal' : `/${locale}/aviso-legal`}
              className="hover:text-primary"
            >
              {t.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
