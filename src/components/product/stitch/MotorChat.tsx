import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

interface StatPill { v: string; l: string }
interface Portal { key: string; name: string; letter: string; bg: string; text: string }
interface SampleLead {
  name: string
  ts: string
  vehicle: string
  price: string
  statusLabel: string
  statusTone: 'hot' | 'warm' | 'cold'
  source: string
  urgencyLabel: string
  urgencyTone: 'red' | 'orange' | 'muted'
  initials: string
  initialsBg: string
}
interface ChatBubble { from: 'user' | 'agent'; text: string }
interface Feature { icon: string; title: string; desc: string }
interface TimelineStep { title: string; desc: string }

interface McCopy {
  // Hero
  badge: string
  title1: string
  titleAccent: string
  title3: string
  heroLead: string
  ctaDemo: string
  ctaHow: string
  heroStats: StatPill[]
  connectedLabel: string
  portals: Portal[]

  // Mockup section
  mockEyebrow: string
  mockTitle1: string
  mockTitle2: string
  mockLead: string
  mockLeadsTitle: string
  mockLeadsCount: string
  mockFilterAll: string
  mockFilterPending: string
  mockFilterHot: string
  mockFilterSearch: string
  sampleLeads: SampleLead[]
  mockPhone: string
  mockVehicleName: string
  mockVehiclePrice: string
  mockVehicleDelta: string
  mockViewOn: string
  mockChatCaliente: string
  mockTabChat: string
  mockTabCall: string
  mockTabWA: string
  mockTabNotes: string
  mockChatDayLabel: string
  mockBubbles: ChatBubble[]
  mockAiPrefix: string
  mockAiSuggestion: string
  mockAiUse: string
  mockInputPlaceholder: string

  // Features
  featuresEyebrow: string
  featuresTitle1: string
  featuresTitle2: string
  featuresLead: string
  features: Feature[]

  // Timeline
  timelineEyebrow: string
  timelineTitle1: string
  timelineTitle2: string
  timelineLead: string
  timelineSteps: TimelineStep[]

  // Stats
  statsBig: StatPill[]

  // CTA
  ctaTitle1: string
  ctaTitle2: string
  ctaLead: string
  ctaButton: string
}

const PORTALS_BASE: Portal[] = [
  { key: 'cochesnet', name: 'Coches.net', letter: 'C', bg: '#0f172a', text: '#ffffff' },
  { key: 'wallapop', name: 'Wallapop', letter: 'W', bg: '#13c1ac', text: '#ffffff' },
  { key: 'milanuncios', name: 'Milanuncios', letter: 'M', bg: '#e11d1d', text: '#ffffff' },
]

