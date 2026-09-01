'use client'

/**
 * Botón que borra el consentimiento guardado y recarga la página para
 * que el banner de `CookieConsent` vuelva a aparecer. Se usa desde la
 * página de política de cookies y (opcionalmente) desde el footer.
 */
export function CookieConsentResetButton({ label }: { label: string }) {
  const reset = () => {
    try {
      window.localStorage.removeItem('mf-cookie-consent')
    } catch {
      // ignorar (Safari privado, etc.)
    }
    window.location.reload()
  }

  return (
    <button
      type="button"
      onClick={reset}
      className="inline-flex items-center justify-center rounded-full border border-outline-variant text-sm font-semibold text-on-surface px-5 py-2.5 hover:bg-surface-container transition-colors"
    >
      {label}
    </button>
  )
}
