import type { CollectionConfig } from 'payload'

/**
 * Catálogo de productos Motorflash. Es la fuente de verdad para
 * el nombre, eslogan, intro y orden de cada producto en el menú,
 * en el carrusel y en la home.
 *
 * Los campos no localizados (slug, icon, menuOrder, highlight,
 * placeholder, heroImage) son metadatos estructurales: mismos en
 * los 4 idiomas. Los campos visibles para el usuario (name,
 * menuLabel, tagline, heroTitle, intro) están localizados y se
 * editan por idioma desde la pestaña superior del admin.
 *
 * Para que el frontend siga funcionando incluso si la colección
 * está vacía (p. ej. en local con SQLite recién creado), el
 * wrapper `src/catalog/products.ts` cae a la versión estática
 * en `products-i18n.ts` cuando la query a Payload no devuelve
 * resultados.
 */
const PRODUCT_SLUGS = [
  'dealer',
  'exportaciones',
  'crm4you',
  'contact-center',
  'spyne',
  'motorflash-message',
  'ia',
  'soluciones-web',
  'marketing-digital',
  'portal-publicacion',
  'lead-factory',
  'soluciones-fabricantes',
  'motorflash-connect',
  'apex',
] as const

export const Products: CollectionConfig = {
  slug: 'products',
  labels: { singular: 'Producto', plural: 'Productos' },
  admin: {
    useAsTitle: 'name',
    description: 'Catálogo de productos del menú, fichas y home. Se edita un único registro por producto; el orden lo controla "menuOrder".',
    group: 'Catálogo',
    defaultColumns: ['slug', 'name', 'menuOrder', 'highlight', 'placeholder', 'updatedAt'],
    listSearchableFields: ['slug', 'name', 'tagline'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'slug',
          type: 'select',
          required: true,
          unique: true,
          label: 'Slug',
          admin: { width: '40%', description: 'Identificador único. Define la URL: /servicios/{slug}.' },
          options: PRODUCT_SLUGS.map((s) => ({ label: s, value: s })),
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Icono (Material Symbols)',
          admin: { width: '30%', description: 'Nombre del icono en Material Symbols Outlined. Ej. inventory_2, hub, dynamic_feed.' },
        },
        {
          name: 'menuOrder',
          type: 'number',
          required: true,
          defaultValue: 100,
          label: 'Orden',
          admin: { width: '30%', description: 'Posición en el menú y catálogo (números menores = antes). Recomendado dejar saltos de 10.' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'highlight',
          type: 'checkbox',
          defaultValue: false,
          label: 'Destacado',
          admin: { width: '50%', description: 'Aplica el estilo destacado (fondo naranja) en el listado y carrusel.' },
        },
        {
          name: 'placeholder',
          type: 'checkbox',
          defaultValue: false,
          label: 'En desarrollo',
          admin: { width: '50%', description: 'Marca el producto como "próximamente" en su ficha.' },
        },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      label: 'Nombre comercial',
      admin: { description: 'Se muestra como título en el listado, carrusel y CTAs.' },
    },
    {
      name: 'menuLabel',
      type: 'text',
      required: true,
      localized: true,
      label: 'Texto en el menú',
      admin: { description: 'Variante corta que aparece en el dropdown del navbar y la línea de tiempo de productos.' },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      localized: true,
      label: 'Subtítulo (tagline)',
      admin: { description: 'Frase corta de marketing que acompaña al nombre en cards y fichas.' },
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título del hero',
      admin: { description: 'Título grande de la ficha del producto.' },
    },
    {
      name: 'intro',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Introducción',
      admin: { description: 'Párrafo introductorio bajo el hero de la ficha.' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen del hero (opcional)',
      admin: { description: 'Solo si quieres sustituir el icono naranja por una imagen real (ej. logo de marca).' },
    },
  ],
}
