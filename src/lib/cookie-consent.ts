/**
 * Helpers de consentimiento de cookies.
 *
 * Guardamos el estado en `localStorage` con la clave `mf-cookie-consent`
 * y disparamos un `CustomEvent('mf-consent-changed')` cuando cambia para
 * que los componentes que dependen del consentimiento (widget de chat,
 * etc.) reaccionen sin necesidad de un React Context global.
 *
 * Valores:
 * - `null` / no existe → todavía sin decisión, mostrar banner.
 * - `'accepted'` → el usuario aceptó cookies no esenciales.
 * - `'rejected'` → el usuario rechazó todo lo no imprescindible.
 */

export type ConsentValue = 'accepted' | 'rejected'

const STORAGE_KEY = 'mf-cookie-consent'
const EVENT_NAME = 'mf-consent-changed'

export function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    return v === 'accepted' || v === 'rejected' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: ConsentValue): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
    window.dispatchEvent(new CustomEvent<ConsentValue>(EVENT_NAME, { detail: value }))
  } catch {
    // ignorar (Safari privado, etc.)
  }
}

export function onConsentChange(handler: (value: ConsentValue) => void): () => void {
  if (typeof window === 'undefined') return () => {}
  const listener = (e: Event) => {
    const value = (e as CustomEvent<ConsentValue>).detail
    if (value === 'accepted' || value === 'rejected') handler(value)
  }
  window.addEventListener(EVENT_NAME, listener)
  return () => window.removeEventListener(EVENT_NAME, listener)
}
