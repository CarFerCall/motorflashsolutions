import Link from 'next/link'
import { LEGAL_ENTITY } from '@/lib/legal-entity'

type Locale = 'es' | 'ca' | 'en' | 'zh'

/**
 * "Capa 1" de información sobre el tratamiento de datos, según la
 * guía de la AEPD. Se muestra bajo el checkbox de aceptación de
 * cualquier formulario que recoja datos personales. Enlaza a la
 * política de privacidad completa (capa 2).
 */

const COMPANY = LEGAL_ENTITY.name
const EMAIL = LEGAL_ENTITY.contactEmail

const COPY: Record<Locale, { rows: Array<[string, string]>; moreLabel: string; moreHref: string }> = {
  es: {
    rows: [
      ['Responsable', COMPANY],
      ['Finalidad', 'Atender tu solicitud y gestionar la relación comercial.'],
      ['Legitimación', 'Consentimiento del interesado y medidas precontractuales.'],
      ['Destinatarios', 'No se cederán datos a terceros salvo obligación legal.'],
      ['Derechos', `Acceso, rectificación, supresión, oposición y portabilidad escribiendo a ${EMAIL}.`],
    ],
    moreLabel: 'Más información en la Política de privacidad',
    moreHref: '/privacidad',
  },
  ca: {
    rows: [
      ['Responsable', COMPANY],
      ['Finalitat', "Atendre la teva sol·licitud i gestionar la relació comercial."],
      ['Legitimació', "Consentiment de l'interessat i mesures precontractuals."],
      ['Destinataris', "No se cediran dades a tercers excepte per obligació legal."],
      ['Drets', `Accés, rectificació, supressió, oposició i portabilitat escrivint a ${EMAIL}.`],
    ],
    moreLabel: 'Més informació a la Política de privacitat',
    moreHref: '/ca/privacidad',
  },
  en: {
    rows: [
      ['Controller', COMPANY],
      ['Purpose', 'To handle your request and manage the commercial relationship.'],
      ['Legal basis', 'Consent of the data subject and pre-contractual measures.'],
      ['Recipients', 'No data will be shared with third parties except by legal obligation.'],
      ['Rights', `Access, rectification, erasure, objection and portability by writing to ${EMAIL}.`],
    ],
    moreLabel: 'More information in the Privacy Policy',
    moreHref: '/en/privacidad',
  },
  zh: {
    rows: [
      ['数据控制方', COMPANY],
      ['目的', '处理您的请求并管理商务关系。'],
      ['法律依据', '数据主体的同意与合同前措施。'],
      ['接收方', '除法律义务外,不会向第三方共享数据。'],
      ['权利', `访问、更正、删除、反对与可携;发送邮件至 ${EMAIL}。`],
    ],
    moreLabel: '更多信息请参阅隐私政策',
    moreHref: '/zh/privacidad',
  },
}

export function PrivacyLayer1({ locale }: { locale: string }) {
  const t = COPY[(locale as Locale) in COPY ? (locale as Locale) : 'es']
  return (
    <div className="text-[11px] text-on-surface-variant leading-relaxed border border-outline-variant rounded-lg p-3 bg-surface-container-low">
      <dl className="space-y-1">
        {t.rows.map(([k, v]) => (
          <div key={k} className="flex gap-2">
            <dt className="font-semibold text-on-surface shrink-0">{k}:</dt>
            <dd className="m-0 flex-1">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 mb-0">
        <Link href={t.moreHref} prefetch={false} className="text-primary underline hover:opacity-80">
          {t.moreLabel}
        </Link>
      </p>
    </div>
  )
}
