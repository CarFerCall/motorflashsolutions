import Link from 'next/link'

const PILLARS = [
  { icon: 'campaign', title: 'Motor Lead Management', desc: 'Nuestro servicio estrella en gestión de leads para automoción.' },
  { icon: 'memory', title: 'Tecnología propia', desc: 'Plataformas de última generación desarrolladas por nosotros.' },
  { icon: 'groups', title: 'Equipo especializado', desc: '50 agentes formados en el sector del motor.' },
  { icon: 'insights', title: 'Reporting en tiempo real', desc: 'Informes customizables por portal, origen, canal, producto y comercial.' },
  { icon: 'price_check', title: 'Propuesta competitiva', desc: 'La tarifa más ajustada del sector con modelo por uso real.' },
  { icon: 'verified', title: 'Cartera consolidada', desc: '+400 clientes y 2.000 concesionarios respaldan el servicio.' },
]

const CHANNELS = [
  { icon: 'call', title: 'Llamadas entrantes y salientes', desc: 'Atendemos el 100 % de las llamadas con infraestructura cloud y plataformas propias.' },
  { icon: 'chat', title: 'WhatsApp Business API', desc: 'Únicos en el mercado con desarrollo propio que mide la conversión del canal por excelencia.' },
  { icon: 'mail', title: 'Emails & Click-to-Call', desc: 'Integramos los formularios de contacto procedentes de cualquier canal web.' },
  { icon: 'forum', title: 'Chats y redes sociales', desc: 'Respondemos con inmediatez a dudas técnicas o comerciales en cualquier canal.' },
]

const COMPLIANCE = [
  'Grabación de todas las llamadas hasta 5 años, conforme RGPD',
  'Recogida de consentimientos para acciones de remarketing posteriores',
  'Stock publicado en todos los canales para estrategias de precios y conversión a venta',
]

const TEAM_STATS = [
  { v: '50', l: 'AGENTES' },
  { v: '+400', l: 'CLIENTES', primary: true },
  { v: '7', l: 'AÑOS DE EXPERIENCIA' },
  { v: '2.000', l: 'CONCESIONARIOS' },
]

const KPIS = [
  { v: '>90 %', l: 'Atención en recepción' },
  { v: '<10 min', l: 'Tiempo de contacto en emisión' },
  { v: '195.000', l: 'Llamadas/mes atendidas' },
  { v: '100 %', l: 'Respuestas garantizadas' },
]

const SERVICES = [
  { icon: 'phone_callback', title: 'Recepción y emisión', desc: 'Cualificación de contacto + RGPD desde el primer minuto.' },
  { icon: 'thermostat', title: 'Cualificación de temperatura', desc: 'Filtro de leads según intención real de compra.' },
  { icon: 'event_available', title: 'Citas de prueba y taller', desc: 'Gestión y confirmación de asistencia a citas.' },
  { icon: 'support', title: 'Postventa y gestión', desc: 'Acompañamos al cliente después de la entrega.' },
  { icon: 'inbox', title: 'Back office y CRM', desc: 'Gestión de emails, depuración de BBDD y mystery calls.' },
  { icon: 'language', title: 'Servicio multidioma', desc: 'Castellano, inglés, francés, catalán y portugués.' },
]

const REPORTING_POINTS = [
  'Registro completo de contactos destacando los leads más calientes',
  'Acceso a gestor exclusivo con todas las métricas de control',
  'Estrategias de seguimiento "Nurturing" sobre tus potenciales',
  'Acceso ilimitado a todas las grabaciones de tus clientes',
  'Reportes por portal, origen, canal, producto, departamento y comercial',
  'Visión de derivación equitativa entre comerciales VO y VN',
]

