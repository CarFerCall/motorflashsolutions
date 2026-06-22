import type { Block, CollectionConfig } from 'payload'

/**
 * Contenido rico de cada ficha de producto: subtítulo + array de
 * secciones que se renderizan secuencialmente en la página de
 * `/servicios/{slug}`. Cada sección es uno de cuatro tipos
 * (features, highlights, process, cta) y sus textos están
 * localizados.
 *
 * Relación 1:1 con Products vía el field `product` (relationship).
 * El wrapper en `src/catalog/product-content.ts` cae al contenido
 * estático original si la BD no tiene el slug.
 */

const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Funcionalidades (features)', plural: 'Bloques features' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
    { name: 'lead', type: 'textarea', required: true, localized: true, label: 'Subtítulo' },
    {
      name: 'items',
      type: 'array',
      required: true,
      label: 'Funcionalidades',
      minRows: 1,
      labels: { singular: 'Funcionalidad', plural: 'Funcionalidades' },
      fields: [
        { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols', admin: { description: 'Ej. analytics, hub, sync_alt.' } },
        { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
        { name: 'description', type: 'textarea', required: true, localized: true, label: 'Descripción' },
      ],
    },
  ],
}

const HighlightsBlock: Block = {
  slug: 'highlights',
  labels: { singular: 'Destacados (highlights)', plural: 'Bloques highlights' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
    { name: 'lead', type: 'textarea', required: true, localized: true, label: 'Subtítulo' },
    {
      name: 'highlights',
      type: 'array',
      required: true,
      label: 'Highlights (cifras / claims cortos)',
      minRows: 1,
      labels: { singular: 'Highlight', plural: 'Highlights' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true, label: 'Título (cifra o claim)' },
        { name: 'description', type: 'text', required: true, localized: true, label: 'Descripción corta' },
      ],
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets (opcional)',
      labels: { singular: 'Bullet', plural: 'Bullets' },
      fields: [{ name: 'text', type: 'text', required: true, localized: true, label: 'Texto' }],
    },
  ],
}

const ProcessBlock: Block = {
  slug: 'process',
  labels: { singular: 'Proceso (process)', plural: 'Bloques process' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
    {
      name: 'steps',
      type: 'array',
      required: true,
      label: 'Pasos',
      minRows: 1,
      labels: { singular: 'Paso', plural: 'Pasos' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true, label: 'Título del paso' },
        { name: 'description', type: 'textarea', required: true, localized: true, label: 'Descripción' },
      ],
    },
  ],
}

const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA final', plural: 'Bloques CTA' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
    { name: 'lead', type: 'textarea', required: true, localized: true, label: 'Subtítulo' },
  ],
}

export const ProductContent: CollectionConfig = {
  slug: 'product-content',
  labels: { singular: 'Contenido de ficha', plural: 'Contenidos de ficha' },
  admin: {
    useAsTitle: 'product',
    description: 'Secciones internas (highlights, features, process, CTA) de cada ficha de producto. Una entrada por producto. Edita el contenido por idioma usando la pestaña superior del admin.',
    group: 'Catálogo',
    defaultColumns: ['product', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
      hasMany: false,
      unique: true,
      label: 'Producto',
      admin: { description: 'Elige el producto al que pertenece este contenido. Solo puede haber una entrada por producto.' },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      label: 'Subtítulo del hero',
      admin: { description: 'Texto opcional que aparece bajo el título y sobre la intro.' },
    },
    {
      name: 'sections',
      type: 'blocks',
      label: 'Secciones de la ficha',
      labels: { singular: 'Sección', plural: 'Secciones' },
      blocks: [FeaturesBlock, HighlightsBlock, ProcessBlock, CtaBlock],
      admin: { description: 'Añade secciones en el orden en que las quieras mostrar. Tipos: Funcionalidades, Destacados, Proceso y CTA final.' },
    },
  ],
}
