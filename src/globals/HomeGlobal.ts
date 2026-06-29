import type { GlobalConfig } from 'payload'

/**
 * Página / ("Home"). Estructura en tabs:
 * - SEO (vacío por ahora — la home no tiene meta editable aún)
 * - Hero (chip, título, lead, CTAs)
 * - Catálogo timeline (eyebrow, título, lead)
 * - Social proof (cifras y conectores)
 * - Sobre Motorflash (eyebrow, título, intros con strong, CTA, etiquetas KPIs)
 * - Qué resolvemos (eyebrow, título, lead, antes/ahora, array de rows)
 * - Cómo te ayudamos (eyebrow, título, lead, array de pasos)
 * - Resultados reales (eyebrow, título, lead, array de stats)
 * - Ecosistema teaser (eyebrow, títulos, lead, sub-etiquetas, CTA)
 * - Para quién (eyebrow, título, array de audiencias)
 * - Testimonios (eyebrow, título, array de quotes + NDA + link)
 * - Historia teaser (eyebrow, título, lead, CTA, badge)
 * - CTA contacto (título, lead, primary)
 * - Nav sections (array de anclas)
 *
 * Todos los arrays son `localized: true` para permitir variantes por idioma
 * (incluso iconos/IDs). Es lo más simple y consistente con el resto de Globals.
 */
