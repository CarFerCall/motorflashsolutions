import type { Metadata } from 'next'
import Link from 'next/link'

const PDF_HREF = '/documents/informe-sostenibilidad-2025.pdf'

export const metadata: Metadata = {
  title: 'Sostenibilidad · Ejercicio 2025',
  description:
    'El compromiso de Motorflash con la sostenibilidad: desempeño medioambiental, huella de carbono, prácticas laborales y ética empresarial. Datos verificables del ejercicio 2025.',
  alternates: { canonical: '/compania/sostenibilidad' },
}

const HERO_CHECKS = [
  'Electricidad 98,3 % renovable certificada con Garantías de Origen (GdO)',
  'Huella de carbono calculada según el GHG Protocol, alcances 1, 2 y 3',
  'Tasa de reciclaje del 60,9 %, por encima de nuestro objetivo del 55 %',
  'Compromiso Net-Zero a través del SME Climate Hub (alineado con SBTi)',
]

const COMMITMENT_CARDS = [
  {
    icon: 'public',
    title: 'Ámbito y alcance',
    desc: 'Sede única en Madrid, con 90 personas en plantilla a cierre de 2025. La totalidad de nuestro reporte cubre las operaciones reales de la entidad española.',
  },
  {
    icon: 'trending_down',
    title: 'Compromiso climático',
    desc: 'El 20 de mayo de 2026 formalizamos nuestra adhesión a través del SME Climate Hub, comprometiéndonos a reducir un 50 % las emisiones de Alcance 1 y 2 frente a 2024 y alcanzar Net-Zero antes de 2030.',
  },
  {
    icon: 'verified',
    title: 'Reporte verificable',
    desc: 'Elaboramos nuestro informe anual conforme al estándar VSME del EFRAG, con métricas trazables y factores de emisión oficiales de la Agencia Europea de Medio Ambiente e IDAE.',
  },
]

const ENV_STATS = [
  { v: '12.692', unit: 'kWh', l: 'Consumo eléctrico total (2025)' },
  { v: '98,3', unit: '%', l: 'Energía renovable certificada (GdO)' },
  { v: '5,40', unit: 'tCO₂e', l: 'Emisiones A1+A2 (método mercado)' },
  { v: '60,9', unit: '%', l: 'Tasa de reciclaje de residuos' },
]

const ENERGY_ROWS: { label: string; value: string }[] = [
  { label: 'Consumo eléctrico total', value: '12.692 kWh' },
  { label: 'Con energía renovable certificada (GdO)', value: '12.476 kWh' },
  { label: 'Con mix de red', value: '216 kWh' },
  { label: 'Intensidad energética', value: '1.686 kWh/M€' },
  { label: 'Consumo por empleado', value: '141 kWh' },
]

const GHG_ROWS: { label: string; market: string; location: string }[] = [
  { label: 'Alcance 1 — flota de empresa', market: '5,39', location: '5,39' },
  { label: 'Alcance 2 — electricidad (sede)', market: '0,01', location: '2,30' },
]

const WASTE_ROWS: { label: string; kg: string; pct: string }[] = [
  { label: 'Orgánico', kg: '240,85 kg', pct: '39,1 %' },
  { label: 'Envases', kg: '193,36 kg', pct: '31,4 %' },
  { label: 'Papel y cartón', kg: '178,10 kg', pct: '28,9 %' },
  { label: 'Vidrio', kg: '3,66 kg', pct: '0,6 %' },
  { label: 'Residuos peligrosos', kg: '0 kg', pct: '—' },
]

const PEOPLE_CARDS = [
  {
    icon: 'badge',
    title: 'Empleo estable',
    desc: 'El 100 % de la plantilla cuenta con contrato indefinido a tiempo completo, eliminando cualquier diferencia de trato derivada de la modalidad contractual.',
  },
  {
    icon: 'balance',
    title: 'Igualdad',
    desc: 'Disponemos de Plan de Igualdad y formación específica en igualdad, con protocolos de prevención del acoso y un mecanismo de reclamación accesible y confidencial.',
  },
  {
    icon: 'health_and_safety',
    title: 'Seguridad y salud',
    desc: 'Gestionamos la prevención de riesgos laborales y promovemos el bienestar del equipo, incluyendo beneficios de salud dentro de la retribución flexible.',
  },
]