const SAMPLE_LEADS_BASE = {
  es: [
    { name: 'Carlos Ruiz', ts: '10:24', vehicle: 'BMW Serie 3 320d', price: '24.900 €', statusLabel: 'Caliente', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: '12 min sin responder', urgencyTone: 'red' as const, initials: 'CR', initialsBg: '#dc2626' },
    { name: 'Marta Gil', ts: '10:08', vehicle: 'Audi A4 Avant', price: '28.500 €', statusLabel: 'Templado', statusTone: 'warm' as const, source: 'Wallapop', urgencyLabel: '1 h sin responder', urgencyTone: 'orange' as const, initials: 'MG', initialsBg: '#f59e0b' },
    { name: 'David Sanz', ts: 'Ayer', vehicle: 'VW Tiguan 2.0 TDI', price: '21.900 €', statusLabel: 'Frío', statusTone: 'cold' as const, source: 'Milanuncios', urgencyLabel: '3 d sin responder', urgencyTone: 'muted' as const, initials: 'DS', initialsBg: '#3b82f6' },
    { name: 'Nuria Vega', ts: '09:40', vehicle: 'Mercedes GLC 300', price: '52.900 €', statusLabel: 'Caliente', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: 'Cita hoy 16:00', urgencyTone: 'red' as const, initials: 'NV', initialsBg: '#8b5cf6' },
  ],
  ca: [
    { name: 'Carles Roig', ts: '10:24', vehicle: 'BMW Serie 3 320d', price: '24.900 €', statusLabel: 'Calent', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: '12 min sense resposta', urgencyTone: 'red' as const, initials: 'CR', initialsBg: '#dc2626' },
    { name: 'Marta Gil', ts: '10:08', vehicle: 'Audi A4 Avant', price: '28.500 €', statusLabel: 'Temperat', statusTone: 'warm' as const, source: 'Wallapop', urgencyLabel: '1 h sense resposta', urgencyTone: 'orange' as const, initials: 'MG', initialsBg: '#f59e0b' },
    { name: 'David Sanz', ts: 'Ahir', vehicle: 'VW Tiguan 2.0 TDI', price: '21.900 €', statusLabel: 'Fred', statusTone: 'cold' as const, source: 'Milanuncios', urgencyLabel: '3 d sense resposta', urgencyTone: 'muted' as const, initials: 'DS', initialsBg: '#3b82f6' },
    { name: 'Núria Vega', ts: '09:40', vehicle: 'Mercedes GLC 300', price: '52.900 €', statusLabel: 'Calent', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: 'Cita avui 16:00', urgencyTone: 'red' as const, initials: 'NV', initialsBg: '#8b5cf6' },
  ],
  en: [
    { name: 'Carlos Ruiz', ts: '10:24', vehicle: 'BMW 3-Series 320d', price: '€24,900', statusLabel: 'Hot', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: '12 min unanswered', urgencyTone: 'red' as const, initials: 'CR', initialsBg: '#dc2626' },
    { name: 'Marta Gil', ts: '10:08', vehicle: 'Audi A4 Avant', price: '€28,500', statusLabel: 'Warm', statusTone: 'warm' as const, source: 'Wallapop', urgencyLabel: '1 h unanswered', urgencyTone: 'orange' as const, initials: 'MG', initialsBg: '#f59e0b' },
    { name: 'David Sanz', ts: 'Yesterday', vehicle: 'VW Tiguan 2.0 TDI', price: '€21,900', statusLabel: 'Cold', statusTone: 'cold' as const, source: 'Milanuncios', urgencyLabel: '3 d unanswered', urgencyTone: 'muted' as const, initials: 'DS', initialsBg: '#3b82f6' },
    { name: 'Nuria Vega', ts: '09:40', vehicle: 'Mercedes GLC 300', price: '€52,900', statusLabel: 'Hot', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: 'Today 16:00 appt.', urgencyTone: 'red' as const, initials: 'NV', initialsBg: '#8b5cf6' },
  ],
  zh: [
    { name: '卡洛斯', ts: '10:24', vehicle: 'BMW 3 系 320d', price: '24,900 €', statusLabel: '热', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: '12 分钟未回复', urgencyTone: 'red' as const, initials: 'CR', initialsBg: '#dc2626' },
    { name: '玛尔塔', ts: '10:08', vehicle: 'Audi A4 Avant', price: '28,500 €', statusLabel: '温', statusTone: 'warm' as const, source: 'Wallapop', urgencyLabel: '1 小时未回复', urgencyTone: 'orange' as const, initials: 'MG', initialsBg: '#f59e0b' },
    { name: '大卫', ts: '昨天', vehicle: 'VW Tiguan 2.0 TDI', price: '21,900 €', statusLabel: '冷', statusTone: 'cold' as const, source: 'Milanuncios', urgencyLabel: '3 天未回复', urgencyTone: 'muted' as const, initials: 'DS', initialsBg: '#3b82f6' },
    { name: '努丽亚', ts: '09:40', vehicle: 'Mercedes GLC 300', price: '52,900 €', statusLabel: '热', statusTone: 'hot' as const, source: 'Coches.net', urgencyLabel: '今日 16:00 预约', urgencyTone: 'red' as const, initials: 'NV', initialsBg: '#8b5cf6' },
  ],
}

