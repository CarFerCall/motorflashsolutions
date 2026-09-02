import type { MetadataRoute } from 'next'
import { orderedProducts } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { absoluteUrl } from '@/lib/seo/site-url'

/**
 * sitemap.xml — generado dinámicamente desde:
 *   - rutas estáticas (home, /servicios, /precios, /compania, /contacto, /historias-de-exito)
 *   - catálogo estático de productos (`/servicios/{slug}`)
 *   - configuradores de precio activos (`/precios/{productSlug}`) — sólo PricingPlans con enabled=true
 *   - Pages dinámicas del CMS Payload con status=published (`/{slug}`)
 *
 * Las páginas "gracias" se excluyen porque son destinos post-formulario sin
 * valor para descubrimiento orgánico.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: absoluteUrl('/servicios'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/precios'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/compania'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/contacto'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/historias-de-exito'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('/canal-denuncias'), lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: absoluteUrl('/politica-cookies'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: absoluteUrl('/privacidad'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: absoluteUrl('/aviso-legal'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: absoluteUrl('/compania/sostenibilidad'), lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ]

  // Catálogo estático de productos = /servicios/{slug}
  const servicioRoutes: MetadataRoute.Sitemap = orderedProducts().map((p) => ({
    url: absoluteUrl(`/servicios/${p.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Páginas CMS y planes de precios: si Payload no responde durante build no
  // queremos romper el sitemap entero.
  let pageRoutes: MetadataRoute.Sitemap = []
  let pricingRoutes: MetadataRoute.Sitemap = []
  try {
    const payload = await getPayloadClient()

    const { docs: pages } = await payload.find({
      collection: 'pages',
      where: { status: { equals: 'published' } },
      limit: 500,
      depth: 0,
    })
    pageRoutes = pages
      .filter((p) => Boolean(p.slug))
      .map((p) => ({
        url: absoluteUrl(`/${p.slug}`),
        lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))

    const { docs: plans } = await payload.find({
      collection: 'pricing-plans',
      where: { enabled: { equals: true } },
      limit: 100,
      depth: 0,
    })
    pricingRoutes = plans
      .filter((plan) => Boolean(plan.productSlug))
      .map((plan) => ({
        url: absoluteUrl(`/precios/${plan.productSlug}`),
        lastModified: plan.updatedAt ? new Date(plan.updatedAt) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
  } catch (err) {
    console.error('[sitemap] No se pudo leer Payload, devuelvo sólo rutas estáticas:', err)
  }

  return [...staticRoutes, ...servicioRoutes, ...pricingRoutes, ...pageRoutes]
}
