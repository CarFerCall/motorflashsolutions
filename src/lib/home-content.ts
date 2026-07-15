import { cache } from 'react'

export type HomeLocale = 'es' | 'ca' | 'en' | 'zh'

export interface HomeCopy {
  navSections: { anchor: string; label: string }[]
  heroChip: string
  heroTitle1: string
  heroTitleAccent: string
  heroLead: string
  heroCtaServices: string
  heroCtaContact: string
  heroCtaWork: string
  timelineEyebrow: string
  timelineTitle: string
  timelineLead: string
  socialProofPre: string
  socialProofDealers: string
  socialProofMid: string
  socialProofCalls: string
  socialProofMid2: string
  socialProofCars: string
  socialProofPost: string
  aboutEyebrow: string
  aboutTitle: string
  aboutP1Pre: string
  aboutP1Strong: string
  aboutP1Post: string
  aboutP2Pre: string
  aboutP2Strong: string
  aboutP2Post: string
  aboutCta: string
  aboutStats: string[]
  solveEyebrow: string
  solveTitle: string
  solveLead: string
  solveBefore: string
  solveAfter: string
  solveRows: { before: string; after: string; icon: string }[]
  helpEyebrow: string
  helpTitle: string
  helpLead: string
  helpSteps: { t: string; d: string; icon: string }[]
  resultsEyebrow: string
  resultsTitle: string
  resultsLead: string
  resultsStats: { v: number; suffix: string; l: string }[]
  ecoEyebrowAccent: string
  ecoTitle1: string
  ecoTitle2: string
  ecoLead: string
  ecoStatHubs: string
  ecoStatInt: string
  ecoStatEntry: string
  ecoCta: string
  pubAv: {
    navLabel: string
    eyebrow: string
    title1: string
    titleAccent: string
    title2: string
    lead: string
    checks: string[]
    cta: string
    mockExtrasLabel: string
    mockTotalLabel: string
  }
  audiencesEyebrow: string
  audiencesTitle: string
  audiences: { title: string; desc: string; icon: string; tag: string }[]
  testimonialsEyebrow: string
  testimonialsTitle: string
  testimonials: { quote: string; name: string; where: string }[]
  testimonialsNda: string
  testimonialsLink: string
  historyEyebrow: string
  historyTitle: string
  historyLead: string
  historyCta: string
  historyBadgeYears: string
  historyBadgeLead: string
  ctaTitle: string
  ctaLead: string
  ctaPrimary: string
}

