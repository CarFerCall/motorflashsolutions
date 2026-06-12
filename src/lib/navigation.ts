/**
 * Lectura del menú principal desde el global de Payload. Server-side,
 * cacheado en el ciclo de petición (Next/React cache).
 */
import { cache } from 'react'
import { getPayloadClient } from './payload'

export interface MenuChild {
  label: string
  url: string
  icon?: string | null
  description?: string | null
}

export interface MenuItem {
  label: string
  kind: 'link' | 'dropdown'
  url?: string | null
  newTab?: boolean
  children?: MenuChild[]
}

export interface MainMenuData {
  items: MenuItem[]
  cta?: { label?: string; url?: string } | null
}

export const getMainMenu = cache(async (): Promise<MainMenuData> => {
  try {
    const payload = await getPayloadClient()
    const data = (await payload.findGlobal({ slug: 'main-menu' as any })) as any
    return {
      items: Array.isArray(data?.items) ? data.items : [],
      cta: data?.cta ?? null,
    }
  } catch {
    return { items: [], cta: null }
  }
})
