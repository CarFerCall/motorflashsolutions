import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

/**
 * Carga los mensajes JSON del idioma activo. Si la URL no contiene
 * un locale válido, se cae al idioma por defecto (es).
 *
 * Los mensajes están en `messages/{locale}.json` (raíz del proyecto).
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
