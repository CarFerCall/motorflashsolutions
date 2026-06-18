import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

/**
 * Middleware de next-intl: detecta el idioma del visitante (cookie,
 * Accept-Language) y enruta a `/`, `/en/...` o `/zh/...`.
 *
 * El `matcher` excluye explícitamente:
 *  - `/admin` y sub-rutas (panel Payload).
 *  - `/api`, `/_next`, archivos estáticos.
 *  - `/icon.svg`, `/manifest.webmanifest`, `/robots.txt`, `/sitemap.xml`.
 */
export default createMiddleware(routing)

export const config = {
  matcher: [
    // Excluimos rutas internas, admin y la mayoría de archivos
    // estáticos. Cualquier otra ruta pasa por el middleware de i18n.
    '/((?!admin|api|_next|_vercel|.*\\..*).*)',
  ],
}
