import { Fragment } from 'react'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

interface Tier {
  key: string
  name: string
  subtitle: string
  idealFor: string
  icon: string
  highlight: boolean
  bullets: string[]
}

type FeatVal = boolean | 'opt'
interface FeatureSection {
  section: string
  items: { label: string; platinum: FeatVal; silver: FeatVal; unica: FeatVal }[]
}

interface SwCopy {
  badge: string
  title1: string
  titleAccent: string
  title3: string
  heroLead: string
  ctaDemo: string
  ctaPrices: string
  tiersEyebrow: string
  tiersTitle: string
  tiersLead: string
  idealForLabel: string
  viewPricesLabel: string
  pickTier: string
  recommendedLabel: string
  integrationsEyebrow: string
  integrationsTitle: string
  integrationsLead: string
  integrations: { icon: string; name: string; desc: string }[]
  tableEyebrow: string
  tableTitle: string
  tableHeadService: string
  tableHeadPlatinum: string
  tableHeadSilver: string
  tableHeadUnica: string
  optLabel: string
  tableFootnote: string
  featureTable: FeatureSection[]
  planEyebrow: string
  planTitle: string
  planLead: string
  timeline: { day: string; text: string }[]
  infraEyebrow: string
  infraTitle: string
  infra: { tag: string; icon: string; title: string; desc: string }[]
  securityEyebrow: string
  securityTitle: string
  securityLead: string
  security: { tag: string; icon: string; title: string; desc: string }[]
  stats: { v: string; l: string; primary?: boolean }[]
  ctaTitle: string
  ctaLead: string
  ctaButton: string
  tiers: Tier[]
}

