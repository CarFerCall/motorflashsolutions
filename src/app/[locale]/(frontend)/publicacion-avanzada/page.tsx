import type { Metadata } from 'next'
import Link from 'next/link'
import { PlateDemo } from '@/components/publicacion-avanzada/PlateDemo'

export const metadata: Metadata = {
  title: 'Publicación avanzada · Demo por matrícula',
  description:
    'Consulta una matrícula española y recupera la versión exacta, potencia, cambio, extras de fábrica y etiqueta DGT de esa unidad. Datos verificados del fabricante — solo Motorflash lo hace.',
  alternates: { canonical: '/publicacion-avanzada' },
}

export default function PublicacionAvanzadaPage() {
  return (
    <div className="font-display text-on-surface">
      <PlateDemo />

      {/* CTA */}
      <section className="bg-white border-t border-outline-variant">
        <div className="mf-container py-16 md:py-20 text-center">
          <span className="mf-eyebrow">Diferenciador único</span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-4">
            ¿Quieres publicar con datos verificados de fábrica?
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            Somos el único multipublicador que verifica versión y extras por VIN. Sin estimaciones, con la etiqueta DGT correcta y con todo el equipamiento opcional desglosado uno a uno.
          </p>
          <Link
            href="/contacto?servicio=dealer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Solicitar Publicación avanzada
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
