import Link from 'next/link'

const CLAVES = [
  { v: '+1.750', l: 'Grupos, concesionarios y multimarcas' },
  { v: '4.000', l: 'KPIs disponibles. Aunque solo uses 20.', primary: true },
  { v: '+30.000', l: 'Horas de desarrollo propio' },
  { v: '100 %', l: 'Adaptable al sector de la automoción' },
]

const DIFFERENTIATORS = [
  { icon: 'inventory', title: 'Pioneros en gestión de stock', desc: 'Multipublica, comercializa y vende en UNA sola herramienta. No saltas entre sistemas para vender un coche.' },
  { icon: 'tune', title: '100 % adaptable a tu negocio', desc: 'El único CRM del sector customizable. Crea flujos de trabajo, automatismos y campañas, apoyados con IA.' },
  { icon: 'corporate_fare', title: 'Pensado para GRUPOS', desc: 'Única plataforma diseñada para grupos de concesionarios. Imputas datos en una sola plataforma independiente a las marcas con las que trabajes.' },
  { icon: 'description', title: 'Gestor documental al click', desc: 'Ofertas, reservas, contratos, mandato, factura proforma, garantía. Integración con herramientas de financiación incluida.' },
]

const OBTAINABLES = [
  { icon: 'analytics', title: 'Ratio de conversión', desc: 'Por comercial, portal, fuente de tráfico y concesionario.' },
  { icon: 'paid', title: 'Coste por lead y por venta', desc: 'Real, sin interpretaciones ni hojas Excel.' },
  { icon: 'sell', title: 'Informes de ventas, rotación y stock', desc: 'En tiempo real, exportables y comparables.' },
  { icon: 'timer', title: 'Tiempo de respuesta a clientes', desc: 'Controla cuánto tarda cada comercial en contestar a cada lead.' },
  { icon: 'campaign', title: 'Trazabilidad de campañas', desc: 'De marketing hasta la venta, con atribución real.' },
  { icon: 'support', title: 'Módulo de Postventa', desc: 'Atención dedicada para los equipos de Postventa.' },
  { icon: 'price_check', title: 'Tasación integrada', desc: 'Módulo de tasación nativo dentro del CRM.' },
  { icon: 'groups', title: 'Visión consolidada de clientes', desc: 'Por cliente consolidado o por leads generados.' },
  { icon: 'account_balance', title: 'Control de financiaciones', desc: 'Todas las solicitudes de financiación, en un solo sitio.' },
  { icon: 'monitoring', title: 'Análisis de mercado del stock', desc: 'Compara cada vehículo con todos los similares publicados en portales.' },
]

const FEATURES_GRID = [
  { n: '01', title: 'Tu flujo de venta', desc: 'Configurado a tu medida, etapa a etapa.' },
  { n: '02', title: 'Evolutivos', desc: 'Roadmap continuo del producto basado en tus necesidades.' },
  { n: '03', title: 'Datos del vehículo', desc: 'Multitud de campos nativos y personalizables por vehículo.' },
  { n: '04', title: 'Gráficos de stock', desc: 'Rotación, antigüedad y mix por marca/modelo en directo.' },
  { n: '05', title: 'Agenda comercial', desc: 'Citas, llamadas y tareas centralizadas por comercial.' },
  { n: '06', title: 'Analítica de inversiones', desc: 'ROI por marca, por proveedor y por canal de captación.' },
  { n: '07', title: 'Analítica de producto', desc: 'Qué se vende, a quién y por qué — sin reportes manuales.' },
  { n: '08', title: 'Módulo financiero', desc: 'Solicitudes, ofertas y seguimiento con todas las financieras.' },
  { n: '09', title: 'Una o múltiples oportunidades', desc: 'Varios coches y múltiples deals en una sola ficha de cliente.' },
  { n: '10', title: 'Automatismos y marketing', desc: 'Campañas, secuencias y reglas que se ejecutan solas.' },
  { n: '11', title: 'Informe de ventas', desc: 'Comercial, concesionario, marca, mes — el que te haga falta.' },
  { n: '12', title: 'Documentación al click', desc: 'Ofertas, contratos, mandatos, facturas y garantías generados.' },
]

const COMMS = [
  { icon: 'chat', title: 'WhatsApp Business API + App móvil' },
  { icon: 'call', title: 'Telefonía VOZ IP, DDI y gestión de centralita' },
  { icon: 'cell_tower', title: 'GSM móvil + grabaciones en tiempo real' },
  { icon: 'phone_in_talk', title: 'App tracking de llamadas' },
  { icon: 'mail', title: 'Integración de correo electrónico' },
  { icon: 'contact_phone', title: 'Vcard: contacto del cliente integrado en móvil' },
  { icon: 'auto_awesome', title: 'Copiloto de IA para análisis de actividad comercial' },
]

const SEGUIMIENTO = [
  { icon: 'person', title: 'Cliente', desc: 'Todos sus leads, interacciones y evolución a lo largo del tiempo.' },
  { icon: 'badge', title: 'Comercial', desc: 'Toda la actividad realizada por cada agente, en tiempo real.' },
  { icon: 'directions_car', title: 'Vehículos', desc: 'Estadísticas nativas y en vivo de cada coche en stock.' },
  { icon: 'savings', title: 'Costes y ventas', desc: 'Análisis detallado y evolutivo por concesión y por marca.' },
]

const TIMELINE = [
  { week: 'Semana 1', step: 'Firma de contrato' },
  { week: 'Semana 1', step: 'Recogida de datos, usuarios y configuración' },
  { week: 'Semana 1', step: 'Configuración de CRM4YOU, canales y licencias' },
  { week: 'Semana 2', step: 'Formación al equipo' },
  { week: 'Semana 2', step: 'Listo para vender desde CRM4YOU' },
]

