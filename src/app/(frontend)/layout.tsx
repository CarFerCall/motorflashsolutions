import React from 'react'
import type { Metadata, Viewport } from 'next'
import './styles.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getSiteUrl } from '@/lib/seo/site-url'
import { organizationSchema, websiteSchema, jsonLdScript } from '@/lib/seo/schema'

const SITE_NAME = 'Motorflash'
const DEFAULT_TITLE = 'Motorflash | Solución 360 e IA para Automoción'
const DEFAULT_DESCRIPTION =
  'Motorflash Ibérica: solución 360 con IA para marcas y concesionarios del motor. Multipublicador, CRM4YOU, Contact Center, IA en WhatsApp y más.'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: DEFAULT_TITLE, template: '%s | Motorflash' },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'es_ES',
    url: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/images/home-hero.png',
        width: 1200,
        height: 630,
        alt: 'Motorflash — Solución 360 e IA para Automoción',
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

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = jsonLdScript([organizationSchema(), websiteSchema()])

  return (
    <html lang="es">
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
        {await Navbar()}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
