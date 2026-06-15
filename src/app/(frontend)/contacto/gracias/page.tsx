import Link from 'next/link'

export const metadata = {
  title: 'Mensaje recibido',
  robots: { index: false, follow: false },
}

export default function ContactoGraciasPage() {
  return (
    <section className="py-32">
      <div className="mf-container text-center">
        <div className="mf-icon-tile mx-auto mb-4" style={{ width: 96, height: 96, borderRadius: '1.5rem' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 56 }}>check_circle</span>
        </div>
        <h1 className="text-3xl md:text-display-lg font-semibold mb-3">Hemos recibido tu mensaje</h1>
        <p className="text-on-surface-variant mx-auto max-w-2xl mb-6">
          Un especialista comercial te contactará en menos de 24 horas. Te hemos enviado también una confirmación a tu email.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link href="/servicios" className="btn-secondary">Ver todos los servicios</Link>
          <Link href="/" className="btn-primary">Volver al inicio</Link>
        </div>
      </div>
    </section>
  )
}