const STATS = [
  { v: '17', l: 'AÑOS EN EL SECTOR', primary: true },
  { v: '+950', l: 'LICENCIAS CRM IMPLANTADAS EN UN AÑO' },
  { v: '+100', l: 'ESPECIALISTAS IT' },
  { v: '+350', l: 'WEBS DESARROLLADAS' },
]

export function Crm4you() {
  const productSlug = 'crm4you'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 20% 100%, rgba(255,128,0,0.10), transparent 60%)' }} />
        <div className="relative z-10 mf-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">CRM4YOU · MOTORFLASH SOLUTIONS</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              Un CRM para <span className="text-primary">TODO</span>. Y más.
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl">
              El único CRM creado por y para concesionarios y multimarcas. Stock, leads, comunicación, financiación, documentación y reporting en una sola plataforma. Sin reporting declarativo: todo se reporta solo.
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

      {/* Claves */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">LAS CLAVES</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">Una plataforma diseñada para tu sector y tu volumen</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {CLAVES.map((c) => (
              <div key={c.l} className={`rounded-2xl p-6 text-center border ${c.primary ? 'bg-primary text-white border-primary' : 'bg-white border-outline-variant'}`}>
                <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">{c.v}</div>
                <div className={`text-xs font-bold uppercase tracking-widest ${c.primary ? 'opacity-90' : 'text-on-surface-variant'}`}>{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">QUÉ NOS HACE DIFERENTES</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">No es un CRM genérico. Es un CRM de automoción.</h2>
            <p className="text-on-surface-variant">Llevamos 4 años adaptando la plataforma a los requerimientos reales de concesionarios y grupos. Tu equipo no se adapta al CRM — el CRM se adapta a tu equipo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="bg-surface-container-low border border-outline-variant rounded-2xl p-7">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">{d.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-on-surface-variant leading-snug">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Obtenibles */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">OBTENIBLES CON CRM4YOU</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Esto es lo que sabes mañana si lo implantas hoy</h2>
            <p className="text-on-surface-variant">Datos reales, en vivo, sin que nadie tenga que rellenarlos a mano. Lo que tu director comercial pide cada lunes — pero generado solo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {OBTAINABLES.map((o) => (
              <div key={o.title} className="bg-white border border-outline-variant rounded-xl p-5">
                <span className="material-symbols-outlined text-primary text-2xl mb-3 block">{o.icon}</span>
                <p className="font-semibold text-sm mb-1">{o.title}</p>
                <p className="text-xs text-on-surface-variant leading-snug">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 funcionalidades */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">12 PIEZAS QUE CASAN SOLAS</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Todo lo que necesitas en una sola plataforma</h2>
            <p className="text-on-surface-variant">De la captura del lead a la entrega del coche, pasando por financiación, marketing y reporting. Sin saltar entre sistemas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES_GRID.map((f) => (
              <div key={f.n} className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 flex gap-4 hover:border-primary/30 transition-colors">
                <div className="text-primary font-bold tabular-nums" style={{ fontSize: 28, lineHeight: 1 }}>{f.n}</div>
                <div>
                  <p className="font-semibold mb-1">{f.title}</p>
                  <p className="text-xs text-on-surface-variant leading-snug">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de comunicación + Seguimiento */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">SISTEMA DE COMUNICACIÓN PROPIO</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Tu cliente te escribe por donde quiere. Tú le respondes desde un solo sitio.</h2>
              <p className="text-on-surface-variant mb-6">Telefonía, WhatsApp, email y centralita virtual integrados en el propio CRM, con copiloto de IA que analiza la actividad comercial.</p>
              <ul className="space-y-3">
                {COMMS.map((c) => (
                  <li key={c.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                    </div>
                    <span className="text-sm font-medium">{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">SEGUIMIENTO EXHAUSTIVO</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Todo lo que pasa, registrado. Nada se pierde en el camino.</h2>
              <p className="text-on-surface-variant mb-6">Cada lead, cada llamada, cada movimiento de stock y cada euro queda registrado y disponible para análisis.</p>
              <div className="space-y-4">
                {SEGUIMIENTO.map((s) => (
                  <div key={s.title} className="bg-white border border-outline-variant rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{s.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{s.title}</p>
                      <p className="text-xs text-on-surface-variant">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de trabajo */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">PLAN DE TRABAJO</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">En 2 semanas estás vendiendo desde CRM4YOU</h2>
            <p className="text-on-surface-variant">Sin migraciones eternas. Recogemos tus datos, configuramos canales y licencias, formamos a tu equipo y arrancas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {TIMELINE.map((t, i) => (
              <div key={`${t.step}-${i}`} className="relative bg-surface-container-low border border-outline-variant rounded-2xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3" style={{ fontSize: 14 }}>
                  S{t.week.endsWith('2') ? '2' : '1'}
                </div>
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">{t.week}</p>
                <p className="text-sm font-medium text-on-surface leading-snug">{t.step}</p>
                {i < TIMELINE.length - 1 && (
                  <span aria-hidden className="hidden md:block absolute top-1/2 -right-2 text-on-surface-variant/30 text-2xl leading-none">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-outline-variant bg-surface-container-low">
        <div className="mf-container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className={`text-4xl md:text-5xl font-bold ${s.primary ? 'text-primary' : 'text-on-surface'}`}>{s.v}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">¿Cambiarías de CRM si vieras un caso real de tu sector?</h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Solicita una demo de 30 minutos con un caso real de un grupo de tu tamaño. Te enseñamos cómo se configura, cómo se reporta y cuánto tarda en estar operativo.
          </p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
            Solicitar Demo Personalizada
          </Link>
        </div>
      </section>
    </div>
  )
}
