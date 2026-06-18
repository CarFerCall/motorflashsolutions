import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { orderedProducts, productBySlug } from '@/catalog/products'
import { GenericProductPage } from '@/components/product/GenericProductPage'
import { Crm4you } from '@/components/product/stitch/Crm4you'
import { Spyne } from '@/components/product/stitch/Spyne'
import { ContactCenter } from '@/components/product/stitch/ContactCenter'
import { PortalPublicacion } from '@/components/product/stitch/PortalPublicacion'
import { Ia } from '@/components/product/stitch/Ia'
import { SolucionesWeb } from '@/components/product/stitch/SolucionesWeb'
import { breadcrumbSchema, jsonLdScript, serviceSchema } from '@/lib/seo/schema'

const stitchPages: Record<string, React.ComponentType> = {
  crm4you: Crm4you,
  spyne: Spyne,
  'contact-center': ContactCenter,
  'portal-publicacion': PortalPublicacion,
  ia: Ia,
  'soluciones-web': SolucionesWeb,
}

export const dynamicParams = false

export function generateStaticParams() {
  return orderedProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = productBySlug(slug)
  if (!product) return { title: 'Servicio no encontrado' }
  const canonical = `/servicios/${slug}`
  return {
    title: `${product.name}`,
    description: product.tagline,
    alternates: { canonical },
    openGraph: {
      title: `${product.name} — Motorflash`,
      description: product.tagline,
      url: canonical,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productBySlug(slug)
  if (!product) notFound()

  const StitchComponent = stitchPages[slug]
  const jsonLd = jsonLdScript([
    serviceSchema({
      name: product.name,
      description: product.intro || product.tagline,
      slug: product.slug,
    }),
    breadcrumbSchema([
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' },
      { name: product.name, url: `/servicios/${product.slug}` },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {StitchComponent ? <StitchComponent /> : <GenericProductPage product={product} />}
    </>
  )
}
