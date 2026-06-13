/**
 * Cálculo del configurador multi-producto en /precios.
 *
 * La misma fórmula se aplica en el cliente (resumen en vivo) y en el
 * server action (recálculo para no fiarnos del cliente al enviar la
 * cotización).
 *
 * Por cada producto seleccionado se suma:
 *  - basePriceCents (cuota fija mensual).
 *  - Items configurables: number (qty × unitPrice), select (precio
 *    de la opción), checkbox (unitPrice si está marcado).
 */
import type { NormalizedItem } from './pricing'

export type SelectionMap = Record<string, Record<string, string>>

export interface ProductLineBreakdown {
  baseCents: number
  itemsCents: number
  itemsDetail: Array<{ label: string; valueLabel: string; cents: number }>
  totalCents: number
  // Setup (pago único, no entra en el total mensual).
  setupCents: number
  setupDetail: Array<{ label: string; valueLabel: string; cents: number }>
}

export function computeProductLine(
  basePriceCents: number,
  items: NormalizedItem[],
  selections: Record<string, string> | undefined,
): ProductLineBreakdown {
  let itemsCents = 0
  let setupCents = 0
  const itemsDetail: ProductLineBreakdown['itemsDetail'] = []
  const setupDetail: ProductLineBreakdown['setupDetail'] = []
  const sel = selections ?? {}

  for (const item of items) {
    const raw = sel[item.itemKey]
    if (item.type === 'number') {
      const qty = clamp(Number(raw ?? item.default) || 0, item.min, item.max)
      if (qty > 0 && item.unitPriceCents > 0) {
        const cents = qty * item.unitPriceCents
        itemsCents += cents
        const unitSuffix = item.unit ? ` × ${item.unit}${qty === 1 ? '' : 's'}` : ''
        itemsDetail.push({ label: item.label, valueLabel: `${qty}${unitSuffix}`, cents })
      }
    } else if (item.type === 'select') {
      const fallback = item.options.find((o) => o.isDefault) ?? item.options[0]
      const opt = item.options.find((o) => o.value === raw) ?? fallback
      if (opt) {
        if (opt.priceCents > 0) {
          itemsCents += opt.priceCents
          itemsDetail.push({ label: item.label, valueLabel: opt.label, cents: opt.priceCents })
        }
        if (opt.setupCents > 0) {
          setupCents += opt.setupCents
          setupDetail.push({ label: `${item.label}: ${opt.label}`, valueLabel: 'set up', cents: opt.setupCents })
        }
      }
    } else {
      const isChecked = raw == null ? item.defaultChecked : raw === '1' || raw === 'true' || raw === 'on'
      if (isChecked && item.unitPriceCents > 0) {
        itemsCents += item.unitPriceCents
        itemsDetail.push({ label: item.label, valueLabel: '✓', cents: item.unitPriceCents })
      }
    }
  }

  return {
    baseCents: basePriceCents,
    itemsCents,
    itemsDetail,
    totalCents: basePriceCents + itemsCents,
    setupCents,
    setupDetail,
  }
}

export function buildDefaultSelections(items: NormalizedItem[]): Record<string, string> {
  const out: Record<string, string> = {}
  for (const item of items) {
    if (item.type === 'number') {
      out[item.itemKey] = String(item.default)
    } else if (item.type === 'select') {
      const def = item.options.find((o) => o.isDefault) ?? item.options[0]
      if (def) out[item.itemKey] = def.value
    } else {
      out[item.itemKey] = item.defaultChecked ? '1' : '0'
    }
  }
  return out
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.trunc(n)))
}
