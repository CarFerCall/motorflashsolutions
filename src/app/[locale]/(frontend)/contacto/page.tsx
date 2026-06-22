import Image from 'next/image'
import { Suspense } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'
import { getContactCopy, type ContactLocale } from '@/lib/contact-content'

export async function generateMetadata() {
  const t = await getTranslations('Pages')
  return {
    title: t('contact'),
    alternates: { canonical: '/contacto' },
  }
}

export default async function ContactoPage() {
  const locale = ((await getLocale()) as ContactLocale) || 'es'
  const products = orderedProducts(locale).map((p) => ({ slug: p.slug, name: p.name }))
  const t = await getContactCopy(locale)
  const loadingLabel = locale === 'en' ? 'Loading…' : locale === 'zh' ? '加载中…' : locale === 'ca' ? 'Carregant…' : 'Cargando…'
  const phoneHref = `tel:${t.phoneNumber.replace(/\s/g, '')}`
  const emailHref = `mailto:${t.emailAddress}`

  return (
    <section className="py-32">
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
                  <ContactForm products={products} />
                </Suspense>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
