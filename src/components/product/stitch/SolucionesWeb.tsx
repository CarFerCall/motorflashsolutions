import { Fragment } from 'react'
import Link from 'next/link'

const TIERS = [
  {
    key: 'platinum',
    name: 'Platinum',
    subtitle: 'Web de concesionario completa',
    setupEur: '800 €',
    monthlyEur: '420 €',
    permanenceMonths: 24,
    totalEur: '10.880 €',
    cashEur: '9.200 €',
    cashDiscount: '15,4 %',
    highlight: true,
    bullets: [
      'Todos los departamentos: VO, VN, renting, postventa, contenidos corporativos, tasador de vehículos',
      'Multi-marca/multi-mundo (Audi, VW, …)',
      'Publicación de stock VO y VN (DMS, Dealer, Feed XML)',
      'Fichas premium con vídeos, pasarelas de pago y calculadora financiera',
      'CMS autogestionable (landings, banners, formularios)',
      'Integraciones nativas: CRM4YOU, MF Message, Gestor de Leads',
      'Dashboard KPIs en tiempo real',
      'SEO inicial, GA4, formación CMS (3 h), mantenimiento y alojamiento incluidos',
    ],
  },
  {
    key: 'silver',
    name: 'Silver',
    subtitle: 'Integra tu stock en cualquier web',
    setupEur: '300 €',
    monthlyEur: '100 €',
    permanenceMonths: 24,
    totalEur: '2.700 €',
    cashEur: '2.300 €',
    cashDiscount: '14,8 %',
    highlight: false,
    bullets: [
      'URL con listado de stock para integrar en tu web actual',
      'Buscador, comparativa y favoritos',
      'Fichas con fotos, vídeos, características y CTAs',
      'TPV Virtual (Paypal, Addon Payment, Redsys, Rapid Pay)',
      'Calculadora financiera (precio financiado y cuota)',
      'Integraciones Motorflash: CRM4YOU, MF Message, Gestor de Leads',
      'Adaptable a tipografía y estilos de la web del cliente',
      'Posibilidad de upgrade a Platinum por 500 €',
    ],
  },
  {
    key: 'unica',
    name: 'Única',
    subtitle: 'Web práctica para empezar',
    setupEur: '—',
    monthlyEur: '60 €',
    permanenceMonths: 12,
    totalEur: '—',
    cashEur: '600 €',
    cashDiscount: '16,7 %',
    highlight: false,
    bullets: [
      'Home + listados + fichas estándar',
      'Cita taller y tasación de vehículos',
      'Ubicaciones y horarios, Quiénes somos',
      'Aviso legal, privacidad y cookies',
      'Conversión: contacto general, lead desde ficha, cita taller, tasación',
      'Vinculable a CRM4YOU o CRM externo (email / JSONLEAD)',
      'Sin pasarela de pago, alerta de búsqueda ni renting',
      'Mínima permanencia, ideal para arrancar',
    ],
  },
]

