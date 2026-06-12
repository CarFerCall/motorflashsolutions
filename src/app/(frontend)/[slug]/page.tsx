import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

export const dynamic = 'force-dynamic'

// Slugs reservados por rutas estáticas para evitar colisiones desde el CMS.
const RESERVED_SLUGS = new Set([
  'admin',
  'api',
  'compania',
  'contacto',
  'historias-de-exito',
  'precios',
  'servicios',
  'images',
])

interface RouteParams {
  params: Promise<{ slug: string }>
}

async function findPage(slug: string) {
  if (RESERVED_SLUGS.has(slug)) return null
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: RouteParams) {
  const { slug } = await params
  const page = await findPage(slug)
  if (!page) return {}
  const seo = (page as any).seo ?? {}
  return {
    title: seo.metaTitle || page.title,
    description: seo.metaDescription || undefined,
  }
}

export default async function DynamicPage({ params }: RouteParams) {
  const { slug } = await params
  const page = await findPage(slug)
  if (!page) notFound()
  const blocks = ((page as any).blocks ?? []) as Array<{ blockType: string; [k: string]: any }>
  return <BlockRenderer blocks={blocks} />
}