const ETHICS_CARDS = [
  {
    icon: 'shield',
    title: 'Seguridad de la información',
    desc: 'Certificación ISO/IEC 27001:2022 (TÜV Rheinland) para nuestro Contact Center, servicios de atención al cliente, diseño, gestión de proyectos y programación.',
  },
  {
    icon: 'campaign',
    title: 'Canal ético',
    desc: 'Canal de denuncias disponible de forma permanente para empleados y terceros, con garantía de confidencialidad y no represalias. Sin incidentes confirmados en el período.',
  },
  {
    icon: 'lock',
    title: 'Protección de datos',
    desc: 'Aplicamos controles de acceso y medidas técnicas y organizativas para proteger los datos personales de terceros frente a accesos o divulgaciones no autorizados.',
  },
]

const TARGETS = [
  { yr: '2030', strong: 'Net-Zero.', text: 'Alcanzar cero emisiones netas, en línea con nuestra adhesión a través del SME Climate Hub.' },
  { yr: '2030', strong: '−50 % de emisiones.', text: 'Reducir a la mitad las emisiones de Alcance 1 y 2 respecto al año base 2024.' },
  { yr: 'Anual', strong: 'Energía 100 % renovable.', text: 'Mantener el suministro eléctrico cubierto íntegramente por Garantías de Origen.' },
  { yr: 'Anual', strong: 'Reciclaje >55 %.', text: 'Sostener y mejorar la tasa de recuperación de residuos por encima del objetivo interno.' },
]

