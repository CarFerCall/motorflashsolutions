'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import {
  clearPreferences,
  getPreferences,
  setPreferences,
  type ConsentPreferences,
} from '@/lib/cookie-consent'

type CategoryCopy = { label: string; description: string }

type Copy = {
  title: string
  body: string
  accept: string
  reject: string
  configure: string
  save: string
  more: string
  moreHref: string
  configTitle: string
  configLead: string
  close: string
  alwaysOn: string
  categories: {
    necessary: CategoryCopy
    assistant: CategoryCopy
  }
}

const COPY: Record<string, Copy> = {
  es: {
    title: 'Cookies y privacidad',
    body: 'Usamos cookies estrictamente necesarias para el funcionamiento del sitio y otras opcionales que habilitan el asistente virtual. Puedes aceptar todas, solo las necesarias o configurar en detalle.',
    accept: 'Aceptar todo',
    reject: 'Solo necesarias',
    configure: 'Configurar',
    save: 'Guardar preferencias',
    more: 'Política de cookies',
    moreHref: '/politica-cookies',
    configTitle: 'Preferencias de cookies',
    configLead: 'Activa o desactiva cada categoría. Las necesarias son imprescindibles y no se pueden desactivar.',
    close: 'Cerrar',
    alwaysOn: 'Siempre activas',
    categories: {
      necessary: {
        label: 'Cookies necesarias',
        description: 'Imprescindibles para el funcionamiento básico del sitio: recordar el idioma, sesión de administración del CMS y el propio banner de consentimiento.',
      },
      assistant: {
        label: 'Asistente virtual (ElevenLabs)',
        description: 'Permite cargar y usar el asistente virtual de voz. Al activarlas, se descarga el widget de ElevenLabs y se establece conexión con sus servidores.',
      },
    },
  },
  ca: {
    title: 'Cookies i privacitat',
    body: 'Utilitzem cookies estrictament necessàries per al funcionament del web i altres d’opcionals que habiliten l’assistent virtual. Pots acceptar-les totes, només les necessàries o configurar en detall.',
    accept: 'Acceptar-ho tot',
    reject: 'Només necessàries',
    configure: 'Configurar',
    save: 'Desa preferències',
    more: 'Política de cookies',
    moreHref: '/ca/politica-cookies',
    configTitle: 'Preferències de cookies',
    configLead: 'Activa o desactiva cada categoria. Les necessàries són imprescindibles i no es poden desactivar.',
    close: 'Tancar',
    alwaysOn: 'Sempre actives',
    categories: {
      necessary: {
        label: 'Cookies necessàries',
        description: 'Imprescindibles per al funcionament bàsic del web: recordar l’idioma, sessió d’administració del CMS i el propi bàner de consentiment.',
      },
      assistant: {
        label: 'Assistent virtual (ElevenLabs)',
        description: 'Permet carregar i utilitzar l’assistent virtual de veu. En activar-les, es descarrega el widget d’ElevenLabs i s’estableix connexió amb els seus servidors.',
      },
    },
  },
  en: {
    title: 'Cookies and privacy',
    body: 'We use strictly necessary cookies for the site to work and optional ones that enable the virtual assistant. You can accept all, only the necessary ones or configure in detail.',
    accept: 'Accept all',
    reject: 'Only necessary',
    configure: 'Configure',
    save: 'Save preferences',
    more: 'Cookie policy',
    moreHref: '/en/politica-cookies',
    configTitle: 'Cookie preferences',
    configLead: 'Enable or disable each category. Necessary cookies are essential and cannot be turned off.',
    close: 'Close',
    alwaysOn: 'Always on',
    categories: {
      necessary: {
        label: 'Necessary cookies',
        description: 'Essential for the basic operation of the site: remembering the language, CMS admin session and the consent banner itself.',
      },
      assistant: {
        label: 'Virtual assistant (ElevenLabs)',
        description: 'Allows loading and using the virtual voice assistant. When enabled, the ElevenLabs widget is downloaded and a connection is established with their servers.',
      },
    },
  },
  zh: {
    title: 'Cookies 与隐私',
    body: '我们使用严格必要的 Cookies 以保障网站运行,并使用可选的 Cookies 启用虚拟助手。您可以全部接受、仅接受必要的,或详细配置。',
    accept: '全部接受',
    reject: '仅必要',
    configure: '配置',
    save: '保存偏好',
    more: 'Cookie 政策',
    moreHref: '/zh/politica-cookies',
    configTitle: 'Cookie 偏好',
    configLead: '启用或禁用每个类别。必要 Cookies 是不可或缺的,无法关闭。',
    close: '关闭',
    alwaysOn: '始终启用',
    categories: {
      necessary: {
        label: '必要 Cookies',
        description: '网站基本运行所必需的:记住语言、CMS 管理员会话以及同意横幅本身。',
      },
      assistant: {
        label: '虚拟助手(ElevenLabs)',
        description: '允许加载和使用语音虚拟助手。启用后将下载 ElevenLabs 小部件并与其服务器建立连接。',
      },
    },
  },
}

