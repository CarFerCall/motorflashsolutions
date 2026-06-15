import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { HistoryTimeline } from '@/components/HistoryTimeline'

export const metadata = {
  title: 'La Compañía',
  description:
    '+20 años de experiencia y +180 especialistas en IT trabajando para la digitalización del sector del motor. Conoce el equipo, los valores y la historia de Motorflash Ibérica.',
  alternates: { canonical: '/compania' },
  openGraph: {
    title: 'La Compañía — Motorflash',
    description:
      '+20 años digitalizando el sector del motor. +1.500 concesionarios activos. 10M€ facturados en 2024.',
    url: '/compania',
  },
}

const VALUES = [
  {
    icon: 'visibility',
    title: 'Visión 360° del sector',
    desc: 'Conocemos cada etapa del ciclo comercial. Desarrollamos soluciones propias que cubren desde la publicación y la gestión operativa hasta la comunicación y la venta.',
  },
  {
    icon: 'bar_chart',
    title: 'Profesionalidad basada en datos',
    desc: 'Todas nuestras herramientas incorporan medición completa. Analizamos, reportamos y aportamos información útil para mejorar resultados en cada decisión.',
  },
  {
    icon: 'tune',
    title: 'Adaptación sin límites',
    desc: 'Customizamos nuestras soluciones para que encajen con la operativa de cada cliente. La tecnología debe adaptarse a las personas, no al revés.',
  },
  {
    icon: 'groups',
    title: 'Un equipo que hace que pasen cosas',
    desc: 'Trabajamos con una mentalidad práctica y resolutiva. Nos involucramos, colaboramos y buscamos siempre la forma más eficiente de ayudar a nuestros clientes a avanzar.',
  },
  {
    icon: 'auto_awesome',
    title: 'IA integrada en cada proceso',
    desc: 'La inteligencia artificial trabaja dentro de cada herramienta para automatizar tareas, analizar conversaciones y ayudarte a vender más, sin cambiar tu forma de trabajar.',
  },
  {
    icon: 'school',
    title: 'Aprendizaje continuo',
    desc: 'Visión crítica, empatía con el cliente, proactividad y pensamiento analítico. Aprender y evolucionar forma parte de nuestra cultura.',
  },
]

const TIMELINE = [
  { year: '2007', title: 'Lanzamiento del portal', desc: 'Comenzamos a trabajar con nuestro primer gran cliente, Audi Selection Plus, y lanzamos nuestro primer portal de clasificados. Empiezan nuestros primeros pasos en el sector del motor.', icon: 'rocket_launch' },
  { year: '2011', title: 'Agencia de Marketing Digital', desc: 'Creamos nuestra Agencia de Marketing Digital. Ampliamos capacidades con un equipo especializado en marketing para concesionarios y marcas.', icon: 'trending_up' },
  { year: '2015', title: 'Nace nuestro Contact Center', desc: 'Ponemos en marcha nuestro propio Contact Center para ofrecer atención, gestión de leads y soporte directo a concesionarios y grupos.', icon: 'support_agent' },
  { year: '2019', title: 'Publicación por matrícula', desc: 'Lanzamos nuestra herramienta de publicación por matrícula. Desarrollamos tecnología propia para automatizar la publicación de vehículos, aumentando rapidez y precisión.', icon: 'fact_check' },
  { year: '2021', title: 'Message y CRM4YOU', desc: 'Damos un salto clave incorporando Motorflash Message (WhatsApp empresarial) y CRM4YOU, nuestro CRM especializado para el sector del motor, totalmente personalizable.', icon: 'hub' },
  { year: '2025', title: 'IA + visión 360°', desc: 'Unificamos datos, procesos y comunicación incorporando inteligencia artificial en todo el ecosistema Motorflash para mejorar decisiones, eficiencia y resultados.', icon: 'auto_awesome', accent: true },
]

export default function CompaniaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">La Compañía</span>
              <h1 className="text-4xl md:text-display-lg font-semibold mb-6 leading-tight">
                Tu socio digital en el sector del motor
              </h1>
              <p className="text-lg text-on-surface-variant mb-4">
                +20 años de experiencia y +180 especialistas en IT trabajando para la digitalización del sector.
              </p>
              <p className="text-base text-on-surface-variant mb-8">
                Motorflash Ibérica de Negocios es la solución 360 para marcas y concesionarios del motor. Más de 1.500 clientes
                y 10M€ de facturación en 2024. Tecnología con IA integrada en todos los procesos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-primary">
                  Contactar con nosotros
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a href="#" className="btn-secondary">Trabaja con nosotros</a>
              </div>
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

      {/* KPIs */}
      <section className="py-16 border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { v: '+20', l: 'Años de experiencia' },
              { v: '+1.500', l: 'Clientes activos' },
              { v: '+10M€', l: 'Facturación 2024' },
              { v: '+180', l: 'Especialistas en IT' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="font-display text-4xl md:text-5xl font-semibold text-primary mb-2">{s.v}</div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">Nuestros valores</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">Operamos con conocimiento, profesionalidad y adaptación</h2>
              <p className="text-on-surface-variant mx-auto max-w-3xl">
                Creemos en una forma de trabajar clara: entendiendo el sector, tomando decisiones basadas en datos y adaptándonos a las necesidades reales de nuestros clientes. Esa combinación es la que hace que nuestras soluciones funcionen de verdad.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={Math.min(300, (i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{v.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                  <p className="text-on-surface-variant m-0">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline 6 hitos */}
      <section className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">Nuestra historia</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">Cómo hemos llegado hasta aquí</h2>
            </div>
          </Reveal>

          <HistoryTimeline items={TIMELINE} />
        </div>
      </section>

      {/* Sede */}
      <section className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">Dónde estamos</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">Sede central en Madrid</h2>
              <p className="text-lg text-on-surface-variant mb-4">
                Calle Basauri 17 – Edf. B, Bajo Izq. D<br />
                28023 Madrid, España
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-outline-variant" title="Sistema de Gestión de la Calidad">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">ISO 9001 · Calidad</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-outline-variant" title="Sistema de Gestión de la Seguridad de la Información">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">ISO 27001 · Seguridad</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="text-center">
                <span className="material-symbols-outlined" style={{ fontSize: 200, color: 'var(--primary)', opacity: 0.15 }}>location_on</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
