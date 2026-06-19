import { defineRouting } from 'next-intl/routing'

/**
 * Configuración multilingüe de la web pública.
 * - Español: idioma por defecto, URLs SIN prefijo (`/`, `/servicios/...`).
 * - Catalán: con prefijo (`/ca`, `/ca/servicios/...`).
 * - Inglés: con prefijo (`/en`, `/en/servicios/...`).
 * - Chino simplificado: con prefijo (`/zh`, `/zh/servicios/...`).
 *
 * El panel de admin (`/admin`) y la API (`/api/*`) NO entran en este
 * sistema (los gestiona Payload directamente y el middleware los
 * excluye explícitamente).
 */
export const routing = defineRouting({
  locales: ['es', 'ca', 'en', 'zh'] as const,
  defaultLocale: 'es',
  // `as-needed`: el idioma por defecto (español) no lleva prefijo
  // en la URL. Los demás llevan su prefijo. Mantiene las URLs
  // existentes en español sin redirects ni cambios de SEO.
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
