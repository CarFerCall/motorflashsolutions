import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'en' | 'zh'

interface CcCopy {
  badge: string
  title1: string
  titleAccent: string
  heroLead: string
  ctaDemo: string
  ctaPricing: string
  pillarsEyebrow: string
  pillarsTitle: string
  pillarsLead: string
  pillars: { icon: string; title: string; desc: string }[]
  channelsEyebrow: string
  channelsTitle: string
  channelsLead: string
  channels: { icon: string; title: string; desc: string }[]
  complianceTopline: string
  compliance: string[]
  teamEyebrow: string
  teamTitle: string
  teamLead: string
  kpis: { v: string; l: string }[]
  teamStats: { v: string; l: string; primary?: boolean }[]
  servicesEyebrow: string
  servicesTitle: string
  servicesLead: string
  services: { icon: string; title: string; desc: string }[]
  reportingEyebrow: string
  reportingTitle: string
  reportingLead: string
  reportingPoints: string[]
  derivationStats: { v: string; l: string }[]
  derivationExampleTopline: string
  derivationExample: string
  ctaTitle: string
  ctaLead: string
  ctaButton: string
}

const COPY: Record<LocaleKey, CcCopy> = {
  es: {
    badge: 'CONTACT CENTER · MOTORFLASH SOLUTIONS',
    title1: 'Lo que no se mide, ',
    titleAccent: 'no se puede mejorar',
    heroLead: 'Servicio de Contact Center exclusivo del sector de la automoción. Atendemos el 100 % de tus leads en todos los canales (voz, WhatsApp, email, chat, RRSS) con plataformas propias, equipo especializado y reporting en tiempo real.',
    ctaDemo: 'Solicitar Demo',
    ctaPricing: 'Ver tarifas en /precios',
    pillarsEyebrow: 'SERVICIOS EXCLUSIVOS EN AUTOMOCIÓN',
    pillarsTitle: '6 razones por las que somos diferentes',
    pillarsLead: 'No somos un Contact Center generalista. Vivimos del sector del motor desde hace 7 años y todo nuestro stack está pensado para concesionarios.',
    pillars: [
      { icon: 'campaign', title: 'Motor Lead Management', desc: 'Nuestro servicio estrella en gestión de leads para automoción.' },
      { icon: 'memory', title: 'Tecnología propia', desc: 'Plataformas de última generación desarrolladas por nosotros.' },
      { icon: 'groups', title: 'Equipo especializado', desc: '50 agentes formados en el sector del motor.' },
      { icon: 'insights', title: 'Reporting en tiempo real', desc: 'Informes customizables por portal, origen, canal, producto y comercial.' },
      { icon: 'price_check', title: 'Propuesta competitiva', desc: 'La tarifa más ajustada del sector con modelo por uso real.' },
      { icon: 'verified', title: 'Cartera consolidada', desc: '+400 clientes y 2.000 concesionarios respaldan el servicio.' },
    ],
    channelsEyebrow: 'TECNOLOGÍA MULTICANAL',
    channelsTitle: 'Atendemos donde está tu cliente',
    channelsLead: 'Las soluciones técnicas más avanzadas del sector. Plataformas propias para customizar cualquier servicio y crecer con tus operaciones.',
    channels: [
      { icon: 'call', title: 'Llamadas entrantes y salientes', desc: 'Atendemos el 100 % de las llamadas con infraestructura cloud y plataformas propias.' },
      { icon: 'chat', title: 'WhatsApp Business API', desc: 'Únicos en el mercado con desarrollo propio que mide la conversión del canal por excelencia.' },
      { icon: 'mail', title: 'Emails & Click-to-Call', desc: 'Integramos los formularios de contacto procedentes de cualquier canal web.' },
      { icon: 'forum', title: 'Chats y redes sociales', desc: 'Respondemos con inmediatez a dudas técnicas o comerciales en cualquier canal.' },
    ],
    complianceTopline: 'CUMPLIMIENTO Y CONVERSIÓN',
    compliance: [
      'Grabación de todas las llamadas hasta 5 años, conforme RGPD',
      'Recogida de consentimientos para acciones de remarketing posteriores',
      'Stock publicado en todos los canales para estrategias de precios y conversión a venta',
    ],
    teamEyebrow: 'EQUIPO MULTIDISCIPLINAR',
    teamTitle: 'Atención al cliente integral con KPIs garantizados',
    teamLead: 'Gestionamos tus prospectos y leads con un equipo especializado en automoción. Trabajamos de lunes a sábado en horario ininterrumpido, con posibilidad de ampliación a fines de semana.',
    kpis: [
      { v: '>90 %', l: 'Atención en recepción' },
      { v: '<10 min', l: 'Tiempo de contacto en emisión' },
      { v: '195.000', l: 'Llamadas/mes atendidas' },
      { v: '100 %', l: 'Respuestas garantizadas' },
    ],
    teamStats: [
      { v: '50', l: 'AGENTES' },
      { v: '+400', l: 'CLIENTES', primary: true },
      { v: '7', l: 'AÑOS DE EXPERIENCIA' },
      { v: '2.000', l: 'CONCESIONARIOS' },
    ],
    servicesEyebrow: 'QUÉ HACEMOS POR TI',
    servicesTitle: 'Desde la captura del lead hasta la postventa',
    servicesLead: 'Un flujo completo de atención: cualificamos, filtramos, derivamos equitativamente entre tus comerciales y reportamos cada interacción.',
    services: [
      { icon: 'phone_callback', title: 'Recepción y emisión', desc: 'Cualificación de contacto + RGPD desde el primer minuto.' },
      { icon: 'thermostat', title: 'Cualificación de temperatura', desc: 'Filtro de leads según intención real de compra.' },
      { icon: 'event_available', title: 'Citas de prueba y taller', desc: 'Gestión y confirmación de asistencia a citas.' },
      { icon: 'support', title: 'Postventa y gestión', desc: 'Acompañamos al cliente después de la entrega.' },
      { icon: 'inbox', title: 'Back office y CRM', desc: 'Gestión de emails, depuración de BBDD y mystery calls.' },
      { icon: 'language', title: 'Servicio multidioma', desc: 'Castellano, inglés, francés, catalán y portugués.' },
    ],
    reportingEyebrow: 'REPORTING EN TIEMPO REAL',
    reportingTitle: 'Sistemas de información que sí mueven la aguja',
    reportingLead: 'Acceso a un gestor exclusivo con métricas de control e informes detallados de toda la actividad. Sabes en cada momento qué leads tienes, de dónde vienen y qué hace cada comercial con ellos.',
    reportingPoints: [
      'Registro completo de contactos destacando los leads más calientes',
      'Acceso a gestor exclusivo con todas las métricas de control',
      'Estrategias de seguimiento "Nurturing" sobre tus potenciales',
      'Acceso ilimitado a todas las grabaciones de tus clientes',
      'Reportes por portal, origen, canal, producto, departamento y comercial',
      'Visión de derivación equitativa entre comerciales VO y VN',
    ],
    derivationStats: [
      { v: '37 %', l: 'Transferidos en línea' },
      { v: '35 %', l: 'No transferidos' },
      { v: '18 %', l: 'Otros estados' },
      { v: '10 %', l: 'Derivados vía email' },
    ],
    derivationExampleTopline: 'EJEMPLO REAL DE GESTIÓN',
    derivationExample: '164 leads gestionados en un mes para un grupo de concesionarios, con derivación equitativa entre 5 comerciales.',
    ctaTitle: '¿Listo para externalizar tu atención al cliente?',
    ctaLead: 'Cuéntanos cuántos leads recibes al mes y te enseñamos un dashboard real con un grupo de tu tamaño. En 30 minutos sabes el coste y el ROI estimado.',
    ctaButton: 'Solicitar Demo Personalizada',
  },
  en: {
    badge: 'CONTACT CENTER · MOTORFLASH SOLUTIONS',
    title1: "What isn't measured ",
    titleAccent: "can't be improved",
    heroLead: 'Contact Center service exclusive to the automotive sector. We handle 100% of your leads on every channel (voice, WhatsApp, email, chat, social) with proprietary platforms, a specialised team and live reporting.',
    ctaDemo: 'Request a demo',
    ctaPricing: 'See pricing in /precios',
    pillarsEyebrow: 'AUTOMOTIVE-EXCLUSIVE SERVICES',
    pillarsTitle: '6 reasons why we are different',
    pillarsLead: "We are not a generalist Contact Center. We have lived from the automotive sector for 7 years and our whole stack is built for dealerships.",
    pillars: [
      { icon: 'campaign', title: 'Motor Lead Management', desc: 'Our flagship service for automotive lead management.' },
      { icon: 'memory', title: 'Proprietary technology', desc: 'State-of-the-art platforms we built in-house.' },
      { icon: 'groups', title: 'Specialised team', desc: '50 agents trained in the automotive sector.' },
      { icon: 'insights', title: 'Live reporting', desc: 'Customisable reports by portal, source, channel, product and rep.' },
      { icon: 'price_check', title: 'Competitive proposal', desc: 'The most aggressive price in the sector with a pay-per-real-use model.' },
      { icon: 'verified', title: 'Consolidated portfolio', desc: '400+ clients and 2,000 dealerships back the service.' },
    ],
    channelsEyebrow: 'MULTI-CHANNEL TECHNOLOGY',
    channelsTitle: "We answer where your customer is",
    channelsLead: 'The most advanced technical solutions in the sector. Proprietary platforms to customise any service and grow with your operation.',
    channels: [
      { icon: 'call', title: 'Inbound and outbound calls', desc: 'We answer 100% of calls with cloud infrastructure and proprietary platforms.' },
      { icon: 'chat', title: 'WhatsApp Business API', desc: 'Unique on the market with proprietary development measuring channel conversion.' },
      { icon: 'mail', title: 'Emails & Click-to-Call', desc: 'We ingest contact forms from any web channel.' },
      { icon: 'forum', title: 'Chats and social media', desc: 'Immediate response to technical or sales questions on any channel.' },
    ],
    complianceTopline: 'COMPLIANCE AND CONVERSION',
    compliance: [
      'Call recording kept up to 5 years, GDPR-compliant',
      'Consent capture for later remarketing actions',
      'Stock published across every channel for pricing strategies and conversion to sale',
    ],
    teamEyebrow: 'MULTI-DISCIPLINARY TEAM',
    teamTitle: 'Complete customer service with guaranteed KPIs',
    teamLead: 'We handle your prospects and leads with a team specialised in automotive. We work Monday to Saturday non-stop, with optional weekend extension.',
    kpis: [
      { v: '>90 %', l: 'Inbound answer rate' },
      { v: '<10 min', l: 'Outbound contact time' },
      { v: '195,000', l: 'Calls/month handled' },
      { v: '100 %', l: 'Guaranteed answers' },
    ],
    teamStats: [
      { v: '50', l: 'AGENTS' },
      { v: '+400', l: 'CLIENTS', primary: true },
      { v: '7', l: 'YEARS OF EXPERIENCE' },
      { v: '2,000', l: 'DEALERSHIPS' },
    ],
    servicesEyebrow: 'WHAT WE DO FOR YOU',
    servicesTitle: 'From lead capture to after-sales',
    servicesLead: 'A complete service flow: we qualify, filter, dispatch fairly across your reps and report every interaction.',
    services: [
      { icon: 'phone_callback', title: 'Inbound and outbound', desc: 'Contact qualification + GDPR from minute one.' },
      { icon: 'thermostat', title: 'Temperature qualification', desc: 'Lead filtering by real purchase intent.' },
      { icon: 'event_available', title: 'Test-drive and workshop appointments', desc: 'Appointment management and attendance confirmation.' },
      { icon: 'support', title: 'After-sales and management', desc: 'We accompany the customer after delivery.' },
      { icon: 'inbox', title: 'Back office and CRM', desc: 'Email handling, database clean-up and mystery calls.' },
      { icon: 'language', title: 'Multilingual service', desc: 'Spanish, English, French, Catalan and Portuguese.' },
    ],
    reportingEyebrow: 'LIVE REPORTING',
    reportingTitle: 'Information systems that actually move the needle',
    reportingLead: 'Access to a dedicated manager with control metrics and detailed reports of all activity. You always know what leads you have, where they come from and what each rep is doing with them.',
    reportingPoints: [
      'Complete contact log highlighting the hottest leads',
      'Access to a dedicated account manager with every control metric',
      'Nurturing follow-up strategies on your prospects',
      'Unlimited access to all your customer recordings',
      'Reports by portal, source, channel, product, department and rep',
      'Fair-dispatch view between used and new vehicle reps',
    ],
    derivationStats: [
      { v: '37 %', l: 'Transferred live' },
      { v: '35 %', l: 'Not transferred' },
      { v: '18 %', l: 'Other states' },
      { v: '10 %', l: 'Dispatched via email' },
    ],
    derivationExampleTopline: 'REAL MANAGEMENT EXAMPLE',
    derivationExample: '164 leads managed in a month for a dealership group, fair-dispatched across 5 reps.',
    ctaTitle: 'Ready to outsource your customer service?',
    ctaLead: 'Tell us how many leads you receive per month and we’ll show a real dashboard from a group your size. In 30 minutes you know the cost and estimated ROI.',
    ctaButton: 'Request a personalised demo',
  },
  zh: {
    badge: 'CONTACT CENTER · MOTORFLASH SOLUTIONS',
    title1: '无法度量,就 ',
    titleAccent: '无法改进',
    heroLead: '专属汽车行业的 Contact Center 服务。我们以自有平台、专业团队与实时报告,在所有渠道(语音、WhatsApp、邮件、聊天、社交)接待 100% 的潜客。',
    ctaDemo: '申请演示',
    ctaPricing: '在 /precios 查看价格',
    pillarsEyebrow: '汽车行业专属服务',
    pillarsTitle: '我们与众不同的 6 个理由',
    pillarsLead: '我们并非通用型 Contact Center。我们已深耕汽车行业 7 年,整套技术栈为经销商而生。',
    pillars: [
      { icon: 'campaign', title: 'Motor Lead Management', desc: '我们旗舰的汽车潜客管理服务。' },
      { icon: 'memory', title: '自有技术', desc: '由我们自研的最新平台。' },
      { icon: 'groups', title: '专业团队', desc: '50 位面向汽车行业受训的坐席。' },
      { icon: 'insights', title: '实时报告', desc: '按门户、来源、渠道、产品与销售可定制的报告。' },
      { icon: 'price_check', title: '高性价比方案', desc: '行业最具竞争力的价格,按实际使用计费。' },
      { icon: 'verified', title: '稳固的客户群', desc: '400+ 客户和 2,000 家经销商支持此服务。' },
    ],
    channelsEyebrow: '多渠道技术',
    channelsTitle: '在客户所在的地方提供服务',
    channelsLead: '行业最先进的技术方案。自有平台可定制任意服务并伴随您的业务成长。',
    channels: [
      { icon: 'call', title: '呼入与呼出', desc: '通过云端基础设施与自有平台接听 100% 的来电。' },
      { icon: 'chat', title: 'WhatsApp Business API', desc: '业内独家自研开发,衡量首屈一指渠道的转化。' },
      { icon: 'mail', title: '邮件与 Click-to-Call', desc: '接入任何 Web 渠道的联系表单。' },
      { icon: 'forum', title: '聊天与社交', desc: '在任意渠道即时响应技术或商务咨询。' },
    ],
    complianceTopline: '合规与转化',
    compliance: [
      '所有通话录音保留 5 年,符合 GDPR',
      '为后续再营销采集授权',
      '在所有渠道发布库存,用于定价策略与成交转化',
    ],
    teamEyebrow: '多学科团队',
    teamTitle: '完整的客户服务与可保证的 KPI',
    teamLead: '我们由专注汽车行业的团队为您管理潜客。周一至周六全天候服务,可扩展至周末。',
    kpis: [
      { v: '>90 %', l: '呼入接听率' },
      { v: '<10 分钟', l: '呼出联系时间' },
      { v: '195,000', l: '每月接听通话数' },
      { v: '100 %', l: '保证答复' },
    ],
    teamStats: [
      { v: '50', l: '坐席' },
      { v: '+400', l: '客户', primary: true },
      { v: '7', l: '年经验' },
      { v: '2,000', l: '经销商' },
    ],
    servicesEyebrow: '我们为您做什么',
    servicesTitle: '从潜客获取到售后',
    servicesLead: '完整的服务链路:筛选、过滤、在销售团队间均匀分派,并报告每次互动。',
    services: [
      { icon: 'phone_callback', title: '呼入与呼出', desc: '从第一分钟起即筛选并合规 GDPR。' },
      { icon: 'thermostat', title: '热度筛选', desc: '按真实购买意向过滤潜客。' },
      { icon: 'event_available', title: '试驾与维修预约', desc: '预约管理与到店确认。' },
      { icon: 'support', title: '售后与管理', desc: '在交车后陪伴客户。' },
      { icon: 'inbox', title: '后台与 CRM', desc: '邮件处理、数据库清洗与神秘来电。' },
      { icon: 'language', title: '多语种服务', desc: '西班牙语、英语、法语、加泰罗尼亚语与葡萄牙语。' },
    ],
    reportingEyebrow: '实时报告',
    reportingTitle: '真正驱动业绩的信息系统',
    reportingLead: '专属客户经理 + 全活动控制指标与详尽报告。您随时掌握有哪些潜客、来自何处以及每位销售的处理状况。',
    reportingPoints: [
      '完整联系记录并突出最热门潜客',
      '专属客户经理与全部控制指标',
      '对潜客进行 Nurturing 跟进策略',
      '无限制访问您客户的所有录音',
      '按门户、来源、渠道、产品、部门与销售的报告',
      '在新车与二手车销售之间均衡分派的视图',
    ],
    derivationStats: [
      { v: '37 %', l: '在线转接' },
      { v: '35 %', l: '未转接' },
      { v: '18 %', l: '其他状态' },
      { v: '10 %', l: '邮件分派' },
    ],
    derivationExampleTopline: '真实管理示例',
    derivationExample: '一个月内为一个经销商集团管理 164 条潜客,在 5 位销售之间均衡分派。',
    ctaTitle: '准备好将客户服务外包了吗?',
    ctaLead: '告诉我们您每月接收多少潜客,我们以与您规模相当的集团展示真实仪表板。30 分钟内您就能了解成本与预估 ROI。',
    ctaButton: '申请定制演示',
  },
}

