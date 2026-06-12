import React from 'react'
import './styles.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Motorflash | Solución 360 e IA para Automoción',
  description:
    'Motorflash Ibérica: solución 360 con IA para marcas y concesionarios del motor. Multipublicador, CRM4YOU, Contact Center, IA en WhatsApp y más.',
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo-motorflash.png" />
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
      </head>
      <body>
        {await Navbar()}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
