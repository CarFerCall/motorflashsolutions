import type { GlobalConfig } from 'payload'

/**
 * Menú principal del sitio. Editable 100% desde el admin: arrastra los
 * items para reordenarlos, añade dropdowns con sub-enlaces y configura
 * el botón CTA de la derecha (Contacto, "Empezar", lo que toque).
 */
export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  label: 'Menú principal',
  admin: {
    description: 'Configura los enlaces de la barra de navegación. Arrastra para reordenar.',
    group: 'Configuración',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Items del menú',
      labels: { singular: 'Item', plural: 'Items' },
      admin: {
        initCollapsed: false,
        description: 'Cada item es un enlace en la barra. Si eliges "Submenú" se convierte en un desplegable.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Texto visible',
              admin: { width: '50%' },
            },
            {
              name: 'kind',
              type: 'select',
              required: true,
              defaultValue: 'link',
              label: 'Tipo',
              options: [
                { value: 'link', label: 'Enlace simple' },
                { value: 'dropdown', label: 'Submenú con sub-enlaces' },
              ],
              admin: { width: '50%' },
            },
          ],
        },
        {
          type: 'row',
          admin: {
            condition: (_data: unknown, siblingData: { kind?: string }) => siblingData?.kind === 'link',
          },
          fields: [
            {
              name: 'url',
              type: 'text',
              required: false,
              label: 'URL',
              admin: {
                width: '70%',
                description: 'Ej. /precios, /contacto, /landings/black-friday o https://blog.motorflash.com',
              },
            },
            {
              name: 'newTab',
              type: 'checkbox',
              defaultValue: false,
              label: 'Abrir en pestaña nueva',
              admin: { width: '30%' },
            },
          ],
        },
        {
          name: 'children',
          type: 'array',
          label: 'Sub-enlaces',
          labels: { singular: 'Sub-enlace', plural: 'Sub-enlaces' },
          admin: {
            initCollapsed: false,
            condition: (_data: unknown, siblingData: { kind?: string }) => siblingData?.kind === 'dropdown',
            description: 'Aparecen al desplegar el submenú. Mínimo 1.',
          },
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'label', type: 'text', required: true, label: 'Texto', admin: { width: '40%' } },
                { name: 'url', type: 'text', required: true, label: 'URL', admin: { width: '40%' } },
                {
                  name: 'icon',
                  type: 'text',
                  label: 'Icono (Material Symbols)',
                  admin: {
                    width: '20%',
                    description: 'Opcional. Ej. hub, dynamic_feed. Lista en fonts.google.com/icons',
                  },
                },
              ],
            },
            {
              name: 'description',
              type: 'text',
              label: 'Descripción corta',
              admin: { description: 'Opcional. Aparece debajo del enlace en el menú desplegable.' },
            },
          ],
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Botón CTA derecho',
      admin: {
        description: 'El botón naranja a la derecha del menú. Déjalo vacío si no quieres botón.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Texto del botón', admin: { width: '50%', placeholder: 'Contacto' } },
            { name: 'url', type: 'text', label: 'URL', admin: { width: '50%', placeholder: '/contacto' } },
          ],
        },
      ],
    },
  ],
}
