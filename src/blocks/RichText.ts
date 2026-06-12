import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const RichTextBlock: Block = {
  slug: 'richText',
  labels: { singular: 'Texto enriquecido', plural: 'Bloques de texto' },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Contenido',
      editor: lexicalEditor(),
    },
    {
      type: 'row',
      fields: [
        {
          name: 'width',
          type: 'select',
          defaultValue: 'narrow',
          label: 'Ancho',
          options: [
            { value: 'narrow', label: 'Estrecho (lectura)' },
            { value: 'wide', label: 'Ancho completo' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'alignment',
          type: 'select',
          defaultValue: 'left',
          label: 'Alineación',
          options: [
            { value: 'left', label: 'Izquierda' },
            { value: 'center', label: 'Centrado' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
