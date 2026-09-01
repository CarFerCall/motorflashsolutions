'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { getConsent, onConsentChange } from '@/lib/cookie-consent'

const AGENT_ID = 'agent_5201kd7z6vp6ext81vadrmqm5q5e'

const VALID_SLUGS = new Set([
  'dealer',
  'crm4you',
  'contact-center',
  'spyne',
  'motorflash-message',
  'motorchat',
  'ia',
  'soluciones-web',
  'marketing-digital',
  'lead-factory',
  'soluciones-fabricantes',
  'motorflash-connect',
  'apex',
])

const urlToService: Record<string, string> = {
  dealer: 'DEALER',
  crm4you: 'CRM4YOU',
  'contact-center': 'CUSTOMER MANAGER',
  spyne: 'SPYNE',
  'motorflash-message': 'MESSAGE',
  motorchat: 'MOTORCHAT',
  ia: 'IA',
  'soluciones-web': 'PLATINUM',
  'marketing-digital': 'AGENCIA DIGITAL',
  'lead-factory': 'LEAD FACTORY',
  'soluciones-fabricantes': 'SOLUCIONES FABRICANTES',
  'motorflash-connect': 'FLEET MANAGER',
  apex: 'APEX',
}

const serviceToURL: Record<string, string> = {
  DEALER: 'dealer',
  EXPORTACIONES: 'dealer',
  MULTIPUBLICADOR: 'dealer',
  'MULTIPUBLICADOR DEALER': 'dealer',
  'MULTIPUBLICADOR EXPORTACIONES': 'dealer',
  'DEALER + MULTIPUBLICACION': 'dealer',
  CRM4YOU: 'crm4you',
  CRM: 'crm4you',
  'CRM 4 YOU': 'crm4you',
  'CUSTOMER MANAGER': 'contact-center',
  'CONTACT CENTER': 'contact-center',
  SPYNE: 'spyne',
  'PHOTOCALL IA': 'spyne',
  MESSAGE: 'motorflash-message',
  'MOTORFLASH MESSAGE': 'motorflash-message',
  'WHATSAPP MESSAGE': 'motorflash-message',
  'WHATSAPP BUSINESS': 'motorflash-message',
  MOTORCHAT: 'motorchat',
  'MOTOR CHAT': 'motorchat',
  'MOTOR-CHAT': 'motorchat',
  IA: 'ia',
  'MOTORFLASH IA': 'ia',
  'INTELIGENCIA ARTIFICIAL': 'ia',
  PLATINUM: 'soluciones-web',
  'SOLUCIONES WEB': 'soluciones-web',
  'SERVICIOS WEB': 'soluciones-web',
  'AGENCIA DIGITAL': 'marketing-digital',
  'MARKETING DIGITAL': 'marketing-digital',
  LEAD: 'lead-factory',
  'LEAD FACTORY': 'lead-factory',
  'LEAD MOTORFLASH': 'lead-factory',
  'LEAD MOTORFLASH.COM': 'lead-factory',
  CLASIFICADOS: 'lead-factory',
  FABRICANTES: 'soluciones-fabricantes',
  'SOLUCIONES FABRICANTES': 'soluciones-fabricantes',
  'SOLUCIONES PARA FABRICANTES': 'soluciones-fabricantes',
  CONNECT: 'motorflash-connect',
  'MOTORFLASH CONNECT': 'motorflash-connect',
  'FLEET MANAGER': 'motorflash-connect',
  APEX: 'apex',
  'APEX BY MOTORFLASH': 'apex',
}

type ConvaiCallDetail = {
  config: {
    clientTools?: Record<string, (params: unknown) => unknown>
    dynamicVariables?: Record<string, string>
  }
}

const OPEN_LABEL: Record<string, string> = {
  es: 'Abrir asistente',
  ca: 'Obrir assistent',
  en: 'Open assistant',
  zh: '打开助手',
}

function detectServiceFromPath(pathname: string): string {
  const lower = pathname.toLowerCase()
  for (const [urlPart, serviceName] of Object.entries(urlToService)) {
    if (lower.includes(urlPart)) return serviceName
  }
  return ''
}

/**
 * Widget del asistente de voz de ElevenLabs.
 *
 * En desktop se carga con la estrategia por defecto (lazyOnload) —
 * la CPU aguanta el parseo del bundle sin bloquear interacciones.
 *
 * En móvil el bundle (~1,5 MB) bloquea el hilo principal 2-4 s al
 * parsear/inicializar, entorpeciendo el tap del menú hamburguesa.
 * Por eso mostramos un botón placeholder ligero abajo-derecha y solo
 * cargamos el widget real cuando el usuario lo pulsa. Mientras carga,
 * el botón se convierte en un spinner para dar feedback visual.
 */
