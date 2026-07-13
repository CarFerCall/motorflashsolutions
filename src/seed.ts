/**
 * Sembrado inicial: crea el usuario admin.
 *
 *   ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run seed
 *
 * Idempotente — si el email ya existe, no toca nada. Nunca imprime la
 * contraseña por consola.
 *
 * Los planes de precios NO se siembran desde aquí: la fuente de verdad
 * es `scripts/sync-schema.mjs` (patrón idempotente por migración con
 * guardas de forma vieja). Si dejamos también los planes en este
 * fichero, `payload.update` los pisa cada vez que se ejecute — bug ya
 * ocurrido con la config de CRM4YOU.
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config } from 'dotenv'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

config({ path: path.resolve(dirname, '..', '.env') })

async function run() {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminName = process.env.ADMIN_NAME || 'Administrador'

  if (!adminEmail || !adminPassword) {
    console.error(
      '✗ ADMIN_EMAIL y ADMIN_PASSWORD son obligatorios.\n' +
        '  Ejemplo: ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run seed',
    )
    process.exit(1)
  }

  const payloadConfig = (await import('./payload.config')).default
  const payload = await getPayload({ config: payloadConfig })

  const { docs: existingUsers } = await payload.find({
    collection: 'users',
    where: { email: { equals: adminEmail } },
    limit: 1,
  })
  if (existingUsers.length === 0) {
    await payload.create({
      collection: 'users',
      data: { email: adminEmail, password: adminPassword, name: adminName },
    })
    console.log(`✔ Admin creado: ${adminEmail}`)
  } else {
    console.log(`• Admin ya existía: ${adminEmail} (no se toca)`)
  }

  process.exit(0)
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
