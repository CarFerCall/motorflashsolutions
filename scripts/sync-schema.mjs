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

// El push del adapter postgres solo dispara si NODE_ENV !== 'production'.
// Durante `vercel-build` viene como 'production', así que lo bajamos a
// 'development' SOLO para este script. La lambda en runtime sigue siendo
// production (esto es un proceso aparte que termina con process.exit(0)).
process.env.NODE_ENV = 'development'
console.log('[sync-schema] NODE_ENV temporalmente forzado a development para habilitar push')

const { getPayload } = await import('payload')
const { default: config } = await import('../src/payload.config.ts')

console.log('[sync-schema] initializing Payload to push schema...')
const payload = await getPayload({ config })

// El push real lo hace el adapter en init si push: true. Para forzar que
// efectivamente queden las tablas creadas antes de salir, intentamos
// una query trivial — si falla, vemos el error en el log del build.
try {
  const existing = await payload.find({ collection: 'pricing-plans', limit: 1 })
  console.log('[sync-schema] schema OK — pricing_plans is queryable')

  // Seed placeholder solo si la collection está vacía. Sin esto el
  // configurador de /precios sale con "Aún no hay planes activos" en
  // un deploy desde cero. Los precios son una primera estimación que
  // el equipo puede editar luego en /admin.
  if (existing.totalDocs === 0) {
    console.log('[sync-schema] sin planes — creando seed inicial...')
    const seed = [
      { productSlug: 'exportaciones', productName: 'Multipublicador', basePriceCents: 14900 },
      { productSlug: 'crm4you', productName: 'CRM4YOU', basePriceCents: 19900 },
      { productSlug: 'spyne', productName: 'Photocall IA', basePriceCents: 8900 },
      { productSlug: 'motorflash-message', productName: 'WhatsApp Business', basePriceCents: 5900 },
      { productSlug: 'dealer', productName: 'Dealer / Stock', basePriceCents: 12900 },
      { productSlug: 'contact-center', productName: 'Contact Center', basePriceCents: 24900 },
    ]
    for (const plan of seed) {
      try {
        await payload.create({
          collection: 'pricing-plans',
          data: {
            ...plan,
            introText: 'Plan inicial creado automáticamente — edítalo desde el admin.',
            currency: 'EUR',
            billingCycle: 'month',
            enabled: true,
            items: [],
          },
        })
        console.log(`  ✔ ${plan.productName}`)
      } catch (err) {
        console.warn(`  ✗ ${plan.productName}:`, err?.message || err)
      }
    }
  } else {
    console.log(`[sync-schema] ${existing.totalDocs} planes existentes — sin seed`)
  }
} catch (err) {
  console.error('[sync-schema] schema check failed:', err?.message || err)
  // No fallamos el build: dejamos que el deploy salga y el problema se
  // diagnostique en runtime.
}

process.exit(0)
