import type { Block } from 'payload'

export const ImageTextBlock: Block = {
  slug: 'imageText',
  labels: { singular: 'Imagen + texto', plural: 'Bloques imagen + texto' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Etiqueta superior' },
    { name: 'title', type: 'text', required: true, label: 'Título' },
    { name: 'description', type: 'textarea', label: 'Descripción / texto' },
    {
      type: 'row',
      fields: [
        {
          name: 'imageUrl',
          type: 'text',
          label: 'URL imagen',
          admin: { width: '70%', description: 'Ruta a la imagen (de /public, p. ej. /images/foo.png) o URL externa.' },
        },
        {
          name: 'imageSide',
          type: 'select',
          defaultValue: 'right',
          label: 'Imagen a la',
          options: [
            { value: 'left', label: 'Izquierda' },
            { value: 'right', label: 'Derecha' },
          ],
          admin: { width: '30%' },
        },
      ],
    },
    { name: 'imageAlt', type: 'text', label: 'Texto alternativo (alt)' },
    {
      name: 'cta',
      type: 'group',
      label: 'Botón opcional',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Texto', admin: { width: '50%' } },
            { name: 'url', type: 'text', label: 'URL', admin: { width: '50%' } },
          ],
        },
      ],
    },
  ],
}
