/**
 * Sincroniza el esquema de Postgres con las colecciones de Payload.
 *
 * Se ejecuta durante el build de Vercel (vercel-build script). En ese
 * momento POSTGRES_URL está disponible y podemos arrancar Payload, que
 * con `push: true` en el adapter dispara el sync vía drizzle-kit.
 *
 * Salimos silenciosamente si no hay URL Postgres — evita romper builds
 * locales que solo usan SQLite.
 */
const hasPostgres = /^postgres(ql)?:\/\//i.test(
  process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL || '',
)
if (!hasPostgres) {
  console.log('[sync-schema] no postgres URL detected, skipping')
  process.exit(0)
}

const { getPayload } = await import('payload')
const { default: config } = await import('../src/payload.config.ts')

console.log('[sync-schema] initializing Payload to push schema...')
const payload = await getPayload({ config })

// El push real lo hace el adapter en init si push: true. Para forzar que
// efectivamente queden las tablas creadas antes de salir, intentamos
// una query trivial — si falla, vemos el error en el log del build.
try {
  await payload.find({ collection: 'pricing-plans', limit: 1 })
  console.log('[sync-schema] schema OK — pricing_plans is queryable')
} catch (err) {
  console.error('[sync-schema] schema check failed:', err?.message || err)
  // No fallamos el build: dejamos que el deploy salga y el problema se
  // diagnostique en runtime.
}

process.exit(0)