export function ContactCenter() {
  const productSlug = 'contact-center'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 70% 100%, rgba(255,128,0,0.10), transparent 60%)' }} />
        <div className="relative z-10 mf-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">CONTACT CENTER · MOTORFLASH SOLUTIONS</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              Lo que no se mide, <span className="text-primary">no se puede mejorar</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl">
              Servicio de Contact Center exclusivo del sector de la automoción. Atendemos el 100 % de tus leads en todos los canales (voz, WhatsApp, email, chat, RRSS) con plataformas propias, equipo especializado y reporting en tiempo real.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">
                Solicitar Demo
              </Link>
              <Link href={`/precios#${productSlug}`} className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">
                Ver tarifas en /precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 pilares */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">SERVICIOS EXCLUSIVOS EN AUTOMOCIÓN</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">6 razones por las que somos diferentes</h2>
            <p className="text-on-surface-variant">No somos un Contact Center generalista. Vivimos del sector del motor desde hace 7 años y todo nuestro stack está pensado para concesionarios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{p.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología multicanal */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">TECNOLOGÍA MULTICANAL</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Atendemos donde está tu cliente</h2>
            <p className="text-on-surface-variant">Las soluciones técnicas más avanzadas del sector. Plataformas propias para customizar cualquier servicio y crecer con tus operaciones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHANNELS.map((c) => (
              <div key={c.title} className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{c.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-surface-container-low border border-outline-variant rounded-2xl p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">CUMPLIMIENTO Y CONVERSIÓN</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {COMPLIANCE.map((c) => (
                <li key={c} className="flex gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 22 }}>check_circle</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Equipo + KPIs */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">EQUIPO MULTIDISCIPLINAR</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Atención al cliente integral con KPIs garantizados</h2>
              <p className="text-on-surface-variant mb-6">
                Gestionamos tus prospectos y leads con un equipo especializado en automoción. Trabajamos de lunes a sábado en horario ininterrumpido, con posibilidad de ampliación a fines de semana.
              </p>
              <ul className="space-y-3">
                {KPIS.map((k) => (
                  <li key={k.l} className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-primary tabular-nums whitespace-nowrap">{k.v}</span>
                    <span className="text-sm text-on-surface-variant">{k.l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {TEAM_STATS.map((s) => (
                <div key={s.l} className={`rounded-2xl p-6 text-center border ${s.primary ? 'bg-primary text-white border-primary' : 'bg-white border-outline-variant'}`}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">{s.v}</div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${s.primary ? 'opacity-90' : 'text-on-surface-variant'}`}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">QUÉ HACEMOS POR TI</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Desde la captura del lead hasta la postventa</h2>
            <p className="text-on-surface-variant">Un flujo completo de atención: cualificamos, filtramos, derivamos equitativamente entre tus comerciales y reportamos cada interacción.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-surface-container-low border border-outline-variant rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">REPORTING EN TIEMPO REAL</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Sistemas de información que sí mueven la aguja</h2>
              <p className="text-on-surface-variant mb-6">
                Acceso a un gestor exclusivo con métricas de control e informes detallados de toda la actividad. Sabes en cada momento qué leads tienes, de dónde vienen y qué hace cada comercial con ellos.
              </p>
              <ul className="space-y-3">
                {REPORTING_POINTS.map((r) => (
                  <li key={r} className="flex gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 22 }}>insights</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '37 %', l: 'Transferidos en línea' },
                { v: '35 %', l: 'No transferidos' },
                { v: '18 %', l: 'Otros estados' },
                { v: '10 %', l: 'Derivados vía email' },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-outline-variant rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tabular-nums">{s.v}</div>
                  <div className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
              <div className="col-span-2 bg-primary text-white rounded-2xl p-5 text-center">
                <p className="text-xs uppercase tracking-widest font-bold opacity-90 mb-1">EJEMPLO REAL DE GESTIÓN</p>
                <p className="text-sm">164 leads gestionados en un mes para un grupo de concesionarios, con derivación equitativa entre 5 comerciales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">¿Listo para externalizar tu atención al cliente?</h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Cuéntanos cuántos leads recibes al mes y te enseñamos un dashboard real con un grupo de tu tamaño. En 30 minutos sabes el coste y el ROI estimado.
          </p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
            Solicitar Demo Personalizada
          </Link>
        </div>
      </section>
    </div>
  )
}
