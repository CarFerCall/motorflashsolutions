import Image from 'next/image'
import { Suspense } from 'react'
import { orderedProducts } from '@/catalog/products'
import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'

export const metadata = {
  title: 'Contacto',
  description:
    'Cuéntanos tu caso y un especialista de Motorflash te llamará en menos de 24 horas para analizar cómo digitalizar tu concesionario.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto — Motorflash',
    description:
      'Cuéntanos tu caso y un especialista de Motorflash te llamará en menos de 24 horas.',
    url: '/contacto',
  },
}

export default function ContactoPage() {
  const products = orderedProducts().map((p) => ({ slug: p.slug, name: p.name }))

  return (
    <section className="py-32">
      <div className="mf-container">
        <Reveal>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-outline-variant bg-surface-container">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Info dark */}
              <div className="p-12 md:p-16" style={{ background: '#121414', color: '#fff' }}>
                <h1 className="text-3xl md:text-display-lg font-semibold mb-6">¿Hablamos sobre tu negocio?</h1>
                <p className="mb-12 text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Cuéntanos tu caso y un especialista te llamará en menos de 24 horas para analizar cómo podemos ayudarte a vender más.
                </p>

                <a href="tel:+34910788575" className="flex items-center gap-6 mb-8 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary" style={{ background: 'rgba(255, 128, 0, 0.20)' }}>
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest m-0" style={{ opacity: 0.55 }}>Teléfono</p>
                    <p className="text-lg font-bold m-0">+34 910 788 575</p>
                  </div>
                </a>

                <a href="mailto:comercial@motorflash.com" className="flex items-center gap-6 mb-8 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary" style={{ background: 'rgba(255, 128, 0, 0.20)' }}>
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest m-0" style={{ opacity: 0.55 }}>Correo Comercial</p>
                    <p className="text-lg font-bold m-0">comercial@motorflash.com</p>
                  </div>
                </a>

                <div className="mt-12 pt-6">
                  <Image src="/images/google-partner.png" alt="Google Partner" width={120} height={32} style={{ height: 32, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                </div>
              </div>

              {/* Form */}
              <div className="p-12 md:p-16 bg-white">
                <Suspense fallback={<div>Cargando…</div>}>
                  <ContactForm products={products} />
                </Suspense>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
