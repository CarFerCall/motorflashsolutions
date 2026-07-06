import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from './i18n/routing'

/**
 * Middleware combinado:
 *
 *  1. SEGURIDAD POR DEPLOY (Nivel 1 de separación admin/front).
 *     - Si la env `IS_ADMIN_DEPLOY === '1'` → este deploy es el admin:
 *       · Permite todo `/admin/*` y `/api/*` (rutas de Payload).
 *       · Redirige cualquier otra ruta a `/admin/login`. Así el dominio
 *         admin solo sirve el panel, nunca el front público.
 *     - Si NO está esa env → este deploy es el público:
 *       · Devuelve 404 en `/admin/*` y `/api/*` para que un atacante no
 *         pueda enumerar el panel ni la API REST del CMS desde el
 *         dominio público.
 *       · El resto pasa por el middleware de i18n (next-intl) como antes.
 *
 *  2. i18n (next-intl) — detecta locale y enruta `/`, `/ca/...`,
 *     `/en/...`, `/zh/...`.
 *
 * El matcher tiene que dejar pasar `/admin` y `/api` aquí (antes los
 * excluía) para que la lógica de bloqueo se aplique. Las rutas internas
 * de Next (`_next`, archivos estáticos) se siguen excluyendo.
 */

const IS_ADMIN_DEPLOY = process.env.IS_ADMIN_DEPLOY === '1'

const intlMiddleware = createMiddleware(routing)

// Rutas reservadas para el admin / Payload.
function isAdminOrApi(pathname: string): boolean {
  return pathname.startsWith('/admin') || pathname === '/api' || pathname.startsWith('/api/')
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (IS_ADMIN_DEPLOY) {
    // Deploy admin: solo /admin y /api son útiles. Cualquier visita al
    // front público se redirige al login. Esto evita exponer dos copias
    // de la web (público + admin) bajo el mismo dominio.
    if (!isAdminOrApi(pathname)) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl, 307)
    }
    // /admin y /api se sirven con su handler nativo (sin tocar).
    return NextResponse.next()
  }

  // Deploy público: /admin y /api pasan al handler nativo (sin
  // bloqueo). El bloqueo se reactivará cuando el proyecto admin
  // separado esté listo y verificado.
  if (isAdminOrApi(pathname)) {
    return NextResponse.next()
  }

  // Chino oculto temporalmente: /zh y /zh/* redirigen al español.
  // Se mantiene el locale en next-intl para poder reactivarlo sin migrar.
  if (pathname === '/zh' || pathname.startsWith('/zh/')) {
    const rest = pathname.slice(3) || '/'
    return NextResponse.redirect(new URL(rest, request.url), 307)
  }

  // Resto: pasa por el middleware de i18n.
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Capturamos TODO salvo internals de Next y archivos estáticos.
    // /admin y /api SÍ entran al middleware (la lógica de arriba decide
    // qué hacer con ellos según el tipo de deploy).
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