const FEATURE_TABLE: Array<{ section: string; items: Array<{ label: string; platinum: boolean | 'opt'; silver: boolean | 'opt'; unica: boolean | 'opt' }> }> = [
  {
    section: 'Secciones web',
    items: [
      { label: 'Home', platinum: true, silver: false, unica: true },
      { label: 'Listados de stock', platinum: true, silver: true, unica: true },
      { label: 'Ficha estándar', platinum: true, silver: true, unica: true },
      { label: 'Ficha premium (vídeos + pasarelas pago + financiera)', platinum: true, silver: true, unica: false },
      { label: 'Sección renting / alquiler', platinum: true, silver: false, unica: false },
      { label: 'Servicio postventa', platinum: true, silver: false, unica: false },
    ],
  },
  {
    section: 'Conversión',
    items: [
      { label: 'Reserva/compra (pasarela de pago)', platinum: true, silver: true, unica: false },
      { label: 'Cita taller', platinum: true, silver: false, unica: true },
      { label: 'Tasación', platinum: true, silver: true, unica: true },
      { label: 'Alerta de búsqueda', platinum: true, silver: false, unica: false },
      { label: 'Renting / alquiler', platinum: true, silver: false, unica: false },
    ],
  },
  {
    section: 'CMS autogestionable',
    items: [
      { label: 'Modificación de páginas iniciales', platinum: true, silver: false, unica: false },
      { label: 'Creación de páginas, blogs, landings', platinum: true, silver: false, unica: false },
      { label: 'Creación de formularios y pop-ups', platinum: true, silver: false, unica: false },
      { label: 'Migración de contenidos', platinum: 'opt', silver: false, unica: false },
    ],
  },
  {
    section: 'CRM y leads',
    items: [
      { label: 'Vinculable a CRM4YOU', platinum: true, silver: true, unica: true },
      { label: 'Vinculable a CRM externo (email / JSONLEAD)', platinum: 'opt', silver: 'opt', unica: 'opt' },
      { label: 'Gestor de Leads (Contact Center)', platinum: 'opt', silver: 'opt', unica: 'opt' },
      { label: 'CHATWEB MF', platinum: 'opt', silver: 'opt', unica: false },
    ],
  },
  {
    section: 'Analítica y marketing',
    items: [
      { label: 'Set up inicial SEO', platinum: true, silver: 'opt', unica: false },
      { label: 'GTM / GA4 (eventos de conversión)', platinum: true, silver: 'opt', unica: false },
      { label: 'Configuración Google Ads', platinum: 'opt', silver: 'opt', unica: false },
      { label: 'Configuración Meta (pixel + eventos)', platinum: 'opt', silver: 'opt', unica: false },
      { label: 'Dashboard de seguimiento', platinum: 'opt', silver: 'opt', unica: false },
      { label: 'Mejora continua SEO (mensual)', platinum: 'opt', silver: 'opt', unica: false },
      { label: 'Campañas SEA / Meta', platinum: 'opt', silver: 'opt', unica: false },
    ],
  },
]

const INTEGRATIONS = [
  { icon: 'support_agent', name: 'Contact Center', desc: 'Atención multicanal especializada en automoción, RGPD, dashboard real-time.' },
  { icon: 'inventory_2', name: 'Dealer', desc: 'Creación de vehículos desde matrícula/bastidor, análisis de precios, papelería.' },
  { icon: 'hub', name: 'CRM4YOU', desc: 'Gestión de clientes, comunicación, control de actividad comercial, KPIs.' },
  { icon: 'chat', name: 'MF Message', desc: 'WhatsApp Business: gestión de campañas, RGPD, dashboard.' },
  { icon: 'forum', name: 'CHATWEB MF', desc: 'Chat en directo + bot automático + posibilidad de IA conversacional.' },
]

const TIMELINE_STEPS = [
  { day: '1', text: 'Firma de contrato + briefing kickoff' },
  { day: '5', text: 'Documento de configuración y toma de datos' },
  { day: '10', text: 'Puesta en marcha en desarrollo' },
  { day: '18', text: 'Revisión y pruebas internas' },
  { day: '22', text: 'Entrega "Pruebas" para revisión del cliente' },
  { day: '25', text: 'Formación CMS · Configuración GA y SEO' },
  { day: '30', text: 'Briefing y subida a producción' },
]

function Check({ v }: { v: boolean | 'opt' }) {
  if (v === true) return <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>check_circle</span>
  if (v === 'opt') return <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Opc.</span>
  return <span className="text-on-surface-variant/40">—</span>
}