export const STATIC_HOME: Record<HomeLocale, HomeCopy> = {
  es: {
    navSections: [
      { anchor: 'home-hero', label: 'Inicio' },
      { anchor: 'catalogo-timeline', label: 'Catálogo en una línea' },
      { anchor: 'sobre-motorflash', label: 'Sobre Motorflash' },
      { anchor: 'que-resolvemos', label: 'Qué resolvemos' },
      { anchor: 'como-te-ayudamos', label: 'Cómo te ayudamos' },
      { anchor: 'resultados-reales', label: 'Resultados reales' },
      { anchor: 'catalogo-productos', label: 'Catálogo de productos' },
      { anchor: 'ecosistema-tecnico-teaser', label: 'Ecosistema técnico' },
      { anchor: 'publicacion-avanzada-teaser', label: 'Publicación avanzada' },
      { anchor: 'para-quien', label: 'Para quién' },
      { anchor: 'testimonios', label: 'Lo que dicen' },
      { anchor: 'nuestra-historia', label: 'Nuestra historia' },
      { anchor: 'contacto-cta', label: 'Hablemos' },
    ],
    heroChip: 'Ecosistema 360 · Automoción',
    heroTitle1: 'La solución 360 para marcas y',
    heroTitleAccent: 'concesionarios del motor',
    heroLead: 'Publicación de stock, CRM, contact center, marketing digital y datos — todo conectado en una sola plataforma para vender más y coordinar mejor a tu equipo.',
    heroCtaServices: 'Ver nuestros servicios',
    heroCtaContact: 'Contactar ahora',
    heroCtaWork: 'Trabaja con nosotros',
    timelineEyebrow: 'Catálogo en una línea',
    timelineTitle: '15 productos. Un único ecosistema.',
    timelineLead: 'Desde la publicación del stock hasta la gestión del fin de renting, cada pieza encaja con el resto. Recorre la línea para verlos todos.',
    socialProofPre: '',
    socialProofDealers: '+1.500 concesionarios',
    socialProofMid: ' usan Motorflash · más de ',
    socialProofCalls: '70.000 llamadas',
    socialProofMid2: ' gestionadas al mes · ',
    socialProofCars: '30.000 vehículos VO publicados',
    socialProofPost: ' al mes',
    aboutEyebrow: 'Sobre Motorflash',
    aboutTitle: 'Tu socio digital en el sector del motor.',
    aboutP1Pre: 'Llevamos ',
    aboutP1Strong: '+20 años',
    aboutP1Post: ' analizando datos, procesos y comportamientos del mercado del VO. Sabemos cómo cambia la demanda, cómo se comportan los usuarios y qué necesitan los equipos de venta para trabajar mejor.',
    aboutP2Pre: 'Hoy somos un equipo de ',
    aboutP2Strong: '+200 especialistas en IT',
    aboutP2Post: '. Publicamos 30K vehículos al mes, exportamos millones de anuncios, gestionamos 70.000 llamadas mensuales y crecemos cada día con talento comprometido con el sector del motor.',
    aboutCta: 'Conocer la compañía',
    aboutStats: ['Años en el sector', 'Clientes activos', 'Facturación 2024', 'Especialistas en IT'],
    solveEyebrow: 'Qué resolvemos',
    solveTitle: 'Stock, leads, portales, web e IA. Todo conectado.',
    solveLead: 'Publicar un coche en cinco portales a mano. Perseguir leads sin un sistema. Llamadas que se quedan sin contestar. Fotos mediocres. Sabemos cuáles son los cuellos de botella del concesionario — y los hemos resuelto uno a uno.',
    solveBefore: 'Antes',
    solveAfter: 'Ahora',
    solveRows: [
      { before: 'Subir el stock portal a portal cada día', after: 'Publicación automática en +50 portales con un clic', icon: 'rocket_launch' },
      { before: 'Fichas con equipamiento incompleto o erróneo', after: 'JATO + EUROTAX unificados en cada vehículo, sin contradicciones', icon: 'merge_type' },
      { before: 'Leads dispersos entre WhatsApp, email y llamadas', after: 'Bandeja única conectada a un CRM especializado', icon: 'inbox' },
      { before: 'Fotos mediocres hechas con el móvil', after: 'IA que retoca cada imagen al instante con calidad de estudio', icon: 'photo_camera' },
      { before: 'Llamadas perdidas fuera del horario', after: 'IA conversacional 24/7 en WhatsApp, web y voz', icon: 'support_agent' },
    ],
    helpEyebrow: 'Cómo te ayudamos',
    helpTitle: 'Del coche en la campa al cliente firmando, sin fricción.',
    helpLead: 'Nuestras herramientas cubren cada fase del ciclo comercial. Funcionan solas pero brillan cuando se combinan.',
    helpSteps: [
      { t: 'Publica', d: 'Stock cargado y publicado en todos los portales con IA optimizando textos y fotos.', icon: 'rocket_launch' },
      { t: 'Capta', d: 'Recibe leads centralizados en CRM4YOU desde web, portales, WhatsApp y campañas.', icon: 'inbox' },
      { t: 'Atiende', d: 'Contact Center humano + IA conversacional cualifican y agendan visitas 24/7.', icon: 'support_agent' },
      { t: 'Vende', d: 'Asesor cierra con todo el contexto del cliente. Reporting de margen y conversión en vivo.', icon: 'sell' },
    ],
    resultsEyebrow: 'Resultados reales',
    resultsTitle: 'Lo que ganan los concesionarios que usan Motorflash',
    resultsLead: 'Cifras medidas en clientes activos durante los últimos 12 meses.',
    resultsStats: [
      { v: 30, suffix: 'h', l: 'Ahorradas al mes por concesionario' },
      { v: 50, suffix: '%', l: 'Más leads cualificados' },
      { v: 25, suffix: '%', l: 'Menos tiempo de gestión' },
      { v: 15, suffix: '%', l: 'Más margen por venta' },
    ],
    ecoEyebrowAccent: 'Ecosistema técnico',
    ecoTitle1: 'Motorflash es el',
    ecoTitle2: 'que conecta todo tu stack de automoción',
    ecoLead: 'Un único punto de integración entre tu DMS (Keyloop, Autoline, Quiter…), los portales (Coches.net, Autoscout24, Wallapop…), tu CRM, las financieras (Santander, CaixaBank, BBVA…), la logística y las bases de datos del sector (JATO, Autovista, Carfax).',
    ecoStatHubs: 'hubs',
    ecoStatInt: 'integraciones',
    ecoStatEntry: 'punto de entrada',
    ecoCta: 'Ver el diagrama completo',
    pubAv: {
      navLabel: 'Publicación avanzada',
      eyebrow: 'Únicos en el mercado',
      title1: 'Publicación',
      titleAccent: 'avanzada',
      title2: 'por matrícula',
      lead: 'Introduce una matrícula y devolvemos la versión exacta, el equipamiento opcional de fábrica y la etiqueta DGT de esa unidad concreta. Datos verificados del fabricante — ningún otro multipublicador lo hace.',
      checks: [
        'Versión, potencia y cilindrada verificadas',
        'Extras de fábrica desglosados con precio unitario',
        'Etiqueta medioambiental DGT correcta',
      ],
      cta: 'Probar la demo con una matrícula',
      mockExtrasLabel: 'Extras de fábrica (12)',
      mockTotalLabel: 'Total verificado',
    },
    audiencesEyebrow: 'Para quién',
    audiencesTitle: 'Tres modelos de negocio. Tres formas de usar Motorflash.',
    audiences: [
      { title: 'Concesionarios independientes', desc: 'Multimarca de proximidad que necesitan profesionalizar la gestión sin perder agilidad. Empiezan con Multipublicador + CRM4YOU y crecen a su ritmo.', icon: 'storefront', tag: 'Pyme · Multimarca' },
      { title: 'Grupos de concesionarios', desc: 'Operadores con múltiples sedes y marcas. Necesitan visión consolidada de stock, leads y rendimiento. CRM4YOU + Contact Center les unifica la operativa.', icon: 'corporate_fare', tag: 'Grupo · Multi-sede' },
      { title: 'Fabricantes y marcas oficiales', desc: 'Buscan coordinar la red de concesionarios, unificar calidad de publicación y obtener métricas a nivel marca. IA + reporting consolidado por país y marca.', icon: 'factory', tag: 'Fabricante · Marca' },
    ],
    testimonialsEyebrow: 'Lo que dicen',
    testimonialsTitle: 'Concesionarios que ya están vendiendo más',
    testimonials: [
      { quote: 'Antes perdíamos llamadas todo el día. Con la IA de Motorflash en WhatsApp captamos un 40% más de leads cualificados — y mi equipo solo atiende los que vienen ya con cita.', name: 'Director comercial', where: 'Grupo multimarca · Cataluña' },
      { quote: 'CRM4YOU nos cambió la operativa. Ahora vemos en tiempo real qué vehículo está moviéndose y qué asesor está cerrando. Toma de decisiones inmediata.', name: 'Gerente', where: 'Concesionario oficial · Madrid' },
      { quote: 'La publicación automática nos liberó cuatro horas diarias de trabajo administrativo. Esas horas las dedicamos a cerrar ventas.', name: 'Responsable de marketing', where: 'Concesionario independiente · Andalucía' },
    ],
    testimonialsNda: 'Casos identificativos disponibles bajo NDA.',
    testimonialsLink: 'Ver historias de éxito completas →',
    historyEyebrow: 'Nuestra historia',
    historyTitle: 'De portal de clasificados a ecosistema digital con IA',
    historyLead: 'Empezamos en 2007 con un portal y Audi Selection Plus como primer gran cliente. Hoy operamos un ecosistema completo: publicación, gestión de stock, CRM, contact center e IA conversacional — todo conectado y respaldado por +20 años de experiencia en el sector.',
    historyCta: 'Ver toda nuestra historia',
    historyBadgeYears: '+20 Años',
    historyBadgeLead: 'Liderando la innovación',
    ctaTitle: '¿Hablamos sobre tu negocio?',
    ctaLead: 'Cuéntanos tu caso y un especialista te llamará en menos de 24 horas para analizar cómo podemos ayudarte a vender más.',
    ctaPrimary: 'Solicitar contacto',
  },
  ca: {
    navSections: [
      { anchor: 'home-hero', label: 'Inici' },
      { anchor: 'catalogo-timeline', label: 'Catàleg en una línia' },
      { anchor: 'sobre-motorflash', label: 'Sobre Motorflash' },
      { anchor: 'que-resolvemos', label: 'Què resolem' },
      { anchor: 'como-te-ayudamos', label: "Com t'ajudem" },
      { anchor: 'resultados-reales', label: 'Resultats reals' },
      { anchor: 'catalogo-productos', label: 'Catàleg de productes' },
      { anchor: 'ecosistema-tecnico-teaser', label: 'Ecosistema tècnic' },
      { anchor: 'publicacion-avanzada-teaser', label: 'Publicació avançada' },
      { anchor: 'para-quien', label: 'Per a qui' },
      { anchor: 'testimonios', label: 'Què en diuen' },
      { anchor: 'nuestra-historia', label: 'La nostra història' },
      { anchor: 'contacto-cta', label: 'Parlem' },
    ],
    heroChip: 'Ecosistema 360 · Automoció',
    heroTitle1: 'La solució 360 per a marques i',
    heroTitleAccent: 'concessionaris del motor',
    heroLead: "Publicació d'estoc, CRM, contact center, màrqueting digital i dades — tot connectat en una sola plataforma per vendre més i coordinar millor el teu equip.",
    heroCtaServices: 'Veure els nostres serveis',
    heroCtaContact: 'Contacta ara',
    heroCtaWork: 'Treballa amb nosaltres',
    timelineEyebrow: 'Catàleg en una línia',
    timelineTitle: '15 productes. Un únic ecosistema.',
    timelineLead: "Des de la publicació de l'estoc fins a la gestió del final del rènting, cada peça encaixa amb la resta. Recorre la línia per veure'ls tots.",
    socialProofPre: '',
    socialProofDealers: '+1.500 concessionaris',
    socialProofMid: ' fan servir Motorflash · més de ',
    socialProofCalls: '70.000 trucades',
    socialProofMid2: ' gestionades al mes · ',
    socialProofCars: '30.000 vehicles VO publicats',
    socialProofPost: ' al mes',
    aboutEyebrow: 'Sobre Motorflash',
    aboutTitle: 'El teu soci digital al sector del motor.',
    aboutP1Pre: 'Portem ',
    aboutP1Strong: '+20 anys',
    aboutP1Post: " analitzant dades, processos i comportaments del mercat del VO. Sabem com canvia la demanda, com es comporten els usuaris i què necessiten els equips de venda per treballar millor.",
    aboutP2Pre: 'Avui som un equip de ',
    aboutP2Strong: '+200 especialistes en IT',
    aboutP2Post: ". Publiquem 30K vehicles al mes, exportem milions d'anuncis, gestionem 70.000 trucades mensuals i creixem cada dia amb talent compromès amb el sector del motor.",
    aboutCta: 'Coneix la companyia',
    aboutStats: ['Anys al sector', 'Clients actius', 'Facturació 2024', 'Especialistes en IT'],
    solveEyebrow: 'Què resolem',
    solveTitle: 'Estoc, leads, portals, web i IA. Tot connectat.',
    solveLead: "Publicar un cotxe a cinc portals manualment. Perseguir leads sense un sistema. Trucades que es queden sense contestar. Fotos mediocres. Sabem quins són els colls d'ampolla del concessionari — i els hem resolt un a un.",
    solveBefore: 'Abans',
    solveAfter: 'Ara',
    solveRows: [
      { before: "Pujar l'estoc portal a portal cada dia", after: 'Publicació automàtica a +50 portals amb un clic', icon: 'rocket_launch' },
      { before: 'Fitxes amb equipament incomplet o erroni', after: 'JATO + EUROTAX unificats a cada vehicle, sense contradiccions', icon: 'merge_type' },
      { before: 'Leads dispersos entre WhatsApp, correu i trucades', after: 'Safata única connectada a un CRM especialitzat', icon: 'inbox' },
      { before: 'Fotos mediocres fetes amb el mòbil', after: "IA que retoca cada imatge a l'instant amb qualitat d'estudi", icon: 'photo_camera' },
      { before: "Trucades perdudes fora d'horari", after: 'IA conversacional 24/7 a WhatsApp, web i veu', icon: 'support_agent' },
    ],
    helpEyebrow: "Com t'ajudem",
    helpTitle: 'Del cotxe al pati al client signant, sense fricció.',
    helpLead: 'Les nostres eines cobreixen cada fase del cicle comercial. Funcionen soles, però brillen quan es combinen.',
    helpSteps: [
      { t: 'Publica', d: 'Estoc carregat i publicat a tots els portals amb IA optimitzant textos i fotos.', icon: 'rocket_launch' },
      { t: 'Capta', d: 'Rep leads centralitzats a CRM4YOU des de web, portals, WhatsApp i campanyes.', icon: 'inbox' },
      { t: 'Atén', d: 'Contact Center humà + IA conversacional qualifiquen i concerten visites 24/7.', icon: 'support_agent' },
      { t: 'Ven', d: 'Assessor tanca amb tot el context del client. Reporting de marge i conversió en directe.', icon: 'sell' },
    ],
    resultsEyebrow: 'Resultats reals',
    resultsTitle: 'El que guanyen els concessionaris que fan servir Motorflash',
    resultsLead: 'Xifres mesurades en clients actius durant els darrers 12 mesos.',
    resultsStats: [
      { v: 30, suffix: 'h', l: 'Estalviades al mes per concessionari' },
      { v: 50, suffix: '%', l: 'Més leads qualificats' },
      { v: 25, suffix: '%', l: 'Menys temps de gestió' },
      { v: 15, suffix: '%', l: 'Més marge per venda' },
    ],
    ecoEyebrowAccent: 'Ecosistema tècnic',
    ecoTitle1: 'Motorflash és el',
    ecoTitle2: "que connecta tot el teu stack d'automoció",
    ecoLead: "Un únic punt d'integració entre el teu DMS (Keyloop, Autoline, Quiter…), els portals (Coches.net, Autoscout24, Wallapop…), el teu CRM, les financeres (Santander, CaixaBank, BBVA…), la logística i les bases de dades del sector (JATO, Autovista, Carfax).",
    ecoStatHubs: 'hubs',
    ecoStatInt: 'integracions',
    ecoStatEntry: "punt d'entrada",
    ecoCta: 'Veure el diagrama complet',
    pubAv: {
      navLabel: 'Publicació avançada',
      eyebrow: 'Únics al mercat',
      title1: 'Publicació',
      titleAccent: 'avançada',
      title2: 'per matrícula',
      lead: "Introdueix una matrícula i retornem la versió exacta, l'equipament opcional de fàbrica i l'etiqueta DGT d'aquesta unitat concreta. Dades verificades del fabricant — cap altre multipublicador ho fa.",
      checks: [
        'Versió, potència i cilindrada verificades',
        'Extres de fàbrica desglossats amb preu unitari',
        'Etiqueta mediambiental DGT correcta',
      ],
      cta: 'Prova la demo amb una matrícula',
      mockExtrasLabel: 'Extres de fàbrica (12)',
      mockTotalLabel: 'Total verificat',
    },
    audiencesEyebrow: 'Per a qui',
    audiencesTitle: 'Tres models de negoci. Tres maneres de fer servir Motorflash.',
    audiences: [
      { title: 'Concessionaris independents', desc: 'Multimarca de proximitat que necessiten professionalitzar la gestió sense perdre agilitat. Comencen amb Multipublicador + CRM4YOU i creixen al seu ritme.', icon: 'storefront', tag: 'Pime · Multimarca' },
      { title: 'Grups de concessionaris', desc: "Operadors amb múltiples seus i marques. Necessiten visió consolidada d'estoc, leads i rendiment. CRM4YOU + Contact Center els unifica l'operativa.", icon: 'corporate_fare', tag: 'Grup · Multiseu' },
      { title: 'Fabricants i marques oficials', desc: 'Volen coordinar la xarxa de concessionaris, unificar qualitat de publicació i obtenir mètriques a nivell de marca. IA + reporting consolidat per país i marca.', icon: 'factory', tag: 'Fabricant · Marca' },
    ],
    testimonialsEyebrow: 'Què en diuen',
    testimonialsTitle: 'Concessionaris que ja estan venent més',
    testimonials: [
      { quote: "Abans perdíem trucades tot el dia. Amb la IA de Motorflash a WhatsApp captem un 40% més de leads qualificats — i el meu equip només atén els que vénen ja amb cita.", name: 'Director comercial', where: 'Grup multimarca · Catalunya' },
      { quote: "CRM4YOU ens va canviar l'operativa. Ara veiem en temps real quin vehicle es mou i quin assessor està tancant. Presa de decisions immediata.", name: 'Gerent', where: 'Concessionari oficial · Madrid' },
      { quote: 'La publicació automàtica ens va alliberar quatre hores diàries de feina administrativa. Aquestes hores les dediquem a tancar vendes.', name: 'Responsable de màrqueting', where: 'Concessionari independent · Andalusia' },
    ],
    testimonialsNda: 'Casos identificatius disponibles sota NDA.',
    testimonialsLink: "Veure històries d'èxit completes →",
    historyEyebrow: 'La nostra història',
    historyTitle: 'De portal de classificats a ecosistema digital amb IA',
    historyLead: "Vam començar el 2007 amb un portal i Audi Selection Plus com a primer gran client. Avui operem un ecosistema complet: publicació, gestió d'estoc, CRM, contact center i IA conversacional — tot connectat i avalat per +20 anys d'experiència al sector.",
    historyCta: 'Veure tota la nostra història',
    historyBadgeYears: '+20 Anys',
    historyBadgeLead: 'Liderant la innovació',
    ctaTitle: 'Parlem del teu negoci?',
    ctaLead: "Explica'ns el teu cas i un especialista et trucarà en menys de 24 hores per analitzar com podem ajudar-te a vendre més.",
    ctaPrimary: 'Sol·licita contacte',
  },
  en: {
    navSections: [
      { anchor: 'home-hero', label: 'Home' },
      { anchor: 'catalogo-timeline', label: 'Catalogue in one line' },
      { anchor: 'sobre-motorflash', label: 'About Motorflash' },
      { anchor: 'que-resolvemos', label: 'What we solve' },
      { anchor: 'como-te-ayudamos', label: 'How we help you' },
      { anchor: 'resultados-reales', label: 'Real results' },
      { anchor: 'catalogo-productos', label: 'Product catalogue' },
      { anchor: 'ecosistema-tecnico-teaser', label: 'Tech ecosystem' },
      { anchor: 'publicacion-avanzada-teaser', label: 'Advanced publishing' },
      { anchor: 'para-quien', label: "Who it's for" },
      { anchor: 'testimonios', label: 'What they say' },
      { anchor: 'nuestra-historia', label: 'Our story' },
      { anchor: 'contacto-cta', label: "Let's talk" },
    ],
    heroChip: '360 ecosystem · Automotive',
    heroTitle1: 'The 360 solution for brands and',
    heroTitleAccent: 'automotive dealerships',
    heroLead: 'Stock publishing, CRM, contact center, digital marketing and data — all connected in a single platform to sell more and run your team better.',
    heroCtaServices: 'Explore our services',
    heroCtaContact: 'Contact us now',
    heroCtaWork: 'Work with us',
    timelineEyebrow: 'The full catalogue in one line',
    timelineTitle: '15 products. One single ecosystem.',
    timelineLead: 'From publishing your stock to managing end-of-leasing, every piece clicks into place. Slide through the timeline to see them all.',
    socialProofPre: '',
    socialProofDealers: '+1,500 dealerships',
    socialProofMid: ' use Motorflash · over ',
    socialProofCalls: '70,000 calls',
    socialProofMid2: ' handled per month · ',
    socialProofCars: '30,000 used vehicles published',
    socialProofPost: ' per month',
    aboutEyebrow: 'About Motorflash',
    aboutTitle: 'Your digital partner in the automotive sector.',
    aboutP1Pre: 'For ',
    aboutP1Strong: 'over 20 years',
    aboutP1Post: " we've been analysing data, processes and behaviour in the used vehicle market. We know how demand shifts, how users behave and what sales teams need to work better.",
    aboutP2Pre: 'Today we are a team of ',
    aboutP2Strong: '200+ IT specialists',
    aboutP2Post: '. We publish 30K vehicles a month, export millions of listings, handle 70,000 monthly calls and keep growing with talent committed to the automotive industry.',
    aboutCta: 'Get to know the company',
    aboutStats: ['Years in the sector', 'Active clients', '2024 revenue', 'IT specialists'],
    solveEyebrow: 'What we solve',
    solveTitle: 'Stock, leads, portals, web and AI. All connected.',
    solveLead: "Publishing one car across five portals by hand. Chasing leads without a system. Calls that go unanswered. Mediocre photos. We know the dealership's bottlenecks — and we've solved them one by one.",
    solveBefore: 'Before',
    solveAfter: 'Now',
    solveRows: [
      { before: 'Uploading stock portal by portal every day', after: 'Automatic publishing across 50+ portals in one click', icon: 'rocket_launch' },
      { before: 'Listings with incomplete or wrong trim data', after: 'JATO + EUROTAX unified on every vehicle, no contradictions', icon: 'merge_type' },
      { before: 'Leads scattered across WhatsApp, email and calls', after: 'Single inbox connected to a specialised CRM', icon: 'inbox' },
      { before: 'Mediocre phone photos', after: 'AI that retouches every image instantly with studio quality', icon: 'photo_camera' },
      { before: 'Missed calls outside business hours', after: '24/7 conversational AI on WhatsApp, web and voice', icon: 'support_agent' },
    ],
    helpEyebrow: 'How we help you',
    helpTitle: 'From the lot to the signed deal, with zero friction.',
    helpLead: 'Our tools cover every phase of the sales cycle. They work on their own but shine when combined.',
    helpSteps: [
      { t: 'Publish', d: 'Stock loaded and published across every portal with AI optimising copy and photos.', icon: 'rocket_launch' },
      { t: 'Capture', d: 'Receive centralised leads in CRM4YOU from web, portals, WhatsApp and campaigns.', icon: 'inbox' },
      { t: 'Engage', d: 'Human Contact Center + conversational AI qualify and book visits 24/7.', icon: 'support_agent' },
      { t: 'Sell', d: 'Advisor closes with full customer context. Live margin and conversion reporting.', icon: 'sell' },
    ],
    resultsEyebrow: 'Real results',
    resultsTitle: 'What dealerships gain when they use Motorflash',
    resultsLead: 'Numbers measured across active clients over the past 12 months.',
    resultsStats: [
      { v: 30, suffix: 'h', l: 'Saved per month per dealership' },
      { v: 50, suffix: '%', l: 'More qualified leads' },
      { v: 25, suffix: '%', l: 'Less management time' },
      { v: 15, suffix: '%', l: 'More margin per sale' },
    ],
    ecoEyebrowAccent: 'Tech ecosystem',
    ecoTitle1: 'Motorflash is the',
    ecoTitle2: 'that connects your entire automotive stack',
    ecoLead: 'A single integration point between your DMS (Keyloop, Autoline, Quiter…), the portals (Coches.net, Autoscout24, Wallapop…), your CRM, lenders (Santander, CaixaBank, BBVA…), logistics and sector databases (JATO, Autovista, Carfax).',
    ecoStatHubs: 'hubs',
    ecoStatInt: 'integrations',
    ecoStatEntry: 'entry point',
    ecoCta: 'See the full diagram',
    pubAv: {
      navLabel: 'Advanced publishing',
      eyebrow: 'Unique in the market',
      title1: 'Advanced',
      titleAccent: 'publishing',
      title2: 'by plate',
      lead: "Enter a plate and we return the exact version, the factory-fitted optional equipment and the DGT eco label for that specific unit. Verified manufacturer data — no other multipublisher does this.",
      checks: [
        'Version, power and displacement verified',
        'Factory extras itemised with unit price',
        'Correct DGT eco label',
      ],
      cta: 'Try the demo with a plate',
      mockExtrasLabel: 'Factory extras (12)',
      mockTotalLabel: 'Verified total',
    },
    audiencesEyebrow: "Who it's for",
    audiencesTitle: 'Three business models. Three ways to use Motorflash.',
    audiences: [
      { title: 'Independent dealerships', desc: 'Local multi-brand operators that need to professionalise without losing agility. They start with Multipublisher + CRM4YOU and scale at their own pace.', icon: 'storefront', tag: 'SMB · Multi-brand' },
      { title: 'Dealership groups', desc: 'Operators with multiple sites and brands. They need consolidated visibility of stock, leads and performance. CRM4YOU + Contact Center unifies their operation.', icon: 'corporate_fare', tag: 'Group · Multi-site' },
      { title: 'Manufacturers and official brands', desc: 'They look to coordinate the dealer network, standardise listing quality and get brand-level metrics. AI + consolidated reporting per country and brand.', icon: 'factory', tag: 'OEM · Brand' },
    ],
    testimonialsEyebrow: 'What they say',
    testimonialsTitle: 'Dealerships already selling more',
    testimonials: [
      { quote: 'We used to miss calls all day. With Motorflash AI on WhatsApp we capture 40% more qualified leads — and my team only handles the ones who arrive with an appointment.', name: 'Sales director', where: 'Multi-brand group · Catalonia' },
      { quote: 'CRM4YOU changed our operation. Now we see in real time which vehicle is moving and which advisor is closing. Decisions on the spot.', name: 'Manager', where: 'Official dealership · Madrid' },
      { quote: 'Automatic publishing freed up four hours of admin work a day. We invest those hours in closing sales.', name: 'Head of marketing', where: 'Independent dealership · Andalusia' },
    ],
    testimonialsNda: 'Identifiable cases available under NDA.',
    testimonialsLink: 'See full success stories →',
    historyEyebrow: 'Our story',
    historyTitle: 'From classifieds portal to AI-powered digital ecosystem',
    historyLead: 'We started in 2007 with a portal and Audi Selection Plus as our first major client. Today we run a complete ecosystem: publication, stock management, CRM, contact center and conversational AI — all connected and backed by 20+ years of sector experience.',
    historyCta: 'See our full story',
    historyBadgeYears: '20+ Years',
    historyBadgeLead: 'Leading innovation',
    ctaTitle: 'Shall we talk about your business?',
    ctaLead: 'Tell us your case and a specialist will call you within 24 hours to analyse how we can help you sell more.',
    ctaPrimary: 'Request contact',
  },
  zh: {
    navSections: [
      { anchor: 'home-hero', label: '首页' },
      { anchor: 'catalogo-timeline', label: '一条线上的目录' },
      { anchor: 'sobre-motorflash', label: '关于 Motorflash' },
      { anchor: 'que-resolvemos', label: '我们解决什么' },
      { anchor: 'como-te-ayudamos', label: '我们如何帮助您' },
      { anchor: 'resultados-reales', label: '真实成果' },
      { anchor: 'catalogo-productos', label: '产品目录' },
      { anchor: 'ecosistema-tecnico-teaser', label: '技术生态' },
      { anchor: 'publicacion-avanzada-teaser', label: '高级发布' },
      { anchor: 'para-quien', label: '适用对象' },
      { anchor: 'testimonios', label: '他们怎么说' },
      { anchor: 'nuestra-historia', label: '我们的故事' },
      { anchor: 'contacto-cta', label: '聊一聊' },
    ],
    heroChip: '360 生态 · 汽车行业',
    heroTitle1: '面向品牌与',
    heroTitleAccent: '汽车经销商的 360 解决方案',
    heroLead: '库存发布、CRM、Contact Center、数字营销与数据 —— 全部集中在一个平台,助您卖出更多、更好地协同团队。',
    heroCtaServices: '查看我们的服务',
    heroCtaContact: '立即联系',
    heroCtaWork: '加入我们',
    timelineEyebrow: '一条线上的完整目录',
    timelineTitle: '15 款产品。一个统一的生态。',
    timelineLead: '从发布库存到管理租期结束,每一块都完美契合。沿着时间线浏览所有产品。',
    socialProofPre: '',
    socialProofDealers: '1,500+ 家经销商',
    socialProofMid: ' 在使用 Motorflash · 每月处理超过 ',
    socialProofCalls: '70,000 通电话',
    socialProofMid2: ' · 每月发布 ',
    socialProofCars: '30,000 辆二手车',
    socialProofPost: '',
    aboutEyebrow: '关于 Motorflash',
    aboutTitle: '您在汽车行业的数字化合作伙伴。',
    aboutP1Pre: '我们已经有 ',
    aboutP1Strong: '20 余年',
    aboutP1Post: ' 分析二手车市场的数据、流程与行为。我们了解需求如何变化、用户如何行动,以及销售团队需要什么才能更好地工作。',
    aboutP2Pre: '今天我们是一支由 ',
    aboutP2Strong: '200 多名 IT 专家',
    aboutP2Post: ' 组成的团队。每月发布 3 万辆汽车,导出数百万条广告,处理 7 万通电话,并以热爱汽车行业的人才持续成长。',
    aboutCta: '了解公司',
    aboutStats: ['深耕行业年数', '活跃客户', '2024 年营业额', 'IT 专家'],
    solveEyebrow: '我们解决什么',
    solveTitle: '库存、潜客、门户、网站与 AI。全部互联。',
    solveLead: '手动把一辆车发布到五个门户。没有系统地追逐潜客。无人接听的电话。糟糕的照片。我们知道经销商的瓶颈在哪里 —— 并且逐一解决了它们。',
    solveBefore: '以前',
    solveAfter: '现在',
    solveRows: [
      { before: '每天将库存逐个门户上传', after: '一键自动发布到 50+ 门户', icon: 'rocket_launch' },
      { before: '配置不完整或错误的车辆详情', after: 'JATO + EUROTAX 统一,无矛盾', icon: 'merge_type' },
      { before: 'WhatsApp、邮件与电话上分散的潜客', after: '与专业 CRM 互联的统一收件箱', icon: 'inbox' },
      { before: '用手机拍出的平庸照片', after: 'AI 即时修图,呈现影棚级质感', icon: 'photo_camera' },
      { before: '非工作时间漏接的电话', after: '在 WhatsApp、网页与语音上 24/7 的对话式 AI', icon: 'support_agent' },
    ],
    helpEyebrow: '我们如何帮助您',
    helpTitle: '从停车场到签约,无任何摩擦。',
    helpLead: '我们的工具覆盖销售周期的每个阶段。它们独立运作,但组合使用时表现更佳。',
    helpSteps: [
      { t: '发布', d: '在所有门户上加载并发布库存,AI 自动优化文案与照片。', icon: 'rocket_launch' },
      { t: '获客', d: '在 CRM4YOU 内集中接收来自网站、门户、WhatsApp 与活动的潜客。', icon: 'inbox' },
      { t: '接待', d: '人力 Contact Center + 对话式 AI 24/7 筛选潜客并预约到店。', icon: 'support_agent' },
      { t: '成交', d: '顾问携完整上下文成交。实时呈现毛利与转化报告。', icon: 'sell' },
    ],
    resultsEyebrow: '真实成果',
    resultsTitle: '使用 Motorflash 的经销商获得了什么',
    resultsLead: '数据来自过去 12 个月的活跃客户。',
    resultsStats: [
      { v: 30, suffix: '小时', l: '每家经销店每月节省' },
      { v: 50, suffix: '%', l: '更多优质潜客' },
      { v: 25, suffix: '%', l: '更少的管理时间' },
      { v: 15, suffix: '%', l: '每笔成交更高的毛利' },
    ],
    ecoEyebrowAccent: '技术生态',
    ecoTitle1: 'Motorflash 是连接您整个汽车技术栈的',
    ecoTitle2: '',
    ecoLead: '一个集成点,连接您的 DMS(Keyloop、Autoline、Quiter…)、门户(Coches.net、Autoscout24、Wallapop…)、您的 CRM、金融机构(Santander、CaixaBank、BBVA…)、物流以及行业数据库(JATO、Autovista、Carfax)。',
    ecoStatHubs: '个枢纽',
    ecoStatInt: '项集成',
    ecoStatEntry: '个接入点',
    ecoCta: '查看完整图示',
    pubAv: {
      navLabel: '高级发布',
      eyebrow: '市场唯一',
      title1: '按车牌',
      titleAccent: '高级发布',
      title2: '',
      lead: '输入车牌,即可返回该辆车的精确版本、原厂选装配置和 DGT 环保标签。制造商核实数据 — 目前没有其他多平台工具可以做到。',
      checks: [
        '版本、功率与排量均经核实',
        '原厂选装配置逐项列出并附单价',
        '准确的 DGT 环保标签',
      ],
      cta: '用车牌试用演示',
      mockExtrasLabel: '原厂选装 (12)',
      mockTotalLabel: '核实总价',
    },
    audiencesEyebrow: '适用对象',
    audiencesTitle: '三种业务模式。三种使用 Motorflash 的方式。',
    audiences: [
      { title: '独立经销商', desc: '本地多品牌经销商,需要专业化管理同时保持灵活度。从 Multipublisher + CRM4YOU 起步,按自己的节奏成长。', icon: 'storefront', tag: '中小 · 多品牌' },
      { title: '经销商集团', desc: '拥有多门店与多品牌的运营商。需要库存、潜客与业绩的整合视图。CRM4YOU + Contact Center 统一其运营。', icon: 'corporate_fare', tag: '集团 · 多门店' },
      { title: '制造商与官方品牌', desc: '希望协调经销网络、统一发布质量并获取品牌层面的指标。AI + 按国家与品牌的整合报告。', icon: 'factory', tag: '主机厂 · 品牌' },
    ],
    testimonialsEyebrow: '他们怎么说',
    testimonialsTitle: '已经卖得更多的经销商',
    testimonials: [
      { quote: '过去整天漏接电话。借助 Motorflash 在 WhatsApp 上的 AI,我们的优质潜客增加了 40% —— 我的团队只接待已预约的客户。', name: '销售总监', where: '多品牌集团 · 加泰罗尼亚' },
      { quote: 'CRM4YOU 改变了我们的运营。我们实时看到哪辆车在动、哪位顾问在成交。即时决策。', name: '经理', where: '官方经销商 · 马德里' },
      { quote: '自动发布每天节省 4 小时行政工作。这些时间用来成交。', name: '市场负责人', where: '独立经销商 · 安达卢西亚' },
    ],
    testimonialsNda: '可识别案例需签署保密协议后查看。',
    testimonialsLink: '查看完整成功案例 →',
    historyEyebrow: '我们的故事',
    historyTitle: '从分类信息门户到 AI 驱动的数字生态',
    historyLead: '我们于 2007 年从一个门户起步,Audi Selection Plus 是我们的第一位大客户。今天我们运营一个完整的生态:发布、库存管理、CRM、Contact Center 与对话式 AI — 一切互联并由 20 余年的行业经验支撑。',
    historyCta: '查看完整历程',
    historyBadgeYears: '20+ 年',
    historyBadgeLead: '引领创新',
    ctaTitle: '聊聊您的业务?',
    ctaLead: '告诉我们您的情况,专家将在 24 小时内回电,分析我们如何帮助您卖出更多。',
    ctaPrimary: '申请联系',
  },
}

