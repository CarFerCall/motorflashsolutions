'use client'

import { useField } from '@payloadcms/ui'

/**
 * Botón "Ver configurador público" que aparece en el formulario de edición de
 * un plan. Abre /precios/{productSlug} en una pestaña nueva.
 */
export default function PlanPreviewLink() {
  const { value: slug } = useField<string>({ path: 'productSlug' })

  if (!slug) return null

  const href = `/precios/${slug}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 18px',
        background: '#fff5e6',
        border: '1px solid rgba(255, 128, 0, 0.3)',
        color: '#d96f00',
        borderRadius: 999,
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: 13,
        marginBottom: 24,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ff8000'
        e.currentTarget.style.color = '#fff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#fff5e6'
        e.currentTarget.style.color = '#d96f00'
      }}
    >
      <span>🔗</span>
      Ver configurador público en <code style={{ background: 'transparent' }}>{href}</code>
    </a>
  )
}
