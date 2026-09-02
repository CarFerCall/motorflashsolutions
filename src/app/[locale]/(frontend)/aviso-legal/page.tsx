import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, type SeoLocale } from '@/lib/seo/i18n-metadata'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { LEGAL_ENTITY, formattedAddress } from '@/lib/legal-entity'

const PATH = '/aviso-legal'

type Section = { heading: string; body: string[] }

type Copy = {
  title: string
  metaTitle: string
  metaDesc: string
  updated: string
  updatedDate: string
  intro: string
  sections: Section[]
  privacyLink: string
  privacyHref: string
  cookieLink: string
  cookieHref: string
  breadcrumbHome: string
  breadcrumbHere: string
}

const COMPANY = LEGAL_ENTITY.name
const CIF = LEGAL_ENTITY.cif
const ADDRESS = formattedAddress()
const EMAIL = LEGAL_ENTITY.contactEmail
const WEBSITE = LEGAL_ENTITY.websiteUrl

const COPY: Record<SeoLocale, Copy> = {
  es: {
    title: 'Aviso legal',
    metaTitle: 'Aviso legal · Motorflash',
    metaDesc: `Información legal del titular del sitio web ${WEBSITE}, conforme a la LSSI-CE.`,
    updated: 'Última actualización',
    updatedDate: '1 de septiembre de 2026',
    intro: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos:`,
    sections: [
      {
        heading: '1. Titular del sitio',
        body: [
          `Denominación social: ${COMPANY}`,
          `CIF: ${CIF}`,
          `Domicilio social: ${ADDRESS}`,
          `Correo electrónico: ${EMAIL}`,
          `Sitio web: ${WEBSITE}`,
        ],
      },
      {
        heading: '2. Objeto',
        body: [
          `El titular pone a disposición de los usuarios el sitio web con la finalidad de informar sobre sus servicios y productos, así como de habilitar la comunicación comercial. El uso del sitio atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en este Aviso Legal.`,
        ],
      },
      {
        heading: '3. Propiedad intelectual e industrial',
        body: [
          'Todos los contenidos del sitio (textos, imágenes, logotipos, marcas, códigos, diseños, estructura de navegación) son titularidad del titular del sitio o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.',
          'Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa. El uso no autorizado podrá dar lugar a las acciones legales pertinentes.',
        ],
      },
      {
        heading: '4. Condiciones de uso',
        body: [
          'El usuario se compromete a hacer un uso adecuado del sitio y de sus contenidos conforme a la ley, la moral y el orden público, absteniéndose de cualquier uso ilícito, lesivo o perjudicial para el titular o terceros.',
          'Está prohibido introducir programas, virus u otros elementos que puedan alterar el sistema, así como intentar acceder de forma no autorizada a áreas restringidas.',
        ],
      },
      {
        heading: '5. Responsabilidad',
        body: [
          'El titular no se responsabiliza de los daños o perjuicios que pudiera sufrir el usuario derivados del uso del sitio, en particular por errores u omisiones de contenido, falta de disponibilidad o transmisión de virus. El titular realiza esfuerzos razonables para mantener el sitio disponible, actualizado y libre de errores.',
          'El titular se reserva el derecho a modificar el sitio, sus contenidos y las condiciones de uso en cualquier momento sin previo aviso.',
        ],
      },
      {
        heading: '6. Enlaces a terceros',
        body: [
          'El sitio puede contener enlaces a sitios de terceros. El titular no gestiona ni controla dichos sitios y no se hace responsable de sus contenidos o de los perjuicios que pudieran derivarse de su uso.',
        ],
      },
      {
        heading: '7. Legislación aplicable y jurisdicción',
        body: [
          'Este Aviso Legal se rige por la legislación española. Para cualquier controversia derivada del uso del sitio, las partes se someten a los Juzgados y Tribunales de Madrid, salvo que la normativa aplicable disponga otra cosa (por ejemplo, cuando el usuario tenga la condición de consumidor).',
        ],
      },
    ],
    privacyLink: 'Consulta la Política de privacidad',
    privacyHref: '/privacidad',
    cookieLink: 'Consulta la Política de cookies',
    cookieHref: '/politica-cookies',
    breadcrumbHome: 'Inicio',
    breadcrumbHere: 'Aviso legal',
  },
  ca: {
    title: 'Avís legal',
    metaTitle: 'Avís legal · Motorflash',
    metaDesc: `Informació legal del titular del lloc web ${WEBSITE}, conforme a la LSSI-CE.`,
    updated: 'Última actualització',
    updatedDate: '1 de setembre de 2026',
    intro: `En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa els usuaris de les dades següents:`,
    sections: [
      {
        heading: '1. Titular del lloc',
        body: [
          `Denominació social: ${COMPANY}`,
          `CIF: ${CIF}`,
          `Domicili social: ${ADDRESS}`,
          `Correu electrònic: ${EMAIL}`,
          `Lloc web: ${WEBSITE}`,
        ],
      },
      {
        heading: '2. Objecte',
        body: [
          "El titular posa a disposició dels usuaris el lloc web amb la finalitat d'informar sobre els seus serveis i productes, així com habilitar la comunicació comercial. L'ús del lloc atribueix la condició d'usuari i implica l'acceptació de les condicions recollides en aquest Avís Legal.",
        ],
      },
      {
        heading: '3. Propietat intel·lectual i industrial',
        body: [
          "Tots els continguts del lloc (textos, imatges, logotips, marques, codis, dissenys, estructura de navegació) són titularitat del titular del lloc o de tercers que n'han autoritzat l'ús, i estan protegits per la normativa de propietat intel·lectual i industrial.",
          "Queda prohibida la seva reproducció, distribució, comunicació pública o transformació sense autorització expressa. L'ús no autoritzat podrà donar lloc a les accions legals pertinents.",
        ],
      },
      {
        heading: "4. Condicions d'ús",
        body: [
          "L'usuari es compromet a fer un ús adequat del lloc i dels seus continguts conforme a la llei, la moral i l'ordre públic, abstenint-se de qualsevol ús il·lícit, lesiu o perjudicial per al titular o tercers.",
          "Està prohibit introduir programes, virus o altres elements que puguin alterar el sistema, així com intentar accedir de forma no autoritzada a àrees restringides.",
        ],
      },
      {
        heading: '5. Responsabilitat',
        body: [
          "El titular no es responsabilitza dels danys o perjudicis que pogués patir l'usuari derivats de l'ús del lloc, en particular per errors o omissions de contingut, manca de disponibilitat o transmissió de virus. El titular fa esforços raonables per mantenir el lloc disponible, actualitzat i lliure d'errors.",
          "El titular es reserva el dret de modificar el lloc, els seus continguts i les condicions d'ús en qualsevol moment sense previ avís.",
        ],
      },
      {
        heading: '6. Enllaços a tercers',
        body: [
          "El lloc pot contenir enllaços a llocs de tercers. El titular no gestiona ni controla aquests llocs i no es fa responsable dels seus continguts o dels perjudicis que se'n poguessin derivar.",
        ],
      },
      {
        heading: '7. Legislació aplicable i jurisdicció',
        body: [
          "Aquest Avís Legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia derivada de l'ús del lloc, les parts se sotmeten als Jutjats i Tribunals de Madrid, tret que la normativa aplicable disposi una altra cosa (per exemple, quan l'usuari tingui la condició de consumidor).",
        ],
      },
    ],
    privacyLink: 'Consulta la Política de privacitat',
    privacyHref: '/ca/privacidad',
    cookieLink: 'Consulta la Política de cookies',
    cookieHref: '/ca/politica-cookies',
    breadcrumbHome: 'Inici',
    breadcrumbHere: 'Avís legal',
  },
  en: {
    title: 'Legal notice',
    metaTitle: 'Legal notice · Motorflash',
    metaDesc: `Legal information of the owner of the website ${WEBSITE}, in accordance with Spanish LSSI-CE.`,
    updated: 'Last updated',
    updatedDate: 'September 1, 2026',
    intro: `In compliance with article 10 of Spanish Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), users are informed of the following data:`,
    sections: [
      {
        heading: '1. Site owner',
        body: [
          `Company name: ${COMPANY}`,
          `Tax ID (CIF): ${CIF}`,
          `Registered office: ${ADDRESS}`,
          `Email: ${EMAIL}`,
          `Website: ${WEBSITE}`,
        ],
      },
      {
        heading: '2. Purpose',
        body: [
          'The owner makes the website available to users for the purpose of providing information about its services and products, as well as enabling commercial communication. Use of the site grants the status of user and implies acceptance of the conditions set out in this Legal Notice.',
        ],
      },
      {
        heading: '3. Intellectual and industrial property',
        body: [
          'All content on the site (texts, images, logos, trademarks, code, designs, navigation structure) is owned by the owner of the site or by third parties who have authorized its use, and is protected by intellectual and industrial property regulations.',
          'Reproduction, distribution, public communication or transformation is forbidden without express authorization. Unauthorized use may give rise to the applicable legal actions.',
        ],
      },
      {
        heading: '4. Terms of use',
        body: [
          'The user undertakes to make appropriate use of the site and its content in accordance with the law, morality and public order, refraining from any unlawful, harmful or damaging use towards the owner or third parties.',
          'It is forbidden to introduce programs, viruses or other elements that may alter the system, as well as attempting to access restricted areas in an unauthorized manner.',
        ],
      },
      {
        heading: '5. Liability',
        body: [
          'The owner is not liable for damages that the user may suffer arising from use of the site, in particular due to errors or omissions in content, unavailability or transmission of viruses. The owner makes reasonable efforts to keep the site available, up to date and free of errors.',
          'The owner reserves the right to modify the site, its content and the terms of use at any time without prior notice.',
        ],
      },
      {
        heading: '6. Third-party links',
        body: [
          'The site may contain links to third-party sites. The owner does not manage or control such sites and is not responsible for their content or for any damages arising from their use.',
        ],
      },
      {
        heading: '7. Applicable law and jurisdiction',
        body: [
          'This Legal Notice is governed by Spanish law. For any dispute arising from use of the site, the parties submit to the Courts and Tribunals of Madrid, unless applicable regulations provide otherwise (for example, when the user has consumer status).',
        ],
      },
    ],
    privacyLink: 'See the Privacy Policy',
    privacyHref: '/en/privacidad',
    cookieLink: 'See the Cookie Policy',
    cookieHref: '/en/politica-cookies',
    breadcrumbHome: 'Home',
    breadcrumbHere: 'Legal notice',
  },
  zh: {
    title: '法律声明',
    metaTitle: '法律声明 · Motorflash',
    metaDesc: `网站 ${WEBSITE} 所有人的法律信息,依据西班牙 LSSI-CE。`,
    updated: '最后更新',
    updatedDate: '2026 年 9 月 1 日',
    intro: `根据西班牙 2002 年 7 月 11 日第 34/2002 号法律(信息社会服务与电子商务法,LSSI-CE)第 10 条的规定,向用户告知以下信息:`,
    sections: [
      {
        heading: '1. 网站所有人',
        body: [
          `公司名称: ${COMPANY}`,
          `税务代码 (CIF): ${CIF}`,
          `注册地址: ${ADDRESS}`,
          `电子邮箱: ${EMAIL}`,
          `网站: ${WEBSITE}`,
        ],
      },
      {
        heading: '2. 目的',
        body: [
          '所有人向用户提供本网站,用于介绍其服务和产品,并进行商务沟通。使用本网站即赋予您用户身份,并意味着接受本法律声明中的条款。',
        ],
      },
      {
        heading: '3. 知识产权与工业产权',
        body: [
          '网站的所有内容(文本、图像、标志、商标、代码、设计、导航结构)归所有人或已授权其使用的第三方所有,并受知识产权与工业产权相关法规保护。',
          '未经明确授权,禁止复制、分发、公开传播或改编。未经授权的使用可能引发相应的法律行动。',
        ],
      },
      {
        heading: '4. 使用条款',
        body: [
          '用户承诺依据法律、道德与公共秩序合理使用本网站及其内容,避免任何非法、损害或有害于所有人或第三方的使用。',
          '禁止引入可能破坏系统的程序、病毒或其他要素,以及试图未经授权访问受限区域。',
        ],
      },
      {
        heading: '5. 责任',
        body: [
          '所有人对用户因使用本网站所遭受的损害不承担责任,尤其是因内容错误或遗漏、无法访问或病毒传播所致者。所有人将采取合理努力保持网站可用、及时更新且无错误。',
          '所有人保留随时修改网站、其内容与使用条款的权利,无需事先通知。',
        ],
      },
      {
        heading: '6. 第三方链接',
        body: [
          '本网站可能包含指向第三方网站的链接。所有人既不管理也不控制此类网站,对其内容或因此可能产生的损害不承担责任。',
        ],
      },
      {
        heading: '7. 适用法律与管辖',
        body: [
          '本法律声明适用西班牙法律。因使用本网站产生的任何争议,双方应服从马德里法院与法庭的管辖,适用法规另有规定的除外(例如用户具备消费者身份时)。',
        ],
      },
    ],
    privacyLink: '查看隐私政策',
    privacyHref: '/zh/privacidad',
    cookieLink: '查看 Cookie 政策',
    cookieHref: '/zh/politica-cookies',
    breadcrumbHome: '首页',
    breadcrumbHere: '法律声明',
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

export default async function LegalNoticePage() {
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

          <p className="text-sm mt-8 flex flex-wrap gap-4">
            <Link href={t.privacyHref} prefetch={false} className="text-primary underline hover:opacity-80">
              {t.privacyLink}
            </Link>
            <Link href={t.cookieHref} prefetch={false} className="text-primary underline hover:opacity-80">
              {t.cookieLink}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