function isFilled(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

function mergeWithFallback(doc: any, fallback: HomeCopy): HomeCopy {
  if (!doc) return fallback
  const out: HomeCopy = { ...fallback }
  // Scalars
  const scalarKeys: (keyof HomeCopy)[] = [
    'heroChip', 'heroTitle1', 'heroTitleAccent', 'heroLead',
    'heroCtaServices', 'heroCtaContact', 'heroCtaWork',
    'timelineEyebrow', 'timelineTitle', 'timelineLead',
    'socialProofPre', 'socialProofDealers', 'socialProofMid',
    'socialProofCalls', 'socialProofMid2', 'socialProofCars', 'socialProofPost',
    'aboutEyebrow', 'aboutTitle',
    'aboutP1Pre', 'aboutP1Strong', 'aboutP1Post',
    'aboutP2Pre', 'aboutP2Strong', 'aboutP2Post', 'aboutCta',
    'solveEyebrow', 'solveTitle', 'solveLead', 'solveBefore', 'solveAfter',
    'helpEyebrow', 'helpTitle', 'helpLead',
    'resultsEyebrow', 'resultsTitle', 'resultsLead',
    'ecoEyebrowAccent', 'ecoTitle1', 'ecoTitle2', 'ecoLead',
    'ecoStatHubs', 'ecoStatInt', 'ecoStatEntry', 'ecoCta',
    'audiencesEyebrow', 'audiencesTitle',
    'testimonialsEyebrow', 'testimonialsTitle', 'testimonialsNda', 'testimonialsLink',
    'historyEyebrow', 'historyTitle', 'historyLead', 'historyCta',
    'historyBadgeYears', 'historyBadgeLead',
    'ctaTitle', 'ctaLead', 'ctaPrimary',
  ]
  for (const k of scalarKeys) {
    const v = doc[k]
    if (isFilled(v)) (out[k] as string) = v
  }
  // socialProofPre / socialProofPost / ecoTitle2 pueden ir vacíos por diseño:
  // si el CMS devuelve string vacía explícita, hay que respetarla (no aplica
  // arriba porque isFilled rechaza vacíos). Tratamos esos tres como opcionales.
  for (const k of ['socialProofPre', 'socialProofPost', 'ecoTitle2'] as const) {
    if (typeof doc[k] === 'string') (out[k] as string) = doc[k]
  }
  // Arrays
  if (Array.isArray(doc.navSections) && doc.navSections.length > 0) {
    out.navSections = doc.navSections.map((s: any) => ({
      anchor: isFilled(s?.anchor) ? s.anchor : (isFilled(s?.id) ? s.id : ''),
      label: isFilled(s?.label) ? s.label : '',
    }))
  }
  if (Array.isArray(doc.aboutStats) && doc.aboutStats.length > 0) {
    out.aboutStats = doc.aboutStats.map((s: any) => (isFilled(s?.label) ? s.label : ''))
  }
  if (Array.isArray(doc.solveRows) && doc.solveRows.length > 0) {
    out.solveRows = doc.solveRows.map((r: any) => ({
      before: isFilled(r?.before) ? r.before : '',
      after: isFilled(r?.after) ? r.after : '',
      icon: isFilled(r?.icon) ? r.icon : 'check_circle',
    }))
  }
  if (Array.isArray(doc.helpSteps) && doc.helpSteps.length > 0) {
    out.helpSteps = doc.helpSteps.map((s: any) => ({
      t: isFilled(s?.t) ? s.t : '',
      d: isFilled(s?.d) ? s.d : '',
      icon: isFilled(s?.icon) ? s.icon : 'check_circle',
    }))
  }
  if (Array.isArray(doc.resultsStats) && doc.resultsStats.length > 0) {
    out.resultsStats = doc.resultsStats.map((s: any) => ({
      v: typeof s?.v === 'number' ? s.v : 0,
      suffix: isFilled(s?.suffix) ? s.suffix : '',
      l: isFilled(s?.l) ? s.l : '',
    }))
  }
  if (Array.isArray(doc.audiences) && doc.audiences.length > 0) {
    out.audiences = doc.audiences.map((a: any) => ({
      title: isFilled(a?.title) ? a.title : '',
      desc: isFilled(a?.desc) ? a.desc : '',
      icon: isFilled(a?.icon) ? a.icon : 'category',
      tag: isFilled(a?.tag) ? a.tag : '',
    }))
  }
  if (Array.isArray(doc.testimonials) && doc.testimonials.length > 0) {
    out.testimonials = doc.testimonials.map((q: any) => ({
      quote: isFilled(q?.quote) ? q.quote : '',
      name: isFilled(q?.name) ? q.name : '',
      where: isFilled(q?.where) ? q.where : '',
    }))
  }
  return out
}

export const getHomeCopy = cache(async (locale: HomeLocale = 'es'): Promise<HomeCopy> => {
  const fallback = STATIC_HOME[locale] ?? STATIC_HOME.es
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'home-page' as any,
      locale: locale as any,
      depth: 0,
    })
    return mergeWithFallback(doc, fallback)
  } catch {
    return fallback
  }
})

export function getHomeCopyStatic(locale: HomeLocale = 'es'): HomeCopy {
  return STATIC_HOME[locale] ?? STATIC_HOME.es
}
