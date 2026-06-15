import Link from 'next/link'
import { notFound } from 'next/navigation'
import { productBySlug } from '@/catalog/products'

export const metadata = {
  title: 'Solicitud recibida',
  robots: { index: false, follow: false },
}

export default async function GraciasPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ quote?: string }>
}) {
  const { slug } = await params
  const { quote } = await searchParams
  const product = productBySlug(slug)
  if (!product) notFound()

  return (
    <section className="py-32">
      <div className="mf-container text-center">
        <div className="mf-icon-tile mx-auto mb-4" style={{ width: 96, height: 96, borderRadius: '1.5rem' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 56 }}>check_circle</span>
        </div>
        <h1 className="text-3xl md:text-display-lg font-semibold mb-3">Hemos recibido tu solicitud</h1>
        <p className="text-on-surface-variant mx-auto max-w-2xl mb-6">
          {quote && (
            <>Tu cotización <strong>#{quote}</strong> para <strong>{product.name}</strong> ha quedado registrada. </>
          )}
          En menos de 24 horas un especialista te llamará con la oferta personalizada. Te hemos enviado también una confirmación a tu email.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link href="/servicios" className="btn-secondary">Ver todos los servicios</Link>
          <Link href="/" className="btn-primary">Volver al inicio</Link>
        </div>
      </div>
    </section>
  )
}
