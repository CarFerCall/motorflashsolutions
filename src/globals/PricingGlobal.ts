import type { GlobalConfig } from 'payload'

/**
 * Textos de la página /precios. Los precios y planes en sí viven en
 * la colección PricingPlans (configurador), aquí sólo se editan los
 * copies del hero, sección "Más servicios" y CTA "Afinar producto".
 */
export const PricingGlobal: GlobalConfig = {
  slug: 'pricing-page',
  label: 'Página · Precios',
  admin: {
    description: 'Copy editorial de /precios: hero, mensajes de fallback y secciones “Más servicios” y “Afinar producto”. Los planes y precios se editan en la colección Tarifas.',
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
          label: 'Fallback sin planes',
          fields: [
            { name: 'noPlansPre', type: 'text', required: true, localized: true, label: 'Texto antes del enlace' },
            { name: 'noPlansLink', type: 'text', required: true, localized: true, label: 'Texto del enlace' },
            { name: 'noPlansPost', type: 'text', required: true, localized: true, label: 'Texto tras el enlace' },
          ],
        },
        {
          label: 'On demand',
          fields: [
            { name: 'onDemandEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'onDemandTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'onDemandLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            { name: 'onDemandCta', type: 'text', required: true, localized: true, label: 'CTA de tarjeta' },
          ],
        },
        {
          label: 'Afinar producto',
          fields: [
            { name: 'fineTuneTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'fineTuneLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
          ],
        },
      ],
    },
  ],
}