const COPY: Record<LocaleKey, McCopy> = {
  es: {
    badge: 'EL AGENTE IA PARA TUS CHATS DE PORTALES',
    title1: 'Cero chats sin contestar.',
    titleAccent: 'Cero leads perdidos.',
    title3: '',
    heroLead: 'Motor-Chat responde por ti en Coches.net, Wallapop y Milanuncios — al instante, 24/7 — y entrega cada lead cualificado a tu CRM sin que tu equipo mueva un dedo.',
    ctaDemo: 'Solicitar demo',
    ctaHow: 'Ver cómo funciona',
    heroStats: [
      { v: '24/7', l: 'Sin descanso' },
      { v: '<5 s', l: 'Tiempo de respuesta' },
      { v: '3 portales', l: 'Coches.net · Wallapop · Milanuncios' },
      { v: 'CRM', l: 'Entrega directa' },
    ],
    connectedLabel: 'Conectado con',
    portals: PORTALS_BASE,

    mockEyebrow: 'MENSAJES Y LLAMADAS EN UN SOLO INBOX',
    mockTitle1: 'Todos tus chats de portales,',
    mockTitle2: 'en una sola bandeja.',
    mockLead: 'Responde antes que la competencia sin abrir un portal tras otro. Cada mensaje cae en una bandeja unificada — la IA opcional te sugiere la respuesta y asignas cada lead a su comercial. Nada se pierde entre portales.',
    mockLeadsTitle: 'Leads',
    mockLeadsCount: '318 este mes · 24 sin asignar',
    mockFilterAll: 'Todos',
    mockFilterPending: 'Sin responder',
    mockFilterHot: 'Calientes',
    mockFilterSearch: 'Buscar',
    sampleLeads: SAMPLE_LEADS_BASE.es,
    mockPhone: '+34 623 145 980',
    mockVehicleName: 'BMW Serie 3 320d',
    mockVehiclePrice: '24.900 €',
    mockVehicleDelta: '−600 €',
    mockViewOn: 'Ver en Coches.net',
    mockChatCaliente: 'Caliente',
    mockTabChat: 'Chat',
    mockTabCall: 'Llamada',
    mockTabWA: 'WhatsApp',
    mockTabNotes: 'Notas',
    mockChatDayLabel: 'Hoy',
    mockBubbles: [
      { from: 'user', text: 'Buenas, vi el BMW Serie 3 en Coches.net. ¿Sigue disponible?' },
      { from: 'agent', text: '¡Hola Carlos! Sí, sigue disponible. ¿Te viene bien verlo esta semana?' },
      { from: 'user', text: '¿Aceptáis parte de pago? Tengo un Golf de 2018.' },
    ],
    mockAiPrefix: 'IA',
    mockAiSuggestion: 'Sí, valoramos tu coche como parte de pago. ¿Qué modelo y año tiene?',
    mockAiUse: 'Usar',
    mockInputPlaceholder: 'Escribe tu respuesta…',

    featuresEyebrow: 'LO QUE HACE POR TI',
    featuresTitle1: 'Un solo agente.',
    featuresTitle2: 'Todos los portales, todo el día.',
    featuresLead: 'Motor-Chat unifica los canales, contesta al instante, cualifica al lead y lo entrega a tu CRM. Tu equipo deja de perseguir mensajes y se centra en cerrar.',
    features: [
      { icon: 'bolt', title: 'Responde en segundos', desc: 'Contesta al momento en que el cliente escribe. Sin abrir un portal tras otro y sin turnos ni horarios.' },
      { icon: 'inbox', title: 'Bandeja unificada', desc: 'Mensajes y llamadas de Coches.net, Wallapop y Milanuncios en una sola pantalla. Cero pestañas cruzadas.' },
      { icon: 'auto_awesome', title: 'IA que sugiere la respuesta', desc: 'La IA opcional lee el hilo y te propone la respuesta lista. Tú revisas, envías o dejas que responda por ti.' },
      { icon: 'contact_page', title: 'Cualifica y crea el lead', desc: 'Pide los datos clave (vehículo, intención, contacto) en una conversación natural y genera el lead completo.' },
      { icon: 'sync_alt', title: 'Entrega directa a tu CRM', desc: 'El lead cualificado entra en tu CRM listo para vender. Sin doble entrada, sin exportaciones manuales.' },
      { icon: 'analytics', title: 'Panel real de rendimiento', desc: 'Chats por portal, tiempo de respuesta y leads generados. Datos accionables, no vanidad.' },
    ],

    timelineEyebrow: 'DE CERO A CONTESTAR ESTA SEMANA',
    timelineTitle1: 'Sin migraciones eternas',
    timelineTitle2: 'ni semanas de formación.',
    timelineLead: 'Conectamos tus cuentas de portales y tu CRM en unas horas. Te acompañamos en cada paso.',
    timelineSteps: [
      { title: 'Contáctanos', desc: 'Cuéntanos con qué portales trabajas y qué CRM usas. Damos de alta tu cuenta en 24 h.' },
      { title: 'Conecta portales', desc: 'Enlazamos tus cuentas de Coches.net, Wallapop y Milanuncios con Motor-Chat de forma segura.' },
      { title: 'Configura la IA', desc: 'Ajustamos el tono, las respuestas base y los datos que quieres capturar de cada lead.' },
      { title: 'Vende', desc: 'Los leads cualificados entran en tu CRM y tu equipo se dedica a cerrar, no a perseguir mensajes.' },
    ],

    statsBig: [
      { v: '24/7', l: 'Atención sin descanso' },
      { v: '0', l: 'Chats sin responder' },
      { v: '×5', l: 'Más rápido que la media del sector' },
    ],

    ctaTitle1: 'Deja que Motor-Chat',
    ctaTitle2: 'conteste por ti.',
    ctaLead: 'Solicita una demo y te enseñamos cómo Motor-Chat responde tus chats de portales y llena tu CRM de leads desde el primer día.',
    ctaButton: 'Solicitar demo',
  },
  ca: {
    badge: "L'AGENT IA PER ALS TEUS XATS DE PORTALS",
    title1: 'Zero xats sense contestar.',
    titleAccent: 'Zero leads perduts.',
    title3: '',
    heroLead: "Motor-Chat respon per tu a Coches.net, Wallapop i Milanuncios — a l'instant, 24/7 — i entrega cada lead qualificat al teu CRM sense que el teu equip mogui un dit.",
    ctaDemo: 'Sol·licita demo',
    ctaHow: 'Veure com funciona',
    heroStats: [
      { v: '24/7', l: 'Sense descans' },
      { v: '<5 s', l: 'Temps de resposta' },
      { v: '3 portals', l: 'Coches.net · Wallapop · Milanuncios' },
      { v: 'CRM', l: 'Entrega directa' },
    ],
    connectedLabel: 'Connectat amb',
    portals: PORTALS_BASE,

    mockEyebrow: 'MISSATGES I TRUCADES EN UN SOL INBOX',
    mockTitle1: 'Tots els teus xats de portals,',
    mockTitle2: 'en una sola safata.',
    mockLead: "Respon abans que la competència sense obrir un portal darrere l'altre. Cada missatge cau en una safata unificada — la IA opcional et suggereix la resposta i assignes cada lead al seu comercial. Res no es perd entre portals.",
    mockLeadsTitle: 'Leads',
    mockLeadsCount: '318 aquest mes · 24 sense assignar',
    mockFilterAll: 'Tots',
    mockFilterPending: 'Sense resposta',
    mockFilterHot: 'Calents',
    mockFilterSearch: 'Cerca',
    sampleLeads: SAMPLE_LEADS_BASE.ca,
    mockPhone: '+34 623 145 980',
    mockVehicleName: 'BMW Serie 3 320d',
    mockVehiclePrice: '24.900 €',
    mockVehicleDelta: '−600 €',
    mockViewOn: 'Veure a Coches.net',
    mockChatCaliente: 'Calent',
    mockTabChat: 'Xat',
    mockTabCall: 'Trucada',
    mockTabWA: 'WhatsApp',
    mockTabNotes: 'Notes',
    mockChatDayLabel: 'Avui',
    mockBubbles: [
      { from: 'user', text: 'Hola, vaig veure el BMW Serie 3 a Coches.net. Segueix disponible?' },
      { from: 'agent', text: 'Hola Carles! Sí, encara està disponible. Et va bé veure-ho aquesta setmana?' },
      { from: 'user', text: 'Accepteu part de pagament? Tinc un Golf del 2018.' },
    ],
    mockAiPrefix: 'IA',
    mockAiSuggestion: 'Sí, valorem el teu cotxe com a part de pagament. Quin model i any té?',
    mockAiUse: 'Utilitza',
    mockInputPlaceholder: 'Escriu la teva resposta…',

    featuresEyebrow: 'QUÈ FA PER TU',
    featuresTitle1: 'Un sol agent.',
    featuresTitle2: 'Tots els portals, tot el dia.',
    featuresLead: 'Motor-Chat unifica els canals, contesta a l\'instant, qualifica el lead i el lliura al teu CRM. El teu equip deixa de perseguir missatges i se centra a tancar.',
    features: [
      { icon: 'bolt', title: 'Respon en segons', desc: 'Contesta al moment que el client escriu. Sense obrir un portal darrere l\'altre i sense torns ni horaris.' },
      { icon: 'inbox', title: 'Safata unificada', desc: 'Missatges i trucades de Coches.net, Wallapop i Milanuncios en una sola pantalla. Zero pestanyes creuades.' },
      { icon: 'auto_awesome', title: 'IA que suggereix la resposta', desc: 'La IA opcional llegeix el fil i et proposa la resposta preparada. Tu revises, envies o deixes que respongui per tu.' },
      { icon: 'contact_page', title: 'Qualifica i crea el lead', desc: 'Demana les dades clau (vehicle, intenció, contacte) en una conversa natural i genera el lead complet.' },
      { icon: 'sync_alt', title: 'Entrega directa al teu CRM', desc: 'El lead qualificat entra al teu CRM llest per vendre. Sense doble entrada, sense exportacions manuals.' },
      { icon: 'analytics', title: 'Panell real de rendiment', desc: 'Xats per portal, temps de resposta i leads generats. Dades accionables, no vanitat.' },
    ],

    timelineEyebrow: 'DE ZERO A CONTESTAR AQUESTA SETMANA',
    timelineTitle1: 'Sense migracions eternes',
    timelineTitle2: 'ni setmanes de formació.',
    timelineLead: 'Connectem els teus comptes de portals i el teu CRM en unes hores. T\'acompanyem a cada pas.',
    timelineSteps: [
      { title: 'Contacta\'ns', desc: 'Explica\'ns amb quins portals treballes i quin CRM utilitzes. Donem d\'alta el teu compte en 24 h.' },
      { title: 'Connecta portals', desc: 'Enllacem els teus comptes de Coches.net, Wallapop i Milanuncios amb Motor-Chat de manera segura.' },
      { title: 'Configura la IA', desc: 'Ajustem el to, les respostes base i les dades que vols capturar de cada lead.' },
      { title: 'Ven', desc: 'Els leads qualificats entren al teu CRM i el teu equip es dedica a tancar, no a perseguir missatges.' },
    ],

    statsBig: [
      { v: '24/7', l: 'Atenció sense descans' },
      { v: '0', l: 'Xats sense contestar' },
      { v: '×5', l: 'Més ràpid que la mitjana del sector' },
    ],

    ctaTitle1: 'Deixa que Motor-Chat',
    ctaTitle2: 'contesti per tu.',
    ctaLead: 'Sol·licita una demo i t\'ensenyem com Motor-Chat respon els teus xats de portals i omple el teu CRM de leads des del primer dia.',
    ctaButton: 'Sol·licita demo',
  },
  en: {
    badge: 'THE AI AGENT FOR YOUR PORTAL CHATS',
    title1: 'Zero unanswered chats.',
    titleAccent: 'Zero lost leads.',
    title3: '',
    heroLead: 'Motor-Chat answers on Coches.net, Wallapop and Milanuncios for you — instantly, 24/7 — and drops every qualified lead straight into your CRM, hands-free.',
    ctaDemo: 'Request a demo',
    ctaHow: 'See how it works',
    heroStats: [
      { v: '24/7', l: 'Never off' },
      { v: '<5 s', l: 'Response time' },
      { v: '3 portals', l: 'Coches.net · Wallapop · Milanuncios' },
      { v: 'CRM', l: 'Direct hand-off' },
    ],
    connectedLabel: 'Connected with',
    portals: PORTALS_BASE,

    mockEyebrow: 'MESSAGES AND CALLS IN A SINGLE INBOX',
    mockTitle1: 'All your portal chats,',
    mockTitle2: 'in a single inbox.',
    mockLead: 'Reply before the competition without opening one portal after another. Every message lands in a unified inbox — the optional AI suggests the reply and you assign each lead to its rep. Nothing gets lost between portals.',
    mockLeadsTitle: 'Leads',
    mockLeadsCount: '318 this month · 24 unassigned',
    mockFilterAll: 'All',
    mockFilterPending: 'Unanswered',
    mockFilterHot: 'Hot',
    mockFilterSearch: 'Search',
    sampleLeads: SAMPLE_LEADS_BASE.en,
    mockPhone: '+34 623 145 980',
    mockVehicleName: 'BMW 3-Series 320d',
    mockVehiclePrice: '€24,900',
    mockVehicleDelta: '−€600',
    mockViewOn: 'View on Coches.net',
    mockChatCaliente: 'Hot',
    mockTabChat: 'Chat',
    mockTabCall: 'Call',
    mockTabWA: 'WhatsApp',
    mockTabNotes: 'Notes',
    mockChatDayLabel: 'Today',
    mockBubbles: [
      { from: 'user', text: "Hi, I saw the BMW 3-Series on Coches.net. Is it still available?" },
      { from: 'agent', text: 'Hi Carlos! Yes, still available. Would this week work for you to see it?' },
      { from: 'user', text: 'Do you accept a trade-in? I have a 2018 Golf.' },
    ],
    mockAiPrefix: 'AI',
    mockAiSuggestion: 'Yes, we value your car as a trade-in. What model and year is it?',
    mockAiUse: 'Use',
    mockInputPlaceholder: 'Type your reply…',

    featuresEyebrow: 'WHAT IT DOES FOR YOU',
    featuresTitle1: 'One agent.',
    featuresTitle2: 'Every portal, all day.',
    featuresLead: 'Motor-Chat unifies the channels, replies instantly, qualifies the lead and hands it to your CRM. Your team stops chasing messages and closes deals instead.',
    features: [
      { icon: 'bolt', title: 'Replies in seconds', desc: 'Answers the moment the customer writes. No jumping between portals, no shifts, no schedules.' },
      { icon: 'inbox', title: 'Unified inbox', desc: 'Messages and calls from Coches.net, Wallapop and Milanuncios on a single screen. Zero tab-switching.' },
      { icon: 'auto_awesome', title: 'AI-suggested replies', desc: 'The optional AI reads the thread and drafts the reply for you. Review, send or let it reply on its own.' },
      { icon: 'contact_page', title: 'Qualifies and creates the lead', desc: 'Asks for the key info (vehicle, intent, contact) in a natural conversation and creates the complete lead.' },
      { icon: 'sync_alt', title: 'Direct hand-off to your CRM', desc: 'The qualified lead lands in your CRM ready to sell. No double entry, no manual exports.' },
      { icon: 'analytics', title: 'Real performance panel', desc: 'Chats per portal, response time and leads generated. Actionable data — not vanity.' },
    ],

    timelineEyebrow: 'FROM ZERO TO REPLYING THIS WEEK',
    timelineTitle1: 'No endless migrations',
    timelineTitle2: 'or weeks of training.',
    timelineLead: 'We plug in your portal accounts and your CRM in a few hours. We walk you through each step.',
    timelineSteps: [
      { title: 'Contact us', desc: 'Tell us which portals you use and which CRM. We onboard your account within 24 h.' },
      { title: 'Connect portals', desc: 'We securely link your Coches.net, Wallapop and Milanuncios accounts to Motor-Chat.' },
      { title: 'Configure the AI', desc: 'We tune the tone, the base replies and the fields you want captured from every lead.' },
      { title: 'Sell', desc: 'Qualified leads flow into your CRM and your team focuses on closing, not chasing messages.' },
    ],

    statsBig: [
      { v: '24/7', l: 'Non-stop coverage' },
      { v: '0', l: 'Unanswered chats' },
      { v: '×5', l: 'Faster than the sector average' },
    ],

    ctaTitle1: 'Let Motor-Chat',
    ctaTitle2: 'reply for you.',
    ctaLead: 'Request a demo and we\'ll show you how Motor-Chat handles your portal chats and fills your CRM with leads from day one.',
    ctaButton: 'Request a demo',
  },
  zh: {
    badge: '面向门户聊天的 AI 代理',
    title1: '零未回复的聊天。',
    titleAccent: '零流失的潜客。',
    title3: '',
    heroLead: 'Motor-Chat 在 Coches.net、Wallapop 与 Milanuncios 上代您应答 — 即刻、7×24 — 并将每个合格潜客直接送入您的 CRM,团队无需动手。',
    ctaDemo: '申请演示',
    ctaHow: '了解运作方式',
    heroStats: [
      { v: '24/7', l: '不间断' },
      { v: '<5 秒', l: '响应时间' },
      { v: '3 门户', l: 'Coches.net · Wallapop · Milanuncios' },
      { v: 'CRM', l: '直接交付' },
    ],
    connectedLabel: '已连接',
    portals: PORTALS_BASE,

    mockEyebrow: '消息与电话集中于一个收件箱',
    mockTitle1: '所有门户聊天,',
    mockTitle2: '集中在一个收件箱。',
    mockLead: '无需逐个打开门户,即可先于竞争对手响应。每条消息进入统一收件箱 — 可选 AI 为您建议回复,您把每个潜客分配给对应销售。门户之间不再遗漏。',
    mockLeadsTitle: '潜客',
    mockLeadsCount: '本月 318 · 24 未分配',
    mockFilterAll: '全部',
    mockFilterPending: '未回复',
    mockFilterHot: '热',
    mockFilterSearch: '搜索',
    sampleLeads: SAMPLE_LEADS_BASE.zh,
    mockPhone: '+34 623 145 980',
    mockVehicleName: 'BMW 3 系 320d',
    mockVehiclePrice: '24,900 €',
    mockVehicleDelta: '−600 €',
    mockViewOn: '在 Coches.net 查看',
    mockChatCaliente: '热',
    mockTabChat: '聊天',
    mockTabCall: '电话',
    mockTabWA: 'WhatsApp',
    mockTabNotes: '备注',
    mockChatDayLabel: '今天',
    mockBubbles: [
      { from: 'user', text: '您好,在 Coches.net 看到这辆 BMW 3 系。还在售吗?' },
      { from: 'agent', text: '您好卡洛斯!是的,还在售。本周方便看车吗?' },
      { from: 'user', text: '接受置换吗?我有一辆 2018 年的 Golf。' },
    ],
    mockAiPrefix: 'AI',
    mockAiSuggestion: '是的,我们接受您的车作为置换。请问是什么型号、哪一年?',
    mockAiUse: '使用',
    mockInputPlaceholder: '输入您的回复……',

    featuresEyebrow: '它为您做什么',
    featuresTitle1: '一个代理。',
    featuresTitle2: '所有门户,全天候。',
    featuresLead: 'Motor-Chat 统一渠道、即时回复、筛选潜客并交付到您的 CRM。团队不再追消息,而是专注成交。',
    features: [
      { icon: 'bolt', title: '秒级响应', desc: '客户一发消息就回复。无需在门户间来回切换,无班次也无时间限制。' },
      { icon: 'inbox', title: '统一收件箱', desc: 'Coches.net、Wallapop 与 Milanuncios 的消息与电话集中在同一屏幕。零标签切换。' },
      { icon: 'auto_awesome', title: 'AI 建议回复', desc: '可选 AI 阅读整段对话并为您准备好回复。您审阅、发送或让它自动答复。' },
      { icon: 'contact_page', title: '筛选并创建潜客', desc: '通过自然对话询问关键信息(车辆、意向、联系方式),生成完整潜客。' },
      { icon: 'sync_alt', title: '直接交付到 CRM', desc: '合格潜客进入您的 CRM,随时可跟进。无需二次录入、无需手动导出。' },
      { icon: 'analytics', title: '真实业绩面板', desc: '按门户的聊天数、响应时间与产生的潜客数。可执行的数据,而非虚荣指标。' },
    ],

    timelineEyebrow: '本周从零开始回复',
    timelineTitle1: '无冗长迁移',
    timelineTitle2: '无数周培训。',
    timelineLead: '数小时内接通您的门户账户与 CRM。我们全程陪伴。',
    timelineSteps: [
      { title: '联系我们', desc: '告诉我们您使用的门户与 CRM。24 小时内开通账户。' },
      { title: '连接门户', desc: '安全地将您的 Coches.net、Wallapop 与 Milanuncios 账户接入 Motor-Chat。' },
      { title: '配置 AI', desc: '调整语气、基础回复以及您希望从每个潜客中获取的字段。' },
      { title: '成交', desc: '合格潜客进入您的 CRM,团队专注成交,不再追消息。' },
    ],

    statsBig: [
      { v: '24/7', l: '全天候覆盖' },
      { v: '0', l: '未回复聊天' },
      { v: '×5', l: '比行业平均更快' },
    ],

    ctaTitle1: '让 Motor-Chat',
    ctaTitle2: '代您回复。',
    ctaLead: '申请演示,让我们展示 Motor-Chat 如何应答您的门户聊天,并从第一天起为您的 CRM 带来潜客。',
    ctaButton: '申请演示',
  },
}

