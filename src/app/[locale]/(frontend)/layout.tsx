import React from 'react'
import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import './styles.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ElevenLabsWidget } from '@/components/elevenlabs/ElevenLabsWidget'
import { routing } from '@/i18n/routing'
import { absoluteUrl, getSiteUrl } from '@/lib/seo/site-url'
import { organizationSchema, websiteSchema, jsonLdScript } from '@/lib/seo/schema'
import { OG_LOCALE_MAP, SEO_LOCALES } from '@/lib/seo/i18n-metadata'

const SITE_NAME = 'Motorflash'
const DEFAULT_TITLE = 'Motorflash | Solución 360 para Automoción'
const DEFAULT_DESCRIPTION =
  'Motorflash Ibérica: solución 360 para marcas y concesionarios del motor. Publicación de stock, CRM, Contact Center, marketing digital y más — todo conectado en una sola plataforma.'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: DEFAULT_TITLE, template: '%s | Motorflash' },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': absoluteUrl('/'),
      'ca-ES': absoluteUrl('/ca'),
      en: absoluteUrl('/en'),
      'zh-CN': absoluteUrl('/zh'),
      'x-default': absoluteUrl('/'),
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: OG_LOCALE_MAP.es,
    alternateLocale: SEO_LOCALES.filter((l) => l !== 'es').map((l) => OG_LOCALE_MAP[l]),
    url: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/images/home-hero.png',
        width: 1200,
        height: 630,
        alt: 'Motorflash — Solución 360 para Automoción',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/images/home-hero.png'],
  },
  robots: {
    index: process.env.VERCEL_ENV === 'production',
    follow: process.env.VERCEL_ENV === 'production',
    googleBot: {
      index: process.env.VERCEL_ENV === 'production',
      follow: process.env.VERCEL_ENV === 'production',
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: true, address: false, email: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff8000',
}

export default async function FrontendLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Validamos el locale del segmento. Si la URL viene con un valor
  // distinto a 'es' | 'en' | 'zh', devolvemos 404 — evita que el
  // middleware deje pasar prefijos no soportados.
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  // Indica a next-intl el locale activo para que pueda hidratar
  // server components con `getTranslations` y similares.
  setRequestLocale(locale)

  const orgJsonLd = jsonLdScript([organizationSchema(), websiteSchema()])

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Geist:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: orgJsonLd }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          {await Navbar()}
          <main className="pt-20">{children}</main>
          {await Footer()}
          <ElevenLabsWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