export const HomeGlobal: GlobalConfig = {
  slug: 'home-page',
  label: 'Página · Home',
  admin: {
    description: 'Página /. Edita por idioma (es/ca/en/zh) desde la pestaña superior del admin.',
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
          label: 'Hero',
          fields: [
            { name: 'heroChip', type: 'text', required: true, localized: true, label: 'Chip (eyebrow)' },
            { name: 'heroTitle1', type: 'text', required: true, localized: true, label: 'Título — parte 1' },
            { name: 'heroTitleAccent', type: 'text', required: true, localized: true, label: 'Título — acento (color)' },
            { name: 'heroLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              type: 'row',
              fields: [
                { name: 'heroCtaServices', type: 'text', required: true, localized: true, label: 'CTA servicios', admin: { width: '33%' } },
                { name: 'heroCtaContact', type: 'text', required: true, localized: true, label: 'CTA contactar', admin: { width: '33%' } },
                { name: 'heroCtaWork', type: 'text', required: true, localized: true, label: 'CTA trabaja con nosotros', admin: { width: '34%' } },
              ],
            },
          ],
        },
        {
          label: 'Catálogo timeline',
          fields: [
            { name: 'timelineEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'timelineTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'timelineLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
          ],
        },
        {
          label: 'Social proof',
          fields: [
            { name: 'socialProofPre', type: 'text', required: false, localized: true, label: 'Pre (puede ir vacío)' },
            { name: 'socialProofDealers', type: 'text', required: true, localized: true, label: 'Cifra 1 — concesionarios' },
            { name: 'socialProofMid', type: 'text', required: true, localized: true, label: 'Conector 1' },
            { name: 'socialProofCalls', type: 'text', required: true, localized: true, label: 'Cifra 2 — llamadas' },
            { name: 'socialProofMid2', type: 'text', required: true, localized: true, label: 'Conector 2' },
            { name: 'socialProofCars', type: 'text', required: true, localized: true, label: 'Cifra 3 — vehículos' },
            { name: 'socialProofPost', type: 'text', required: false, localized: true, label: 'Post (puede ir vacío)' },
          ],
        },
        {
          label: 'Sobre Motorflash',
          fields: [
            { name: 'aboutEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'aboutTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'aboutP1Pre', type: 'textarea', required: true, localized: true, label: 'Párrafo 1 — pre' },
            { name: 'aboutP1Strong', type: 'text', required: true, localized: true, label: 'Párrafo 1 — strong' },
            { name: 'aboutP1Post', type: 'textarea', required: true, localized: true, label: 'Párrafo 1 — post' },
            { name: 'aboutP2Pre', type: 'textarea', required: true, localized: true, label: 'Párrafo 2 — pre' },
            { name: 'aboutP2Strong', type: 'text', required: true, localized: true, label: 'Párrafo 2 — strong' },
            { name: 'aboutP2Post', type: 'textarea', required: true, localized: true, label: 'Párrafo 2 — post' },
            { name: 'aboutCta', type: 'text', required: true, localized: true, label: 'CTA' },
            {
              name: 'aboutStats',
              type: 'array',
              required: true,
              localized: true,
              label: 'Etiquetas de las 4 stats',
              labels: { singular: 'Etiqueta', plural: 'Etiquetas' },
              minRows: 4,
              maxRows: 4,
              fields: [
                { name: 'label', type: 'text', required: true, label: 'Etiqueta' },
              ],
            },
          ],
        },
        {
          label: 'Qué resolvemos',
          fields: [
            { name: 'solveEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'solveTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'solveLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              type: 'row',
              fields: [
                { name: 'solveBefore', type: 'text', required: true, localized: true, label: 'Etiqueta "Antes"', admin: { width: '50%' } },
                { name: 'solveAfter', type: 'text', required: true, localized: true, label: 'Etiqueta "Ahora"', admin: { width: '50%' } },
              ],
            },
            {
              name: 'solveRows',
              type: 'array',
              required: true,
              localized: true,
              label: 'Filas antes/ahora',
              labels: { singular: 'Fila', plural: 'Filas' },
              minRows: 1,
              fields: [
                { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols' },
                { name: 'before', type: 'text', required: true, label: 'Antes' },
                { name: 'after', type: 'text', required: true, label: 'Ahora' },
              ],
            },
          ],
        },
        {
          label: 'Cómo te ayudamos',
          fields: [
            { name: 'helpEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'helpTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'helpLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              name: 'helpSteps',
              type: 'array',
              required: true,
              localized: true,
              label: 'Pasos',
              labels: { singular: 'Paso', plural: 'Pasos' },
              minRows: 1,
              fields: [
                { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols' },
                { name: 't', type: 'text', required: true, label: 'Título' },
                { name: 'd', type: 'textarea', required: true, label: 'Descripción' },
              ],
            },
          ],
        },
        {
          label: 'Resultados reales',
          fields: [
            { name: 'resultsEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'resultsTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'resultsLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              name: 'resultsStats',
              type: 'array',
              required: true,
              localized: true,
              label: 'Stats (4)',
              labels: { singular: 'Stat', plural: 'Stats' },
              minRows: 4,
              maxRows: 4,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'v', type: 'number', required: true, label: 'Valor numérico', admin: { width: '33%' } },
                    { name: 'suffix', type: 'text', required: true, label: 'Sufijo (% / h / etc.)', admin: { width: '33%' } },
                    { name: 'l', type: 'text', required: true, label: 'Etiqueta', admin: { width: '34%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Ecosistema (teaser)',
          fields: [
            { name: 'ecoEyebrowAccent', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'ecoTitle1', type: 'text', required: true, localized: true, label: 'Título — antes de HUB' },
            { name: 'ecoTitle2', type: 'text', required: false, localized: true, label: 'Título — después de HUB (puede ir vacío)' },
            { name: 'ecoLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              type: 'row',
              fields: [
                { name: 'ecoStatHubs', type: 'text', required: true, localized: true, label: 'Etiqueta hubs', admin: { width: '33%' } },
                { name: 'ecoStatInt', type: 'text', required: true, localized: true, label: 'Etiqueta integraciones', admin: { width: '33%' } },
                { name: 'ecoStatEntry', type: 'text', required: true, localized: true, label: 'Etiqueta punto de entrada', admin: { width: '34%' } },
              ],
            },
            { name: 'ecoCta', type: 'text', required: true, localized: true, label: 'CTA' },
          ],
        },
        {
          label: 'Para quién',
          fields: [
            { name: 'audiencesEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'audiencesTitle', type: 'text', required: true, localized: true, label: 'Título' },
            {
              name: 'audiences',
              type: 'array',
              required: true,
              localized: true,
              label: 'Audiencias',
              labels: { singular: 'Audiencia', plural: 'Audiencias' },
              minRows: 1,
              fields: [
                { name: 'icon', type: 'text', required: true, label: 'Icono Material Symbols' },
                { name: 'tag', type: 'text', required: true, label: 'Tag (chip)' },
                { name: 'title', type: 'text', required: true, label: 'Título' },
                { name: 'desc', type: 'textarea', required: true, label: 'Descripción' },
              ],
            },
          ],
        },
        {
          label: 'Testimonios',
          fields: [
            { name: 'testimonialsEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'testimonialsTitle', type: 'text', required: true, localized: true, label: 'Título' },
            {
              name: 'testimonials',
              type: 'array',
              required: true,
              localized: true,
              label: 'Quotes',
              labels: { singular: 'Quote', plural: 'Quotes' },
              minRows: 1,
              fields: [
                { name: 'quote', type: 'textarea', required: true, label: 'Cita' },
                {
                  type: 'row',
                  fields: [
                    { name: 'name', type: 'text', required: true, label: 'Nombre / rol', admin: { width: '50%' } },
                    { name: 'where', type: 'text', required: true, label: 'Dónde (ciudad / tipo)', admin: { width: '50%' } },
                  ],
                },
              ],
            },
            { name: 'testimonialsNda', type: 'text', required: true, localized: true, label: 'Texto NDA' },
            { name: 'testimonialsLink', type: 'text', required: true, localized: true, label: 'Link historias de éxito' },
          ],
        },
        {
          label: 'Historia',
          fields: [
            { name: 'historyEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'historyTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'historyLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            { name: 'historyCta', type: 'text', required: true, localized: true, label: 'CTA' },
            {
              type: 'row',
              fields: [
                { name: 'historyBadgeYears', type: 'text', required: true, localized: true, label: 'Badge — cifra', admin: { width: '50%' } },
                { name: 'historyBadgeLead', type: 'text', required: true, localized: true, label: 'Badge — texto', admin: { width: '50%' } },
              ],
            },
          ],
        },
        {
          label: 'CTA contacto',
          fields: [
            { name: 'ctaTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'ctaLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            { name: 'ctaPrimary', type: 'text', required: true, localized: true, label: 'CTA primario' },
          ],
        },
        {
          label: 'Nav sections',
          description: 'Anclas del menú flotante de la home. Compartidas entre los 4 idiomas (los labels visibles los traduce el frontend automáticamente).',
          fields: [
            {
              name: 'navSections',
              type: 'array',
              label: 'Secciones',
              labels: { singular: 'Sección', plural: 'Secciones' },
              admin: {
                description: 'No editar habitualmente. El menú flotante usa el fallback estático del código si este campo está vacío.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'anchor', type: 'text', label: 'ID (ancla DOM)', admin: { width: '40%' } },
                    { name: 'label', type: 'text', label: 'Etiqueta visible', admin: { width: '60%' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
