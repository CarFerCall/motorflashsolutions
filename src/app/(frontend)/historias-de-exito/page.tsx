import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export const metadata = {
  title: 'Casos de éxito',
  description:
    'Clientes que confían en Motorflash Solutions desde hace años. Resultados reales de Jarmauto, Ocasionplus, Flexicar, Muy Car y Auto Elia.',
  alternates: { canonical: '/historias-de-exito' },
  openGraph: {
    title: 'Casos de éxito — Motorflash',
    description: 'Jarmauto, Ocasionplus, Flexicar, Muy Car y Auto Elia: resultados reales de concesionarios líderes.',
    url: '/historias-de-exito',
  },
}

interface Stat {
  value: string
  label: string
  numeric?: number
  suffix?: string
}

interface SuccessCase {
  slug: string
  brand: string
  badge: string
  headline: string
  intro: React.ReactNode
  quote: string
  author: string
  stats: Stat[]
  ecosystemTitle: string
  ecosystemLead: string
  ecosystemItems: string[]
  accent: 'orange' | 'dark' | 'light'
}

const CASES: SuccessCase[] = [
  {
    slug: 'jarmauto',
    brand: 'JARMAUTO',
    badge: 'Cliente Premium · Ecosistema completo',
    headline: 'El cliente número 1 de la compañía',
    intro: (
      <>
        Jarmauto es el cliente número 1 de Motorflash Solutions. Grupo multimarca con varios puntos de venta en la Comunidad de Madrid, tiene contratados <strong>todos los productos</strong> de la compañía —web, CRM4YOU, Contact Center (Customer Manager) y Marketing Digital— para cubrir de extremo a extremo la captación, gestión y cierre de leads.
      </>
    ),
    quote:
      'Motorflash ha sido clave en la transformación digital de Jarmauto. Tener la web, el CRM, el Contact Center y el marketing digital del mismo partner nos permite trabajar con datos consistentes y una única versión de la verdad.',
    author: 'Dirección Comercial, Jarmauto',
    stats: [
      { value: '4', label: 'Productos Motorflash contratados', numeric: 4 },
      { value: '+180%', label: 'Leads online en 3 años', numeric: 180, suffix: '%' },
      { value: '-32%', label: 'Coste por lead', numeric: -32, suffix: '%' },
      { value: '360°', label: 'Visión del cliente' },
    ],
    ecosystemTitle: 'Un partner tecnológico 360°',
    ecosystemLead: 'Jarmauto opera sobre el ecosistema completo de Motorflash Solutions.',
    ecosystemItems: [
      'Web corporativa Motorflash',
      'CRM4YOU — gestión comercial del grupo',
      'Contact Center · Customer Manager',
      'Marketing Digital gestionado por Motorflash',
    ],
    accent: 'orange',
  },
  {
    slug: 'ocasionplus',
    brand: 'OCASIONPLUS',
    badge: 'Especialista en stock · Cliente operativo',
    headline: 'Una de las mayores redes de VO de España, apoyada en nuestra gestión de stock',
    intro: (
      <>
        Ocasionplus utiliza Motorflash Solutions como motor de gestión de stock: exportación de coches a portales y partners, <strong>multipublicación</strong> para maximizar visibilidad y <strong>tasación online</strong> para acelerar la compra de vehículo usado. Tres piezas quirúrgicas que potencian su operativa nacional sin tocar su ecosistema interno.
      </>
    ),
    quote:
      'Necesitábamos especialistas que entendieran cómo funciona un stock de VO a gran escala. Motorflash no aplica una receta cerrada: se adapta a cada marca, modelo y casuística del stock, lo que a nivel operativo es tremendamente complejo y marca la diferencia.',
    author: 'Dirección de Operaciones, Ocasionplus',
    stats: [
      { value: '3', label: 'Servicios Motorflash contratados', numeric: 3 },
      { value: '+45%', label: 'Rotación de stock', numeric: 45, suffix: '%' },
      { value: '-28%', label: 'Días medios de venta', numeric: -28, suffix: '%' },
      { value: '24h', label: 'Tasación online' },
    ],
    ecosystemTitle: 'Rotación y visibilidad de stock a escala nacional',
    ecosystemLead: 'Ocasionplus apoya la operación de stock en Motorflash Solutions: exportación, multipublicación y tasación online.',
    ecosystemItems: [
      'Servicios de exportación de coches',
      'Multipublicación en portales del sector',
      'Tasación online del stock',
    ],
    accent: 'dark',
  },
  {
    slug: 'flexicar',
    brand: 'FLEXICAR',
    badge: 'Cliente · Motorflash Message',
    headline: 'Toda la potencia de WhatsApp para VO con Motorflash Message',
    intro: (
      <>
        Flexicar, la mayor red de VO de Iberia, tiene contratado con Motorflash <strong>únicamente</strong> el servicio de <strong>Motorflash Message</strong> para gestionar WhatsApp a escala. La plataforma les permite unificar las conversaciones de todos sus centros, asignar leads al comercial adecuado y medir el rendimiento por tienda.
      </>
    ),
    quote:
      'WhatsApp se ha convertido en el canal número 1 de conversación con el comprador. Motorflash Message nos permite tratarlo como un canal profesional: con reglas, asignaciones y reporting por centro.',
    author: 'Dirección Digital, Grupo Flexicar',
    stats: [
      { value: '1', label: 'Servicio contratado: Motorflash Message', numeric: 1 },
      { value: '+180', label: 'Centros con WhatsApp unificado', numeric: 180, suffix: '' },
      { value: '+62%', label: 'Respuestas en menos de 5 min', numeric: 62, suffix: '%' },
      { value: 'ES+PT', label: 'Operativa Iberia' },
    ],
    ecosystemTitle: 'WhatsApp como canal profesional de ventas',
    ecosystemLead: 'Flexicar usa Motorflash Message para gestionar conversaciones comerciales por WhatsApp en toda su red.',
    ecosystemItems: [
      'WhatsApp Business unificado por grupo',
      'Asignación automática de leads al comercial',
      'Plantillas y respuestas rápidas por centro',
      'Reporting de conversaciones y conversión',
    ],
    accent: 'light',
  },
  {
    slug: 'muy-car',
    brand: 'MUY CAR',
    badge: 'Nacieron con Motorflash · Crecieron con nosotros',
    headline: 'Nacieron con Motorflash y han crecido con nosotros',
    intro: (
      <>
        Muy Car es uno de esos casos que nos enorgullecen: <strong>nacieron con Motorflash y han crecido con nosotros</strong>. Hoy tienen contratado el <strong>CRM4YOU</strong> para gestionar de forma ordenada todo el ciclo comercial, la <strong>web corporativa</strong> como escaparate online profesional y <strong>Motorflash Message</strong> para trabajar WhatsApp como canal de ventas: seguimiento de leads centralizado, presencia online impecable y conversaciones profesionales con el comprador.
      </>
    ),
    quote:
      'Arrancamos el proyecto de la mano de Motorflash y hemos ido sumando piezas a medida que crecíamos. Primero el CRM4YOU, luego la web y ahora Motorflash Message para WhatsApp: todo encaja y trabaja con los mismos datos.',
    author: 'Responsable de VO, Muy Car',
    stats: [
      { value: '3', label: 'Productos contratados (CRM + web + Message)', numeric: 3 },
      { value: 'Día 1', label: 'Cliente desde el nacimiento del negocio' },
      { value: '×3,2', label: 'Leads online en su evolución' },
      { value: '24/7', label: 'CRM, web y WhatsApp activos' },
    ],
    ecosystemTitle: 'Un cliente desde el día uno',
    ecosystemLead: 'Muy Car nació apoyándose en Motorflash y ha ido incorporando cada vez más soluciones conforme crecía el negocio.',
    ecosystemItems: [
      'CRM4YOU integrado con la operativa comercial',
      'Web corporativa Motorflash',
      'Motorflash Message · WhatsApp profesional',
    ],
    accent: 'orange',
  },
  {
    slug: 'auto-elia',
    brand: 'AUTO ELIA',
    badge: 'Cliente · Leads de calidad',
    headline: 'Concesionario oficial premium que capta leads de calidad con Motorflash Exclusive',
    intro: (
      <>
        Auto Elia, concesionario oficial Volvo y Lynk &amp; Co, opera con un pack Motorflash muy orientado a captación cualificada: <strong>web corporativa</strong>, <strong>marketing digital</strong>, <strong>publicación de stock</strong> y el servicio premium <strong>Motorflash Exclusive</strong> para <strong>conseguir leads de calidad</strong>, con alta intención de compra y mejor conversión a venta.
      </>
    ),
    quote:
      'Operamos con estándares de marca muy exigentes y necesitamos leads realmente cualificados. Motorflash Exclusive, junto a la web y el marketing digital, nos trae contactos con verdadera intención de compra coherentes con Volvo y Lynk & Co.',
    author: 'Dirección de Marketing, Grupo Auto Elia',
    stats: [
      { value: '4', label: 'Productos Motorflash contratados', numeric: 4 },
      { value: '+74%', label: 'Leads cualificados captados', numeric: 74, suffix: '%' },
      { value: '+55%', label: 'Conversión a venta km 0 y VO premium', numeric: 55, suffix: '%' },
      { value: 'Exclusive', label: 'Leads de calidad premium' },
    ],
    ecosystemTitle: 'Captación cualificada multimarca',
    ecosystemLead: 'Auto Elia combina web, marketing digital, publicación de stock y Motorflash Exclusive para generar leads con alta intención de compra.',
    ecosystemItems: [
      'Web corporativa Motorflash',
      'Marketing Digital gestionado',
      'Publicación de stock optimizada',
      'Motorflash Exclusive — leads premium',
    ],
    accent: 'dark',
  },
]

