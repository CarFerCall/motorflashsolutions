/**
 * URL canónica del sitio. Prioridad:
 *   1. `NEXT_PUBLIC_SITE_URL` — la fija el equipo cuando exista dominio prod definitivo.
 *   2. `VERCEL_PROJECT_PRODUCTION_URL` — el dominio prod que Vercel asocia al proyecto.
 *   3. `VERCEL_URL` — la URL preview del deploy actual.
 *   4. `http://localhost:3100` — dev.
 *
 * Las URLs vienen sin protocolo desde Vercel, las normalizamos a https.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '')
  }
  return 'http://localhost:3100'
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl()
  if (!path) return base
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}
