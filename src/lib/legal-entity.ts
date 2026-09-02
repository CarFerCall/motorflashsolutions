/**
 * Datos identificativos del titular del sitio, tal y como los exige
 * la LSSI-CE art. 10 y el RGPD para los avisos legales, política de
 * privacidad y política de cookies. Centralizados aquí para evitar
 * duplicación entre `/aviso-legal`, `/privacidad` y `/politica-cookies`.
 */
export const LEGAL_ENTITY = {
  name: 'Motorflash Ibérica de Negocios, S.L.',
  cif: 'B85007953',
  addressLine: 'Calle Basauri, 17',
  postalCode: '28023',
  city: 'Madrid',
  country: 'España',
  contactEmail: 'rgpd@motorflash.com',
  websiteUrl: 'https://motorflashsolutions.vercel.app',
} as const

/** Formato "Calle Basauri, 17 · 28023 Madrid (España)". */
export function formattedAddress(): string {
  const { addressLine, postalCode, city, country } = LEGAL_ENTITY
  return `${addressLine} · ${postalCode} ${city} (${country})`
}
