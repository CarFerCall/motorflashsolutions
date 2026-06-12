import type { CollectionConfig } from 'payload'

/**
 * Páginas creadas desde el admin con el editor visual Puck.
 * URL pública: /<slug>. La estructura entera de la página se persiste
 * en el campo `puckData` (JSON Puck) y el editor visual se renderiza
 * en su lugar mediante un componente custom (admin/components/PuckField).
 */
export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Página', plural: 'Páginas' },
  admin: {
    useAsTitle: 'title',
    description:
      'Crea landings con el editor visual: arrastra componentes desde la paleta de la izquierda, configúralos en el panel de la derecha. URL pública: /<slug>.',
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
      name: 'puckData',
      type: 'json',
      label: 'Estructura de la página (editor visual)',
      admin: {
        components: {
          Field: '/admin/components/PuckField#default',
        },
      },
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
