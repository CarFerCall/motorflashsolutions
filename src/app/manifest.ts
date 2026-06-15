import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Motorflash | Solución 360 e IA para Automoción',
    short_name: 'Motorflash',
    description:
      'Solución 360 con IA para marcas y concesionarios del motor: Multipublicador, CRM4YOU, Contact Center, IA en WhatsApp y más.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ff8000',
    lang: 'es-ES',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  }
}
