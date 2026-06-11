'use client'

import type { DefaultServerCellComponentProps } from 'payload'

/**
 * Celda de listado que muestra los céntimos del row como € formateados.
 * Se usa en defaultColumns de las collections para que el admin no vea "19900"
 * sino "199,00 €".
 */
export default function PriceCell({ cellData, rowData }: DefaultServerCellComponentProps) {
  const cents = typeof cellData === 'number' ? cellData : 0
  const currency: string = (rowData as any)?.currency ?? 'EUR'
  const formatted = `${(cents / 100).toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${currency === 'EUR' ? '€' : currency}`
  return <span style={{ fontWeight: 600 }}>{formatted}</span>
}
