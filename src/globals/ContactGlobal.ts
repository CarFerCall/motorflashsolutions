import type { GlobalConfig } from 'payload'

/**
 * Página de contacto: textos del hero + datos de contacto comerciales.
 * El formulario y su lógica viven en `ContactForm.tsx` y no se editan
 * desde el admin (validación, envío y honeypot).
 */
export const ContactGlobal: GlobalConfig = {
  slug: 'contact-page',
  label: 'Página · Contacto',
  admin: {
    description: 'Textos del bloque oscuro de la página /contacto y datos de contacto (teléfono y email).',
    group: 'Páginas',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título principal',
    },
    {
      name: 'lead',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Descripción / lead',
    },
    {
      type: 'row',
      fields: [
        { name: 'phoneLabel', type: 'text', required: true, localized: true, label: 'Etiqueta del teléfono', admin: { width: '50%' } },
        { name: 'phoneNumber', type: 'text', required: true, label: 'Número de teléfono', admin: { width: '50%', description: 'Ej. +34 910 788 575' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'emailLabel', type: 'text', required: true, localized: true, label: 'Etiqueta del email', admin: { width: '50%' } },
        { name: 'emailAddress', type: 'text', required: true, label: 'Dirección de email', admin: { width: '50%' } },
      ],
    },
  ],
}
