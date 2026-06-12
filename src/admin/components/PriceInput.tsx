'use client'

import { useEffect, useState } from 'react'
import { useField, FieldLabel, FieldDescription } from '@payloadcms/ui'
import type { NumberFieldClientProps } from 'payload'

/**
 * Input de precio en EUROS.
 *
 * El admin teclea directamente en euros (con decimales si quiere — acepta
 * "199" o "199,50" o "199.50"). Internamente sigue guardando céntimos
 * (Math.round(€ × 100)) para no perder precisión y para que el resto del
 * código que ya razona en céntimos siga funcionando sin cambios.
 *
 * El preview a la derecha confirma el valor formateado tal y como se
 * verá en el frontend público.
 */
export default function PriceInput(props: NumberFieldClientProps) {
  const { path, field } = props
  const { value, setValue, errorMessage, showError } = useField<number>({ path })

  const [text, setText] = useState(() => formatEurosForInput(value))

  // Si el value cambia desde fuera (carga inicial, undo, otra pestaña…),
  // sincroniza el text local salvo que lo que tenemos ya represente el
  // mismo valor (para no pelear con el cursor del usuario).
  useEffect(() => {
    const currentCents = parseToCents(text)
    const expectedCents = value ?? 0
    if (currentCents !== expectedCents) {
      setText(formatEurosForInput(value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const cents = value ?? 0

  return (
    <div className={`field-type number ${showError ? 'error' : ''}`}>
      {field.label && <FieldLabel label={field.label} required={field.required} path={path} />}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ position: 'relative', flex: '1 1 auto', maxWidth: 240 }}>
          <input
            type="text"
            inputMode="decimal"
            placeholder="0,00"
            value={text}
            onChange={(e) => {
              // Solo dígitos y un separador decimal — descartamos lo demás.
              const clean = e.target.value.replace(/[^0-9.,]/g, '')
              setText(clean)
              setValue(parseToCents(clean))
            }}
            onBlur={() => {
              // Al perder foco, normaliza visualmente (e.g. "199,5" → "199,50").
              setText(formatEurosForInput(value, { padDecimals: true }))
            }}
            className="number-field__input"
            style={{ width: '100%', paddingRight: 32 }}
          />
          <span
            aria-hidden
            style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#888',
              fontWeight: 600,
              pointerEvents: 'none',
            }}
          >
            €
          </span>
        </div>

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
          = {formatPreview(cents)}
        </span>
      </div>

      <FieldDescription description={field.admin?.description} path={path} />
      {showError && <div className="field-error">{errorMessage}</div>}
    </div>
  )
}

// ---------- helpers ----------

/** Convierte un string en céntimos. Acepta "199", "199,50" o "199.50". */
function parseToCents(raw: string): number {
  const cleaned = raw.replace(/\s/g, '').replace(',', '.')
  if (cleaned === '' || cleaned === '.') return 0
  const n = parseFloat(cleaned)
  if (!Number.isFinite(n) || n < 0) return 0
  return Math.round(n * 100)
}

/** Convierte céntimos a string apto para el input ("199" o "199,50"). */
function formatEurosForInput(cents: number | null | undefined, opts: { padDecimals?: boolean } = {}): string {
  const c = cents ?? 0
  if (c === 0 && !opts.padDecimals) return ''
  const euros = c / 100
  if (opts.padDecimals) return euros.toFixed(2).replace('.', ',')
  // Si es entero, sin decimales. Si no, mantén los dos decimales.
  return Number.isInteger(euros) ? String(euros) : euros.toFixed(2).replace(/0$/, '').replace('.', ',')
}

/** Preview en € a la derecha, siempre con 2 decimales como en el frontend. */
function formatPreview(cents: number): string {
  return `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
}
