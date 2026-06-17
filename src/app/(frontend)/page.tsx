import Image from 'next/image'
import Link from 'next/link'
import { orderedProducts } from '@/catalog/products'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { ProductCarousel } from '@/components/ProductCarousel'
import { ProductsTimeline } from '@/components/ProductsTimeline'
import { HomeSectionNav } from '@/components/HomeSectionNav'

const HOME_SECTIONS = [
  { id: 'home-hero', label: 'Inicio' },
  { id: 'catalogo-timeline', label: 'Catálogo en una línea' },
  { id: 'sobre-motorflash', label: 'Sobre Motorflash' },
  { id: 'que-resolvemos', label: 'Qué resolvemos' },
  { id: 'como-te-ayudamos', label: 'Cómo te ayudamos' },
  { id: 'resultados-reales', label: 'Resultados reales' },
  { id: 'catalogo-productos', label: 'Catálogo de productos' },
  { id: 'ecosistema-tecnico-teaser', label: 'Ecosistema técnico' },
  { id: 'para-quien', label: 'Para quién' },
  { id: 'testimonios', label: 'Lo que dicen' },
  { id: 'nuestra-historia', label: 'Nuestra historia' },
  { id: 'contacto-cta', label: 'Hablemos' },
]

export default function HomePage() {
  const products = orderedProducts()

  return (
    <>
      {/* ============================================================
          Hero
          ============================================================ */}
      <section id="home-hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20 pb-16">
        <div aria-hidden className="absolute -top-[10%] -right-[10%] w-1/2 h-1/2 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />
        <div aria-hidden className="absolute -bottom-[10%] -left-[10%] w-2/5 h-2/5 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />

        <div className="mf-container relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mf-chip mb-6 mx-auto">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>IA Integrada · Automoción</span>
              </div>
              <h1 className="text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                La solución 360 para marcas y <span className="text-primary">concesionarios del motor</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                &quot;Tu asistente invisible: rápido, preciso y siempre disponible&quot;. Tecnología que conecta cada servicio para hacerlo más inteligente y vender más.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/servicios" className="btn-primary">
                  Ver nuestros servicios
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/contacto" className="btn-secondary">Contactar ahora</Link>
                <Link href="/compania#trabaja-con-nosotros" className="btn-secondary">Trabaja con nosotros</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Menú desplegable sticky con las secciones de la home */}
      <HomeSectionNav sections={HOME_SECTIONS} />

      {/* Línea de tiempo de productos justo debajo del hero */}
      <section id="catalogo-timeline" className="py-16 bg-white overflow-hidden">
        <Reveal>
          <div className="mf-container mb-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="mf-eyebrow">Catálogo en una línea</span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">15 productos. Un único ecosistema.</h2>
              <p className="text-on-surface-variant">Desde la publicación del stock hasta la gestión del fin de renting, cada pieza encaja con el resto. Recorre la línea para verlos todos.</p>
            </div>
          </div>
          <ProductsTimeline />
        </Reveal>
      </section>

      {/* Social proof bar */}
      <section className="py-6 bg-surface-container border-y border-outline-variant">
        <div className="mf-container">
          <Reveal>
            <p className="text-center text-sm md:text-base text-on-surface-variant">
              <strong className="text-on-surface">+1.500 concesionarios</strong> usan Motorflash · más de{' '}
              <strong className="text-on-surface">70.000 llamadas</strong> gestionadas al mes ·{' '}
              <strong className="text-on-surface">30.000 vehículos VO publicados</strong> al mes
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sobre Motorflash */}
      <section id="sobre-motorflash" className="py-24">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <span className="mf-eyebrow">Sobre Motorflash</span>
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6 leading-tight">
                Tu socio digital en el sector del motor.
              </h2>
              <p className="text-lg text-on-surface-variant mb-4 leading-relaxed">
                Llevamos <strong>+20 años</strong> analizando datos, procesos y comportamientos del mercado del VO. Sabemos cómo cambia la demanda, cómo se comportan los usuarios y qué necesitan los equipos de venta para trabajar mejor.
              </p>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Hoy somos un equipo de <strong>+200 especialistas en IT</strong>. Publicamos 30K vehículos al mes, exportamos millones de anuncios, gestionamos 70.000 llamadas mensuales y crecemos cada día con talento comprometido con el sector del motor.
              </p>
              <Link href="/compania" className="btn-secondary mt-2">
                Conocer la compañía
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: 20, suffix: '+', l: 'Años en el sector' },
                  { v: 1500, suffix: '+', l: 'Clientes activos' },
                  { v: 10, suffix: 'M€', l: 'Facturación 2024' },
                  { v: 200, suffix: '+', l: 'Especialistas en IT' },
                ].map((s) => (
                  <div key={s.l} className="mf-product-card" style={{ padding: '1.5rem' }}>
                    <div className="font-display text-3xl md:text-4xl font-semibold text-primary mb-1">
                      <AnimatedCounter target={s.v} suffix={s.suffix} />
                    </div>
                    <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qué resolvemos */}
      <section id="que-resolvemos" className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">Qué resolvemos</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">
                Stock, leads, portales, web e IA. Todo conectado.
              </h2>
              <p className="text-lg text-on-surface-variant">
                Publicar un coche en cinco portales a mano. Perseguir leads sin un sistema. Llamadas que se quedan sin contestar. Fotos mediocres. Sabemos cuáles son los cuellos de botella del concesionario — y los hemos resuelto uno a uno.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { before: 'Subir el stock portal a portal cada día', after: 'Publicación automática en +50 portales con un clic', icon: 'rocket_launch' },
              { before: 'Fichas con equipamiento incompleto o erróneo', after: 'JATO + EUROTAX unificados en cada vehículo, sin contradicciones', icon: 'merge_type' },
              { before: 'Leads dispersos entre WhatsApp, email y llamadas', after: 'Bandeja única conectada a un CRM especializado', icon: 'inbox' },
              { before: 'Fotos mediocres hechas con el móvil', after: 'IA que retoca cada imagen al instante con calidad de estudio', icon: 'photo_camera' },
              { before: 'Llamadas perdidas fuera del horario', after: 'IA conversacional 24/7 en WhatsApp, web y voz', icon: 'support_agent' },
              { before: 'Stock que no rota acumulando coste', after: 'Exportación automática a 15+ países europeos', icon: 'public' },
            ].map((row, i) => (
              <Reveal key={i} delay={Math.min(300, (i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{row.icon}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant m-0 mb-1">Antes</p>
                  <p className="text-base mb-3 line-through" style={{ color: '#9ca3af' }}>{row.before}</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary m-0 mb-1">Ahora</p>
                  <p className="text-base font-semibold m-0">{row.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo te ayudamos (workflow) */}
      <section id="como-te-ayudamos" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">Cómo te ayudamos</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">
                Del coche en la campa al cliente firmando, sin fricción.
              </h2>
              <p className="text-on-surface-variant">
                Nuestras herramientas cubren cada fase del ciclo comercial. Funcionan solas pero brillan cuando se combinan.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: 1, t: 'Publica', d: 'Stock cargado y publicado en todos los portales con IA optimizando textos y fotos.', icon: 'rocket_launch' },
              { n: 2, t: 'Capta', d: 'Recibe leads centralizados en CRM4YOU desde web, portales, WhatsApp y campañas.', icon: 'inbox' },
              { n: 3, t: 'Atiende', d: 'Contact Center humano + IA conversacional cualifican y agendan visitas 24/7.', icon: 'support_agent' },
              { n: 4, t: 'Vende', d: 'Asesor cierra con todo el contexto del cliente. Reporting de margen y conversión en vivo.', icon: 'sell' },
            ].map((step, i) => (
              <Reveal key={step.n} delay={Math.min(300, i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full relative" style={{ minHeight: 280 }}>
                  <div
                    className="absolute top-4 right-4 font-display font-semibold text-primary/10"
                    style={{ fontSize: 80, lineHeight: 1, letterSpacing: '-0.02em' }}
                  >
                    {step.n}
                  </div>
                  <div className="mf-icon-tile relative z-10">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 relative z-10">{step.t}</h3>
                  <p className="text-on-surface-variant m-0 relative z-10">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados reales (banda naranja) */}
      <section id="resultados-reales" className="py-24" style={{ background: 'linear-gradient(135deg, #ff8000 0%, #ff9533 100%)' }}>
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="block text-sm font-semibold uppercase mb-4 tracking-widest" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Resultados reales
              </span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3 text-white">
                Lo que ganan los concesionarios que usan Motorflash
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                Cifras medidas en clientes activos durante los últimos 12 meses.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { v: 30, suffix: 'h', l: 'Ahorradas al mes por concesionario' },
              { v: 50, suffix: '%', l: 'Más leads cualificados' },
              { v: 25, suffix: '%', l: 'Menos tiempo de gestión' },
              { v: 15, suffix: '%', l: 'Más margen por venta' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={Math.min(300, i * 100) as 0 | 100 | 200 | 300}>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                  +<AnimatedCounter target={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.9)' }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel productos con flechas */}
      <section id="catalogo-productos" className="py-24 overflow-hidden">
        <ProductCarousel products={products} />
      </section>

      {/* Ecosistema técnico teaser → /ecosistema-tecnico */}
      <section id="ecosistema-tecnico-teaser" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #121414 0%, #1f1f1f 100%)' }}>
              <div aria-hidden className="absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,128,0,0.25), transparent 70%)' }} />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 md:p-16">
                <div className="text-white">
                  <span className="inline-flex items-center gap-2 mf-eyebrow !text-primary !mb-3">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hub</span>
                    Ecosistema técnico
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                    Motorflash es el <span className="text-primary">HUB</span> que conecta todo tu stack de automoción
                  </h2>
                  <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Un único punto de integración entre tu DMS (Keyloop, Autoline, Quiter…), los portales (Coches.net, Autoscout24, Wallapop…), tu CRM, las financieras (Santander, CaixaBank, BBVA…), la logística y las bases de datos del sector (JATO, Autovista, Carfax).
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <span><strong className="text-primary">8</strong> hubs</span>
                    <span className="opacity-30">·</span>
                    <span><strong className="text-primary">+40</strong> integraciones</span>
                    <span className="opacity-30">·</span>
                    <span><strong className="text-primary">1</strong> punto de entrada</span>
                  </div>
                  <Link href="/ecosistema-tecnico" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                    Ver el diagrama completo
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative" style={{ width: 280, height: 280 }}>
                    {/* Mini HUB visual */}
                    <div
                      className="absolute rounded-full flex items-center justify-center text-white"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 90,
                        height: 90,
                        background: 'linear-gradient(135deg, #ff8000, #d96f00)',
                        boxShadow: '0 0 0 12px rgba(255,128,0,0.15), 0 12px 32px rgba(255,128,0,0.40)',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 36 }}>hub</span>
                    </div>
                    {['inventory_2', 'language', 'account_balance', 'local_shipping', 'database', 'gavel', 'factory', 'hub'].map((icon, i) => {
                      const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
                      const r = 120
                      return (
                        <div
                          key={i}
                          className="absolute rounded-full bg-white flex items-center justify-center mf-hub-node"
                          style={{
                            left: `calc(50% + ${r * Math.cos(angle)}px)`,
                            top: `calc(50% + ${r * Math.sin(angle)}px)`,
                            transform: 'translate(-50%, -50%)',
                            width: 44,
                            height: 44,
                            animationDelay: `${i * 0.1}s`,
                            boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                          }}
                        >
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{icon}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Para quién */}
      <section id="para-quien" className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">Para quién</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">
                Tres modelos de negocio. Tres formas de usar Motorflash.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Concesionarios independientes',
                desc: 'Multimarca de proximidad que necesitan profesionalizar la gestión sin perder agilidad. Empiezan con Multipublicador + CRM4YOU y crecen a su ritmo.',
                icon: 'storefront',
                tag: 'Pyme · Multimarca',
              },
              {
                title: 'Grupos de concesionarios',
                desc: 'Operadores con múltiples sedes y marcas. Necesitan visión consolidada de stock, leads y rendimiento. CRM4YOU + Contact Center les unifica la operativa.',
                icon: 'corporate_fare',
                tag: 'Grupo · Multi-sede',
              },
              {
                title: 'Fabricantes y marcas oficiales',
                desc: 'Buscan coordinar la red de concesionarios, unificar calidad de publicación y obtener métricas a nivel marca. IA + reporting consolidado por país y marca.',
                icon: 'factory',
                tag: 'Fabricante · Marca',
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary mb-3" style={{ background: 'rgba(255, 128, 0, 0.1)', padding: '4px 10px', borderRadius: 999 }}>
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-on-surface-variant m-0">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">Lo que dicen</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">Concesionarios que ya están vendiendo más</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'Antes perdíamos llamadas todo el día. Con la IA de Motorflash en WhatsApp captamos un 40% más de leads cualificados — y mi equipo solo atiende los que vienen ya con cita.', name: 'Director comercial', where: 'Grupo multimarca · Cataluña' },
              { quote: 'CRM4YOU nos cambió la operativa. Ahora vemos en tiempo real qué vehículo está moviéndose y qué asesor está cerrando. Toma de decisiones inmediata.', name: 'Gerente', where: 'Concesionario oficial · Madrid' },
              { quote: 'La publicación automática nos liberó cuatro horas diarias de trabajo administrativo. Esas horas las dedicamos a cerrar ventas.', name: 'Responsable de marketing', where: 'Concesionario independiente · Andalucía' },
            ].map((t, i) => (
              <Reveal key={i} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full flex flex-col">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: 36, opacity: 0.4 }}>format_quote</span>
                  <p className="text-base mb-6 flex-grow italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold m-0">{t.name}</p>
                    <p className="text-xs text-on-surface-variant m-0">{t.where}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-xs text-on-surface-variant mt-6 italic">
            Casos identificativos disponibles bajo NDA. <Link href="/historias-de-exito" className="underline">Ver historias de éxito completas →</Link>
          </p>
        </div>
      </section>

      {/* Nuestra historia teaser → /compania */}
      <section id="nuestra-historia" className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">Nuestra historia</span>
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6">
                De portal de clasificados a ecosistema digital con IA
              </h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Empezamos en 2007 con un portal y Audi Selection Plus como primer gran cliente. Hoy operamos un ecosistema completo: publicación, gestión de stock, CRM, contact center e IA conversacional — todo conectado y respaldado por +20 años de experiencia en el sector.
              </p>
              <Link href="/compania" className="btn-secondary">
                Ver toda nuestra historia
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/home-expertise.png" alt="Equipo Motorflash" width={720} height={480} className="w-full h-auto" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display text-2xl font-semibold m-0">+20 Años</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 m-0">Liderando la innovación</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto-cta" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl" style={{ background: '#121414' }}>
              <div className="p-12 md:p-20 text-center">
                <h2 className="text-3xl md:text-display-lg font-semibold mb-6 text-white">¿Hablamos sobre tu negocio?</h2>
                <p className="mb-10 mx-auto text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Cuéntanos tu caso y un especialista te llamará en menos de 24 horas para analizar cómo podemos ayudarte a vender más.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contacto" className="btn-primary">
                    Solicitar contacto
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+34910788575"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:bg-white/10"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <span className="material-symbols-outlined">call</span>
                    +34 910 788 575
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