const STATUS_TONES = {
  hot: 'bg-red-500',
  warm: 'bg-amber-500',
  cold: 'bg-blue-500',
} as const

const URGENCY_TONES = {
  red: 'text-red-500',
  orange: 'text-amber-500',
  muted: 'text-neutral-500',
} as const

export async function MotorChat() {
  const productSlug = 'motorchat'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,128,0,0.18), transparent 55%)' }} />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-40" style={{ background: 'radial-gradient(ellipse at 80% 80%, rgba(255,128,0,0.10), transparent 60%)' }} />
        <div className="mf-container text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary block mb-5">{t.badge}</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="block">{t.title1}</span>
            <span className="block text-primary">{t.titleAccent}</span>
            {t.title3 && <span className="block">{t.title3}</span>}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">{t.heroLead}</p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contacto?servicio=${productSlug}`}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/30"
            >
              {t.ctaDemo}
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              {t.ctaHow}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.heroStats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary leading-none mb-1">{s.v}</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Center mockup */}
      <section id="como-funciona" className="relative py-20 md:py-24 border-t border-white/5">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary block mb-3">{t.mockEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {t.mockTitle1} <span className="text-primary">{t.mockTitle2}</span>
            </h2>
            <p className="mt-5 text-neutral-300 leading-relaxed">{t.mockLead}</p>
            <div className="mt-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              <span>{t.connectedLabel}</span>
              <div className="flex items-center gap-2">
                {t.portals.map((p) => (
                  <span
                    key={p.key}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[11px]"
                    style={{ background: p.bg, color: p.text }}
                  >
                    <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold">
                      {p.letter}
                    </span>
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl" style={{ background: 'radial-gradient(circle at 30% 40%, rgba(255,128,0,0.4), transparent 60%)' }} />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-neutral-950 p-4 md:p-6 shadow-2xl">
              {/* Leads panel */}
              <div className="bg-neutral-900 rounded-2xl p-5 min-w-0">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold">{t.mockLeadsTitle}</h3>
                </div>
                <p className="text-xs text-neutral-400 mb-4">{t.mockLeadsCount}</p>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-primary text-white">{t.mockFilterAll}</span>
                  <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/10 text-neutral-300">{t.mockFilterPending}</span>
                  <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/10 text-neutral-300">{t.mockFilterHot}</span>
                  <span className="ml-auto text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 inline-flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>search</span>
                    {t.mockFilterSearch}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.sampleLeads.map((l, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border ${i === 0 ? 'border-primary/60 bg-primary/[0.08]' : 'border-white/10 bg-white/[0.02]'} p-3.5 min-w-0`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                            style={{ background: l.initialsBg }}
                          >
                            {l.initials}
                          </span>
                          <span className="text-sm font-semibold truncate">{l.name}</span>
                        </div>
                        <span className="text-[10px] text-neutral-400 flex-shrink-0">{l.ts}</span>
                      </div>
                      <div className={`text-[10px] font-semibold mb-2 ${URGENCY_TONES[l.urgencyTone]}`}>
                        <span className="material-symbols-outlined align-text-bottom mr-1" style={{ fontSize: 12 }}>
                          {l.urgencyTone === 'red' ? 'schedule' : 'event'}
                        </span>
                        {l.urgencyLabel}
                      </div>
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <span className="text-xs text-neutral-300 truncate">{l.vehicle}</span>
                        <span className="text-xs font-bold whitespace-nowrap">{l.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className={`inline-flex items-center gap-1 font-semibold ${l.statusTone === 'hot' ? 'text-red-400' : l.statusTone === 'warm' ? 'text-amber-400' : 'text-blue-300'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${STATUS_TONES[l.statusTone]}`} />
                          {l.statusLabel}
                        </span>
                        <span className="text-neutral-400">{l.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat panel */}
              <div className="bg-neutral-900 rounded-2xl overflow-hidden flex flex-col min-w-0">
                <div className="bg-red-950/60 border-b border-red-900/40 p-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">{t.sampleLeads[0].name}</p>
                    <p className="text-[11px] text-neutral-400 flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: 12 }}>call</span>
                      {t.mockPhone}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-red-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {t.mockChatCaliente}
                  </span>
                </div>
                <div className="p-4 border-b border-white/5 flex items-center gap-3">
                  <div className="w-14 h-10 rounded-md bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-neutral-500" style={{ fontSize: 22 }}>directions_car</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold truncate">{t.mockVehicleName}</p>
                    <p className="text-xs">
                      <span className="text-primary font-bold">{t.mockVehiclePrice}</span>
                      <span className="text-emerald-400 ml-2 text-[11px]">▼ {t.mockVehicleDelta}</span>
                    </p>
                    <p className="text-[11px] text-neutral-400 truncate">{t.mockViewOn} ↗</p>
                  </div>
                </div>
                <div className="px-4 border-b border-white/5 flex gap-5 text-[11px] font-semibold uppercase tracking-widest">
                  <span className="py-3 border-b-2 border-primary text-primary">{t.mockTabChat}</span>
                  <span className="py-3 text-neutral-500">{t.mockTabCall}</span>
                  <span className="py-3 text-neutral-500">{t.mockTabWA}</span>
                  <span className="py-3 text-neutral-500">{t.mockTabNotes}</span>
                </div>
                <div className="p-4 space-y-3 flex-1 min-h-[260px]">
                  <p className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-500">{t.mockChatDayLabel}</p>
                  {t.mockBubbles.map((b, i) => (
                    <div key={i} className={`flex ${b.from === 'agent' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${b.from === 'agent' ? 'bg-primary text-white rounded-br-sm' : 'bg-neutral-800 text-neutral-100 rounded-bl-sm'}`}
                      >
                        {b.text}
                      </div>
                    </div>
                  ))}
                  <div className="rounded-xl border border-primary/40 bg-primary/[0.08] p-3 flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: 16 }}>auto_awesome</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{t.mockAiPrefix}</p>
                      <p className="text-xs leading-relaxed">{t.mockAiSuggestion}</p>
                    </div>
                    <button
                      type="button"
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-primary text-white flex-shrink-0"
                    >
                      {t.mockAiUse}
                    </button>
                  </div>
                </div>
                <div className="border-t border-white/5 p-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={t.mockInputPlaceholder}
                    className="flex-1 bg-transparent text-xs text-neutral-300 placeholder-neutral-500 border-none outline-none"
                    disabled
                  />
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 md:py-24 border-t border-white/5">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary block mb-3">{t.featuresEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {t.featuresTitle1} <span className="text-primary">{t.featuresTitle2}</span>
            </h2>
            <p className="mt-5 text-neutral-300 leading-relaxed">{t.featuresLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-primary/40 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{f.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-neutral-950">
        <div className="mf-container">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary block mb-3">{t.timelineEyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {t.timelineTitle1} <span className="text-primary">{t.timelineTitle2}</span>
            </h2>
            <p className="mt-5 text-neutral-300 leading-relaxed">{t.timelineLead}</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
            <div aria-hidden className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-primary to-primary/20" />
            {t.timelineSteps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-5 ${i === t.timelineSteps.length - 1 ? 'bg-white/10 text-neutral-400 border-2 border-white/20' : 'bg-primary text-white shadow-lg shadow-primary/30'}`}>
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="mf-container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {t.statsBig.map((s) => (
            <div key={s.l}>
              <div className="text-5xl md:text-6xl font-bold text-primary leading-none mb-3">{s.v}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,128,0,0.2), transparent 55%)' }} />
        <div className="mf-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            {t.ctaTitle1} <span className="text-primary">{t.ctaTitle2}</span>
          </h2>
          <p className="mt-5 text-neutral-300 max-w-2xl mx-auto leading-relaxed">{t.ctaLead}</p>
          <div className="mt-9">
            <Link
              href={`/contacto?servicio=${productSlug}`}
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/40"
            >
              {t.ctaButton}
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
