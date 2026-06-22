import type { GlobalConfig } from 'payload'

/**
 * UI · Páginas de producto y carrusel.
 *
 * Agrupa los textos compartidos por varios componentes editoriales
 * relacionados con el catálogo de productos:
 *   - Carrusel de productos de la home (`ProductCarousel`).
 *   - Animación del multipublicador (`MultipublicadorAnimation`).
 *   - Plantilla genérica de página de producto (`GenericProductPage`).
 *
 * Los contenidos por producto (hero, features, highlights…) viven en
 * `product-content` y no se tocan aquí.
 */
export const ProductUIGlobal: GlobalConfig = {
  slug: 'product-ui',
  label: 'UI · Páginas de producto',
  admin: {
    description: 'Labels y textos compartidos por el carrusel, la animación del multipublicador y la plantilla genérica de producto.',
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
          label: 'Carrusel',
          description: 'Sección "Catálogo completo" de la home (componente ProductCarousel).',
          fields: [
            { name: 'carouselEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'carouselTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'carouselLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              type: 'row',
              fields: [
                { name: 'carouselPrevAria', type: 'text', required: true, localized: true, label: 'Aria flecha anterior', admin: { width: '50%' } },
                { name: 'carouselNextAria', type: 'text', required: true, localized: true, label: 'Aria flecha siguiente', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'carouselView', type: 'text', required: true, localized: true, label: 'CTA tarjeta (verbo)', admin: { width: '50%' } },
                { name: 'carouselViewAll', type: 'text', required: true, localized: true, label: 'CTA "ver catálogo"', admin: { width: '50%' } },
              ],
            },
          ],
        },
        {
          label: 'Multipublicador',
          description: 'Diagrama animado del producto Multipublicador (componente MultipublicadorAnimation).',
          fields: [
            { name: 'multiAriaLabel', type: 'text', required: true, localized: true, label: 'Aria-label de la sección' },
            { name: 'multiEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow' },
            { name: 'multiTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'multiLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              type: 'row',
              fields: [
                { name: 'multiHubName', type: 'text', required: true, localized: true, label: 'Hub · nombre', admin: { width: '50%' } },
                { name: 'multiHubSubline', type: 'text', required: true, localized: true, label: 'Hub · sub-línea', admin: { width: '50%' } },
              ],
            },
            { name: 'multiSendsTo', type: 'text', required: true, localized: true, label: 'Texto "Envía a"' },
            {
              name: 'multiStats',
              type: 'array',
              required: true,
              localized: true,
              label: 'Stats del pie',
              labels: { singular: 'Stat', plural: 'Stats' },
              minRows: 1,
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'v', type: 'text', required: true, label: 'Valor', admin: { width: '40%' } },
                    { name: 'l', type: 'text', required: true, label: 'Etiqueta', admin: { width: '60%' } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Página genérica',
          description: 'Plantilla compartida por los productos sin stitch propio (componente GenericProductPage).',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'breadcrumbHome', type: 'text', required: true, localized: true, label: 'Breadcrumb · Inicio', admin: { width: '50%' } },
                { name: 'breadcrumbServices', type: 'text', required: true, localized: true, label: 'Breadcrumb · Servicios', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'ctaInfo', type: 'text', required: true, localized: true, label: 'CTA "Solicitar información"', admin: { width: '50%' } },
                { name: 'ctaViewAll', type: 'text', required: true, localized: true, label: 'CTA "Ver todos los servicios"', admin: { width: '50%' } },
              ],
            },
            { name: 'comingSoonChip', type: 'text', required: true, localized: true, label: 'Chip "Próximamente"' },
            { name: 'comingSoonTitle', type: 'text', required: true, localized: true, label: 'Próximamente · título' },
            { name: 'comingSoonLead', type: 'textarea', required: true, localized: true, label: 'Próximamente · lead' },
            { name: 'comingSoonCta', type: 'text', required: true, localized: true, label: 'Próximamente · CTA' },
            {
              type: 'row',
              fields: [
                { name: 'featuresEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow · features', admin: { width: '33%' } },
                { name: 'highlightsEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow · highlights', admin: { width: '33%' } },
                { name: 'processEyebrow', type: 'text', required: true, localized: true, label: 'Eyebrow · process', admin: { width: '34%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'ctaEyebrow', type: 'text', required: true, localized: true, label: 'CTA section · eyebrow', admin: { width: '50%' } },
                { name: 'ctaRequest', type: 'text', required: true, localized: true, label: 'CTA section · verbo "Solicitar"', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'othersEyebrow', type: 'text', required: true, localized: true, label: 'Otros servicios · eyebrow', admin: { width: '50%' } },
                { name: 'othersTitle', type: 'text', required: true, localized: true, label: 'Otros servicios · título', admin: { width: '50%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
