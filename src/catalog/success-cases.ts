/**
 * Casos de éxito de /historias-de-exito.
 *
 * Fuente estática (textos hard-codeados) + wrapper async que primero
 * intenta leer de la colección `success-cases` de Payload y cae a
 * los textos estáticos si la BD aún no tiene casos sembrados.
 *
 * El look & feel (colores, banner, wordmarkClass) y los logos se
 * mantienen igual en los 4 idiomas — son metadatos visuales.
 */

import { cache } from 'react'

export type SuccessCaseLocale = 'es' | 'ca' | 'en' | 'zh'

export interface Stat {
  value: string
  label: string
}

export interface BrandStyle {
  primary: string
  ink: string
  banner: string
  wordmarkClass?: string
}

export interface ClientLogo {
  src: string
  width: number
  height: number
  alt: string
}

export interface SuccessCase {
  slug: string
  brand: string
  wordmark: string
  tagline: string
  logo?: ClientLogo
  style: BrandStyle
  badge: string
  headline: string
  /** HTML con etiquetas <strong> permitidas (sin scripts). */
  introHtml: string
  quote: string
  author: string
  stats: Stat[]
  ecosystemTitle: string
  ecosystemLead: string
  ecosystemItems: string[]
  quoteVariant: 'light' | 'dark'
}

export interface SuccessCasesPage {
  metaTitle: string
  metaDescription: string
  metaOg: string
  heroEyebrow: string
  heroTitle1: string
  heroTitle2: string
  heroLead: string
  trustHeading: string
  morePill1: string
  morePill2: string
  productsLabel: string
  ctaTitle: string
  ctaLead: string
  ctaButton: string
  cases: SuccessCase[]
}

// -----------------------------------------------------------------
// Estilos y logos (compartidos en los 4 idiomas — no se traducen).
// -----------------------------------------------------------------
export const STYLE_JARMAUTO: BrandStyle = { primary: '#111111', ink: '#0A0A0A', banner: 'linear-gradient(135deg, #0A0A0A 0%, #1F1F1F 55%, #4A4A4A 100%)', wordmarkClass: 'tracking-[-0.01em] font-bold' }
export const STYLE_OCASIONPLUS: BrandStyle = { primary: '#00A3D7', ink: '#0E1E2A', banner: 'linear-gradient(135deg, #0E1E2A 0%, #103B5A 55%, #00A3D7 100%)', wordmarkClass: 'tracking-[-0.02em] font-bold' }
export const STYLE_FLEXICAR: BrandStyle = { primary: '#F37B20', ink: '#1E1E1E', banner: 'linear-gradient(135deg, #1E1E1E 0%, #3B2410 55%, #F37B20 100%)', wordmarkClass: 'tracking-[-0.02em] font-black italic lowercase' }
export const STYLE_MUYCAR: BrandStyle = { primary: '#1FB44E', ink: '#0E1A12', banner: 'linear-gradient(135deg, #0E1A12 0%, #143A22 55%, #1FB44E 100%)', wordmarkClass: 'tracking-[0.04em] font-black' }
export const STYLE_AUTOELIA: BrandStyle = { primary: '#1A3A5C', ink: '#0F1A2A', banner: 'linear-gradient(135deg, #0F1A2A 0%, #1A3A5C 60%, #BC8B4A 100%)', wordmarkClass: 'tracking-[0.32em] font-light' }

export const LOGO_JARMAUTO: ClientLogo = { src: '/images/clients/jarmauto.png', width: 4946, height: 1032, alt: 'Jarmauto' }
export const LOGO_OCASIONPLUS: ClientLogo = { src: '/images/clients/ocasionplus.jpg', width: 600, height: 60, alt: 'Ocasionplus' }
export const LOGO_FLEXICAR: ClientLogo = { src: '/images/clients/flexicar.png', width: 454, height: 111, alt: 'Flexicar' }
export const LOGO_MUYCAR: ClientLogo = { src: '/images/clients/muy-car.png', width: 439, height: 115, alt: 'Muy Car' }

const STYLES_BY_SLUG: Record<string, BrandStyle> = {
  jarmauto: STYLE_JARMAUTO,
  ocasionplus: STYLE_OCASIONPLUS,
  flexicar: STYLE_FLEXICAR,
  'muy-car': STYLE_MUYCAR,
  'auto-elia': STYLE_AUTOELIA,
}

const LOGOS_BY_SLUG: Record<string, ClientLogo | undefined> = {
  jarmauto: LOGO_JARMAUTO,
  ocasionplus: LOGO_OCASIONPLUS,
  flexicar: LOGO_FLEXICAR,
  'muy-car': LOGO_MUYCAR,
  'auto-elia': undefined,
}

