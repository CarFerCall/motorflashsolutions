import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

interface Crm4youCopy {
  eyebrowHero: string
  title1: string
  titleAccent: string
  title3: string
  heroLead: string
  ctaDemo: string
  ctaPricing: string
  keysEyebrow: string
  keysTitle: string
  keys: { v: string; l: string; primary?: boolean }[]
  diffEyebrow: string
  diffTitle: string
  diffLead: string
  diffs: { icon: string; title: string; desc: string }[]
  obtainsEyebrow: string
  obtainsTitle: string
  obtainsLead: string
  obtains: { icon: string; title: string; desc: string }[]
  featuresEyebrow: string
  featuresTitle: string
  featuresLead: string
  features: { n: string; title: string; desc: string }[]
  commsEyebrow: string
  commsTitle: string
  commsLead: string
  comms: { icon: string; title: string }[]
  followEyebrow: string
  followTitle: string
  followLead: string
  follow: { icon: string; title: string; desc: string }[]
  planEyebrow: string
  planTitle: string
  planLead: string
  timeline: { week: string; step: string }[]
  stats: { v: string; l: string; primary?: boolean }[]
  ctaTitle: string
  ctaLead: string
  ctaButton: string
}

const COPY: Record<LocaleKey, Crm4youCopy> = {
  es: {
    eyebrowHero: 'CRM4YOU · MOTORFLASH SOLUTIONS',
    title1: 'Un CRM para ',
    titleAccent: 'TODO',
    title3: '. Y más.',
    heroLead: 'El único CRM creado por y para concesionarios y multimarcas. Stock, leads, comunicación, financiación, documentación y reporting en una sola plataforma. Sin reporting declarativo: todo se reporta solo.',
    ctaDemo: 'Solicitar Demo',
    ctaPricing: 'Ver tarifas en /precios',
    keysEyebrow: 'LAS CLAVES',
    keysTitle: 'Una plataforma diseñada para tu sector y tu volumen',
    keys: [
      { v: '+1.750', l: 'Grupos, concesionarios y multimarcas' },
      { v: '4.000', l: 'KPIs disponibles. Aunque solo uses 20.', primary: true },
      { v: '+30.000', l: 'Horas de desarrollo propio' },
      { v: '100 %', l: 'Adaptable al sector de la automoción' },
    ],
    diffEyebrow: 'QUÉ NOS HACE DIFERENTES',
    diffTitle: 'No es un CRM genérico. Es un CRM de automoción.',
    diffLead: 'Llevamos 4 años adaptando la plataforma a los requerimientos reales de concesionarios y grupos. Tu equipo no se adapta al CRM — el CRM se adapta a tu equipo.',
    diffs: [
      { icon: 'inventory', title: 'Pioneros en gestión de stock', desc: 'Multipublica, comercializa y vende en UNA sola herramienta. No saltas entre sistemas para vender un coche.' },
      { icon: 'tune', title: '100 % adaptable a tu negocio', desc: 'El único CRM del sector customizable. Crea flujos de trabajo, automatismos y campañas, apoyados con IA.' },
      { icon: 'corporate_fare', title: 'Pensado para GRUPOS', desc: 'Única plataforma diseñada para grupos de concesionarios. Imputas datos en una sola plataforma independiente a las marcas con las que trabajes.' },
      { icon: 'description', title: 'Gestor documental al click', desc: 'Ofertas, reservas, contratos, mandato, factura proforma, garantía. Integración con herramientas de financiación incluida.' },
    ],
    obtainsEyebrow: 'OBTENIBLES CON CRM4YOU',
    obtainsTitle: 'Esto es lo que sabes mañana si lo implantas hoy',
    obtainsLead: 'Datos reales, en vivo, sin que nadie tenga que rellenarlos a mano. Lo que tu director comercial pide cada lunes — pero generado solo.',
    obtains: [
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
    ],
    featuresEyebrow: '12 PIEZAS QUE CASAN SOLAS',
    featuresTitle: 'Todo lo que necesitas en una sola plataforma',
    featuresLead: 'De la captura del lead a la entrega del coche, pasando por financiación, marketing y reporting. Sin saltar entre sistemas.',
    features: [
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
    ],
    commsEyebrow: 'SISTEMA DE COMUNICACIÓN PROPIO',
    commsTitle: 'Tu cliente te escribe por donde quiere. Tú le respondes desde un solo sitio.',
    commsLead: 'Telefonía, WhatsApp, email y centralita virtual integrados en el propio CRM, con copiloto de IA que analiza la actividad comercial.',
    comms: [
      { icon: 'chat', title: 'WhatsApp Business API + App móvil' },
      { icon: 'call', title: 'Telefonía VOZ IP, DDI y gestión de centralita' },
      { icon: 'cell_tower', title: 'GSM móvil + grabaciones en tiempo real' },
      { icon: 'phone_in_talk', title: 'App tracking de llamadas' },
      { icon: 'mail', title: 'Integración de correo electrónico' },
      { icon: 'contact_phone', title: 'Vcard: contacto del cliente integrado en móvil' },
      { icon: 'auto_awesome', title: 'Copiloto de IA para análisis de actividad comercial' },
    ],
    followEyebrow: 'SEGUIMIENTO EXHAUSTIVO',
    followTitle: 'Todo lo que pasa, registrado. Nada se pierde en el camino.',
    followLead: 'Cada lead, cada llamada, cada movimiento de stock y cada euro queda registrado y disponible para análisis.',
    follow: [
      { icon: 'person', title: 'Cliente', desc: 'Todos sus leads, interacciones y evolución a lo largo del tiempo.' },
      { icon: 'badge', title: 'Comercial', desc: 'Toda la actividad realizada por cada agente, en tiempo real.' },
      { icon: 'directions_car', title: 'Vehículos', desc: 'Estadísticas nativas y en vivo de cada coche en stock.' },
      { icon: 'savings', title: 'Costes y ventas', desc: 'Análisis detallado y evolutivo por concesión y por marca.' },
    ],
    planEyebrow: 'PLAN DE TRABAJO',
    planTitle: 'En 2 semanas estás vendiendo desde CRM4YOU',
    planLead: 'Sin migraciones eternas. Recogemos tus datos, configuramos canales y licencias, formamos a tu equipo y arrancas.',
    timeline: [
      { week: 'Semana 1', step: 'Firma de contrato' },
      { week: 'Semana 1', step: 'Recogida de datos, usuarios y configuración' },
      { week: 'Semana 1', step: 'Configuración de CRM4YOU, canales y licencias' },
      { week: 'Semana 2', step: 'Formación al equipo' },
      { week: 'Semana 2', step: 'Listo para vender desde CRM4YOU' },
    ],
    stats: [
      { v: '17', l: 'AÑOS EN EL SECTOR', primary: true },
      { v: '+950', l: 'LICENCIAS CRM IMPLANTADAS EN UN AÑO' },
      { v: '+100', l: 'ESPECIALISTAS IT' },
      { v: '+350', l: 'WEBS DESARROLLADAS' },
    ],
    ctaTitle: '¿Cambiarías de CRM si vieras un caso real de tu sector?',
    ctaLead: 'Solicita una demo de 30 minutos con un caso real de un grupo de tu tamaño. Te enseñamos cómo se configura, cómo se reporta y cuánto tarda en estar operativo.',
    ctaButton: 'Solicitar Demo Personalizada',
  },
  ca: {
    eyebrowHero: 'CRM4YOU · MOTORFLASH SOLUTIONS',
    title1: 'Un CRM per a ',
    titleAccent: 'TOT',
    title3: '. I més.',
    heroLead: "L'únic CRM creat per i per a concessionaris i multimarques. Estoc, leads, comunicació, finançament, documentació i reporting en una sola plataforma. Sense reporting declaratiu: tot es reporta sol.",
    ctaDemo: 'Sol·licita Demo',
    ctaPricing: 'Veure tarifes a /precios',
    keysEyebrow: 'LES CLAUS',
    keysTitle: 'Una plataforma dissenyada per al teu sector i el teu volum',
    keys: [
      { v: '+1.750', l: 'Grups, concessionaris i multimarques' },
      { v: '4.000', l: 'KPIs disponibles. Tot i que només n\'usis 20.', primary: true },
      { v: '+30.000', l: 'Hores de desenvolupament propi' },
      { v: '100 %', l: "Adaptable al sector de l'automoció" },
    ],
    diffEyebrow: 'QUÈ ENS FA DIFERENTS',
    diffTitle: "No és un CRM genèric. És un CRM d'automoció.",
    diffLead: "Portem 4 anys adaptant la plataforma als requeriments reals de concessionaris i grups. El teu equip no s'adapta al CRM — el CRM s'adapta al teu equip.",
    diffs: [
      { icon: 'inventory', title: "Pioners en gestió d'estoc", desc: 'Multipublica, comercialitza i ven en UNA sola eina. No saltes entre sistemes per vendre un cotxe.' },
      { icon: 'tune', title: '100 % adaptable al teu negoci', desc: "L'únic CRM del sector customitzable. Crea fluxos de treball, automatismes i campanyes, recolzats amb IA." },
      { icon: 'corporate_fare', title: 'Pensat per a GRUPS', desc: 'Única plataforma dissenyada per a grups de concessionaris. Imputes dades en una sola plataforma independent de les marques amb què treballis.' },
      { icon: 'description', title: 'Gestor documental al clic', desc: 'Ofertes, reserves, contractes, mandat, factura proforma, garantia. Integració amb eines de finançament inclosa.' },
    ],
    obtainsEyebrow: 'OBTINGUDES AMB CRM4YOU',
    obtainsTitle: "Això és el que saps demà si ho implantes avui",
    obtainsLead: "Dades reals, en directe, sense que ningú les hagi d'omplir a mà. El que el teu director comercial demana cada dilluns — però generat sol.",
    obtains: [
      { icon: 'analytics', title: 'Ràtio de conversió', desc: 'Per comercial, portal, font de trànsit i concessionari.' },
      { icon: 'paid', title: 'Cost per lead i per venda', desc: 'Real, sense interpretacions ni fulls Excel.' },
      { icon: 'sell', title: "Informes de vendes, rotació i estoc", desc: 'En temps real, exportables i comparables.' },
      { icon: 'timer', title: 'Temps de resposta a clients', desc: 'Controla quant triga cada comercial a contestar cada lead.' },
      { icon: 'campaign', title: 'Traçabilitat de campanyes', desc: 'De màrqueting fins a la venda, amb atribució real.' },
      { icon: 'support', title: 'Mòdul de Postvenda', desc: 'Atenció dedicada per als equips de Postvenda.' },
      { icon: 'price_check', title: 'Taxació integrada', desc: 'Mòdul de taxació natiu dins del CRM.' },
      { icon: 'groups', title: 'Visió consolidada de clients', desc: 'Per client consolidat o per leads generats.' },
      { icon: 'account_balance', title: 'Control de finançaments', desc: 'Totes les sol·licituds de finançament en un sol lloc.' },
      { icon: 'monitoring', title: "Anàlisi de mercat de l'estoc", desc: 'Compara cada vehicle amb tots els similars publicats als portals.' },
    ],
    featuresEyebrow: '12 PECES QUE CASEN SOLES',
    featuresTitle: 'Tot el que necessites en una sola plataforma',
    featuresLead: "De la captura del lead a l'entrega del cotxe, passant per finançament, màrqueting i reporting. Sense saltar entre sistemes.",
    features: [
      { n: '01', title: 'El teu flux de venda', desc: 'Configurat a la teva mida, etapa a etapa.' },
      { n: '02', title: 'Evolutius', desc: 'Roadmap continu del producte basat en les teves necessitats.' },
      { n: '03', title: 'Dades del vehicle', desc: 'Multitud de camps natius i personalitzables per vehicle.' },
      { n: '04', title: "Gràfics d'estoc", desc: 'Rotació, antiguitat i mix per marca/model en directe.' },
      { n: '05', title: 'Agenda comercial', desc: 'Cites, trucades i tasques centralitzades per comercial.' },
      { n: '06', title: "Analítica d'inversions", desc: 'ROI per marca, per proveïdor i per canal de captació.' },
      { n: '07', title: 'Analítica de producte', desc: 'Què es ven, a qui i per què — sense reports manuals.' },
      { n: '08', title: 'Mòdul financer', desc: 'Sol·licituds, ofertes i seguiment amb totes les financeres.' },
      { n: '09', title: 'Una o múltiples oportunitats', desc: "Diversos cotxes i múltiples deals en una sola fitxa de client." },
      { n: '10', title: 'Automatismes i màrqueting', desc: 'Campanyes, seqüències i regles que s\'executen soles.' },
      { n: '11', title: 'Informe de vendes', desc: 'Comercial, concessionari, marca, mes — el que et faci falta.' },
      { n: '12', title: 'Documentació al clic', desc: 'Ofertes, contractes, mandats, factures i garanties generats.' },
    ],
    commsEyebrow: 'SISTEMA DE COMUNICACIÓ PROPI',
    commsTitle: "El teu client t'escriu per on vol. Tu li respons des d'un sol lloc.",
    commsLead: "Telefonia, WhatsApp, correu i centraleta virtual integrats al propi CRM, amb copilot d'IA que analitza l'activitat comercial.",
    comms: [
      { icon: 'chat', title: 'WhatsApp Business API + App mòbil' },
      { icon: 'call', title: 'Telefonia VOZ IP, DDI i gestió de centraleta' },
      { icon: 'cell_tower', title: 'GSM mòbil + gravacions en temps real' },
      { icon: 'phone_in_talk', title: 'App tracking de trucades' },
      { icon: 'mail', title: 'Integració de correu electrònic' },
      { icon: 'contact_phone', title: 'Vcard: contacte del client integrat al mòbil' },
      { icon: 'auto_awesome', title: "Copilot d'IA per a anàlisi d'activitat comercial" },
    ],
    followEyebrow: 'SEGUIMENT EXHAUSTIU',
    followTitle: 'Tot el que passa, registrat. Res es perd pel camí.',
    followLead: 'Cada lead, cada trucada, cada moviment d\'estoc i cada euro queda registrat i disponible per a anàlisi.',
    follow: [
      { icon: 'person', title: 'Client', desc: 'Tots els seus leads, interaccions i evolució al llarg del temps.' },
      { icon: 'badge', title: 'Comercial', desc: 'Tota l\'activitat realitzada per cada agent, en temps real.' },
      { icon: 'directions_car', title: 'Vehicles', desc: 'Estadístiques natives i en directe de cada cotxe en estoc.' },
      { icon: 'savings', title: 'Costos i vendes', desc: 'Anàlisi detallada i evolutiva per concessió i per marca.' },
    ],
    planEyebrow: 'PLA DE TREBALL',
    planTitle: 'En 2 setmanes estàs venent des de CRM4YOU',
    planLead: 'Sense migracions eternes. Recollim les teves dades, configurem canals i llicències, formem el teu equip i arrenques.',
    timeline: [
      { week: 'Setmana 1', step: 'Signatura de contracte' },
      { week: 'Setmana 1', step: 'Recollida de dades, usuaris i configuració' },
      { week: 'Setmana 1', step: 'Configuració de CRM4YOU, canals i llicències' },
      { week: 'Setmana 2', step: "Formació a l'equip" },
      { week: 'Setmana 2', step: 'A punt per vendre des de CRM4YOU' },
    ],
    stats: [
      { v: '17', l: 'ANYS AL SECTOR', primary: true },
      { v: '+950', l: "LLICÈNCIES CRM IMPLANTADES EN UN ANY" },
      { v: '+100', l: 'ESPECIALISTES IT' },
      { v: '+350', l: 'WEBS DESENVOLUPADES' },
    ],
    ctaTitle: 'Canviaries de CRM si veiessis un cas real del teu sector?',
    ctaLead: "Sol·licita una demo de 30 minuts amb un cas real d'un grup de la teva mida. T'ensenyem com es configura, com es reporta i quant triga a ser operatiu.",
    ctaButton: 'Sol·licitar Demo Personalitzada',
  },
  en: {
    eyebrowHero: 'CRM4YOU · MOTORFLASH SOLUTIONS',
    title1: 'A CRM for ',
    titleAccent: 'EVERYTHING',
    title3: '. And then some.',
    heroLead: 'The only CRM built by and for dealerships and multi-brand groups. Stock, leads, communication, financing, documentation and reporting in one platform. No declarative reporting: everything reports itself.',
    ctaDemo: 'Request a demo',
    ctaPricing: 'See pricing in /precios',
    keysEyebrow: 'THE KEYS',
    keysTitle: 'A platform designed for your sector and your volume',
    keys: [
      { v: '+1,750', l: 'Groups, dealerships and multi-brand operators' },
      { v: '4,000', l: 'KPIs available. Even if you only use 20.', primary: true },
      { v: '+30,000', l: 'Hours of proprietary development' },
      { v: '100 %', l: 'Adaptable to the automotive sector' },
    ],
    diffEyebrow: 'WHAT MAKES US DIFFERENT',
    diffTitle: "It's not a generic CRM. It's an automotive CRM.",
    diffLead: "We've spent 4 years tailoring the platform to the real requirements of dealerships and groups. Your team doesn't adapt to the CRM — the CRM adapts to your team.",
    diffs: [
      { icon: 'inventory', title: 'Pioneers in stock management', desc: 'Multi-publish, market and sell in ONE single tool. No system-hopping to sell a car.' },
      { icon: 'tune', title: '100 % adaptable to your business', desc: 'The only customisable CRM in the sector. Build workflows, automations and campaigns, AI-powered.' },
      { icon: 'corporate_fare', title: 'Built for GROUPS', desc: 'The only platform designed for dealership groups. Enter data once on a single platform, regardless of the brands you work with.' },
      { icon: 'description', title: 'One-click document manager', desc: 'Offers, reservations, contracts, mandates, pro-forma invoices, warranties. Financing tool integration included.' },
    ],
    obtainsEyebrow: 'WHAT YOU GET WITH CRM4YOU',
    obtainsTitle: "Here's what you know tomorrow if you roll it out today",
    obtainsLead: "Real-time data, live, with no manual entry. What your sales director asks for every Monday — generated automatically.",
    obtains: [
      { icon: 'analytics', title: 'Conversion rate', desc: 'By rep, portal, traffic source and dealership.' },
      { icon: 'paid', title: 'Cost per lead and per sale', desc: 'Real, no interpretations or Excel sheets.' },
      { icon: 'sell', title: 'Sales, rotation and stock reports', desc: 'Live, exportable and comparable.' },
      { icon: 'timer', title: 'Customer response time', desc: 'Monitor how long each rep takes to answer each lead.' },
      { icon: 'campaign', title: 'Campaign traceability', desc: 'From marketing to the sale, with real attribution.' },
      { icon: 'support', title: 'After-sales module', desc: 'Dedicated handling for After-sales teams.' },
      { icon: 'price_check', title: 'Built-in appraisal', desc: 'Native appraisal module inside the CRM.' },
      { icon: 'groups', title: 'Consolidated customer view', desc: 'Per consolidated customer or per generated lead.' },
      { icon: 'account_balance', title: 'Financing control', desc: 'Every financing request in one place.' },
      { icon: 'monitoring', title: 'Stock market analysis', desc: 'Compare each vehicle with every similar unit published on portals.' },
    ],
    featuresEyebrow: '12 PIECES THAT FIT TOGETHER',
    featuresTitle: 'Everything you need on a single platform',
    featuresLead: 'From lead capture to vehicle delivery, through financing, marketing and reporting. No system-hopping.',
    features: [
      { n: '01', title: 'Your sales flow', desc: 'Configured to fit, stage by stage.' },
      { n: '02', title: 'Continuous evolution', desc: 'Ongoing product roadmap based on your needs.' },
      { n: '03', title: 'Vehicle data', desc: 'Plenty of native and customisable fields per vehicle.' },
      { n: '04', title: 'Stock charts', desc: 'Rotation, age and mix by make/model live.' },
      { n: '05', title: 'Sales calendar', desc: 'Appointments, calls and tasks centralised per rep.' },
      { n: '06', title: 'Investment analytics', desc: 'ROI by brand, supplier and capture channel.' },
      { n: '07', title: 'Product analytics', desc: 'What sells, to whom and why — no manual reports.' },
      { n: '08', title: 'Financing module', desc: 'Requests, offers and follow-up across every lender.' },
      { n: '09', title: 'One or many opportunities', desc: 'Several cars and multiple deals in one customer record.' },
      { n: '10', title: 'Automation and marketing', desc: 'Campaigns, sequences and rules that run themselves.' },
      { n: '11', title: 'Sales report', desc: 'Per rep, dealership, brand or month — whichever you need.' },
      { n: '12', title: 'One-click documents', desc: 'Offers, contracts, mandates, invoices and warranties generated.' },
    ],
    commsEyebrow: 'PROPRIETARY COMMUNICATIONS SYSTEM',
    commsTitle: 'Your customer writes wherever they want. You answer from one place.',
    commsLead: 'Telephony, WhatsApp, email and virtual PBX integrated into the CRM, with AI co-pilot analysing sales activity.',
    comms: [
      { icon: 'chat', title: 'WhatsApp Business API + mobile app' },
      { icon: 'call', title: 'VOIP, DID and PBX management' },
      { icon: 'cell_tower', title: 'Mobile GSM + live recordings' },
      { icon: 'phone_in_talk', title: 'Call tracking app' },
      { icon: 'mail', title: 'Email integration' },
      { icon: 'contact_phone', title: 'Vcard: customer contact integrated on mobile' },
      { icon: 'auto_awesome', title: 'AI co-pilot for sales activity analysis' },
    ],
    followEyebrow: 'EXHAUSTIVE FOLLOW-UP',
    followTitle: 'Everything that happens, logged. Nothing falls through the cracks.',
    followLead: 'Every lead, every call, every stock movement and every euro is logged and available for analysis.',
    follow: [
      { icon: 'person', title: 'Customer', desc: 'All their leads, interactions and evolution over time.' },
      { icon: 'badge', title: 'Sales rep', desc: 'Every action by each rep, live.' },
      { icon: 'directions_car', title: 'Vehicles', desc: 'Native, live statistics for each car in stock.' },
      { icon: 'savings', title: 'Costs and sales', desc: 'Detailed, evolving analysis per dealership and brand.' },
    ],
    planEyebrow: 'WORK PLAN',
    planTitle: "In 2 weeks you're selling from CRM4YOU",
    planLead: 'No endless migrations. We collect your data, configure channels and licences, train your team and you go live.',
    timeline: [
      { week: 'Week 1', step: 'Contract signing' },
      { week: 'Week 1', step: 'Data gathering, users and configuration' },
      { week: 'Week 1', step: 'CRM4YOU configuration, channels and licences' },
      { week: 'Week 2', step: 'Team training' },
      { week: 'Week 2', step: 'Ready to sell from CRM4YOU' },
    ],
    stats: [
      { v: '17', l: 'YEARS IN THE SECTOR', primary: true },
      { v: '+950', l: 'CRM LICENCES DEPLOYED IN A YEAR' },
      { v: '+100', l: 'IT SPECIALISTS' },
      { v: '+350', l: 'WEBSITES BUILT' },
    ],
    ctaTitle: 'Would you switch CRM if you saw a real case from your sector?',
    ctaLead: 'Request a 30-minute demo with a real case from a group your size. We show how it configures, how it reports and how long it takes to go live.',
    ctaButton: 'Request a personalised demo',
  },
  zh: {
    eyebrowHero: 'CRM4YOU · MOTORFLASH SOLUTIONS',
    title1: '一个面向 ',
    titleAccent: '一切',
    title3: ' 的 CRM。而且更多。',
    heroLead: '业界唯一为经销商与多品牌集团打造的 CRM。库存、潜客、沟通、融资、文档与报告集于一身。无需声明式报告:一切自动生成。',
    ctaDemo: '申请演示',
    ctaPricing: '在 /precios 查看价格',
    keysEyebrow: '关键点',
    keysTitle: '为您的行业与规模而生的平台',
    keys: [
      { v: '+1,750', l: '集团、经销商与多品牌运营商' },
      { v: '4,000', l: '可用 KPI,即便您只用 20 个', primary: true },
      { v: '+30,000', l: '自研开发工时' },
      { v: '100 %', l: '适配汽车行业' },
    ],
    diffEyebrow: '我们的不同',
    diffTitle: '它不是通用 CRM,它是汽车行业的 CRM。',
    diffLead: '我们用 4 年将平台适配到经销商与集团的真实需求。您的团队不必去适应 CRM —— 而是 CRM 适应您的团队。',
    diffs: [
      { icon: 'inventory', title: '库存管理的开创者', desc: '在同一个工具内完成多平台发布、营销与销售。无需在系统间切换。' },
      { icon: 'tune', title: '100% 适应您的业务', desc: '业界唯一可定制的 CRM。基于 AI 创建工作流、自动化与活动。' },
      { icon: 'corporate_fare', title: '为集团而设计', desc: '唯一为经销商集团设计的平台。无论您合作多少品牌,数据集中录入。' },
      { icon: 'description', title: '一键文档管理', desc: '报价、预订、合同、授权、形式发票、保修。含融资工具集成。' },
    ],
    obtainsEyebrow: 'CRM4YOU 能带来的',
    obtainsTitle: '今天部署,明天就能掌握',
    obtainsLead: '真实、实时的数据,无需任何人手工填写。销售总监每周一索要的东西 —— 全部自动生成。',
    obtains: [
      { icon: 'analytics', title: '转化率', desc: '按销售、门户、流量来源与经销店。' },
      { icon: 'paid', title: '潜客与成交成本', desc: '真实数据,无需解读或 Excel 表格。' },
      { icon: 'sell', title: '销售、周转与库存报告', desc: '实时、可导出、可对比。' },
      { icon: 'timer', title: '响应客户的时间', desc: '掌控每位销售对每个潜客的响应时间。' },
      { icon: 'campaign', title: '活动可追溯', desc: '从市场活动到成交,真实归因。' },
      { icon: 'support', title: '售后模块', desc: '为售后团队提供专属服务。' },
      { icon: 'price_check', title: '内置估值', desc: 'CRM 内原生估值模块。' },
      { icon: 'groups', title: '客户整合视图', desc: '按合并客户或所产生的潜客查看。' },
      { icon: 'account_balance', title: '融资管控', desc: '所有融资申请集中一处。' },
      { icon: 'monitoring', title: '库存市场分析', desc: '将每辆车与门户上所有类似车辆对比。' },
    ],
    featuresEyebrow: '12 个无缝拼合的模块',
    featuresTitle: '一站式拥有所需一切',
    featuresLead: '从潜客获取到交车,涵盖融资、营销与报告。无需在系统间切换。',
    features: [
      { n: '01', title: '您的销售流程', desc: '按需定制,逐阶段配置。' },
      { n: '02', title: '持续演进', desc: '基于您需求的持续产品路线图。' },
      { n: '03', title: '车辆数据', desc: '丰富的原生字段与可自定义字段。' },
      { n: '04', title: '库存图表', desc: '按品牌/车型实时呈现周转、车龄与构成。' },
      { n: '05', title: '销售日程', desc: '按销售集中管理预约、电话与任务。' },
      { n: '06', title: '投资分析', desc: '按品牌、供应商与获客渠道的 ROI。' },
      { n: '07', title: '产品分析', desc: '卖出什么、卖给谁、为什么 —— 无需手工报告。' },
      { n: '08', title: '融资模块', desc: '跨各金融机构的申请、报价与跟进。' },
      { n: '09', title: '一项或多项机会', desc: '一份客户档案中可包含多辆车与多笔交易。' },
      { n: '10', title: '自动化与营销', desc: '自动运行的活动、序列与规则。' },
      { n: '11', title: '销售报告', desc: '按销售、经销店、品牌或月份 —— 您所需的任意维度。' },
      { n: '12', title: '一键文档', desc: '生成报价、合同、授权、发票与保修。' },
    ],
    commsEyebrow: '自有沟通系统',
    commsTitle: '客户从哪里写信都行。您只在一个地方回复。',
    commsLead: 'CRM 中集成电话、WhatsApp、邮箱与虚拟总机,具备分析销售活动的 AI 副驾。',
    comms: [
      { icon: 'chat', title: 'WhatsApp Business API + 移动 App' },
      { icon: 'call', title: 'VOIP、DID 与总机管理' },
      { icon: 'cell_tower', title: '移动 GSM + 实时录音' },
      { icon: 'phone_in_talk', title: '通话追踪应用' },
      { icon: 'mail', title: '邮箱集成' },
      { icon: 'contact_phone', title: 'Vcard:客户联系信息整合至手机' },
      { icon: 'auto_awesome', title: '分析销售活动的 AI 副驾' },
    ],
    followEyebrow: '全面跟踪',
    followTitle: '一切事情皆有记录,绝不遗漏。',
    followLead: '每个潜客、每通电话、每次库存变动与每一欧元都会被记录并可供分析。',
    follow: [
      { icon: 'person', title: '客户', desc: '其所有潜客、互动与随时间的演进。' },
      { icon: 'badge', title: '销售', desc: '每位销售的实时活动。' },
      { icon: 'directions_car', title: '车辆', desc: '库存内每辆车的实时原生统计。' },
      { icon: 'savings', title: '成本与销售', desc: '按经销店与品牌的详尽且持续分析。' },
    ],
    planEyebrow: '实施计划',
    planTitle: '2 周内即可基于 CRM4YOU 开始销售',
    planLead: '无需漫长迁移。我们采集数据、配置渠道与许可、培训团队,然后正式启用。',
    timeline: [
      { week: '第 1 周', step: '签署合同' },
      { week: '第 1 周', step: '采集数据、用户与配置' },
      { week: '第 1 周', step: '配置 CRM4YOU、渠道与许可' },
      { week: '第 2 周', step: '团队培训' },
      { week: '第 2 周', step: '可基于 CRM4YOU 进行销售' },
    ],
    stats: [
      { v: '17', l: '深耕行业年数', primary: true },
      { v: '+950', l: '一年内部署的 CRM 许可' },
      { v: '+100', l: 'IT 专家' },
      { v: '+350', l: '已交付网站' },
    ],
    ctaTitle: '看到行业内真实案例后,您愿意更换 CRM 吗?',
    ctaLead: '申请 30 分钟演示,我们用与您规模相当集团的真实案例展示如何配置、如何报告以及上线所需时间。',
    ctaButton: '申请定制演示',
  },
}

