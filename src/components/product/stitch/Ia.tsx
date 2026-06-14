import Link from 'next/link'

const PRODUCTS = [
  {
    key: 'whatsapp',
    name: 'WhatsApp IA',
    icon: 'chat',
    tagline: 'IA conversacional sobre el canal que tus clientes ya usan',
    flow: ['Cliente escribe', 'IA responde', 'Cita o seguimiento'],
    bullets: [
      'Canal directo y familiar: el cliente ya usa WhatsApp, sin barreras ni descargas.',
      'Conversación libre, natural y disponible 24/7: la IA responde sin depender de agentes.',
      'Personalización real: recuerda el contexto, aprende de cada conversación y se adapta.',
      'Más conversión: mejora la experiencia y aumenta la probabilidad de venta.',
    ],
  },
  {
    key: 'webchat',
    name: 'WebChat IA',
    icon: 'forum',
    tagline: 'Capta y conversa con el usuario mientras navega tu web',
    flow: ['Usuario entra', 'Clic en botón', 'Formulario / cita'],
    bullets: [
      'Integrado en la web: capta al usuario mientras navega.',
      'Texto y voz en un solo canal: interacción escrita o hablada según prefiera el usuario.',
      'Interacción natural: el chat se adapta a cada usuario, no al revés.',
      'Integrable con otros sistemas: permite consultar y gestionar datos externos.',
    ],
  },
  {
    key: 'voz',
    name: 'Voz IA',
    icon: 'record_voice_over',
    tagline: 'Asistente telefónico inteligente que coge tus llamadas',
    flow: ['Cliente llama', 'IA responde', 'Agenda cita y envía a CRM'],
    bullets: [
      'Asistente de voz inteligente que coge la llamada sin esperas.',
      'Comunicación inmediata: el cliente llama y recibe atención personalizada.',
      'Ideal para concertar citas, resolver dudas rápidas o completar procesos iniciados por chat.',
      'Integra análisis, transcripción y puntuación automática para mejorar atención y venta.',
    ],
  },
]

const QUALITY = [
  { icon: 'transcribe', title: 'Transcripción de todas las llamadas', desc: 'Cada llamada de tus asesores se transcribe automáticamente y queda disponible para revisión y análisis.' },
  { icon: 'insights', title: 'Análisis de puntos clave', desc: 'Detección automática de saludos, identificación del cliente, oferta presentada, objeciones y cierre.' },
  { icon: 'category', title: 'Categorización por interés', desc: 'Cada conversación se etiqueta por el grado de interés real del cliente — caliente, templado o frío.' },
  { icon: 'star_rate', title: 'Puntuación automática', desc: 'Cada llamada recibe un score basado en KPIs comerciales para mejorar la atención y la venta.' },
]

const FOUNDATION = [
  { icon: 'graphic_eq', title: 'Síntesis de voz' },
  { icon: 'auto_awesome', title: 'OpenAI' },
  { icon: 'flare', title: 'Gemini' },
  { icon: 'psychology_alt', title: 'Anthropic' },
]

const BUSINESS_PROCESSES = ['Vehículos Nuevos', 'Vehículos Ocasión', 'Postventa', 'Taller', 'Renting', 'Alquiler']
const CHANNELS = [
  { icon: 'call', label: 'Llamada' },
  { icon: 'chat', label: 'WhatsApp' },
  { icon: 'mail', label: 'Email' },
]
const SYSTEMS = ['DMS', 'CRM4YOU', 'Dealer', 'Multipublicador', 'Contact Center', 'Webs', 'Integraciones API']

