'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
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

function detectServiceFromPath(pathname: string): string {
  const lower = pathname.toLowerCase()
  for (const [urlPart, serviceName] of Object.entries(urlToService)) {
    if (lower.includes(urlPart)) return serviceName
  }
  return ''
}

export function ElevenLabsWidget() {
  const widgetRef = useRef<HTMLElement | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)
  // Diferimos el montaje del <elevenlabs-convai> y su script hasta que
  // el navegador esté idle o el usuario interactúe. El widget hace mucho
  // trabajo síncrono al arrancar (shadow DOM, audio, WebSocket) y en
  // móvil retrasa la hidratación del resto de la UI — sobre todo del
  // menú, dando sensación de "web bloqueada" si el usuario toca antes.
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    if (shouldMount) return

    let cancelled = false
    const mount = () => {
      if (!cancelled) setShouldMount(true)
    }

    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (handle: number) => void
    }

    let idleHandle: number | null = null
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null

    if (typeof win.requestIdleCallback === 'function') {
      idleHandle = win.requestIdleCallback(mount, { timeout: 4000 })
    } else {
      timeoutHandle = setTimeout(mount, 2500)
    }

    const opts: AddEventListenerOptions = { once: true, passive: true }
    const onInteract = () => mount()
    window.addEventListener('scroll', onInteract, opts)
    window.addEventListener('pointerdown', onInteract, opts)
    window.addEventListener('keydown', onInteract, opts)

    return () => {
      cancelled = true
      if (idleHandle !== null && typeof win.cancelIdleCallback === 'function') {
        win.cancelIdleCallback(idleHandle)
      }
      if (timeoutHandle) clearTimeout(timeoutHandle)
      window.removeEventListener('scroll', onInteract)
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('keydown', onInteract)
    }
  }, [shouldMount])

  useEffect(() => {
    pathnameRef.current = pathname
  }, [pathname])

  useEffect(() => {
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
  }, [router, shouldMount])

  if (!shouldMount) return null

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