// -----------------------------------------------------------------
// Copy estático para todos los idiomas — fuente de verdad mientras
// la colección está vacía. Imitemos la estructura previa de COPY
// que vivía en historias-de-exito/page.tsx.
// -----------------------------------------------------------------
export const STATIC_COPY: Record<SuccessCaseLocale, SuccessCasesPage> = {
  es: {
    metaTitle: 'Casos de éxito',
    metaDescription: 'Clientes que confían en Motorflash Solutions desde hace años. Resultados reales de Jarmauto, Ocasionplus, Flexicar, Muy Car y Auto Elia.',
    metaOg: 'Jarmauto, Ocasionplus, Flexicar, Muy Car y Auto Elia: resultados reales de concesionarios líderes.',
    heroEyebrow: 'Casos de éxito',
    heroTitle1: 'Clientes que confían en nosotros',
    heroTitle2: 'desde hace años',
    heroLead: 'Resultados reales de concesionarios líderes que han crecido con Motorflash Solutions. Desde grupos multimarca con el ecosistema completo hasta especialistas que usan solo una pieza muy concreta.',
    trustHeading: 'Confían en nosotros',
    morePill1: '+1.500',
    morePill2: 'clientes más',
    productsLabel: 'PRODUCTOS CONTRATADOS',
    ctaTitle: '¿Quieres que tu marca sea el próximo caso?',
    ctaLead: 'Cuéntanos cuál es tu reto comercial y te enseñamos un caso de un grupo de tu tamaño. En 30 minutos sabes qué piezas necesitas, cuánto cuesta y cuándo empezarías a vender más.',
    ctaButton: 'Hablar con un especialista',
    cases: [
      { slug: 'jarmauto', brand: 'JARMAUTO', wordmark: 'Jarmauto', tagline: 'Grupo automoción · Madrid', logo: LOGO_JARMAUTO, style: STYLE_JARMAUTO, badge: 'Cliente Premium · Ecosistema completo', headline: 'El cliente número 1 de la compañía', introHtml: 'Jarmauto es el cliente número 1 de Motorflash Solutions. Grupo multimarca con varios puntos de venta en la Comunidad de Madrid, tiene contratados <strong>todos los productos</strong> de la compañía —web, CRM4YOU, Contact Center (Customer Manager) y Marketing Digital— para cubrir de extremo a extremo la captación, gestión y cierre de leads.', quote: 'Motorflash ha sido clave en la transformación digital de Jarmauto. Tener la web, el CRM, el Contact Center y el marketing digital del mismo partner nos permite trabajar con datos consistentes y una única versión de la verdad.', author: 'Dirección Comercial, Jarmauto', stats: [ { value: '4', label: 'Productos Motorflash contratados' }, { value: '+180%', label: 'Leads online en 3 años' }, { value: '-32%', label: 'Coste por lead' }, { value: '360°', label: 'Visión del cliente' } ], ecosystemTitle: 'Un partner tecnológico 360°', ecosystemLead: 'Jarmauto opera sobre el ecosistema completo de Motorflash Solutions.', ecosystemItems: [ 'Web corporativa Motorflash', 'CRM4YOU — gestión comercial del grupo', 'Contact Center · Customer Manager', 'Marketing Digital gestionado por Motorflash' ], quoteVariant: 'dark' },
      { slug: 'ocasionplus', brand: 'OCASIONPLUS', wordmark: 'ocasionplus.com', tagline: 'Red nacional de VO', logo: LOGO_OCASIONPLUS, style: STYLE_OCASIONPLUS, badge: 'Especialista en stock · Cliente operativo', headline: 'Una de las mayores redes de VO de España, apoyada en nuestra gestión de stock', introHtml: 'Ocasionplus utiliza Motorflash Solutions como motor de gestión de stock: exportación de coches a portales y partners, <strong>multipublicación</strong> para maximizar visibilidad y <strong>tasación online</strong> para acelerar la compra de vehículo usado. Tres piezas quirúrgicas que potencian su operativa nacional sin tocar su ecosistema interno.', quote: 'Necesitábamos especialistas que entendieran cómo funciona un stock de VO a gran escala. Motorflash no aplica una receta cerrada: se adapta a cada marca, modelo y casuística del stock, lo que a nivel operativo es tremendamente complejo y marca la diferencia.', author: 'Dirección de Operaciones, Ocasionplus', stats: [ { value: '3', label: 'Servicios Motorflash contratados' }, { value: '+45%', label: 'Rotación de stock' }, { value: '-28%', label: 'Días medios de venta' }, { value: '24h', label: 'Tasación online' } ], ecosystemTitle: 'Rotación y visibilidad de stock a escala nacional', ecosystemLead: 'Ocasionplus apoya la operación de stock en Motorflash Solutions: exportación, multipublicación y tasación online.', ecosystemItems: [ 'Servicios de exportación de coches', 'Multipublicación en portales del sector', 'Tasación online del stock' ], quoteVariant: 'dark' },
      { slug: 'flexicar', brand: 'FLEXICAR', wordmark: 'flexicar', tagline: 'Red de VO · Iberia', logo: LOGO_FLEXICAR, style: STYLE_FLEXICAR, badge: 'Cliente · Motorflash Message', headline: 'Toda la potencia de WhatsApp para VO con Motorflash Message', introHtml: 'Flexicar, la mayor red de VO de Iberia, tiene contratado con Motorflash <strong>únicamente</strong> el servicio de <strong>Motorflash Message</strong> para gestionar WhatsApp a escala. La plataforma les permite unificar las conversaciones de todos sus centros, asignar leads al comercial adecuado y medir el rendimiento por tienda.', quote: 'WhatsApp se ha convertido en el canal número 1 de conversación con el comprador. Motorflash Message nos permite tratarlo como un canal profesional: con reglas, asignaciones y reporting por centro.', author: 'Dirección Digital, Grupo Flexicar', stats: [ { value: '1', label: 'Servicio contratado: Motorflash Message' }, { value: '+180', label: 'Centros con WhatsApp unificado' }, { value: '+62%', label: 'Respuestas en menos de 5 min' }, { value: 'ES+PT', label: 'Operativa Iberia' } ], ecosystemTitle: 'WhatsApp como canal profesional de ventas', ecosystemLead: 'Flexicar usa Motorflash Message para gestionar conversaciones comerciales por WhatsApp en toda su red.', ecosystemItems: [ 'WhatsApp Business unificado por grupo', 'Asignación automática de leads al comercial', 'Plantillas y respuestas rápidas por centro', 'Reporting de conversaciones y conversión' ], quoteVariant: 'light' },
      { slug: 'muy-car', brand: 'MUY CAR', wordmark: 'MUY CAR', tagline: 'Concesionario nativo digital', logo: LOGO_MUYCAR, style: STYLE_MUYCAR, badge: 'Nacieron con Motorflash · Crecieron con nosotros', headline: 'Nacieron con Motorflash y han crecido con nosotros', introHtml: 'Muy Car es uno de esos casos que nos enorgullecen: <strong>nacieron con Motorflash y han crecido con nosotros</strong>. Hoy tienen contratado el <strong>CRM4YOU</strong> para gestionar de forma ordenada todo el ciclo comercial, la <strong>web corporativa</strong> como escaparate online profesional y <strong>Motorflash Message</strong> para trabajar WhatsApp como canal de ventas.', quote: 'Arrancamos el proyecto de la mano de Motorflash y hemos ido sumando piezas a medida que crecíamos. Primero el CRM4YOU, luego la web y ahora Motorflash Message para WhatsApp: todo encaja y trabaja con los mismos datos.', author: 'Responsable de VO, Muy Car', stats: [ { value: '3', label: 'Productos contratados (CRM + web + Message)' }, { value: 'Día 1', label: 'Cliente desde el nacimiento del negocio' }, { value: '×3,2', label: 'Leads online en su evolución' }, { value: '24/7', label: 'CRM, web y WhatsApp activos' } ], ecosystemTitle: 'Un cliente desde el día uno', ecosystemLead: 'Muy Car nació apoyándose en Motorflash y ha ido incorporando cada vez más soluciones conforme crecía el negocio.', ecosystemItems: [ 'CRM4YOU integrado con la operativa comercial', 'Web corporativa Motorflash', 'Motorflash Message · WhatsApp profesional' ], quoteVariant: 'light' },
      { slug: 'auto-elia', brand: 'AUTO ELIA', wordmark: 'AUTO ELIA', tagline: 'Volvo · Lynk & Co — concesionario oficial', style: STYLE_AUTOELIA, badge: 'Cliente · Leads de calidad', headline: 'Concesionario oficial premium que capta leads de calidad con Motorflash Exclusive', introHtml: 'Auto Elia, concesionario oficial Volvo y Lynk &amp; Co, opera con un pack Motorflash muy orientado a captación cualificada: <strong>web corporativa</strong>, <strong>marketing digital</strong>, <strong>publicación de stock</strong> y el servicio premium <strong>Motorflash Exclusive</strong> para <strong>conseguir leads de calidad</strong>, con alta intención de compra y mejor conversión a venta.', quote: 'Operamos con estándares de marca muy exigentes y necesitamos leads realmente cualificados. Motorflash Exclusive, junto a la web y el marketing digital, nos trae contactos con verdadera intención de compra coherentes con Volvo y Lynk & Co.', author: 'Dirección de Marketing, Grupo Auto Elia', stats: [ { value: '4', label: 'Productos Motorflash contratados' }, { value: '+74%', label: 'Leads cualificados captados' }, { value: '+55%', label: 'Conversión a venta km 0 y VO premium' }, { value: 'Exclusive', label: 'Leads de calidad premium' } ], ecosystemTitle: 'Captación cualificada multimarca', ecosystemLead: 'Auto Elia combina web, marketing digital, publicación de stock y Motorflash Exclusive para generar leads con alta intención de compra.', ecosystemItems: [ 'Web corporativa Motorflash', 'Marketing Digital gestionado', 'Publicación de stock optimizada', 'Motorflash Exclusive — leads premium' ], quoteVariant: 'dark' },
    ],
  },
  ca: {
    metaTitle: "Casos d'èxit",
    metaDescription: "Clients que confien en Motorflash Solutions des de fa anys. Resultats reals de Jarmauto, Ocasionplus, Flexicar, Muy Car i Auto Elia.",
    metaOg: 'Jarmauto, Ocasionplus, Flexicar, Muy Car i Auto Elia: resultats reals de concessionaris líders.',
    heroEyebrow: "Casos d'èxit",
    heroTitle1: 'Clients que confien en nosaltres',
    heroTitle2: 'des de fa anys',
    heroLead: "Resultats reals de concessionaris líders que han crescut amb Motorflash Solutions. Des de grups multimarca amb l'ecosistema complet fins a especialistes que fan servir només una peça molt concreta.",
    trustHeading: 'Confien en nosaltres',
    morePill1: '+1.500',
    morePill2: 'clients més',
    productsLabel: 'PRODUCTES CONTRACTATS',
    ctaTitle: 'Vols que la teva marca sigui el proper cas?',
    ctaLead: "Explica'ns quin és el teu repte comercial i et mostrem un cas d'un grup de la teva mida. En 30 minuts saps quines peces necessites, quant costa i quan començaries a vendre més.",
    ctaButton: 'Parlar amb un especialista',
    cases: [
      { slug: 'jarmauto', brand: 'JARMAUTO', wordmark: 'Jarmauto', tagline: 'Grup automoció · Madrid', logo: LOGO_JARMAUTO, style: STYLE_JARMAUTO, badge: 'Client Premium · Ecosistema complet', headline: 'El client número 1 de la companyia', introHtml: "Jarmauto és el client número 1 de Motorflash Solutions. Grup multimarca amb diversos punts de venda a la Comunitat de Madrid, té contractats <strong>tots els productes</strong> de la companyia —web, CRM4YOU, Contact Center (Customer Manager) i Marketing Digital— per cobrir d'extrem a extrem la captació, gestió i tancament de leads.", quote: "Motorflash ha estat clau en la transformació digital de Jarmauto. Tenir la web, el CRM, el Contact Center i el màrqueting digital del mateix partner ens permet treballar amb dades consistents i una única versió de la veritat.", author: 'Direcció Comercial, Jarmauto', stats: [ { value: '4', label: 'Productes Motorflash contractats' }, { value: '+180%', label: 'Leads online en 3 anys' }, { value: '-32%', label: 'Cost per lead' }, { value: '360°', label: 'Visió del client' } ], ecosystemTitle: 'Un partner tecnològic 360°', ecosystemLead: "Jarmauto opera sobre l'ecosistema complet de Motorflash Solutions.", ecosystemItems: [ 'Web corporativa Motorflash', 'CRM4YOU — gestió comercial del grup', 'Contact Center · Customer Manager', 'Marketing Digital gestionat per Motorflash' ], quoteVariant: 'dark' },
      { slug: 'ocasionplus', brand: 'OCASIONPLUS', wordmark: 'ocasionplus.com', tagline: 'Xarxa nacional de VO', logo: LOGO_OCASIONPLUS, style: STYLE_OCASIONPLUS, badge: "Especialista en estoc · Client operatiu", headline: "Una de les xarxes de VO més grans d'Espanya, amb el suport de la nostra gestió d'estoc", introHtml: "Ocasionplus fa servir Motorflash Solutions com a motor de gestió d'estoc: exportació de cotxes a portals i partners, <strong>multipublicació</strong> per maximitzar visibilitat i <strong>taxació online</strong> per accelerar la compra de vehicle usat. Tres peces quirúrgiques que potencien la seva operativa nacional sense tocar el seu ecosistema intern.", quote: "Necessitàvem especialistes que entenguessin com funciona un estoc de VO a gran escala. Motorflash no aplica una recepta tancada: s'adapta a cada marca, model i casuística de l'estoc, cosa que a nivell operatiu és tremendament complexa i marca la diferència.", author: "Direcció d'Operacions, Ocasionplus", stats: [ { value: '3', label: 'Serveis Motorflash contractats' }, { value: '+45%', label: "Rotació d'estoc" }, { value: '-28%', label: 'Dies mitjans de venda' }, { value: '24h', label: 'Taxació online' } ], ecosystemTitle: "Rotació i visibilitat d'estoc a escala nacional", ecosystemLead: "Ocasionplus dóna suport a l'operació d'estoc en Motorflash Solutions: exportació, multipublicació i taxació online.", ecosystemItems: [ "Serveis d'exportació de cotxes", 'Multipublicació en portals del sector', "Taxació online de l'estoc" ], quoteVariant: 'dark' },
      { slug: 'flexicar', brand: 'FLEXICAR', wordmark: 'flexicar', tagline: 'Xarxa de VO · Ibèria', logo: LOGO_FLEXICAR, style: STYLE_FLEXICAR, badge: 'Client · Motorflash Message', headline: 'Tota la potència de WhatsApp per a VO amb Motorflash Message', introHtml: "Flexicar, la xarxa de VO més gran d'Ibèria, té contractat amb Motorflash <strong>únicament</strong> el servei de <strong>Motorflash Message</strong> per gestionar WhatsApp a escala. La plataforma els permet unificar les converses de tots els seus centres, assignar leads al comercial adequat i mesurar el rendiment per botiga.", quote: "WhatsApp s'ha convertit en el canal número 1 de conversa amb el comprador. Motorflash Message ens permet tractar-lo com un canal professional: amb regles, assignacions i reporting per centre.", author: 'Direcció Digital, Grup Flexicar', stats: [ { value: '1', label: 'Servei contractat: Motorflash Message' }, { value: '+180', label: 'Centres amb WhatsApp unificat' }, { value: '+62%', label: 'Respostes en menys de 5 min' }, { value: 'ES+PT', label: 'Operativa Ibèria' } ], ecosystemTitle: 'WhatsApp com a canal professional de vendes', ecosystemLead: "Flexicar fa servir Motorflash Message per gestionar converses comercials per WhatsApp a tota la seva xarxa.", ecosystemItems: [ 'WhatsApp Business unificat per grup', 'Assignació automàtica de leads al comercial', 'Plantilles i respostes ràpides per centre', 'Reporting de converses i conversió' ], quoteVariant: 'light' },
      { slug: 'muy-car', brand: 'MUY CAR', wordmark: 'MUY CAR', tagline: 'Concessionari natiu digital', logo: LOGO_MUYCAR, style: STYLE_MUYCAR, badge: 'Van néixer amb Motorflash · Van créixer amb nosaltres', headline: 'Van néixer amb Motorflash i han crescut amb nosaltres', introHtml: "Muy Car és un d'aquests casos que ens enorgulleixen: <strong>van néixer amb Motorflash i han crescut amb nosaltres</strong>. Avui tenen contractat el <strong>CRM4YOU</strong> per gestionar de manera ordenada tot el cicle comercial, la <strong>web corporativa</strong> com a aparador online professional i <strong>Motorflash Message</strong> per treballar WhatsApp com a canal de vendes.", quote: "Vam arrencar el projecte de la mà de Motorflash i hem anat sumant peces a mesura que crèixem. Primer el CRM4YOU, després la web i ara Motorflash Message per a WhatsApp: tot encaixa i treballa amb les mateixes dades.", author: 'Responsable de VO, Muy Car', stats: [ { value: '3', label: 'Productes contractats (CRM + web + Message)' }, { value: 'Dia 1', label: 'Client des del naixement del negoci' }, { value: '×3,2', label: "Leads online en la seva evolució" }, { value: '24/7', label: 'CRM, web i WhatsApp actius' } ], ecosystemTitle: 'Un client des del dia u', ecosystemLead: "Muy Car va néixer recolzant-se en Motorflash i ha anat incorporant cada vegada més solucions a mesura que el negoci creixia.", ecosystemItems: [ "CRM4YOU integrat amb l'operativa comercial", 'Web corporativa Motorflash', 'Motorflash Message · WhatsApp professional' ], quoteVariant: 'light' },
      { slug: 'auto-elia', brand: 'AUTO ELIA', wordmark: 'AUTO ELIA', tagline: 'Volvo · Lynk & Co — concessionari oficial', style: STYLE_AUTOELIA, badge: 'Client · Leads de qualitat', headline: 'Concessionari oficial premium que capta leads de qualitat amb Motorflash Exclusive', introHtml: "Auto Elia, concessionari oficial Volvo i Lynk &amp; Co, opera amb un pack Motorflash molt orientat a captació qualificada: <strong>web corporativa</strong>, <strong>màrqueting digital</strong>, <strong>publicació d'estoc</strong> i el servei premium <strong>Motorflash Exclusive</strong> per <strong>aconseguir leads de qualitat</strong>, amb alta intenció de compra i millor conversió a venda.", quote: 'Operem amb estàndards de marca molt exigents i necessitem leads realment qualificats. Motorflash Exclusive, juntament amb la web i el màrqueting digital, ens porta contactes amb veritable intenció de compra coherents amb Volvo i Lynk & Co.', author: 'Direcció de Màrqueting, Grup Auto Elia', stats: [ { value: '4', label: 'Productes Motorflash contractats' }, { value: '+74%', label: 'Leads qualificats captats' }, { value: '+55%', label: 'Conversió a venda km 0 i VO premium' }, { value: 'Exclusive', label: 'Leads de qualitat premium' } ], ecosystemTitle: 'Captació qualificada multimarca', ecosystemLead: "Auto Elia combina web, màrqueting digital, publicació d'estoc i Motorflash Exclusive per generar leads amb alta intenció de compra.", ecosystemItems: [ 'Web corporativa Motorflash', 'Marketing Digital gestionat', "Publicació d'estoc optimitzada", 'Motorflash Exclusive — leads premium' ], quoteVariant: 'dark' },
    ],
  },
  en: {
    metaTitle: 'Success stories',
    metaDescription: 'Customers trusting Motorflash Solutions for years. Real results from Jarmauto, Ocasionplus, Flexicar, Muy Car and Auto Elia.',
    metaOg: 'Jarmauto, Ocasionplus, Flexicar, Muy Car and Auto Elia: real results from leading dealerships.',
    heroEyebrow: 'Success stories',
    heroTitle1: 'Clients that trust us',
    heroTitle2: 'for years',
    heroLead: 'Real results from leading dealerships that have grown with Motorflash Solutions. From multi-brand groups running the full ecosystem to specialists using just one specific piece.',
    trustHeading: 'They trust us',
    morePill1: '+1,500',
    morePill2: 'more clients',
    productsLabel: 'PRODUCTS USED',
    ctaTitle: 'Want your brand to be the next case?',
    ctaLead: "Tell us your commercial challenge and we'll walk you through a case from a group your size. In 30 minutes you know which pieces you need, what they cost and when you'd start selling more.",
    ctaButton: 'Talk to a specialist',
    cases: [
      { slug: 'jarmauto', brand: 'JARMAUTO', wordmark: 'Jarmauto', tagline: 'Automotive group · Madrid', logo: LOGO_JARMAUTO, style: STYLE_JARMAUTO, badge: 'Premium client · Full ecosystem', headline: 'The number 1 client of the company', introHtml: 'Jarmauto is Motorflash Solutions’ number 1 client. A multi-brand group with several locations in the Madrid region, it has contracted <strong>every product</strong> we offer — web, CRM4YOU, Contact Center (Customer Manager) and Digital Marketing — to cover lead capture, management and closing end to end.', quote: 'Motorflash has been key to Jarmauto’s digital transformation. Having the web, CRM, Contact Center and digital marketing from the same partner lets us work with consistent data and a single source of truth.', author: 'Sales Management, Jarmauto', stats: [ { value: '4', label: 'Motorflash products in use' }, { value: '+180%', label: 'Online leads over 3 years' }, { value: '-32%', label: 'Cost per lead' }, { value: '360°', label: 'Customer view' } ], ecosystemTitle: 'A 360° technology partner', ecosystemLead: 'Jarmauto runs on the full Motorflash Solutions ecosystem.', ecosystemItems: [ 'Motorflash corporate website', 'CRM4YOU — group sales management', 'Contact Center · Customer Manager', 'Digital Marketing managed by Motorflash' ], quoteVariant: 'dark' },
      { slug: 'ocasionplus', brand: 'OCASIONPLUS', wordmark: 'ocasionplus.com', tagline: 'National used-vehicle network', logo: LOGO_OCASIONPLUS, style: STYLE_OCASIONPLUS, badge: 'Stock specialist · Operational client', headline: "One of Spain's largest used-vehicle networks, supported by our stock management", introHtml: 'Ocasionplus uses Motorflash Solutions as a stock management engine: vehicle export to portals and partners, <strong>multi-publishing</strong> to maximise visibility and <strong>online appraisal</strong> to speed up used-vehicle purchases. Three surgical pieces that boost their national operation without touching their internal ecosystem.', quote: 'We needed specialists who understood how a used-vehicle stock works at scale. Motorflash doesn’t apply a closed recipe: they adapt to each brand, model and stock case, which at operational level is tremendously complex and makes the difference.', author: 'Operations, Ocasionplus', stats: [ { value: '3', label: 'Motorflash services in use' }, { value: '+45%', label: 'Stock rotation' }, { value: '-28%', label: 'Average days to sale' }, { value: '24h', label: 'Online appraisal' } ], ecosystemTitle: 'Stock rotation and visibility at national scale', ecosystemLead: 'Ocasionplus supports its stock operation with Motorflash Solutions: export, multi-publishing and online appraisal.', ecosystemItems: [ 'Vehicle export services', 'Multi-publishing across sector portals', 'Online stock appraisal' ], quoteVariant: 'dark' },
      { slug: 'flexicar', brand: 'FLEXICAR', wordmark: 'flexicar', tagline: 'Used-vehicle network · Iberia', logo: LOGO_FLEXICAR, style: STYLE_FLEXICAR, badge: 'Client · Motorflash Message', headline: 'All the power of WhatsApp for used vehicles with Motorflash Message', introHtml: 'Flexicar, the largest used-vehicle network in Iberia, has contracted <strong>only</strong> the <strong>Motorflash Message</strong> service to manage WhatsApp at scale. The platform lets them unify conversations across every centre, assign leads to the right rep and measure performance per store.', quote: "WhatsApp has become the number 1 conversation channel with the buyer. Motorflash Message lets us treat it as a professional channel: with rules, assignments and per-centre reporting.", author: 'Digital, Grupo Flexicar', stats: [ { value: '1', label: 'Service in use: Motorflash Message' }, { value: '+180', label: 'Centres with unified WhatsApp' }, { value: '+62%', label: 'Replies in under 5 min' }, { value: 'ES+PT', label: 'Iberian operation' } ], ecosystemTitle: 'WhatsApp as a professional sales channel', ecosystemLead: 'Flexicar uses Motorflash Message to manage sales conversations on WhatsApp across the whole network.', ecosystemItems: [ 'WhatsApp Business unified by group', 'Automatic lead assignment to sales rep', 'Per-centre templates and quick replies', 'Conversation and conversion reporting' ], quoteVariant: 'light' },
      { slug: 'muy-car', brand: 'MUY CAR', wordmark: 'MUY CAR', tagline: 'Digital-native dealership', logo: LOGO_MUYCAR, style: STYLE_MUYCAR, badge: 'Born with Motorflash · Grew with us', headline: 'Born with Motorflash, grown with us', introHtml: 'Muy Car is one of those cases that make us proud: <strong>they were born with Motorflash and have grown with us</strong>. Today they use <strong>CRM4YOU</strong> to run the full sales cycle, the <strong>corporate website</strong> as a professional online storefront and <strong>Motorflash Message</strong> to handle WhatsApp as a sales channel.', quote: "We started the project alongside Motorflash and we've added pieces as we grew. First CRM4YOU, then the website and now Motorflash Message for WhatsApp: everything fits and works with the same data.", author: 'Head of Used Vehicles, Muy Car', stats: [ { value: '3', label: 'Products in use (CRM + web + Message)' }, { value: 'Day 1', label: 'Client from the start of the business' }, { value: '×3.2', label: 'Online lead growth' }, { value: '24/7', label: 'CRM, web and WhatsApp active' } ], ecosystemTitle: 'A client from day one', ecosystemLead: 'Muy Car was born on top of Motorflash and has added more solutions as the business grew.', ecosystemItems: [ 'CRM4YOU integrated with sales operations', 'Motorflash corporate website', 'Motorflash Message · professional WhatsApp' ], quoteVariant: 'light' },
      { slug: 'auto-elia', brand: 'AUTO ELIA', wordmark: 'AUTO ELIA', tagline: 'Volvo · Lynk & Co — official dealership', style: STYLE_AUTOELIA, badge: 'Client · Quality leads', headline: 'Premium official dealership capturing quality leads with Motorflash Exclusive', introHtml: 'Auto Elia, official Volvo and Lynk &amp; Co dealership, runs a Motorflash pack tailored for qualified lead capture: <strong>corporate website</strong>, <strong>digital marketing</strong>, <strong>stock publication</strong> and the premium <strong>Motorflash Exclusive</strong> service for <strong>quality leads</strong>, with high purchase intent and better conversion to sale.', quote: 'We operate to very demanding brand standards and need truly qualified leads. Motorflash Exclusive, together with the website and digital marketing, brings us contacts with real purchase intent — coherent with Volvo and Lynk & Co.', author: 'Marketing, Grupo Auto Elia', stats: [ { value: '4', label: 'Motorflash products in use' }, { value: '+74%', label: 'Qualified leads captured' }, { value: '+55%', label: 'Conversion to km 0 / premium UV sale' }, { value: 'Exclusive', label: 'Premium-quality leads' } ], ecosystemTitle: 'Multi-brand qualified lead capture', ecosystemLead: 'Auto Elia combines web, digital marketing, stock publishing and Motorflash Exclusive to generate high-intent leads.', ecosystemItems: [ 'Motorflash corporate website', 'Managed Digital Marketing', 'Optimised stock publication', 'Motorflash Exclusive — premium leads' ], quoteVariant: 'dark' },
    ],
  },
  zh: {
    metaTitle: '成功案例',
    metaDescription: '多年来信赖 Motorflash Solutions 的客户。来自 Jarmauto、Ocasionplus、Flexicar、Muy Car 与 Auto Elia 的真实成果。',
    metaOg: 'Jarmauto、Ocasionplus、Flexicar、Muy Car 与 Auto Elia:领先经销商的真实成果。',
    heroEyebrow: '成功案例',
    heroTitle1: '多年来信赖我们的',
    heroTitle2: '客户',
    heroLead: '与 Motorflash Solutions 共同成长的领先经销商的真实成果。从拥有完整生态的多品牌集团,到只使用某一特定模块的专业玩家。',
    trustHeading: '他们信赖我们',
    morePill1: '+1,500',
    morePill2: '其他客户',
    productsLabel: '已使用产品',
    ctaTitle: '想让您的品牌成为下一个案例吗?',
    ctaLead: '告诉我们您的商业挑战,我们为您展示与您规模相近的集团案例。30 分钟内您就能明白需要哪些模块、成本几何,以及何时能开始卖出更多。',
    ctaButton: '与专家沟通',
    cases: [
      { slug: 'jarmauto', brand: 'JARMAUTO', wordmark: 'Jarmauto', tagline: '汽车集团 · 马德里', logo: LOGO_JARMAUTO, style: STYLE_JARMAUTO, badge: '高级客户 · 完整生态', headline: '公司的第一大客户', introHtml: 'Jarmauto 是 Motorflash Solutions 的第一大客户。这家位于马德里大区的多品牌集团使用我们的<strong>全部产品</strong> — 网站、CRM4YOU、Contact Center(Customer Manager)与数字营销 — 覆盖从获客、管理到成交的全流程。', quote: 'Motorflash 是 Jarmauto 数字化转型的关键。让网站、CRM、Contact Center 与数字营销由同一合作伙伴提供,使我们能够基于一致的数据和单一事实来源开展工作。', author: 'Jarmauto 销售管理层', stats: [ { value: '4', label: '在用的 Motorflash 产品' }, { value: '+180%', label: '3 年内线上潜客' }, { value: '-32%', label: '潜客成本' }, { value: '360°', label: '客户视角' } ], ecosystemTitle: '360° 技术合作伙伴', ecosystemLead: 'Jarmauto 运行于 Motorflash Solutions 的完整生态。', ecosystemItems: [ 'Motorflash 企业网站', 'CRM4YOU — 集团销售管理', 'Contact Center · Customer Manager', '由 Motorflash 管理的数字营销' ], quoteVariant: 'dark' },
      { slug: 'ocasionplus', brand: 'OCASIONPLUS', wordmark: 'ocasionplus.com', tagline: '全国二手车网络', logo: LOGO_OCASIONPLUS, style: STYLE_OCASIONPLUS, badge: '库存专家 · 运营型客户', headline: '西班牙最大的二手车网络之一,以我们的库存管理为支撑', introHtml: 'Ocasionplus 将 Motorflash Solutions 用作库存管理引擎:向门户与合作方导出车辆、用 <strong>多平台发布</strong> 最大化曝光,并用 <strong>在线估值</strong> 加速二手车收购。这三块精准模块在不动其内部生态的前提下增强了其全国运营。', quote: '我们需要懂得大规模二手车库存运作的专家。Motorflash 不强加固定方案:他们针对每个品牌、车型与库存情况进行适配,这在运营层面非常复杂,却也正是差异化所在。', author: 'Ocasionplus 运营部', stats: [ { value: '3', label: '在用的 Motorflash 服务' }, { value: '+45%', label: '库存周转' }, { value: '-28%', label: '平均成交天数' }, { value: '24h', label: '在线估值' } ], ecosystemTitle: '全国级的库存周转与曝光', ecosystemLead: 'Ocasionplus 依靠 Motorflash Solutions 支撑其库存运营:导出、多平台发布与在线估值。', ecosystemItems: [ '车辆导出服务', '面向行业门户的多平台发布', '在线库存估值' ], quoteVariant: 'dark' },
      { slug: 'flexicar', brand: 'FLEXICAR', wordmark: 'flexicar', tagline: '二手车网络 · 伊比利亚', logo: LOGO_FLEXICAR, style: STYLE_FLEXICAR, badge: '客户 · Motorflash Message', headline: '用 Motorflash Message 释放二手车 WhatsApp 的全部潜力', introHtml: 'Flexicar 是伊比利亚最大的二手车网络,与 Motorflash <strong>仅</strong>使用 <strong>Motorflash Message</strong> 服务以规模化运营 WhatsApp。该平台让其统一所有门店的对话、将潜客分配给合适的销售并按门店衡量绩效。', quote: 'WhatsApp 已成为与买家沟通的头号渠道。Motorflash Message 让我们把它作为专业渠道运营:有规则、有分配、按门店有报告。', author: 'Grupo Flexicar 数字化部', stats: [ { value: '1', label: '在用服务:Motorflash Message' }, { value: '+180', label: '统一 WhatsApp 的门店' }, { value: '+62%', label: '5 分钟内回复占比' }, { value: 'ES+PT', label: '伊比利亚运营' } ], ecosystemTitle: '把 WhatsApp 作为专业销售渠道', ecosystemLead: 'Flexicar 使用 Motorflash Message 在整个网络中通过 WhatsApp 管理销售对话。', ecosystemItems: [ '按集团统一的 WhatsApp Business', '潜客自动分配给销售', '按门店的模板与快速回复', '对话与转化报告' ], quoteVariant: 'light' },
      { slug: 'muy-car', brand: 'MUY CAR', wordmark: 'MUY CAR', tagline: '数字原生经销商', logo: LOGO_MUYCAR, style: STYLE_MUYCAR, badge: '与 Motorflash 同生 · 与我们共成长', headline: '诞生于 Motorflash,与我们共同成长', introHtml: 'Muy Car 是让我们引以为豪的客户之一:<strong>他们诞生于 Motorflash 并与我们一同成长</strong>。如今他们使用 <strong>CRM4YOU</strong> 管理完整销售周期、<strong>企业网站</strong> 作为专业在线门面,并以 <strong>Motorflash Message</strong> 将 WhatsApp 作为销售渠道。', quote: '项目从一开始就与 Motorflash 同行,随着业务成长不断增添模块。先是 CRM4YOU,然后是网站,现在是用于 WhatsApp 的 Motorflash Message:一切契合且共用同一份数据。', author: 'Muy Car 二手车负责人', stats: [ { value: '3', label: '在用产品(CRM + 网站 + Message)' }, { value: '第 1 天', label: '业务诞生即为客户' }, { value: '×3.2', label: '线上潜客的增长' }, { value: '24/7', label: 'CRM、网站与 WhatsApp 始终在线' } ], ecosystemTitle: '从第一天起就在我们的客户行列', ecosystemLead: 'Muy Car 以 Motorflash 起步,并随业务成长不断加入更多解决方案。', ecosystemItems: [ 'CRM4YOU 与销售运营集成', 'Motorflash 企业网站', 'Motorflash Message · 专业 WhatsApp' ], quoteVariant: 'light' },
      { slug: 'auto-elia', brand: 'AUTO ELIA', wordmark: 'AUTO ELIA', tagline: 'Volvo · Lynk & Co — 官方经销商', style: STYLE_AUTOELIA, badge: '客户 · 优质潜客', headline: '使用 Motorflash Exclusive 获取优质潜客的高端官方经销商', introHtml: 'Auto Elia 是 Volvo 与 Lynk &amp; Co 官方经销商,使用面向精准获客的 Motorflash 套件:<strong>企业网站</strong>、<strong>数字营销</strong>、<strong>库存发布</strong>,以及高端 <strong>Motorflash Exclusive</strong> 服务,以获取 <strong>购买意向高、转化更佳</strong> 的优质潜客。', quote: '我们以严格的品牌标准运营,需要真正高质量的潜客。Motorflash Exclusive 配合网站与数字营销,带来与 Volvo 与 Lynk & Co 一致、具有真实购买意向的客户。', author: 'Grupo Auto Elia 市场部', stats: [ { value: '4', label: '在用的 Motorflash 产品' }, { value: '+74%', label: '已获取的优质潜客' }, { value: '+55%', label: 'km 0 与优质二手车转化' }, { value: 'Exclusive', label: '高端优质潜客' } ], ecosystemTitle: '多品牌的精准获客', ecosystemLead: 'Auto Elia 通过网站、数字营销、库存发布与 Motorflash Exclusive,产生高购买意向的潜客。', ecosystemItems: [ 'Motorflash 企业网站', '受托管的数字营销', '优化的库存发布', 'Motorflash Exclusive — 高端潜客' ], quoteVariant: 'dark' },
    ],
  },
}

