import Image from 'next/image'
import Link from 'next/link'

export function Ia() {
  const productSlug = 'ia'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: '#fafafa' }}>
        <div className="absolute inset-0 z-0">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div aria-hidden className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 50% 50%, #ff8000 0%, transparent 50%)' }} />
          <div aria-hidden className="w-full h-full opacity-10 grayscale" style={{ backgroundImage: "url('/images/products/ia-hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div className="relative z-20 mf-container grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 flex flex-col justify-center gap-8">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">IA GENERATIVA PARA AUTOMOCIÓN</span>
            <h1 className="text-5xl md:text-display-lg font-bold leading-none">
              El Motor de tu <br /> <span className="text-primary">Inteligencia</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl">
              Automatiza procesos, optimiza tu inventario y transforma la experiencia de tus clientes con la plataforma de IA líder diseñada exclusivamente para el sector del motor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform orange-glow">
                DESCUBRE MOTORFLASH IA
              </Link>
              <Link href="/servicios" className="inline-block border border-on-surface/20 text-on-surface px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-on-surface/5 transition-colors">
                SOLICITAR DEMO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="py-24 mf-container bg-white">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Potencia Automotriz en cada Byte</h2>
          <p className="text-on-surface-variant">Soluciones integrales para la era digital del concesionario.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 glass-card p-10 rounded-2xl flex flex-col justify-between border border-gray-100 shadow-sm relative">
            <div className="z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
              <h3 className="text-xl font-medium mb-4">Análisis Predictivo de Stock</h3>
              <p className="text-sm text-on-surface-variant">
                Anticípate a la demanda del mercado. Nuestra IA analiza tendencias históricas y datos en tiempo real para recomendarte qué vehículos comprar y a qué precio vender.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 glass-card p-8 rounded-2xl flex items-start gap-6 shadow-sm border border-gray-100" style={{ borderLeft: '4px solid #ff8000' }}>
            <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
            <div>
              <h3 className="text-xl font-medium mb-2">Atención al Cliente 2.0</h3>
              <p className="text-sm text-on-surface-variant">
                Chatbots especializados en automoción capaces de gestionar leads, agendar pruebas dinámicas y responder consultas técnicas 24/7 sin intervención humana.
              </p>
            </div>
          </div>

          <div className="md:col-span-1 glass-card p-8 rounded-2xl flex flex-col gap-4 border border-gray-100 shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl">auto_mode</span>
            <h3 className="text-xl font-medium">Automatización</h3>
            <p className="text-sm text-on-surface-variant">Publicación automática en portales y gestión de inventario sin errores.</p>
          </div>

          <div className="md:col-span-1 glass-card p-8 rounded-2xl flex flex-col gap-4 border border-gray-100 shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl">campaign</span>
            <h3 className="text-xl font-medium">Marketing IA</h3>
            <p className="text-sm text-on-surface-variant">Generación de descripciones optimizadas para SEO y anuncios dinámicos.</p>
          </div>
        </div>
      </section>

      {/* Product details */}
      <section className="bg-surface-container py-24">
        <div className="mf-container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative border border-black/5 rounded-xl overflow-hidden shadow-xl float-animation bg-white">
              <Image src="/images/products/ia-dashboard.png" alt="Dashboard IA" width={720} height={500} className="w-full h-auto" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-8">Gestión Inteligente de Leads</h2>
            <div className="space-y-4">
              {[
                { icon: 'filter_alt', t: 'Cualificación automática de contactos', white: true },
                { icon: 'psychology', t: 'Análisis de sentimiento en comunicaciones', white: false },
                { icon: 'event_available', t: 'Agendamiento inteligente de citas', white: true },
                { icon: 'history', t: 'Historial predictivo de ciclo de compra', white: false },
              ].map((row) => (
                <div key={row.t} className={`flex items-center gap-4 p-4 rounded-lg border border-black/5 ${row.white ? 'bg-white shadow-sm' : ''}`} style={!row.white ? { background: '#fafafa' } : undefined}>
                  <div className="bg-primary/10 p-2 rounded">
                    <span className="material-symbols-outlined text-primary">{row.icon}</span>
                  </div>
                  <span className="text-lg font-medium">{row.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 mf-container grid grid-cols-2 md:grid-cols-4 gap-12 text-center bg-white">
        {[
          { v: '40%', l: 'Aumento en Conversión' },
          { v: '-25%', l: 'Tiempo de Gestión' },
          { v: '24/7', l: 'Disponibilidad Total' },
          { v: '98%', l: 'Precisión en Datos' },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-5xl font-bold text-primary mb-2">{s.v}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{s.l}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-white opacity-5" />
        <div className="relative z-10 mf-container text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-headline-lg font-bold text-white max-w-3xl">
            ¿Listo para transformar tu concesionario en una potencia digital?
          </h2>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-white text-primary px-12 py-5 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
            SOLICITAR CONSULTORÍA GRATUITA
          </Link>
        </div>
      </section>
    </div>
  )
}
