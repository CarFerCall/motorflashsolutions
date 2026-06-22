import type { CollectionConfig } from 'payload'

/**
 * Activos visuales subidos desde el admin: logos de cliente,
 * imágenes hero de producto, fotos de equipo, etc. Reemplaza
 * progresivamente las URLs hard-codeadas en `/public/images/...`.
 *
 * Los uploads viven en disco bajo `public/uploads/` (default de
 * Payload). Cada doc se referencia por id desde colecciones que
 * lo necesiten (Products.heroImage, SuccessCases.logo, …).
 */
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Imagen', plural: 'Imágenes' },
  admin: {
    useAsTitle: 'alt',
    description: 'Imágenes que se usan en productos, casos de éxito y páginas. Sube en alta resolución; las miniaturas se generan automáticamente.',
    group: 'Contenido',
    listSearchableFields: ['alt', 'filename'],
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'public/uploads',
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 400, position: 'centre' },
      { name: 'medium', width: 1024, height: undefined, position: 'centre' },
      { name: 'hero', width: 1920, height: undefined, position: 'centre' },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texto alternativo',
      admin: { description: 'Describe la imagen para accesibilidad y SEO. Ej. "Logotipo Jarmauto" o "Equipo Motorflash 2026".' },
    },
  ],
}