/** Devuelve la página completa en el locale pedido leyendo solo del catálogo estático. */
export function getSuccessCasesPageStatic(locale: SuccessCaseLocale = 'es'): SuccessCasesPage {
  return STATIC_COPY[locale] ?? STATIC_COPY.es
}

/**
 * Wrapper async: arma la página combinando el chrome estático (meta,
 * hero, CTA — sigue en código mientras no esté en el CMS) con los
 * casos leídos del CMS si existen. Si no hay docs en BD, cae al
 * `cases[]` estático.
 *
 * Cuando hagamos F4 (Globals por página), el chrome también vendrá
 * del CMS — por ahora se queda estático.
 */
interface CmsSuccessCaseDoc {
  slug: string
  order?: number
  brand?: string
  wordmark?: string
  tagline?: string
  badge?: string
  headline?: string
  introHtml?: string
  quote?: string
  author?: string
  ecosystemTitle?: string
  ecosystemLead?: string
  quoteVariant?: 'light' | 'dark'
  stats?: { value?: string; label?: string }[]
  ecosystemItems?: { text?: string }[]
  brandStyle?: { primary?: string; ink?: string; banner?: string; wordmarkClass?: string }
  logo?: { src?: string; alt?: string; width?: number | string; height?: number | string }
}

function docToCase(doc: CmsSuccessCaseDoc, fallback?: SuccessCase): SuccessCase {
  const base = fallback ?? STATIC_COPY.es.cases.find((c) => c.slug === doc.slug)
  const style: BrandStyle = {
    primary: doc.brandStyle?.primary || base?.style.primary || '#111111',
    ink: doc.brandStyle?.ink || base?.style.ink || '#0A0A0A',
    banner: doc.brandStyle?.banner || base?.style.banner || 'linear-gradient(135deg,#0A0A0A,#1F1F1F,#4A4A4A)',
    wordmarkClass: doc.brandStyle?.wordmarkClass || base?.style.wordmarkClass,
  }
  const logoSrc = doc.logo?.src || base?.logo?.src
  const logoW = Number(doc.logo?.width ?? base?.logo?.width ?? 0)
  const logoH = Number(doc.logo?.height ?? base?.logo?.height ?? 0)
  const logo: ClientLogo | undefined = logoSrc && logoW && logoH
    ? { src: logoSrc, width: logoW, height: logoH, alt: doc.logo?.alt || base?.logo?.alt || doc.brand || doc.slug }
    : base?.logo
  return {
    slug: doc.slug,
    brand: doc.brand || base?.brand || doc.slug,
    wordmark: doc.wordmark || base?.wordmark || doc.slug,
    tagline: doc.tagline || base?.tagline || '',
    badge: doc.badge || base?.badge || '',
    headline: doc.headline || base?.headline || '',
    introHtml: doc.introHtml || base?.introHtml || '',
    quote: doc.quote || base?.quote || '',
    author: doc.author || base?.author || '',
    stats: (doc.stats && doc.stats.length > 0)
      ? doc.stats.map((s) => ({ value: s.value || '', label: s.label || '' }))
      : (base?.stats ?? []),
    ecosystemTitle: doc.ecosystemTitle || base?.ecosystemTitle || '',
    ecosystemLead: doc.ecosystemLead || base?.ecosystemLead || '',
    ecosystemItems: (doc.ecosystemItems && doc.ecosystemItems.length > 0)
      ? doc.ecosystemItems.map((it) => it.text || '').filter(Boolean)
      : (base?.ecosystemItems ?? []),
    style,
    logo,
    quoteVariant: (doc.quoteVariant === 'light' || doc.quoteVariant === 'dark')
      ? doc.quoteVariant
      : (base?.quoteVariant ?? 'dark'),
  }
}

