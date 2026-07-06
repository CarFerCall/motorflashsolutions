'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'

const AGENT_ID = 'agent_5201kd7z6vp6ext81vadrmqm5q5e'

const serviceToURL: Record<string, string> = {
  PLATINUM: 'soluciones-web',
  'AGENCIA DIGITAL': 'marketing-digital',
  'LEAD FACTORY': 'lead-factory',
  MESSAGE: 'motorflash-message',
  'CUSTOMER MANAGER': 'contact-center',
  CRM4YOU: 'crm4you',
  CLASIFICADOS: 'portal-publicacion',
  'MOBILE TRACKING': 'motorflash-mobile-tracking',
  DEALER: 'dealer',
  EXPORTACIONES: 'exportaciones',
  SPYNE: 'spyne',
  IA: 'ia',
  'MARKETING DIGITAL': 'marketing-digital',
  'CONTACT CENTER': 'contact-center',
  CRM: 'crm4you',
  'CRM 4 YOU': 'crm4you',
  'MOTORFLASH MESSAGE': 'motorflash-message',
  'WHATSAPP MESSAGE': 'motorflash-message',
  'MULTIPUBLICADOR DEALER': 'dealer',
  'MULTIPUBLICADOR EXPORTACIONES': 'exportaciones',
  'MOTORFLASH MOBILE TRACKING': 'motorflash-mobile-tracking',
  LEAD: 'lead-factory',
}

type ConvaiCallDetail = {
  config: {
    clientTools?: Record<string, (params: unknown) => unknown>
  }
}

export function ElevenLabsWidget() {
  const widgetRef = useRef<HTMLElement | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)

  useEffect(() => {
    pathnameRef.current = pathname
  }, [pathname])

  useEffect(() => {
    const widget = widgetRef.current
    if (!widget) return

    const onCall = (event: Event) => {
      const detail = (event as CustomEvent<ConvaiCallDetail>).detail
      if (!detail?.config) return

      detail.config.clientTools = {
        MF_SaveData: (params) => {
          const servicio =
            params && typeof params === 'object' && 'servicio_interes' in params
              ? (params as { servicio_interes?: unknown }).servicio_interes
              : undefined
          if (typeof servicio !== 'string' || !servicio.trim()) return

          const slug = serviceToURL[servicio.trim().toUpperCase()]
          if (!slug) {
            console.warn('[ElevenLabsWidget] Servicio no mapeado:', servicio)
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
  }, [router])

  return (
    <>
      <elevenlabs-convai
        ref={widgetRef}
        agent-id={AGENT_ID}
        server-location="eu-residency"
      />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  )
}
