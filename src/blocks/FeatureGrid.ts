import type { Block } from 'payload'

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  labels: { singular: 'Grid de features', plural: 'Grids de features' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Etiqueta superior' },
    { name: 'title', type: 'text', label: 'Título de la sección' },
    { name: 'description', type: 'textarea', label: 'Descripción' },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      label: 'Columnas en desktop',
      options: [
        { value: '2', label: '2 columnas' },
        { value: '3', label: '3 columnas' },
        { value: '4', label: '4 columnas' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      labels: { singular: 'Feature', plural: 'Features' },
      minRows: 1,
      admin: { initCollapsed: false },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'icon', type: 'text', label: 'Icono (Material Symbols)', admin: { width: '30%', placeholder: 'bolt' } },
            { name: 'title', type: 'text', required: true, label: 'Título', admin: { width: '70%' } },
          ],
        },
        { name: 'description', type: 'textarea', label: 'Descripción' },
      ],
    },
  ],
}