const fetchCmsCases = cache(async (locale: SuccessCaseLocale): Promise<SuccessCase[] | null> => {
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const { docs } = (await payload.find({
      collection: 'success-cases' as any,
      locale: locale as any,
      limit: 50,
      sort: 'order',
      depth: 0,
    })) as { docs: CmsSuccessCaseDoc[] }
    if (!docs || docs.length === 0) return null
    const fallbackBySlug = new Map(
      (STATIC_COPY[locale] ?? STATIC_COPY.es).cases.map((c) => [c.slug, c]),
    )
    return docs
      .filter((d): d is CmsSuccessCaseDoc => Boolean(d && d.slug))
      .map((d) => docToCase(d, fallbackBySlug.get(d.slug)))
  } catch {
    return null
  }
})

/** Campos textuales del chrome (todo salvo `cases`). */
type SuccessCasesChrome = Omit<SuccessCasesPage, 'cases'>

function mergeChrome(
  doc: Partial<SuccessCasesChrome> | null | undefined,
  fallback: SuccessCasesChrome,
): SuccessCasesChrome {
  if (!doc) return fallback
  const out: SuccessCasesChrome = { ...fallback }
  for (const k of Object.keys(fallback) as (keyof SuccessCasesChrome)[]) {
    const v = doc[k]
    if (typeof v === 'string' && v.trim().length > 0) out[k] = v
  }
  return out
}

