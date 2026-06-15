import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata = {
  title: 'Historias de éxito',
  description:
    'Concesionarios y marcas del motor que ya están vendiendo más gracias a Motorflash. Casos reales con resultados medibles.',
  alternates: { canonical: '/historias-de-exito' },
  openGraph: {
    title: 'Historias de éxito — Motorflash',
    description: 'Concesionarios y marcas que ya están vendiendo más con Motorflash.',
    url: '/historias-de-exito',
  },
}

export default function HistoriasPage() {
  return (
    <section className="py-32">
      <div className="mf-container text-center">
        <Reveal>
          <span className="mf-eyebrow">Historias de éxito</span>
          <h1 className="text-4xl md:text-display-lg font-semibold mb-3">
            Concesionarios que ya están vendiendo más con Motorflash
          </h1>
          <p className="text-on-surface-variant mx-auto max-w-2xl mb-8">
            Estamos recopilando los casos de marcas y concesionarios que han transformado su operación comercial con
            nuestras soluciones.
          </p>

          <span className="mf-chip mb-8">Próximamente</span>

          <div className="mt-6">
            <Link href="/contacto" className="btn-primary">
              Quiero conocer casos reales
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