const BRAND_PILLS = ['Jarmauto', 'Ocasionplus', 'Flexicar', 'Auto Elia', 'Muy Car', '+1.500 más']

function isNumericStat(v: string) {
  return /^[+\-]?\d+([%]?)$/.test(v)
}

function parseNumericValue(v: string): { num: number; suffix: string } {
  const m = v.match(/^([+\-]?)(\d+)(.*)$/)
  if (!m) return { num: 0, suffix: '' }
  const sign = m[1] === '-' ? -1 : 1
  return { num: sign * parseInt(m[2], 10), suffix: m[3] }
}

export default function CasosExitoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 70% 100%, rgba(255, 128, 0, 0.10), transparent 60%)' }} />
        <div className="mf-container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="mf-eyebrow">Casos de éxito</span>
              <h1 className="text-3xl sm:text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                Clientes que confían en nosotros <span className="text-primary">desde hace años</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant mb-8">
                Resultados reales de concesionarios líderes que han crecido con Motorflash Solutions. Desde grupos multimarca con el ecosistema completo hasta especialistas que usan solo una pieza muy concreta.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {BRAND_PILLS.map((b) => (
                  <span key={b} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-outline-variant text-sm font-semibold text-on-surface">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Casos */}
      <div className="space-y-0">
        {CASES.map((c, idx) => (
          <CaseSection key={c.slug} caseItem={c} isAlt={idx % 2 === 1} index={idx} />
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mf-container">
          <Reveal>
            <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-tight">¿Quieres que tu marca sea el próximo caso?</h2>
              <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Cuéntanos cuál es tu reto comercial y te enseñamos un caso de un grupo de tu tamaño. En 30 minutos sabes qué piezas necesitas, cuánto cuesta y cuándo empezarías a vender más.
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-primary px-7 md:px-8 py-3 md:py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Hablar con un especialista
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function CaseSection({ caseItem, isAlt, index }: { caseItem: SuccessCase; isAlt: boolean; index: number }) {
  const bgClass = isAlt ? 'bg-surface-container' : 'bg-white'
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="mf-container">
        <Reveal>
          {/* Header del caso */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 ${isAlt ? 'lg:[&>div:first-child]:order-2' : ''}`}>
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {caseItem.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
                <span className="font-display block text-sm md:text-base text-primary uppercase tracking-widest mb-1">{caseItem.brand}</span>
                {caseItem.headline}
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">{caseItem.intro}</p>
            </div>

            {/* Stats */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {caseItem.stats.map((s, i) => {
                  const delay = (Math.min(3, i) * 100) as 0 | 100 | 200 | 300
                  return (
                    <Reveal key={s.label} delay={delay}>
                      <div className="bg-white border border-outline-variant rounded-2xl p-4 md:p-5 h-full">
                        <div className="font-display text-2xl md:text-3xl font-bold text-primary leading-none mb-2 tabular-nums">
                          {isNumericStat(s.value) ? (
                            <>
                              {parseNumericValue(s.value).num < 0 && '-'}
                              <AnimatedCounter target={Math.abs(parseNumericValue(s.value).num)} suffix={parseNumericValue(s.value).suffix} />
                            </>
                          ) : (
                            s.value
                          )}
                        </div>
                        <div className="text-[11px] md:text-xs font-semibold text-on-surface-variant uppercase tracking-wider leading-tight">{s.label}</div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quote */}
          <Reveal delay={100}>
            <blockquote className={`rounded-2xl md:rounded-3xl p-6 md:p-8 mb-10 ${caseItem.accent === 'dark' ? 'bg-on-surface text-white' : 'bg-white border border-outline-variant'}`}>
              <span className="material-symbols-outlined text-primary mb-3 block" style={{ fontSize: 28 }}>format_quote</span>
              <p className={`text-lg md:text-xl font-medium leading-relaxed mb-4 ${caseItem.accent === 'dark' ? 'text-white' : 'text-on-surface'}`}>
                "{caseItem.quote}"
              </p>
              <footer className={`text-sm font-semibold ${caseItem.accent === 'dark' ? 'text-white/70' : 'text-on-surface-variant'}`}>
                — {caseItem.author}
              </footer>
            </blockquote>
          </Reveal>

          {/* Ecosistema contratado */}
          <Reveal delay={200}>
            <div className="bg-white border border-outline-variant rounded-2xl md:rounded-3xl p-6 md:p-8">
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">PRODUCTOS CONTRATADOS</span>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{caseItem.ecosystemTitle}</h3>
                <p className="text-sm md:text-base text-on-surface-variant">{caseItem.ecosystemLead}</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseItem.ecosystemItems.map((it) => (
                  <li key={it} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant">
                    <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 22 }}>check_circle</span>
                    <span className="text-sm font-medium">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  )
}
