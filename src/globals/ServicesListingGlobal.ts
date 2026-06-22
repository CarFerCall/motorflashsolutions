import type { GlobalConfig } from 'payload'

/**
 * Textos de la página /servicios (listado del catálogo). El catálogo
 * de productos en sí vive en `src/catalog/products.ts` (y la colección
 * Products); aquí sólo se editan los copies del hero y las etiquetas
 * comunes de las tarjetas (CTA "Ver" y chip "Próximamente").
 */
export const ServicesListingGlobal: GlobalConfig = {
  slug: 'services-listing-page',
  label: 'Página · Servicios (listado)',
  admin: {
    description:
      'Copy editorial de /servicios: hero del listado y etiquetas comunes de las tarjetas. El catálogo de productos se gestiona en la colección Products.',
    group: 'Páginas',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'SEO',
          fields: [
            { name: 'metaTitle', type: 'text', required: true, localized: true, label: 'Título (meta)' },
            { name: 'metaDescription', type: 'textarea', required: true, localized: true, label: 'Descripción (meta)' },
            { name: 'metaOg', type: 'textarea', required: true, localized: true, label: 'Descripción OG' },
          ],
        },
        {
          label: 'Hero',
          fields: [
            { name: 'eyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'lead', type: 'textarea', required: true, localized: true, label: 'Lead' },
          ],
        },
        {
          label: 'Tarjetas',
          fields: [
            { name: 'viewProduct', type: 'text', required: true, localized: true, label: 'CTA "Ver"' },
            { name: 'comingSoon', type: 'text', required: true, localized: true, label: 'Chip "Próximamente"' },
          ],
        },
      ],
    },
  ],
}
