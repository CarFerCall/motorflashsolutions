'use client'

import { useField, FieldLabel, FieldDescription } from '@payloadcms/ui'
import type { NumberFieldClientProps } from 'payload'

const fmt = (cents: number) =>
  `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`

/**
 * Input numérico para campos de precio en céntimos. Muestra un preview en € a
 * la derecha que se actualiza en vivo conforme escribes — para que nadie tenga
 * que contar ceros mentalmente.
 */
export default function PriceInput(props: NumberFieldClientProps) {
  const { path, field } = props
  const { value, setValue, errorMessage, showError } = useField<number>({ path })

  return (
    <div className={`field-type number ${showError ? 'error' : ''}`}>
      {field.label !== false && <FieldLabel label={field.label} required={field.required} path={path} />}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input
          type="number"
          inputMode="numeric"
          step={1}
          min={(field as any).min}
          max={(field as any).max}
          value={value ?? 0}
          onChange={(e) => {
            const next = e.target.value === '' ? 0 : parseInt(e.target.value, 10)
            setValue(Number.isFinite(next) ? next : 0)
          }}
          className="number-field__input"
          style={{ flex: '1 1 auto', maxWidth: 240 }}
        />
        <span
          style={{
            background: '#fff5e6',
            border: '1px solid rgba(255, 128, 0, 0.25)',
            color: '#d96f00',
            padding: '8px 14px',
            borderRadius: 8,
            fontWeight: 700,
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: 15,
            whiteSpace: 'nowrap',
            minWidth: 120,
            textAlign: 'center',
          }}
          aria-live="polite"
        >
          = {fmt(Number(value ?? 0))}
        </span>
      </div>

      <FieldDescription description={field.admin?.description} path={path} />
      {showError && <div className="field-error">{errorMessage}</div>}
    </div>
  )
}
