import Image from 'next/image'
import Link from 'next/link'

export function ContactCenter() {
  const productSlug = 'contact-center'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="relative z-10 mf-container grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest">
              KINETIC PRECISION IN AUTOMOTIVE
            </span>
            <h1 className="text-5xl md:text-display-lg font-bold leading-tight">
              Contact Center <br /> <span className="text-primary">Omnicanal</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg">
              Elevamos la gestión de leads al siguiente nivel con tecnología de IA de voz y monitoreo de calidad. Gestionamos más de 70.000 llamadas mensuales con precisión mecánica.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl orange-glow hover:scale-105 transition-transform text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                SOLICITAR DEMO <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/servicios" className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
                VER CAPACIDADES
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative glass-card p-4 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl">
              <Image src="/images/products/contact-center-hero.png" alt="Dashboard Contact Center" width={600} height={600} className="rounded-xl w-full h-full object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-primary/20 shadow-xl w-64">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <span className="text-xl font-bold">+70K</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Llamadas gestionadas / mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Gestión Inteligente de Leads</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              La convergencia de la inteligencia artificial y el factor humano para maximizar la conversión en el sector automotriz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="md:col-span-2 lg:row-span-2 bento-item p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <h3 className="text-xl font-medium mb-4">IA de Voz Especializada</h3>
                <p className="text-on-surface-variant">
                  Nuestra IA no solo atiende, cualifica. Analiza el sentimiento y la intención del usuario para derivar el lead al especialista adecuado de forma inmediata.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <ul className="space-y-3">
                  {['Cualificación automática 24/7', 'Integración directa con CRM4YOU', 'Transcripción en tiempo real'].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bento-item p-8 rounded-2xl">
              <span className="material-symbols-outlined text-primary mb-4 block">hub</span>
              <h4 className="text-xl font-medium mb-2">Omnicanalidad</h4>
              <p className="text-sm text-on-surface-variant">Llamadas, WhatsApp AI, Chats y Redes Sociales en un solo flujo de trabajo unificado.</p>
            </div>

            <div className="bento-item p-8 rounded-2xl">
              <span className="material-symbols-outlined text-primary mb-4 block">verified_user</span>
              <h4 className="text-xl font-medium mb-2">Quality Monitoring</h4>
              <p className="text-sm text-on-surface-variant">Auditoría constante y feedbacks para asegurar que cada interacción cumpla con los estándares Motorflash.</p>
            </div>

            <div className="md:col-span-2 bento-item bg-surface-container-low border border-outline-variant/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-medium mb-2">Métricas en Tiempo Real</h4>
                <p className="text-sm text-on-surface-variant mb-6">Toma decisiones basadas en datos precisos con nuestro panel de analítica avanzada.</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-primary text-3xl leading-tight font-bold">98%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">SLA Garantizado</p>
                  </div>
                  <div>
                    <p className="text-primary text-3xl leading-tight font-bold">-15s</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tiempos de Respuesta</p>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute right-0 bottom-0 opacity-5">
                <span className="material-symbols-outlined" style={{ fontSize: 120 }}>query_stats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container-low py-24 border-y border-outline-variant/30">
        <div className="mf-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <Image src="/images/products/contact-center-agent.png" alt="Agente Contact Center" width={320} height={400} className="rounded-xl w-full aspect-[4/5] object-cover shadow-lg" />
            <Image src="/images/products/contact-center-server.png" alt="Servidor de comunicaciones" width={320} height={400} className="rounded-xl w-full aspect-[4/5] object-cover mt-8 shadow-lg" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-headline-lg font-semibold">Excelencia en cada palabra</h2>
            <div className="space-y-6">
              {[
                { n: 1, t: 'Cualificación Automática', d: 'Nuestros algoritmos pre-clasifican los leads basándose en el presupuesto, modelo de interés y urgencia de compra.' },
                { n: 2, t: 'Derivación Inteligente', d: 'El lead caliente llega al vendedor en el momento exacto, con toda la información necesaria ya procesada.' },
                { n: 3, t: 'Monitoreo de Calidad', d: 'Garantizamos una experiencia de cliente premium mediante auditorías aleatorias y análisis de sentimiento automatizado.' },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">{s.n}</div>
                  <div>
                    <h5 className="text-xl font-medium mb-2">{s.t}</h5>
                    <p className="text-on-surface-variant">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 mf-container text-center">
        <div className="bg-primary rounded-[2rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-display-lg font-bold mb-6">¿Listo para transformar su gestión de ventas?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Únase a los concesionarios y marcas líderes que ya confían en la precisión de Motorflash para sus centros de contacto.
            </p>
            <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-white text-primary px-10 py-5 font-bold rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl">
              COMENZAR AHORA
            </Link>
          </div>
          <div aria-hidden className="absolute top-0 right-0 p-12 opacity-10">
            <span className="material-symbols-outlined" style={{ fontSize: 300 }}>rocket_launch</span>
          </div>
        </div>
      </section>
    </div>
  )
}
