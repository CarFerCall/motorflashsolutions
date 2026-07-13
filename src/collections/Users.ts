import type { CollectionConfig } from 'payload'

// Solo usuarios autenticados pueden operar sobre la colección `users`.
// Cierra `first-register` desde el admin: sin sesión no se pueden crear
// nuevos admins vía panel. El registro del PRIMER admin (cuando hay 0
// usuarios en BD) se hace vía `npm run seed` con ADMIN_EMAIL/ADMIN_PASSWORD.
const isAuthenticated = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'createdAt'],
    group: 'Sistema',
  },
  auth: true,
  access: {
    read: isAuthenticated,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
  ],
}
