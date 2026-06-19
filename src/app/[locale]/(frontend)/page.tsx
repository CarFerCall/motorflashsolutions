import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { ProductCarousel } from '@/components/ProductCarousel'
import { ProductsTimeline } from '@/components/ProductsTimeline'
import { HomeSectionNav } from '@/components/HomeSectionNav'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

interface HomeCopy {
  navSections: { id: string; label: string }[]
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

const COPY: Record<LocaleKey, HomeCopy> = {
  es: {
    navSections: [
      { id: 'home-hero', label: 'Inicio' },
      { id: 'catalogo-timeline', label: 'Catálogo en una línea' },
      { id: 'sobre-motorflash', label: 'Sobre Motorflash' },
      { id: 'que-resolvemos', label: 'Qué resolvemos' },
      { id: 'como-te-ayudamos', label: 'Cómo te ayudamos' },
      { id: 'resultados-reales', label: 'Resultados reales' },
      { id: 'catalogo-productos', label: 'Catálogo de productos' },
      { id: 'ecosistema-tecnico-teaser', label: 'Ecosistema técnico' },
      { id: 'para-quien', label: 'Para quién' },
      { id: 'testimonios', label: 'Lo que dicen' },
      { id: 'nuestra-historia', label: 'Nuestra historia' },
      { id: 'contacto-cta', label: 'Hablemos' },
    ],
    heroChip: 'IA Integrada · Automoción',
    heroTitle1: 'La solución 360 para marcas y',
    heroTitleAccent: 'concesionarios del motor',
    heroLead: '"Tu asistente invisible: rápido, preciso y siempre disponible". Tecnología que conecta cada servicio para hacerlo más inteligente y vender más.',
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
      { before: 'Stock que no rota acumulando coste', after: 'Exportación automática a 15+ países europeos', icon: 'public' },
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
      { id: 'home-hero', label: 'Inici' },
      { id: 'catalogo-timeline', label: 'Catàleg en una línia' },
      { id: 'sobre-motorflash', label: 'Sobre Motorflash' },
      { id: 'que-resolvemos', label: 'Què resolem' },
      { id: 'como-te-ayudamos', label: "Com t'ajudem" },
      { id: 'resultados-reales', label: 'Resultats reals' },
      { id: 'catalogo-productos', label: 'Catàleg de productes' },
      { id: 'ecosistema-tecnico-teaser', label: 'Ecosistema tècnic' },
      { id: 'para-quien', label: 'Per a qui' },
      { id: 'testimonios', label: 'Què en diuen' },
      { id: 'nuestra-historia', label: 'La nostra història' },
      { id: 'contacto-cta', label: 'Parlem' },
    ],
    heroChip: 'IA integrada · Automoció',
    heroTitle1: 'La solució 360 per a marques i',
    heroTitleAccent: 'concessionaris del motor',
    heroLead: '"El teu assistent invisible: ràpid, precís i sempre disponible". Tecnologia que connecta cada servei per fer-lo més intel·ligent i vendre més.',
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
      { before: 'Trucades perdudes fora d\'horari', after: 'IA conversacional 24/7 a WhatsApp, web i veu', icon: 'support_agent' },
      { before: 'Estoc que no rota acumulant cost', after: 'Exportació automàtica a 15+ països europeus', icon: 'public' },
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
    audiencesEyebrow: 'Per a qui',
    audiencesTitle: 'Tres models de negoci. Tres maneres de fer servir Motorflash.',
    audiences: [
      { title: 'Concessionaris independents', desc: 'Multimarca de proximitat que necessiten professionalitzar la gestió sense perdre agilitat. Comencen amb Multipublicador + CRM4YOU i creixen al seu ritme.', icon: 'storefront', tag: 'Pime · Multimarca' },
      { title: 'Grups de concessionaris', desc: 'Operadors amb múltiples seus i marques. Necessiten visió consolidada d\'estoc, leads i rendiment. CRM4YOU + Contact Center els unifica l\'operativa.', icon: 'corporate_fare', tag: 'Grup · Multiseu' },
      { title: 'Fabricants i marques oficials', desc: 'Volen coordinar la xarxa de concessionaris, unificar qualitat de publicació i obtenir mètriques a nivell de marca. IA + reporting consolidat per país i marca.', icon: 'factory', tag: 'Fabricant · Marca' },
    ],
    testimonialsEyebrow: 'Què en diuen',
    testimonialsTitle: 'Concessionaris que ja estan venent més',
    testimonials: [
      { quote: "Abans perdíem trucades tot el dia. Amb la IA de Motorflash a WhatsApp captem un 40% més de leads qualificats — i el meu equip només atén els que vénen ja amb cita.", name: 'Director comercial', where: 'Grup multimarca · Catalunya' },
      { quote: 'CRM4YOU ens va canviar l\'operativa. Ara veiem en temps real quin vehicle es mou i quin assessor està tancant. Presa de decisions immediata.', name: 'Gerent', where: 'Concessionari oficial · Madrid' },
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
      { id: 'home-hero', label: 'Home' },
      { id: 'catalogo-timeline', label: 'Catalogue in one line' },
      { id: 'sobre-motorflash', label: 'About Motorflash' },
      { id: 'que-resolvemos', label: 'What we solve' },
      { id: 'como-te-ayudamos', label: 'How we help you' },
      { id: 'resultados-reales', label: 'Real results' },
      { id: 'catalogo-productos', label: 'Product catalogue' },
      { id: 'ecosistema-tecnico-teaser', label: 'Tech ecosystem' },
      { id: 'para-quien', label: "Who it's for" },
      { id: 'testimonios', label: 'What they say' },
      { id: 'nuestra-historia', label: 'Our story' },
      { id: 'contacto-cta', label: "Let's talk" },
    ],
    heroChip: 'AI Integrated · Automotive',
    heroTitle1: 'The 360 solution for brands and',
    heroTitleAccent: 'automotive dealerships',
    heroLead: '"Your invisible assistant: fast, accurate and always available". Technology that connects every service to make it smarter — and sell more.',
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
    aboutP1Pre: "For ",
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
      { before: 'Stock that does not rotate, piling up cost', after: 'Automatic export to 15+ European countries', icon: 'public' },
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
      { id: 'home-hero', label: '首页' },
      { id: 'catalogo-timeline', label: '一条线上的目录' },
      { id: 'sobre-motorflash', label: '关于 Motorflash' },
      { id: 'que-resolvemos', label: '我们解决什么' },
      { id: 'como-te-ayudamos', label: '我们如何帮助您' },
      { id: 'resultados-reales', label: '真实成果' },
      { id: 'catalogo-productos', label: '产品目录' },
      { id: 'ecosistema-tecnico-teaser', label: '技术生态' },
      { id: 'para-quien', label: '适用对象' },
      { id: 'testimonios', label: '他们怎么说' },
      { id: 'nuestra-historia', label: '我们的故事' },
      { id: 'contacto-cta', label: '聊一聊' },
    ],
    heroChip: 'AI 集成 · 汽车行业',
    heroTitle1: '面向品牌与',
    heroTitleAccent: '汽车经销商的 360 解决方案',
    heroLead: '"您隐形的助手:快速、准确、随时可用"。将每项服务连接起来的技术,让一切更智能,卖得更多。',
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
      { before: '库存周转慢、成本累积', after: '自动导出至 15+ 个欧洲国家', icon: 'public' },
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

export default async function HomePage() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const products = orderedProducts(locale)
  const t = COPY[locale] ?? COPY.es

