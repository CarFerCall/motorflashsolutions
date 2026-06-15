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
      basePriceCents: 7200, // 72 €/mes licencia (1 usuario incluido)
      items: [
        { itemKey: 'contratacion', label: 'Tipo de contratación', helpText: 'El set up incluye configuración inicial del CRM, canales de publicación y formación al equipo (2 semanas).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'nueva', label: 'Nueva implantación (incluye set up + formación)', priceCents: 0, setupCents: 35000, isDefault: true },
          { value: 'existente', label: 'Cliente existente (sin set up)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'licencias_adicionales', label: 'Licencias adicionales', helpText: 'Cada licencia incluye 1 usuario activo. La primera viene en la cuota base.', type: 'number', unitPriceCents: 7200, required: false, numberMin: 0, numberMax: 100, numberDefault: 0, numberUnit: 'licencia' },
        { itemKey: 'sim_tracking', label: 'SIM Tracking', helpText: 'Tracking de llamadas móviles del equipo comercial con grabación.', type: 'checkbox', unitPriceCents: 1800, required: false, checkboxDefault: false },
        { itemKey: 'whatsapp_business', label: 'WhatsApp Business API', helpText: 'Línea oficial de WhatsApp Business integrada al CRM con multi-agente.', type: 'checkbox', unitPriceCents: 1800, required: false, checkboxDefault: false },
        { itemKey: 'api_terceros', label: 'API con terceros', helpText: 'Conexiones API a tu DMS, ERP, sistemas de financiación o herramientas externas.', type: 'checkbox', unitPriceCents: 10000, required: false, checkboxDefault: false },
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
      basePriceCents: 15000, // 150 €/mes — licencia básica
      items: [
        { itemKey: 'tier_licencia', label: 'Tipo de licencia', helpText: 'WhatsApp Business API con desarrollo propio que mide la conversión del canal por excelencia.', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'estandar', label: 'Estándar (llamadas, email, click-to-call)', priceCents: 0, setupCents: 0, isDefault: true },
          { value: 'whatsapp', label: 'Con WhatsApp Business API (180 €/mes)', priceCents: 3000, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'minutos_mes', label: 'Llamadas estimadas al mes (minutos)', helpText: 'Tarifa 0,62 €/minuto. TMC promedio 2,5 min · máximo 3,5 min. Ejemplo: 500 prospectos = 1.250 minutos = 775 €/mes.', type: 'number', unitPriceCents: 62, required: true, numberMin: 0, numberMax: 10000, numberDefault: 1250, numberUnit: 'min' },
        { itemKey: 'emails_mes', label: 'Emails gestionados al mes', helpText: 'Tarifa 0,55 €/email atendido por el equipo.', type: 'number', unitPriceCents: 55, required: false, numberMin: 0, numberMax: 5000, numberDefault: 0, numberUnit: 'email' },
        { itemKey: 'lineas_virtuales', label: 'Teléfonos virtuales (líneas)', helpText: 'Tarifa 5,35 €/línea/mes. Útil para tracking por canal o ubicación.', type: 'number', unitPriceCents: 535, required: false, numberMin: 0, numberMax: 20, numberDefault: 0, numberUnit: 'línea' },
        { itemKey: 'multidioma', label: 'Servicio multidioma (EN/FR/PT)', helpText: 'Castellano y catalán incluidos. Inglés, francés y portugués como add-on.', type: 'checkbox', unitPriceCents: 5000, required: false, checkboxDefault: false },
        { itemKey: 'mystery_calls', label: 'Mystery Calls trimestrales', helpText: 'Realizamos llamadas anónimas a tu red para evaluar la atención comercial.', type: 'checkbox', unitPriceCents: 9900, required: false, checkboxDefault: false },
      ],
    },
    {
      productSlug: 'soluciones-web',
      productName: 'Servicios Web',
      basePriceCents: 6000,
      items: [
        { itemKey: 'tier', label: 'Producto', helpText: 'Elige el nivel de proyecto web. La base es Única (60 €/mes, sin setup); Silver y Platinum suman cuota + un coste de arranque (pago único).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'unica', label: 'Única (web práctica · 60 €/mes)', priceCents: 0, setupCents: 0, isDefault: true },
          { value: 'silver', label: 'Silver (stock + financiera · 100 €/mes)', priceCents: 4000, setupCents: 30000, isDefault: false },
          { value: 'platinum', label: 'Platinum (web completa + CMS · 420 €/mes)', priceCents: 36000, setupCents: 80000, isDefault: false },
        ] },
        { itemKey: 'marcas_adicionales', label: 'Marcas / mundos adicionales', helpText: 'Cada marca extra (Audi, VW, Skoda…) se factura como un mundo independiente.', type: 'number', unitPriceCents: 10000, required: false, numberMin: 0, numberMax: 10, numberDefault: 0, numberUnit: 'marca' },
        { itemKey: 'seo_continuo', label: 'Mejora continua SEO', helpText: 'Optimización mensual del tráfico orgánico (servicio de Marketing Digital).', type: 'checkbox', unitPriceCents: 20000, required: false, checkboxDefault: false },
        { itemKey: 'sea_google', label: 'Gestión campañas Google Ads (SEA)', type: 'checkbox', unitPriceCents: 30000, required: false, checkboxDefault: false },
        { itemKey: 'sea_meta', label: 'Gestión campañas Meta (RRSS)', type: 'checkbox', unitPriceCents: 20000, required: false, checkboxDefault: false },
        { itemKey: 'chatweb', label: 'CHATWEB MF (chat + bot + IA)', helpText: 'Chat en directo con posibilidad de bot automático o IA conversacional.', type: 'checkbox', unitPriceCents: 10000, required: false, checkboxDefault: false },
        { itemKey: 'gestor_leads', label: 'Gestor de Leads (Contact Center)', type: 'checkbox', unitPriceCents: 15000, required: false, checkboxDefault: false },
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

  // Migración puntual CRM4YOU: el seed antiguo tenía items
  // 'licencias' y 'whatsapp_integration' con precios que no encajan
  // con las tarifas del PDF (72 €/mes + 350 € setup + 18 €/mes
  // SIM/WhatsApp + 100 €/mes API). Si el plan en BD aún tiene el
  // item antiguo 'whatsapp_integration', sustituimos todo por el seed
  // nuevo.
  {
    const { docs: crmDocs } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'crm4you' } },
      limit: 1,
    })
    const existingCrm = crmDocs[0]
    if (existingCrm && Array.isArray(existingCrm.items) && existingCrm.items.some((i) => i.itemKey === 'whatsapp_integration')) {
      const newCrmItems = [
        { itemKey: 'contratacion', label: 'Tipo de contratación', helpText: 'El set up incluye configuración inicial del CRM, canales de publicación y formación al equipo (2 semanas).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'nueva', label: 'Nueva implantación (incluye set up + formación)', priceCents: 0, setupCents: 35000, isDefault: true },
          { value: 'existente', label: 'Cliente existente (sin set up)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'licencias_adicionales', label: 'Licencias adicionales', helpText: 'Cada licencia incluye 1 usuario activo. La primera viene en la cuota base.', type: 'number', unitPriceCents: 7200, required: false, numberMin: 0, numberMax: 100, numberDefault: 0, numberUnit: 'licencia' },
        { itemKey: 'sim_tracking', label: 'SIM Tracking', helpText: 'Tracking de llamadas móviles del equipo comercial con grabación.', type: 'checkbox', unitPriceCents: 1800, required: false, checkboxDefault: false },
        { itemKey: 'whatsapp_business', label: 'WhatsApp Business API', helpText: 'Línea oficial de WhatsApp Business integrada al CRM con multi-agente.', type: 'checkbox', unitPriceCents: 1800, required: false, checkboxDefault: false },
        { itemKey: 'api_terceros', label: 'API con terceros', helpText: 'Conexiones API a tu DMS, ERP, sistemas de financiación o herramientas externas.', type: 'checkbox', unitPriceCents: 10000, required: false, checkboxDefault: false },
      ]
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: existingCrm.id,
          data: { basePriceCents: 7200, items: newCrmItems },
        })
        console.log('[sync-schema] ↻ CRM4YOU: items migrados a tarifas del PDF (72 €/mes + 350 € setup + add-ons reales)')
      } catch (err) {
        console.warn('[sync-schema] ✗ migración CRM4YOU:', err?.message || err)
      }
    }
  }

  // Migración puntual Contact Center: el seed antiguo tenía un item
  // 'horas_mes' que ya no encaja con las tarifas del PDF (licencia +
  // minutos + emails + líneas). Si el plan en BD aún tiene horas_mes,
  // sustituimos sus items y basePriceCents por los del nuevo seed.
  {
    const { docs: cc } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'contact-center' } },
      limit: 1,
    })
    const existingCc = cc[0]
    if (existingCc && Array.isArray(existingCc.items) && existingCc.items.some((i) => i.itemKey === 'horas_mes')) {
      const newCcSeed = [
        { itemKey: 'tier_licencia', label: 'Tipo de licencia', helpText: 'WhatsApp Business API con desarrollo propio que mide la conversión del canal por excelencia.', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'estandar', label: 'Estándar (llamadas, email, click-to-call)', priceCents: 0, setupCents: 0, isDefault: true },
          { value: 'whatsapp', label: 'Con WhatsApp Business API (180 €/mes)', priceCents: 3000, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'minutos_mes', label: 'Llamadas estimadas al mes (minutos)', helpText: 'Tarifa 0,62 €/minuto. TMC promedio 2,5 min · máximo 3,5 min. Ejemplo: 500 prospectos = 1.250 minutos = 775 €/mes.', type: 'number', unitPriceCents: 62, required: true, numberMin: 0, numberMax: 10000, numberDefault: 1250, numberUnit: 'min' },
        { itemKey: 'emails_mes', label: 'Emails gestionados al mes', helpText: 'Tarifa 0,55 €/email atendido por el equipo.', type: 'number', unitPriceCents: 55, required: false, numberMin: 0, numberMax: 5000, numberDefault: 0, numberUnit: 'email' },
        { itemKey: 'lineas_virtuales', label: 'Teléfonos virtuales (líneas)', helpText: 'Tarifa 5,35 €/línea/mes. Útil para tracking por canal o ubicación.', type: 'number', unitPriceCents: 535, required: false, numberMin: 0, numberMax: 20, numberDefault: 0, numberUnit: 'línea' },
        { itemKey: 'multidioma', label: 'Servicio multidioma (EN/FR/PT)', helpText: 'Castellano y catalán incluidos. Inglés, francés y portugués como add-on.', type: 'checkbox', unitPriceCents: 5000, required: false, checkboxDefault: false },
        { itemKey: 'mystery_calls', label: 'Mystery Calls trimestrales', helpText: 'Realizamos llamadas anónimas a tu red para evaluar la atención comercial.', type: 'checkbox', unitPriceCents: 9900, required: false, checkboxDefault: false },
      ]
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: existingCc.id,
          data: { basePriceCents: 15000, items: newCcSeed },
        })
        console.log('[sync-schema] ↻ Contact Center: items migrados a tarifas del PDF (licencia + minutos + emails + líneas)')
      } catch (err) {
        console.warn('[sync-schema] ✗ migración Contact Center:', err?.message || err)
      }
    }
  }

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
        // Migración suave: si algún select option del seed tiene
        // setupCents > 0 pero el plan en BD aún no lo tiene, lo
        // sincronizamos. Cubrir nuestro caso de añadir set up a tier
        // de Servicios Web sin perder las personalizaciones del admin.
        let mergedItems = existingPlan.items
        let setupMigrated = false
        for (const seedItem of plan.items ?? []) {
          if (seedItem.type !== 'select' || !Array.isArray(seedItem.selectOptions)) continue
          const bdItem = mergedItems.find((i) => i.itemKey === seedItem.itemKey)
          if (!bdItem || !Array.isArray(bdItem.selectOptions)) continue
          for (const seedOpt of seedItem.selectOptions) {
            if (!seedOpt.setupCents || seedOpt.setupCents <= 0) continue
            const bdOpt = bdItem.selectOptions.find((o) => o.value === seedOpt.value)
            if (!bdOpt) continue
            if (!bdOpt.setupCents || bdOpt.setupCents <= 0) {
              bdOpt.setupCents = seedOpt.setupCents
              setupMigrated = true
            }
          }
        }
        if (setupMigrated) {
          try {
            await payload.update({
              collection: 'pricing-plans',
              id: existingPlan.id,
              data: { items: mergedItems },
            })
            console.log(`[sync-schema] ↻ ${plan.productName}: setupCents añadidos a opciones de tier`)
          } catch (err) {
            console.warn(`[sync-schema] ✗ ${plan.productName} setup migrate:`, err?.message || err)
          }
        } else {
          console.log(`[sync-schema] = ${plan.productName}: ya tiene items, sin tocar`)
        }
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
            { label: 'Ecosistema técnico', kind: 'link', url: '/ecosistema-tecnico' },
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
      //  3. Si no existe el item "Ecosistema técnico" en el nivel raíz,
      //     lo añadimos justo antes de "Precios".
      const hasEcosistema = (Array.isArray(menu.items) ? menu.items : []).some((it) => it.url === '/ecosistema-tecnico')
      if (!hasEcosistema) {
        const items2 = Array.isArray(menu.items) ? [...menu.items] : []
        const preciosIdx = items2.findIndex((it) => it.url === '/precios')
        const newItem = { label: 'Ecosistema técnico', kind: 'link', url: '/ecosistema-tecnico' }
        if (preciosIdx >= 0) items2.splice(preciosIdx, 0, newItem)
        else items2.push(newItem)
        try {
          await payload.updateGlobal({ slug: 'main-menu', data: { items: items2 } })
          menu.items = items2
          console.log('[sync-schema] ↻ menú: + Ecosistema técnico añadido al nivel raíz')
        } catch (err) {
          console.warn('[sync-schema] ✗ menú añadir ecosistema:', err?.message || err)
        }
      }
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
      // Dedup: si por una migración anterior quedaron sub-links
      // duplicados con la misma URL en un dropdown, dejar solo la
      // primera ocurrencia.
      let dedupedAny = false
      for (const item of items) {
        if (item.kind !== 'dropdown' || !Array.isArray(item.children)) continue
        const seenUrls = new Set()
        const deduped = []
        for (const c of item.children) {
          if (c.url && seenUrls.has(c.url)) {
            dedupedAny = true
            continue
          }
          if (c.url) seenUrls.add(c.url)
          deduped.push(c)
        }
        if (deduped.length !== item.children.length) {
          item.children = deduped
        }
      }
      if (dedupedAny) {
        touched = true
        console.log('[sync-schema] ↻ menú: sub-links duplicados eliminados')
      }
      if (touched) {
        try {
          await payload.updateGlobal({ slug: 'main-menu', data: { items } })
          console.log('[sync-schema] ↻ menú principal actualizado')
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
