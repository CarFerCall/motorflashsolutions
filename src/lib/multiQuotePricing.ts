/**
 * Cálculo del precio del configurador multi-producto en /precios.
 *
 * Misma fórmula la usan el cliente (para el resumen en vivo) y el server
 * action (para recalcular y no fiarse del cliente al enviar la cotización).
 *
 * Reglas:
 *  - Cada licencia adicional añade el 40% del precio base por producto.
 *  - Descuento por volumen sobre el subtotal: 10+ → 5%, 20+ → 10%, 40+ → 15%.
 */

export function computeLineCents(baseCents: number, licences: number): number {
  const extra = Math.max(0, licences - 1)
  return Math.round(baseCents + extra * baseCents * 0.4)
}

export function volumeDiscountRate(licences: number): number {
  if (licences >= 40) return 0.15
  if (licences >= 20) return 0.1
  if (licences >= 10) return 0.05
  return 0
}
