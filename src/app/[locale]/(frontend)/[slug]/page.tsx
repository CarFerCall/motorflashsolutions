import { headers as nextHeaders } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { PuckRender } from '@/components/PuckRender'
import { PageLivePreview } from '@/components/PageLivePreview'

export const dynamic = 'force-dynamic'

// Slugs reservados por rutas estáticas para evitar colisiones desde el CMS.
const RESERVED_SLUGS = new Set([
  'admin',
  'api',
  'canal-denuncias',
  'compania',
  'contacto',
  'ecosistema-tecnico',
  'historias-de-exito',
  'precios',
  'publicacion-avanzada',
  'servicios',
  'images',
])

interface RouteParams {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [k: string]: string | string[] | undefined }>
}

async function findPage(slug: string, opts: { includeDrafts: boolean }) {
  if (RESERVED_SLUGS.has(slug)) return null
  const payload = await getPayloadClient()
  const where: any = { slug: { equals: slug } }
  if (!opts.includeDrafts) {
    where.status = { equals: 'published' }
  }
  const { docs } = await payload.find({
    collection: 'pages',
    where,
    limit: 1,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: RouteParams) {
  const { slug } = await params
  const page = await findPage(slug, { includeDrafts: false })
  if (!page) return {}
  const seo = (page as any).seo ?? {}
  const title = seo.metaTitle || page.title
  const description = seo.metaDescription || undefined
  const canonical = `/${slug}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical },
  }
}

// Solo permitir `?livePreview=true` a usuarios autenticados de Payload.
// Sin este check, cualquiera con la URL podía ver borradores no
// publicados añadiendo el query param (revisión de seguridad #A2).
async function isAuthenticatedPayloadUser(): Promise<boolean> {
  try {
    const payload = await getPayloadClient()
    const hdrs = await nextHeaders()
    const { user } = await payload.auth({ headers: hdrs as unknown as Headers })
    return Boolean(user)
  } catch {
    return false
  }
}

export default async function DynamicPage({ params, searchParams }: RouteParams) {
  const { slug } = await params
  const sp = await searchParams
  const requestedLivePreview = sp.livePreview === 'true'
  const isLivePreview = requestedLivePreview && (await isAuthenticatedPayloadUser())

  const page = await findPage(slug, { includeDrafts: isLivePreview })
  if (!page) notFound()

  if (isLivePreview) {
    const serverURL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
      'http://localhost:3100'
    return <PageLivePreview initialData={page} serverURL={serverURL} />
  }

  return <PuckRender data={(page as any).puckData} />
}
