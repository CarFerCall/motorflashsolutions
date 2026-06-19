import Link from 'next/link'
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

const COPY: Record<LocaleKey, {
  title: string
  lead: string
  exploreServices: string
  backHome: string
}> = {
  es: {
    title: 'Hemos recibido tu mensaje',
    lead: 'Un especialista comercial te contactará en menos de 24 horas. Te hemos enviado también una confirmación a tu email.',
    exploreServices: 'Ver todos los servicios',
    backHome: 'Volver al inicio',
  },
  ca: {
    title: 'Hem rebut el teu missatge',
    lead: "Un especialista comercial et contactarà en menys de 24 hores. També t'hem enviat una confirmació al teu correu.",
    exploreServices: 'Veure tots els serveis',
    backHome: "Tornar a l'inici",
  },
  en: {
    title: 'We have received your message',
    lead: "A sales specialist will contact you within 24 hours. We've also sent a confirmation to your email.",
    exploreServices: 'View all services',
    backHome: 'Back to home',
  },
  zh: {
    title: '我们已收到您的消息',
    lead: '商务专家将在 24 小时内与您联系。我们也已向您的邮箱发送了一份确认。',
    exploreServices: '查看所有服务',
    backHome: '返回首页',
  },
}

export const metadata = {
  robots: { index: false, follow: false },
}

export default async function ContactoGraciasPage() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return (
    <section className="py-32">
      <div className="mf-container text-center">
        <div className="mf-icon-tile mx-auto mb-4" style={{ width: 96, height: 96, borderRadius: '1.5rem' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 56 }}>check_circle</span>
        </div>
        <h1 className="text-3xl md:text-display-lg font-semibold mb-3">{t.title}</h1>
        <p className="text-on-surface-variant mx-auto max-w-2xl mb-6">{t.lead}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link href="/servicios" className="btn-secondary">{t.exploreServices}</Link>
          <Link href="/" className="btn-primary">{t.backHome}</Link>
        </div>
      </div>
    </section>
  )
}
