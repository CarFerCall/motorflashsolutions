import type { CollectionConfig } from 'payload'

const productSlugs = [
  'dealer',
  'exportaciones',
  'crm4you',
  'contact-center',
  'spyne',
  'motorflash-message',
  'motorflash-mobile-tracking',
  'ia',
  'soluciones-web',
  'marketing-digital',
  'portal-publicacion',
  'lead-factory',
  'soluciones-fabricantes',
  'motorflash-renting', // legado: planes antiguos en BD
  'motorflash-connect',
  'apex',
] as const

export const PricingPlans: CollectionConfig = {
  slug: 'pricing-plans',
  labels: {
    singular: 'Plan de precios',
    plural: 'Planes de precios',
  },
  admin: {
    useAsTitle: 'productName',
    description: 'Cada plan se conecta con su producto del catálogo y define lo que el cliente puede configurar en /precios/{slug}.',
    defaultColumns: ['productName', 'productSlug', 'basePriceCents', 'billingCycle', 'enabled', 'updatedAt'],
    listSearchableFields: ['productName', 'productSlug'],
    group: 'Comercial',
  },
  access: {
    // Lecturas del frontend público: cualquiera. Mutaciones: solo logueado.
    read: () => true,
  },
  fields: [
    {
      name: 'previewLink',
      type: 'ui',
      admin: {
        components: {
          Field: '/admin/components/PlanPreviewLink#default',
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'productSlug',
          type: 'select',
          required: true,
          label: 'Producto',
          options: productSlugs.map((s) => ({ value: s, label: s })),
          admin: { width: '50%' },
          unique: true,
        },
        {
          name: 'productName',
          type: 'text',
          required: true,
          label: 'Nombre comercial',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Texto introductorio',
      admin: {
        description: 'Aparece arriba del configurador. Texto plano.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'basePriceCents',
          type: 'number',
          required: true,
          label: 'Precio base (€)',
          defaultValue: 0,
          admin: {
            width: '33%',
            description: 'Escríbelo directamente en euros (p. ej. 199 o 199,50).',
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
            { value: 'EUR', label: 'Euro (€)' },
            { value: 'USD', label: 'US Dollar ($)' },
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
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
      label: '¿Activo?',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Items configurables',
      labels: { singular: 'Item', plural: 'Items' },
      admin: {
        description:
          'Inputs que verá el cliente: número de licencias, módulos opcionales, tier básico/pro/enterprise…',
        initCollapsed: false,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'itemKey',
              type: 'text',
              required: true,
              label: 'Clave (slug)',
              admin: { width: '33%', description: 'Ej. "licenses", "tier".' },
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Etiqueta visible',
              admin: { width: '67%' },
            },
          ],
        },
        {
          name: 'helpText',
          type: 'text',
          label: 'Texto de ayuda',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'select',
              required: true,
              label: 'Tipo',
              defaultValue: 'number',
              options: [
                { value: 'number', label: 'Numérico (× cantidad)' },
                { value: 'select', label: 'Desplegable (opciones con precio)' },
                { value: 'checkbox', label: 'Casilla / Add-on' },
              ],
              admin: { width: '33%' },
            },
            {
              name: 'unitPriceCents',
              type: 'number',
              required: true,
              defaultValue: 0,
              label: 'Precio unitario (€)',
              admin: {
                width: '33%',
                description:
                  'Escríbelo en euros. Numérico → precio por unidad. Casilla → precio cuando está marcada. Desplegable → déjalo en 0; el precio va dentro de cada opción.',
                components: {
                  Field: '/admin/components/PriceInput#default',
                  Cell: '/admin/components/PriceCell#default',
                },
                condition: (_data: unknown, siblingData: { type?: string }) => siblingData?.type !== 'select',
              },
            },
            {
              name: 'required',
              type: 'checkbox',
              defaultValue: false,
              label: '¿Obligatorio?',
              admin: { width: '33%' },
            },
          ],
        },
        // ===========================================================
        // Campos específicos según el tipo de item
        // (condicionalmente visibles, sin JSON)
        // ===========================================================
        {
          type: 'collapsible',
          label: 'Ajustes — Numérico',
          admin: {
            initCollapsed: false,
            condition: (_data: unknown, siblingData: { type?: string }) => siblingData?.type === 'number',
            description: 'Define el rango y la unidad que verá el cliente al elegir la cantidad.',
          },
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'numberMin', type: 'number', label: 'Mínimo', defaultValue: 1, admin: { width: '25%' } },
                { name: 'numberMax', type: 'number', label: 'Máximo', defaultValue: 100, admin: { width: '25%' } },
                { name: 'numberDefault', type: 'number', label: 'Valor por defecto', defaultValue: 1, admin: { width: '25%' } },
                {
                  name: 'numberUnit',
                  type: 'text',
                  label: 'Unidad',
                  admin: {
                    width: '25%',
                    placeholder: 'p. ej. licencia, sede, vehículo',
                    description: 'Texto en singular. Se mostrará al cliente como "29,00 € / licencia".',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'collapsible',
          label: 'Ajustes — Desplegable (opciones)',
          admin: {
            initCollapsed: false,
            condition: (_data: unknown, siblingData: { type?: string }) => siblingData?.type === 'select',
            description: 'Cada opción es un nivel/plan con su propio precio (ej. Starter, Pro, Enterprise).',
          },
          fields: [
            {
              name: 'selectOptions',
              type: 'array',
              label: 'Opciones',
              labels: { singular: 'Opción', plural: 'Opciones' },
              minRows: 2,
              admin: { initCollapsed: false },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'value', type: 'text', required: true, label: 'Clave interna', admin: { width: '25%', placeholder: 'starter, pro, enterprise' } },
                    { name: 'label', type: 'text', required: true, label: 'Etiqueta visible', admin: { width: '50%', placeholder: 'Pro (multi-sede, automatizaciones)' } },
                    {
                      name: 'priceCents',
                      type: 'number',
                      required: true,
                      defaultValue: 0,
                      label: 'Cuota (€/mes)',
                      admin: {
                        width: '25%',
                        description: 'Cuota mensual de esta opción.',
                        components: { Field: '/admin/components/PriceInput#default' },
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'setupCents',
                      type: 'number',
                      required: false,
                      defaultValue: 0,
                      label: 'Set up / arranque (€, pago único)',
                      admin: {
                        width: '50%',
                        description: 'Coste de arranque que se cobra una sola vez al contratar esta opción. Déjalo en 0 si no hay setup.',
                        components: { Field: '/admin/components/PriceInput#default' },
                      },
                    },
                    {
                      name: 'isDefault',
                      type: 'checkbox',
                      defaultValue: false,
                      label: 'Marcar como opción por defecto',
                      admin: { width: '50%' },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'collapsible',
          label: 'Ajustes — Casilla',
          admin: {
            initCollapsed: false,
            condition: (_data: unknown, siblingData: { type?: string }) => siblingData?.type === 'checkbox',
            description: 'Casilla activable. El precio es el que has puesto en "Precio unitario" arriba.',
          },
          fields: [
            { name: 'checkboxDefault', type: 'checkbox', label: 'Aparece marcada por defecto', defaultValue: false },
          ],
        },
      ],
    },
  ],
}