export async function Crm4you() {
  const productSlug = 'crm4you'
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <div className="font-display text-on-surface">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 z-0" style={{ background: 'radial-gradient(circle at 20% 100%, rgba(255,128,0,0.10), transparent 60%)' }} />
        <div className="relative z-10 mf-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">{t.eyebrowHero}</span>
            <h1 className="text-5xl md:text-display-lg font-bold mb-6 leading-tight">
              {t.title1}<span className="text-primary">{t.titleAccent}</span>{t.title3}
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl">{t.heroLead}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/contacto?servicio=${productSlug}`} className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">
                {t.ctaDemo}
              </Link>
              <Link href={`/precios#${productSlug}`} className="border border-outline text-on-surface px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-colors">
                {t.ctaPricing}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Claves */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.keysEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold">{t.keysTitle}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {t.keys.map((c) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.diffEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.diffTitle}</h2>
            <p className="text-on-surface-variant">{t.diffLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.diffs.map((d) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.obtainsEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.obtainsTitle}</h2>
            <p className="text-on-surface-variant">{t.obtainsLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.obtains.map((o) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.featuresEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.featuresTitle}</h2>
            <p className="text-on-surface-variant">{t.featuresLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.features.map((f) => (
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

      {/* Comunicación + Seguimiento */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.commsEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.commsTitle}</h2>
              <p className="text-on-surface-variant mb-6">{t.commsLead}</p>
              <ul className="space-y-3">
                {t.comms.map((c) => (
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.followEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.followTitle}</h2>
              <p className="text-on-surface-variant mb-6">{t.followLead}</p>
              <div className="space-y-4">
                {t.follow.map((s) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{t.planEyebrow}</span>
            <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.planTitle}</h2>
            <p className="text-on-surface-variant">{t.planLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {t.timeline.map((row, i) => {
              const isWeek2 = row.week === t.timeline[3]?.week
              return (
                <div key={`${row.step}-${i}`} className="relative bg-surface-container-low border border-outline-variant rounded-2xl p-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3" style={{ fontSize: 14 }}>
                    {i >= 3 ? 'S2' : 'S1'}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">{row.week}</p>
                  <p className="text-sm font-medium text-on-surface leading-snug">{row.step}</p>
                  {i < t.timeline.length - 1 && (
                    <span aria-hidden className="hidden md:block absolute top-1/2 -right-2 text-on-surface-variant/30 text-2xl leading-none">→</span>
                  )}
                  {/* isWeek2 reservado para futura distinción visual */}
                  <span hidden>{String(isWeek2)}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-outline-variant bg-surface-container-low">
        <div className="mf-container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
          <Link href={`/contacto?servicio=${productSlug}`} className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}