const fetchCmsChrome = cache(async (locale: SuccessCaseLocale): Promise<Partial<SuccessCasesChrome> | null> => {
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    const doc = (await payload.findGlobal({
      slug: 'success-stories-page' as any,
      locale: locale as any,
      depth: 0,
    })) as Partial<SuccessCasesChrome> | null
    return doc ?? null
  } catch {
    return null
  }
})

/**
 * Devuelve la página de casos de éxito en el locale dado, leyendo
 * del CMS tanto el chrome (global `success-stories-page`) como los
 * casos (colección `success-cases`) y cayendo al catálogo estático
 * en caso contrario.
 */
export async function getSuccessCasesPage(locale: SuccessCaseLocale = 'es'): Promise<SuccessCasesPage> {
  const baseAll = STATIC_COPY[locale] ?? STATIC_COPY.es
  const { cases: baseCases, ...baseChrome } = baseAll
  const [fromCmsCases, fromCmsChrome] = await Promise.all([
    fetchCmsCases(locale),
    fetchCmsChrome(locale),
  ])
  const chrome = mergeChrome(fromCmsChrome, baseChrome)
  const cases = fromCmsCases && fromCmsCases.length > 0 ? fromCmsCases : baseCases
  return { ...chrome, cases }
}

/** Helpers para el seed — exportados para sync-schema.mjs. */
export function styleForSlug(slug: string): BrandStyle {
  return STYLES_BY_SLUG[slug] ?? STYLE_JARMAUTO
}

export function logoForSlug(slug: string): ClientLogo | undefined {
  return LOGOS_BY_SLUG[slug]
}
