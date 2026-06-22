import type { GlobalConfig } from 'payload'

/**
 * Pie de página: textos editables por idioma desde /admin/globals/footer.
 *
 * El componente `Footer.tsx` lee este global y cae al COPY estático
 * si la query a Payload falla. Por eso todos los campos están
 * marcados como localizados — la lista de productos del footer
 * sigue calculándose desde la colección Products (no se duplica
 * aquí).
 */
export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  label: 'Pie de página',
  admin: {
    description: 'Textos del pie de página común a toda la web. Edita por idioma desde la pestaña superior.',
    group: 'Páginas',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'tagline',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Eslogan bajo el logo',
    },
    {
      type: 'row',
      fields: [
        { name: 'productsHeading', type: 'text', required: true, localized: true, label: 'Título columna productos', admin: { width: '50%' } },
        { name: 'viewAll', type: 'text', required: true, localized: true, label: 'Texto "Ver todos"', admin: { width: '50%' } },
      ],
    },
    {
      name: 'companyHeading',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título columna compañía',
    },
    {
      type: 'row',
      fields: [
        { name: 'aboutUs', type: 'text', required: true, localized: true, label: 'Conócenos', admin: { width: '25%' } },
        { name: 'successStories', type: 'text', required: true, localized: true, label: 'Historias de éxito', admin: { width: '25%' } },
        { name: 'pricing', type: 'text', required: true, localized: true, label: 'Precios', admin: { width: '25%' } },
        { name: 'contact', type: 'text', required: true, localized: true, label: 'Contacto', admin: { width: '25%' } },
      ],
    },
    {
      name: 'hqHeading',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título sede',
    },
    {
      type: 'row',
      fields: [
        { name: 'hqAddress1', type: 'text', required: true, localized: true, label: 'Dirección línea 1', admin: { width: '50%' } },
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
    {
      name: 'copyright',
      type: 'text',
      required: true,
      localized: true,
      label: 'Copyright',
      admin: { description: 'Usa {year} como placeholder para el año actual.' },
    },
    {
      type: 'row',
      fields: [
        { name: 'privacy', type: 'text', required: true, localized: true, label: 'Privacidad', admin: { width: '33%' } },
        { name: 'cookies', type: 'text', required: true, localized: true, label: 'Cookies', admin: { width: '33%' } },
        { name: 'legal', type: 'text', required: true, localized: true, label: 'Aviso legal', admin: { width: '34%' } },
      ],
    },
  ],
}
