import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero (cabecera)', plural: 'Heroes' },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'eyebrow', type: 'text', label: 'Etiqueta superior', admin: { width: '60%', placeholder: 'p. ej. Soluciones automoción' } },
        { name: 'icon', type: 'text', label: 'Icono (Material Symbols)', admin: { width: '40%', placeholder: 'auto_awesome' } },
      ],
    },
    { name: 'title', type: 'text', required: true, label: 'Título principal' },
    { name: 'subtitle', type: 'textarea', label: 'Subtítulo / descripción' },
    {
      name: 'ctas',
      type: 'array',
      label: 'Botones (CTAs)',
      labels: { singular: 'Botón', plural: 'Botones' },
      maxRows: 2,
      admin: { description: 'Hasta 2 botones. El primero será naranja, el segundo blanco.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', required: true, label: 'Texto', admin: { width: '40%' } },
            { name: 'url', type: 'text', required: true, label: 'URL', admin: { width: '40%' } },
            {
              name: 'variant',
              type: 'select',
              defaultValue: 'primary',
              options: [
                { value: 'primary', label: 'Naranja (primario)' },
                { value: 'secondary', label: 'Blanco (secundario)' },
              ],
              admin: { width: '20%' },
            },
          ],
        },
      ],
    },
  ],
}
