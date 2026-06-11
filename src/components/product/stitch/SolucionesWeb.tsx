import Image from 'next/image'
import Link from 'next/link'

export function SolucionesWeb() {
  const productSlug = 'soluciones-web'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,128,0,0.1), transparent)' }} />
        <div className="relative z-10 mf-container text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">SOLUCIONES WEB AUTOMOTRICES</span>
          <h1 className="text-5xl md:text-display-lg font-bold mb-6 max-w-4xl mx-auto">
            Webs y Marketplaces que impulsan tu <span className="text-primary">rendimiento digital.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Desarrollamos ecosistemas digitales optimizados para SEO y conversión, diseñados específicamente para el sector automoción. Velocidad, precisión y resultados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform orange-glow">
              Solicitar Demo
            </Link>
            <Link href="/servicios" className="inline-block border border-outline text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-colors">
              Ver Layouts
            </Link>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="py-24 mf-container">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6">
          <div className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">search</span>
              <h3 className="text-3xl md:text-headline-lg font-semibold mb-2">SEO de Alto Rendimiento</h3>
              <p className="text-lg text-on-surface-variant max-w-md">
                Estructura técnica optimizada para que tus vehículos aparezcan en los primeros resultados de Google. Marcado de datos estructurados automático para VDP.
              </p>
            </div>
            <div aria-hidden className="absolute right-0 bottom-0 w-1/2 h-full opacity-5">
              <div className="w-full h-full bg-gradient-to-tl from-primary to-transparent" />
            </div>
          </div>
          <div className="md:col-span-4 glass-card p-8 rounded-xl border border-outline-variant flex flex-col items-start gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">phone_iphone</span>
            <h3 className="text-xl font-medium">Mobile First</h3>
            <p className="text-sm text-on-surface-variant">Experiencia de usuario fluida en cualquier dispositivo. El 70% de tus leads vienen del móvil, estamos preparados.</p>
          </div>
          <div className="md:col-span-4 glass-card p-8 rounded-xl border border-outline-variant flex flex-col items-start gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">insights</span>
            <h3 className="text-xl font-medium">Conversión Medible</h3>
            <p className="text-sm text-on-surface-variant">Integración nativa con herramientas de tracking y analítica avanzada para medir cada clic y cada lead.</p>
          </div>
          <div className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">hub</span>
              <h3 className="text-3xl md:text-headline-lg font-semibold mb-2">Marketplaces Multimarca</h3>
              <p className="text-lg text-on-surface-variant max-w-lg">
                Soluciones potentes para grupos de concesionarios. Gestión centralizada de stock, filtrado inteligente y comparadores de vehículos integrados.
              </p>
            </div>
            <div aria-hidden className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Layout showcases */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant overflow-hidden">
        <div className="mf-container">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="w-full md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">LAYOUT VDP PREMIUM</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-6">Páginas de Detalle (VDP) que venden por ti</h2>
              <p className="text-lg text-on-surface-variant mb-8">
                Diseñamos la ficha de vehículo perfecta: galerías de alta resolución, specs técnicos claros, botones de acción pegajosos y calculadoras financieras en tiempo real.
              </p>
              <ul className="space-y-4">
                {['Galería 360º integrada', 'CTAs de alta visibilidad', 'Información de stock en tiempo real'].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-lg">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant shadow-xl">
                <Image src="/images/products/webs-vdp.png" alt="Layout VDP premium" width={720} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg hidden lg:block border shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">+12% Tasa de Conversión</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">FILTRADO INTELIGENTE</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-6">Busca y encuentra en segundos</h2>
              <p className="text-lg text-on-surface-variant mb-8">
                Un motor de búsqueda facetado que permite a tus clientes encontrar el coche de sus sueños sin fricciones. Filtros por cuota, combustible, etiqueta ambiental y más.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-outline-variant">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">TAGS</span>
                  <p className="text-sm mt-1">Categorización automática por etiquetas oficiales.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-outline-variant">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">FINANCIACIÓN</span>
                  <p className="text-sm mt-1">Filtrado por cuota mensual personalizada.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-outline-variant shadow-xl">
                <Image src="/images/products/webs-filter.png" alt="Filtros inteligentes" width={720} height={540} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section className="py-24 mf-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Funcionalidades bajo el capó</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Nuestra tecnología está diseñada para la escalabilidad y el rendimiento constante.
          </p>
        </div>
        <div className="bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            <div className="p-8 space-y-4">
              <h4 className="text-xl font-medium text-primary mb-6">Infraestructura</h4>
              {[
                { l: 'Alojamiento Cloud', r: 'AWS / Azure', cls: 'bg-primary/10 text-primary px-2 py-1 rounded' },
                { l: 'Velocidad de Carga', r: 'Core Web Vitals A+', cls: 'text-green-600 font-bold' },
                { l: 'Seguridad SSL', r: 'Certificado Incluido', cls: 'text-on-surface-variant' },
              ].map((row, i) => (
                <div key={row.l} className={`flex justify-between items-center py-3 ${i < 2 ? 'border-b border-outline-variant/30' : ''}`}>
                  <span className="text-lg">{row.l}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${row.cls}`}>{row.r}</span>
                </div>
              ))}
            </div>
            <div className="p-8 space-y-4">
              <h4 className="text-xl font-medium text-primary mb-6">Integraciones</h4>
              {[
                { l: 'CRM4YOU', r: 'Nativa', cls: 'bg-primary/10 text-primary px-2 py-1 rounded' },
                { l: 'Multi-publicación', r: '+50 Portales', cls: 'text-on-surface-variant' },
                { l: 'WhatsApp Tracking', r: 'Activado', cls: 'text-on-surface-variant' },
              ].map((row, i) => (
                <div key={row.l} className={`flex justify-between items-center py-3 ${i < 2 ? 'border-b border-outline-variant/30' : ''}`}>
                  <span className="text-lg">{row.l}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${row.cls}`}>{row.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-surface-container-low">
        <div aria-hidden className="absolute inset-0 bg-primary opacity-5" />
        <div className="relative z-10 mf-container text-center">
          <h2 className="text-3xl md:text-display-lg font-bold mb-8">¿Listo para transformar tu presencia online?</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Únete a los más de 500 concesionarios que ya confían en el ecosistema Motorflash.
          </p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-lg shadow-primary/30">
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  )
}
