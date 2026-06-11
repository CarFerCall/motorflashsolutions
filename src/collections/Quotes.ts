import type { CollectionConfig } from 'payload'

export const Quotes: CollectionConfig = {
  slug: 'quotes',
  labels: {
    singular: 'Cotización',
    plural: 'Cotizaciones recibidas',
  },
  admin: {
    useAsTitle: 'productName',
    description: 'Solicitudes enviadas desde el configurador público de /precios/{slug}.',
    defaultColumns: ['createdAt', 'productName', 'contactName', 'email', 'totalCents', 'status'],
    listSearchableFields: ['productName', 'contactName', 'email', 'companyName'],
    group: 'Comercial',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true, // el público crea cotizaciones desde el configurador
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'productSlug',
          type: 'text',
          required: true,
          admin: { width: '50%', readOnly: true },
        },
        {
          name: 'productName',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'contactName',
          type: 'text',
          required: true,
          label: 'Nombre contacto',
          admin: { width: '50%' },
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'companyName', type: 'text', label: 'Empresa', admin: { width: '50%' } },
        { name: 'phone', type: 'text', label: 'Teléfono', admin: { width: '50%' } },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Mensaje del cliente',
    },
    {
      name: 'selectedItems',
      type: 'json',
      label: 'Configuración del cliente',
      admin: {
        components: {
          Field: '/admin/components/SelectedItemsField#default',
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'totalCents',
          type: 'number',
          required: true,
          label: 'Total',
          admin: {
            width: '33%',
            components: {
              Field: '/admin/components/PriceInput#default',
              Cell: '/admin/components/PriceCell#default',
            },
          },
        },
        {
          name: 'currency',
          type: 'select',
          required: true,
          defaultValue: 'EUR',
          options: [
            { value: 'EUR', label: 'EUR' },
            { value: 'USD', label: 'USD' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'billingCycle',
          type: 'select',
          required: true,
          defaultValue: 'month',
          options: [
            { value: 'month', label: 'Mensual' },
            { value: 'year', label: 'Anual' },
            { value: 'one_off', label: 'Pago único' },
          ],
          admin: { width: '33%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'status',
          type: 'select',
          required: true,
          defaultValue: 'new',
          label: 'Estado',
          options: [
            { value: 'new', label: 'Nueva' },
            { value: 'contacted', label: 'Contactado' },
            { value: 'quoted', label: 'Presupuesto enviado' },
            { value: 'won', label: 'Ganada' },
            { value: 'lost', label: 'Perdida' },
          ],
          admin: {
            width: '50%',
            components: { Cell: '/admin/components/StatusCell#default' },
          },
        },
        {
          name: 'contactedAt',
          type: 'date',
          label: 'Contactado el',
          admin: { width: '50%' },
        },
      ],
    },
  ],
}
