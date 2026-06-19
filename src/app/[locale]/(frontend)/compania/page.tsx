import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { Reveal } from '@/components/Reveal'
import { HistoryTimeline } from '@/components/HistoryTimeline'

type LocaleKey = 'es' | 'en' | 'zh'

interface CompanyCopy {
  metaTitle: string
  metaDescription: string
  ogDescription: string
  eyebrow: string
  title: string
  intro1: string
  intro2: string
  ctaContact: string
  ctaWork: string
  heroBadgeYears: string
  heroBadgeLead: string
  kpiYears: string
  kpiClients: string
  kpiRevenue: string
  kpiTeam: string
  valuesEyebrow: string
  valuesTitle: string
  valuesLead: string
  values: { icon: string; title: string; desc: string }[]
  historyEyebrow: string
  historyTitle: string
  timeline: { year: string; title: string; desc: string; icon: string; accent?: boolean }[]
  hqEyebrow: string
  hqTitle: string
  hqAddress: string
  hqAddress2: string
  isoQuality: string
  isoSecurity: string
  isoQualityTitle: string
  isoSecurityTitle: string
}

const COPY: Record<LocaleKey, CompanyCopy> = {
  es: {
    metaTitle: 'La Compañía',
    metaDescription: '+20 años de experiencia y +200 especialistas en IT trabajando para la digitalización del sector del motor. Conoce el equipo, los valores y la historia de Motorflash Ibérica.',
    ogDescription: '+20 años digitalizando el sector del motor. +1.500 concesionarios activos. 10M€ facturados en 2024.',
    eyebrow: 'La Compañía',
    title: 'Tu socio digital en el sector del motor',
    intro1: '+20 años de experiencia y +200 especialistas en IT trabajando para la digitalización del sector.',
    intro2: 'Motorflash Ibérica de Negocios es la solución 360 para marcas y concesionarios del motor. Más de 1.500 clientes y 10M€ de facturación en 2024. Tecnología con IA integrada en todos los procesos.',
    ctaContact: 'Contactar con nosotros',
    ctaWork: 'Trabaja con nosotros',
    heroBadgeYears: '+20 Años',
    heroBadgeLead: 'Liderando la innovación',
    kpiYears: 'Años de experiencia',
    kpiClients: 'Clientes activos',
    kpiRevenue: 'Facturación 2024',
    kpiTeam: 'Especialistas en IT',
    valuesEyebrow: 'Nuestros valores',
    valuesTitle: 'Operamos con conocimiento, profesionalidad y adaptación',
    valuesLead: 'Creemos en una forma de trabajar clara: entendiendo el sector, tomando decisiones basadas en datos y adaptándonos a las necesidades reales de nuestros clientes. Esa combinación es la que hace que nuestras soluciones funcionen de verdad.',
    values: [
      { icon: 'visibility', title: 'Visión 360° del sector', desc: 'Conocemos cada etapa del ciclo comercial. Desarrollamos soluciones propias que cubren desde la publicación y la gestión operativa hasta la comunicación y la venta.' },
      { icon: 'bar_chart', title: 'Profesionalidad basada en datos', desc: 'Todas nuestras herramientas incorporan medición completa. Analizamos, reportamos y aportamos información útil para mejorar resultados en cada decisión.' },
      { icon: 'tune', title: 'Adaptación sin límites', desc: 'Customizamos nuestras soluciones para que encajen con la operativa de cada cliente. La tecnología debe adaptarse a las personas, no al revés.' },
      { icon: 'groups', title: 'Un equipo que hace que pasen cosas', desc: 'Trabajamos con una mentalidad práctica y resolutiva. Nos involucramos, colaboramos y buscamos siempre la forma más eficiente de ayudar a nuestros clientes a avanzar.' },
      { icon: 'auto_awesome', title: 'IA integrada en cada proceso', desc: 'La inteligencia artificial trabaja dentro de cada herramienta para automatizar tareas, analizar conversaciones y ayudarte a vender más, sin cambiar tu forma de trabajar.' },
      { icon: 'school', title: 'Aprendizaje continuo', desc: 'Visión crítica, empatía con el cliente, proactividad y pensamiento analítico. Aprender y evolucionar forma parte de nuestra cultura.' },
    ],
    historyEyebrow: 'Nuestra historia',
    historyTitle: 'Cómo hemos llegado hasta aquí',
    timeline: [
      { year: '2007', title: 'Lanzamiento del portal', desc: 'Comenzamos a trabajar con nuestro primer gran cliente, Audi Selection Plus, y lanzamos nuestro primer portal de clasificados. Empiezan nuestros primeros pasos en el sector del motor.', icon: 'rocket_launch' },
      { year: '2011', title: 'Agencia de Marketing Digital', desc: 'Creamos nuestra Agencia de Marketing Digital. Ampliamos capacidades con un equipo especializado en marketing para concesionarios y marcas.', icon: 'trending_up' },
      { year: '2015', title: 'Nace nuestro Contact Center', desc: 'Ponemos en marcha nuestro propio Contact Center para ofrecer atención, gestión de leads y soporte directo a concesionarios y grupos.', icon: 'support_agent' },
      { year: '2019', title: 'Publicación por matrícula', desc: 'Lanzamos nuestra herramienta de publicación por matrícula. Desarrollamos tecnología propia para automatizar la publicación de vehículos, aumentando rapidez y precisión.', icon: 'fact_check' },
      { year: '2021', title: 'Message y CRM4YOU', desc: 'Damos un salto clave incorporando Motorflash Message (WhatsApp empresarial) y CRM4YOU, nuestro CRM especializado para el sector del motor, totalmente personalizable.', icon: 'hub' },
      { year: '2025', title: 'IA + visión 360°', desc: 'Unificamos datos, procesos y comunicación incorporando inteligencia artificial en todo el ecosistema Motorflash para mejorar decisiones, eficiencia y resultados.', icon: 'auto_awesome', accent: true },
    ],
    hqEyebrow: 'Dónde estamos',
    hqTitle: 'Sede central en Madrid',
    hqAddress: 'Calle Basauri 17 – Edf. B, Bajo Izq. D',
    hqAddress2: '28023 Madrid, España',
    isoQuality: 'ISO 9001 · Calidad',
    isoSecurity: 'ISO 27001 · Seguridad',
    isoQualityTitle: 'Sistema de Gestión de la Calidad',
    isoSecurityTitle: 'Sistema de Gestión de la Seguridad de la Información',
  },
  en: {
    metaTitle: 'The Company',
    metaDescription: '20+ years of experience and 200+ IT specialists driving digitalisation in the automotive sector. Meet the team, values and history of Motorflash Ibérica.',
    ogDescription: '20+ years digitalising the automotive sector. 1,500+ active dealerships. €10M revenue in 2024.',
    eyebrow: 'The Company',
    title: 'Your digital partner in the automotive sector',
    intro1: '20+ years of experience and 200+ IT specialists driving the sector\'s digitalisation.',
    intro2: 'Motorflash Ibérica de Negocios is the 360 solution for automotive brands and dealerships. Over 1,500 clients and €10M revenue in 2024. AI-integrated technology across every process.',
    ctaContact: 'Get in touch',
    ctaWork: 'Work with us',
    heroBadgeYears: '20+ Years',
    heroBadgeLead: 'Leading innovation',
    kpiYears: 'Years of experience',
    kpiClients: 'Active clients',
    kpiRevenue: '2024 revenue',
    kpiTeam: 'IT specialists',
    valuesEyebrow: 'Our values',
    valuesTitle: 'We operate with knowledge, professionalism and adaptability',
    valuesLead: "We believe in a clear way of working: understanding the sector, making data-driven decisions and adapting to our clients' real needs. That combination is what makes our solutions actually work.",
    values: [
      { icon: 'visibility', title: '360° view of the sector', desc: 'We know every stage of the sales cycle. We build proprietary solutions covering publication, operations, communication and sale.' },
      { icon: 'bar_chart', title: 'Data-backed professionalism', desc: 'Every tool we build has full measurement. We analyse, report and deliver useful information to improve results at every decision.' },
      { icon: 'tune', title: 'Adaptation without limits', desc: "We customise our solutions to fit every client's operation. Technology should adapt to people, not the other way around.", },
      { icon: 'groups', title: 'A team that makes things happen', desc: 'We work with a practical, resolutive mindset. We get involved, collaborate and always look for the most efficient way to move clients forward.' },
      { icon: 'auto_awesome', title: 'AI integrated in every process', desc: 'AI runs inside every tool to automate tasks, analyse conversations and help you sell more — without changing how you work.' },
      { icon: 'school', title: 'Continuous learning', desc: 'Critical thinking, customer empathy, proactivity and analytical mindset. Learning and evolving is part of our culture.' },
    ],
    historyEyebrow: 'Our story',
    historyTitle: 'How we got here',
    timeline: [
      { year: '2007', title: 'Portal launch', desc: 'We started working with our first major client, Audi Selection Plus, and launched our first classifieds portal. First steps in the automotive sector.', icon: 'rocket_launch' },
      { year: '2011', title: 'Digital Marketing Agency', desc: 'We launched our Digital Marketing Agency. We grew our capabilities with a team specialised in marketing for dealerships and brands.', icon: 'trending_up' },
      { year: '2015', title: 'Our Contact Center is born', desc: 'We launched our own Contact Center to offer customer service, lead management and direct support to dealerships and groups.', icon: 'support_agent' },
      { year: '2019', title: 'Plate-based publishing', desc: 'We launched our plate-based publishing tool. Proprietary technology to automate vehicle publishing, boosting speed and accuracy.', icon: 'fact_check' },
      { year: '2021', title: 'Message and CRM4YOU', desc: 'A key step: we launched Motorflash Message (enterprise WhatsApp) and CRM4YOU, our fully customisable CRM built for the automotive sector.', icon: 'hub' },
      { year: '2025', title: 'AI + 360° view', desc: 'We unified data, processes and communication by embedding AI across the entire Motorflash ecosystem for better decisions, efficiency and results.', icon: 'auto_awesome', accent: true },
    ],
    hqEyebrow: 'Where we are',
    hqTitle: 'Madrid headquarters',
    hqAddress: 'Calle Basauri 17 – Bldg. B, Lower Left D',
    hqAddress2: '28023 Madrid, Spain',
    isoQuality: 'ISO 9001 · Quality',
    isoSecurity: 'ISO 27001 · Security',
    isoQualityTitle: 'Quality Management System',
    isoSecurityTitle: 'Information Security Management System',
  },
  zh: {
    metaTitle: '公司',
    metaDescription: '20 余年经验和 200 多名 IT 专家,推动汽车行业的数字化。了解 Motorflash Ibérica 的团队、价值观与历史。',
    ogDescription: '20 余年数字化汽车行业。1500+ 活跃经销商。2024 年营业额 1000 万欧元。',
    eyebrow: '公司',
    title: '您在汽车行业的数字化合作伙伴',
    intro1: '20 余年经验和 200 多名 IT 专家共同推动行业的数字化。',
    intro2: 'Motorflash Ibérica de Negocios 为汽车品牌与经销商提供 360 解决方案。客户超过 1,500 家,2024 年营业额 1000 万欧元。AI 集成于全流程。',
    ctaContact: '联系我们',
    ctaWork: '加入我们',
    heroBadgeYears: '20+ 年',
    heroBadgeLead: '引领创新',
    kpiYears: '深耕行业年数',
    kpiClients: '活跃客户',
    kpiRevenue: '2024 年营业额',
    kpiTeam: 'IT 专家',
    valuesEyebrow: '我们的价值观',
    valuesTitle: '以专业知识、专业精神与适应力运营',
    valuesLead: '我们坚持清晰的工作方式:理解行业、用数据驱动决策、贴合客户实际需求。正是这种结合,让我们的方案真正奏效。',
    values: [
      { icon: 'visibility', title: '行业 360° 视角', desc: '我们了解销售周期的每个环节。我们自研覆盖从发布、运营到沟通与销售的全链路方案。' },
      { icon: 'bar_chart', title: '以数据为本的专业', desc: '所有工具都内置完整的度量。我们分析、报告并提供对每个决策有用的信息。' },
      { icon: 'tune', title: '无限的适应力', desc: '我们为每位客户的运营定制方案。技术应当适应人,而非反之。' },
      { icon: 'groups', title: '让事情发生的团队', desc: '我们以务实、解决问题的心态工作。深度参与、彼此协作,始终以最有效的方式推动客户前进。' },
      { icon: 'auto_awesome', title: '每个流程内嵌 AI', desc: 'AI 嵌入每一个工具,自动化任务、分析对话,助您卖出更多 — 而无需改变您的工作方式。' },
      { icon: 'school', title: '持续学习', desc: '批判性思维、对客户的同理心、主动性与分析能力。学习与进化是我们文化的一部分。' },
    ],
    historyEyebrow: '我们的故事',
    historyTitle: '我们如何走到今天',
    timeline: [
      { year: '2007', title: '门户上线', desc: '我们与首位重要客户 Audi Selection Plus 合作,并推出首个分类信息门户。汽车行业之路由此启程。', icon: 'rocket_launch' },
      { year: '2011', title: '数字营销代理', desc: '我们成立数字营销代理。打造专注于经销商与品牌的营销团队,扩展能力边界。', icon: 'trending_up' },
      { year: '2015', title: '自有 Contact Center 诞生', desc: '我们启动自有 Contact Center,为经销商与集团提供客服、潜客管理与直接支持。', icon: 'support_agent' },
      { year: '2019', title: '按车牌发布', desc: '我们推出按车牌发布工具。自研技术让车辆发布更快速、更精准。', icon: 'fact_check' },
      { year: '2021', title: 'Message 与 CRM4YOU', desc: '关键飞跃:推出 Motorflash Message(企业级 WhatsApp)与 CRM4YOU — 完全可定制、面向汽车行业的 CRM。', icon: 'hub' },
      { year: '2025', title: 'AI + 360° 视角', desc: '我们将 AI 嵌入整个 Motorflash 生态,统一数据、流程与沟通,以提升决策、效率与业绩。', icon: 'auto_awesome', accent: true },
    ],
    hqEyebrow: '我们的所在',
    hqTitle: '马德里总部',
    hqAddress: 'Calle Basauri 17 – B 座,下左 D',
    hqAddress2: '28023 马德里,西班牙',
    isoQuality: 'ISO 9001 · 质量',
    isoSecurity: 'ISO 27001 · 安全',
    isoQualityTitle: '质量管理体系',
    isoSecurityTitle: '信息安全管理体系',
  },
}

