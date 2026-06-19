import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'en' | 'zh'

interface IaCopy {
  badge: string
  title1: string
  titleAccent: string
  title3: string
  heroLead: string
  ctaDemo: string
  ctaPricing: string
  ecoEyebrow: string
  ecoTitle: string
  ecoLead: string
  processesTitle: string
  channelsTitle: string
  aiTitle: string
  integratorTopline: string
  integratorTitle: string
  integratorSubline: string
  systemsTitle: string
  processes: string[]
  channels: { icon: string; label: string }[]
  foundation: { icon: string; label: string }[]
  systems: string[]
  productsEyebrow: string
  productsTitle: string
  productsLead: string
  products: { key: string; name: string; icon: string; tagline: string; flow: string[]; bullets: string[] }[]
  productCta: string
  flowLabel: string
  qualityEyebrow: string
  qualityTitle: string
  qualityLead: string
  quality: { icon: string; title: string; desc: string }[]
  alertsTitle: string
  alertsLead: string
  alerts: string[]
  ctaTitle: string
  ctaLead: string
  ctaButton: string
}

const COPY: Record<LocaleKey, IaCopy> = {
  es: {
    badge: 'SOLUCIONES IA APLICADAS · MOTORFLASH SOLUTIONS',
    title1: 'Tres asistentes IA y un sistema de calidad que ',
    titleAccent: 'atienden, califican y miden',
    title3: ' cada conversación.',
    heroLead: 'WhatsApp IA, WebChat IA y Voz IA conversan con tus clientes 24/7 en su canal preferido. Quality Monitoring transcribe, analiza y puntúa todas las llamadas de tu equipo. Todo integrado con tu DMS, CRM, Dealer, Multipublicador, Contact Center y webs.',
    ctaDemo: 'Solicitar Demo',
    ctaPricing: 'Ver tarifas en /precios',
    ecoEyebrow: 'ECOSISTEMA IA MOTORFLASH',
    ecoTitle: 'Un solo integrador entre tus procesos, tus canales y la IA',
    ecoLead: 'Actuamos como Integrador / Consultor / Arquitecto de IA: enchufamos los modelos al canal correcto y al sistema correcto, para que cada conversación acabe en el CRM con todo el contexto.',
    processesTitle: 'Procesos de negocio',
    channelsTitle: 'Canales',
    aiTitle: 'Inteligencia Artificial',
    integratorTopline: 'EL INTEGRADOR',
    integratorTitle: 'Motorflash Solutions · Consultor y arquitecto de IA',
    integratorSubline: 'Voz IA · WhatsApp IA · WebChat IA · Copilot · Quality Monitoring · Asistente de contenidos web',
    systemsTitle: 'Sistemas de gestión',
    processes: ['Vehículos Nuevos', 'Vehículos Ocasión', 'Postventa', 'Taller', 'Renting', 'Alquiler'],
    channels: [
      { icon: 'call', label: 'Llamada' },
      { icon: 'chat', label: 'WhatsApp' },
      { icon: 'mail', label: 'Email' },
    ],
    foundation: [
      { icon: 'graphic_eq', label: 'Síntesis de voz' },
      { icon: 'auto_awesome', label: 'OpenAI' },
      { icon: 'flare', label: 'Gemini' },
      { icon: 'psychology_alt', label: 'Anthropic' },
    ],
    systems: ['DMS', 'CRM4YOU', 'Dealer', 'Multipublicador', 'Contact Center', 'Webs', 'Integraciones API'],
    productsEyebrow: '3 ASISTENTES IA',
    productsTitle: 'WhatsApp, WebChat y Voz — el cliente elige el canal',
    productsLead: 'Mismo cerebro IA, distintos canales. Funcionan por separado o como un único asistente que pasa el contexto entre ellos.',
    products: [
      { key: 'whatsapp', name: 'WhatsApp IA', icon: 'chat', tagline: 'IA conversacional sobre el canal que tus clientes ya usan', flow: ['Cliente escribe', 'IA responde', 'Cita o seguimiento'], bullets: ['Canal directo y familiar: el cliente ya usa WhatsApp, sin barreras ni descargas.', 'Conversación libre, natural y disponible 24/7: la IA responde sin depender de agentes.', 'Personalización real: recuerda el contexto, aprende de cada conversación y se adapta.', 'Más conversión: mejora la experiencia y aumenta la probabilidad de venta.'] },
      { key: 'webchat', name: 'WebChat IA', icon: 'forum', tagline: 'Capta y conversa con el usuario mientras navega tu web', flow: ['Usuario entra', 'Clic en botón', 'Formulario / cita'], bullets: ['Integrado en la web: capta al usuario mientras navega.', 'Texto y voz en un solo canal: interacción escrita o hablada según prefiera el usuario.', 'Interacción natural: el chat se adapta a cada usuario, no al revés.', 'Integrable con otros sistemas: permite consultar y gestionar datos externos.'] },
      { key: 'voz', name: 'Voz IA', icon: 'record_voice_over', tagline: 'Asistente telefónico inteligente que coge tus llamadas', flow: ['Cliente llama', 'IA responde', 'Agenda cita y envía a CRM'], bullets: ['Asistente de voz inteligente que coge la llamada sin esperas.', 'Comunicación inmediata: el cliente llama y recibe atención personalizada.', 'Ideal para concertar citas, resolver dudas rápidas o completar procesos iniciados por chat.', 'Integra análisis, transcripción y puntuación automática para mejorar atención y venta.'] },
    ],
    productCta: 'Pruébame',
    flowLabel: 'FLUJO',
    qualityEyebrow: 'QUALITY',
    qualityTitle: 'Quality Monitoring: cada llamada se mide',
    qualityLead: 'Lo que tu mejor responsable comercial haría si pudiera escuchar todas las llamadas. Transcribe, analiza, categoriza y puntúa de forma automática para que sepas qué funciona y qué hay que entrenar.',
    quality: [
      { icon: 'transcribe', title: 'Transcripción de todas las llamadas', desc: 'Cada llamada de tus asesores se transcribe automáticamente y queda disponible para revisión y análisis.' },
      { icon: 'insights', title: 'Análisis de puntos clave', desc: 'Detección automática de saludos, identificación del cliente, oferta presentada, objeciones y cierre.' },
      { icon: 'category', title: 'Categorización por interés', desc: 'Cada conversación se etiqueta por el grado de interés real del cliente — caliente, templado o frío.' },
      { icon: 'star_rate', title: 'Puntuación automática', desc: 'Cada llamada recibe un score basado en KPIs comerciales para mejorar la atención y la venta.' },
    ],
    alertsTitle: 'Alertas a partir de eventos o sobre los datos',
    alertsLead: 'Recibe avisos en el momento en que algo importante ocurre o cuando se cumplen condiciones sobre tus métricas. Sin tener que entrar al panel a buscarlas.',
    alerts: ['Llamada con cliente con scoring alto sin seguimiento', 'Agente con tasa de transferencia por debajo del KPI', 'WhatsApp sin responder más de N minutos en horario', 'Pico de leads que supera la capacidad del equipo'],
    ctaTitle: '¿Quieres ver un ejemplo real de tu negocio?',
    ctaLead: 'En la demo te mostramos un caso con tu propio nicho (VN, VO, taller, renting…) y enchufamos uno de los asistentes a una llamada o un WhatsApp en vivo. Decide tú si el cliente final hablaría con esa IA.',
    ctaButton: 'Solicitar Demo Personalizada',
  },
  en: {
    badge: 'APPLIED AI SOLUTIONS · MOTORFLASH SOLUTIONS',
    title1: 'Three AI assistants and a quality system that ',
    titleAccent: 'handle, qualify and measure',
    title3: ' every conversation.',
    heroLead: 'WhatsApp AI, WebChat AI and Voice AI talk to your customers 24/7 on their preferred channel. Quality Monitoring transcribes, analyses and scores every call. All integrated with your DMS, CRM, Dealer, Multipublisher, Contact Center and websites.',
    ctaDemo: 'Request a demo',
    ctaPricing: 'See pricing in /precios',
    ecoEyebrow: 'MOTORFLASH AI ECOSYSTEM',
    ecoTitle: 'One integrator between your processes, channels and AI',
    ecoLead: 'We act as Integrator / Consultant / AI Architect: we plug the models into the right channel and the right system, so every conversation ends up in the CRM with full context.',
    processesTitle: 'Business processes',
    channelsTitle: 'Channels',
    aiTitle: 'Artificial Intelligence',
    integratorTopline: 'THE INTEGRATOR',
    integratorTitle: 'Motorflash Solutions · AI consultant and architect',
    integratorSubline: 'Voice AI · WhatsApp AI · WebChat AI · Copilot · Quality Monitoring · Web content assistant',
    systemsTitle: 'Management systems',
    processes: ['New vehicles', 'Used vehicles', 'After-sales', 'Workshop', 'Leasing', 'Rental'],
    channels: [
      { icon: 'call', label: 'Call' },
      { icon: 'chat', label: 'WhatsApp' },
      { icon: 'mail', label: 'Email' },
    ],
    foundation: [
      { icon: 'graphic_eq', label: 'Speech synthesis' },
      { icon: 'auto_awesome', label: 'OpenAI' },
      { icon: 'flare', label: 'Gemini' },
      { icon: 'psychology_alt', label: 'Anthropic' },
    ],
    systems: ['DMS', 'CRM4YOU', 'Dealer', 'Multipublisher', 'Contact Center', 'Websites', 'API integrations'],
    productsEyebrow: '3 AI ASSISTANTS',
    productsTitle: 'WhatsApp, WebChat and Voice — the customer picks the channel',
    productsLead: 'Same AI brain, different channels. They work standalone or as a single assistant passing context between them.',
    products: [
      { key: 'whatsapp', name: 'WhatsApp AI', icon: 'chat', tagline: 'Conversational AI on the channel your customers already use', flow: ['Customer writes', 'AI replies', 'Appointment or follow-up'], bullets: ['Direct, familiar channel: the customer already uses WhatsApp, no friction.', 'Free, natural, 24/7 conversation: AI answers without depending on agents.', 'Real personalisation: remembers context, learns and adapts.', 'Higher conversion: better experience, higher sale probability.'] },
      { key: 'webchat', name: 'WebChat AI', icon: 'forum', tagline: 'Engage and converse with the user while they browse', flow: ['User enters', 'Clicks the button', 'Form / appointment'], bullets: ['Embedded in the website: engages the user as they browse.', 'Text and voice in one channel: written or spoken, as the user prefers.', 'Natural interaction: the chat adapts to the user, not the other way around.', 'Integrable with other systems: query and manage external data.'] },
      { key: 'voz', name: 'Voice AI', icon: 'record_voice_over', tagline: 'Smart phone assistant that picks up your calls', flow: ['Customer calls', 'AI answers', 'Books appointment, sends to CRM'], bullets: ['Smart voice assistant that picks up the call with no waiting.', 'Immediate communication: the customer calls and receives personalised service.', 'Ideal for booking visits, quick answers or completing processes started in chat.', 'Includes analytics, transcription and auto-scoring to improve service and sales.'] },
    ],
    productCta: 'Try it',
    flowLabel: 'FLOW',
    qualityEyebrow: 'QUALITY',
    qualityTitle: 'Quality Monitoring: every call is measured',
    qualityLead: 'What your best sales manager would do if they could listen to every call. It transcribes, analyses, categorises and scores automatically so you know what works and what needs training.',
    quality: [
      { icon: 'transcribe', title: 'Transcribe every call', desc: 'Every advisor call is auto-transcribed and available for review and analysis.' },
      { icon: 'insights', title: 'Key-point analysis', desc: 'Auto-detection of greetings, customer ID, offer presented, objections and closing.' },
      { icon: 'category', title: 'Interest categorisation', desc: 'Every conversation tagged by real customer interest — hot, warm or cold.' },
      { icon: 'star_rate', title: 'Automatic scoring', desc: 'Every call scored by commercial KPIs to improve service and sales.' },
    ],
    alertsTitle: 'Alerts on events or on the data',
    alertsLead: 'Get notified the moment something important happens or when conditions on your metrics are met. No need to go check the panel.',
    alerts: ['High-scoring customer call with no follow-up', 'Agent with transfer rate below the KPI', 'WhatsApp unanswered for more than N minutes in business hours', 'Lead spike exceeding team capacity'],
    ctaTitle: 'Want to see a real example for your business?',
    ctaLead: 'In the demo we show a case in your own niche (new, used, workshop, leasing…) and plug one of the assistants into a live call or WhatsApp. You decide whether the end customer would talk to that AI.',
    ctaButton: 'Request a personalised demo',
  },
  zh: {
    badge: '应用 AI 解决方案 · MOTORFLASH SOLUTIONS',
    title1: '三个 AI 助手与一套质量系统,',
    titleAccent: '接待、筛选并衡量',
    title3: ' 每一段对话。',
    heroLead: 'WhatsApp AI、WebChat AI 与 Voice AI 在客户偏好的渠道上 7×24 小时对话。Quality Monitoring 转写、分析并打分每一通电话。全部与您的 DMS、CRM、Dealer、Multipublisher、Contact Center 与网站集成。',
    ctaDemo: '申请演示',
    ctaPricing: '在 /precios 查看价格',
    ecoEyebrow: 'MOTORFLASH AI 生态',
    ecoTitle: '在您的流程、渠道与 AI 之间的唯一集成方',
    ecoLead: '我们扮演集成方/顾问/AI 架构师:将模型接入正确的渠道与正确的系统,使每段对话最终都进入 CRM,且携带完整上下文。',
    processesTitle: '业务流程',
    channelsTitle: '渠道',
    aiTitle: '人工智能',
    integratorTopline: '集成方',
    integratorTitle: 'Motorflash Solutions · AI 顾问与架构师',
    integratorSubline: 'Voice AI · WhatsApp AI · WebChat AI · 副驾 · Quality Monitoring · 网站内容助手',
    systemsTitle: '管理系统',
    processes: ['新车', '二手车', '售后', '车间', '租赁', '出租'],
    channels: [
      { icon: 'call', label: '通话' },
      { icon: 'chat', label: 'WhatsApp' },
      { icon: 'mail', label: '邮件' },
    ],
    foundation: [
      { icon: 'graphic_eq', label: '语音合成' },
      { icon: 'auto_awesome', label: 'OpenAI' },
      { icon: 'flare', label: 'Gemini' },
      { icon: 'psychology_alt', label: 'Anthropic' },
    ],
    systems: ['DMS', 'CRM4YOU', 'Dealer', 'Multipublisher', 'Contact Center', '网站', 'API 集成'],
    productsEyebrow: '3 个 AI 助手',
    productsTitle: 'WhatsApp、WebChat 与 Voice —— 客户自选渠道',
    productsLead: '同一个 AI 大脑,不同渠道。可独立运行,亦可作为一个助手在渠道间传递上下文。',
    products: [
      { key: 'whatsapp', name: 'WhatsApp AI', icon: 'chat', tagline: '在客户已使用的渠道上的对话式 AI', flow: ['客户写信', 'AI 回复', '预约或跟进'], bullets: ['直接而熟悉的渠道:客户已经在用 WhatsApp,无门槛、无下载。', '7×24 自然、自由的对话:AI 无需依赖人工坐席即可回复。', '真实的个性化:记住上下文、从每段对话中学习与适应。', '更高转化:体验更好,成交概率提高。'] },
      { key: 'webchat', name: 'WebChat AI', icon: 'forum', tagline: '用户浏览您的网站时即获客并对话', flow: ['用户进入', '点击按钮', '表单 / 预约'], bullets: ['嵌入网站:用户浏览时即与之互动。', '文字与语音同一渠道:由用户自选。', '自然互动:聊天适应每位用户,而非反之。', '可与其他系统集成:查询并管理外部数据。'] },
      { key: 'voz', name: 'Voice AI', icon: 'record_voice_over', tagline: '智能电话助手接听您的来电', flow: ['客户来电', 'AI 接听', '预约后送至 CRM'], bullets: ['零等待接听的智能语音助手。', '即时沟通:客户拨打即获得个性化服务。', '适合预约、解答简单问题或完成由聊天发起的流程。', '集成分析、转写与自动打分,提升服务与销售。'] },
    ],
    productCta: '试一试',
    flowLabel: '流程',
    qualityEyebrow: 'QUALITY',
    qualityTitle: 'Quality Monitoring:每通电话皆可衡量',
    qualityLead: '相当于您最优秀的销售经理可以听取每一通电话。自动转写、分析、分类与打分,让您知道什么有效、哪里需要训练。',
    quality: [
      { icon: 'transcribe', title: '转写所有通话', desc: '每位顾问的通话自动转写,随时可供回顾与分析。' },
      { icon: 'insights', title: '关键节点分析', desc: '自动识别问候、客户身份、所提报价、异议与成交。' },
      { icon: 'category', title: '按兴趣分类', desc: '每段对话按客户真实兴趣打标 —— 热、温或冷。' },
      { icon: 'star_rate', title: '自动打分', desc: '每通电话基于业务 KPI 打分,助力提升服务与销售。' },
    ],
    alertsTitle: '基于事件或数据的告警',
    alertsLead: '在重要事件发生或您的指标命中条件时即时收到通知,无需登录面板自行查找。',
    alerts: ['高分客户通话却无跟进', '某坐席转接率低于 KPI', 'WhatsApp 在工作时段超过 N 分钟未回复', '潜客高峰超出团队负荷'],
    ctaTitle: '想看您业务的真实示例吗?',
    ctaLead: '演示中,我们以您所在的细分(新车、二手、车间、租赁……)展示真实案例,并把其中一个助手接入一次真实的通话或 WhatsApp。您来判断最终客户是否愿意与该 AI 对话。',
    ctaButton: '申请定制演示',
  },
}

