'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { submitContact } from '@/app/actions/submitContact'
import { PrivacyLayer1 } from '@/components/PrivacyLayer1'
import type { ContactFormCopy } from '@/lib/contact-form-content'

export interface ProductOption {
  slug: string
  name: string
}

/**
 * Subset del copy del CMS necesario para pintar el formulario. El
 * padre (server component) lee `getContactFormCopy(locale)` y pasa el
 * objeto por prop, así evitamos importar `@/lib/payload` desde el
 * cliente.
 */
export type ContactFormLabels = Pick<
  ContactFormCopy,
  | 'nameLabel'
  | 'namePlaceholder'
  | 'emailLabel'
  | 'emailPlaceholder'
  | 'companyLabel'
  | 'phoneLabel'
  | 'serviceLabel'
  | 'servicePlaceholder'
  | 'messageLabel'
  | 'messagePlaceholder'
  | 'privacy'
  | 'sending'
  | 'submit'
>

export function ContactForm({ products, t }: { products: ProductOption[]; t: ContactFormLabels }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const locale = useLocale()
  const initialService = searchParams.get('servicio') ?? ''
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (form: FormData) => {
    setError(null)
    startTransition(async () => {
      const result = await submitContact({
        contactName: String(form.get('contactName') ?? ''),
        email: String(form.get('email') ?? ''),
        companyName: String(form.get('companyName') ?? '') || null,
        phone: String(form.get('phone') ?? '') || null,
        servicio: String(form.get('servicio') ?? '') || null,
        message: String(form.get('message') ?? '') || null,
        privacy: form.get('privacy') === 'on',
      })
      if (!result.ok) {
        setError(result.error)
        return
      }
      router.push('/contacto/gracias')
    })
  }

  return (
    <form action={handleSubmit} className="grid grid-cols-1 gap-4">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contactName" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">{t.nameLabel}</label>
          <input id="contactName" name="contactName" type="text" required placeholder={t.namePlaceholder} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">{t.emailLabel}</label>
          <input id="email" name="email" type="email" required placeholder={t.emailPlaceholder} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companyName" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">{t.companyLabel}</label>
          <input id="companyName" name="companyName" type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">{t.phoneLabel}</label>
          <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
        </div>
      </div>
      <div>
        <label htmlFor="servicio" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">{t.serviceLabel}</label>
        <select id="servicio" name="servicio" defaultValue={initialService} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none bg-white">
          <option value="">{t.servicePlaceholder}</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold mb-2 text-on-surface-variant">{t.messageLabel}</label>
        <textarea id="message" name="message" rows={4} placeholder={t.messagePlaceholder} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:outline-none" />
      </div>
      <div className="flex gap-3 items-start">
        <input id="privacy" name="privacy" type="checkbox" required className="mt-1 w-5 h-5 accent-primary" />
        <label htmlFor="privacy" className="text-xs text-on-surface-variant">
          {t.privacy}
        </label>
      </div>
      <PrivacyLayer1 locale={locale} />
      <button type="submit" disabled={pending} className="btn-primary w-full mt-2" style={{ padding: '1.125rem 2rem' }}>
        {pending ? t.sending : t.submit}
        {!pending && <span className="material-symbols-outlined">send</span>}
      </button>
    </form>
  )
}