export async function generateMetadata() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/compania' },
    openGraph: {
      title: `${t.metaTitle} — Motorflash`,
      description: t.ogDescription,
      url: '/compania',
    },
  }
}

export default async function CompaniaPage() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">{t.eyebrow}</span>
              <h1 className="text-4xl md:text-display-lg font-semibold mb-6 leading-tight">{t.title}</h1>
              <p className="text-lg text-on-surface-variant mb-4">{t.intro1}</p>
              <p className="text-base text-on-surface-variant mb-8">{t.intro2}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-primary">
                  {t.ctaContact}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a href="#" className="btn-secondary">{t.ctaWork}</a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/home-expertise.png" alt="Motorflash team" width={720} height={480} className="w-full h-auto" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display text-2xl font-semibold m-0">{t.heroBadgeYears}</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 m-0">{t.heroBadgeLead}</p>
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
              { v: '+20', l: t.kpiYears },
              { v: '+1.500', l: t.kpiClients },
              { v: '+10M€', l: t.kpiRevenue },
              { v: '+200', l: t.kpiTeam },
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
              <span className="mf-eyebrow">{t.valuesEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.valuesTitle}</h2>
              <p className="text-on-surface-variant mx-auto max-w-3xl">{t.valuesLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((v, i) => (
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
              <span className="mf-eyebrow">{t.historyEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">{t.historyTitle}</h2>
            </div>
          </Reveal>

          <HistoryTimeline items={t.timeline} />
        </div>
      </section>

      {/* Sede */}
      <section className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">{t.hqEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.hqTitle}</h2>
              <p className="text-lg text-on-surface-variant mb-4">
                {t.hqAddress}<br />
                {t.hqAddress2}
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-outline-variant" title={t.isoQualityTitle}>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoQuality}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-outline-variant" title={t.isoSecurityTitle}>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoSecurity}</span>
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
