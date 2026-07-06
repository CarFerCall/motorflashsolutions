#!/usr/bin/env node
/**
 * Workaround del bug de Payload v3 + Postgres + globals localized.
 *
 * Cuando un global tiene `localization` y nunca se ha guardado contenido
 * para un locale (ej. zh), `payload.updateGlobal({ locale: 'zh' })` y la
 * API REST `POST /api/globals/{slug}?locale=zh` fallan con:
 *
 *   "id is invalid" / "Value must be unique"
 *
 * Causa: Payload intenta INSERT id=1 en `home_page` en lugar de UPSERT
 * en `home_page_locales`. La tabla principal solo admite una fila.
 *
 * Workaround: pre-insertamos una fila vacía en `home_page_locales` para
 * cada locale faltante. Una vez existe la fila, el siguiente
 * updateGlobal hace UPDATE limpio y el bug no se dispara.
 *
 * Uso:
 *   POSTGRES_URL='postgres://user:pass@host/db?sslmode=require' \
 *   node scripts/prepare-home-locales-rows.mjs
 *
 * Tras ejecutar este, lanzar el seed remoto:
 *   ADMIN_EMAIL=... ADMIN_PASSWORD=... \
 *   npx tsx scripts/seed-home-translations-remote.mjs
 */

const POSTGRES_URL = process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL
if (!POSTGRES_URL) {
  console.error('❌ Falta POSTGRES_URL. Ejecuta así:')
  console.error("    POSTGRES_URL='postgres://...' node scripts/prepare-home-locales-rows.mjs")
  console.error('\nLa URL la sacas del dashboard de Vercel → Settings → Environment Variables → POSTGRES_URL.')
  process.exit(1)
}

const { default: pg } = await import('pg')
const client = new pg.Client({
  connectionString: POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
})

await client.connect()
console.log('✓ conectado a Postgres')

try {
  // 1) Confirmar que existe la fila principal en home_page (debe ser id=1).
  const main = await client.query(`SELECT id FROM home_page ORDER BY id LIMIT 5`)
  console.log(`home_page rows: ${main.rows.length}`, main.rows)
  if (main.rows.length === 0) {
    console.error('❌ No hay ninguna fila en home_page. El global no está inicializado todavía.')
    console.error('   Edita una vez el home en ES desde el admin para crear la fila base.')
    process.exit(1)
  }
  const parentId = main.rows[0].id

  // 2) Ver qué locales ya tienen fila en home_page_locales.
  const existing = await client.query(`SELECT _locale FROM home_page_locales WHERE _parent_id=$1`, [parentId])
  const existingLocales = new Set(existing.rows.map((r) => r._locale))
  console.log(`home_page_locales existentes: [${[...existingLocales].join(', ') || 'ninguno'}]`)

  // 3) Listar columnas de la tabla (la mayoría son NOT NULL, así que
  // no podemos hacer INSERT vacío). Copiamos la fila ES completa y solo
  // cambiamos _locale. Después el script remoto pone los textos correctos.
  const colsRes = await client.query(
    `SELECT column_name FROM information_schema.columns
     WHERE table_name='home_page_locales' AND table_schema='public'
     ORDER BY ordinal_position`,
  )
  const allCols = colsRes.rows.map((r) => r.column_name)
  // Excluimos id (auto-increment) y _locale (lo seteamos manualmente).
  const copyCols = allCols.filter((c) => c !== 'id' && c !== '_locale')
  const quotedCols = copyCols.map((c) => `"${c}"`).join(', ')
  console.log(`columnas a copiar: ${copyCols.length} (id auto, _locale custom)`)

  for (const locale of ['ca', 'en', 'zh']) {
    if (existingLocales.has(locale)) {
      console.log(`  = ${locale}: ya existe, sin tocar`)
      continue
    }
    try {
      // INSERT copiando la fila ES con _locale cambiado.
      const insertSql = `
        INSERT INTO home_page_locales (${quotedCols}, "_locale")
        SELECT ${quotedCols}, $1 AS "_locale"
        FROM home_page_locales
        WHERE "_parent_id" = $2 AND "_locale" = 'es'
      `
      const res = await client.query(insertSql, [locale, parentId])
      console.log(`  + ${locale}: ${res.rowCount} fila(s) copiada(s) desde ES ✓`)
    } catch (err) {
      console.warn(`  ✗ ${locale}: ${err?.message || err}`)
    }
  }

  // 4) Verificar.
  const after = await client.query(`SELECT _locale FROM home_page_locales WHERE _parent_id=$1 ORDER BY _locale`, [parentId])
  console.log(`\nLocales en home_page_locales tras el fix: [${after.rows.map((r) => r._locale).join(', ')}]`)
  console.log('\n✓ Workaround aplicado. Ahora lanza el seed remoto:')
  console.log("    ADMIN_EMAIL='...' ADMIN_PASSWORD='...' npx tsx scripts/seed-home-translations-remote.mjs")
} finally {
  await client.end()
}
