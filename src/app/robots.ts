import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/seo/site-url'

/**
 * robots.txt
 *
 * Sólo permitimos indexar el deploy de producción. En preview Vercel ya inyecta
 * `noindex` automáticamente; aquí además bloqueamos el crawl entero.
 */
export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === 'production'
  const baseUrl = getSiteUrl()

  if (!isProd) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      host: baseUrl,
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Áreas privadas y endpoints internos: nunca indexar.
        disallow: ['/admin', '/admin/', '/api/', '/contacto/gracias', '/precios/*/gracias'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
