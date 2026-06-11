/**
 * Sembrado inicial: crea un admin y un PricingPlan completo para CRM4YOU.
 *
 *   npm run seed
 *
 * Idempotente — re-ejecuta sin duplicar (actualiza si existe).
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config } from 'dotenv'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

config({ path: path.resolve(dirname, '..', '.env') })

async function run() {
  const payloadConfig = (await import('./payload.config.ts')).default
  const payload = await getPayload({ config: payloadConfig })

  // 1. Admin user
  const adminEmail = 'admin@motorflash.com'
  const adminPassword = 'Motorflash2026!'
  const { docs: existingUsers } = await payload.find({
    collection: 'users',
    where: { email: { equals: adminEmail } },
    limit: 1,
  })
  if (existingUsers.length === 0) {
    await payload.create({
      collection: 'users',
      data: { email: adminEmail, password: adminPassword, name: 'Administrador' },
    })
    console.log(`✔ Admin creado: ${adminEmail} / ${adminPassword}`)
  } else {
    console.log(`• Admin ya existía: ${adminEmail}`)
  }

  // 2. PricingPlan para CRM4YOU
  const productSlug = 'crm4you'
  const items = [
    {
      itemKey: 'tier',
      label: 'Plan',
      helpText: 'Define las funcionalidades disponibles para tu equipo.',
      type: 'select' as const,
      unitPriceCents: 0,
      required: true,
      selectOptions: [
        { value: 'starter', label: 'Starter (1 sede, funcionalidades core)', priceCents: 0, isDefault: true },
        { value: 'pro', label: 'Pro (multi-sede, automatizaciones)', priceCents: 9900, isDefault: false },
        { value: 'enterprise', label: 'Enterprise (grupos, IA avanzada, SLA)', priceCents: 24900, isDefault: false },
      ],
    },
    {
      itemKey: 'licenses',
      label: 'Número de asesores (licencias)',
      helpText: 'Cada asesor comercial necesita su propia licencia para acceder al CRM.',
      type: 'number' as const,
      unitPriceCents: 2900,
      required: true,
      numberMin: 1,
      numberMax: 100,
      numberDefault: 4,
      numberUnit: 'licencia',
    },
    {
      itemKey: 'locations',
      label: 'Sedes adicionales',
      helpText: 'La primera sede está incluida. Añade más para distribuir el equipo en múltiples concesionarios.',
      type: 'number' as const,
      unitPriceCents: 4900,
      required: false,
      numberMin: 0,
      numberMax: 50,
      numberDefault: 0,
      numberUnit: 'sede adicional',
    },
    {
      itemKey: 'whatsapp_integration',
      label: 'Integración con WhatsApp Business',
      helpText: 'Conecta los leads de WhatsApp directamente al CRM.',
      type: 'checkbox' as const,
      unitPriceCents: 7900,
      required: false,
      checkboxDefault: false,
    },
    {
      itemKey: 'voice_ia',
      label: 'IA de análisis de voz',
      helpText: 'Transcribe, resume y puntúa todas las llamadas comerciales automáticamente.',
      type: 'checkbox' as const,
      unitPriceCents: 14900,
      required: false,
      checkboxDefault: false,
    },
    {
      itemKey: 'premium_support',
      label: 'Soporte Premium 24/7',
      helpText: 'Soporte telefónico prioritario con SLA de 2h.',
      type: 'checkbox' as const,
      unitPriceCents: 9900,
      required: false,
      checkboxDefault: false,
    },
  ]

  const { docs: existing } = await payload.find({
    collection: 'pricing-plans',
    where: { productSlug: { equals: productSlug } },
    limit: 1,
  })

  const data = {
    productSlug,
    productName: 'CRM4YOU',
    introText:
      'Configura tu CRM4YOU según las ubicaciones, número de asesores y módulos adicionales que necesites. El precio final es una estimación; un especialista te confirmará el coste exacto en menos de 24 horas.',
    basePriceCents: 19900,
    currency: 'EUR',
    billingCycle: 'month',
    enabled: true,
    items,
  }

  if (existing.length === 0) {
    const created = await payload.create({ collection: 'pricing-plans', data })
    console.log(`✔ Plan CRM4YOU creado (id=${created.id}) con ${items.length} items configurables`)
  } else {
    const updated = await payload.update({
      collection: 'pricing-plans',
      id: existing[0].id,
      data,
    })
    console.log(`✔ Plan CRM4YOU actualizado (id=${updated.id}) con ${items.length} items configurables`)
  }

  process.exit(0)
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
