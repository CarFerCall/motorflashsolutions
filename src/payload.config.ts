import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import path from 'node:path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { PricingPlans } from './collections/PricingPlans'
import { Quotes } from './collections/Quotes'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * Adaptador de BD. Resuelve la URL de varias env vars por orden de prioridad:
 *  1. `DATABASE_URI` — nuestra propia. En dev apunta a SQLite (`file:./motorflash.db`).
 *  2. `POSTGRES_URL` — inyectada por Vercel/Prisma Postgres automáticamente.
 *  3. `DATABASE_URL` — convención estándar.
 *
 * Si la URL empieza por `postgres://` → adaptador Postgres. Si no → SQLite.
 */
const databaseUri =
  process.env.DATABASE_URI ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL ||
  'file:./motorflash.db'
const usesPostgres = /^postgres(ql)?:\/\//.test(databaseUri)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      title: 'Motorflash CMS',
      titleSuffix: '— Motorflash Ibérica',
      icons: [{ rel: 'icon', type: 'image/png', url: '/images/logo-motorflash.png' }],
    },
    components: {
      graphics: {
        Logo: '/admin/components/Logo#default',
        Icon: '/admin/components/Icon#default',
      },
      views: {
        dashboard: {
          Component: '/admin/components/Dashboard#default',
        },
      },
    },
  },
  collections: [Users, PricingPlans, Quotes],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'change-me-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: usesPostgres
    ? postgresAdapter({
        pool: { connectionString: databaseUri },
      })
    : sqliteAdapter({
        client: { url: databaseUri },
      }),
  email: nodemailerAdapter({
    defaultFromAddress: process.env.MAILER_FROM || 'no-reply@motorflash.com',
    defaultFromName: 'Motorflash Ibérica',
    transportOptions: {
      host: process.env.SMTP_HOST || 'localhost',
      port: Number(process.env.SMTP_PORT || 1025),
      secure: false,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS || '' }
        : undefined,
    },
  }),
  sharp,
})
