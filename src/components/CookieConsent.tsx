'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import { getConsent, setConsent } from '@/lib/cookie-consent'

type Copy = {
  title: string
  body: string
  accept: string
  reject: string
  more: string
  moreHref: string
}

const COPY: Record<string, Copy> = {
  es: {
    title: 'Cookies y privacidad',
    body: 'Usamos cookies estrictamente necesarias para el funcionamiento del sitio y otras opcionales que habilitan el asistente virtual y recursos de terceros. Puedes aceptar todas o rechazar las opcionales; podrás cambiar tu decisión desde el pie de página.',
    accept: 'Aceptar todo',
    reject: 'Solo necesarias',
    more: 'Política de cookies',
    moreHref: '/politica-cookies',
  },
  ca: {
    title: 'Cookies i privacitat',
    body: 'Utilitzem cookies estrictament necessàries per al funcionament del web i altres d’opcionals que habiliten l’assistent virtual i recursos de tercers. Pots acceptar-les totes o rebutjar les opcionals; podràs canviar la teva decisió des del peu de pàgina.',
    accept: 'Acceptar-ho tot',
    reject: 'Només necessàries',
    more: 'Política de cookies',
    moreHref: '/ca/politica-cookies',
  },
  en: {
    title: 'Cookies and privacy',
    body: 'We use strictly necessary cookies for the site to work and optional ones that enable the virtual assistant and third-party resources. You can accept all or reject optional ones; you can change your choice from the footer.',
    accept: 'Accept all',
    reject: 'Only necessary',
    more: 'Cookie policy',
    moreHref: '/en/politica-cookies',
  },
  zh: {
    title: 'Cookies 与隐私',
    body: '我们使用严格必要的 Cookies 以保障网站运行,并使用可选的 Cookies 启用虚拟助手和第三方资源。您可以全部接受或仅接受必要的;可通过页脚随时更改选择。',
    accept: '全部接受',
    reject: '仅必要',
    more: 'Cookie 政策',
    moreHref: '/zh/politica-cookies',
  },
}

/**
 * Banner de consentimiento de cookies.
 *
 * Aparece la primera visita (localStorage vacío). No bloquea la
 * navegación pero cubre la esquina inferior-derecha con dos botones
 * (Aceptar / Rechazar) del mismo peso visual, cumpliendo la guía de
 * la AEPD. El widget de ElevenLabs se gatea contra este consentimiento
 * (ver src/components/elevenlabs/ElevenLabsWidget.tsx).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const locale = useLocale()
  const t = COPY[locale] ?? COPY.es

  useEffect(() => {
    if (getConsent() === null) setVisible(true)
  }, [])

  if (!visible) return null

  const decide = (value: 'accepted' | 'rejected') => {
    setConsent(value)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-[60] rounded-2xl shadow-2xl border border-outline-variant bg-white p-5"
    >
      <p className="text-sm font-bold text-on-surface mb-1">{t.title}</p>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
        {t.body}{' '}
        <Link
          href={t.moreHref}
          prefetch={false}
          className="underline text-primary hover:opacity-80"
        >
          {t.more}
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={() => decide('rejected')}
          className="flex-1 inline-flex items-center justify-center rounded-full border border-outline-variant text-sm font-semibold text-on-surface px-4 py-2.5 hover:bg-surface-container transition-colors"
        >
          {t.reject}
        </button>
        <button
          type="button"
          onClick={() => decide('accepted')}
          className="flex-1 inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity"
        >
          {t.accept}
        </button>
      </div>
    </div>
  )
}
