import Image from 'next/image'
import { Suspense } from 'react'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'
import { getContactCopy, type ContactLocale } from '@/lib/contact-content'
import { getContactFormCopy } from '@/lib/contact-form-content'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

const BC_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BC_CONTACT: Record<SeoLocale, string> = { es: 'Contacto', ca: 'Contacte', en: 'Contact', zh: '联系我们' }

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

const META: Record<SeoLocale, { title: string; description: string }> = {
  es: {
    title: 'Contacto · Motorflash Ibérica',
    description: 'Contacta con Motorflash Ibérica. Sede en Madrid. Teléfono, email y formulario para solicitar demo, presupuesto o soporte. Respuesta en 24 h laborables.',
  },
  ca: {
    title: 'Contacte · Motorflash Ibérica',
    description: 'Contacta amb Motorflash Ibérica. Seu a Madrid. Telèfon, correu i formulari per sol·licitar demo, pressupost o suport. Resposta en 24 h laborables.',
  },
  en: {
    title: 'Contact · Motorflash Ibérica',
    description: 'Contact Motorflash Ibérica. HQ in Madrid. Phone, email and form to request a demo, quote or support. Response within 24 business hours.',
  },
  zh: {
    title: '联系我们 · Motorflash Ibérica',
    description: '联系 Motorflash Ibérica。马德里总部。电话、邮箱和表单可用于申请演示、报价或支持。工作时间 24 小时内回复。',
  },
}

export async function generateMetadata() {
  const locale = await resolveLocale()
  const meta = META[locale]
  return buildPageMetadata({
    locale,
    path: '/contacto',
    title: meta.title,
    description: meta.description,
  })
}

export default async function ContactoPage() {
  const locale = await resolveLocale()
  const products = orderedProducts(locale as ContactLocale).map((p) => ({ slug: p.slug, name: p.name }))
  const t = await getContactCopy(locale as ContactLocale)
  const formCopy = await getContactFormCopy(locale as ContactLocale)
  const loadingLabel = locale === 'en' ? 'Loading…' : locale === 'zh' ? '加载中…' : locale === 'ca' ? 'Carregant…' : 'Cargando…'
  const phoneHref = `tel:${t.phoneNumber.replace(/\s/g, '')}`
  const emailHref = `mailto:${t.emailAddress}`

  const path = localizedPath(locale, '/contacto')
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`
  const meta = META[locale]
  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'ContactPage',
      path,
      name: meta.title,
      description: meta.description,
      inLanguage: HREFLANG_MAP[locale],
      breadcrumbId,
    }),
    breadcrumbSchema(
      [
        { name: BC_HOME[locale], url: localizedPath(locale, '/') },
        { name: BC_CONTACT[locale], url: path },
      ],
      breadcrumbId,
    ),
  ])

  return (
    <section className="py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mf-container">
        <Reveal>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-outline-variant bg-surface-container">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Info dark */}
              <div className="p-12 md:p-16" style={{ background: '#121414', color: '#fff' }}>
                <h1 className="text-3xl md:text-display-lg font-semibold mb-6">{t.title}</h1>
                <p className="mb-12 text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {t.lead}
                </p>

                <a href={phoneHref} className="flex items-center gap-6 mb-8 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary" style={{ background: 'rgba(255, 128, 0, 0.20)' }}>
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest m-0" style={{ opacity: 0.55 }}>{t.phoneLabel}</p>
                    <p className="text-lg font-bold m-0">{t.phoneNumber}</p>
                  </div>
                </a>

                <a href={emailHref} className="flex items-center gap-6 mb-8 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary" style={{ background: 'rgba(255, 128, 0, 0.20)' }}>
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest m-0" style={{ opacity: 0.55 }}>{t.emailLabel}</p>
                    <p className="text-lg font-bold m-0">{t.emailAddress}</p>
                  </div>
                </a>

                <div className="mt-12 pt-6">
                  <Image src="/images/google-partner.png" alt="Google Partner" width={120} height={32} style={{ height: 32, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                </div>
              </div>

              {/* Form */}
              <div className="p-12 md:p-16 bg-white">
                <Suspense fallback={<div>{loadingLabel}</div>}>
                  <ContactForm products={products} t={formCopy} />
                </Suspense>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
