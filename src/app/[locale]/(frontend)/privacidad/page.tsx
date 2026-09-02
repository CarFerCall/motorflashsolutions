import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, type SeoLocale } from '@/lib/seo/i18n-metadata'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { LEGAL_ENTITY, formattedAddress } from '@/lib/legal-entity'

const PATH = '/privacidad'

type Section = { heading: string; body: string[] }

type Copy = {
  title: string
  metaTitle: string
  metaDesc: string
  updated: string
  updatedDate: string
  intro: string
  sections: Section[]
  cookieLink: string
  cookieHref: string
  breadcrumbHome: string
  breadcrumbHere: string
}

const COMPANY = LEGAL_ENTITY.name
const CIF = LEGAL_ENTITY.cif
const ADDRESS = formattedAddress()
const EMAIL = LEGAL_ENTITY.contactEmail

const COPY: Record<SeoLocale, Copy> = {
  es: {
    title: 'Política de privacidad',
    metaTitle: 'Política de privacidad · Motorflash',
    metaDesc: `Información sobre cómo ${COMPANY} trata los datos personales de los visitantes y usuarios del sitio.`,
    updated: 'Última actualización',
    updatedDate: '1 de septiembre de 2026',
    intro: `${COMPANY} respeta tu privacidad y trata tus datos personales con las garantías del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). Esta Política explica qué datos recopilamos, con qué finalidad, por cuánto tiempo y qué derechos tienes.`,
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: [
          `Titular: ${COMPANY}`,
          `CIF: ${CIF}`,
          `Domicilio: ${ADDRESS}`,
          `Contacto RGPD: ${EMAIL}`,
        ],
      },
      {
        heading: '2. Datos que recopilamos',
        body: [
          'Datos que nos facilitas directamente al usar nuestros formularios de contacto, presupuesto o solicitud de demo: nombre, email, teléfono, empresa, mensaje y cualquier otra información que decidas incluir.',
          'Datos técnicos de navegación (dirección IP, tipo de navegador, páginas visitadas) recopilados por los servicios estrictamente necesarios para el funcionamiento del sitio y, si has dado tu consentimiento, por el widget de asistente virtual de ElevenLabs.',
        ],
      },
      {
        heading: '3. Finalidades y base legal',
        body: [
          'Atender las solicitudes de información, presupuesto o demo que nos remites a través de los formularios (base legal: consentimiento del interesado, art. 6.1.a RGPD).',
          'Gestionar la relación comercial y contractual con clientes actuales o potenciales (base legal: ejecución de un contrato o medidas precontractuales, art. 6.1.b RGPD).',
          'Cumplir las obligaciones legales aplicables, como las tributarias o de facturación (base legal: obligación legal, art. 6.1.c RGPD).',
          'Habilitar el asistente virtual de voz si aceptas expresamente las cookies opcionales (base legal: consentimiento, art. 6.1.a RGPD).',
        ],
      },
      {
        heading: '4. Destinatarios',
        body: [
          `No cedemos tus datos a terceros salvo obligación legal. Utilizamos encargados de tratamiento sujetos a contrato conforme al art. 28 RGPD para servicios técnicos como alojamiento (Vercel Inc.), envío de correo (proveedor SMTP contratado) y el asistente virtual de voz (ElevenLabs Inc., con residencia de datos en la UE).`,
          'Todos los encargados están seleccionados por sus garantías de cumplimiento del RGPD.',
        ],
      },
      {
        heading: '5. Conservación de los datos',
        body: [
          'Datos de contacto comercial: hasta 1 año desde la última interacción salvo relación contractual activa.',
          'Datos de clientes: durante la vigencia de la relación contractual y los plazos legales aplicables (Código de Comercio: 6 años; obligaciones tributarias: 4 años).',
          'Datos generados por el asistente virtual: según la política del proveedor (ElevenLabs), con residencia en la UE.',
        ],
      },
      {
        heading: '6. Transferencias internacionales',
        body: [
          'Podemos usar proveedores establecidos fuera del Espacio Económico Europeo (por ejemplo, Vercel Inc. o ElevenLabs Inc.). En todos los casos, garantizamos que se aplican las salvaguardas previstas por el RGPD: decisiones de adecuación, cláusulas contractuales tipo o residencia de datos en la UE cuando el proveedor lo ofrece.',
        ],
      },
      {
        heading: '7. Tus derechos',
        body: [
          'Tienes derecho a: acceder a tus datos, rectificarlos, suprimirlos, solicitar la limitación de su tratamiento, oponerte al tratamiento y a la portabilidad de tus datos.',
          `Puedes ejercer estos derechos escribiendo a ${EMAIL} adjuntando copia de tu documento de identidad para acreditar tu identidad.`,
          'También puedes retirar tu consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo.',
          'Si consideras que el tratamiento no se ajusta a la normativa puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
      },
      {
        heading: '8. Menores',
        body: [
          'Nuestros servicios están dirigidos a profesionales y empresas del sector de la automoción. No recopilamos deliberadamente datos de menores de edad.',
        ],
      },
      {
        heading: '9. Cambios en esta política',
        body: [
          'Podemos actualizar esta Política de Privacidad para adaptarla a novedades legales, técnicas o de negocio. Publicaremos cualquier cambio en esta misma URL indicando la fecha de la última actualización.',
        ],
      },
    ],
    cookieLink: 'Ver la Política de cookies',
    cookieHref: '/politica-cookies',
    breadcrumbHome: 'Inicio',
    breadcrumbHere: 'Política de privacidad',
  },
  ca: {
    title: 'Política de privacitat',
    metaTitle: 'Política de privacitat · Motorflash',
    metaDesc: `Informació sobre com ${COMPANY} tracta les dades personals dels visitants i usuaris del lloc.`,
    updated: 'Última actualització',
    updatedDate: '1 de setembre de 2026',
    intro: `${COMPANY} respecta la teva privacitat i tracta les teves dades personals amb les garanties del Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD). Aquesta Política explica quines dades recopilem, amb quina finalitat, durant quant de temps i quins drets tens.`,
    sections: [
      {
        heading: '1. Responsable del tractament',
        body: [
          `Titular: ${COMPANY}`,
          `CIF: ${CIF}`,
          `Domicili: ${ADDRESS}`,
          `Contacte RGPD: ${EMAIL}`,
        ],
      },
      {
        heading: '2. Dades que recopilem',
        body: [
          'Dades que ens facilites directament en usar els nostres formularis de contacte, pressupost o sol·licitud de demo: nom, correu electrònic, telèfon, empresa, missatge i qualsevol altra informació que decideixis incloure.',
          "Dades tècniques de navegació (adreça IP, tipus de navegador, pàgines visitades) recollides pels serveis estrictament necessaris per al funcionament del lloc i, si has donat el teu consentiment, pel widget d'assistent virtual d'ElevenLabs.",
        ],
      },
      {
        heading: '3. Finalitats i base legal',
        body: [
          "Atendre les sol·licituds d'informació, pressupost o demo que ens remets a través dels formularis (base legal: consentiment de l'interessat, art. 6.1.a RGPD).",
          'Gestionar la relació comercial i contractual amb clients actuals o potencials (base legal: execució de contracte o mesures precontractuals, art. 6.1.b RGPD).',
          'Complir les obligacions legals aplicables, com les tributàries o de facturació (base legal: obligació legal, art. 6.1.c RGPD).',
          "Habilitar l'assistent virtual de veu si acceptes expressament les cookies opcionals (base legal: consentiment, art. 6.1.a RGPD).",
        ],
      },
      {
        heading: '4. Destinataris',
        body: [
          'No cedim les teves dades a tercers excepte per obligació legal. Utilitzem encarregats del tractament subjectes a contracte segons l’art. 28 RGPD per a serveis tècnics com allotjament (Vercel Inc.), enviament de correu (proveïdor SMTP contractat) i l’assistent virtual de veu (ElevenLabs Inc., amb residència de dades a la UE).',
          "Tots els encarregats estan seleccionats per les seves garanties de compliment del RGPD.",
        ],
      },
      {
        heading: '5. Conservació de les dades',
        body: [
          'Dades de contacte comercial: fins a 1 any des de la darrera interacció, tret que hi hagi relació contractual activa.',
          'Dades de clients: durant la vigència de la relació contractual i els terminis legals aplicables (Codi de Comerç: 6 anys; obligacions tributàries: 4 anys).',
          "Dades generades per l'assistent virtual: segons la política del proveïdor (ElevenLabs), amb residència a la UE.",
        ],
      },
      {
        heading: '6. Transferències internacionals',
        body: [
          "Podem utilitzar proveïdors establerts fora de l'Espai Econòmic Europeu (per exemple, Vercel Inc. o ElevenLabs Inc.). En tots els casos garantim que s'apliquen les salvaguardes previstes pel RGPD: decisions d'adequació, clàusules contractuals tipus o residència de dades a la UE quan el proveïdor ho ofereix.",
        ],
      },
      {
        heading: '7. Els teus drets',
        body: [
          "Tens dret a: accedir a les teves dades, rectificar-les, suprimir-les, sol·licitar la limitació del seu tractament, oposar-te al tractament i a la portabilitat de les teves dades.",
          `Pots exercir aquests drets escrivint a ${EMAIL} adjuntant còpia del teu document d'identitat per acreditar-la.`,
          "També pots retirar el teu consentiment en qualsevol moment sense que això afecti la licitud del tractament previ.",
          "Si consideres que el tractament no s'ajusta a la normativa pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
        ],
      },
      {
        heading: '8. Menors',
        body: [
          "Els nostres serveis estan dirigits a professionals i empreses del sector de l'automoció. No recollim deliberadament dades de menors d'edat.",
        ],
      },
      {
        heading: '9. Canvis en aquesta política',
        body: [
          "Podem actualitzar aquesta Política de Privacitat per adaptar-la a novetats legals, tècniques o de negoci. Publicarem qualsevol canvi en aquesta mateixa URL indicant la data de la darrera actualització.",
        ],
      },
    ],
    cookieLink: 'Veure la Política de cookies',
    cookieHref: '/ca/politica-cookies',
    breadcrumbHome: 'Inici',
    breadcrumbHere: 'Política de privacitat',
  },
  en: {
    title: 'Privacy policy',
    metaTitle: 'Privacy policy · Motorflash',
    metaDesc: `Information about how ${COMPANY} processes the personal data of visitors and users of the website.`,
    updated: 'Last updated',
    updatedDate: 'September 1, 2026',
    intro: `${COMPANY} respects your privacy and processes your personal data with the safeguards of Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD). This Policy explains what data we collect, for what purpose, for how long and what rights you have.`,
    sections: [
      {
        heading: '1. Data controller',
        body: [
          `Owner: ${COMPANY}`,
          `Tax ID (CIF): ${CIF}`,
          `Registered office: ${ADDRESS}`,
          `GDPR contact: ${EMAIL}`,
        ],
      },
      {
        heading: '2. Data we collect',
        body: [
          'Data you provide directly when using our contact, quote or demo request forms: name, email, phone, company, message and any other information you decide to include.',
          'Technical browsing data (IP address, browser type, visited pages) collected by services strictly necessary for the site to work and, if you have given your consent, by the ElevenLabs virtual assistant widget.',
        ],
      },
      {
        heading: '3. Purposes and legal basis',
        body: [
          'To respond to the requests for information, quotes or demos you send through the forms (legal basis: consent of the data subject, art. 6.1.a GDPR).',
          'To manage the commercial and contractual relationship with current or potential clients (legal basis: performance of a contract or pre-contractual measures, art. 6.1.b GDPR).',
          'To comply with applicable legal obligations, such as tax or invoicing obligations (legal basis: legal obligation, art. 6.1.c GDPR).',
          'To enable the voice virtual assistant if you expressly accept the optional cookies (legal basis: consent, art. 6.1.a GDPR).',
        ],
      },
      {
        heading: '4. Recipients',
        body: [
          'We do not share your data with third parties except by legal obligation. We use data processors bound by contract under art. 28 GDPR for technical services such as hosting (Vercel Inc.), email delivery (contracted SMTP provider) and the voice virtual assistant (ElevenLabs Inc., with EU data residency).',
          'All processors are selected based on their GDPR compliance safeguards.',
        ],
      },
      {
        heading: '5. Data retention',
        body: [
          'Commercial contact data: up to 1 year since the last interaction, unless there is an active contractual relationship.',
          'Client data: for the duration of the contractual relationship and the applicable legal periods (Spanish Commercial Code: 6 years; tax obligations: 4 years).',
          'Data generated by the virtual assistant: according to the provider’s policy (ElevenLabs), with EU residency.',
        ],
      },
      {
        heading: '6. International transfers',
        body: [
          'We may use providers established outside the European Economic Area (for example, Vercel Inc. or ElevenLabs Inc.). In all cases we ensure that the safeguards set out in the GDPR are applied: adequacy decisions, standard contractual clauses or EU data residency when the provider offers it.',
        ],
      },
      {
        heading: '7. Your rights',
        body: [
          'You have the right to: access your data, rectify it, erase it, request restriction of its processing, object to processing and to data portability.',
          `You can exercise these rights by writing to ${EMAIL} attaching a copy of your identity document to prove your identity.`,
          'You may also withdraw your consent at any time without affecting the lawfulness of prior processing.',
          'If you consider that the processing does not comply with regulations, you can file a complaint with the Spanish Data Protection Agency (www.aepd.es).',
        ],
      },
      {
        heading: '8. Minors',
        body: [
          'Our services are aimed at professionals and companies in the automotive sector. We do not knowingly collect data from minors.',
        ],
      },
      {
        heading: '9. Changes to this policy',
        body: [
          'We may update this Privacy Policy to adapt it to legal, technical or business developments. We will publish any changes at this same URL indicating the date of the last update.',
        ],
      },
    ],
    cookieLink: 'See the Cookie Policy',
    cookieHref: '/en/politica-cookies',
    breadcrumbHome: 'Home',
    breadcrumbHere: 'Privacy policy',
  },
  zh: {
    title: '隐私政策',
    metaTitle: '隐私政策 · Motorflash',
    metaDesc: `关于 ${COMPANY} 如何处理网站访客和用户个人数据的说明。`,
    updated: '最后更新',
    updatedDate: '2026 年 9 月 1 日',
    intro: `${COMPANY} 尊重您的隐私,并依据 (EU) 2016/679 号条例(GDPR)与西班牙第 3/2018 号组织法(LOPDGDD)的保障处理您的个人数据。本政策说明我们收集哪些数据、用于何种目的、保留多久以及您享有的权利。`,
    sections: [
      {
        heading: '1. 数据控制方',
        body: [
          `所有人: ${COMPANY}`,
          `税务代码 (CIF): ${CIF}`,
          `注册地址: ${ADDRESS}`,
          `GDPR 联系方式: ${EMAIL}`,
        ],
      },
      {
        heading: '2. 我们收集的数据',
        body: [
          '您在使用我们的联系、报价或演示申请表单时直接提供的数据:姓名、邮箱、电话、公司、消息以及您决定包含的其他任何信息。',
          '网站正常运行所严格必要的服务收集的技术性浏览数据(IP 地址、浏览器类型、访问的页面);如您同意,还包括 ElevenLabs 虚拟助手小部件收集的数据。',
        ],
      },
      {
        heading: '3. 目的与法律依据',
        body: [
          '响应您通过表单发送的信息、报价或演示请求(法律依据:数据主体同意,GDPR 第 6.1.a 条)。',
          '管理与现有或潜在客户的商务与合同关系(法律依据:履行合同或合同前措施,GDPR 第 6.1.b 条)。',
          '遵守适用的法律义务,例如税务或开票义务(法律依据:法律义务,GDPR 第 6.1.c 条)。',
          '如您明确接受可选 Cookies,则启用语音虚拟助手(法律依据:同意,GDPR 第 6.1.a 条)。',
        ],
      },
      {
        heading: '4. 数据接收方',
        body: [
          '除法律义务外,我们不会向第三方共享您的数据。我们依据 GDPR 第 28 条与受合同约束的数据处理者开展技术服务,例如托管(Vercel Inc.)、邮件发送(签约 SMTP 提供商)以及语音虚拟助手(ElevenLabs Inc.,数据驻留于欧盟)。',
          '所有处理者均基于其 GDPR 合规保障进行选择。',
        ],
      },
      {
        heading: '5. 数据保留',
        body: [
          '商务联系数据:自最近一次互动起最多 1 年,除非存在有效的合同关系。',
          '客户数据:合同关系存续期间以及适用的法定期限(西班牙商法典:6 年;税务义务:4 年)。',
          '虚拟助手生成的数据:依据提供商(ElevenLabs)的政策,数据驻留于欧盟。',
        ],
      },
      {
        heading: '6. 国际传输',
        body: [
          '我们可能使用设立于欧洲经济区之外的提供商(例如 Vercel Inc. 或 ElevenLabs Inc.)。在所有情况下,我们确保适用 GDPR 规定的保障措施:充分性决定、标准合同条款,或在提供商可提供时采用欧盟数据驻留。',
        ],
      },
      {
        heading: '7. 您的权利',
        body: [
          '您有权:访问您的数据、更正、删除、请求限制处理、反对处理和数据可携权。',
          `您可通过发送邮件至 ${EMAIL} 行使这些权利,并附上您的身份证件副本以证明身份。`,
          '您也可随时撤回同意,而不影响此前处理的合法性。',
          '如您认为处理不符合规定,可向西班牙数据保护局(www.aepd.es)提出申诉。',
        ],
      },
      {
        heading: '8. 未成年人',
        body: [
          '我们的服务面向汽车行业的专业人员与企业。我们不会有意收集未成年人的数据。',
        ],
      },
      {
        heading: '9. 本政策的变更',
        body: [
          '我们可能会更新本隐私政策以适应法律、技术或业务的发展。任何变更将发布于此同一网址,并注明最后更新日期。',
        ],
      },
    ],
    cookieLink: '查看 Cookie 政策',
    cookieHref: '/zh/politica-cookies',
    breadcrumbHome: '首页',
    breadcrumbHere: '隐私政策',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = ((await getLocale()) as SeoLocale) || 'es'
  const t = COPY[locale] ?? COPY.es
  return buildPageMetadata({
    locale,
    path: PATH,
    title: t.metaTitle,
    description: t.metaDesc,
  })
}

