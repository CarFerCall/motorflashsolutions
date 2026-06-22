import type { GlobalConfig } from 'payload'

/**
 * Chrome de la página /historias-de-exito.
 *
 * Los casos en sí (5 clientes — Jarmauto, Ocasionplus, Flexicar, Muy
 * Car, Auto Elia) viven en la colección `SuccessCases`. Aquí solo se
 * editan los textos del envoltorio: meta, hero, pill "+1.500 clientes
 * más", etiqueta "PRODUCTOS CONTRATADOS" y CTA final.
 */
export const SuccessStoriesGlobal: GlobalConfig = {
  slug: 'success-stories-page',
  label: 'Página · Casos de éxito',
  admin: {
    description:
      'Copy editorial de /historias-de-exito: meta, hero, pill de "+1.500 clientes más", etiqueta "PRODUCTOS CONTRATADOS" y CTA final. Los casos de cliente se editan en la colección Casos de éxito.',
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
            { name: 'heroEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'heroTitle1', type: 'text', required: true, localized: true, label: 'Título (parte 1)' },
            { name: 'heroTitle2', type: 'text', required: true, localized: true, label: 'Título (parte 2, en color primario)' },
            { name: 'heroLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            { name: 'trustHeading', type: 'text', required: true, localized: true, label: 'Encabezado "Confían en nosotros"' },
          ],
        },
        {
          label: 'Pill',
          fields: [
            { name: 'morePill1', type: 'text', required: true, localized: true, label: 'Pill línea 1 (p. ej. "+1.500")' },
            { name: 'morePill2', type: 'text', required: true, localized: true, label: 'Pill línea 2 (p. ej. "clientes más")' },
            { name: 'productsLabel', type: 'text', required: true, localized: true, label: 'Etiqueta "PRODUCTOS CONTRATADOS"' },
          ],
        },
        {
          label: 'CTA',
          fields: [
            { name: 'ctaTitle', type: 'text', required: true, localized: true, label: 'Título CTA' },
            { name: 'ctaLead', type: 'textarea', required: true, localized: true, label: 'Lead CTA' },
            { name: 'ctaButton', type: 'text', required: true, localized: true, label: 'Texto del botón' },
          ],
        },
      ],
    },
  ],
}