export function SolucionesWeb() {
  const productSlug = 'soluciones-web'

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,128,0,0.1), transparent)' }} />
        <div className="relative z-10 mf-container text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">PROYECTO WEB · MOTORFLASH SOLUTIONS</span>
          <h1 className="text-5xl md:text-display-lg font-bold mb-6 max-w-4xl mx-auto">
            Webs y marketplaces de <span className="text-primary">automoción</span>, en 30 días, con todo Motorflash integrado.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            3 niveles según tu negocio. SEO, analítica, CMS, pasarela de pago, calculadora financiera, CRM y Contact Center integrados de fábrica. Infraestructura 99,9 %, SSL, WAF y anti-DDoS incluidos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
              Solicitar Demo
            </Link>
            <a href="#tarifas" className="inline-block border border-outline text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-colors">
              Ver tarifas
            </a>
          </div>
        </div>
      </section>

      {/* 3 tiers */}
      <section id="tarifas" className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">3 PRODUCTOS</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Elige el proyecto web que encaja contigo</h2>
            <p className="text-on-surface-variant">Mismo equipo, misma infraestructura, mismas integraciones. Distintos alcances y permanencias para que entres por donde te conviene y crezcas cuando quieras.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.key}
                className={`relative rounded-3xl border bg-white p-7 flex flex-col ${
                  t.highlight ? 'border-primary shadow-xl shadow-primary/10' : 'border-outline-variant'
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recomendado</span>
                )}
                <div className="mb-5">
                  <h3 className="text-2xl font-bold">{t.name}</h3>
                  <p className="text-sm text-on-surface-variant">{t.subtitle}</p>
                </div>
                <div className="mb-5 pb-5 border-b border-outline-variant">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{t.monthlyEur}</span>
                    <span className="text-sm text-on-surface-variant">/mes</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Set up <strong>{t.setupEur}</strong> · Permanencia <strong>{t.permanenceMonths} meses</strong>
                  </p>
                  <p className="text-xs text-primary font-bold mt-2">Pago al contado: {t.cashEur} ({t.cashDiscount} dto.)</p>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }}>check</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/contacto?servicio=${productSlug}&tier=${t.key}`} className={`inline-block w-full text-center px-6 py-3 rounded-xl text-sm font-bold transition-colors ${
                  t.highlight ? 'bg-primary text-white hover:opacity-90' : 'border border-outline text-on-surface hover:bg-surface-container'
                }`}>
                  Pedir {t.name}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant text-center mt-6 opacity-70">
            Los precios son por mundo/marca. Tras los 24/12 meses se renueva con IPC. La cuota mensual incluye alojamiento, mantenimiento, actualizaciones y medidas de seguridad.
          </p>
        </div>
      </section>

      {/* Integraciones Motorflash */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">INTEGRADO CON TODO EL ECOSISTEMA</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Tu web no funciona sola. Va enchufada a Motorflash.</h2>
            <p className="text-on-surface-variant">Los leads llegan al CRM. Las llamadas al Contact Center. Los chats a MF Message. Sin integradores, sin proyectos a medida.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {INTEGRATIONS.map((i) => (
              <div key={i.name} className="bg-surface-container-low border border-outline-variant rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{i.icon}</span>
                </div>
                <p className="font-semibold text-sm mb-1">{i.name}</p>
                <p className="text-xs text-on-surface-variant leading-snug">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">QUÉ INCLUYE CADA UNO</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">Lista completa de funcionalidades</h2>
          </div>
          <div className="bg-white rounded-3xl border border-outline-variant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-semibold text-on-surface-variant">Servicio</th>
                    <th className="p-4 font-semibold text-primary text-center">Platinum</th>
                    <th className="p-4 font-semibold text-on-surface text-center">Silver</th>
                    <th className="p-4 font-semibold text-on-surface text-center">Única</th>
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_TABLE.map((sec) => (
                    <Fragment key={sec.section}>
                      <tr className="bg-surface-container-low/60">
                        <td colSpan={4} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">{sec.section}</td>
                      </tr>
                      {sec.items.map((it) => (
                        <tr key={`${sec.section}-${it.label}`} className="border-b border-outline-variant/40">
                          <td className="p-3 pl-4">{it.label}</td>
                          <td className="p-3 text-center"><Check v={it.platinum} /></td>
                          <td className="p-3 text-center"><Check v={it.silver} /></td>
                          <td className="p-3 text-center"><Check v={it.unica} /></td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant text-center mt-4 opacity-70">
            "Opc." significa funcionalidad opcional valorada aparte por el equipo de Motorflash. CRM4YOU requiere su propia contratación.
          </p>
        </div>
      </section>

      {/* Plan de trabajo */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">DE FIRMA A PRODUCCIÓN EN 30 DÍAS</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Un plan de trabajo claro, sin sorpresas</h2>
            <p className="text-on-surface-variant">Desde el día 1 sabes en qué punto está tu web. Reportes semanales, briefings antes de cada hito y un único interlocutor desde el kickoff hasta la subida a producción.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {TIMELINE_STEPS.map((s, i) => (
              <div key={s.day} className="relative bg-surface-container-low border border-outline-variant rounded-2xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {s.day}
                </div>
                <p className="text-xs font-medium text-on-surface leading-snug">{s.text}</p>
                {i < TIMELINE_STEPS.length - 1 && (
                  <span aria-hidden className="hidden md:block absolute top-1/2 -right-2 text-on-surface-variant/30 text-2xl leading-none">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">INFRAESTRUCTURA DE ALTA DISPONIBILIDAD</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Tu web siempre activa. Sin interrupciones. Sin excusas.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: '24/7', icon: 'support_agent', title: 'Equipo de Sistemas 24×7', desc: 'Vigilancia continua e ininterrumpida con equipo técnico interno. Actuamos de forma proactiva ante cualquier incidencia.' },
              { tag: 'CDN', icon: 'speed', title: 'CDN propia dedicada', desc: 'Una web lenta pierde clientes. Distribución de contenidos propia que garantiza máxima velocidad desde cualquier punto.' },
              { tag: '99,9 %', icon: 'verified_user', title: 'Arquitectura redundante', desc: 'Servidores redundantes, balanceo de carga automático y copias de seguridad diarias. Tu negocio sigue funcionando pase lo que pase.' },
            ].map((b) => (
              <div key={b.title} className="bg-white border border-outline-variant rounded-3xl p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="material-symbols-outlined text-primary text-3xl">{b.icon}</span>
                  <span className="text-3xl font-bold text-primary">{b.tag}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-on-surface-variant">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">SEGURIDAD EMPRESARIAL INCLUIDA</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Tu web, protegida al más alto nivel</h2>
            <p className="text-on-surface-variant">SSL, anti-DDoS y WAF activos sin coste adicional. Lo que cualquier proveedor cobra aparte, aquí viene de fábrica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'SSL', icon: 'lock', title: 'Certificado SSL incluido', desc: 'HTTPS cifrado de extremo a extremo. Confianza en el navegador, requisito para Google Ads y protección de datos de cliente.' },
              { tag: 'DDoS', icon: 'shield', title: 'Protección Anti-DDoS', desc: 'Filtramos y absorbemos ataques de denegación de servicio antes de que lleguen a tu web. Tu site siempre operativo.' },
              { tag: 'WAF', icon: 'security', title: 'Firewall de aplicación (WAF)', desc: 'Análisis en tiempo real de cada petición. Bloquea inyecciones de código, accesos no autorizados y vulnerabilidades.' },
            ].map((b) => (
              <div key={b.title} className="bg-surface-container-low border border-outline-variant rounded-3xl p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="material-symbols-outlined text-primary text-3xl">{b.icon}</span>
                  <span className="text-2xl font-bold text-primary">{b.tag}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-on-surface-variant">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-outline-variant bg-surface-container-low">
        <div className="mf-container grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { v: '17', l: 'AÑOS EN EL SECTOR', primary: true },
            { v: '+350', l: 'WEBS DESARROLLADAS' },
            { v: '+100', l: 'ESPECIALISTAS IT' },
          ].map((s) => (
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
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">¿Listo para empezar tu proyecto web?</h2>
          <p className="text-lg text-on-surface-variant mb-8">
            En la demo te enseñamos un caso real de un concesionario del mismo tamaño que el tuyo, qué tier encaja mejor y cuánto tarda en estar arriba.
          </p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
            Solicitar Demo Personalizada
          </Link>
        </div>
      </section>
    </div>
  )
}
