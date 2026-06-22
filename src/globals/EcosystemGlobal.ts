import type { GlobalConfig } from 'payload'

/**
 * Página /ecosistema-tecnico. Estructura en tabs:
 * - SEO
 * - Hero (eyebrow, título dividido por el chip HUB, intro, KPIs labels)
 * - Diagrama (textos de ayuda sobre el mapa interactivo)
 * - Lista completa (eyebrow + título + lead + etiqueta "integraciones")
 * - CTA (título, lead y botón)
 * - Hubs (array localized con los 8 sub-hubs y sus integraciones)
 */
export const EcosystemGlobal: GlobalConfig = {
  slug: 'ecosystem-page',
  label: 'Página · Ecosistema técnico',
  admin: {
    description:
      'Página /ecosistema-tecnico. Edita por idioma (es/ca/en/zh) desde la pestaña superior del admin.',
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
            {
              type: 'row',
              fields: [
                { name: 'title1', type: 'text', required: true, localized: true, label: 'Título — antes del chip HUB', admin: { width: '50%' } },
                { name: 'title2', type: 'text', required: false, localized: true, label: 'Título — después del chip HUB', admin: { width: '50%' } },
              ],
            },
            { name: 'intro', type: 'textarea', required: true, localized: true, label: 'Intro' },
            {
              type: 'row',
              fields: [
                { name: 'kpiHubs', type: 'text', required: true, localized: true, label: 'KPI hubs · etiqueta', admin: { width: '33%' } },
                { name: 'kpiIntegrations', type: 'text', required: true, localized: true, label: 'KPI integraciones · etiqueta', admin: { width: '33%' } },
                { name: 'kpiEntry', type: 'text', required: true, localized: true, label: 'KPI punto de entrada · etiqueta', admin: { width: '34%' } },
              ],
            },
          ],
        },
        {
          label: 'Diagrama',
          fields: [
            { name: 'hubsHint', type: 'textarea', required: true, localized: true, label: 'Pista sobre el diagrama (desktop)' },
            { name: 'hubsHintMobile', type: 'textarea', required: true, localized: true, label: 'Pista sobre el diagrama (móvil)' },
          ],
        },
        {
          label: 'Lista completa',
          fields: [
            { name: 'fullListEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'fullListTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'fullListLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            { name: 'integrationsLabel', type: 'text', required: true, localized: true, label: 'Etiqueta "integraciones" (en el contador)' },
          ],
        },
        {
          label: 'CTA',
          fields: [
            { name: 'ctaTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'ctaLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            { name: 'ctaButton', type: 'text', required: true, localized: true, label: 'Botón' },
          ],
        },
        {
          label: 'Hubs',
          fields: [
            {
              name: 'hubs',
              type: 'array',
              required: true,
              localized: true,
              label: 'Sub-hubs del ecosistema',
              labels: { singular: 'Hub', plural: 'Hubs' },
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'key', type: 'text', required: true, label: 'Key (id estable)', admin: { width: '30%' } },
                    { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols', admin: { width: '40%' } },
                    { name: 'shortLabel', type: 'text', required: true, label: 'Etiqueta corta', admin: { width: '30%' } },
                  ],
                },
                { name: 'name', type: 'text', required: true, label: 'Nombre completo' },
                {
                  name: 'integrations',
                  type: 'array',
                  required: true,
                  label: 'Integraciones',
                  labels: { singular: 'Integración', plural: 'Integraciones' },
                  minRows: 1,
                  fields: [{ name: 'name', type: 'text', required: true, label: 'Nombre' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
