import type { Block } from 'payload'

export const CtaBannerBlock: Block = {
  slug: 'ctaBanner',
  labels: { singular: 'CTA banner', plural: 'CTA banners' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Título' },
    { name: 'description', type: 'textarea', label: 'Descripción' },
    {
      type: 'row',
      fields: [
        { name: 'buttonLabel', type: 'text', required: true, label: 'Texto del botón', admin: { width: '50%' } },
        { name: 'buttonUrl', type: 'text', required: true, label: 'URL del botón', admin: { width: '50%' } },
      ],
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'orange',
      label: 'Estilo',
      options: [
        { value: 'orange', label: 'Naranja (destacado)' },
        { value: 'dark', label: 'Oscuro' },
        { value: 'light', label: 'Claro' },
      ],
    },
  ],
}