export default async function PrivacyPage() {
  const localeRaw = ((await getLocale()) as string) || 'es'
  const locale = (SEO_LOCALES.includes(localeRaw as SeoLocale) ? localeRaw : 'es') as SeoLocale
  const t = COPY[locale]

  const canonical = locale === 'es' ? PATH : `/${locale}${PATH}`
  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'WebPage',
      path: canonical,
      name: t.metaTitle,
      description: t.metaDesc,
      inLanguage: HREFLANG_MAP[locale],
    }),
    breadcrumbSchema([
      { name: t.breadcrumbHome, url: absoluteUrl(locale === 'es' ? '/' : `/${locale}`) },
      { name: t.breadcrumbHere, url: absoluteUrl(canonical) },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="py-16 md:py-24">
        <div className="mf-container max-w-3xl">
          <nav className="text-xs text-on-surface-variant mb-6" aria-label="breadcrumb">
            <Link
              href={locale === 'es' ? '/' : `/${locale}`}
              prefetch={false}
              className="hover:text-primary"
            >
              {t.breadcrumbHome}
            </Link>{' '}
            <span aria-hidden>›</span>{' '}
            <span className="text-on-surface">{t.breadcrumbHere}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-semibold mb-3">{t.title}</h1>
          <p className="text-xs text-on-surface-variant mb-8">
            {t.updated}: {t.updatedDate}
          </p>

          <p className="text-base text-on-surface-variant leading-relaxed mb-10">{t.intro}</p>

          {t.sections.map((section) => (
            <div key={section.heading} className="mb-8">
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-sm text-on-surface-variant leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <p className="text-sm mt-8">
            <Link href={t.cookieHref} prefetch={false} className="text-primary underline hover:opacity-80">
              {t.cookieLink}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