const COPY: Record<LocaleKey, SwCopy> = {
  es: {
    badge: 'PROYECTO WEB · MOTORFLASH SOLUTIONS',
    title1: 'Webs y marketplaces de ',
    titleAccent: 'automoción',
    title3: ', en 30 días, con todo Motorflash integrado.',
    heroLead: '3 niveles según tu negocio. SEO, analítica, CMS, pasarela de pago, calculadora financiera, CRM y Contact Center integrados de fábrica. Infraestructura 99,9 %, SSL, WAF y anti-DDoS incluidos.',
    ctaDemo: 'Solicitar Demo',
    ctaPrices: 'Ver precios',
    tiersEyebrow: '3 PRODUCTOS',
    tiersTitle: 'Elige el proyecto web que encaja contigo',
    tiersLead: 'Mismo equipo, misma infraestructura, mismas integraciones. Distintos alcances para que entres por donde te conviene y crezcas cuando quieras.',
    idealForLabel: 'Ideal para',
    viewPricesLabel: 'Ver precios y tarifas detalladas',
    pickTier: 'Pedir',
    recommendedLabel: 'Recomendado',
    integrationsEyebrow: 'INTEGRADO CON TODO EL ECOSISTEMA',
    integrationsTitle: 'Tu web no funciona sola. Va enchufada a Motorflash.',
    integrationsLead: 'Los leads llegan al CRM. Las llamadas al Contact Center. Los chats a MF Message. Sin integradores, sin proyectos a medida.',
    integrations: [
      { icon: 'support_agent', name: 'Contact Center', desc: 'Atención multicanal especializada en automoción, RGPD, dashboard real-time.' },
      { icon: 'inventory_2', name: 'Dealer', desc: 'Creación de vehículos desde matrícula/bastidor, análisis de precios, papelería.' },
      { icon: 'hub', name: 'CRM4YOU', desc: 'Gestión de clientes, comunicación, control de actividad comercial, KPIs.' },
      { icon: 'chat', name: 'MF Message', desc: 'WhatsApp Business: gestión de campañas, RGPD, dashboard.' },
      { icon: 'forum', name: 'CHATWEB MF', desc: 'Chat en directo + bot automático + posibilidad de IA conversacional.' },
    ],
    tableEyebrow: 'QUÉ INCLUYE CADA UNO',
    tableTitle: 'Lista completa de funcionalidades',
    tableHeadService: 'Servicio',
    tableHeadPlatinum: 'Platinum',
    tableHeadSilver: 'Silver',
    tableHeadUnica: 'Única',
    optLabel: 'Opc.',
    tableFootnote: '"Opc." significa funcionalidad opcional valorada aparte por el equipo de Motorflash. CRM4YOU requiere su propia contratación.',
    featureTable: [
      { section: 'Secciones web', items: [
        { label: 'Home', platinum: true, silver: false, unica: true },
        { label: 'Listados de stock', platinum: true, silver: true, unica: true },
        { label: 'Ficha estándar', platinum: true, silver: true, unica: true },
        { label: 'Ficha premium (vídeos + pasarelas pago + financiera)', platinum: true, silver: true, unica: false },
        { label: 'Sección renting / alquiler', platinum: true, silver: false, unica: false },
        { label: 'Servicio postventa', platinum: true, silver: false, unica: false },
      ] },
      { section: 'Conversión', items: [
        { label: 'Reserva/compra (pasarela de pago)', platinum: true, silver: true, unica: false },
        { label: 'Cita taller', platinum: true, silver: false, unica: true },
        { label: 'Tasación', platinum: true, silver: true, unica: true },
        { label: 'Alerta de búsqueda', platinum: true, silver: false, unica: false },
        { label: 'Renting / alquiler', platinum: true, silver: false, unica: false },
      ] },
      { section: 'CMS autogestionable', items: [
        { label: 'Modificación de páginas iniciales', platinum: true, silver: false, unica: false },
        { label: 'Creación de páginas, blogs, landings', platinum: true, silver: false, unica: false },
        { label: 'Creación de formularios y pop-ups', platinum: true, silver: false, unica: false },
        { label: 'Migración de contenidos', platinum: 'opt', silver: false, unica: false },
      ] },
      { section: 'CRM y leads', items: [
        { label: 'Vinculable a CRM4YOU', platinum: true, silver: true, unica: true },
        { label: 'Vinculable a CRM externo (email / JSONLEAD)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'Gestor de Leads (Contact Center)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'CHATWEB MF', platinum: 'opt', silver: 'opt', unica: false },
      ] },
      { section: 'Analítica y marketing', items: [
        { label: 'Set up inicial SEO', platinum: true, silver: 'opt', unica: false },
        { label: 'GTM / GA4 (eventos de conversión)', platinum: true, silver: 'opt', unica: false },
        { label: 'Configuración Google Ads', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Configuración Meta (pixel + eventos)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Dashboard de seguimiento', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Mejora continua SEO (mensual)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Campañas SEA / Meta', platinum: 'opt', silver: 'opt', unica: false },
      ] },
    ],
    planEyebrow: 'DE FIRMA A PRODUCCIÓN EN 30 DÍAS',
    planTitle: 'Un plan de trabajo claro, sin sorpresas',
    planLead: 'Desde el día 1 sabes en qué punto está tu web. Reportes semanales, briefings antes de cada hito y un único interlocutor desde el kickoff hasta la subida a producción.',
    timeline: [
      { day: '1', text: 'Firma de contrato + briefing kickoff' },
      { day: '5', text: 'Documento de configuración y toma de datos' },
      { day: '10', text: 'Puesta en marcha en desarrollo' },
      { day: '18', text: 'Revisión y pruebas internas' },
      { day: '22', text: 'Entrega "Pruebas" para revisión del cliente' },
      { day: '25', text: 'Formación CMS · Configuración GA y SEO' },
      { day: '30', text: 'Briefing y subida a producción' },
    ],
    infraEyebrow: 'INFRAESTRUCTURA DE ALTA DISPONIBILIDAD',
    infraTitle: 'Tu web siempre activa. Sin interrupciones. Sin excusas.',
    infra: [
      { tag: '24/7', icon: 'support_agent', title: 'Equipo de Sistemas 24×7', desc: 'Vigilancia continua e ininterrumpida con equipo técnico interno. Actuamos de forma proactiva ante cualquier incidencia.' },
      { tag: 'CDN', icon: 'speed', title: 'CDN propia dedicada', desc: 'Una web lenta pierde clientes. Distribución de contenidos propia que garantiza máxima velocidad desde cualquier punto.' },
      { tag: '99,9 %', icon: 'verified_user', title: 'Arquitectura redundante', desc: 'Servidores redundantes, balanceo de carga automático y copias de seguridad diarias. Tu negocio sigue funcionando pase lo que pase.' },
    ],
    securityEyebrow: 'SEGURIDAD EMPRESARIAL INCLUIDA',
    securityTitle: 'Tu web, protegida al más alto nivel',
    securityLead: 'SSL, anti-DDoS y WAF activos sin coste adicional. Lo que cualquier proveedor cobra aparte, aquí viene de fábrica.',
    security: [
      { tag: 'SSL', icon: 'lock', title: 'Certificado SSL incluido', desc: 'HTTPS cifrado de extremo a extremo. Confianza en el navegador, requisito para Google Ads y protección de datos de cliente.' },
      { tag: 'DDoS', icon: 'shield', title: 'Protección Anti-DDoS', desc: 'Filtramos y absorbemos ataques de denegación de servicio antes de que lleguen a tu web. Tu site siempre operativo.' },
      { tag: 'WAF', icon: 'security', title: 'Firewall de aplicación (WAF)', desc: 'Análisis en tiempo real de cada petición. Bloquea inyecciones de código, accesos no autorizados y vulnerabilidades.' },
    ],
    stats: [
      { v: '17', l: 'AÑOS EN EL SECTOR', primary: true },
      { v: '+350', l: 'WEBS DESARROLLADAS' },
      { v: '+100', l: 'ESPECIALISTAS IT' },
    ],
    ctaTitle: '¿Listo para empezar tu proyecto web?',
    ctaLead: 'En la demo te enseñamos un caso real de un concesionario del mismo tamaño que el tuyo, qué tier encaja mejor y cuánto tarda en estar arriba.',
    ctaButton: 'Solicitar Demo Personalizada',
    tiers: [
      { key: 'platinum', name: 'Platinum', subtitle: 'Web de concesionario completa', idealFor: 'Grupos y concesionarios oficiales con VO, VN, renting y postventa que quieren su web insignia sobre la infraestructura de Motorflash.', icon: 'workspace_premium', highlight: true, bullets: [
        'Todos los departamentos: VO, VN, renting, postventa, contenidos corporativos, tasador de vehículos',
        'Multi-marca / multi-mundo (Audi, VW…)',
        'Publicación de stock VO y VN (DMS, Dealer, Feed XML)',
        'Fichas premium con vídeos, pasarelas de pago y calculadora financiera',
        'CMS autogestionable (landings, banners, formularios)',
        'Integraciones nativas: CRM4YOU, MF Message, Gestor de Leads',
        'Dashboard KPIs en tiempo real',
        'SEO inicial, GA4, formación CMS (3 h), mantenimiento y alojamiento incluidos',
      ] },
      { key: 'silver', name: 'Silver', subtitle: 'Integra tu stock en cualquier web', idealFor: 'Concesionarios con web propia que quieren un buscador de stock potente y con conversión, embebido sin rehacer nada.', icon: 'extension', highlight: false, bullets: [
        'URL con listado de stock para integrar en tu web actual',
        'Buscador, comparativa y favoritos',
        'Fichas con fotos, vídeos, características y CTAs',
        'TPV Virtual (Paypal, Addon Payment, Redsys, Rapid Pay)',
        'Calculadora financiera (precio financiado y cuota)',
        'Integraciones Motorflash: CRM4YOU, MF Message, Gestor de Leads',
        'Adaptable a tipografía y estilos de la web del cliente',
        'Upgrade a Platinum disponible cuando quieras',
      ] },
      { key: 'unica', name: 'Única', subtitle: 'Web práctica para empezar', idealFor: 'Concesionarios que necesitan estar online rápido, con lo esencial para captar leads sin complicarse.', icon: 'rocket_launch', highlight: false, bullets: [
        'Home + listados + fichas estándar',
        'Cita taller y tasación de vehículos',
        'Ubicaciones y horarios, Quiénes somos',
        'Aviso legal, privacidad y cookies',
        'Conversión: contacto general, lead desde ficha, cita taller, tasación',
        'Vinculable a CRM4YOU o CRM externo (email / JSONLEAD)',
        'Sin pasarela de pago, alerta de búsqueda ni renting',
        'Permanencia corta, ideal para arrancar',
      ] },
    ],
  },
  ca: {
    badge: 'PROJECTE WEB · MOTORFLASH SOLUTIONS',
    title1: 'Webs i marketplaces de ',
    titleAccent: 'automoció',
    title3: ', en 30 dies, amb tot Motorflash integrat.',
    heroLead: 'Tres nivells segons el teu negoci. SEO, analítica, CMS, passarel·la de pagament, calculadora financera, CRM i Contact Center integrats de fàbrica. Infraestructura 99,9%, SSL, WAF i antiDDoS inclosos.',
    ctaDemo: 'Sol·licita Demo',
    ctaPrices: 'Veure preus',
    tiersEyebrow: '3 PRODUCTES',
    tiersTitle: "Tria el projecte web que encaixa amb tu",
    tiersLead: "Mateix equip, mateixa infraestructura, mateixes integracions. Diferents abast perquè entris per on et convingui i creixis quan vulguis.",
    idealForLabel: 'Ideal per a',
    viewPricesLabel: 'Veure preus i tarifes detallades',
    pickTier: 'Demanar',
    recommendedLabel: 'Recomanat',
    integrationsEyebrow: "INTEGRAT AMB TOT L'ECOSISTEMA",
    integrationsTitle: 'La teva web no funciona sola. Va connectada a Motorflash.',
    integrationsLead: "Els leads arriben al CRM. Les trucades al Contact Center. Els xats a MF Message. Sense integradors, sense projectes a mida.",
    integrations: [
      { icon: 'support_agent', name: 'Contact Center', desc: 'Atenció multicanal especialitzada en automoció, RGPD, dashboard real-time.' },
      { icon: 'inventory_2', name: 'Dealer', desc: 'Creació de vehicles des de matrícula/bastidor, anàlisi de preus, paperassa.' },
      { icon: 'hub', name: 'CRM4YOU', desc: "Gestió de clients, comunicació, control d'activitat comercial, KPIs." },
      { icon: 'chat', name: 'MF Message', desc: 'WhatsApp Business: gestió de campanyes, RGPD, dashboard.' },
      { icon: 'forum', name: 'CHATWEB MF', desc: "Xat en directe + bot automàtic + possibilitat d'IA conversacional." },
    ],
    tableEyebrow: 'QUÈ INCLOU CADASCUN',
    tableTitle: 'Llista completa de funcionalitats',
    tableHeadService: 'Servei',
    tableHeadPlatinum: 'Platinum',
    tableHeadSilver: 'Silver',
    tableHeadUnica: 'Única',
    optLabel: 'Opc.',
    tableFootnote: "\"Opc.\" significa funcionalitat opcional valorada a part per l'equip de Motorflash. CRM4YOU requereix la seva pròpia contractació.",
    featureTable: [
      { section: 'Seccions web', items: [
        { label: 'Home', platinum: true, silver: false, unica: true },
        { label: "Llistats d'estoc", platinum: true, silver: true, unica: true },
        { label: 'Fitxa estàndard', platinum: true, silver: true, unica: true },
        { label: 'Fitxa premium (vídeos + passarel·les pagament + financera)', platinum: true, silver: true, unica: false },
        { label: 'Secció rènting / lloguer', platinum: true, silver: false, unica: false },
        { label: 'Servei postvenda', platinum: true, silver: false, unica: false },
      ] },
      { section: 'Conversió', items: [
        { label: 'Reserva/compra (passarel·la de pagament)', platinum: true, silver: true, unica: false },
        { label: 'Cita taller', platinum: true, silver: false, unica: true },
        { label: 'Taxació', platinum: true, silver: true, unica: true },
        { label: 'Alerta de cerca', platinum: true, silver: false, unica: false },
        { label: 'Rènting / lloguer', platinum: true, silver: false, unica: false },
      ] },
      { section: 'CMS autogestionable', items: [
        { label: "Modificació de pàgines inicials", platinum: true, silver: false, unica: false },
        { label: 'Creació de pàgines, blogs, landings', platinum: true, silver: false, unica: false },
        { label: 'Creació de formularis i pop-ups', platinum: true, silver: false, unica: false },
        { label: 'Migració de continguts', platinum: 'opt', silver: false, unica: false },
      ] },
      { section: 'CRM i leads', items: [
        { label: 'Vinculable a CRM4YOU', platinum: true, silver: true, unica: true },
        { label: 'Vinculable a CRM extern (correu / JSONLEAD)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'Gestor de Leads (Contact Center)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'CHATWEB MF', platinum: 'opt', silver: 'opt', unica: false },
      ] },
      { section: 'Analítica i màrqueting', items: [
        { label: 'Set up inicial SEO', platinum: true, silver: 'opt', unica: false },
        { label: 'GTM / GA4 (esdeveniments de conversió)', platinum: true, silver: 'opt', unica: false },
        { label: 'Configuració Google Ads', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Configuració Meta (pixel + esdeveniments)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Dashboard de seguiment', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Millora contínua SEO (mensual)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Campanyes SEA / Meta', platinum: 'opt', silver: 'opt', unica: false },
      ] },
    ],
    planEyebrow: 'DE SIGNATURA A PRODUCCIÓ EN 30 DIES',
    planTitle: 'Un pla de treball clar, sense sorpreses',
    planLead: "Des del dia 1 saps en quin punt està la teva web. Reports setmanals, briefings abans de cada fita i un únic interlocutor des del kickoff fins a la pujada a producció.",
    timeline: [
      { day: '1', text: 'Signatura de contracte + briefing kickoff' },
      { day: '5', text: 'Document de configuració i recollida de dades' },
      { day: '10', text: 'Posada en marxa en desenvolupament' },
      { day: '18', text: 'Revisió i proves internes' },
      { day: '22', text: 'Entrega "Proves" per a revisió del client' },
      { day: '25', text: 'Formació CMS · Configuració GA i SEO' },
      { day: '30', text: 'Briefing i pujada a producció' },
    ],
    infraEyebrow: "INFRAESTRUCTURA D'ALTA DISPONIBILITAT",
    infraTitle: 'La teva web sempre activa. Sense interrupcions. Sense excuses.',
    infra: [
      { tag: '24/7', icon: 'support_agent', title: 'Equip de Sistemes 24×7', desc: 'Vigilància contínua i ininterrompuda amb equip tècnic intern. Actuem de manera proactiva davant qualsevol incidència.' },
      { tag: 'CDN', icon: 'speed', title: 'CDN pròpia dedicada', desc: 'Una web lenta perd clients. Distribució de continguts pròpia que garanteix màxima velocitat des de qualsevol punt.' },
      { tag: '99,9 %', icon: 'verified_user', title: 'Arquitectura redundant', desc: "Servidors redundants, balanceig de càrrega automàtic i còpies de seguretat diàries. El teu negoci continua funcionant passi el que passi." },
    ],
    securityEyebrow: 'SEGURETAT EMPRESARIAL INCLOSA',
    securityTitle: 'La teva web, protegida al màxim nivell',
    securityLead: 'SSL, antiDDoS i WAF actius sense cost addicional. El que qualsevol proveïdor cobra a part, aquí ve de fàbrica.',
    security: [
      { tag: 'SSL', icon: 'lock', title: 'Certificat SSL inclòs', desc: "HTTPS xifrat d'extrem a extrem. Confiança al navegador, requisit per a Google Ads i protecció de dades de client." },
      { tag: 'DDoS', icon: 'shield', title: 'Protecció Anti-DDoS', desc: "Filtrem i absorbim atacs de denegació de servei abans que arribin a la teva web. El teu site sempre operatiu." },
      { tag: 'WAF', icon: 'security', title: "Firewall d'aplicació (WAF)", desc: 'Anàlisi en temps real de cada petició. Bloqueja injeccions de codi, accessos no autoritzats i vulnerabilitats.' },
    ],
    stats: [
      { v: '17', l: 'ANYS AL SECTOR', primary: true },
      { v: '+350', l: 'WEBS DESENVOLUPADES' },
      { v: '+100', l: 'ESPECIALISTES IT' },
    ],
    ctaTitle: 'Llest per començar el teu projecte web?',
    ctaLead: "A la demo t'ensenyem un cas real d'un concessionari de la mateixa mida que el teu, quin tier encaixa millor i quant triga a estar amunt.",
    ctaButton: 'Sol·licitar Demo Personalitzada',
    tiers: [
      { key: 'platinum', name: 'Platinum', subtitle: 'Web de concessionari completa', idealFor: 'Grups i concessionaris oficials amb VO, VN, rènting i postvenda que volen la seva web insígnia sobre la infraestructura de Motorflash.', icon: 'workspace_premium', highlight: true, bullets: [
        'Tots els departaments: VO, VN, rènting, postvenda, continguts corporatius, taxador de vehicles',
        'Multi-marca / multi-món (Audi, VW…)',
        "Publicació d'estoc VO i VN (DMS, Dealer, Feed XML)",
        'Fitxes premium amb vídeos, passarel·les de pagament i calculadora financera',
        'CMS autogestionable (landings, banners, formularis)',
        'Integracions natives: CRM4YOU, MF Message, Gestor de Leads',
        'Dashboard KPIs en temps real',
        'SEO inicial, GA4, formació CMS (3 h), manteniment i allotjament inclosos',
      ] },
      { key: 'silver', name: 'Silver', subtitle: "Integra el teu estoc a qualsevol web", idealFor: 'Concessionaris amb web pròpia que volen un cercador de vehicles potent i amb conversió, integrat sense refer res.', icon: 'extension', highlight: false, bullets: [
        "URL amb llistat d'estoc per integrar a la teva web actual",
        'Cercador, comparativa i preferits',
        'Fitxes amb fotos, vídeos, característiques i CTAs',
        'TPV Virtual (Paypal, Addon Payment, Redsys, Rapid Pay)',
        'Calculadora financera (preu finançat i quota)',
        'Integracions Motorflash: CRM4YOU, MF Message, Gestor de Leads',
        'Adaptable a tipografia i estils de la web del client',
        "Upgrade a Platinum disponible quan vulguis",
      ] },
      { key: 'unica', name: 'Única', subtitle: 'Web pràctica per començar', idealFor: 'Concessionaris que necessiten estar en línia ràpidament, amb l\'essencial per captar leads sense complicar-se.', icon: 'rocket_launch', highlight: false, bullets: [
        'Home + llistats + fitxes estàndard',
        'Cita taller i taxació de vehicles',
        'Ubicacions i horaris, Qui som',
        'Avís legal, privadesa i galetes',
        'Conversió: contacte general, lead des de fitxa, cita taller, taxació',
        'Vinculable a CRM4YOU o CRM extern (correu / JSONLEAD)',
        'Sense passarel·la de pagament, alerta de cerca ni rènting',
        'Permanència curta, ideal per arrencar',
      ] },
    ],
  },
  en: {
    badge: 'WEB PROJECT · MOTORFLASH SOLUTIONS',
    title1: 'Automotive ',
    titleAccent: 'websites',
    title3: ' and marketplaces, in 30 days, with the full Motorflash stack integrated.',
    heroLead: "3 tiers tailored to your business. SEO, analytics, CMS, payment gateway, finance calculator, CRM and Contact Center integrated by default. 99.9% infrastructure, SSL, WAF and anti-DDoS included.",
    ctaDemo: 'Request a demo',
    ctaPrices: 'See pricing',
    tiersEyebrow: '3 PRODUCTS',
    tiersTitle: 'Pick the web project that fits you',
    tiersLead: "Same team, same infrastructure, same integrations. Different scopes so you start where it suits you and grow when you want.",
    idealForLabel: 'Ideal for',
    viewPricesLabel: 'See detailed pricing',
    pickTier: 'Pick',
    recommendedLabel: 'Recommended',
    integrationsEyebrow: 'INTEGRATED WITH THE WHOLE ECOSYSTEM',
    integrationsTitle: "Your website doesn't run alone. It's plugged into Motorflash.",
    integrationsLead: 'Leads land in CRM. Calls in Contact Center. Chats in MF Message. No integrators, no bespoke projects.',
    integrations: [
      { icon: 'support_agent', name: 'Contact Center', desc: 'Multi-channel support specialised in automotive, GDPR, real-time dashboard.' },
      { icon: 'inventory_2', name: 'Dealer', desc: 'Vehicle creation by plate/VIN, price analysis, paperwork.' },
      { icon: 'hub', name: 'CRM4YOU', desc: 'Customer management, communication, sales activity control, KPIs.' },
      { icon: 'chat', name: 'MF Message', desc: 'WhatsApp Business: campaign management, GDPR, dashboard.' },
      { icon: 'forum', name: 'CHATWEB MF', desc: 'Live chat + automated bot + optional conversational AI.' },
    ],
    tableEyebrow: 'WHAT EACH ONE INCLUDES',
    tableTitle: 'Full feature list',
    tableHeadService: 'Feature',
    tableHeadPlatinum: 'Platinum',
    tableHeadSilver: 'Silver',
    tableHeadUnica: 'Única',
    optLabel: 'Opt.',
    tableFootnote: "\"Opt.\" means optional feature quoted separately by the Motorflash team. CRM4YOU requires its own contract.",
    featureTable: [
      { section: 'Website sections', items: [
        { label: 'Home', platinum: true, silver: false, unica: true },
        { label: 'Stock listings', platinum: true, silver: true, unica: true },
        { label: 'Standard listing page', platinum: true, silver: true, unica: true },
        { label: 'Premium listing (videos + payment + finance)', platinum: true, silver: true, unica: false },
        { label: 'Leasing / rental section', platinum: true, silver: false, unica: false },
        { label: 'After-sales section', platinum: true, silver: false, unica: false },
      ] },
      { section: 'Conversion', items: [
        { label: 'Reservation/purchase (payment gateway)', platinum: true, silver: true, unica: false },
        { label: 'Workshop appointment', platinum: true, silver: false, unica: true },
        { label: 'Valuation', platinum: true, silver: true, unica: true },
        { label: 'Search alert', platinum: true, silver: false, unica: false },
        { label: 'Leasing / rental', platinum: true, silver: false, unica: false },
      ] },
      { section: 'Self-managed CMS', items: [
        { label: 'Edit initial pages', platinum: true, silver: false, unica: false },
        { label: 'Build pages, blogs, landings', platinum: true, silver: false, unica: false },
        { label: 'Build forms and pop-ups', platinum: true, silver: false, unica: false },
        { label: 'Content migration', platinum: 'opt', silver: false, unica: false },
      ] },
      { section: 'CRM and leads', items: [
        { label: 'Linkable to CRM4YOU', platinum: true, silver: true, unica: true },
        { label: 'Linkable to external CRM (email / JSONLEAD)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'Lead Manager (Contact Center)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'CHATWEB MF', platinum: 'opt', silver: 'opt', unica: false },
      ] },
      { section: 'Analytics and marketing', items: [
        { label: 'Initial SEO set-up', platinum: true, silver: 'opt', unica: false },
        { label: 'GTM / GA4 (conversion events)', platinum: true, silver: 'opt', unica: false },
        { label: 'Google Ads setup', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Meta setup (pixel + events)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Tracking dashboard', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Continuous SEO improvement (monthly)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'SEA / Meta campaigns', platinum: 'opt', silver: 'opt', unica: false },
      ] },
    ],
    planEyebrow: 'FROM SIGNING TO PRODUCTION IN 30 DAYS',
    planTitle: 'A clear work plan, no surprises',
    planLead: "From day 1 you know where your website is. Weekly reports, briefings before each milestone and a single point of contact from kickoff to go-live.",
    timeline: [
      { day: '1', text: 'Contract signing + kickoff briefing' },
      { day: '5', text: 'Configuration doc and data gathering' },
      { day: '10', text: 'Development go-live' },
      { day: '18', text: 'Internal review and tests' },
      { day: '22', text: '"Test" delivery for customer review' },
      { day: '25', text: 'CMS training · GA and SEO setup' },
      { day: '30', text: 'Briefing and production launch' },
    ],
    infraEyebrow: 'HIGH-AVAILABILITY INFRASTRUCTURE',
    infraTitle: 'Your website always on. No interruptions. No excuses.',
    infra: [
      { tag: '24/7', icon: 'support_agent', title: '24×7 systems team', desc: 'Continuous, in-house technical monitoring. Proactive response to any incident.' },
      { tag: 'CDN', icon: 'speed', title: 'Proprietary dedicated CDN', desc: 'A slow website loses customers. Our content delivery ensures top speed from anywhere.' },
      { tag: '99.9 %', icon: 'verified_user', title: 'Redundant architecture', desc: 'Redundant servers, automatic load balancing and daily backups. Your business keeps running.' },
    ],
    securityEyebrow: 'ENTERPRISE SECURITY INCLUDED',
    securityTitle: 'Your website, protected to the highest standard',
    securityLead: 'SSL, anti-DDoS and WAF active at no extra cost. What others charge separately, here is included.',
    security: [
      { tag: 'SSL', icon: 'lock', title: 'SSL certificate included', desc: 'End-to-end HTTPS. Browser trust, required for Google Ads and to protect customer data.' },
      { tag: 'DDoS', icon: 'shield', title: 'Anti-DDoS protection', desc: 'We filter and absorb denial-of-service attacks before they reach your website.' },
      { tag: 'WAF', icon: 'security', title: 'Web App Firewall (WAF)', desc: 'Real-time analysis of each request. Blocks code injections, unauthorised access and vulnerabilities.' },
    ],
    stats: [
      { v: '17', l: 'YEARS IN THE SECTOR', primary: true },
      { v: '+350', l: 'WEBSITES BUILT' },
      { v: '+100', l: 'IT SPECIALISTS' },
    ],
    ctaTitle: 'Ready to start your web project?',
    ctaLead: "In the demo we'll show a real case from a dealership your size, which tier fits best and how long it takes to be live.",
    ctaButton: 'Request a personalised demo',
    tiers: [
      { key: 'platinum', name: 'Platinum', subtitle: 'Full dealership website', idealFor: 'Groups and official dealers with UV, NV, leasing and after-sales who want their flagship website on top of the Motorflash stack.', icon: 'workspace_premium', highlight: true, bullets: [
        'Every department: UV, NV, leasing, after-sales, corporate content, vehicle appraiser',
        'Multi-brand / multi-world (Audi, VW…)',
        'UV and NV stock publishing (DMS, Dealer, XML feed)',
        'Premium listings with videos, payment gateways and finance calculator',
        'Self-managed CMS (landings, banners, forms)',
        'Native integrations: CRM4YOU, MF Message, Lead Manager',
        'Live KPI dashboard',
        'Initial SEO, GA4, CMS training (3h), maintenance and hosting included',
      ] },
      { key: 'silver', name: 'Silver', subtitle: 'Embed your stock in any website', idealFor: 'Dealers who already have a website and want a powerful stock finder with real conversion — embedded without rebuilding anything.', icon: 'extension', highlight: false, bullets: [
        'URL with the stock listing to embed in your current website',
        'Search, comparison and favourites',
        'Listings with photos, videos, features and CTAs',
        'Virtual POS (Paypal, Addon Payment, Redsys, Rapid Pay)',
        'Finance calculator (financed price and instalment)',
        'Motorflash integrations: CRM4YOU, MF Message, Lead Manager',
        'Adapts to the typography and styles of the customer website',
        'Upgrade to Platinum available whenever you want',
      ] },
      { key: 'unica', name: 'Única', subtitle: 'Practical starter website', idealFor: 'Dealers who need to be online fast, with just what it takes to capture leads without extra complexity.', icon: 'rocket_launch', highlight: false, bullets: [
        'Home + listings + standard listing pages',
        'Workshop appointment and vehicle valuation',
        'Locations and opening hours, About us',
        'Legal notice, privacy and cookies',
        'Conversion: general contact, lead from listing, workshop appointment, valuation',
        'Linkable to CRM4YOU or external CRM (email / JSONLEAD)',
        'No payment gateway, search alert or leasing',
        'Short commitment, ideal to start',
      ] },
    ],
  },
  zh: {
    badge: '网站项目 · MOTORFLASH SOLUTIONS',
    title1: '在 30 天内交付的汽车 ',
    titleAccent: '网站',
    title3: ' 与市场,集成 Motorflash 全套技术。',
    heroLead: '按业务规模提供 3 个档位。SEO、分析、CMS、支付网关、融资计算器、CRM 与 Contact Center 默认集成。包含 99.9% 基础设施、SSL、WAF 与防 DDoS。',
    ctaDemo: '申请演示',
    ctaPrices: '查看价格',
    tiersEyebrow: '3 种产品',
    tiersTitle: '选择最契合您的网站项目',
    tiersLead: '相同的团队、相同的基础设施、相同的集成。不同的范围,让您按需起步并按节奏成长。',
    idealForLabel: '适合',
    viewPricesLabel: '查看详细价格与费率',
    pickTier: '选择',
    recommendedLabel: '推荐',
    integrationsEyebrow: '与整个生态集成',
    integrationsTitle: '您的网站不孤立运行。它接入 Motorflash。',
    integrationsLead: '潜客进入 CRM。通话进入 Contact Center。聊天进入 MF Message。无需第三方集成、无需定制项目。',
    integrations: [
      { icon: 'support_agent', name: 'Contact Center', desc: '专注汽车行业的多渠道支持、GDPR、实时仪表板。' },
      { icon: 'inventory_2', name: 'Dealer', desc: '按车牌/车架号创建车辆、价格分析、文档。' },
      { icon: 'hub', name: 'CRM4YOU', desc: '客户管理、沟通、销售活动管控、KPI。' },
      { icon: 'chat', name: 'MF Message', desc: 'WhatsApp Business:活动管理、GDPR、仪表板。' },
      { icon: 'forum', name: 'CHATWEB MF', desc: '实时聊天 + 自动机器人 + 可选对话式 AI。' },
    ],
    tableEyebrow: '各档位包含哪些',
    tableTitle: '完整功能清单',
    tableHeadService: '功能',
    tableHeadPlatinum: 'Platinum',
    tableHeadSilver: 'Silver',
    tableHeadUnica: 'Única',
    optLabel: '可选',
    tableFootnote: '"可选" 指由 Motorflash 团队单独报价的可选功能。CRM4YOU 需独立签约。',
    featureTable: [
      { section: '网站板块', items: [
        { label: '首页', platinum: true, silver: false, unica: true },
        { label: '库存列表', platinum: true, silver: true, unica: true },
        { label: '标准详情页', platinum: true, silver: true, unica: true },
        { label: '高级详情页(视频 + 支付 + 融资)', platinum: true, silver: true, unica: false },
        { label: '租赁 / 出租板块', platinum: true, silver: false, unica: false },
        { label: '售后板块', platinum: true, silver: false, unica: false },
      ] },
      { section: '转化', items: [
        { label: '预订/购买(支付网关)', platinum: true, silver: true, unica: false },
        { label: '维修预约', platinum: true, silver: false, unica: true },
        { label: '估值', platinum: true, silver: true, unica: true },
        { label: '搜索提醒', platinum: true, silver: false, unica: false },
        { label: '租赁 / 出租', platinum: true, silver: false, unica: false },
      ] },
      { section: '自管 CMS', items: [
        { label: '修改初始页面', platinum: true, silver: false, unica: false },
        { label: '创建页面、博客、落地页', platinum: true, silver: false, unica: false },
        { label: '创建表单与弹窗', platinum: true, silver: false, unica: false },
        { label: '内容迁移', platinum: 'opt', silver: false, unica: false },
      ] },
      { section: 'CRM 与潜客', items: [
        { label: '可连接 CRM4YOU', platinum: true, silver: true, unica: true },
        { label: '可连接外部 CRM(邮件 / JSONLEAD)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: '潜客管理(Contact Center)', platinum: 'opt', silver: 'opt', unica: 'opt' },
        { label: 'CHATWEB MF', platinum: 'opt', silver: 'opt', unica: false },
      ] },
      { section: '分析与营销', items: [
        { label: '初始 SEO 配置', platinum: true, silver: 'opt', unica: false },
        { label: 'GTM / GA4(转化事件)', platinum: true, silver: 'opt', unica: false },
        { label: 'Google Ads 配置', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'Meta 配置(像素 + 事件)', platinum: 'opt', silver: 'opt', unica: false },
        { label: '跟踪仪表板', platinum: 'opt', silver: 'opt', unica: false },
        { label: '持续 SEO 优化(每月)', platinum: 'opt', silver: 'opt', unica: false },
        { label: 'SEA / Meta 活动', platinum: 'opt', silver: 'opt', unica: false },
      ] },
    ],
    planEyebrow: '从签约到上线 30 天',
    planTitle: '清晰的实施计划,无意外',
    planLead: '从第 1 天起您都知道网站所处阶段。每周报告、每个里程碑前都有简报,从启动到上线只有一位对接人。',
    timeline: [
      { day: '1', text: '签署合同 + 启动简报' },
      { day: '5', text: '配置文档与数据采集' },
      { day: '10', text: '开发上线' },
      { day: '18', text: '内部审查与测试' },
      { day: '22', text: '交付"测试版"供客户审阅' },
      { day: '25', text: 'CMS 培训 · GA 与 SEO 配置' },
      { day: '30', text: '简报并上线生产' },
    ],
    infraEyebrow: '高可用基础设施',
    infraTitle: '网站始终在线。无中断、无借口。',
    infra: [
      { tag: '24/7', icon: 'support_agent', title: '7×24 系统团队', desc: '由内部技术团队进行持续监控,主动应对任何事件。' },
      { tag: 'CDN', icon: 'speed', title: '自有专属 CDN', desc: '慢速网站会流失客户。我们自有的内容分发保证从任意位置的高速访问。' },
      { tag: '99.9 %', icon: 'verified_user', title: '冗余架构', desc: '冗余服务器、自动负载均衡与每日备份。您的业务始终运行。' },
    ],
    securityEyebrow: '内置企业级安全',
    securityTitle: '您的网站,享受最高级别保护',
    securityLead: 'SSL、防 DDoS 与 WAF 默认启用、无额外费用。其他服务商单独收费的,这里默认包含。',
    security: [
      { tag: 'SSL', icon: 'lock', title: '内置 SSL 证书', desc: '端到端 HTTPS 加密。浏览器信任、Google Ads 必要条件,并保护客户数据。' },
      { tag: 'DDoS', icon: 'shield', title: '防 DDoS', desc: '在到达您的网站之前,我们过滤并吸收拒绝服务攻击。' },
      { tag: 'WAF', icon: 'security', title: '应用防火墙(WAF)', desc: '对每个请求进行实时分析。拦截代码注入、未授权访问与漏洞利用。' },
    ],
    stats: [
      { v: '17', l: '深耕行业年数', primary: true },
      { v: '+350', l: '已交付网站' },
      { v: '+100', l: 'IT 专家' },
    ],
    ctaTitle: '准备好启动您的网站项目了吗?',
    ctaLead: '演示中,我们以与您规模相当的经销商真实案例展示哪个档位最契合、上线所需时间。',
    ctaButton: '申请定制演示',
    tiers: [
      { key: 'platinum', name: 'Platinum', subtitle: '完整经销商网站', idealFor: '集团与官方经销商:涵盖二手、新车、租赁与售后,希望在 Motorflash 基础设施上打造旗舰网站。', icon: 'workspace_premium', highlight: true, bullets: [
        '涵盖所有板块:二手、新车、租赁、售后、企业内容、车辆估值',
        '多品牌 / 多体系(Audi、VW……)',
        '二手与新车库存发布(DMS、Dealer、XML feed)',
        '含视频、支付网关与融资计算器的高级详情页',
        '自管 CMS(落地页、横幅、表单)',
        '原生集成:CRM4YOU、MF Message、潜客管理',
        '实时 KPI 仪表板',
        '初始 SEO、GA4、CMS 培训(3 小时)、维护与托管全包',
      ] },
      { key: 'silver', name: 'Silver', subtitle: '将您的库存嵌入任意网站', idealFor: '已有自有网站的经销商:希望嵌入一个强大且高转化的车辆搜索器,无需重做现有站点。', icon: 'extension', highlight: false, bullets: [
        '提供库存列表 URL,可嵌入您的现有网站',
        '搜索、对比与收藏',
        '含照片、视频、参数与 CTA 的详情页',
        '虚拟 POS(Paypal、Addon Payment、Redsys、Rapid Pay)',
        '融资计算器(融资价格与月供)',
        'Motorflash 集成:CRM4YOU、MF Message、潜客管理',
        '适配客户网站的字体与样式',
        '随时可升级至 Platinum',
      ] },
      { key: 'unica', name: 'Única', subtitle: '入门级的实用网站', idealFor: '需要快速上线的经销商:提供获取潜客所需的最基本功能,不增加复杂度。', icon: 'rocket_launch', highlight: false, bullets: [
        '首页 + 列表 + 标准详情页',
        '维修预约与车辆估值',
        '门店与营业时间、关于我们',
        '法律声明、隐私与 Cookies',
        '转化:通用联系、详情页潜客、维修预约、估值',
        '可连接 CRM4YOU 或外部 CRM(邮件 / JSONLEAD)',
        '不含支付网关、搜索提醒或租赁',
        '承诺期最短,适合起步',
      ] },
    ],
  },
}

function Check({ v, optLabel }: { v: FeatVal; optLabel: string }) {
  if (v === true) return <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>check_circle</span>
  if (v === 'opt') return <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{optLabel}</span>
  return <span className="text-on-surface-variant/40">—</span>
}

export async function SolucionesWeb() {
  const productSlug = 'soluciones-web'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,128,0,0.1), transparent)' }} />
        <div className="relative z-10 mf-container text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">{t.badge}</span>
          <h1 className="text-5xl md:text-display-lg font-bold mb-6 max-w-4xl mx-auto">
            {t.title1}<span className="text-primary">{t.titleAccent}</span>{t.title3}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">{t.heroLead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">{t.ctaDemo}</Link>
            <Link href={`/precios/${productSlug}`} className="inline-block border border-outline text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-colors">{t.ctaPrices}</Link>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="soluciones" className="py-24 bg-white border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.tiersEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.tiersTitle}</h2>
            <p className="text-on-surface-variant">{t.tiersLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.tiers.map((tier) => (
              <div
                key={tier.key}
                className="group relative transition-transform duration-300 hover:-translate-y-1"
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">{t.recommendedLabel}</span>
                )}
                <div
                  className={`relative h-full rounded-3xl border bg-white p-8 flex flex-col overflow-hidden transition-shadow duration-300 ${tier.highlight ? 'border-primary shadow-xl shadow-primary/10 group-hover:shadow-2xl group-hover:shadow-primary/20' : 'border-outline-variant group-hover:border-primary/40 group-hover:shadow-xl'}`}
                >
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-[0.07] group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle, #ff8000, transparent 70%)' }}
                />
                <div className="relative mb-6 flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: tier.highlight ? 'linear-gradient(135deg, #ff8c1a, #ff7000)' : 'rgba(255,128,0,0.1)' }}
                  >
                    <span
                      className={`material-symbols-outlined ${tier.highlight ? 'text-white' : 'text-primary'}`}
                      style={{ fontSize: 28 }}
                    >
                      {tier.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold leading-tight">{tier.name}</h3>
                    <p className="text-sm text-on-surface-variant leading-snug">{tier.subtitle}</p>
                  </div>
                </div>
                <div className="relative mb-5 pb-5 border-b border-outline-variant">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1.5">{t.idealForLabel}</p>
                  <p className="text-sm leading-relaxed text-on-surface">{tier.idealFor}</p>
                </div>
                <ul className="relative space-y-2.5 mb-6 flex-1">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm">
                      <span className="material-symbols-outlined text-primary shrink-0 mt-0.5" style={{ fontSize: 18 }}>check</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contacto?servicio=${productSlug}&tier=${tier.key}`}
                  className={`relative inline-flex items-center justify-center gap-1.5 w-full text-center px-6 py-3 rounded-xl text-sm font-bold transition-all ${tier.highlight ? 'bg-primary text-white hover:opacity-90 hover:gap-3' : 'border border-outline text-on-surface hover:bg-primary hover:text-white hover:border-primary hover:gap-3'}`}
                >
                  {t.pickTier} {tier.name}
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/precios/${productSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              {t.viewPricesLabel}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.integrationsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.integrationsTitle}</h2>
            <p className="text-on-surface-variant">{t.integrationsLead}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {t.integrations.map((i) => (
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

      {/* Tabla */}
      <section className="py-24 bg-white border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.tableEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">{t.tableTitle}</h2>
          </div>
          <div className="bg-white rounded-3xl border border-outline-variant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-semibold text-on-surface-variant">{t.tableHeadService}</th>
                    <th className="p-4 font-semibold text-primary text-center">{t.tableHeadPlatinum}</th>
                    <th className="p-4 font-semibold text-on-surface text-center">{t.tableHeadSilver}</th>
                    <th className="p-4 font-semibold text-on-surface text-center">{t.tableHeadUnica}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.featureTable.map((sec) => (
                    <Fragment key={sec.section}>
                      <tr className="bg-surface-container-low/60">
                        <td colSpan={4} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">{sec.section}</td>
                      </tr>
                      {sec.items.map((it) => (
                        <tr key={`${sec.section}-${it.label}`} className="border-b border-outline-variant/40">
                          <td className="p-3 pl-4">{it.label}</td>
                          <td className="p-3 text-center"><Check v={it.platinum} optLabel={t.optLabel} /></td>
                          <td className="p-3 text-center"><Check v={it.silver} optLabel={t.optLabel} /></td>
                          <td className="p-3 text-center"><Check v={it.unica} optLabel={t.optLabel} /></td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant text-center mt-4 opacity-70">{t.tableFootnote}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.planEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.planTitle}</h2>
            <p className="text-on-surface-variant">{t.planLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {t.timeline.map((s, i) => (
              <div key={s.day} className="relative bg-surface-container-low border border-outline-variant rounded-2xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3">{s.day}</div>
                <p className="text-xs font-medium text-on-surface leading-snug">{s.text}</p>
                {i < t.timeline.length - 1 && (
                  <span aria-hidden className="hidden md:block absolute top-1/2 -right-2 text-on-surface-variant/30 text-2xl leading-none">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="py-24 bg-white border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.infraEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.infraTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.infra.map((b) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.securityEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.securityTitle}</h2>
            <p className="text-on-surface-variant">{t.securityLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.security.map((b) => (
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
      <section className="py-20 border-y border-outline-variant bg-white">
        <div className="mf-container grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {t.stats.map((s) => (
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
          <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.ctaTitle}</h2>
          <p className="text-lg text-on-surface-variant mb-8">{t.ctaLead}</p>
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">{t.ctaButton}</Link>
        </div>
      </section>
    </div>
  )
}
