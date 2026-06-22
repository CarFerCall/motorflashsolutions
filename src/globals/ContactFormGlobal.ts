import type { GlobalConfig } from 'payload'

/**
 * UI · Formulario de /contacto + página /contacto/gracias.
 *
 * Solo labels/textos de inputs y de la página de confirmación. El HERO
 * dark de /contacto (título, lead, teléfono/email) vive en el global
 * `contact-page`. Aquí guardamos lo del formulario porque es un
 * componente client y porque agrupa "form + gracias" bajo una misma
 * unidad editorial.
 */
export const ContactFormGlobal: GlobalConfig = {
  slug: 'contact-form',
  label: 'Formulario · Contacto y gracias',
  admin: {
    description: 'Labels del formulario de contacto y textos de la página /contacto/gracias.',
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
          label: 'Formulario',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'nameLabel', type: 'text', required: true, localized: true, label: 'Nombre · label', admin: { width: '50%' } },
                { name: 'namePlaceholder', type: 'text', required: true, localized: true, label: 'Nombre · placeholder', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'emailLabel', type: 'text', required: true, localized: true, label: 'Email · label', admin: { width: '50%' } },
                { name: 'emailPlaceholder', type: 'text', required: true, localized: true, label: 'Email · placeholder', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'companyLabel', type: 'text', required: true, localized: true, label: 'Empresa · label', admin: { width: '50%' } },
                { name: 'phoneLabel', type: 'text', required: true, localized: true, label: 'Teléfono · label', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'serviceLabel', type: 'text', required: true, localized: true, label: 'Servicio · label', admin: { width: '50%' } },
                { name: 'servicePlaceholder', type: 'text', required: true, localized: true, label: 'Servicio · placeholder', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'messageLabel', type: 'text', required: true, localized: true, label: 'Mensaje · label', admin: { width: '50%' } },
                { name: 'messagePlaceholder', type: 'text', required: true, localized: true, label: 'Mensaje · placeholder', admin: { width: '50%' } },
              ],
            },
            { name: 'privacy', type: 'textarea', required: true, localized: true, label: 'Texto del checkbox de privacidad' },
            {
              type: 'row',
              fields: [
                { name: 'sending', type: 'text', required: true, localized: true, label: 'Botón enviando…', admin: { width: '50%' } },
                { name: 'submit', type: 'text', required: true, localized: true, label: 'Botón enviar', admin: { width: '50%' } },
              ],
            },
          ],
        },
        {
          label: 'Página de gracias',
          fields: [
            { name: 'thanksTitle', type: 'text', required: true, localized: true, label: 'Título' },
            { name: 'thanksLead', type: 'textarea', required: true, localized: true, label: 'Lead' },
            {
              type: 'row',
              fields: [
                { name: 'thanksExploreServices', type: 'text', required: true, localized: true, label: 'CTA ver servicios', admin: { width: '50%' } },
                { name: 'thanksBackHome', type: 'text', required: true, localized: true, label: 'CTA volver al inicio', admin: { width: '50%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
