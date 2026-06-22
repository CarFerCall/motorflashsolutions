#!/usr/bin/env node
/**
 * Smoke E2E: descarga las páginas clave en los 4 locales y verifica
 * que aparece el copy esperado para ese idioma. Detecta tanto:
 *   - errores HTTP (5xx / 404)
 *   - copy "fallback" (texto ES presente en /ca, /en o /zh)
 *   - copy ausente (texto esperado del idioma local NO presente)
 *
 * Uso:
 *   BASE=https://motorflashsolutions.vercel.app node scripts/smoke-e2e.mjs
 *   BASE=http://localhost:3100 node scripts/smoke-e2e.mjs
 */

const BASE = process.env.BASE || 'https://motorflashsolutions.vercel.app'

// Para cada ruta + locale, una signature: texto que debe estar (presente)
// y opcionalmente texto que NO debe estar (anti-fallback, p. ej. "Resultados
// reales" en /en denota que el copy ES está pisando al EN).
const CASES = [
  // -------- Home (/)
  { route: '/', es: { presente: 'La solución 360', ausente: ['360 solution', 'La solució 360', '360 解决方案'] } },
  { route: '/ca', es: 'ca', present: 'La solució 360', missing: ['La solución 360', '360 solution', '360 解决方案'] },
  { route: '/en', es: 'en', present: '360 solution', missing: ['La solución 360', 'La solució 360', '360 解决方案'] },
  { route: '/zh', es: 'zh', present: '360 解决方案', missing: ['La solución 360', 'La solució 360', '360 solution'] },

  // -------- Compañía
  { route: '/compania', locale: 'es', present: 'Tu socio digital', missing: ['Your digital partner', 'El teu soci digital'] },
  { route: '/ca/compania', locale: 'ca', present: 'El teu soci digital', missing: ['Tu socio digital', 'Your digital partner'] },
  { route: '/en/compania', locale: 'en', present: 'Your digital partner', missing: ['Tu socio digital', '您在汽车行业'] },
  { route: '/zh/compania', locale: 'zh', present: '您在汽车行业', missing: ['Tu socio digital', 'Your digital partner'] },

  // -------- Casos de éxito
  { route: '/historias-de-exito', locale: 'es', present: 'Confían en nosotros', missing: ['They trust us', 'Confien en nosaltres'] },
  { route: '/ca/historias-de-exito', locale: 'ca', present: 'Confien en nosaltres', missing: ['Confían en nosotros', 'They trust us'] },
  { route: '/en/historias-de-exito', locale: 'en', present: 'They trust us', missing: ['Confían en nosotros', '他们信赖我们'] },
  { route: '/zh/historias-de-exito', locale: 'zh', present: '他们信赖我们', missing: ['Confían en nosotros', 'They trust us'] },

  // -------- Precios
  { route: '/precios', locale: 'es', present: 'Planes a tu medida', missing: ['Plans built for your scale', 'Plans a la teva mida'] },
  { route: '/ca/precios', locale: 'ca', present: 'Plans a la teva mida', missing: ['Planes a tu medida', 'Plans built for your scale'] },
  { route: '/en/precios', locale: 'en', present: 'Plans built for your scale', missing: ['Planes a tu medida', '量身定制的方案'] },
  { route: '/zh/precios', locale: 'zh', present: '量身定制的方案', missing: ['Planes a tu medida', 'Plans built for your scale'] },

  // -------- Contacto
  { route: '/contacto', locale: 'es', present: '¿Hablamos sobre tu negocio?', missing: ['Shall we talk about your business?', 'Parlem del teu negoci'] },
  { route: '/ca/contacto', locale: 'ca', present: 'Parlem del teu negoci', missing: ['¿Hablamos sobre tu negocio?', 'Shall we talk about'] },
  { route: '/en/contacto', locale: 'en', present: 'Shall we talk about your business?', missing: ['¿Hablamos sobre tu negocio?', '聊聊您的业务'] },
  { route: '/zh/contacto', locale: 'zh', present: '聊聊您的业务', missing: ['¿Hablamos sobre tu negocio?', 'Shall we talk about'] },

  // -------- Ecosistema técnico
  { route: '/ecosistema-tecnico', locale: 'es', present: 'Ecosistema', missing: [] },
  { route: '/en/ecosistema-tecnico', locale: 'en', present: 'Tech ecosystem', missing: ['Ecosistema técnico'] },

  // -------- Servicios listing
  { route: '/servicios', locale: 'es', present: 'Servicios', missing: [] },
  { route: '/en/servicios', locale: 'en', present: 'Services', missing: ['Catálogo'] },
  { route: '/ca/servicios', locale: 'ca', present: 'Serveis', missing: ['Catálogo'] },
  { route: '/zh/servicios', locale: 'zh', present: '服务', missing: ['Catálogo'] },

  // -------- Producto (slug genérico): /servicios/dealer
  { route: '/servicios/dealer', locale: 'es', present: 'Dealer', missing: [] },
  { route: '/en/servicios/dealer', locale: 'en', present: 'Dealer', missing: [] },
]

// Normalizamos a un formato uniforme antes de iterar (algunos cases
// estaban con keys "es: 'ca'" — mantenemos el shape único {locale, present, missing[]}).
const NORMALIZED = CASES
  .map((c) => {
    if (c.es && typeof c.es === 'object') {
      return { route: c.route, locale: 'es', present: c.es.presente, missing: c.es.ausente }
    }
    if (typeof c.es === 'string') {
      return { route: c.route, locale: c.es, present: c.present, missing: c.missing || [] }
    }
    return { route: c.route, locale: c.locale, present: c.present, missing: c.missing || [] }
  })

let pass = 0
let fail = 0
const failures = []

async function check({ route, locale, present, missing }) {
  const url = BASE + route
  try {
    const res = await fetch(url, { redirect: 'follow' })
    if (res.status >= 400) {
      throw new Error(`HTTP ${res.status}`)
    }
    const html = await res.text()
    if (present && !html.includes(present)) {
      throw new Error(`falta texto esperado "${present}"`)
    }
    for (const m of missing) {
      if (html.includes(m)) {
        throw new Error(`texto fallback "${m}" presente (debería estar solo en su locale)`)
      }
    }
    pass++
    console.log(`✓ ${locale.padEnd(2)} ${route}`)
  } catch (err) {
    fail++
    failures.push({ url, locale, error: err.message })
    console.log(`✗ ${locale.padEnd(2)} ${route} — ${err.message}`)
  }
}

console.log(`Smoke E2E sobre ${BASE}\n`)
for (const c of NORMALIZED) {
  await check(c)
}

console.log(`\n${pass} OK · ${fail} FAIL`)
if (fail > 0) {
  console.log('\nFallos:')
  for (const f of failures) {
    console.log(`  - ${f.locale} ${f.url}: ${f.error}`)
  }
  process.exit(1)
}
