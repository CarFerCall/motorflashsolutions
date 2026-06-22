import type { GlobalConfig } from 'payload'

/**
 * Página /compania ("La Compañía"). Estructura en tabs:
 * - SEO
 * - Hero (eyebrow, título, intros, CTAs, badge sobre la foto)
 * - KPIs (4 cifras + 4 etiquetas)
 * - Valores (array de 6 cards: icon + title + desc)
 * - Historia (array de hitos: year + title + desc + icon + accent)
 * - Sede (dirección + sellos ISO)
 */
export const CompanyGlobal: GlobalConfig = {
  slug: 'company-page',
  label: 'Página · Compañía',
  admin: {
    description: 'Página /compania. Edita por idioma (es/ca/en/zh) desde la pestaña superior del admin.',
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
            { name: 'ogDescription', type: 'textarea', required: true, localized: true, label: 'Descripción OG' },
          ],
        },
        {
          label: 'Hero',
          fields: [
            { name: 'eyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'title', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'intro1', type: 'textarea', required: true, localized: true, label: 'Intro 1' },
            { name: 'intro2', type: 'textarea', required: true, localized: true, label: 'Intro 2' },
            {
              type: 'row',
              fields: [
                { name: 'ctaContact', type: 'text', required: true, localized: true, label: 'CTA contactar', admin: { width: '50%' } },
                { name: 'ctaWork', type: 'text', required: true, localized: true, label: 'CTA trabaja con nosotros', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'heroBadgeYears', type: 'text', required: true, localized: true, label: 'Badge - cifra', admin: { width: '50%' } },
                { name: 'heroBadgeLead', type: 'text', required: true, localized: true, label: 'Badge - texto', admin: { width: '50%' } },
              ],
            },
          ],
        },
        {
          label: 'KPIs',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'kpiYearsValue', type: 'text', required: true, localized: true, label: 'KPI años · valor', admin: { width: '25%' } },
                { name: 'kpiYears', type: 'text', required: true, localized: true, label: 'KPI años · etiqueta', admin: { width: '25%' } },
                { name: 'kpiClientsValue', type: 'text', required: true, localized: true, label: 'KPI clientes · valor', admin: { width: '25%' } },
                { name: 'kpiClients', type: 'text', required: true, localized: true, label: 'KPI clientes · etiqueta', admin: { width: '25%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'kpiRevenueValue', type: 'text', required: true, localized: true, label: 'KPI facturación · valor', admin: { width: '25%' } },
                { name: 'kpiRevenue', type: 'text', required: true, localized: true, label: 'KPI facturación · etiqueta', admin: { width: '25%' } },
                { name: 'kpiTeamValue', type: 'text', required: true, localized: true, label: 'KPI equipo · valor', admin: { width: '25%' } },
                { name: 'kpiTeam', type: 'text', required: true, localized: true, label: 'KPI equipo · etiqueta', admin: { width: '25%' } },
              ],
            },
          ],
        },
        {
          label: 'Valores',
          fields: [
            { name: 'valuesEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'valuesTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'valuesLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              name: 'values',
              type: 'array',
              required: true,
              localized: true,
              label: 'Cards de valores',
              labels: { singular: 'Valor', plural: 'Valores' },
              minRows: 1,
              fields: [
                { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols' },
                { name: 'title', type: 'text', required: true, label: 'Título' },
                { name: 'desc', type: 'textarea', required: true, label: 'Descripción' },
              ],
            },
          ],
        },
        {
          label: 'Historia',
          fields: [
            { name: 'historyEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'historyTitle', type: 'text', required: true, localized: true, label: 'Título' },
            {
              name: 'timeline',
              type: 'array',
              required: true,
              localized: true,
              label: 'Hitos de la historia',
              labels: { singular: 'Hito', plural: 'Hitos' },
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'year', type: 'text', required: true, label: 'Año', admin: { width: '20%' } },
                    { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols', admin: { width: '40%' } },
                    { name: 'accent', type: 'checkbox', defaultValue: false, label: 'Destacado (último/actual)', admin: { width: '40%' } },
                  ],
                },
                { name: 'title', type: 'text', required: true, label: 'Título' },
                { name: 'desc', type: 'textarea', required: true, label: 'Descripción' },
              ],
            },
          ],
        },
        {
          label: 'Sede',
          fields: [
            { name: 'hqEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'hqTitle', type: 'text', required: true, localized: true, label: 'Título' },
            {
              type: 'row',
              fields: [
                { name: 'hqAddress', type: 'text', required: true, localized: true, label: 'Dirección línea 1', admin: { width: '50%' } },
                { name: 'hqAddress2', type: 'text', required: true, localized: true, label: 'Dirección línea 2', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'isoQuality', type: 'text', required: true, localized: true, label: 'Sello ISO calidad (corto)', admin: { width: '50%' } },
                { name: 'isoQualityTitle', type: 'text', required: true, localized: true, label: 'Sello ISO calidad (tooltip)', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'isoSecurity', type: 'text', required: true, localized: true, label: 'Sello ISO seguridad (corto)', admin: { width: '50%' } },
                { name: 'isoSecurityTitle', type: 'text', required: true, localized: true, label: 'Sello ISO seguridad (tooltip)', admin: { width: '50%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
