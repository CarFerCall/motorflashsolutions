import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { buildPageMetadata, type SeoLocale, SEO_LOCALES } from '@/lib/seo/i18n-metadata'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { HREFLANG_MAP } from '@/lib/seo/i18n-metadata'
import { CookieConsentResetButton } from '@/components/CookieConsentResetButton'

const PATH = '/politica-cookies'

type CookieRow = { name: string; provider: string; purpose: string; retention: string }

type Copy = {
  title: string
  metaTitle: string
  metaDesc: string
  updated: string
  updatedDate: string
  intro: string
  whatAreTitle: string
  whatAreBody: string
  useTitle: string
  useBody: string
  tableTitle: string
  columns: { name: string; provider: string; purpose: string; retention: string }
  rows: CookieRow[]
  managementTitle: string
  managementBody: string
  changePrefs: string
  moreTitle: string
  moreBody: string
  contactTitle: string
  contactBody: string
  breadcrumbHome: string
  breadcrumbHere: string
}

const COPY: Record<SeoLocale, Copy> = {
  es: {
    title: 'Política de cookies',
    metaTitle: 'Política de cookies · Motorflash',
    metaDesc:
      'Información sobre las cookies y tecnologías equivalentes que utiliza Motorflash Ibérica y opciones para gestionar tu consentimiento.',
    updated: 'Última actualización',
    updatedDate: '1 de septiembre de 2026',
    intro:
      'Esta Política de Cookies explica qué son las cookies, cómo las usamos en este sitio web y las opciones que tienes para gestionarlas.',
    whatAreTitle: '¿Qué son las cookies?',
    whatAreBody:
      'Las cookies son pequeños archivos que un sitio web guarda en tu navegador cuando lo visitas. Se utilizan para que el sitio funcione correctamente, recordar preferencias o mejorar tu experiencia. También se consideran cookies otras tecnologías equivalentes como el almacenamiento local (localStorage) del navegador.',
    useTitle: 'Cookies que utilizamos',
    useBody:
      'En este sitio distinguimos entre cookies estrictamente necesarias, que se cargan siempre, y cookies opcionales que solo se activan si prestas tu consentimiento.',
    tableTitle: 'Detalle',
    columns: {
      name: 'Cookie / almacenamiento',
      provider: 'Proveedor',
      purpose: 'Finalidad',
      retention: 'Duración',
    },
    rows: [
      {
        name: 'mf-cookie-consent',
        provider: 'Motorflash (propia)',
        purpose:
          'Almacena tu decisión sobre el uso de cookies opcionales para no volver a mostrarte el banner.',
        retention: 'Persistente (localStorage) hasta que la borres',
      },
      {
        name: 'NEXT_LOCALE',
        provider: 'Motorflash (propia)',
        purpose: 'Recuerda el idioma seleccionado.',
        retention: '1 año',
      },
      {
        name: 'payload-token',
        provider: 'Motorflash (propia)',
        purpose:
          'Sesión de administración del CMS (solo se establece si accedes al área /admin).',
        retention: 'Sesión / hasta cierre de sesión',
      },
      {
        name: 'Widget ElevenLabs',
        provider: 'ElevenLabs Inc. (tercero, EU residency)',
        purpose:
          'Permite el asistente virtual de voz. Se descarga y se conecta con los servidores de ElevenLabs solo si aceptas las cookies opcionales.',
        retention: 'Duración de la sesión + almacenamiento propio del proveedor',
      },
      {
        name: 'Google Fonts (Material Symbols)',
        provider: 'Google LLC (tercero)',
        purpose:
          'Iconografía del sitio. La carga desde los servidores de Google implica la comunicación de tu dirección IP.',
        retention: 'Sin cookies persistentes; petición HTTP única por sesión',
      },
    ],
    managementTitle: 'Gestión del consentimiento',
    managementBody:
      'Puedes cambiar tu decisión en cualquier momento pulsando el botón de más abajo. También puedes bloquear o eliminar cookies desde la configuración de tu navegador.',
    changePrefs: 'Cambiar mis preferencias',
    moreTitle: 'Más información',
    moreBody:
      'Para más información sobre el tratamiento de datos personales, consulta nuestro Aviso Legal y nuestra Política de Privacidad.',
    contactTitle: 'Contacto',
    contactBody:
      'Si tienes dudas sobre esta política escríbenos a rgpd@motorflash.com.',
    breadcrumbHome: 'Inicio',
    breadcrumbHere: 'Política de cookies',
  },
  ca: {
    title: 'Política de cookies',
    metaTitle: 'Política de cookies · Motorflash',
    metaDesc:
      "Informació sobre les cookies i tecnologies equivalents que utilitza Motorflash Ibérica i opcions per gestionar el teu consentiment.",
    updated: 'Última actualització',
    updatedDate: "1 de setembre de 2026",
    intro:
      "Aquesta Política de Cookies explica què són les cookies, com les fem servir en aquest lloc web i les opcions que tens per gestionar-les.",
    whatAreTitle: 'Què són les cookies?',
    whatAreBody:
      "Les cookies són petits fitxers que un lloc web desa al teu navegador quan el visites. Serveixen perquè el lloc funcioni correctament, recordar preferències o millorar la teva experiència. També es consideren cookies altres tecnologies equivalents com l'emmagatzematge local (localStorage) del navegador.",
    useTitle: 'Cookies que utilitzem',
    useBody:
      "En aquest lloc distingim entre cookies estrictament necessàries, que es carreguen sempre, i cookies opcionals que només s'activen si dones el teu consentiment.",
    tableTitle: 'Detall',
    columns: {
      name: 'Cookie / emmagatzematge',
      provider: 'Proveïdor',
      purpose: 'Finalitat',
      retention: 'Durada',
    },
    rows: [
      {
        name: 'mf-cookie-consent',
        provider: 'Motorflash (pròpia)',
        purpose:
          "Desa la teva decisió sobre l'ús de cookies opcionals per no tornar-te a mostrar el bàner.",
        retention: "Persistent (localStorage) fins que l'esborris",
      },
      {
        name: 'NEXT_LOCALE',
        provider: 'Motorflash (pròpia)',
        purpose: "Recorda l'idioma seleccionat.",
        retention: '1 any',
      },
      {
        name: 'payload-token',
        provider: 'Motorflash (pròpia)',
        purpose:
          "Sessió d'administració del CMS (només s'estableix si accedeixes a l'àrea /admin).",
        retention: 'Sessió / fins al tancament de sessió',
      },
      {
        name: 'Widget ElevenLabs',
        provider: 'ElevenLabs Inc. (tercer, EU residency)',
        purpose:
          "Habilita l'assistent virtual de veu. Es descarrega i es connecta amb els servidors d'ElevenLabs només si acceptes les cookies opcionals.",
        retention: 'Durada de la sessió + emmagatzematge propi del proveïdor',
      },
      {
        name: 'Google Fonts (Material Symbols)',
        provider: 'Google LLC (tercer)',
        purpose:
          "Iconografia del lloc. La càrrega des dels servidors de Google implica la comunicació de la teva adreça IP.",
        retention: 'Sense cookies persistents; petició HTTP única per sessió',
      },
    ],
    managementTitle: 'Gestió del consentiment',
    managementBody:
      "Pots canviar la teva decisió en qualsevol moment prement el botó de sota. També pots bloquejar o eliminar cookies des de la configuració del teu navegador.",
    changePrefs: 'Canviar les meves preferències',
    moreTitle: 'Més informació',
    moreBody:
      "Per a més informació sobre el tractament de dades personals, consulta el nostre Avís Legal i la nostra Política de Privacitat.",
    contactTitle: 'Contacte',
    contactBody:
      "Si tens dubtes sobre aquesta política escriu-nos a rgpd@motorflash.com.",
    breadcrumbHome: 'Inici',
    breadcrumbHere: 'Política de cookies',
  },
  en: {
    title: 'Cookie policy',
    metaTitle: 'Cookie policy · Motorflash',
    metaDesc:
      'Information about the cookies and equivalent technologies used by Motorflash Iberica and options to manage your consent.',
    updated: 'Last updated',
    updatedDate: 'September 1, 2026',
    intro:
      'This Cookie Policy explains what cookies are, how we use them on this website and the options you have to manage them.',
    whatAreTitle: 'What are cookies?',
    whatAreBody:
      'Cookies are small files that a website stores in your browser when you visit it. They allow the site to work properly, remember preferences or improve your experience. Other equivalent technologies such as the browser localStorage are also considered cookies for these purposes.',
    useTitle: 'Cookies we use',
    useBody:
      'We distinguish between strictly necessary cookies, which are always loaded, and optional cookies that are only activated if you give your consent.',
    tableTitle: 'Detail',
    columns: {
      name: 'Cookie / storage',
      provider: 'Provider',
      purpose: 'Purpose',
      retention: 'Retention',
    },
    rows: [
      {
        name: 'mf-cookie-consent',
        provider: 'Motorflash (first-party)',
        purpose:
          'Stores your decision about optional cookies so the banner is not shown again.',
        retention: 'Persistent (localStorage) until deleted',
      },
      {
        name: 'NEXT_LOCALE',
        provider: 'Motorflash (first-party)',
        purpose: 'Remembers the selected language.',
        retention: '1 year',
      },
      {
        name: 'payload-token',
        provider: 'Motorflash (first-party)',
        purpose:
          'CMS admin session (only set if you access the /admin area).',
        retention: 'Session / until you log out',
      },
      {
        name: 'ElevenLabs widget',
        provider: 'ElevenLabs Inc. (third-party, EU residency)',
        purpose:
          'Powers the voice virtual assistant. The widget is downloaded and connects with ElevenLabs servers only if you accept optional cookies.',
        retention: "Session + provider's own storage",
      },
      {
        name: 'Google Fonts (Material Symbols)',
        provider: 'Google LLC (third-party)',
        purpose:
          'Site iconography. Loading from Google servers involves the transfer of your IP address.',
        retention: 'No persistent cookies; single HTTP request per session',
      },
    ],
    managementTitle: 'Managing consent',
    managementBody:
      'You can change your decision at any time by using the button below. You can also block or delete cookies from your browser settings.',
    changePrefs: 'Change my preferences',
    moreTitle: 'More information',
    moreBody:
      'For more information about the processing of personal data, please see our Legal Notice and Privacy Policy.',
    contactTitle: 'Contact',
    contactBody:
      'If you have any questions about this policy, please email us at rgpd@motorflash.com.',
    breadcrumbHome: 'Home',
    breadcrumbHere: 'Cookie policy',
  },
  zh: {
    title: 'Cookie 政策',
    metaTitle: 'Cookie 政策 · Motorflash',
    metaDesc:
      'Motorflash Ibérica 使用的 Cookies 和等效技术的相关信息,以及管理您同意的选项。',
    updated: '最后更新',
    updatedDate: '2026 年 9 月 1 日',
    intro:
      '本 Cookie 政策说明了 Cookies 是什么、我们如何在本网站上使用它们,以及您可用于管理它们的选项。',
    whatAreTitle: '什么是 Cookies?',
    whatAreBody:
      'Cookies 是网站在您访问时保存在浏览器中的小文件。它们用于确保网站正常运行、记住偏好或改善您的体验。浏览器的 localStorage 等等效技术在本政策中也视为 Cookies。',
    useTitle: '我们使用的 Cookies',
    useBody:
      '本网站区分严格必要的 Cookies(始终加载)与可选的 Cookies(仅在您同意后启用)。',
    tableTitle: '明细',
    columns: {
      name: 'Cookie / 存储',
      provider: '提供方',
      purpose: '用途',
      retention: '保留期',
    },
    rows: [
      {
        name: 'mf-cookie-consent',
        provider: 'Motorflash(自有)',
        purpose: '存储您关于可选 Cookies 的决定,以避免再次显示横幅。',
        retention: '持久(localStorage)直至删除',
      },
      {
        name: 'NEXT_LOCALE',
        provider: 'Motorflash(自有)',
        purpose: '记住所选择的语言。',
        retention: '1 年',
      },
      {
        name: 'payload-token',
        provider: 'Motorflash(自有)',
        purpose: 'CMS 管理员会话(仅在访问 /admin 时设置)。',
        retention: '会话 / 直到退出登录',
      },
      {
        name: 'ElevenLabs 小部件',
        provider: 'ElevenLabs Inc.(第三方,EU residency)',
        purpose:
          '启用语音虚拟助手。仅在您接受可选 Cookies 时才会下载并连接至 ElevenLabs 服务器。',
        retention: '会话 + 提供方的自有存储',
      },
      {
        name: 'Google Fonts(Material Symbols)',
        provider: 'Google LLC(第三方)',
        purpose:
          '网站图标。从 Google 服务器加载会涉及您的 IP 地址传输。',
        retention: '无持久 Cookies;每次会话一次 HTTP 请求',
      },
    ],
    managementTitle: '管理同意',
    managementBody:
      '您可以随时通过下面的按钮更改您的选择。您也可以在浏览器设置中阻止或删除 Cookies。',
    changePrefs: '更改我的偏好',
    moreTitle: '更多信息',
    moreBody: '有关个人数据处理的更多信息,请参阅我们的法律声明和隐私政策。',
    contactTitle: '联系我们',
    contactBody: '如果您对本政策有任何疑问,请发送邮件至 rgpd@motorflash.com。',
    breadcrumbHome: '首页',
    breadcrumbHere: 'Cookie 政策',
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

export default async function CookiePolicyPage() {
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

          <h2 className="text-xl font-semibold mb-3">{t.whatAreTitle}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{t.whatAreBody}</p>

          <h2 className="text-xl font-semibold mb-3">{t.useTitle}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{t.useBody}</p>

          <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-3">
            {t.tableTitle}
          </h3>
          <div className="overflow-x-auto -mx-4 md:mx-0 mb-10">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="text-left border-b-2 border-outline-variant">
                  <th className="p-3 font-semibold">{t.columns.name}</th>
                  <th className="p-3 font-semibold">{t.columns.provider}</th>
                  <th className="p-3 font-semibold">{t.columns.purpose}</th>
                  <th className="p-3 font-semibold">{t.columns.retention}</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r) => (
                  <tr key={r.name} className="border-b border-outline-variant align-top">
                    <td className="p-3 font-mono text-[11px] md:text-xs whitespace-nowrap">
                      {r.name}
                    </td>
                    <td className="p-3">{r.provider}</td>
                    <td className="p-3 text-on-surface-variant">{r.purpose}</td>
                    <td className="p-3 text-on-surface-variant">{r.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mb-3">{t.managementTitle}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            {t.managementBody}
          </p>
          <CookieConsentResetButton label={t.changePrefs} />

          <h2 className="text-xl font-semibold mb-3 mt-10">{t.moreTitle}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-8">{t.moreBody}</p>

          <h2 className="text-xl font-semibold mb-3">{t.contactTitle}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">{t.contactBody}</p>
        </div>
      </section>
    </>
  )
}
