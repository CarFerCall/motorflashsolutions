/**
 * Helpers para leer la configuración de cada PricingItem.
 *
 * Antes había un campo `config` (JSON) y desde el admin había que escribir
 * a mano `{"min":1,"max":50,"unit":"licencia"}` etc. — terrible para alguien
 * no técnico. Ahora cada tipo tiene sus propios campos (numberMin/numberMax/…,
 * selectOptions, checkboxDefault) y este módulo presenta una interfaz uniforme
 * para que tanto el frontend (PricingConfigurator) como la Server Action
 * (submitQuote) consuman el plan sin saber del cambio.
 */

export interface RawPricingItem {
  itemKey: string
  label: string
  helpText?: string | null
  type: 'number' | 'select' | 'checkbox'
  unitPriceCents: number
  required: boolean

  // Numérico
  numberMin?: number | null
  numberMax?: number | null
  numberDefault?: number | null
  numberUnit?: string | null

  // Desplegable
  selectOptions?: Array<{
    value: string
    label: string
    priceCents: number
    isDefault?: boolean
  }> | null

  // Casilla
  checkboxDefault?: boolean | null
}

export interface NormalizedNumberItem {
  type: 'number'
  itemKey: string
  label: string
  helpText: string | null
  required: boolean
  unitPriceCents: number
  min: number
  max: number
  default: number
  unit: string
}

export interface NormalizedSelectItem {
  type: 'select'
  itemKey: string
  label: string
  helpText: string | null
  required: boolean
  options: Array<{ value: string; label: string; priceCents: number; isDefault: boolean }>
}

export interface NormalizedCheckboxItem {
  type: 'checkbox'
  itemKey: string
  label: string
  helpText: string | null
  required: boolean
  unitPriceCents: number
  defaultChecked: boolean
}

export type NormalizedItem = NormalizedNumberItem | NormalizedSelectItem | NormalizedCheckboxItem

export function normalizeItem(raw: RawPricingItem): NormalizedItem {
  const common = {
    itemKey: raw.itemKey,
    label: raw.label,
    helpText: raw.helpText ?? null,
    required: !!raw.required,
  }
  if (raw.type === 'number') {
    return {
      ...common,
      type: 'number',
      unitPriceCents: raw.unitPriceCents ?? 0,
      min: Math.max(0, Math.trunc(Number(raw.numberMin ?? 0))),
      max: Math.max(0, Math.trunc(Number(raw.numberMax ?? 9999))),
      default: Math.max(0, Math.trunc(Number(raw.numberDefault ?? 0))),
      unit: (raw.numberUnit ?? '').trim(),
    }
  }
  if (raw.type === 'select') {
    return {
      ...common,
      type: 'select',
      options: (raw.selectOptions ?? []).map((o) => ({
        value: String(o.value),
        label: o.label ?? String(o.value),
        priceCents: Number(o.priceCents ?? 0),
        isDefault: !!o.isDefault,
      })),
    }
  }
  return {
    ...common,
    type: 'checkbox',
    unitPriceCents: raw.unitPriceCents ?? 0,
    defaultChecked: !!raw.checkboxDefault,
  }
}

export const fmtMoney = (cents: number, currency = 'EUR') =>
  `${(cents / 100).toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${currency === 'EUR' ? '€' : currency}`
