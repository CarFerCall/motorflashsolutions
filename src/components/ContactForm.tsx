'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { submitContact } from '@/app/actions/submitContact'

export interface ProductOption {
  slug: string
  name: string
}

type LocaleKey = 'es' | 'en' | 'zh'

const COPY: Record<LocaleKey, {
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  companyLabel: string
  phoneLabel: string
  serviceLabel: string
  servicePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  privacy: string
  sending: string
  submit: string
}> = {
  es: {
    nameLabel: 'Nombre *',
    namePlaceholder: 'Tu nombre…',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@ejemplo.com',
    companyLabel: 'Empresa',
    phoneLabel: 'Teléfono',
    serviceLabel: 'Servicio de interés',
    servicePlaceholder: 'Selecciona un servicio…',
    messageLabel: 'Mensaje',
    messagePlaceholder: '¿En qué podemos ayudarte?',
    privacy: 'He leído y acepto la Política de privacidad. Consiento el tratamiento de mis datos.',
    sending: 'Enviando…',
    submit: 'Enviar mensaje',
  },
  en: {
    nameLabel: 'Name *',
    namePlaceholder: 'Your name…',
    emailLabel: 'Email *',
    emailPlaceholder: 'email@example.com',
    companyLabel: 'Company',
    phoneLabel: 'Phone',
    serviceLabel: 'Service of interest',
    servicePlaceholder: 'Pick a service…',
    messageLabel: 'Message',
    messagePlaceholder: 'How can we help?',
    privacy: 'I have read and accept the Privacy Policy. I consent to the processing of my data.',
    sending: 'Sending…',
    submit: 'Send message',
  },
  zh: {
    nameLabel: '姓名 *',
    namePlaceholder: '您的姓名…',
    emailLabel: '邮箱 *',
    emailPlaceholder: 'email@example.com',
    companyLabel: '公司',
    phoneLabel: '电话',
    serviceLabel: '感兴趣的服务',
    servicePlaceholder: '选择服务…',
    messageLabel: '留言',
    messagePlaceholder: '我们可以如何帮助您?',
    privacy: '我已阅读并接受隐私政策,同意对我的数据进行处理。',
    sending: '发送中…',
    submit: '发送留言',
  },
}

export function ContactForm({ products }: { products: ProductOption[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialService = searchParams.get('servicio') ?? ''
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const locale = useLocale() as LocaleKey
  const t = COPY[locale] ?? COPY.es

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
      <button type="submit" disabled={pending} className="btn-primary w-full mt-2" style={{ padding: '1.125rem 2rem' }}>
        {pending ? t.sending : t.submit}
        {!pending && <span className="material-symbols-outlined">send</span>}
      </button>
    </form>
  )
}