export function Ia() {
  const productSlug = 'ia'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 80% 100%, rgba(255,128,0,0.12), transparent 60%)' }} />
        <div className="relative z-10 mf-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">SOLUCIONES IA APLICADAS · MOTORFLASH SOLUTIONS</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              Tres asistentes IA y un sistema de calidad que <span className="text-primary">atienden, califican y miden</span> cada conversación.
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl">
              WhatsApp IA, WebChat IA y Voz IA conversan con tus clientes 24/7 en su canal preferido. Quality Monitoring transcribe, analiza y puntúa todas las llamadas de tu equipo. Todo integrado con tu DMS, CRM, Dealer, Multipublicador, Contact Center y webs.
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

      {/* Ecosistema IA */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">ECOSISTEMA IA MOTORFLASH</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Un solo integrador entre tus procesos, tus canales y la IA</h2>
            <p className="text-on-surface-variant">Actuamos como Integrador / Consultor / Arquitecto de IA: enchufamos los modelos al canal correcto y al sistema correcto, para que cada conversación acabe en el CRM con todo el contexto.</p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            <Stack title="Procesos de negocio" items={BUSINESS_PROCESSES.map((t) => ({ label: t }))} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Stack title="Canales" items={CHANNELS.map((c) => ({ icon: c.icon, label: c.label }))} />
              <Stack title="Inteligencia Artificial" items={FOUNDATION.map((f) => ({ icon: f.icon, label: f.title }))} />
            </div>
            <div className="bg-primary text-white rounded-2xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest font-bold opacity-90 mb-1">EL INTEGRADOR</p>
              <p className="text-lg font-semibold">Motorflash Solutions · Consultor y arquitecto de IA</p>
              <p className="text-xs opacity-80 mt-1">Voz IA · WhatsApp IA · WebChat IA · Copilot · Quality Monitoring · Asistente de contenidos web</p>
            </div>
            <Stack title="Sistemas de gestión" items={SYSTEMS.map((t) => ({ label: t }))} />
          </div>
        </div>
      </section>

      {/* Tres productos IA */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">3 ASISTENTES IA</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">WhatsApp, WebChat y Voz — el cliente elige el canal</h2>
            <p className="text-on-surface-variant">Mismo cerebro IA, distintos canales. Funcionan por separado o como un único asistente que pasa el contexto entre ellos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.key} className="bg-surface-container-low border border-outline-variant rounded-3xl p-7 flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-on-surface-variant mb-5">{p.tagline}</p>

                <div className="bg-white border border-outline-variant rounded-xl p-3 mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">FLUJO</p>
                  <div className="flex items-center justify-between gap-1 text-xs font-medium">
                    {p.flow.map((step, i) => (
                      <span key={step} className="flex items-center gap-1 min-w-0">
                        <span className="truncate">{step}</span>
                        {i < p.flow.length - 1 && <span className="text-primary shrink-0">→</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }}>check</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/contacto?servicio=${productSlug}&modulo=${p.key}`} className="inline-block w-full text-center border border-primary text-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                  Pruébame
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Monitoring */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">QUALITY</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Quality Monitoring: cada llamada se mide</h2>
            <p className="text-on-surface-variant">Lo que tu mejor responsable comercial haría si pudiera escuchar todas las llamadas. Transcribe, analiza, categoriza y puntúa de forma automática para que sepas qué funciona y qué hay que entrenar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {QUALITY.map((q) => (
              <div key={q.title} className="bg-white border border-outline-variant rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{q.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{q.title}</h3>
                <p className="text-sm text-on-surface-variant leading-snug">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Alertas */}
          <div className="mt-10 max-w-4xl mx-auto bg-white border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">notifications_active</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Alertas a partir de eventos o sobre los datos</h3>
                <p className="text-sm text-on-surface-variant mb-3">
                  Recibe avisos en el momento en que algo importante ocurre o cuando se cumplen condiciones sobre tus métricas. Sin tener que entrar al panel a buscarlas.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {[
                    'Llamada con cliente con scoring alto sin seguimiento',
                    'Agente con tasa de transferencia por debajo del KPI',
                    'WhatsApp sin responder más de N minutos en horario',
                    'Pico de leads que supera la capacidad del equipo',
                  ].map((t) => (
                    <li key={t} className="flex gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }}>bolt</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">¿Quieres ver un ejemplo real de tu negocio?</h2>
          <p className="text-lg text-on-surface-variant mb-8">
            En la demo te mostramos un caso con tu propio nicho (VN, VO, taller, renting…) y enchufamos uno de los asistentes a una llamada o un WhatsApp en vivo. Decide tú si el cliente final hablaría con esa IA.
          </p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
            Solicitar Demo Personalizada
          </Link>
        </div>
      </section>
    </div>
  )
}

function Stack({ title, items }: { title: string; items: Array<{ icon?: string; label: string }> }) {
  return (
    <div className="bg-white border border-outline-variant rounded-2xl p-5">
      <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-sm font-medium">
            {i.icon && <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>{i.icon}</span>}
            {i.label}
          </span>
        ))}
      </div>
    </div>
  )
}
