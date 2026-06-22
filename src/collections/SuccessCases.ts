import type { CollectionConfig } from 'payload'

/**
 * Casos de éxito de la página /historias-de-exito.
 *
 * Cada doc es un cliente con su look & feel propio (banner, color
 * primario, wordmark) y un copy editable por idioma.
 *
 * - Campos estructurales (slug, order, brandStyle, quoteVariant,
 *   logo y dimensiones) NO están localizados — son metadatos
 *   visuales compartidos por los 4 idiomas.
 * - Todo el copy visible (brand, wordmark, tagline, badge, headline,
 *   introHtml, quote, author, stats, ecosystemTitle/Lead/Items)
 *   está `localized: true` y se edita desde la pestaña por idioma.
 *
 * El wrapper `src/catalog/success-cases.ts` cae al COPY estático
 * cuando la colección está vacía o falla la query.
 */
export const SuccessCases: CollectionConfig = {
  slug: 'success-cases',
  labels: { singular: 'Caso de éxito', plural: 'Casos de éxito' },
  admin: {
    useAsTitle: 'brand',
    description: 'Clientes que aparecen en /historias-de-exito. El orden lo controla "order". Edita los textos por idioma desde la pestaña superior.',
    group: 'Contenido',
    defaultColumns: ['slug', 'brand', 'order', 'updatedAt'],
    listSearchableFields: ['slug', 'brand'],
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
          type: 'text',
          required: true,
          unique: true,
          label: 'Slug',
          admin: { width: '40%', description: 'Identificador único (también el ancla #slug en la página).' },
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 100,
          label: 'Orden',
          admin: { width: '30%', description: 'Posición en el listado (números menores = antes). Recomendado dejar saltos de 10.' },
        },
        {
          name: 'quoteVariant',
          type: 'select',
          required: true,
          defaultValue: 'dark',
          label: 'Estilo de la cita',
          options: [
            { label: 'Oscura (fondo color "ink")', value: 'dark' },
            { label: 'Clara (fondo blanco)', value: 'light' },
          ],
          admin: { width: '30%', description: 'Cómo se muestra el bloque de cita del cliente.' },
        },
      ],
    },
    {
      name: 'brandStyle',
      type: 'group',
      label: 'Look & feel del cliente',
      admin: { description: 'Colores y estilo tipográfico del banner del cliente. Se aplican igual en los 4 idiomas.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'primary', type: 'text', required: true, label: 'Color primario (hex)', admin: { width: '25%' } },
            { name: 'ink', type: 'text', required: true, label: 'Color oscuro (hex)', admin: { width: '25%' } },
            { name: 'banner', type: 'text', required: true, label: 'CSS background del banner', admin: { width: '50%', description: 'P. ej. linear-gradient(135deg, #0A0A0A 0%, #1F1F1F 55%, #4A4A4A 100%)' } },
          ],
        },
        { name: 'wordmarkClass', type: 'text', label: 'Clase Tailwind del wordmark (opcional)', admin: { description: 'P. ej. tracking-[-0.02em] font-bold' } },
      ],
    },
    {
      name: 'logo',
      type: 'group',
      label: 'Logotipo (opcional)',
      admin: { description: 'Si no rellenas el logo, se mostrará el wordmark con la tipografía de marca.' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'src', type: 'text', label: 'Ruta del logo', admin: { width: '60%', description: 'P. ej. /images/clients/jarmauto.png' } },
            { name: 'alt', type: 'text', label: 'Texto alternativo', admin: { width: '40%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'width', type: 'number', label: 'Ancho original (px)', admin: { width: '50%' } },
            { name: 'height', type: 'number', label: 'Alto original (px)', admin: { width: '50%' } },
          ],
        },
      ],
    },
    {
      name: 'brand',
      type: 'text',
      required: true,
      localized: true,
      label: 'Marca (mayúsculas)',
      admin: { description: 'Nombre del cliente en mayúsculas, usado como heading interno.' },
    },
    {
      name: 'wordmark',
      type: 'text',
      required: true,
      localized: true,
      label: 'Wordmark',
      admin: { description: 'Texto-logo que aparece en el banner si no hay logo subido.' },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      localized: true,
      label: 'Tagline',
      admin: { description: 'Descripción corta bajo el wordmark. P. ej. "Grupo automoción · Madrid".' },
    },
    {
      name: 'badge',
      type: 'text',
      required: true,
      localized: true,
      label: 'Badge',
      admin: { description: 'Etiqueta lateral del banner. P. ej. "Cliente Premium · Ecosistema completo".' },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      localized: true,
      label: 'Titular del caso',
    },
    {
      name: 'introHtml',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Introducción (HTML)',
      admin: { description: 'Acepta <strong> para resaltar partes. No incluyas scripts.' },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Cita del cliente',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      localized: true,
      label: 'Autor de la cita',
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      localized: true,
      label: 'KPIs',
      labels: { singular: 'KPI', plural: 'KPIs' },
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Valor', admin: { description: 'P. ej. +180%, 360°, 24h.' } },
        { name: 'label', type: 'text', required: true, label: 'Etiqueta' },
      ],
    },
    {
      name: 'ecosystemTitle',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título del ecosistema contratado',
    },
    {
      name: 'ecosystemLead',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Descripción del ecosistema',
    },
    {
      name: 'ecosystemItems',
      type: 'array',
      required: true,
      localized: true,
      label: 'Productos contratados',
      labels: { singular: 'Producto', plural: 'Productos' },
      minRows: 1,
      fields: [{ name: 'text', type: 'text', required: true, label: 'Producto' }],
    },
  ],
}
