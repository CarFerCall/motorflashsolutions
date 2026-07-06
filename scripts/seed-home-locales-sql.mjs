#!/usr/bin/env node
/**
 * Siembra los textos del Home en ca/en/zh DIRECTAMENTE en Postgres
 * con UPDATE SQL. Bypasea la API de Payload (que tiene un bug
 * "id must be unique" con globals localized).
 *
 * Prerequisito: scripts/prepare-home-locales-rows.mjs ya creó las
 * filas vacías para ca/en/zh duplicando la fila ES.
 *
 * Uso:
 *   set -a && source .env.production && set +a && node scripts/seed-home-locales-sql.mjs
 */

const POSTGRES_URL = process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL
if (!POSTGRES_URL) {
  console.error('❌ Falta POSTGRES_URL')
  process.exit(1)
}

// Importamos el STATIC desde el wrapper TS.
const { STATIC_HOME } = await import('../src/lib/home-content.ts')

const { default: pg } = await import('pg')
const client = new pg.Client({
  connectionString: POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
})

// Campos array — los saltamos. Caen al fallback ES vía Payload localization.
const ARRAY_FIELDS = new Set([
  'navSections', 'aboutStats', 'solveRows', 'helpSteps',
  'resultsStats', 'audiences', 'testimonials',
])

// camelCase → snake_case (heroTitle1 → hero_title1).
function snake(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase()
}

await client.connect()
console.log('✓ conectado a Postgres')

try {
  // Listar columnas reales de la tabla para poder mapear correctamente.
  const colsRes = await client.query(
    `SELECT column_name FROM information_schema.columns
     WHERE table_name='home_page_locales' AND table_schema='public'`,
  )
  const tableCols = new Set(colsRes.rows.map((r) => r.column_name))

  const parentId = 1
  for (const locale of ['ca', 'en', 'zh']) {
    const data = STATIC_HOME[locale] ?? {}
    const setClauses = []
    const params = []
    let i = 1
    let skipped = 0
    for (const [key, value] of Object.entries(data)) {
      if (ARRAY_FIELDS.has(key)) continue
      if (typeof value !== 'string') continue
      const col = snake(key)
      if (!tableCols.has(col)) {
        // Probar variantes (algunos nombres pueden ser distintos)
        if (col === 'social_proof_mid2' && tableCols.has('social_proof_mid_2')) {
          setClauses.push(`"social_proof_mid_2" = $${i++}`)
          params.push(value)
          continue
        }
        if (col === 'social_proof_mid_2' && tableCols.has('social_proof_mid2')) {
          setClauses.push(`"social_proof_mid2" = $${i++}`)
          params.push(value)
          continue
        }
        skipped++
        continue
      }
      setClauses.push(`"${col}" = $${i++}`)
      params.push(value)
    }
    if (setClauses.length === 0) {
      console.log(`  · ${locale}: nada que actualizar`)
      continue
    }
    params.push(parentId, locale)
    const sql = `UPDATE home_page_locales SET ${setClauses.join(', ')} WHERE "_parent_id" = $${i++} AND "_locale" = $${i++}`
    try {
      const res = await client.query(sql, params)
      console.log(`  ✓ ${locale}: ${res.rowCount} fila actualizada · ${setClauses.length} campos OK · ${skipped} saltados (no existen en tabla)`)
    } catch (err) {
      console.warn(`  ✗ ${locale}: ${err?.message || err}`)
    }
  }

  // Verificar.
  console.log('\nVerificación (debería estar en el idioma correcto):')
  for (const locale of ['ca', 'en', 'zh']) {
    const r = await client.query(
      `SELECT hero_title1, hero_chip, cta_title FROM home_page_locales WHERE _parent_id=$1 AND _locale=$2`,
      [parentId, locale],
    )
    const row = r.rows[0] || {}
    console.log(`  ${locale}: heroTitle1="${(row.hero_title1 || '').slice(0, 40)}" · ctaTitle="${(row.cta_title || '').slice(0, 40)}"`)
  }
} finally {
  await client.end()
}
