import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

type Locale = 'es' | 'ca' | 'en' | 'zh'

const BC_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BC_COMPANY: Record<SeoLocale, string> = { es: 'La compañía', ca: 'La companyia', en: 'The company', zh: '公司' }
const BC_SUS: Record<SeoLocale, string> = { es: 'Sostenibilidad', ca: 'Sostenibilitat', en: 'Sustainability', zh: '可持续发展' }

function resolveSeoLocale(l: Locale): SeoLocale {
  return SEO_LOCALES.includes(l as SeoLocale) ? l : 'es'
}

const PDF_HREF = '/documents/informe-sostenibilidad-2025.pdf'

interface CardCopy { icon: string; title: string; desc: string }
interface Stat { v: string; unit: string; l: string }
interface EnergyRow { label: string; value: string }
interface GhgRow { label: string; market: string; location: string }

interface SustainabilityCopy {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title1: string
    titleAccent: string
    lead: string
    checks: string[]
    downloadCta: string
    viewDataCta: string
  }
  statement: { mark: string; quote: string; sign: string }
  commitment: { kicker: string; title: string; intro: string; cards: CardCopy[] }
  env: {
    kicker: string
    title: string
    intro: string
    stats: Stat[]
    energy: {
      sectionTitle: string
      caption: string
      headers: [string, string]
      rows: EnergyRow[]
      note: string
    }
    ghg: {
      sectionTitle: string
      caption: string
      headers: [string, string, string]
      rows: GhgRow[]
      totalLabel: string
      totalMarket: string
      totalLocation: string
      note: string
    }
  }
  people: { kicker: string; title: string; intro: string; cards: CardCopy[] }
  ethics: { kicker: string; title: string; intro: string; cards: CardCopy[] }
  targets: {
    kicker: string
    title: string
    items: { yr: string; strong: string; text: string }[]
  }
  cta: { title: string; lead: string; downloadCta: string; contactCta: string }
}