/**
 * Banner de consentimiento con panel de configuración por categorías.
 *
 * Al primer visit se muestra el banner (3 acciones: Solo necesarias,
 * Configurar, Aceptar todo). Desde "Configurar" se abre un modal con
 * un toggle por categoría siguiendo la guía AEPD 2023. Se puede volver
 * a abrir el modal desde `/politica-cookies` (limpia el consentimiento
 * y muestra el banner de nuevo).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [configOpen, setConfigOpen] = useState(false)
  const [prefs, setPrefs] = useState<ConsentPreferences>({
    necessary: true,
    assistant: false,
  })
  const locale = useLocale()
  const t = COPY[locale] ?? COPY.es

  useEffect(() => {
    if (getPreferences() === null) setVisible(true)
  }, [])

  if (!visible) return null

  const persistAndClose = (next: ConsentPreferences) => {
    setPreferences(next)
    setVisible(false)
    setConfigOpen(false)
  }

  const acceptAll = () => persistAndClose({ necessary: true, assistant: true })
  const rejectAll = () => persistAndClose({ necessary: true, assistant: false })
  const saveCustom = () => persistAndClose(prefs)

  return (
    <>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={rejectAll}
            className="inline-flex items-center justify-center rounded-full border border-outline-variant text-sm font-semibold text-on-surface px-3 py-2.5 hover:bg-surface-container transition-colors"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={() => setConfigOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-outline-variant text-sm font-semibold text-on-surface px-3 py-2.5 hover:bg-surface-container transition-colors"
          >
            {t.configure}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold px-3 py-2.5 hover:opacity-90 transition-opacity"
          >
            {t.accept}
          </button>
        </div>
      </div>

      {configOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.configTitle}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setConfigOpen(false)
          }}
        >
          <div className="w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-on-surface m-0">{t.configTitle}</h2>
                  <p className="text-xs text-on-surface-variant mt-1 mb-0">{t.configLead}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setConfigOpen(false)}
                  aria-label={t.close}
                  className="w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center shrink-0"
                >
                  <span className="material-symbols-outlined text-on-surface-variant">close</span>
                </button>
              </div>

              <ul className="space-y-3 mb-6">
                <CategoryRow
                  label={t.categories.necessary.label}
                  description={t.categories.necessary.description}
                  alwaysOnLabel={t.alwaysOn}
                  checked
                  disabled
                />
                <CategoryRow
                  label={t.categories.assistant.label}
                  description={t.categories.assistant.description}
                  checked={prefs.assistant}
                  onChange={(v) => setPrefs((p) => ({ ...p, assistant: v }))}
                />
              </ul>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-outline-variant text-sm font-semibold text-on-surface px-4 py-2.5 hover:bg-surface-container transition-colors"
                >
                  {t.reject}
                </button>
                <button
                  type="button"
                  onClick={saveCustom}
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-outline-variant text-sm font-semibold text-on-surface px-4 py-2.5 hover:bg-surface-container transition-colors"
                >
                  {t.save}
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity"
                >
                  {t.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function CategoryRow({
  label,
  description,
  checked,
  disabled,
  alwaysOnLabel,
  onChange,
}: {
  label: string
  description: string
  checked: boolean
  disabled?: boolean
  alwaysOnLabel?: string
  onChange?: (value: boolean) => void
}) {
  return (
    <li className="rounded-xl border border-outline-variant p-4 flex items-start gap-4">
      <div className="flex-1">
        <p className="text-sm font-semibold text-on-surface m-0">{label}</p>
        <p className="text-xs text-on-surface-variant mt-1 mb-0 leading-relaxed">{description}</p>
      </div>
      {disabled ? (
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary shrink-0 mt-1">
          {alwaysOnLabel}
        </span>
      ) : (
        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
          />
          <span
            className="w-11 h-6 bg-outline-variant rounded-full transition-colors peer-checked:bg-primary relative
              after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform peer-checked:after:translate-x-5"
          />
        </label>
      )}
    </li>
  )
}

// Función auxiliar exportada por si algún día se quiere abrir el modal
// desde fuera del banner (p.ej. botón del footer). No en uso ahora.
export function reopenCookieBanner(): void {
  clearPreferences()
  if (typeof window !== 'undefined') window.location.reload()
}