export function ElevenLabsWidget() {
  const widgetRef = useRef<HTMLElement | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [consented, setConsented] = useState(false)
  const locale = useLocale()
  const label = OPEN_LABEL[locale] ?? OPEN_LABEL.es

  useEffect(() => {
    pathnameRef.current = pathname
  }, [pathname])

  // Detectamos móvil client-side. Evitamos renderizar nada en el
  // primer paint (SSR) — solo después de saber si somos mobile o
  // desktop, para no cargar el widget en desktop antes del check.
  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // El widget de ElevenLabs es un tercero que conecta con
  // api.eu.residency.elevenlabs.io y descarga assets externos. Solo
  // se carga si el usuario ha aceptado cookies.
  useEffect(() => {
    setConsented(getConsent() === 'accepted')
    return onConsentChange((value) => setConsented(value === 'accepted'))
  }, [])

  // En desktop, cargamos el widget automáticamente en cuanto sepamos
  // que no somos móvil y hay consentimiento. En móvil hay que esperar
  // el click del usuario aun con consentimiento.
  useEffect(() => {
    if (mounted && !isMobile && consented && !loaded) {
      setLoaded(true)
    }
  }, [mounted, isMobile, consented, loaded])

  // El spinner se autolimita a 4 s por si el evento de "widget listo"
  // no llega (bundle bloqueado, red intermitente, etc.).
  useEffect(() => {
    if (!loading) return
    const t = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(t)
  }, [loading])

  useEffect(() => {
    if (!loaded) return
    const widget = widgetRef.current
    if (!widget) return

    const onCall = (event: Event) => {
      const detail = (event as CustomEvent<ConvaiCallDetail>).detail
      if (!detail?.config) return

      detail.config.dynamicVariables = {
        current_page: pathnameRef.current || '/',
        servicio_interes: detectServiceFromPath(pathnameRef.current || ''),
        user_name: '',
        email: '',
        tel: '',
        empresa: '',
        timing: '',
        session_id: '',
        first_conversation_id: '',
      }

      detail.config.clientTools = {
        MF_SaveData: (params) => {
          const servicio =
            params && typeof params === 'object' && 'servicio_interes' in params
              ? (params as { servicio_interes?: unknown }).servicio_interes
              : undefined
          if (typeof servicio !== 'string' || !servicio.trim()) return

          const slug = serviceToURL[servicio.trim().toUpperCase()]
          if (!slug || !VALID_SLUGS.has(slug)) {
            console.warn('[ElevenLabsWidget] Servicio no mapeado o slug inválido:', servicio, '→', slug)
            return
          }

          const target = `/servicios/${slug}` as const
          if (pathnameRef.current === target) return
          router.push(target)
        },
      }
    }

    // Cuando el widget termina de inicializarse, quitamos el spinner.
    // El evento exacto depende del bundle; si no llega, el timeout de
    // 4 s del efecto anterior nos cubre.
    const onReady = () => setLoading(false)
    widget.addEventListener('elevenlabs-convai:call', onCall)
    widget.addEventListener('elevenlabs-convai:ready', onReady)
    return () => {
      widget.removeEventListener('elevenlabs-convai:call', onCall)
      widget.removeEventListener('elevenlabs-convai:ready', onReady)
    }
  }, [router, loaded])

  // Antes de saber si somos móvil o desktop no renderizamos nada — evita
  // cargar el widget en desktop durante el primer tick previo al check.
  if (!mounted) return null

  // Sin consentimiento, no mostramos ni siquiera el placeholder. El
  // banner de cookies vive en el mismo layout y ocupa esa esquina.
  if (!consented) return null

  const handleOpen = () => {
    setLoading(true)
    setLoaded(true)
  }

  // Placeholder móvil (solo cuando aún no está cargado). En desktop se
  // salta este render y se monta el widget directamente por el efecto.
  if (isMobile && !loaded) {
    return (
      <button
        type="button"
        onClick={handleOpen}
        aria-label={label}
        title={label}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        style={{ background: '#121414' }}
      >
        <span className="material-symbols-outlined text-white" style={{ fontSize: 28 }}>
          chat
        </span>
      </button>
    )
  }

  return (
    <>
      {/* Spinner overlay mientras el bundle del widget descarga y se
          inicializa. Se posiciona en el mismo sitio que el placeholder
          y desaparece cuando el widget está listo (evento) o al timeout. */}
      {isMobile && loading && (
        <div
          aria-hidden
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg pointer-events-none"
          style={{ background: '#121414' }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            style={{ animation: 'mf-eleven-spin 0.8s linear infinite' }}
          >
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
            <path d="M22 12a10 10 0 0 0-10-10" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <style>{`@keyframes mf-eleven-spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
      <elevenlabs-convai
        ref={widgetRef}
        agent-id={AGENT_ID}
        server-location="eu-residency"
      />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
    </>
  )
}
