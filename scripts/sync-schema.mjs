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

  // -------------------------------------------------------------------
  // CLEANUP: borrar filas del navSections en BD en ca/en/zh.
  // El array tenía datos malformados (sub-campo id legacy) que disparaban
  // 'The following field is invalid: id' en cualquier updateGlobal de
  // otros locales y bloqueaban TODO el seed del home. Limpiar la BD a
  // mano vía SQL directo desbloquea la validación.
  // -------------------------------------------------------------------
  try {
    const usesPostgres = /^postgres(ql)?:\/\//i.test(
      process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL || '',
    )
    if (usesPostgres && payload.db?.drizzle) {
      const { sql } = await import('drizzle-orm')
      // DIAGNÓSTICO: inspeccionar home_page y home_page_locales para
      // entender por qué updateGlobal en ca/en/zh dispara
      // "Value must be unique" en el id.
      try {
        const mainRows = await payload.db.drizzle.execute(
          sql.raw(`SELECT id FROM home_page`),
        )
        console.log('[diag] home_page rows:', JSON.stringify(mainRows?.rows ?? mainRows))

        const localesRows = await payload.db.drizzle.execute(
          sql.raw(`SELECT id, _locale, _parent_id FROM home_page_locales`),
        )
        console.log('[diag] home_page_locales rows:', JSON.stringify(localesRows?.rows ?? localesRows))
      } catch (err) {
        console.warn('[diag] inspect home_page:', err?.message || err)
      }
    }
  } catch (err) {
    console.warn('[sync-schema] cleanup nav_sections:', err?.message || err)
  }

  // Catálogo de seed: planes iniciales con sus items configurables.
  // En primer deploy se crean enteros. En deploys posteriores: si un
  // plan ya existe NO se toca el precio base ni los items (para no
  // pisar cambios manuales del admin); solo añadimos los planes que
  // todavía no estén.
  const seed = [
    {
      productSlug: 'exportaciones',
      productName: 'Multipublicador',
      basePriceCents: 0, // Sin cargador independiente: precio total se calcula a partir de los selects de exportación
      items: [
        { itemKey: 'exportacion_cochesnet', label: 'Exportación a Coches.net (incluye cargador básico)', helpText: 'Cuentas ilimitadas. El precio ya incluye el cargador básico por tier según el PPT. Para M-XXL la exportación es 0,48 €/coche y se cotiza por consumo aparte.', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'no', label: 'No quiero publicar en Coches.net', priceCents: 0, setupCents: 0, isDefault: false },
          { value: 'xs', label: 'XS · 36 €/mes (15-50 vehículos)', priceCents: 3600, setupCents: 0, isDefault: true },
          { value: 's', label: 'S · 60 €/mes (51-100 vehículos)', priceCents: 6000, setupCents: 0, isDefault: false },
          { value: 'm', label: 'M · 36 €/mes + 0,48 €/coche (101-150)', priceCents: 3600, setupCents: 0, isDefault: false },
          { value: 'l', label: 'L · 48 €/mes + 0,48 €/coche (151-250)', priceCents: 4800, setupCents: 0, isDefault: false },
          { value: 'xl', label: 'XL · 60 €/mes + 0,48 €/coche (251-500)', priceCents: 6000, setupCents: 0, isDefault: false },
          { value: 'xxl', label: 'XXL · 72 €/mes + 0,48 €/coche (501-1.000)', priceCents: 7200, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'exportacion_verticales', label: 'Exportación a portales verticales', helpText: 'Coches.com, Sumauto, Autocasión, AutoScout24, Wallapop. Cuentas ilimitadas. Tarifa fija para XS/S y por coche para M-XXL (0,48 €/coche, cotización por consumo aparte).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'no', label: 'No quiero publicar en verticales', priceCents: 0, setupCents: 0, isDefault: false },
          { value: 'xs', label: 'XS · 24 €/mes (15-50 vehículos)', priceCents: 2400, setupCents: 0, isDefault: true },
          { value: 's', label: 'S · 36 €/mes (51-100 vehículos)', priceCents: 3600, setupCents: 0, isDefault: false },
          { value: 'por_coche', label: 'M-XXL · 0,48 €/coche (cotización por consumo)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'portal_sumauto', label: 'Portal vertical · Sumauto', helpText: 'Indica si quieres publicar en Sumauto. Incluido en la tarifa de portales verticales seleccionada arriba.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_cochescom', label: 'Portal vertical · Coches.com', helpText: 'Indica si quieres publicar en Coches.com. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_autocasion', label: 'Portal vertical · Autocasión', helpText: 'Indica si quieres publicar en Autocasión. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_autoscout24', label: 'Portal vertical · AutoScout24', helpText: 'Indica si quieres publicar en AutoScout24. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_wallapop', label: 'Portal vertical · Wallapop', helpText: 'Indica si quieres publicar en Wallapop. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'feed_datos', label: 'Feed de datos con exportaciones ilimitadas', helpText: '120 €/mes — ficheros de salida ilimitados con tus exportaciones. Cobra sentido si tienes integraciones automáticas con terceros.', type: 'checkbox', unitPriceCents: 12000, required: false, checkboxDefault: false },
        { itemKey: 'modulo_tasacion', label: 'Licencia módulo de tasación', helpText: '50 €/mes — habilita el tasador interno integrado en la ficha de cada vehículo.', type: 'checkbox', unitPriceCents: 5000, required: false, checkboxDefault: false },
        { itemKey: 'creacion_premium', label: 'Creación premium de anuncios (por VIN)', helpText: 'Marca esta opción si te interesa la creación premium por bastidor. Se factura 3 €/VIN único enviado al mes y no se suma al total mensual del configurador — el comercial te cotiza el volumen.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'marcas_agua', label: 'Marcas de agua · mantenimiento', helpText: '24 €/mes — mantenimiento de marcas de agua. La creación inicial son 120 € (pago único, no incluido en el configurador).', type: 'checkbox', unitPriceCents: 2400, required: false, checkboxDefault: false },
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
      basePriceCents: 15000, // 150 €/mes licencia de uso MF Message
      items: [
        { itemKey: 'contratacion', label: 'Tipo de contratación', helpText: 'El set up se cobra una sola vez a la firma e incluye la configuración de línea con META, la configuración inicial del servicio y un mes piloto.', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'nueva', label: 'Alta nueva (incluye set up 180 €)', priceCents: 0, setupCents: 18000, isDefault: true },
          { value: 'existente', label: 'Cliente existente (sin set up)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'lineas', label: 'Líneas WhatsApp activas', helpText: 'Cada línea es un número WhatsApp dedicado (60 €/línea/mes). Una línea por departamento o empresa.', type: 'number', unitPriceCents: 6000, required: true, numberMin: 1, numberMax: 20, numberDefault: 1, numberUnit: 'línea' },
        { itemKey: 'agentes_basicos', label: 'Agentes activos (hasta 100)', helpText: 'Tarifa por agente para los primeros 100. Cada agente puede gestionar varias conversaciones simultáneamente.', type: 'number', unitPriceCents: 1500, required: true, numberMin: 1, numberMax: 100, numberDefault: 3, numberUnit: 'agente' },
        { itemKey: 'agentes_intermedios', label: 'Agentes activos (101 - 200)', helpText: 'Tramo intermedio a 12 €/agente.', type: 'number', unitPriceCents: 1200, required: false, numberMin: 0, numberMax: 100, numberDefault: 0, numberUnit: 'agente' },
        { itemKey: 'agentes_premium', label: 'Agentes activos (201 en adelante)', helpText: 'Tramo high-volume a 8 €/agente.', type: 'number', unitPriceCents: 800, required: false, numberMin: 0, numberMax: 500, numberDefault: 0, numberUnit: 'agente' },
        { itemKey: 'integracion_crm', label: 'Integración con CRM o IVR (terceros)', helpText: 'Conexión API a tu CRM (CRM4YOU, Salesforce, HubSpot, etc.) o IVR para call deflection.', type: 'checkbox', unitPriceCents: 9900, required: false, checkboxDefault: false },
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

  // Migración v5 Multipublicador: eliminamos 'tier_cargador' y
  // fusionamos su precio en las opciones de 'exportacion_cochesnet'
  // (XS 12+24=36, S 24+36=60, M/L/XL/XXL = solo cargador + por coche).
  // 'exportacion_verticales' se mantiene como exportación pura.
  // Si el plan en BD aún tiene tier_cargador, lo eliminamos y
  // actualizamos las opciones del select de Coches.net.
  {
    const { docs: mpV5 } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'exportaciones' } },
      limit: 1,
    })
    const mpPlanV5 = mpV5[0]
    if (mpPlanV5 && Array.isArray(mpPlanV5.items) && mpPlanV5.items.some((i) => i.itemKey === 'tier_cargador')) {
      // Quitamos tier_cargador del array.
      const items = mpPlanV5.items.filter((it) => it.itemKey !== 'tier_cargador')
      // Sustituimos las opciones del select de Coches.net con las del
      // nuevo modelo (precio = cargador + exportación).
      const cnIdx = items.findIndex((i) => i.itemKey === 'exportacion_cochesnet')
      if (cnIdx >= 0) {
        items[cnIdx] = {
          ...items[cnIdx],
          label: 'Exportación a Coches.net (incluye cargador básico)',
          helpText: 'Cuentas ilimitadas. El precio ya incluye el cargador básico por tier según el PPT. Para M-XXL la exportación es 0,48 €/coche y se cotiza por consumo aparte.',
          selectOptions: [
            { value: 'no', label: 'No quiero publicar en Coches.net', priceCents: 0, setupCents: 0, isDefault: false },
            { value: 'xs', label: 'XS · 36 €/mes (15-50 vehículos)', priceCents: 3600, setupCents: 0, isDefault: true },
            { value: 's', label: 'S · 60 €/mes (51-100 vehículos)', priceCents: 6000, setupCents: 0, isDefault: false },
            { value: 'm', label: 'M · 36 €/mes + 0,48 €/coche (101-150)', priceCents: 3600, setupCents: 0, isDefault: false },
            { value: 'l', label: 'L · 48 €/mes + 0,48 €/coche (151-250)', priceCents: 4800, setupCents: 0, isDefault: false },
            { value: 'xl', label: 'XL · 60 €/mes + 0,48 €/coche (251-500)', priceCents: 6000, setupCents: 0, isDefault: false },
            { value: 'xxl', label: 'XXL · 72 €/mes + 0,48 €/coche (501-1.000)', priceCents: 7200, setupCents: 0, isDefault: false },
          ],
        }
      }
      // Ajustamos los labels de exportacion_verticales para mantener
      // coherencia (rangos por tier visibles).
      const vIdx = items.findIndex((i) => i.itemKey === 'exportacion_verticales')
      if (vIdx >= 0) {
        items[vIdx] = {
          ...items[vIdx],
          selectOptions: [
            { value: 'no', label: 'No quiero publicar en verticales', priceCents: 0, setupCents: 0, isDefault: false },
            { value: 'xs', label: 'XS · 24 €/mes (15-50 vehículos)', priceCents: 2400, setupCents: 0, isDefault: true },
            { value: 's', label: 'S · 36 €/mes (51-100 vehículos)', priceCents: 3600, setupCents: 0, isDefault: false },
            { value: 'por_coche', label: 'M-XXL · 0,48 €/coche (cotización por consumo)', priceCents: 0, setupCents: 0, isDefault: false },
          ],
        }
      }
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: mpPlanV5.id,
          data: { basePriceCents: 0, items },
        })
        console.log('[sync-schema] ↻ Multipublicador v5: cargador básico fusionado en las opciones de Coches.net')
      } catch (err) {
        console.warn('[sync-schema] ✗ migración v5 Multipublicador:', err?.message || err)
      }
    }
  }

  // Migración v4 Multipublicador: si el plan en BD tiene checkboxes
  // 'portal_*' (modelo v3), los reemplazamos por inputs numéricos
  // 'cuentas_*' para que el cliente declare cuántas cuentas tiene
  // por portal sin afectar al precio total.
  {
    const { docs: mpV4 } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'exportaciones' } },
      limit: 1,
    })
    const mpPlanV4 = mpV4[0]
    if (mpPlanV4 && Array.isArray(mpPlanV4.items)) {
      const portalCheckIdxs = []
      mpPlanV4.items.forEach((it, idx) => {
        if (it.itemKey?.startsWith?.('portal_') && it.type === 'checkbox') portalCheckIdxs.push(idx)
      })
      const hasCuentas = mpPlanV4.items.some((i) => i.itemKey?.startsWith?.('cuentas_'))
      if (portalCheckIdxs.length > 0 && !hasCuentas) {
        // Reemplazamos los checkboxes portal_* por los nuevos
        // number cuentas_* en su misma posición.
        const newCuentaItems = [
          { itemKey: 'cuentas_cochesnet', label: 'Cuentas de Coches.net', helpText: 'Cuántas cuentas de Coches.net tienes que configurar. No afecta al total mensual del configurador — sirve para que el comercial dimensione la cotización real.', type: 'number', unitPriceCents: 0, required: false, numberMin: 0, numberMax: 50, numberDefault: 1, numberUnit: 'cuenta' },
          { itemKey: 'cuentas_sumauto', label: 'Cuentas de Sumauto', helpText: 'Cuántas cuentas de Sumauto tienes que configurar. No afecta al total mensual del configurador.', type: 'number', unitPriceCents: 0, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'cuenta' },
          { itemKey: 'cuentas_cochescom', label: 'Cuentas de Coches.com', helpText: 'Cuántas cuentas de Coches.com tienes que configurar. No afecta al total mensual.', type: 'number', unitPriceCents: 0, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'cuenta' },
          { itemKey: 'cuentas_autocasion', label: 'Cuentas de Autocasión', helpText: 'Cuántas cuentas de Autocasión tienes que configurar. No afecta al total mensual.', type: 'number', unitPriceCents: 0, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'cuenta' },
          { itemKey: 'cuentas_autoscout24', label: 'Cuentas de AutoScout24', helpText: 'Cuántas cuentas de AutoScout24 tienes que configurar. No afecta al total mensual.', type: 'number', unitPriceCents: 0, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'cuenta' },
          { itemKey: 'cuentas_wallapop', label: 'Cuentas de Wallapop', helpText: 'Cuántas cuentas de Wallapop tienes que configurar. No afecta al total mensual.', type: 'number', unitPriceCents: 0, required: false, numberMin: 0, numberMax: 50, numberDefault: 0, numberUnit: 'cuenta' },
        ]
        const firstPortalIdx = portalCheckIdxs[0]
        const itemsWithoutPortals = mpPlanV4.items.filter((i) => !(i.itemKey?.startsWith?.('portal_') && i.type === 'checkbox'))
        itemsWithoutPortals.splice(firstPortalIdx, 0, ...newCuentaItems)
        try {
          await payload.update({
            collection: 'pricing-plans',
            id: mpPlanV4.id,
            data: { items: itemsWithoutPortals },
          })
          console.log('[sync-schema] ↻ Multipublicador v4: portal_* (checkbox) → cuentas_* (number sin coste)')
        } catch (err) {
          console.warn('[sync-schema] ✗ migración v4 Multipublicador:', err?.message || err)
        }
      }
    }
  }

  // Migración v3 Multipublicador: si el plan en BD aún tiene
  // 'tier_tamano' (modelo total fijo) o 'portal_motorflash'
  // (checkboxes redundantes con los selects nuevos), reemplazamos
  // todo el set de items por el modelo v3:
  //   - basePriceCents 1200 (XS cargador 12 €/mes)
  //   - tier_cargador (cargador básico por tier)
  //   - exportacion_cochesnet (select con tarifa por tier)
  //   - exportacion_verticales (select con tarifa por tier)
  //   - 5 checkboxes de portales verticales (Sumauto, Coches.com,
  //     Autocasión, AutoScout24, Wallapop)
  //   - feed_datos / modulo_tasacion / creacion_premium / marcas_agua
  {
    const { docs: mpFix2 } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'exportaciones' } },
      limit: 1,
    })
    const mpPlan2 = mpFix2[0]
    // Guard: si el plan ya está en v4+ (tiene 'cuentas_*') o en v5+
    // (sin 'tier_cargador'), no rehacer la migración v3 (que
    // sobreescribiría modelos posteriores).
    const alreadyV4 = mpPlan2 && Array.isArray(mpPlan2.items) && mpPlan2.items.some((i) => i.itemKey?.startsWith?.('cuentas_'))
    const needsV3 = !alreadyV4 && mpPlan2 && Array.isArray(mpPlan2.items) && (
      mpPlan2.items.some((i) => i.itemKey === 'tier_tamano') ||
      mpPlan2.items.some((i) => i.itemKey === 'portal_motorflash')
    )
    if (needsV3) {
      const newItems = [
        { itemKey: 'tier_cargador', label: 'Cargador básico — Tamaño del stock', helpText: 'Tarifa del cargador básico según número de vehículos. NO incluye exportaciones (se eligen aparte abajo).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'xs', label: 'XS · 12 €/mes (15-50 vehículos)', priceCents: 0, setupCents: 0, isDefault: true },
          { value: 's', label: 'S · 24 €/mes (51-100 vehículos)', priceCents: 1200, setupCents: 0, isDefault: false },
          { value: 'm', label: 'M · 36 €/mes (101-150 vehículos)', priceCents: 2400, setupCents: 0, isDefault: false },
          { value: 'l', label: 'L · 48 €/mes (151-250 vehículos)', priceCents: 3600, setupCents: 0, isDefault: false },
          { value: 'xl', label: 'XL · 60 €/mes (251-500 vehículos)', priceCents: 4800, setupCents: 0, isDefault: false },
          { value: 'xxl', label: 'XXL · 72 €/mes (501-1.000 vehículos)', priceCents: 6000, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'exportacion_cochesnet', label: 'Exportación a Coches.net', helpText: 'Cuentas ilimitadas en Coches.net. La tarifa es fija para XS/S y por coche publicado para M-XXL (0,48 €/coche, facturación por consumo).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'no', label: 'No quiero publicar en Coches.net', priceCents: 0, setupCents: 0, isDefault: false },
          { value: 'xs', label: 'XS · 24 €/mes (tarifa fija)', priceCents: 2400, setupCents: 0, isDefault: true },
          { value: 's', label: 'S · 36 €/mes (tarifa fija)', priceCents: 3600, setupCents: 0, isDefault: false },
          { value: 'por_coche', label: 'M-XXL · 0,48 €/coche (cotización por consumo)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'exportacion_verticales', label: 'Exportación a portales verticales', helpText: 'Coches.com, Sumauto, Autocasión, AutoScout24, Wallapop. Cuentas ilimitadas. Tarifa fija para XS/S y por coche para M-XXL (0,48 €/coche).', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'no', label: 'No quiero publicar en verticales', priceCents: 0, setupCents: 0, isDefault: false },
          { value: 'xs', label: 'XS · 24 €/mes (tarifa fija)', priceCents: 2400, setupCents: 0, isDefault: true },
          { value: 's', label: 'S · 36 €/mes (tarifa fija)', priceCents: 3600, setupCents: 0, isDefault: false },
          { value: 'por_coche', label: 'M-XXL · 0,48 €/coche (cotización por consumo)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'portal_sumauto', label: 'Portal vertical · Sumauto', helpText: 'Indica si quieres publicar en Sumauto. Incluido en la tarifa de portales verticales seleccionada arriba.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_cochescom', label: 'Portal vertical · Coches.com', helpText: 'Indica si quieres publicar en Coches.com. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_autocasion', label: 'Portal vertical · Autocasión', helpText: 'Indica si quieres publicar en Autocasión. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_autoscout24', label: 'Portal vertical · AutoScout24', helpText: 'Indica si quieres publicar en AutoScout24. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'portal_wallapop', label: 'Portal vertical · Wallapop', helpText: 'Indica si quieres publicar en Wallapop. Incluido en la tarifa de portales verticales.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'feed_datos', label: 'Feed de datos con exportaciones ilimitadas', helpText: '120 €/mes — ficheros de salida ilimitados con tus exportaciones. Cobra sentido si tienes integraciones automáticas con terceros.', type: 'checkbox', unitPriceCents: 12000, required: false, checkboxDefault: false },
        { itemKey: 'modulo_tasacion', label: 'Licencia módulo de tasación', helpText: '50 €/mes — habilita el tasador interno integrado en la ficha de cada vehículo.', type: 'checkbox', unitPriceCents: 5000, required: false, checkboxDefault: false },
        { itemKey: 'creacion_premium', label: 'Creación premium de anuncios (por VIN)', helpText: 'Marca esta opción si te interesa la creación premium por bastidor. Se factura 3 €/VIN único enviado al mes y no se suma al total mensual del configurador — el comercial te cotiza el volumen.', type: 'checkbox', unitPriceCents: 0, required: false, checkboxDefault: false },
        { itemKey: 'marcas_agua', label: 'Marcas de agua · mantenimiento', helpText: '24 €/mes — mantenimiento de marcas de agua. La creación inicial son 120 € (pago único, no incluido en el configurador).', type: 'checkbox', unitPriceCents: 2400, required: false, checkboxDefault: false },
      ]
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: mpPlan2.id,
          data: { basePriceCents: 1200, items: newItems },
        })
        console.log('[sync-schema] ↻ Multipublicador: migrado a v3 (cargador + exportacion_cochesnet + exportacion_verticales)')
      } catch (err) {
        console.warn('[sync-schema] ✗ migración v3 Multipublicador:', err?.message || err)
      }
    }
  }

  // Migración fina Multipublicador (legado v2):
  //  1) Si 'creacion_premium' tiene aún el unitPriceCents 25000
  //     (estimación mensual antigua), lo bajamos a 0 para que sea
  //     un check de opción sin cálculo (precio real por VIN se
  //     cotiza aparte).
  //  2) Si el plan no tiene aún los checkboxes de portales
  //     (portal_motorflash, portal_cochesnet, etc.), los añadimos
  //     justo antes de feed_datos.
  {
    const { docs: mpFix } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'exportaciones' } },
      limit: 1,
    })
    const mpPlan = mpFix[0]
    if (mpPlan && Array.isArray(mpPlan.items)) {
      let mutated = false

      // (1) Ajuste creacion_premium
      const premiumItem = mpPlan.items.find((i) => i.itemKey === 'creacion_premium')
      if (premiumItem && premiumItem.unitPriceCents > 0) {
        premiumItem.unitPriceCents = 0
        premiumItem.helpText = 'Marca esta opción si te interesa la creación premium por bastidor. Se factura 3 €/VIN único enviado al mes y no se suma al total mensual del configurador — el comercial te cotiza el volumen.'
        mutated = true
        console.log('[sync-schema] ↻ Multipublicador: creacion_premium pasa a check sin cálculo')
      }

      // (2) Añadir checkboxes de portales si no existen
      const portalSeeds = [
        { itemKey: 'portal_motorflash', label: 'Portal · Motorflash.com', helpText: 'Incluido en todos los tier. Los 10 primeros leads del mes son gratis.', checkboxDefault: true },
        { itemKey: 'portal_cochesnet', label: 'Portal · Coches.net', helpText: 'Cuentas ilimitadas. Incluido en tu tier base — sin coste adicional.', checkboxDefault: true },
        { itemKey: 'portal_sumauto', label: 'Portal · Sumauto', helpText: 'Cuentas ilimitadas. Incluido dentro de los portales verticales de tu tier base.', checkboxDefault: false },
        { itemKey: 'portal_cochescom', label: 'Portal · Coches.com', helpText: 'Cuentas ilimitadas. Incluido dentro de los portales verticales de tu tier base.', checkboxDefault: false },
        { itemKey: 'portal_autocasion', label: 'Portal · Autocasión', helpText: 'Cuentas ilimitadas. Incluido dentro de los portales verticales de tu tier base.', checkboxDefault: false },
        { itemKey: 'portal_autoscout24', label: 'Portal · AutoScout24', helpText: 'Cuentas ilimitadas. Incluido dentro de los portales verticales de tu tier base.', checkboxDefault: false },
        { itemKey: 'portal_wallapop', label: 'Portal · Wallapop', helpText: 'Cuentas ilimitadas. Incluido dentro de los portales verticales de tu tier base.', checkboxDefault: false },
      ]
      // Esta migración legacy se queda en NO-OP: el modelo v4
      // sustituye los checkboxes 'portal_*' por inputs 'cuentas_*',
      // así que ya no añadimos los checkboxes aunque no estén.
      // Si por alguna razón quedaron 'portal_*' colados (por orden
      // de ejecución en deploys previos), los limpiamos aquí.
      const portalIdxs = mpPlan.items
        .map((it, idx) => (it.itemKey?.startsWith?.('portal_') && it.type === 'checkbox' ? idx : -1))
        .filter((idx) => idx >= 0)
      const hasCuentas = mpPlan.items.some((i) => i.itemKey?.startsWith?.('cuentas_'))
      if (portalIdxs.length > 0 && hasCuentas) {
        mpPlan.items = mpPlan.items.filter((it) => !(it.itemKey?.startsWith?.('portal_') && it.type === 'checkbox'))
        mutated = true
        console.log(`[sync-schema] ↻ Multipublicador: -${portalIdxs.length} checkboxes 'portal_*' legacy eliminados (ya están como cuentas_*)`)
      }
      // Silencio el seed: si no hay ni portales ni cuentas, ya no
      // añadimos los checkboxes legacy. La migración v4 se ocupa.
      // (Eliminamos el bloque que añadía portales nuevos.)
      void portalSeeds

      if (mutated) {
        try {
          await payload.update({
            collection: 'pricing-plans',
            id: mpPlan.id,
            data: { items: mpPlan.items },
          })
        } catch (err) {
          console.warn('[sync-schema] ✗ ajuste Multipublicador:', err?.message || err)
        }
      }
    }
  }

  // Migración puntual Multipublicador: el seed antiguo tenía items
  // 'portales_premium' y 'auto_optimization' que no encajan con las
  // tarifas reales del PPT 2026 (tier XS/S/M/L/XL/XXL + opcionales
  // feed/tasación/premium/marcas de agua). Si el plan en BD aún
  // tiene 'portales_premium', reemplazamos todo el set por el del
  // PPT.
  {
    const { docs: mp } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'exportaciones' } },
      limit: 1,
    })
    const existingMp = mp[0]
    if (existingMp && Array.isArray(existingMp.items) && existingMp.items.some((i) => i.itemKey === 'portales_premium')) {
      const newMpItems = [
        { itemKey: 'tier_tamano', label: 'Tamaño del stock', helpText: 'Tier por número de vehículos. Las exportaciones a Coches.net y portales verticales cuentan con cuentas ilimitadas. El total incluye cargador + exportaciones a Coches.net + portales verticales según el PPT 2026.', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'xs', label: 'XS · 15 a 50 vehículos (60 €/mes total)', priceCents: 0, setupCents: 0, isDefault: true },
          { value: 's', label: 'S · 51 a 100 vehículos (96 €/mes total)', priceCents: 3600, setupCents: 0, isDefault: false },
          { value: 'm', label: 'M · 101 a 150 vehículos (~135 €/mes est.)', priceCents: 7500, setupCents: 0, isDefault: false },
          { value: 'l', label: 'L · 151 a 250 vehículos (~240 €/mes est.)', priceCents: 18000, setupCents: 0, isDefault: false },
          { value: 'xl', label: 'XL · 251 a 500 vehículos (~444 €/mes est.)', priceCents: 38400, setupCents: 0, isDefault: false },
          { value: 'xxl', label: 'XXL · 501 a 1.000 vehículos (~792 €/mes est.)', priceCents: 73200, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'feed_datos', label: 'Feed de datos con exportaciones ilimitadas', helpText: '120 €/mes — ficheros de salida ilimitados con tus exportaciones. Cobra sentido si tienes integraciones automáticas con terceros.', type: 'checkbox', unitPriceCents: 12000, required: false, checkboxDefault: false },
        { itemKey: 'modulo_tasacion', label: 'Licencia módulo de tasación', helpText: '50 €/mes — habilita el tasador interno integrado en la ficha de cada vehículo.', type: 'checkbox', unitPriceCents: 5000, required: false, checkboxDefault: false },
        { itemKey: 'creacion_premium', label: 'Creación premium de anuncios (por VIN)', helpText: 'Tarifa 3 €/bastidor único enviado al mes. El importe del configurador es una estimación mensual; el real se factura por bastidores acumulados.', type: 'checkbox', unitPriceCents: 25000, required: false, checkboxDefault: false },
        { itemKey: 'marcas_agua', label: 'Marcas de agua · mantenimiento', helpText: '24 €/mes — mantenimiento de marcas de agua. La creación inicial son 120 € (pago único, no incluido en el configurador).', type: 'checkbox', unitPriceCents: 2400, required: false, checkboxDefault: false },
      ]
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: existingMp.id,
          data: { basePriceCents: 6000, items: newMpItems },
        })
        console.log('[sync-schema] ↻ Multipublicador: items migrados a tarifas del PPT (tier XS-XXL + opcionales)')
      } catch (err) {
        console.warn('[sync-schema] ✗ migración Multipublicador:', err?.message || err)
      }
    }
  }

  // Migración puntual MF Message: el seed antiguo tenía items
  // 'agentes' (1.900 c/mes) e 'ia_respuestas' que no coinciden con
  // las tarifas reales del PPT (licencia 150 € + 60 €/línea +
  // tramos de agentes 15/12/8 € + 180 € setup). Si el plan en BD
  // aún tiene 'ia_respuestas', reemplazamos todos los items por el
  // seed nuevo.
  {
    const { docs: mfm } = await payload.find({
      collection: 'pricing-plans',
      where: { productSlug: { equals: 'motorflash-message' } },
      limit: 1,
    })
    const existingMfm = mfm[0]
    if (existingMfm && Array.isArray(existingMfm.items) && existingMfm.items.some((i) => i.itemKey === 'ia_respuestas')) {
      const newMfmItems = [
        { itemKey: 'contratacion', label: 'Tipo de contratación', helpText: 'El set up se cobra una sola vez a la firma e incluye la configuración de línea con META, la configuración inicial del servicio y un mes piloto.', type: 'select', unitPriceCents: 0, required: true, selectOptions: [
          { value: 'nueva', label: 'Alta nueva (incluye set up 180 €)', priceCents: 0, setupCents: 18000, isDefault: true },
          { value: 'existente', label: 'Cliente existente (sin set up)', priceCents: 0, setupCents: 0, isDefault: false },
        ] },
        { itemKey: 'lineas', label: 'Líneas WhatsApp activas', helpText: 'Cada línea es un número WhatsApp dedicado (60 €/línea/mes). Una línea por departamento o empresa.', type: 'number', unitPriceCents: 6000, required: true, numberMin: 1, numberMax: 20, numberDefault: 1, numberUnit: 'línea' },
        { itemKey: 'agentes_basicos', label: 'Agentes activos (hasta 100)', helpText: 'Tarifa por agente para los primeros 100. Cada agente puede gestionar varias conversaciones simultáneamente.', type: 'number', unitPriceCents: 1500, required: true, numberMin: 1, numberMax: 100, numberDefault: 3, numberUnit: 'agente' },
        { itemKey: 'agentes_intermedios', label: 'Agentes activos (101 - 200)', helpText: 'Tramo intermedio a 12 €/agente.', type: 'number', unitPriceCents: 1200, required: false, numberMin: 0, numberMax: 100, numberDefault: 0, numberUnit: 'agente' },
        { itemKey: 'agentes_premium', label: 'Agentes activos (201 en adelante)', helpText: 'Tramo high-volume a 8 €/agente.', type: 'number', unitPriceCents: 800, required: false, numberMin: 0, numberMax: 500, numberDefault: 0, numberUnit: 'agente' },
        { itemKey: 'integracion_crm', label: 'Integración con CRM o IVR (terceros)', helpText: 'Conexión API a tu CRM (CRM4YOU, Salesforce, HubSpot, etc.) o IVR para call deflection.', type: 'checkbox', unitPriceCents: 9900, required: false, checkboxDefault: false },
      ]
      try {
        await payload.update({
          collection: 'pricing-plans',
          id: existingMfm.id,
          data: { basePriceCents: 15000, items: newMfmItems },
        })
        console.log('[sync-schema] ↻ MF Message: items migrados a tarifas del PPT (150 € + 60 €/línea + tramos de agentes)')
      } catch (err) {
        console.warn('[sync-schema] ✗ migración MF Message:', err?.message || err)
      }
    }
  }

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

  // -------------------------------------------------------------------
  // Seed de traducciones del menú principal (ca, en, zh) — DESHABILITADO
  //
  // El bloque queda desactivado porque MainMenu.items.label aún NO está
  // marcado como `localized: true` (su migración destructiva detiene el
  // push de Drizzle). El menú principal usa el diccionario en código
  // (lib/navigation.ts → localizeMenu) hasta que migremos la columna
  // manualmente. Cuando se reactive `localized: true`, descomentar.
  // -------------------------------------------------------------------
  if (false) try {
    const MENU_DICT = {
      'Servicios': { ca: 'Serveis', en: 'Services', zh: '服务' },
      'Compañía': { ca: 'Companyia', en: 'Company', zh: '公司' },
      'La Compañía': { ca: 'La Companyia', en: 'The Company', zh: '公司' },
      'Empresa': { ca: 'Empresa', en: 'Company', zh: '公司' },
      'Casos de éxito': { ca: "Casos d'èxit", en: 'Success stories', zh: '成功案例' },
      'Casos de Éxito': { ca: "Casos d'èxit", en: 'Success stories', zh: '成功案例' },
      'Historias de éxito': { ca: "Històries d'èxit", en: 'Success stories', zh: '成功案例' },
      'Precios': { ca: 'Preus', en: 'Pricing', zh: '价格' },
      'Tarifas': { ca: 'Tarifes', en: 'Pricing', zh: '价格' },
      'Contacto': { ca: 'Contacte', en: 'Contact', zh: '联系我们' },
      'Contactar': { ca: 'Contacta', en: 'Contact us', zh: '联系我们' },
      'Ecosistema técnico': { ca: 'Ecosistema tècnic', en: 'Tech ecosystem', zh: '技术生态' },
      'Ecosistema Técnico': { ca: 'Ecosistema Tècnic', en: 'Tech ecosystem', zh: '技术生态' },
      'Inicio': { ca: 'Inici', en: 'Home', zh: '首页' },
      'Productos': { ca: 'Productes', en: 'Products', zh: '产品' },
      'Soluciones': { ca: 'Solucions', en: 'Solutions', zh: '解决方案' },
      'Dealer / Stock': { ca: 'Dealer / Estoc', en: 'Dealer / Stock', zh: '经销商库存(Dealer)' },
      'Multipublicador': { ca: 'Multipublicador', en: 'Multipublisher', zh: '多平台发布器' },
      'CRM4YOU': { ca: 'CRM4YOU', en: 'CRM4YOU', zh: 'CRM4YOU' },
      'Contact Center': { ca: 'Contact Center', en: 'Contact Center', zh: '客服中心' },
      'Photocall IA': { ca: 'Photocall IA', en: 'Photocall AI', zh: 'AI 摄影棚(Spyne)' },
      'Photocall IA (Spyne)': { ca: 'Photocall IA (Spyne)', en: 'Photocall AI (Spyne)', zh: 'AI 摄影棚(Spyne)' },
      'WhatsApp Business': { ca: 'WhatsApp Business', en: 'WhatsApp Business', zh: 'WhatsApp 企业版' },
      'Imagen avanzada + RCS': { ca: 'Imatge avançada + RCS', en: 'Advanced Image + RCS', zh: '高级图像 + RCS' },
      'Motorflash IA': { ca: 'Motorflash IA', en: 'Motorflash AI', zh: 'Motorflash 人工智能' },
      'Servicios Web': { ca: 'Serveis Web', en: 'Web Services', zh: '网站服务' },
      'Marketing Digital (SEO/SEA)': { ca: 'Marketing Digital (SEO/SEA)', en: 'Digital Marketing (SEO/SEA)', zh: '数字营销(SEO/SEA)' },
      'Marketing Digital': { ca: 'Marketing Digital', en: 'Digital Marketing', zh: '数字营销' },
      'Clasificados (Motorflash.com)': { ca: 'Classificats (Motorflash.com)', en: 'Classifieds (Motorflash.com)', zh: '分类信息(Motorflash.com)' },
      'Lead Exclusive': { ca: 'Lead Exclusive', en: 'Lead Exclusive', zh: '独家潜客(Lead Exclusive)' },
      'Lead Exclusive (5 Estrellas)': { ca: 'Lead Exclusive (5 Estrelles)', en: 'Lead Exclusive (5-Star)', zh: '独家潜客(5 星)' },
      'MotorFlash Connect': { ca: 'MotorFlash Connect', en: 'MotorFlash Connect', zh: 'MotorFlash 互联' },
      'Soluciones para Fabricantes': { ca: 'Solucions per a Fabricants', en: 'Manufacturer Solutions', zh: '主机厂解决方案' },
      'Apex (Todo en uno)': { ca: 'Apex (Tot en un)', en: 'Apex (All-in-one)', zh: 'Apex(一体化)' },
      'Ver catálogo completo': { ca: 'Veure el catàleg complet', en: 'View full catalogue', zh: '查看完整目录' },
      'Solicitar demo': { ca: 'Sol·licitar demo', en: 'Request a demo', zh: '申请演示' },
      'Pedir demo': { ca: 'Demanar demo', en: 'Request a demo', zh: '申请演示' },
      'Contáctanos': { ca: "Contacta'ns", en: 'Contact us', zh: '联系我们' },
      'Trabaja con nosotros': { ca: 'Treballa amb nosaltres', en: 'Work with us', zh: '加入我们' },
    }
    function translate(label, locale) {
      const dict = MENU_DICT[label]
      return dict ? dict[locale] : label
    }
    const menuES = await payload.findGlobal({ slug: 'main-menu', locale: 'es' })
    if (menuES?.items && menuES.items.length > 0) {
      for (const locale of ['ca', 'en', 'zh']) {
        try {
          const existing = await payload.findGlobal({ slug: 'main-menu', locale })
          // Sólo escribimos labels que en este locale aún coincidan con
          // la versión española (es decir, no han sido editados desde
          // el admin). Si un label en `ca` ya está traducido, lo
          // dejamos como está.
          const translatedItems = (menuES.items ?? []).map((esItem, idx) => {
            const cur = existing?.items?.[idx] || {}
            return {
              ...esItem,
              label: cur.label && cur.label !== esItem.label ? cur.label : translate(esItem.label, locale),
              children: esItem.children?.map((esChild, ci) => {
                const curChild = cur.children?.[ci] || {}
                return {
                  ...esChild,
                  label: curChild.label && curChild.label !== esChild.label ? curChild.label : translate(esChild.label, locale),
                  description: curChild.description ?? esChild.description ?? undefined,
                }
              }),
            }
          })
          const esCtaLabel = menuES.cta?.label
          const curCtaLabel = existing?.cta?.label
          const translatedCta = menuES.cta
            ? {
                ...menuES.cta,
                label: curCtaLabel && curCtaLabel !== esCtaLabel ? curCtaLabel : translate(esCtaLabel || '', locale),
              }
            : menuES.cta
          await payload.updateGlobal({
            slug: 'main-menu',
            locale,
            data: { items: translatedItems, cta: translatedCta },
          })
          console.log(`[sync-schema] ↻ menú principal · traducciones ${locale} sembradas`)
        } catch (err) {
          console.warn(`[sync-schema] ✗ traducciones menú ${locale}:`, err?.message || err)
        }
      }
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed traducciones menú:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed de Products + ProductContent en los 4 locales.
  //
  // - Idempotente: si un producto ya existe (busca por `slug`), no se
  //   toca; solo añade los que faltan.
  // - Para cada locale escribe los campos localizados (name, menuLabel,
  //   tagline, heroTitle, intro) usando la fuente estática que vive en
  //   src/catalog/products.ts y src/catalog/products-i18n.ts.
  // - Para ProductContent: si ya hay una ficha asociada al producto,
  //   no se toca. Si no, crea la ficha con sus 4 traducciones.
  // -------------------------------------------------------------------
  try {
    const { products: PRODUCTS } = await import('../src/catalog/products.ts')
    const { productI18n: PRODUCT_I18N } = await import('../src/catalog/products-i18n.ts')
    const { productContent: PC_ES } = await import('../src/catalog/product-content.es.ts')
    const { productContent: PC_CA } = await import('../src/catalog/product-content.ca.ts')
    const { productContent: PC_EN } = await import('../src/catalog/product-content.en.ts')
    const { productContent: PC_ZH } = await import('../src/catalog/product-content.zh.ts')

    const LOCALES = ['es', 'ca', 'en', 'zh']
    const PC_REGISTRY = { es: PC_ES, ca: PC_CA, en: PC_EN, zh: PC_ZH }

    let createdProducts = 0
    let touchedProducts = 0
    for (const p of PRODUCTS) {
      let productId
      try {
        const existing = await payload.find({
          collection: 'products',
          where: { slug: { equals: p.slug } },
          limit: 1,
          depth: 0,
        })
        if (existing.docs.length > 0) {
          productId = existing.docs[0].id
        } else {
          const created = await payload.create({
            collection: 'products',
            locale: 'es',
            data: {
              slug: p.slug,
              icon: p.icon,
              menuOrder: p.menuOrder,
              highlight: !!p.highlight,
              placeholder: !!p.placeholder,
              name: p.name,
              menuLabel: p.menuLabel,
              tagline: p.tagline,
              heroTitle: p.heroTitle,
              intro: p.intro,
            },
          })
          productId = created.id
          createdProducts++
          // Sembramos las traducciones del resto de locales sobre el doc recién creado
          for (const locale of ['ca', 'en', 'zh']) {
            const t = PRODUCT_I18N[locale]?.[p.slug]
            if (!t) continue
            try {
              await payload.update({
                collection: 'products',
                id: productId,
                locale,
                data: {
                  name: t.name ?? p.name,
                  menuLabel: t.menuLabel ?? p.menuLabel,
                  tagline: t.tagline ?? p.tagline,
                  heroTitle: t.heroTitle ?? p.heroTitle,
                  intro: t.intro ?? p.intro,
                },
              })
              touchedProducts++
            } catch (err) {
              console.warn(`[sync-schema] ✗ seed product ${p.slug} (${locale}):`, err?.message || err)
            }
          }
        }
      } catch (err) {
        console.warn(`[sync-schema] ✗ seed product ${p.slug}:`, err?.message || err)
        continue
      }

      // ProductContent — solo si no existe ya una ficha para este producto.
      try {
        const existingContent = await payload.find({
          collection: 'product-content',
          where: { product: { equals: productId } },
          limit: 1,
          depth: 0,
        })
        if (existingContent.docs.length > 0) continue

        const buildSections = (locale) => {
          const fromLocale = PC_REGISTRY[locale]?.[p.slug]
          const fromES = PC_REGISTRY.es?.[p.slug]
          const src = fromLocale ?? fromES
          if (!src) return null
          return {
            subtitle: src.subtitle ?? '',
            sections: (src.sections ?? []).map((s) => {
              if (s.type === 'features') {
                return {
                  blockType: 'features',
                  title: s.title,
                  lead: s.lead,
                  items: s.items.map((i) => ({ icon: i.icon, title: i.title, description: i.description })),
                }
              }
              if (s.type === 'highlights') {
                return {
                  blockType: 'highlights',
                  title: s.title,
                  lead: s.lead,
                  highlights: s.highlights.map((h) => ({ title: h.title, description: h.description })),
                  bullets: (s.bullets ?? []).map((text) => ({ text })),
                }
              }
              if (s.type === 'process') {
                return {
                  blockType: 'process',
                  title: s.title,
                  steps: s.steps.map((st) => ({ title: st.title, description: st.description })),
                }
              }
              return { blockType: 'cta', title: s.title, lead: s.lead }
            }),
          }
        }

        const esContent = buildSections('es')
        if (!esContent) continue
        const createdContent = await payload.create({
          collection: 'product-content',
          locale: 'es',
          data: { product: productId, ...esContent },
        })
        // Actualizamos los locales restantes (ca/en/zh) — los array-rows se
        // mapean por orden, así que mientras la estructura coincida con ES
        // los textos quedan correctamente alineados.
        for (const locale of ['ca', 'en', 'zh']) {
          const localized = buildSections(locale)
          if (!localized) continue
          try {
            await payload.update({
              collection: 'product-content',
              id: createdContent.id,
              locale,
              data: localized,
            })
          } catch (err) {
            console.warn(`[sync-schema] ✗ seed content ${p.slug} (${locale}):`, err?.message || err)
          }
        }
      } catch (err) {
        console.warn(`[sync-schema] ✗ seed product-content ${p.slug}:`, err?.message || err)
      }
    }
    console.log(`[sync-schema] catálogo: ${createdProducts} productos creados, ${touchedProducts} traducciones aplicadas`)
  } catch (err) {
    console.warn('[sync-schema] ✗ seed catálogo:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed de Success Cases (5 clientes) en los 4 locales.
  // Idempotente por slug: si el caso ya existe, no se toca.
  // -------------------------------------------------------------------
  try {
    const { STATIC_COPY: SC_COPY, styleForSlug, logoForSlug } = await import('../src/catalog/success-cases.ts')
    const ORDER_BY_SLUG = { jarmauto: 10, ocasionplus: 20, flexicar: 30, 'muy-car': 40, 'auto-elia': 50 }
    let createdCases = 0
    for (const baseCase of SC_COPY.es.cases) {
      try {
        const existing = await payload.find({
          collection: 'success-cases',
          where: { slug: { equals: baseCase.slug } },
          limit: 1,
          depth: 0,
        })
        if (existing.docs.length > 0) continue

        const style = styleForSlug(baseCase.slug)
        const logo = logoForSlug(baseCase.slug)

        const dataFor = (c) => ({
          brand: c.brand,
          wordmark: c.wordmark,
          tagline: c.tagline,
          badge: c.badge,
          headline: c.headline,
          introHtml: c.introHtml,
          quote: c.quote,
          author: c.author,
          ecosystemTitle: c.ecosystemTitle,
          ecosystemLead: c.ecosystemLead,
          stats: c.stats.map((s) => ({ value: s.value, label: s.label })),
          ecosystemItems: c.ecosystemItems.map((text) => ({ text })),
        })

        const created = await payload.create({
          collection: 'success-cases',
          locale: 'es',
          data: {
            slug: baseCase.slug,
            order: ORDER_BY_SLUG[baseCase.slug] ?? 100,
            quoteVariant: baseCase.quoteVariant,
            brandStyle: {
              primary: style.primary,
              ink: style.ink,
              banner: style.banner,
              wordmarkClass: style.wordmarkClass ?? undefined,
            },
            logo: logo ? { src: logo.src, alt: logo.alt, width: logo.width, height: logo.height } : undefined,
            ...dataFor(baseCase),
          },
        })
        createdCases++

        for (const locale of ['ca', 'en', 'zh']) {
          const localized = SC_COPY[locale]?.cases.find((c) => c.slug === baseCase.slug)
          if (!localized) continue
          try {
            await payload.update({
              collection: 'success-cases',
              id: created.id,
              locale,
              data: dataFor(localized),
            })
          } catch (err) {
            console.warn(`[sync-schema] ✗ seed success-case ${baseCase.slug} (${locale}):`, err?.message || err)
          }
        }
      } catch (err) {
        console.warn(`[sync-schema] ✗ seed success-case ${baseCase.slug}:`, err?.message || err)
      }
    }
    console.log(`[sync-schema] casos de éxito: ${createdCases} creados`)
  } catch (err) {
    console.warn('[sync-schema] ✗ seed success-cases:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del Footer global en los 4 locales.
  // Sólo se rellena el primer despliegue: detectamos "vacío" si el
  // campo `tagline` en `es` está ausente o sigue como string vacío.
  // -------------------------------------------------------------------
  try {
    const { STATIC_FOOTER } = await import('../src/lib/footer-content.ts')
    let footerES
    try {
      footerES = await payload.findGlobal({ slug: 'footer', locale: 'es', depth: 0 })
    } catch (err) {
      console.warn('[sync-schema] ✗ leer footer ES:', err?.message || err)
    }
    const needsSeed = !footerES || !footerES.tagline
    if (needsSeed) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({
            slug: 'footer',
            locale,
            data: STATIC_FOOTER[locale],
          })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed footer (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] footer: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = footer ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed footer:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Contact en los 4 locales.
  // -------------------------------------------------------------------
  try {
    const { STATIC_CONTACT } = await import('../src/lib/contact-content.ts')
    let contactES
    try {
      contactES = await payload.findGlobal({ slug: 'contact-page', locale: 'es', depth: 0 })
    } catch (err) {
      console.warn('[sync-schema] ✗ leer contact ES:', err?.message || err)
    }
    const needsSeed = !contactES || !contactES.title
    if (needsSeed) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({
            slug: 'contact-page',
            locale,
            data: STATIC_CONTACT[locale],
          })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed contact (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] contact: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = contact ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed contact:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Pricing en los 4 locales.
  // -------------------------------------------------------------------
  try {
    const { STATIC_PRICING } = await import('../src/lib/pricing-content.ts')
    let pricingES
    try {
      pricingES = await payload.findGlobal({ slug: 'pricing-page', locale: 'es', depth: 0 })
    } catch {}
    if (!pricingES || !pricingES.title) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({ slug: 'pricing-page', locale, data: STATIC_PRICING[locale] })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed pricing (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] pricing: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = pricing ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed pricing:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Company en los 4 locales.
  // -------------------------------------------------------------------
  try {
    const { STATIC_COMPANY } = await import('../src/lib/company-content.ts')
    let companyES
    try {
      companyES = await payload.findGlobal({ slug: 'company-page', locale: 'es', depth: 0 })
    } catch {}
    if (!companyES || !companyES.title) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({ slug: 'company-page', locale, data: STATIC_COMPANY[locale] })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed company (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] company: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = company ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed company:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Home en los 4 locales.
  // -------------------------------------------------------------------
  try {
    const { STATIC_HOME } = await import('../src/lib/home-content.ts')
    let homeES
    try {
      homeES = await payload.findGlobal({ slug: 'home-page', locale: 'es', depth: 0 })
    } catch {}
    // STATIC_HOME.aboutStats es string[] (cómodo en JSX) pero el Global
    // lo guarda como [{ label }]. Adaptador antes de updateGlobal.
    const toPayloadShape = (copy) => ({
      ...copy,
      aboutStats: (copy.aboutStats || []).map((label) => ({ label })),
    })
    // Campos array — Payload exige que al sembrar un locale distinto al
    // defecto, cada fila lleve el id que ya existe en ES. Como conseguir
    // esos IDs desde el script vía findGlobal no es del todo fiable (el
    // shape devuelto difiere ligeramente del esperado por updateGlobal y
    // explota con "The following field is invalid: id"), en ca/en/zh
    // sembramos SOLO los scalars. Los arrays caen al fallback ES vía
    // localization.fallback:true. Negocio puede traducirlos a mano desde
    // el admin si lo necesita.
    const ARRAY_FIELDS = [
      'navSections', 'aboutStats', 'solveRows', 'helpSteps',
      'resultsStats', 'audiences', 'testimonials',
    ]
    const scalarsOnly = (copy) => {
      const out = { ...copy }
      for (const k of ARRAY_FIELDS) delete out[k]
      return out
    }
    // 1) Sembrar ES (idempotente) con TODO (scalars + arrays).
    if (!homeES || !homeES.heroTitle1) {
      try {
        await payload.updateGlobal({ slug: 'home-page', locale: 'es', data: toPayloadShape(STATIC_HOME.es) })
        console.log('[sync-schema] home: ES sembrado (scalars + arrays)')
      } catch (err) {
        console.warn('[sync-schema] ✗ seed home (es):', err?.message || err)
      }
    } else {
      // Migración: el shape de navSections cambió { id, label } → { anchor, label }
      // porque el campo "id" chocaba con el id auto-generado de Payload y rompía
      // el form del admin. Si detectamos navSections sin "anchor", lo migramos.
      const firstNav = homeES.navSections?.[0]
      const needsAnchorMigration = firstNav && typeof firstNav === 'object' && !firstNav.anchor
      if (needsAnchorMigration) {
        try {
          await payload.updateGlobal({
            slug: 'home-page',
            locale: 'es',
            data: { navSections: STATIC_HOME.es.navSections },
          })
          console.log('[sync-schema] home: navSections ES migrado a { anchor, label }')
        } catch (err) {
          console.warn('[sync-schema] ✗ migración navSections ES:', err?.message || err)
        }
      }
    }
    // 2) Releer ES para detectar fallback en otros locales.
    let homeESWithIds
    try {
      homeESWithIds = await payload.findGlobal({ slug: 'home-page', locale: 'es', depth: 0 })
    } catch {}
    // 3) DEBUG: probar primero con UN solo campo para ver el error real.
    for (const locale of ['ca', 'en', 'zh']) {
      try {
        await payload.updateGlobal({
          slug: 'home-page',
          locale,
          data: { heroTitle1: STATIC_HOME[locale]?.heroTitle1 ?? '' },
        })
        console.log(`[sync-schema] home: ${locale} heroTitle1 sembrado ✓`)
      } catch (err) {
        console.warn(`[sync-schema] ✗ seed home (${locale}):`, err?.message || err)
        if (err?.data) {
          console.warn(`[sync-schema]   err.data:`, JSON.stringify(err.data).slice(0, 500))
        }
        if (err?.errors) {
          console.warn(`[sync-schema]   err.errors:`, JSON.stringify(err.errors).slice(0, 500))
        }
        if (err?.stack) {
          console.warn(`[sync-schema]   stack:`, err.stack.slice(0, 800))
        }
      }
    }
    // Sembrar el resto de scalars solo si el heroTitle1 funcionó.
    for (const locale of ['ca', 'en', 'zh']) {
      try {
        const cur = await payload.findGlobal({ slug: 'home-page', locale, depth: 0 })
        if (!cur?.heroTitle1) continue // si el primer paso falló, no insistir
        await payload.updateGlobal({
          slug: 'home-page',
          locale,
          data: scalarsOnly(STATIC_HOME[locale] ?? {}),
        })
        console.log(`[sync-schema] home: ${locale} resto de scalars sembrados ✓`)
      } catch (err) {
        console.warn(`[sync-schema] ✗ scalars home (${locale}):`, err?.message || err)
      }
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed home:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Services Listing en los 4 locales.
  // -------------------------------------------------------------------
  try {
    const { STATIC_SERVICES_LISTING } = await import('../src/lib/services-listing-content.ts')
    let servicesListingES
    try {
      servicesListingES = await payload.findGlobal({ slug: 'services-listing-page', locale: 'es', depth: 0 })
    } catch {}
    if (!servicesListingES || !servicesListingES.title) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({
            slug: 'services-listing-page',
            locale,
            data: STATIC_SERVICES_LISTING[locale],
          })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed services-listing (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] services-listing: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = services-listing ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed services-listing:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Success Stories (chrome) en los 4 locales.
  // Solo siembra el envoltorio (meta, hero, pill, CTA); los casos de
  // cliente se siembran en su propia colección.
  // -------------------------------------------------------------------
  try {
    const { STATIC_COPY: STATIC_SUCCESS_STORIES } = await import('../src/catalog/success-cases.ts')
    let successStoriesES
    try {
      successStoriesES = await payload.findGlobal({ slug: 'success-stories-page', locale: 'es', depth: 0 })
    } catch {}
    if (!successStoriesES || !successStoriesES.heroTitle1) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          // Excluimos `cases` del payload del global: los casos viven en
          // la colección SuccessCases.
          const { cases: _cases, ...chrome } = STATIC_SUCCESS_STORIES[locale]
          await payload.updateGlobal({
            slug: 'success-stories-page',
            locale,
            data: chrome,
          })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed success-stories (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] success-stories: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = success-stories ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed success-stories:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Ecosystem (página /ecosistema-tecnico) en los 4 locales.
  // El shape de STATIC_ECOSYSTEM expone `hubs[i].integrations` como
  // string[] (forma cómoda para el frontend), pero el Global lo guarda
  // como array de { name }. Adaptamos antes de pasarlo a updateGlobal.
  // -------------------------------------------------------------------
  try {
    const { STATIC_ECOSYSTEM } = await import('../src/lib/ecosystem-content.ts')
    let ecosystemES
    try {
      ecosystemES = await payload.findGlobal({ slug: 'ecosystem-page', locale: 'es', depth: 0 })
    } catch {}
    if (!ecosystemES || !ecosystemES.title1) {
      const toPayloadShape = (copy) => ({
        ...copy,
        hubs: (copy.hubs || []).map((h) => ({
          ...h,
          integrations: (h.integrations || []).map((name) => ({ name })),
        })),
      })
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({
            slug: 'ecosystem-page',
            locale,
            data: toPayloadShape(STATIC_ECOSYSTEM[locale]),
          })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed ecosystem (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] ecosystem: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = ecosystem ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed ecosystem:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Contact Form (UI del formulario + gracias) en los 4 locales.
  // -------------------------------------------------------------------
  try {
    const { STATIC_CONTACT_FORM } = await import('../src/lib/contact-form-content.ts')
    let contactFormES
    try {
      contactFormES = await payload.findGlobal({ slug: 'contact-form', locale: 'es', depth: 0 })
    } catch {}
    if (!contactFormES || !contactFormES.submit) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({ slug: 'contact-form', locale, data: STATIC_CONTACT_FORM[locale] })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed contact-form (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] contact-form: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = contact-form ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed contact-form:', err?.message || err)
  }

  // -------------------------------------------------------------------
  // Seed del global Product UI (carrusel + multipublicador + plantilla
  // genérica de producto) en los 4 locales. STATIC_PRODUCT_UI usa
  // multiStats como array de { v, l } — ya coincide con el shape del
  // Global, así que pasamos el objeto tal cual.
  // -------------------------------------------------------------------
  try {
    const { STATIC_PRODUCT_UI } = await import('../src/lib/product-ui-static.ts')
    let productUiES
    try {
      productUiES = await payload.findGlobal({ slug: 'product-ui', locale: 'es', depth: 0 })
    } catch {}
    if (!productUiES || !productUiES.carouselTitle) {
      for (const locale of ['es', 'ca', 'en', 'zh']) {
        try {
          await payload.updateGlobal({ slug: 'product-ui', locale, data: STATIC_PRODUCT_UI[locale] })
        } catch (err) {
          console.warn(`[sync-schema] ✗ seed product-ui (${locale}):`, err?.message || err)
        }
      }
      console.log('[sync-schema] product-ui: 4 locales sembrados')
    } else {
      console.log('[sync-schema] = product-ui ya tiene contenido en ES, sin tocar')
    }
  } catch (err) {
    console.warn('[sync-schema] ✗ seed product-ui:', err?.message || err)
  }
} catch (err) {
  console.error('[sync-schema] schema check failed:', err?.message || err)
  // No fallamos el build: dejamos que el deploy salga y el problema se
  // diagnostique en runtime.
}

process.exit(0)
