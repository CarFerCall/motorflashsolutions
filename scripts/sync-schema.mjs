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
    {
      productSlug: 'motorflash-connect',
      productName: 'MotorFlash Connect',
      basePriceCents: 49900,
      items: [
        { itemKey: 'contratos_mes', label: 'Vídeos generados al mes', helpText: 'Cantidad de vídeos personalizados que envías mensualmente.', type: 'number', unitPriceCents: 200, required: true, numberMin: 100, numberMax: 5000, numberDefault: 250, numberUnit: 'vídeo' },
        { itemKey: 'tier', label: 'Plan', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'starter', label: 'Starter (1 marca, email)', priceCents: 0, isDefault: true },
          { value: 'pro', label: 'Pro (multi-marca, email + WhatsApp)', priceCents: 19900, isDefault: false },
          { value: 'enterprise', label: 'Enterprise (multi-tenant + API + soporte VIP)', priceCents: 49900, isDefault: false },
        ] },
        { itemKey: 'integracion_crm', label: 'Integración API con tu CRM/ERP', helpText: 'Sincronización automática de cartera y respuestas vía webhooks.', type: 'checkbox', unitPriceCents: 9900, required: false, checkboxDefault: false },
        { itemKey: 'motor_campanas', label: 'Motor de campañas todo el año', helpText: 'Campañas estacionales, fecha fija y por audiencia más allá del fin de renting.', type: 'checkbox', unitPriceCents: 14900, required: false, checkboxDefault: false },
      ],
    },
  ]

  // Migración suave: si quedan planes con el slug viejo
  // 'motorflash-renting', los renombramos a 'motorflash-connect'
  // antes de procesar el seed (el front ya no acepta el slug viejo).
  {
    const { docs: legacy } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'motorflash-renting' } },
      limit: 10,
    })
    for (const lp of legacy) {
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: lp.id,
          data: { productSlug: 'motorflash-connect' },
        })
        console.log(`[sync-schema] ↻ plan ${lp.productName}: productSlug motorflash-renting → motorflash-connect`)
      } catch (err) {
        console.warn(`[sync-schema] ✗ migración slug plan ${lp.productName}:`, err?.message || err)
      }
    }
  }

  const { docs: existingPlans } = await payload.find({ collection: 'pricing-plans', limit: 100 })
  const bySlug = new Map(existingPlans.map((p) => [p.productSlug, p]))

  for (const plan of seed) {
    const existingPlan = bySlug.get(plan.productSlug)
    if (existingPlan) {
      // Si el nombre comercial en BD no coincide con el seed, lo
      // sincronizamos sin tocar precio ni items. Sirve para rebrandings
      // (p. ej. "MotorFlash Renting" → "MotorFlash Connect").
      if (existingPlan.productName !== plan.productName) {
        try {
          await payload.update({
            collection: 'pricing-plans',
            id: existingPlan.id,
            data: { productName: plan.productName },
          })
          console.log(`[sync-schema] ↻ ${existingPlan.productName} → ${plan.productName} (nombre actualizado)`)
        } catch (err) {
          console.warn(`[sync-schema] ✗ rename ${existingPlan.productName}:`, err?.message || err)
        }
      }
      // Si ya existe pero no tiene items, le inyectamos los items del
      // seed sin tocar precio ni nada más. Si ya tenía items, no lo
      // tocamos para no pisar cambios manuales del admin.
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

  // -------------------------------------------------------------------
  // Seed del menú principal si está vacío
  // -------------------------------------------------------------------
  try {
    const menu = await payload.findGlobal({ slug: 'main-menu' })
    if (!menu?.items || menu.items.length === 0) {
      console.log('[sync-schema] sin menú — creando seed inicial...')
      await payload.updateGlobal({
        slug: 'main-menu',
        data: {
          items: [
            { label: 'Inicio', kind: 'link', url: '/' },
            {
              label: 'Servicios',
              kind: 'dropdown',
              children: [
                { label: 'Dealer / Stock', url: '/servicios/dealer', icon: 'inventory_2' },
                { label: 'Multipublicador', url: '/servicios/exportaciones', icon: 'dynamic_feed' },
                { label: 'CRM4YOU', url: '/servicios/crm4you', icon: 'hub' },
                { label: 'Contact Center', url: '/servicios/contact-center', icon: 'support_agent' },
                { label: 'Photocall IA', url: '/servicios/spyne', icon: 'photo_camera' },
                { label: 'WhatsApp Business', url: '/servicios/motorflash-message', icon: 'chat' },
                { label: 'Motorflash IA', url: '/servicios/ia', icon: 'psychology' },
                { label: 'MotorFlash Connect', url: '/servicios/motorflash-connect', icon: 'autorenew' },
                { label: 'Lead Exclusive', url: '/servicios/lead-factory', icon: 'star' },
                { label: 'Ver catálogo completo', url: '/servicios', icon: 'arrow_forward' },
              ],
            },
            { label: 'Precios', kind: 'link', url: '/precios' },
            { label: 'Casos de éxito', kind: 'link', url: '/historias-de-exito' },
            { label: 'Compañía', kind: 'link', url: '/compania' },
          ],
          cta: { label: 'Contacto', url: '/contacto' },
        },
      })
      console.log('[sync-schema] + menú principal creado')
    } else {
      // Migración idempotente:
      //  1. Si algún sub-link aún apunta a la URL vieja
      //     /servicios/motorflash-renting, lo actualizamos a la nueva.
      //  2. Si no existe MotorFlash Connect en el dropdown de Servicios,
      //     lo añadimos justo antes de Lead Exclusive.
      const items = Array.isArray(menu.items) ? [...menu.items] : []
      let touched = false
      for (const item of items) {
        if (item.kind !== 'dropdown' || !Array.isArray(item.children)) continue
        for (const c of item.children) {
          if (c.url === '/servicios/motorflash-renting') {
            c.url = '/servicios/motorflash-connect'
            c.label = 'MotorFlash Connect'
            c.icon = c.icon || 'autorenew'
            touched = true
            console.log('[sync-schema] ↻ menú: URL motorflash-renting → motorflash-connect')
          }
        }
        const hasConnect = item.children.some((c) => c.url === '/servicios/motorflash-connect')
        if (hasConnect) continue
        const isServiciosDropdown = item.children.some((c) => c.url?.startsWith?.('/servicios/'))
        if (!isServiciosDropdown) continue
        const leadIdx = item.children.findIndex((c) => c.url === '/servicios/lead-factory')
        const insertAt = leadIdx >= 0 ? leadIdx : item.children.length
        item.children.splice(insertAt, 0, {
          label: 'MotorFlash Connect',
          url: '/servicios/motorflash-connect',
          icon: 'autorenew',
        })
        touched = true
        break
      }
      if (touched) {
        try {
          await payload.updateGlobal({ slug: 'main-menu', data: { items } })
          console.log('[sync-schema] ↻ menú: + MotorFlash Connect en dropdown Servicios')
        } catch (err) {
          console.warn('[sync-schema] ✗ menú update:', err?.message || err)
        }
      } else {
        console.log(`[sync-schema] = menú principal ya tiene ${menu.items.length} items, sin tocar`)
      }
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed menú:', err?.message || err)
  }
} catch (err) {
  console.error('[sync-schema] schema check failed:', err?.message || err)
  // No fallamos el build: dejamos que el deploy salga y el problema se
  // diagnostique en runtime.
}

process.exit(0)
