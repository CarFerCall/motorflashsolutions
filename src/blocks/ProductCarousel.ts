import type { Block } from 'payload'

const productSlugs = [
  'dealer', 'exportaciones', 'crm4you', 'contact-center', 'spyne',
  'motorflash-message', 'motorflash-mobile-tracking', 'ia',
  'soluciones-web', 'marketing-digital', 'portal-publicacion',
  'lead-factory', 'soluciones-fabricantes', 'motorflash-connect', 'apex',
] as const

export const ProductCarouselBlock: Block = {
  slug: 'productCarousel',
  labels: { singular: 'Carrusel de productos', plural: 'Carruseles de productos' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Etiqueta superior' },
    { name: 'title', type: 'text', label: 'Título de la sección' },
    { name: 'description', type: 'textarea', label: 'Descripción' },
    {
      name: 'productSlugs',
      type: 'select',
      hasMany: true,
      required: true,
      label: 'Productos a mostrar',
      options: productSlugs.map((s) => ({ value: s, label: s })),
      admin: { description: 'Elige los productos del catálogo que quieres mostrar en el carrusel.' },
    },
  ],
}