export async function ContactCenter() {
  const productSlug = 'contact-center'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 70% 100%, rgba(255,128,0,0.10), transparent 60%)' }} />
        <div className="relative z-10 mf-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">{t.badge}</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              {t.title1}<span className="text-primary">{t.titleAccent}</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl">{t.heroLead}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">{t.ctaDemo}</Link>
              <Link href={`/precios#${productSlug}`} className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">{t.ctaPricing}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.pillarsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.pillarsTitle}</h2>
            <p className="text-on-surface-variant">{t.pillarsLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.pillars.map((p) => (
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

      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.channelsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.channelsTitle}</h2>
            <p className="text-on-surface-variant">{t.channelsLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.channels.map((c) => (
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
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t.complianceTopline}</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.compliance.map((c) => (
                <li key={c} className="flex gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 22 }}>check_circle</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.teamEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.teamTitle}</h2>
              <p className="text-on-surface-variant mb-6">{t.teamLead}</p>
              <ul className="space-y-3">
                {t.kpis.map((k) => (
                  <li key={k.l} className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-primary tabular-nums whitespace-nowrap">{k.v}</span>
                    <span className="text-sm text-on-surface-variant">{k.l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.teamStats.map((s) => (
                <div key={s.l} className={`rounded-2xl p-6 text-center border ${s.primary ? 'bg-primary text-white border-primary' : 'bg-white border-outline-variant'}`}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">{s.v}</div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${s.primary ? 'opacity-90' : 'text-on-surface-variant'}`}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.servicesEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.servicesTitle}</h2>
            <p className="text-on-surface-variant">{t.servicesLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map((s) => (
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

      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.reportingEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.reportingTitle}</h2>
              <p className="text-on-surface-variant mb-6">{t.reportingLead}</p>
              <ul className="space-y-3">
                {t.reportingPoints.map((r) => (
                  <li key={r} className="flex gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 22 }}>insights</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.derivationStats.map((s) => (
                <div key={s.l} className="bg-white border border-outline-variant rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tabular-nums">{s.v}</div>
                  <div className="text-xs font-medium text-on-surface-variant uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
              <div className="col-span-2 bg-primary text-white rounded-2xl p-5 text-center">
                <p className="text-xs uppercase tracking-widest font-bold opacity-90 mb-1">{t.derivationExampleTopline}</p>
                <p className="text-sm">{t.derivationExample}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-on-surface-variant mb-8">{t.ctaLead}</p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">{t.ctaButton}</Link>
        </div>
      </section>
    </div>
  )
}