const COPY: Record<Locale, SustainabilityCopy> = {
  es: {
    meta: {
      title: 'Sostenibilidad · Ejercicio 2025',
      description:
        'El compromiso de Motorflash con la sostenibilidad: desempeño medioambiental, huella de carbono, prácticas laborales y ética empresarial. Datos verificables del ejercicio 2025.',
    },
    hero: {
      eyebrow: 'Compromiso corporativo · Ejercicio 2025',
      title1: 'Sostenibilidad en',
      titleAccent: 'Motorflash',
      lead: 'Integramos la sostenibilidad en cómo trabajamos: medimos nuestra huella, cuidamos a nuestro equipo y operamos con integridad. Este es nuestro desempeño real, con datos verificables del ejercicio 2025.',
      checks: [
        'Electricidad 98,3 % renovable certificada con Garantías de Origen (GdO)',
        'Huella de carbono calculada según el GHG Protocol, alcances 1, 2 y 3',
        'Tasa de reciclaje del 60,9 %, por encima de nuestro objetivo del 55 %',
        'Compromiso Net-Zero a través del SME Climate Hub (alineado con SBTi)',
      ],
      downloadCta: 'Descargar Informe de Sostenibilidad 2025',
      viewDataCta: 'Ver nuestros datos',
    },
    statement: {
      mark: 'Nuestro compromiso con la sostenibilidad',
      quote:
        'Entendemos la sostenibilidad como un compromiso propio y permanente: medir y reducir nuestra huella, cuidar a las personas que forman el equipo y operar siempre con integridad.',
      sign: 'Este compromiso se traduce en objetivos concretos, datos verificables y una mejora continua año tras año.',
    },
    commitment: {
      kicker: 'Nuestro enfoque',
      title: 'Una empresa española que crece de forma responsable',
      intro:
        'Motorflash Ibérica de Negocios, S.L. desarrolla soluciones digitales para el sector de la automoción desde 2007. Toda nuestra actividad se concentra en una única sede en Madrid, donde aplicamos nuestros compromisos de sostenibilidad de forma directa y medible.',
      cards: [
        { icon: 'public', title: 'Ámbito y alcance', desc: 'Sede única en Madrid, con 90 personas en plantilla a cierre de 2025. La totalidad de nuestro reporte cubre las operaciones reales de la entidad española.' },
        { icon: 'trending_down', title: 'Compromiso climático', desc: 'El 20 de mayo de 2026 formalizamos nuestra adhesión a través del SME Climate Hub, comprometiéndonos a reducir un 50 % las emisiones de Alcance 1 y 2 frente a 2024 y alcanzar Net-Zero antes de 2030.' },
        { icon: 'verified', title: 'Reporte verificable', desc: 'Elaboramos nuestro informe anual conforme al estándar VSME del EFRAG, con métricas trazables y factores de emisión oficiales de la Agencia Europea de Medio Ambiente e IDAE.' },
      ],
    },
    env: {
      kicker: 'Medioambiente',
      title: 'Desempeño medioambiental 2025',
      intro: 'Consumimos energía únicamente en forma de electricidad y medimos cada fracción de residuo generado en nuestra sede. Estos son los resultados del ejercicio, con su año y unidad de referencia.',
      stats: [
        { v: '12.692', unit: 'kWh', l: 'Consumo eléctrico total (2025)' },
        { v: '98,3', unit: '%', l: 'Energía renovable certificada (GdO)' },
        { v: '5,40', unit: 'tCO₂e', l: 'Emisiones A1+A2 (método mercado)' },
        { v: '60,9', unit: '%', l: 'Tasa de reciclaje de residuos' },
      ],
      energy: {
        sectionTitle: 'Consumo de energía',
        caption: 'Ejercicio 2025 · fuente: facturas eléctricas Eleia Energía y Naturgy',
        headers: ['Indicador', 'Valor 2025'],
        rows: [
          { label: 'Consumo eléctrico total', value: '12.692 kWh' },
          { label: 'Con energía renovable certificada (GdO)', value: '12.476 kWh' },
          { label: 'Con mix de red', value: '216 kWh' },
          { label: 'Intensidad energética', value: '1.686 kWh/M€' },
          { label: 'Consumo por empleado', value: '141 kWh' },
        ],
        note: 'El 98,3 % del consumo está cubierto por Garantías de Origen renovables. El 1,7 % restante corresponde a un período puntual con mix de red.',
      },
      ghg: {
        sectionTitle: 'Emisiones de GEI',
        caption: 'Ejercicio 2025 · toneladas de CO₂ equivalente (tCO₂e) · GHG Protocol',
        headers: ['Alcance', 'Mercado', 'Ubicación'],
        rows: [
          { label: 'Alcance 1 — flota de empresa', market: '5,39', location: '5,39' },
          { label: 'Alcance 2 — electricidad (sede)', market: '0,01', location: '2,30' },
        ],
        totalLabel: 'Total A1 + A2',
        totalMarket: '5,40',
        totalLocation: '7,69',
        note: 'Solo entran en Alcance 1 los vehículos cuyo combustible paga directamente la empresa. El método de mercado refleja la electricidad 100 % renovable certificada por GdO.',
      },
    },
    people: {
      kicker: 'Personas',
      title: 'Prácticas laborales y derechos humanos',
      intro: 'Nuestro equipo es el centro de la empresa. Apostamos por el empleo estable, la igualdad de oportunidades y un entorno de trabajo seguro y saludable.',
      cards: [
        { icon: 'badge', title: 'Empleo estable', desc: 'El 100 % de la plantilla cuenta con contrato indefinido a tiempo completo, eliminando cualquier diferencia de trato derivada de la modalidad contractual.' },
        { icon: 'balance', title: 'Igualdad', desc: 'Disponemos de Plan de Igualdad y formación específica en igualdad, con protocolos de prevención del acoso y un mecanismo de reclamación accesible y confidencial.' },
        { icon: 'health_and_safety', title: 'Seguridad y salud', desc: 'Gestionamos la prevención de riesgos laborales y promovemos el bienestar del equipo, incluyendo beneficios de salud dentro de la retribución flexible.' },
      ],
    },
    ethics: {
      kicker: 'Gobernanza',
      title: 'Ética empresarial e integridad',
      intro: 'Operamos con transparencia y protegemos la información de nuestros clientes conforme a los estándares más exigentes del sector.',
      cards: [
        { icon: 'shield', title: 'Seguridad de la información', desc: 'Certificación ISO/IEC 27001:2022 (TÜV Rheinland) para nuestro Contact Center, servicios de atención al cliente, diseño, gestión de proyectos y programación.' },
        { icon: 'campaign', title: 'Canal ético', desc: 'Canal de denuncias disponible de forma permanente para empleados y terceros, con garantía de confidencialidad y no represalias. Sin incidentes confirmados en el período.' },
        { icon: 'lock', title: 'Protección de datos', desc: 'Aplicamos controles de acceso y medidas técnicas y organizativas para proteger los datos personales de terceros frente a accesos o divulgaciones no autorizados.' },
      ],
    },
    targets: {
      kicker: 'Hoja de ruta',
      title: 'Nuestros objetivos de sostenibilidad',
      items: [
        { yr: '2030', strong: 'Net-Zero.', text: 'Alcanzar cero emisiones netas, en línea con nuestra adhesión a través del SME Climate Hub.' },
        { yr: '2030', strong: '−50 % de emisiones.', text: 'Reducir a la mitad las emisiones de Alcance 1 y 2 respecto al año base 2024.' },
        { yr: 'Anual', strong: 'Energía 100 % renovable.', text: 'Mantener el suministro eléctrico cubierto íntegramente por Garantías de Origen.' },
        { yr: 'Anual', strong: 'Reciclaje >55 %.', text: 'Sostener y mejorar la tasa de recuperación de residuos por encima del objetivo interno.' },
      ],
    },
    cta: {
      title: 'Consulta nuestro Informe de Sostenibilidad 2025 completo',
      lead: 'Todos los datos de este resumen, con su metodología y detalle por indicador, están disponibles en nuestro informe anual elaborado conforme al estándar VSME.',
      downloadCta: 'Descargar el informe (PDF)',
      contactCta: 'Contactar con nosotros',
    },
  },

  ca: {
    meta: {
      title: 'Sostenibilitat · Exercici 2025',
      description:
        'El compromís de Motorflash amb la sostenibilitat: acompliment mediambiental, petjada de carboni, pràctiques laborals i ètica empresarial. Dades verificables de l’exercici 2025.',
    },
    hero: {
      eyebrow: 'Compromís corporatiu · Exercici 2025',
      title1: 'Sostenibilitat a',
      titleAccent: 'Motorflash',
      lead: "Integrem la sostenibilitat en com treballem: mesurem la nostra petjada, cuidem el nostre equip i operem amb integritat. Aquest és el nostre acompliment real, amb dades verificables de l'exercici 2025.",
      checks: [
        'Electricitat 98,3 % renovable certificada amb Garanties d’Origen (GdO)',
        'Petjada de carboni calculada segons el GHG Protocol, abastos 1, 2 i 3',
        'Taxa de reciclatge del 60,9 %, per sobre del nostre objectiu del 55 %',
        'Compromís Net-Zero a través del SME Climate Hub (alineat amb SBTi)',
      ],
      downloadCta: 'Descarregar Informe de Sostenibilitat 2025',
      viewDataCta: 'Veure les nostres dades',
    },
    statement: {
      mark: 'El nostre compromís amb la sostenibilitat',
      quote:
        'Entenem la sostenibilitat com un compromís propi i permanent: mesurar i reduir la nostra petjada, cuidar les persones que formen l’equip i operar sempre amb integritat.',
      sign: 'Aquest compromís es tradueix en objectius concrets, dades verificables i una millora contínua any rere any.',
    },
    commitment: {
      kicker: 'El nostre enfocament',
      title: 'Una empresa espanyola que creix de manera responsable',
      intro: "Motorflash Ibérica de Negocios, S.L. desenvolupa solucions digitals per al sector de l'automoció des del 2007. Tota la nostra activitat es concentra en una única seu a Madrid, on apliquem els nostres compromisos de sostenibilitat de manera directa i mesurable.",
      cards: [
        { icon: 'public', title: 'Àmbit i abast', desc: 'Seu única a Madrid, amb 90 persones en plantilla a tancament de 2025. La totalitat del reporte cobreix les operacions reals de l’entitat espanyola.' },
        { icon: 'trending_down', title: 'Compromís climàtic', desc: 'El 20 de maig de 2026 vam formalitzar la nostra adhesió a través del SME Climate Hub, comprometent-nos a reduir un 50 % les emissions d’Abast 1 i 2 respecte a 2024 i assolir Net-Zero abans del 2030.' },
        { icon: 'verified', title: 'Reporte verificable', desc: "Elaborem el nostre informe anual conforme a l'estàndard VSME de l'EFRAG, amb mètriques traçables i factors d'emissió oficials de l'Agència Europea de Medi Ambient i IDAE." },
      ],
    },
    env: {
      kicker: 'Medi ambient',
      title: 'Acompliment mediambiental 2025',
      intro: 'Consumim energia únicament en forma d’electricitat i mesurem cada fracció de residu generat a la nostra seu. Aquests són els resultats de l’exercici, amb el seu any i unitat de referència.',
      stats: [
        { v: '12.692', unit: 'kWh', l: 'Consum elèctric total (2025)' },
        { v: '98,3', unit: '%', l: 'Energia renovable certificada (GdO)' },
        { v: '5,40', unit: 'tCO₂e', l: 'Emissions A1+A2 (mètode mercat)' },
        { v: '60,9', unit: '%', l: 'Taxa de reciclatge de residus' },
      ],
      energy: {
        sectionTitle: 'Consum d’energia',
        caption: 'Exercici 2025 · font: factures elèctriques Eleia Energía i Naturgy',
        headers: ['Indicador', 'Valor 2025'],
        rows: [
          { label: 'Consum elèctric total', value: '12.692 kWh' },
          { label: 'Amb energia renovable certificada (GdO)', value: '12.476 kWh' },
          { label: 'Amb mix de xarxa', value: '216 kWh' },
          { label: 'Intensitat energètica', value: '1.686 kWh/M€' },
          { label: 'Consum per empleat', value: '141 kWh' },
        ],
        note: 'El 98,3 % del consum està cobert per Garanties d’Origen renovables. L’1,7 % restant correspon a un període puntual amb mix de xarxa.',
      },
      ghg: {
        sectionTitle: 'Emissions de GEH',
        caption: 'Exercici 2025 · tones de CO₂ equivalent (tCO₂e) · GHG Protocol',
        headers: ['Abast', 'Mercat', 'Ubicació'],
        rows: [
          { label: 'Abast 1 — flota d’empresa', market: '5,39', location: '5,39' },
          { label: 'Abast 2 — electricitat (seu)', market: '0,01', location: '2,30' },
        ],
        totalLabel: 'Total A1 + A2',
        totalMarket: '5,40',
        totalLocation: '7,69',
        note: 'Només entren a l’Abast 1 els vehicles el combustible dels quals paga directament l’empresa. El mètode de mercat reflecteix l’electricitat 100 % renovable certificada per GdO.',
      },
    },
    people: {
      kicker: 'Persones',
      title: 'Pràctiques laborals i drets humans',
      intro: 'El nostre equip és el centre de l’empresa. Apostem per l’ocupació estable, la igualtat d’oportunitats i un entorn de treball segur i saludable.',
      cards: [
        { icon: 'badge', title: 'Ocupació estable', desc: 'El 100 % de la plantilla té contracte indefinit a temps complet, eliminant qualsevol diferència de tracte derivada de la modalitat contractual.' },
        { icon: 'balance', title: 'Igualtat', desc: 'Disposem de Pla d’Igualtat i formació específica en igualtat, amb protocols de prevenció de l’assetjament i un mecanisme de reclamació accessible i confidencial.' },
        { icon: 'health_and_safety', title: 'Seguretat i salut', desc: 'Gestionem la prevenció de riscos laborals i promovem el benestar de l’equip, incloent beneficis de salut dins la retribució flexible.' },
      ],
    },
    ethics: {
      kicker: 'Governança',
      title: 'Ètica empresarial i integritat',
      intro: 'Operem amb transparència i protegim la informació dels nostres clients d’acord amb els estàndards més exigents del sector.',
      cards: [
        { icon: 'shield', title: 'Seguretat de la informació', desc: 'Certificació ISO/IEC 27001:2022 (TÜV Rheinland) per al nostre Contact Center, serveis d’atenció al client, disseny, gestió de projectes i programació.' },
        { icon: 'campaign', title: 'Canal ètic', desc: "Canal de denúncies disponible de manera permanent per a empleats i tercers, amb garantia de confidencialitat i no represàlies. Sense incidents confirmats en el període." },
        { icon: 'lock', title: 'Protecció de dades', desc: "Apliquem controls d'accés i mesures tècniques i organitzatives per protegir les dades personals de tercers davant d'accessos o divulgacions no autoritzats." },
      ],
    },
    targets: {
      kicker: 'Full de ruta',
      title: 'Els nostres objectius de sostenibilitat',
      items: [
        { yr: '2030', strong: 'Net-Zero.', text: 'Assolir zero emissions netes, en línia amb la nostra adhesió a través del SME Climate Hub.' },
        { yr: '2030', strong: '−50 % d’emissions.', text: 'Reduir a la meitat les emissions d’Abast 1 i 2 respecte a l’any base 2024.' },
        { yr: 'Anual', strong: 'Energia 100 % renovable.', text: 'Mantenir el subministrament elèctric cobert íntegrament per Garanties d’Origen.' },
        { yr: 'Anual', strong: 'Reciclatge >55 %.', text: 'Sostenir i millorar la taxa de recuperació de residus per sobre de l’objectiu intern.' },
      ],
    },
    cta: {
      title: 'Consulta el nostre Informe de Sostenibilitat 2025 complet',
      lead: 'Totes les dades d’aquest resum, amb la seva metodologia i detall per indicador, estan disponibles al nostre informe anual elaborat conforme a l’estàndard VSME.',
      downloadCta: 'Descarregar l’informe (PDF)',
      contactCta: 'Contactar amb nosaltres',
    },
  },

  en: {
    meta: {
      title: 'Sustainability · 2025 fiscal year',
      description:
        "Motorflash's sustainability commitment: environmental performance, carbon footprint, labour practices and business ethics. Verifiable 2025 data.",
    },
    hero: {
      eyebrow: 'Corporate commitment · 2025 fiscal year',
      title1: 'Sustainability at',
      titleAccent: 'Motorflash',
      lead: 'We embed sustainability in how we work: we measure our footprint, we take care of our team and we operate with integrity. This is our real performance, with verifiable data for fiscal year 2025.',
      checks: [
        '98.3% renewable electricity certified with Guarantees of Origin (GoO)',
        'Carbon footprint calculated under the GHG Protocol, scopes 1, 2 and 3',
        'Recycling rate of 60.9%, above our 55% internal target',
        'Net-Zero commitment via the SME Climate Hub (aligned with SBTi)',
      ],
      downloadCta: 'Download the 2025 Sustainability Report',
      viewDataCta: 'See our data',
    },
    statement: {
      mark: 'Our sustainability commitment',
      quote:
        'We understand sustainability as an ongoing, in-house commitment: measure and reduce our footprint, take care of the people on the team and operate with integrity at all times.',
      sign: 'This commitment translates into concrete targets, verifiable data and continuous improvement year after year.',
    },
    commitment: {
      kicker: 'Our approach',
      title: 'A Spanish company growing responsibly',
      intro: 'Motorflash Ibérica de Negocios, S.L. has been developing digital solutions for the automotive sector since 2007. All our activity is concentrated in a single office in Madrid, where we apply our sustainability commitments directly and measurably.',
      cards: [
        { icon: 'public', title: 'Scope and boundary', desc: 'Single office in Madrid, with 90 people on the payroll at the end of 2025. The full report covers the real operations of the Spanish entity.' },
        { icon: 'trending_down', title: 'Climate commitment', desc: 'On 20 May 2026 we formalised our commitment through the SME Climate Hub, pledging to halve Scope 1 and 2 emissions vs 2024 and reach Net-Zero before 2030.' },
        { icon: 'verified', title: 'Verifiable reporting', desc: 'We produce our annual report following EFRAG’s VSME standard, with traceable metrics and official emission factors from the European Environment Agency and IDAE.' },
      ],
    },
    env: {
      kicker: 'Environment',
      title: '2025 environmental performance',
      intro: 'We consume energy exclusively as electricity and we measure every waste fraction generated at our office. These are the fiscal year results, with their reference year and unit.',
      stats: [
        { v: '12,692', unit: 'kWh', l: 'Total electricity consumption (2025)' },
        { v: '98.3', unit: '%', l: 'Certified renewable energy (GoO)' },
        { v: '5.40', unit: 'tCO₂e', l: 'S1+S2 emissions (market-based)' },
        { v: '60.9', unit: '%', l: 'Waste recycling rate' },
      ],
      energy: {
        sectionTitle: 'Energy consumption',
        caption: '2025 fiscal year · source: electricity invoices from Eleia Energía and Naturgy',
        headers: ['Indicator', '2025 value'],
        rows: [
          { label: 'Total electricity consumption', value: '12,692 kWh' },
          { label: 'With certified renewable energy (GoO)', value: '12,476 kWh' },
          { label: 'With grid mix', value: '216 kWh' },
          { label: 'Energy intensity', value: '1,686 kWh/€M' },
          { label: 'Consumption per employee', value: '141 kWh' },
        ],
        note: '98.3% of consumption is covered by renewable Guarantees of Origin. The remaining 1.7% corresponds to a one-off period on the grid mix.',
      },
      ghg: {
        sectionTitle: 'GHG emissions',
        caption: '2025 fiscal year · tonnes of CO₂ equivalent (tCO₂e) · GHG Protocol',
        headers: ['Scope', 'Market', 'Location'],
        rows: [
          { label: 'Scope 1 — company fleet', market: '5.39', location: '5.39' },
          { label: 'Scope 2 — electricity (office)', market: '0.01', location: '2.30' },
        ],
        totalLabel: 'Total S1 + S2',
        totalMarket: '5.40',
        totalLocation: '7.69',
        note: 'Only vehicles whose fuel the company pays for directly fall under Scope 1. The market-based method reflects 100% renewable electricity certified by GoO.',
      },
    },
    people: {
      kicker: 'People',
      title: 'Labour practices and human rights',
      intro: 'Our team is at the centre of the company. We commit to stable employment, equal opportunities and a safe and healthy work environment.',
      cards: [
        { icon: 'badge', title: 'Stable employment', desc: '100% of our workforce holds an open-ended, full-time contract, removing any differential treatment stemming from the contract type.' },
        { icon: 'balance', title: 'Equality', desc: 'We have an Equality Plan and specific equality training, with harassment prevention protocols and an accessible, confidential grievance channel.' },
        { icon: 'health_and_safety', title: 'Health and safety', desc: 'We manage occupational risk prevention and promote team well-being, including health benefits within our flexible compensation package.' },
      ],
    },
    ethics: {
      kicker: 'Governance',
      title: 'Business ethics and integrity',
      intro: 'We operate with transparency and we protect customer information under the sector’s strictest standards.',
      cards: [
        { icon: 'shield', title: 'Information security', desc: 'ISO/IEC 27001:2022 certification (TÜV Rheinland) for our Contact Center, customer service operations, design, project management and programming.' },
        { icon: 'campaign', title: 'Ethics channel', desc: 'Whistleblowing channel permanently available to employees and third parties, with guaranteed confidentiality and no retaliation. Zero confirmed incidents in the period.' },
        { icon: 'lock', title: 'Data protection', desc: 'We apply access controls and technical and organisational measures to protect third-party personal data from unauthorised access or disclosure.' },
      ],
    },
    targets: {
      kicker: 'Roadmap',
      title: 'Our sustainability targets',
      items: [
        { yr: '2030', strong: 'Net-Zero.', text: 'Reach net-zero emissions, in line with our SME Climate Hub commitment.' },
        { yr: '2030', strong: '−50% emissions.', text: 'Halve Scope 1 and 2 emissions vs the 2024 base year.' },
        { yr: 'Annual', strong: '100% renewable energy.', text: 'Keep the electricity supply fully covered by Guarantees of Origin.' },
        { yr: 'Annual', strong: 'Recycling >55%.', text: 'Sustain and improve the waste recovery rate above our internal target.' },
      ],
    },
    cta: {
      title: 'Read our full 2025 Sustainability Report',
      lead: 'All the data in this summary, with its methodology and per-indicator detail, is available in our annual report prepared under the VSME standard.',
      downloadCta: 'Download the report (PDF)',
      contactCta: 'Contact us',
    },
  },

  zh: {
    meta: {
      title: '可持续发展 · 2025 财年',
      description: 'Motorflash 的可持续发展承诺:环境表现、碳足迹、劳动实践与企业道德。2025 财年可核实数据。',
    },
    hero: {
      eyebrow: '企业承诺 · 2025 财年',
      title1: 'Motorflash 的',
      titleAccent: '可持续发展',
      lead: '我们把可持续发展融入日常工作:测量足迹、关怀团队、始终以诚信运营。这是我们 2025 财年的真实表现,附有可核实的数据。',
      checks: [
        '98.3% 电力来自可再生能源,并附有原产地保证书(GoO)',
        '按照 GHG Protocol 计算范围 1、2 与 3 的碳足迹',
        '回收率 60.9%,高于 55% 的内部目标',
        '通过 SME Climate Hub 承诺净零(与 SBTi 一致)',
      ],
      downloadCta: '下载 2025 可持续发展报告',
      viewDataCta: '查看我们的数据',
    },
    statement: {
      mark: '我们的可持续发展承诺',
      quote:
        '我们把可持续发展视为一项自身且持续的承诺:测量并减少足迹、关怀团队成员、始终以诚信运营。',
      sign: '这一承诺转化为具体目标、可核实的数据以及年复一年的持续改进。',
    },
    commitment: {
      kicker: '我们的方法',
      title: '一家负责任成长的西班牙公司',
      intro: 'Motorflash Ibérica de Negocios, S.L. 自 2007 年起为汽车行业提供数字化解决方案。全部业务集中于马德里的唯一总部,我们在此以直接且可衡量的方式落实可持续发展承诺。',
      cards: [
        { icon: 'public', title: '范围与边界', desc: '唯一位于马德里的总部,截至 2025 年底员工 90 人。本报告全面覆盖西班牙实体的真实运营。' },
        { icon: 'trending_down', title: '气候承诺', desc: '我们于 2026 年 5 月 20 日通过 SME Climate Hub 正式加入,承诺将范围 1 与 2 的排放较 2024 年减半,并在 2030 年前实现净零。' },
        { icon: 'verified', title: '可核实报告', desc: '我们依据 EFRAG 的 VSME 标准编制年度报告,指标可追溯,采用欧洲环境署与 IDAE 的官方排放因子。' },
      ],
    },
    env: {
      kicker: '环境',
      title: '2025 环境表现',
      intro: '我们仅以电力形式消耗能源,并对总部产生的每一类废弃物进行度量。以下为本财年结果及其参考年份与单位。',
      stats: [
        { v: '12,692', unit: 'kWh', l: '总用电量(2025)' },
        { v: '98.3', unit: '%', l: '经认证的可再生能源(GoO)' },
        { v: '5.40', unit: 'tCO₂e', l: 'S1+S2 排放(市场法)' },
        { v: '60.9', unit: '%', l: '废弃物回收率' },
      ],
      energy: {
        sectionTitle: '能源消耗',
        caption: '2025 财年 · 数据来源:Eleia Energía 与 Naturgy 的电费账单',
        headers: ['指标', '2025 年数值'],
        rows: [
          { label: '总用电量', value: '12,692 kWh' },
          { label: '经认证的可再生能源(GoO)', value: '12,476 kWh' },
          { label: '电网混合来源', value: '216 kWh' },
          { label: '能源强度', value: '1,686 kWh/百万€' },
          { label: '人均用电', value: '141 kWh' },
        ],
        note: '98.3% 的消耗由可再生能源原产地保证书覆盖。剩余 1.7% 为电网混合来源的短暂时段。',
      },
      ghg: {
        sectionTitle: '温室气体排放',
        caption: '2025 财年 · 二氧化碳当量(tCO₂e)· GHG Protocol',
        headers: ['范围', '市场法', '位置法'],
        rows: [
          { label: '范围 1 — 公司车队', market: '5.39', location: '5.39' },
          { label: '范围 2 — 电力(总部)', market: '0.01', location: '2.30' },
        ],
        totalLabel: 'S1 + S2 合计',
        totalMarket: '5.40',
        totalLocation: '7.69',
        note: '范围 1 仅包含由公司直接支付燃料费用的车辆。市场法反映由 GoO 认证的 100% 可再生电力。',
      },
    },
    people: {
      kicker: '员工',
      title: '劳动实践与人权',
      intro: '团队是公司的核心。我们坚持稳定就业、机会平等以及安全健康的工作环境。',
      cards: [
        { icon: 'badge', title: '稳定就业', desc: '100% 员工签订无固定期限的全职合同,消除因合同类型产生的任何差别待遇。' },
        { icon: 'balance', title: '平等', desc: '我们制定了平等计划并开展专项培训,配备反骚扰预防协议及可访问、保密的申诉机制。' },
        { icon: 'health_and_safety', title: '健康与安全', desc: '我们管理职业风险预防,推动团队健康福祉,并将健康福利纳入弹性薪酬。' },
      ],
    },
    ethics: {
      kicker: '治理',
      title: '商业道德与诚信',
      intro: '我们以透明的方式运营,并按行业最严格的标准保护客户信息。',
      cards: [
        { icon: 'shield', title: '信息安全', desc: '我们的 Contact Center、客户服务、设计、项目管理与开发获得 ISO/IEC 27001:2022 认证(TÜV Rheinland)。' },
        { icon: 'campaign', title: '道德通道', desc: '对员工与第三方永久开放的举报渠道,保证保密并不予报复。报告期内零经确认的事件。' },
        { icon: 'lock', title: '数据保护', desc: '我们采取访问控制以及技术与组织措施,保护第三方个人数据不被未授权访问或披露。' },
      ],
    },
    targets: {
      kicker: '路线图',
      title: '我们的可持续发展目标',
      items: [
        { yr: '2030', strong: '净零。', text: '实现净零排放,与我们通过 SME Climate Hub 的承诺一致。' },
        { yr: '2030', strong: '排放 −50 %。', text: '将范围 1 与 2 的排放较基准年 2024 年减半。' },
        { yr: '每年', strong: '100 % 可再生能源。', text: '电力供应始终由原产地保证书全额覆盖。' },
        { yr: '每年', strong: '回收率 >55 %。', text: '将废弃物回收率维持并持续提升到内部目标之上。' },
      ],
    },
    cta: {
      title: '查阅我们完整的 2025 可持续发展报告',
      lead: '本摘要中的所有数据,连同其方法学与按指标的详细内容,均在依据 VSME 标准编制的年度报告中提供。',
      downloadCta: '下载报告(PDF)',
      contactCta: '联系我们',
    },
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = ((await getLocale()) as Locale) || 'es'
  const seoLocale = resolveSeoLocale(locale)
  const t = (COPY[locale] ?? COPY.es).meta
  return buildPageMetadata({
    locale: seoLocale,
    path: '/compania/sostenibilidad',
    title: t.title,
    description: t.description,
    ogTitle: `${t.title} — Motorflash`,
    ogDescription: t.description,
  })
}

export default async function SostenibilidadPage() {
  const locale = ((await getLocale()) as Locale) || 'es'
  const seoLocale = resolveSeoLocale(locale)
  const t = COPY[locale] ?? COPY.es

  const path = localizedPath(seoLocale, '/compania/sostenibilidad')
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`
  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'AboutPage',
      path,
      name: t.meta.title,
      description: t.meta.description,
      inLanguage: HREFLANG_MAP[seoLocale],
      breadcrumbId,
    }),
    breadcrumbSchema(
      [
        { name: BC_HOME[seoLocale], url: localizedPath(seoLocale, '/') },
        { name: BC_COMPANY[seoLocale], url: localizedPath(seoLocale, '/compania') },
        { name: BC_SUS[seoLocale], url: path },
      ],
      breadcrumbId,
    ),
  ])

  return (
    <div className="font-display text-on-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-20 md:py-24">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,128,0,0.08), transparent 55%)' }} />
        <div className="mf-container max-w-4xl">
          <span className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>eco</span>
            {t.hero.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
            {t.hero.title1} <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-3xl">{t.hero.lead}</p>
          <ul className="space-y-2.5 mb-8">
            {t.hero.checks.map((c) => (
              <li key={c} className="flex gap-2 items-start text-sm text-on-surface">
                <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0" style={{ fontSize: 18 }}>check_circle</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PDF_HREF}
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 hover:gap-3 transition-all shadow-lg shadow-primary/30"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
              {t.hero.downloadCta}
            </a>
            <a
              href="#medioambiente"
              className="inline-flex items-center gap-2 border border-outline text-on-surface px-6 py-3 rounded-full text-sm font-bold hover:bg-surface-container transition-colors"
            >
              {t.hero.viewDataCta}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-surface-container-low border-y border-outline-variant py-16">
        <div className="mf-container max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">{t.statement.mark}</p>
          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-on-surface mb-4 relative">
            <span className="text-primary text-6xl leading-none absolute -top-4 -left-2 opacity-25">“</span>
            {t.statement.quote}
          </blockquote>
          <p className="text-sm text-on-surface-variant">{t.statement.sign}</p>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>handshake</span>
            {t.commitment.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.commitment.title}</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">{t.commitment.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.commitment.cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medioambiente */}
      <section id="medioambiente" className="bg-surface-container-low border-y border-outline-variant py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>forest</span>
            {t.env.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.env.title}</h2>
          <p className="text-on-surface-variant max-w-3xl mb-8 leading-relaxed">{t.env.intro}</p>

          {/* Big stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {t.env.stats.map((s) => (
              <div key={s.l} className="rounded-2xl bg-white border border-outline-variant p-5">
                <div className="text-3xl md:text-4xl font-black text-primary leading-none mb-2">
                  {s.v}<small className="text-base font-bold text-on-surface-variant ml-1">{s.unit}</small>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant leading-tight">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Two tables side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-outline-variant p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>bolt</span>
                {t.env.energy.sectionTitle}
              </h3>
              <table className="w-full text-sm">
                <caption className="caption-bottom text-xs text-on-surface-variant text-left pt-3">
                  {t.env.energy.caption}
                </caption>
                <thead>
                  <tr className="text-left border-b border-outline-variant">
                    <th className="py-2 font-semibold text-on-surface-variant">{t.env.energy.headers[0]}</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">{t.env.energy.headers[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.env.energy.rows.map((r) => (
                    <tr key={r.label} className="border-b border-outline-variant/50">
                      <td className="py-2 pr-2">{r.label}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-on-surface-variant mt-3 italic">{t.env.energy.note}</p>
            </div>
            <div className="rounded-2xl bg-white border border-outline-variant p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>cloud</span>
                {t.env.ghg.sectionTitle}
              </h3>
              <table className="w-full text-sm">
                <caption className="caption-bottom text-xs text-on-surface-variant text-left pt-3">
                  {t.env.ghg.caption}
                </caption>
                <thead>
                  <tr className="text-left border-b border-outline-variant">
                    <th className="py-2 font-semibold text-on-surface-variant">{t.env.ghg.headers[0]}</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">{t.env.ghg.headers[1]}</th>
                    <th className="py-2 font-semibold text-on-surface-variant text-right">{t.env.ghg.headers[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.env.ghg.rows.map((r) => (
                    <tr key={r.label} className="border-b border-outline-variant/50">
                      <td className="py-2 pr-2">{r.label}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.market}</td>
                      <td className="py-2 text-right font-semibold whitespace-nowrap">{r.location}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-outline-variant">
                    <td className="py-2 pr-2 font-bold">{t.env.ghg.totalLabel}</td>
                    <td className="py-2 text-right font-bold text-primary whitespace-nowrap">{t.env.ghg.totalMarket}</td>
                    <td className="py-2 text-right font-bold text-primary whitespace-nowrap">{t.env.ghg.totalLocation}</td>
                  </tr>
                </tfoot>
              </table>
              <p className="text-xs text-on-surface-variant mt-3 italic">{t.env.ghg.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section id="personas" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>groups</span>
            {t.people.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.people.title}</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">{t.people.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.people.cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ética */}
      <section id="etica" className="bg-surface-container-low border-y border-outline-variant py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>gavel</span>
            {t.ethics.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-4">{t.ethics.title}</h2>
          <p className="text-on-surface-variant max-w-3xl mb-10 leading-relaxed">{t.ethics.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.ethics.cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-outline-variant bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{c.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section id="objetivos" className="bg-white py-20">
        <div className="mf-container">
          <span className="mf-eyebrow inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>flag</span>
            {t.targets.kicker}
          </span>
          <h2 className="text-3xl md:text-headline-lg font-semibold mt-3 mb-8">{t.targets.title}</h2>
          <ul className="space-y-3">
            {t.targets.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-outline-variant bg-white hover:border-primary/40 transition-colors">
                <span className="inline-flex items-center justify-center min-w-[68px] px-3 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                  {item.yr}
                </span>
                <p className="text-sm md:text-base text-on-surface leading-relaxed">
                  <strong className="font-bold">{item.strong}</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-surface-container-low border-t border-outline-variant py-20 md:py-24">
        <div className="mf-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">{t.cta.title}</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">{t.cta.lead}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PDF_HREF}
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
              {t.cta.downloadCta}
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-outline text-on-surface px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-surface-container transition-colors"
            >
              {t.cta.contactCta}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