export async function Ia() {
  const productSlug = 'ia'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 80% 100%, rgba(255,128,0,0.12), transparent 60%)' }} />
        <div className="relative z-10 mf-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">{t.badge}</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              {t.title1}<span className="text-primary">{t.titleAccent}</span>{t.title3}
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl">{t.heroLead}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">{t.ctaDemo}</Link>
              <Link href={`/precios#${productSlug}`} className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">{t.ctaPricing}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.ecoEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.ecoTitle}</h2>
            <p className="text-on-surface-variant">{t.ecoLead}</p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            <Stack title={t.processesTitle} items={t.processes.map((label) => ({ label }))} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Stack title={t.channelsTitle} items={t.channels.map((c) => ({ icon: c.icon, label: c.label }))} />
              <Stack title={t.aiTitle} items={t.foundation.map((f) => ({ icon: f.icon, label: f.label }))} />
            </div>
            <div className="bg-primary text-white rounded-2xl p-6 text-center">
              <p className="text-xs uppercase tracking-widest font-bold opacity-90 mb-1">{t.integratorTopline}</p>
              <p className="text-lg font-semibold">{t.integratorTitle}</p>
              <p className="text-xs opacity-80 mt-1">{t.integratorSubline}</p>
            </div>
            <Stack title={t.systemsTitle} items={t.systems.map((label) => ({ label }))} />
          </div>
        </div>
      </section>

      {/* 3 productos */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.productsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.productsTitle}</h2>
            <p className="text-on-surface-variant">{t.productsLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.products.map((p) => (
              <div key={p.key} className="bg-surface-container-low border border-outline-variant rounded-3xl p-7 flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-on-surface-variant mb-5">{p.tagline}</p>

                <div className="bg-white border border-outline-variant rounded-xl p-3 mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">{t.flowLabel}</p>
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
                  {t.productCta}
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.qualityEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.qualityTitle}</h2>
            <p className="text-on-surface-variant">{t.qualityLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.quality.map((q) => (
              <div key={q.title} className="bg-white border border-outline-variant rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{q.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{q.title}</h3>
                <p className="text-sm text-on-surface-variant leading-snug">{q.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl mx-auto bg-white border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">notifications_active</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t.alertsTitle}</h3>
                <p className="text-sm text-on-surface-variant mb-3">{t.alertsLead}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {t.alerts.map((a) => (
                    <li key={a} className="flex gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }}>bolt</span>
                      <span>{a}</span>
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
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-on-surface-variant mb-8">{t.ctaLead}</p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">{t.ctaButton}</Link>
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
