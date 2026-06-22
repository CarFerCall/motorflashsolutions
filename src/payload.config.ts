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
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { ProductContent } from './collections/ProductContent'
import { SuccessCases } from './collections/SuccessCases'
import { MainMenu } from './globals/MainMenu'
import { FooterGlobal } from './globals/FooterGlobal'
import { ContactGlobal } from './globals/ContactGlobal'
import { PricingGlobal } from './globals/PricingGlobal'
import { CompanyGlobal } from './globals/CompanyGlobal'
import { HomeGlobal } from './globals/HomeGlobal'

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
// En Vercel priorizamos las vars Postgres reales y ignoramos cualquier
// DATABASE_URI heredada del .env local (que apuntaría a SQLite). En local
// hacemos lo contrario: DATABASE_URI manda para que el desarrollador
// pueda forzar la base que quiera sin pisar nada.
const databaseUri = process.env.VERCEL_ENV
  ? process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.PRISMA_DATABASE_URL ||
    process.env.DATABASE_URI ||
    'file:./motorflash.db'
  : process.env.DATABASE_URI ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    'file:./motorflash.db'
const usesPostgres = /^postgres(ql)?:\/\//.test(databaseUri)

const serverURL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
  'http://localhost:3100'

export default buildConfig({
  serverURL,
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      title: 'Motorflash CMS',
      titleSuffix: '— Motorflash Ibérica',
      icons: [{ rel: 'icon', type: 'image/png', url: '/images/logo-motorflash.png' }],
    },
    livePreview: {
      url: ({ data, collectionConfig }) => {
        const slug = (data as any)?.slug
        if (collectionConfig?.slug === 'pages' && slug) {
          return `${serverURL}/${slug}?livePreview=true`
        }
        return serverURL
      },
      breakpoints: [
        { name: 'mobile', label: 'Móvil', width: 375, height: 667 },
        { name: 'tablet', label: 'Tablet', width: 768, height: 1024 },
        { name: 'desktop', label: 'Desktop', width: 1440, height: 900 },
      ],
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
  collections: [Users, Pages, PricingPlans, Quotes, Media, Products, ProductContent, SuccessCases],
  globals: [MainMenu, FooterGlobal, ContactGlobal, PricingGlobal, CompanyGlobal, HomeGlobal],
  // Localización nativa: todo campo con `localized: true` se guarda
  // en columnas separadas por idioma. El frontend pasa el locale
  // activo en cada query (via payload.findGlobal({ ..., locale })).
  // Si una traducción falta, fallback al defaultLocale.
  localization: {
    locales: [
      { code: 'es', label: 'Español' },
      { code: 'ca', label: 'Català' },
      { code: 'en', label: 'English' },
      { code: 'zh', label: '中文' },
    ],
    defaultLocale: 'es',
    fallback: true,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'change-me-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: usesPostgres
    ? postgresAdapter({
        pool: { connectionString: databaseUri },
        // En este proyecto no usamos migraciones: dejamos que el adapter
        // sincronice el esquema con las colecciones al arrancar. Suficiente
        // para un sitio de marketing/CMS donde el schema lo controla el código.
        push: true,
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