export default function SostenibilidadPage() {
  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-20 md:py-24">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,128,0,0.08), transparent 55%)' }} />
        <div className="mf-container max-w-4xl">
          <span className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>eco</span>
            Compromiso corporativo · Ejercicio 2025
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
            Sostenibilidad en <span className="text-primary">Motorflash</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-3xl">
            Integramos la sostenibilidad en cómo trabajamos: medimos nuestra huella, cuidamos a nuestro equipo y operamos con integridad. Este es nuestro desempeño real, con datos verificables del ejercicio 2025.
          </p>
          <ul className="space-y-2.5 mb-8">
            {HERO_CHECKS.map((c) => (
              <li key={c} className="flex gap-2 items-start text-sm text-on-surface">
                <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0" style={{ fontSize: 18 }}>check_circle</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PDF_HREF}
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/30"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
              Descargar Informe de Sostenibilidad 2025
            </a>
            <a
              href="#medioambiente"
              className="inline-flex items-center gap-2 border border-outline text-on-surface px-6 py-3 rounded-full text-sm font-bold hover:bg-surface-container transition-colors"
            >
              Ver nuestros datos
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-surface-container-low border-y border-outline-variant py-16">
        <div className="mf-container max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">Nuestro compromiso con la sostenibilidad</p>
          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-on-surface mb-4 relative">
            <span className="text-primary text-6xl leading-none absolute -top-4 -left-2 opacity-25">“</span>
            Entendemos la sostenibilidad como un compromiso propio y permanente: medir y reducir nuestra huella, cuidar a las personas que forman el equipo y operar siempre con integridad.
          </blockquote>
          <p className="text-sm text-on-surface-variant">Este compromiso se traduce en objetivos concretos, datos verificables y una mejora continua año tras año.</p>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>handshake</span>
            Nuestro enfoque
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">Una empresa española que crece de forma responsable</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
            Motorflash Ibérica de Negocios, S.L. desarrolla soluciones digitales para el sector de la automoción desde 2007. Toda nuestra actividad se concentra en una única sede en Madrid, donde aplicamos nuestros compromisos de sostenibilidad de forma directa y medible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMITMENT_CARDS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medioambiente */}
      <section id="medioambiente" className="bg-surface-container-low border-y border-outline-variant py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>forest</span>
            Medioambiente
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">Desempeño medioambiental 2025</h2>
          <p className="text-on-surface-variant max-w-3xl mb-8 leading-relaxed">
            Consumimos energía únicamente en forma de electricidad y medimos cada fracción de residuo generado en nuestra sede. Estos son los resultados del ejercicio, con su año y unidad de referencia.
          </p>

          {/* Big stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {ENV_STATS.map((s) => (
              <div key={s.l} className="rounded-2xl bg-white border border-outline-variant p-5">
                <div className="text-3xl md:text-4xl font-black text-primary leading-none mb-2">
                  {s.v}<small className="text-base font-bold text-on-surface-variant ml-1">{s.unit}</small>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant leading-tight">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Two tables side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl bg-white border border-outline-variant p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>bolt</span>
                Consumo de energía
              </h3>
              <table className="w-full text-sm">
                <caption className="caption-bottom text-xs text-on-surface-variant text-left pt-3">
                  Ejercicio 2025 · fuente: facturas eléctricas Eleia Energía y Naturgy
                </caption>
                <thead>
                  <tr className="text-left border-b border-outline-variant">
                    <th className="py-2 font-semibold text-on-surface-variant">Indicador</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">Valor 2025</th>
                  </tr>
                </thead>
                <tbody>
                  {ENERGY_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-outline-variant/50">
                      <td className="py-2 pr-2">{r.label}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-on-surface-variant mt-3 italic">
                El 98,3 % del consumo está cubierto por Garantías de Origen renovables. El 1,7 % restante corresponde a un período puntual con mix de red.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-outline-variant p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>cloud</span>
                Emisiones de GEI
              </h3>
              <table className="w-full text-sm">
                <caption className="caption-bottom text-xs text-on-surface-variant text-left pt-3">
                  Ejercicio 2025 · toneladas de CO₂ equivalente (tCO₂e) · GHG Protocol
                </caption>
                <thead>
                  <tr className="text-left border-b border-outline-variant">
                    <th className="py-2 font-semibold text-on-surface-variant">Alcance</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">Mercado</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">Ubicación</th>
                  </tr>
                </thead>
                <tbody>
                  {GHG_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-outline-variant/50">
                      <td className="py-2 pr-2">{r.label}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.market}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.location}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-outline-variant">
                    <td className="py-2 pr-2 font-bold">Total A1 + A2</td>
                    <td className="py-2 text-right font-bold text-primary whitespace-nowrap">5,40</td>
                    <td className="py-2 text-right font-bold text-primary whitespace-nowrap">7,69</td>
                  </tr>
                </tfoot>
              </table>
              <p className="text-xs text-on-surface-variant mt-3 italic">
                Solo entran en Alcance 1 los vehículos cuyo combustible paga directamente la empresa. El método de mercado refleja la electricidad 100 % renovable certificada por GdO.
              </p>
            </div>
          </div>

          {/* Waste table */}
          <div className="rounded-2xl bg-white border border-outline-variant p-6">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>recycling</span>
              Gestión de residuos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-sm">
                <caption className="caption-bottom text-xs text-on-surface-variant text-left pt-3">
                  Ejercicio 2025 · residuos registrados por pesaje diario en sede (kg)
                </caption>
                <thead>
                  <tr className="text-left border-b border-outline-variant">
                    <th className="py-2 font-semibold text-on-surface-variant">Fracción</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">2025</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">% del total</th>
                  </tr>
                </thead>
                <tbody>
                  {WASTE_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-outline-variant/50">
                      <td className="py-2 pr-2">{r.label}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.kg}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-outline-variant">
                    <td className="py-2 pr-2 font-bold">Total no peligrosos</td>
                    <td className="py-2 text-right font-bold text-primary whitespace-nowrap">615,97 kg</td>
                    <td className="py-2 text-right font-bold text-primary whitespace-nowrap">100 %</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-xs text-on-surface-variant mt-3 italic">
              Las fracciones recuperables (envases, papel/cartón y vidrio) suponen el 60,9 % del total. No se generan residuos peligrosos en la actividad.
            </p>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section id="personas" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>groups</span>
            Personas
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">Prácticas laborales y derechos humanos</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
            Nuestro equipo es el centro de la empresa. Apostamos por el empleo estable, la igualdad de oportunidades y un entorno de trabajo seguro y saludable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PEOPLE_CARDS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ética */}
      <section id="etica" className="bg-surface-container-low border-y border-outline-variant py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>gavel</span>
            Gobernanza
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">Ética empresarial e integridad</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
            Operamos con transparencia y protegemos la información de nuestros clientes conforme a los estándares más exigentes del sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ETHICS_CARDS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section id="objetivos" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>flag</span>
            Hoja de ruta
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-8">Nuestros objetivos de sostenibilidad</h2>
          <ul className="space-y-3">
            {TARGETS.map((t, i) => (
              <li key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-outline-variant bg-white hover:border-primary/40 transition-colors">
                <span className="inline-flex items-center justify-center min-w-[68px] px-3 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                  {t.yr}
                </span>
                <p className="text-sm md:text-base text-on-surface leading-relaxed">
                  <strong className="font-bold">{t.strong}</strong> {t.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-surface-container-low border-t border-outline-variant py-20 md:py-24">
        <div className="mf-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Consulta nuestro Informe de Sostenibilidad 2025 completo
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Todos los datos de este resumen, con su metodología y detalle por indicador, están disponibles en nuestro informe anual elaborado conforme al estándar VSME.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PDF_HREF}
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
              Descargar el informe (PDF)
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-outline text-on-surface px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-surface-container transition-colors"
            >
              Contactar con nosotros
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