  return (
    <>
      {/* Hero */}
      <section id="home-hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20 pb-16">
        <div aria-hidden className="absolute -top-[10%] -right-[10%] w-1/2 h-1/2 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />
        <div aria-hidden className="absolute -bottom-[10%] -left-[10%] w-2/5 h-2/5 rounded-full blur-[120px]" style={{ background: 'rgba(255, 128, 0, 0.06)' }} />

        <div className="mf-container relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mf-chip mb-6 mx-auto">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>{t.heroChip}</span>
              </div>
              <h1 className="text-4xl md:text-display-lg font-semibold leading-tight mb-6">
                {t.heroTitle1} <span className="text-primary">{t.heroTitleAccent}</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{t.heroLead}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/servicios" className="btn-primary">
                  {t.heroCtaServices}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/contacto" className="btn-secondary">{t.heroCtaContact}</Link>
                <Link href="/compania#trabaja-con-nosotros" className="btn-secondary">{t.heroCtaWork}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeSectionNav sections={t.navSections} />

      {/* Línea de tiempo de productos */}
      <section id="catalogo-timeline" className="py-16 bg-white overflow-hidden">
        <Reveal>
          <div className="mf-container mb-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="mf-eyebrow">{t.timelineEyebrow}</span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{t.timelineTitle}</h2>
              <p className="text-on-surface-variant">{t.timelineLead}</p>
            </div>
          </div>
          <ProductsTimeline />
        </Reveal>
      </section>

      {/* Social proof bar */}
      <section className="py-6 bg-surface-container border-y border-outline-variant">
        <div className="mf-container">
          <Reveal>
            <p className="text-center text-sm md:text-base text-on-surface-variant">
              <strong className="text-on-surface">{t.socialProofDealers}</strong>{t.socialProofMid}<strong className="text-on-surface">{t.socialProofCalls}</strong>{t.socialProofMid2}<strong className="text-on-surface">{t.socialProofCars}</strong>{t.socialProofPost}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sobre Motorflash */}
      <section id="sobre-motorflash" className="py-24">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <span className="mf-eyebrow">{t.aboutEyebrow}</span>
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6 leading-tight">{t.aboutTitle}</h2>
              <p className="text-lg text-on-surface-variant mb-4 leading-relaxed">
                {t.aboutP1Pre}<strong>{t.aboutP1Strong}</strong>{t.aboutP1Post}
              </p>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                {t.aboutP2Pre}<strong>{t.aboutP2Strong}</strong>{t.aboutP2Post}
              </p>
              <Link href="/compania" className="btn-secondary mt-2">
                {t.aboutCta}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: 20, suffix: '+', l: t.aboutStats[0] },
                  { v: 1500, suffix: '+', l: t.aboutStats[1] },
                  { v: 10, suffix: 'M€', l: t.aboutStats[2] },
                  { v: 200, suffix: '+', l: t.aboutStats[3] },
                ].map((s) => (
                  <div key={s.l} className="mf-product-card" style={{ padding: '1.5rem' }}>
                    <div className="font-display text-3xl md:text-4xl font-semibold text-primary mb-1">
                      <AnimatedCounter target={s.v} suffix={s.suffix} />
                    </div>
                    <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qué resolvemos */}
      <section id="que-resolvemos" className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.solveEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-4">{t.solveTitle}</h2>
              <p className="text-lg text-on-surface-variant">{t.solveLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.solveRows.map((row, i) => (
              <Reveal key={i} delay={Math.min(300, (i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{row.icon}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant m-0 mb-1">{t.solveBefore}</p>
                  <p className="text-base mb-3 line-through" style={{ color: '#9ca3af' }}>{row.before}</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary m-0 mb-1">{t.solveAfter}</p>
                  <p className="text-base font-semibold m-0">{row.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo te ayudamos */}
      <section id="como-te-ayudamos" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.helpEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3">{t.helpTitle}</h2>
              <p className="text-on-surface-variant">{t.helpLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {t.helpSteps.map((step, i) => (
              <Reveal key={i} delay={Math.min(300, i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full relative" style={{ minHeight: 280 }}>
                  <div className="absolute top-4 right-4 font-display font-semibold text-primary/10" style={{ fontSize: 80, lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {i + 1}
                  </div>
                  <div className="mf-icon-tile relative z-10">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 relative z-10">{step.t}</h3>
                  <p className="text-on-surface-variant m-0 relative z-10">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados reales */}
      <section id="resultados-reales" className="py-24" style={{ background: 'linear-gradient(135deg, #ff8000 0%, #ff9533 100%)' }}>
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="block text-sm font-semibold uppercase mb-4 tracking-widest" style={{ color: 'rgba(255,255,255,0.85)' }}>{t.resultsEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold mb-3 text-white">{t.resultsTitle}</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>{t.resultsLead}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {t.resultsStats.map((s, i) => (
              <Reveal key={s.l} delay={Math.min(300, i * 100) as 0 | 100 | 200 | 300}>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                  +<AnimatedCounter target={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.9)' }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel productos */}
      <section id="catalogo-productos" className="py-24 overflow-hidden">
        <ProductCarousel products={products} />
      </section>

      {/* Ecosistema técnico teaser */}
      <section id="ecosistema-tecnico-teaser" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #121414 0%, #1f1f1f 100%)' }}>
              <div aria-hidden className="absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,128,0,0.25), transparent 70%)' }} />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 md:p-16">
                <div className="text-white">
                  <span className="inline-flex items-center gap-2 mf-eyebrow !text-primary !mb-3">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>hub</span>
                    {t.ecoEyebrowAccent}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                    {t.ecoTitle1} <span className="text-primary">HUB</span> {t.ecoTitle2}
                  </h2>
                  <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>{t.ecoLead}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <span><strong className="text-primary">8</strong> {t.ecoStatHubs}</span>
                    <span className="opacity-30">·</span>
                    <span><strong className="text-primary">+40</strong> {t.ecoStatInt}</span>
                    <span className="opacity-30">·</span>
                    <span><strong className="text-primary">1</strong> {t.ecoStatEntry}</span>
                  </div>
                  <Link href="/ecosistema-tecnico" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                    {t.ecoCta}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative" style={{ width: 280, height: 280 }}>
                    <div
                      className="absolute rounded-full flex items-center justify-center text-white"
                      style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 90, height: 90, background: 'linear-gradient(135deg, #ff8000, #d96f00)', boxShadow: '0 0 0 12px rgba(255,128,0,0.15), 0 12px 32px rgba(255,128,0,0.40)' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 36 }}>hub</span>
                    </div>
                    {['inventory_2', 'language', 'account_balance', 'local_shipping', 'database', 'gavel', 'factory', 'hub'].map((icon, i) => {
                      const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
                      const r = 120
                      return (
                        <div
                          key={i}
                          className="absolute rounded-full bg-white flex items-center justify-center mf-hub-node"
                          style={{ left: `calc(50% + ${r * Math.cos(angle)}px)`, top: `calc(50% + ${r * Math.sin(angle)}px)`, transform: 'translate(-50%, -50%)', width: 44, height: 44, animationDelay: `${i * 0.1}s`, boxShadow: '0 6px 16px rgba(0,0,0,0.25)' }}
                        >
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{icon}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Para quién */}
      <section id="para-quien" className="py-24 bg-surface-container">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="mf-eyebrow">{t.audiencesEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">{t.audiencesTitle}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.audiences.map((s, i) => (
              <Reveal key={s.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full">
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary mb-3" style={{ background: 'rgba(255, 128, 0, 0.1)', padding: '4px 10px', borderRadius: 999 }}>
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-on-surface-variant m-0">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="mf-eyebrow">{t.testimonialsEyebrow}</span>
              <h2 className="text-3xl md:text-headline-lg font-semibold">{t.testimonialsTitle}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((it, i) => (
              <Reveal key={i} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="mf-product-card h-full flex flex-col">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: 36, opacity: 0.4 }}>format_quote</span>
                  <p className="text-base mb-6 flex-grow italic">&ldquo;{it.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold m-0">{it.name}</p>
                    <p className="text-xs text-on-surface-variant m-0">{it.where}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-xs text-on-surface-variant mt-6 italic">
            {t.testimonialsNda} <Link href="/historias-de-exito" className="underline">{t.testimonialsLink}</Link>
          </p>
        </div>
      </section>

      {/* Nuestra historia teaser */}
      <section id="nuestra-historia" className="py-24 bg-surface-container">
        <div className="mf-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="mf-eyebrow">{t.historyEyebrow}</span>
              <h2 className="text-3xl md:text-display-lg font-semibold mb-6">{t.historyTitle}</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">{t.historyLead}</p>
              <Link href="/compania" className="btn-secondary">
                {t.historyCta}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/home-expertise.png" alt="Motorflash team" width={720} height={480} className="w-full h-auto" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display text-2xl font-semibold m-0">{t.historyBadgeYears}</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 m-0">{t.historyBadgeLead}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto-cta" className="py-24">
        <div className="mf-container">
          <Reveal>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl" style={{ background: '#121414' }}>
              <div className="p-12 md:p-20 text-center">
                <h2 className="text-3xl md:text-display-lg font-semibold mb-6 text-white">{t.ctaTitle}</h2>
                <p className="mb-10 mx-auto text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>{t.ctaLead}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contacto" className="btn-primary">
                    {t.ctaPrimary}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+34910788575"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:bg-white/10"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <span className="material-symbols-outlined">call</span>
                    +34 910 788 575
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
