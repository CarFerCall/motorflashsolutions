'use client'

import type { DefaultServerCellComponentProps } from 'payload'

const LABELS: Record<string, string> = {
  new: 'Nueva',
  contacted: 'Contactado',
  quoted: 'Presupuesto enviado',
  won: 'Ganada',
  lost: 'Perdida',
}
const COLORS: Record<string, { bg: string; fg: string }> = {
  new: { bg: '#fff5e6', fg: '#ff8000' },
  contacted: { bg: '#eff6ff', fg: '#2563eb' },
  quoted: { bg: '#f5f3ff', fg: '#7c3aed' },
  won: { bg: '#f0fdf4', fg: '#16a34a' },
  lost: { bg: '#f3f4f6', fg: '#6b7280' },
}

export default function StatusCell({ cellData }: DefaultServerCellComponentProps) {
  const s = typeof cellData === 'string' ? cellData : 'new'
  const c = COLORS[s] ?? COLORS.new
  return (
    <span
      style={{
        background: c.bg,
        color: c.fg,
        padding: '4px 10px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        whiteSpace: 'nowrap',
      }}
    >
      {LABELS[s] ?? s}
    </span>
  )
}
