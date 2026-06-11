'use client'

import { useField } from '@payloadcms/ui'

interface Line {
  key?: string
  label?: string
  type?: string
  value?: string
  lineCents?: number
}

const fmt = (cents: number) =>
  `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`

/**
 * Renderiza el JSON snapshot de items seleccionados de una cotización como
 * una tabla legible para el comercial. Antes se veía como un blob JSON.
 */
export default function SelectedItemsField({ path }: { path: string }) {
  const { value } = useField<Line[]>({ path })
  const lines = Array.isArray(value) ? value : []
  const total = lines.reduce((acc, l) => acc + (l.lineCents ?? 0), 0)

  if (lines.length === 0) {
    return (
      <div className="field-type">
        <label className="field-label">Configuración del cliente</label>
        <p style={{ color: '#454747', fontStyle: 'italic', margin: 0 }}>(sin items)</p>
      </div>
    )
  }

  return (
    <div className="field-type">
      <label className="field-label">Configuración del cliente</label>
      <div
        style={{
          border: '1px solid #e2e2e2',
          borderRadius: 10,
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#fff5e6', borderBottom: '1px solid #ffd9b3' }}>
              <th style={th}>Item</th>
              <th style={{ ...th }}>Valor</th>
              <th style={{ ...th, textAlign: 'right' }}>Importe</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((l, i) => {
              const isBase = l.key === '_base'
              return (
                <tr key={`${l.key ?? i}`} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={td}>
                    <strong>{l.label}</strong>
                    {l.type && !isBase && (
                      <span
                        style={{
                          marginLeft: 8,
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: '#9ca3af',
                          fontWeight: 700,
                        }}
                      >
                        {l.type}
                      </span>
                    )}
                  </td>
                  <td style={{ ...td, color: '#454747' }}>{l.value || '—'}</td>
                  <td style={{ ...td, textAlign: 'right', fontWeight: 600 }}>{fmt(l.lineCents ?? 0)}</td>
                </tr>
              )
            })}
            <tr style={{ background: '#fff5e6', borderTop: '2px solid #ff8000' }}>
              <td style={{ ...td, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 12 }} colSpan={2}>
                Total estimado
              </td>
              <td style={{ ...td, textAlign: 'right', color: '#ff8000', fontWeight: 700, fontSize: 18 }}>{fmt(total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>
        Snapshot de los items que el cliente seleccionó al enviar el formulario.
        Para ver los items configurables originales abre el plan correspondiente.
      </p>
    </div>
  )
}

const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '10px 14px',
  fontSize: 11,
  fontWeight: 700,
  color: '#ff8000',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
}
const td: React.CSSProperties = { padding: '12px 14px', verticalAlign: 'middle' }
