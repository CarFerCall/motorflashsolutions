/**
 * Consentimiento de cookies por categorías.
 *
 * Guardamos las preferencias en `localStorage` con la clave
 * `mf-cookie-consent`. Cuando cambian, disparamos un `CustomEvent`
 * `mf-consent-changed` para que los componentes que dependen del
 * consentimiento (widget de chat, futuros analytics, etc.) reaccionen
 * sin necesidad de un React Context global.
 *
 * Formato en storage (v2):
 *   { v: 2, prefs: { necessary: true, assistant: boolean }, ts: number }
 *
 * Migración desde v1 (string 'accepted' | 'rejected'):
 *   - 'accepted' → assistant: true
 *   - 'rejected' → assistant: false
 * La migración se aplica de forma silenciosa en la primera lectura.
 */

export type ConsentCategory = 'necessary' | 'assistant'

export interface ConsentPreferences {
  necessary: true
  assistant: boolean
}

const STORAGE_KEY = 'mf-cookie-consent'
const EVENT_NAME = 'mf-consent-changed'
const STORAGE_VERSION = 2

// Compatibilidad con la API previa (string 'accepted' | 'rejected').
// Mantenemos los alias para no romper consumidores existentes.
export type ConsentValue = 'accepted' | 'rejected'

function readRaw(): unknown {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    if (raw === 'accepted' || raw === 'rejected') return raw
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeRaw(prefs: ConsentPreferences): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: STORAGE_VERSION, prefs, ts: Date.now() }),
    )
    window.dispatchEvent(new CustomEvent<ConsentPreferences>(EVENT_NAME, { detail: prefs }))
  } catch {
    // ignorar (Safari privado, cookies deshabilitadas, etc.)
  }
}

/**
 * Devuelve las preferencias actuales. `null` si el usuario aún no ha
 * decidido (mostrar banner). Migra automáticamente desde v1.
 */
export function getPreferences(): ConsentPreferences | null {
  const raw = readRaw()
  if (raw === null) return null

  // v1 legacy
  if (raw === 'accepted') return { necessary: true, assistant: true }
  if (raw === 'rejected') return { necessary: true, assistant: false }

  // v2+
  if (typeof raw === 'object' && raw && 'prefs' in raw) {
    const prefs = (raw as { prefs?: unknown }).prefs
    if (prefs && typeof prefs === 'object' && 'assistant' in prefs) {
      const assistant = Boolean((prefs as { assistant?: unknown }).assistant)
      return { necessary: true, assistant }
    }
  }
  return null
}

export function setPreferences(prefs: ConsentPreferences): void {
  writeRaw(prefs)
}

export function clearPreferences(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignorar
  }
}

export function onPreferencesChange(
  handler: (prefs: ConsentPreferences) => void,
): () => void {
  if (typeof window === 'undefined') return () => {}
  const listener = (e: Event) => {
    const detail = (e as CustomEvent<ConsentPreferences>).detail
    if (detail && typeof detail === 'object' && 'assistant' in detail) handler(detail)
  }
  window.addEventListener(EVENT_NAME, listener)
  return () => window.removeEventListener(EVENT_NAME, listener)
}

// -- Compatibilidad hacia atrás -----------------------------------------------

/** @deprecated usa `getPreferences()` */
export function getConsent(): ConsentValue | null {
  const p = getPreferences()
  if (p === null) return null
  return p.assistant ? 'accepted' : 'rejected'
}

/** @deprecated usa `setPreferences()` */
export function setConsent(value: ConsentValue): void {
  setPreferences({ necessary: true, assistant: value === 'accepted' })
}

/** @deprecated usa `onPreferencesChange()` */
export function onConsentChange(handler: (value: ConsentValue) => void): () => void {
  return onPreferencesChange((prefs) => handler(prefs.assistant ? 'accepted' : 'rejected'))
}
