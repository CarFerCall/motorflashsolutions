#!/usr/bin/env node
/**
 * Siembra los textos del global home-page en ca/en/zh usando la API
 * REST de Payload en producción (NO el script de build, que tiene el
 * bug de "id must be unique" con globals localized en Postgres).
 *
 * Uso interactivo (te pide email + password):
 *   node scripts/seed-home-translations-remote.mjs
 *
 * Uso no-interactivo (variables de entorno):
 *   ADMIN_EMAIL=carlos.fernandez@motorflash.com \
 *   ADMIN_PASSWORD='tu-pass' \
 *   node scripts/seed-home-translations-remote.mjs
 *
 * El BASE de la API se puede sobreescribir con BASE=https://...
 */

import { createInterface } from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { STATIC_HOME } from '../src/lib/home-content.ts'

const BASE = process.env.BASE || 'https://motorflashsolutions.vercel.app'

// Campos que NO se siembran (arrays — caen al fallback ES de Payload).
const ARRAY_FIELDS = new Set([
  'navSections', 'aboutStats', 'solveRows', 'helpSteps',
  'resultsStats', 'audiences', 'testimonials',
])

function scalarsOnly(copy) {
  const out = {}
  for (const [k, v] of Object.entries(copy ?? {})) {
    if (ARRAY_FIELDS.has(k)) continue
    if (typeof v !== 'string') continue
    out[k] = v
  }
  return out
}

async function prompt(question, { silent = false } = {}) {
  if (process.env.ADMIN_EMAIL && question.includes('Email')) return process.env.ADMIN_EMAIL
  if (process.env.ADMIN_PASSWORD && question.includes('Password')) return process.env.ADMIN_PASSWORD
  const rl = createInterface({ input, output, terminal: true })
  if (silent) {
    // Oculta input para passwords escribiendo asteriscos. Hack ligero.
    process.stdout.write(question)
    rl.input.setRawMode?.(true)
    let buf = ''
    return new Promise((resolve) => {
      const onData = (d) => {
        const ch = d.toString('utf8')
        if (ch === '\r' || ch === '\n' || ch === '') {
          rl.input.removeListener('data', onData)
          rl.input.setRawMode?.(false)
          process.stdout.write('\n')
          rl.close()
          resolve(buf)
          return
        }
        if (ch === '') process.exit(1) // Ctrl+C
        if (ch === '' || ch === '\b') {
          if (buf.length > 0) {
            buf = buf.slice(0, -1)
            process.stdout.write('\b \b')
          }
          return
        }
        buf += ch
        process.stdout.write('*')
      }
      rl.input.on('data', onData)
    })
  }
  const ans = await rl.question(question)
  rl.close()
  return ans
}

async function main() {
  console.log(`Sembrando textos del Home en ca/en/zh contra ${BASE}\n`)
  const email = (await prompt('Email admin: ')).trim()
  const password = (await prompt('Password: ', { silent: true })).trim()

  console.log('\n→ Login…')
  const loginRes = await fetch(`${BASE}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!loginRes.ok) {
    console.error(`Login fallido: HTTP ${loginRes.status} — ${await loginRes.text()}`)
    process.exit(1)
  }
  const { token } = await loginRes.json()
  if (!token) {
    console.error('Login OK pero no recibí token. Aborto.')
    process.exit(1)
  }
  console.log('   logueado ✓\n')

  for (const locale of ['ca', 'en', 'zh']) {
    const data = scalarsOnly(STATIC_HOME[locale])
    const fieldCount = Object.keys(data).length
    process.stdout.write(`→ Sembrando ${locale} (${fieldCount} campos)… `)
    const res = await fetch(`${BASE}/api/globals/home-page?locale=${locale}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      const body = await res.text()
      console.error(`✗ HTTP ${res.status}`)
      console.error(`   body: ${body.slice(0, 400)}`)
      continue
    }
    console.log('✓')
  }

  console.log('\nVerificando estado en API…')
  for (const locale of ['ca', 'en', 'zh']) {
    const r = await fetch(`${BASE}/api/globals/home-page?depth=0&locale=${locale}&fallback-locale=null`)
    const j = await r.json()
    const hero = j.heroTitle1 ? j.heroTitle1.slice(0, 50) : 'VACÍO'
    console.log(`   ${locale} · heroTitle1: ${hero}`)
  }
  console.log('\nListo. Recarga el admin con Cmd+Shift+R para ver los textos.')
}

main().catch((err) => {
  console.error('Error:', err?.message || err)
  process.exit(1)
})
