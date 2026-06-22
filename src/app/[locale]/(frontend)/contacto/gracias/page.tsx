import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { getContactFormCopy, type ContactFormLocale } from '@/lib/contact-form-content'

export const metadata = {
  robots: { index: false, follow: false },
}

export default async function ContactoGraciasPage() {
  const locale = ((await getLocale()) as ContactFormLocale) || 'es'
  const t = await getContactFormCopy(locale)
  return (
    <section className="py-32">
      <div className="mf-container text-center">
        <div className="mf-icon-tile mx-auto mb-4" style={{ width: 96, height: 96, borderRadius: '1.5rem' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 56 }}>check_circle</span>
        </div>
        <h1 className="text-3xl md:text-display-lg font-semibold mb-3">{t.thanksTitle}</h1>
        <p className="text-on-surface-variant mx-auto max-w-2xl mb-6">{t.thanksLead}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link href="/servicios" className="btn-secondary">{t.thanksExploreServices}</Link>
          <Link href="/" className="btn-primary">{t.thanksBackHome}</Link>
        </div>
      </div>
    </section>
  )
}
