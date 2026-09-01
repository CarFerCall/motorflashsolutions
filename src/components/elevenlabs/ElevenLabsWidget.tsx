'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

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
 * Estrategia de carga: click-to-load. El bundle del widget pesa ~1,5 MB
 * y su parseo bloquea el hilo principal 2-4 s en móviles medios. Para
 * no interferir con la hidratación (drawer del menú, contadores, etc.)
 * mostramos un botón placeholder ligero abajo-derecha; el widget real
 * solo se descarga y monta cuando el usuario lo pide explícitamente.
 */
export function ElevenLabsWidget() {
  const widgetRef = useRef<HTMLElement | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)
  const [loaded, setLoaded] = useState(false)
  const locale = useLocale()
  const label = OPEN_LABEL[locale] ?? OPEN_LABEL.es

  useEffect(() => {
    pathnameRef.current = pathname
  }, [pathname])

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

    widget.addEventListener('elevenlabs-convai:call', onCall)
    return () => {
      widget.removeEventListener('elevenlabs-convai:call', onCall)
    }
  }, [router, loaded])

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
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
