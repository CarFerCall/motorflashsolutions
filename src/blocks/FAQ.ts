import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'Bloques de FAQ' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Etiqueta superior' },
    { name: 'title', type: 'text', label: 'Título de la sección' },
    {
      name: 'items',
      type: 'array',
      label: 'Preguntas',
      labels: { singular: 'Pregunta', plural: 'Preguntas' },
      minRows: 1,
      admin: { initCollapsed: false },
      fields: [
        { name: 'question', type: 'text', required: true, label: 'Pregunta' },
        { name: 'answer', type: 'textarea', required: true, label: 'Respuesta' },
      ],
    },
  ],
}
