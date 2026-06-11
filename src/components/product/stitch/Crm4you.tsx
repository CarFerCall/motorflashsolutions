import Image from 'next/image'
import Link from 'next/link'

export function Crm4you() {
  const productSlug = 'crm4you'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0 dot-grid" />
        <div className="relative z-10 mf-container grid md:grid-cols-2 gap-6 items-center w-full">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              INTELIGENCIA AUTOMOTRIZ
            </span>
            <h1 className="text-5xl md:text-display-lg font-bold leading-tight">
              CRM4YOU: La evolución del <span className="text-primary">concesionario</span> inteligente.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg">
              El único CRM diseñado específicamente para la gestión de múltiples ubicaciones, marcas y grupos de concesionarios. Potenciado por IA para una eficiencia sin precedentes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:scale-105 transition-transform orange-glow inline-flex items-center gap-2">
                Solicitar Demo Gratis
              </Link>
              <Link href="/servicios" className="px-8 py-4 border border-outline/30 text-on-surface font-bold rounded-lg hover:bg-black/5 transition-all inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">play_circle</span>
                Ver todos los servicios
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant/30 glass-card shadow-2xl relative group">
              <Image src="/images/products/crm4you-hero.png" alt="Dashboard CRM4YOU" width={720} height={720} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">IA ANALIZANDO LLAMADA EN VIVO</span>
                </div>
                <p className="text-xl font-bold">Resumen automático generado con 99% de precisión.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="mf-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-headline-lg font-semibold">Diseñado para la complejidad del sector</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Centraliza el control sin perder el detalle. CRM4YOU se adapta a la estructura de tu negocio, no al revés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Multi-Location 2 cols */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-white border border-outline-variant shadow-sm flex flex-col justify-between group hover:border-primary/40 transition-colors">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-4xl">hub</span>
                <h3 className="text-xl font-medium">Gestión Multi-Ubicación</h3>
                <p className="text-on-surface-variant">
                  Visualiza el rendimiento de todos tus puntos de venta desde un panel único. Comparativas en tiempo real y flujo de leads distribuido inteligentemente.
                </p>
              </div>
              <div className="mt-12 h-48 rounded-lg bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 120 }}>map</span>
                </div>
                <div className="absolute inset-0 p-4 grid grid-cols-4 gap-2">
                  <div className="bg-primary/10 border border-primary/20 h-full rounded-md animate-pulse" />
                  <div className="bg-primary/5 border border-outline-variant h-full rounded-md animate-pulse" style={{ animationDelay: '75ms' }} />
                  <div className="bg-primary/[0.08] border border-outline-variant h-full rounded-md animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="bg-primary/5 border border-outline-variant h-full rounded-md animate-pulse" style={{ animationDelay: '200ms' }} />
                </div>
              </div>
            </div>

            {/* Multi-Brand */}
            <div className="p-8 rounded-2xl bg-white border border-outline-variant shadow-sm space-y-6 hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">branding_watermark</span>
              <h3 className="text-xl font-medium">Multi-Marca</h3>
              <p className="text-on-surface-variant">
                Configura reglas específicas para cada marca que representas. Personalización total de comunicaciones y procesos según el estándar de cada fabricante.
              </p>
              <ul className="space-y-3 pt-4">
                {['Plantillas personalizadas', 'Workflows independientes', 'Branding automático'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Calls */}
            <div className="p-8 rounded-2xl bg-white border border-outline-variant shadow-sm space-y-6 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <h3 className="text-xl font-medium">IA de Análisis de Voz</h3>
              <p className="text-on-surface-variant">
                Nuestra IA escucha, transcribe y extrae los puntos clave de cada llamada comercial de forma automática.
              </p>
            </div>

            {/* Automation orange 2 cols */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-primary text-white relative overflow-hidden group shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="space-y-4 md:w-2/3">
                  <h3 className="text-2xl md:text-headline-lg font-semibold leading-tight">Actualización Automática de Fichas</h3>
                  <p className="text-white/90">
                    Olvídate de la entrada manual de datos. La IA detecta el interés del cliente, el vehículo de interés y actualiza el CRM instantáneamente.
                  </p>
                  <Link href={`/contacto?servicio=${productSlug}`} className="inline-block mt-4 px-6 py-2 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition-all">
                    Saber más
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <span className="material-symbols-outlined opacity-20 group-hover:scale-110 transition-transform duration-500" style={{ fontSize: 120 }}>auto_awesome</span>
                </div>
              </div>
              <div aria-hidden className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full" style={{ marginRight: -128, marginTop: -128 }} />
            </div>
          </div>
        </div>
      </section>

      {/* AI Summary */}
      <section className="py-24 bg-white">
        <div className="mf-container flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-headline-lg font-semibold">Resúmenes que ahorran horas de trabajo</h2>
            <p className="text-lg text-on-surface-variant">
              Después de cada interacción, CRM4YOU genera un resumen ejecutivo. Los gerentes pueden auditar la calidad comercial sin escuchar horas de audio.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'transcribe', title: 'Transcripción Precisa', desc: 'Convierte voz a texto en milisegundos con detección de locutores.' },
                { icon: 'summarize', title: 'Detección de Sentimiento', desc: 'Identifica el nivel de satisfacción y urgencia del cliente automáticamente.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-on-surface">{f.title}</h4>
                    <p className="text-sm text-on-surface-variant">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="p-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-8 space-y-6 border border-outline-variant">
                <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">VISTA PREVIA DE IA</span>
                  <span className="text-sm text-on-surface-variant">Hoy, 10:45 AM</span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-surface-container-low rounded text-sm italic text-on-surface-variant border-l-4 border-primary">
                    “Hola, me interesa el SUV eléctrico que vi anunciado. ¿Tienen disponibilidad para prueba mañana?”
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right_alt</span>
                    <div className="flex-1 bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <p className="font-bold text-on-surface mb-1">Resumen IA:</p>
                      <p className="text-sm text-on-surface-variant">
                        Cliente interesado en <span className="text-primary font-semibold">Modelo X (EV)</span>. Solicita <span className="text-primary font-semibold">Test Drive</span> para el 24/10. Estado:{' '}
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">ALTA INTENCIÓN</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-[10px] text-on-surface-variant italic">Ficha de cliente actualizada ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl" style={{ background: '#121414' }}>
            <div aria-hidden className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at center, #ff8000, transparent 70%)' }} />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-display-lg font-semibold leading-tight text-white">¿Listo para transformar tu gestión comercial?</h2>
              <p className="text-lg text-white/80">
                Únete a los grupos de concesionarios líderes que ya están utilizando la inteligencia de Motorflash para vender más y mejor.
              </p>
              <div className="flex justify-center gap-4">
                <Link href={`/contacto?servicio=${productSlug}`} className="px-10 py-5 bg-primary text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform orange-glow">
                  Agendar Consultoría Gratuita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
