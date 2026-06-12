import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonios', plural: 'Bloques de testimonios' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Etiqueta superior' },
    { name: 'title', type: 'text', label: 'Título de la sección' },
    {
      name: 'items',
      type: 'array',
      label: 'Testimonios',
      labels: { singular: 'Testimonio', plural: 'Testimonios' },
      minRows: 1,
      admin: { initCollapsed: false },
      fields: [
        { name: 'quote', type: 'textarea', required: true, label: 'Cita' },
        {
          type: 'row',
          fields: [
            { name: 'author', type: 'text', required: true, label: 'Autor', admin: { width: '50%' } },
            { name: 'role', type: 'text', label: 'Cargo y empresa', admin: { width: '50%', placeholder: 'Director · Concesionarios X' } },
          ],
        },
      ],
    },
  ],
}
