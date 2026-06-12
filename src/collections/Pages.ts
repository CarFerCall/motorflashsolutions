import type { CollectionConfig } from 'payload'
import { ALL_BLOCKS } from '../blocks'

/**
 * Páginas creadas desde el admin con el page builder. Cada página tiene
 * un slug único (la URL pública será /<slug>) y un array de bloques que
 * se renderiza en orden. Los bloques se reordenan arrastrándolos.
 */
export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Página', plural: 'Páginas' },
  admin: {
    useAsTitle: 'title',
    description: 'Crea landings y otras páginas con bloques arrastrables. Pulsa "Live Preview" arriba a la derecha para verlo en directo mientras editas. URL pública: /<slug>.',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    listSearchableFields: ['title', 'slug'],
    group: 'Contenido',
    livePreview: {
      url: ({ data }) => {
        const base =
          process.env.NEXT_PUBLIC_SERVER_URL ||
          (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
          'http://localhost:3100'
        const slug = (data as any)?.slug
        if (!slug) return base
        return `${base}/${slug}?livePreview=true`
      },
      breakpoints: [
        { name: 'mobile', label: 'Móvil', width: 375, height: 667 },
        { name: 'tablet', label: 'Tablet', width: 768, height: 1024 },
        { name: 'desktop', label: 'Desktop', width: 1440, height: 900 },
      ],
    },
  },
  access: {
    read: ({ req }) => {
      // El público solo ve páginas publicadas. Logueados ven todo.
      if (req.user) return true
      return { status: { equals: 'published' } }
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Título', admin: { width: '60%' } },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          label: 'Slug (URL)',
          admin: {
            width: '40%',
            description: 'Sin barras, en minúsculas. La URL final será /<slug>.',
          },
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      label: 'Estado',
      options: [
        { value: 'draft', label: 'Borrador (no visible)' },
        { value: 'published', label: 'Publicada' },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Bloques de la página',
      labels: { singular: 'Bloque', plural: 'Bloques' },
      admin: {
        description: 'Arrastra para reordenar. Cada bloque se renderiza uno tras otro en la página pública.',
      },
      blocks: ALL_BLOCKS,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: { description: 'Opcional. Si lo dejas vacío se usa el título de la página.' },
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta title' },
        { name: 'metaDescription', type: 'textarea', label: 'Meta description' },
      ],
    },
  ],
}
