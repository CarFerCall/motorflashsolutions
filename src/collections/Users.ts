import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'createdAt'],
    group: 'Sistema',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
  ],
}
