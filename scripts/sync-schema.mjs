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

  // Catálogo de seed: planes iniciales con sus items configurables.
  // En primer deploy se crean enteros. En deploys posteriores: si un
  // plan ya existe NO se toca el precio base ni los items (para no
  // pisar cambios manuales del admin); solo añadimos los planes que
  // todavía no estén.
  const seed = [
    {
      productSlug: 'exportaciones',
      productName: 'Multipublicador',
      basePriceCents: 14900,
      items: [
        { itemKey: 'portales_premium', label: 'Portales premium adicionales', helpText: 'Coches.net, AutoScout24, etc.', type: 'number', unitPriceCents: 2900, required: false, numberMin: 0, numberMax: 10, numberDefault: 0, numberUnit: 'portal' },
        { itemKey: 'auto_optimization', label: 'Optimización IA de fichas', helpText: 'Reescritura automática de descripciones para SEO.', type: 'checkbox', unitPriceCents: 4900, required: false, checkboxDefault: false },
      ],
    },
    {
      productSlug: 'crm4you',
      productName: 'CRM4YOU',
      basePriceCents: 19900,
      items: [
        { itemKey: 'licencias', label: 'Licencias adicionales', helpText: 'Cada licencia incluye 1 usuario.', type: 'number', unitPriceCents: 2900, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'licencia' },
        { itemKey: 'tier', label: 'Tipo de plan', helpText: '', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'starter', label: 'Starter', priceCents: 0, isDefault: true },
          { value: 'pro', label: 'Pro (multi-sede, automatizaciones)', priceCents: 9900, isDefault: false },
          { value: 'enterprise', label: 'Enterprise (API + soporte VIP)', priceCents: 24900, isDefault: false },
        ] },
        { itemKey: 'whatsapp_integration', label: 'Integración WhatsApp Business', helpText: 'Conecta CRM con chat omnicanal.', type: 'checkbox', unitPriceCents: 5900, required: false, checkboxDefault: false },
      ],
    },
    {
      productSlug: 'spyne',
      productName: 'Photocall IA',
      basePriceCents: 8900,
      items: [
        { itemKey: 'photos_extra', label: 'Lote de fotos extra', helpText: '500 fotos / mes adicionales.', type: 'number', unitPriceCents: 3900, required: false, numberMin: 0, numberMax: 20, numberDefault: 0, numberUnit: 'lote' },
        { itemKey: 'video_360', label: 'Vídeo 360° automático', helpText: 'Por cada vehículo procesado.', type: 'checkbox', unitPriceCents: 2900, required: false, checkboxDefault: true },
      ],
    },
    {
      productSlug: 'motorflash-message',
      productName: 'WhatsApp Business',
      basePriceCents: 5900,
      items: [
        { itemKey: 'agentes', label: 'Agentes adicionales', helpText: 'Cada agente puede gestionar chats simultáneos.', type: 'number', unitPriceCents: 1900, required: false, numberMin: 0, numberMax: 20, numberDefault: 0, numberUnit: 'agente' },
        { itemKey: 'ia_respuestas', label: 'IA de respuestas automáticas', helpText: 'Genera respuestas y concierta citas sin intervención.', type: 'checkbox', unitPriceCents: 3900, required: false, checkboxDefault: false },
      ],
    },
    {
      productSlug: 'dealer',
      productName: 'Dealer / Stock',
      basePriceCents: 12900,
      items: [
        { itemKey: 'usuarios', label: 'Usuarios adicionales', type: 'number', unitPriceCents: 1500, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'usuario' },
        { itemKey: 'jato_eurotax', label: 'JATO + EUROTAX unificado', helpText: 'Equipamiento unificado en cada vehículo.', type: 'checkbox', unitPriceCents: 4900, required: false, checkboxDefault: true },
      ],
    },
    {
      productSlug: 'contact-center',
      productName: 'Contact Center',
      basePriceCents: 24900,
      items: [
        { itemKey: 'horas_mes', label: 'Horas de atención al mes', type: 'number', unitPriceCents: 1900, required: true, numberMin: 50, numberMax: 1000, numberDefault: 100, numberUnit: 'hora' },
        { itemKey: 'quality_monitoring', label: 'Quality Monitoring con IA', helpText: 'Análisis automático del 100% de las llamadas.', type: 'checkbox', unitPriceCents: 4900, required: false, checkboxDefault: false },
      ],
    },
  ]

  const { docs: existingPlans } = await payload.find({ collection: 'pricing-plans', limit: 100 })
  const bySlug = new Map(existingPlans.map((p) => [p.productSlug, p]))

  for (const plan of seed) {
    const existingPlan = bySlug.get(plan.productSlug)
    if (existingPlan) {
      // Si ya existe pero no tiene items, le inyectamos los items del
      // seed sin tocar precio ni nada más (migración suave para deploys
      // anteriores). Si ya tenía items, no lo tocamos.
      const hasItems = Array.isArray(existingPlan.items) && existingPlan.items.length > 0
      if (hasItems) {
        console.log(`[sync-schema] = ${plan.productName}: ya tiene items, sin tocar`)
        continue
      }
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: existingPlan.id,
          data: { items: plan.items },
        })
        console.log(`[sync-schema] ↻ ${plan.productName}: items añadidos (${plan.items.length})`)
      } catch (err) {
        console.warn(`[sync-schema] ✗ ${plan.productName} update:`, err?.message || err)
      }
      continue
    }
    try {
      await payload.create({
        collection: 'pricing-plans',
        data: {
          ...plan,
          introText: 'Plan inicial creado automáticamente — edítalo desde el admin.',
          currency: 'EUR',
          billingCycle: 'month',
          enabled: true,
        },
      })
      console.log(`[sync-schema] + ${plan.productName} (${plan.items.length} items)`)
    } catch (err) {
      console.warn(`[sync-schema] ✗ ${plan.productName}:`, err?.message || err)
    }
  }
} catch (err) {
  console.error('[sync-schema] schema check failed:', err?.message || err)
  // No fallamos el build: dejamos que el deploy salga y el problema se
  // diagnostique en runtime.
}

process.exit(0)
