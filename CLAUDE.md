# CLAUDE.md — Reglas operativas y referencia rápida

Documento para asistentes (Claude Code) trabajando en este repo.
**La fuente de verdad técnica es [`PROJECT.md`](./PROJECT.md)** — léelo
entero la primera vez. Aquí solo van atajos, reglas operativas y avisos.

---

## Documentación maestra

- [`PROJECT.md`](./PROJECT.md) — arquitectura, productos, configurador,
  schema sync, deploy, operaciones comunes. **Empieza por ahí.**
- [`DEPLOY.md`](./DEPLOY.md) — guía paso a paso de deploy a Vercel.
- `README.md` — plantilla genérica de Payload, ignorar como guía del
  proyecto.

---

## Resumen ultra-rápido

- **Stack**: Next.js 16 + React 19 + TS + Payload v3 + Postgres (prod) /
  SQLite (dev) + Tailwind 3.
- **Repo GitHub**: `CarFerCall/motorflashsolutions`.
- **Producción**: `https://motorflashsolutions.vercel.app`.
- **Build prod**: `payload importmap → tsx scripts/sync-schema.mjs →
  next build`. El sync de schema **debe** ir antes del build (SSG/RSC).
- **Esquema**: Payload con `push: true`. Migraciones idempotentes vía
  `scripts/sync-schema.mjs`. No usamos `payload migrate`.
- **Precios**: BD en céntimos, UI admin en euros. Tipos de item:
  `number`, `select`, `checkbox`. Items con coste 0 son informativos
  (muestran "X cuentas" o "seleccionado" sin sumar al total).

---

## Reglas que no se discuten

### Seguridad / .env

- **Nunca** subir `.env` al repo ni al CLI de Vercel. `.gitignore` cubre
  `.env`, `.env.*` y deja pasar solo `.env.example`. `.vercelignore` es
  ortogonal — solo evita que un `.env*` que exista en local llegue al
  builder de Vercel; NO protege git. Si añades un tipo de fichero de
  entorno nuevo, mira que caiga bajo el patrón `.env.*` o añade la regla
  explícita antes de commitear.
- **Nunca** poner `NODE_ENV=production` arriba de `scripts/sync-schema.mjs`
  ni en su shell — Payload con Postgres y `push: true` **no corre** con
  `NODE_ENV=production`. El sync debe correr en modo dev forzado.
- Si el usuario expone una clave en el chat (Resend, Stitch, etc.),
  hay que rotarla — recuérdaselo, no la reutilices.

### Procesos locales

- Hay otra app (`renting`) corriendo en paralelo en local. **Nunca**
  uses `pkill -f "next dev"` ni equivalente. Identifica el PID por
  puerto antes de matar.

### Migraciones del seed

- Cada bloque de `sync-schema.mjs` es idempotente: lee el estado actual
  del plan y solo aplica si encuentra la "forma vieja".
- Al añadir una migración nueva (vN), revisa las anteriores para que
  no se pisen. Patrón típico: cada migración detecta su forma vieja Y
  comprueba que las posteriores aún no se hayan aplicado.
- El log convencional es `[sync-schema] ↻ <producto>: <qué cambia>`.

### Deploy y commits

- Producción se actualiza con `git push main`. Vercel construye solo.
- Para forzar rebuild sin commit:
  `npx vercel@latest --prod --yes && npx vercel@latest cache purge --yes`.
- Si los deploys quedan `UNKNOWN`, normalmente es que la Vercel GitHub
  App perdió acceso al repo privado: re-autorizar en
  https://github.com/settings/installations.

---

## Productos y slugs (referencia rápida)

| Slug | Producto |
| --- | --- |
| `dealer` | Dealer |
| `exportaciones` | Multipublicador |
| `crm4you` | CRM4YOU |
| `contact-center` | Contact Center |
| `spyne` | Photocall IA (Spyne) |
| `motorflash-message` | WhatsApp Business |
| `motorflash-mobile-tracking` | Mobile Tracking |
| `ia` | Inteligencia Artificial |
| `soluciones-web` | Servicios Web |
| `marketing-digital` | Marketing Digital |
| `portal-publicacion` | Portal de publicación |
| `lead-factory` | Lead Factory |
| `soluciones-fabricantes` | Soluciones para fabricantes |
| `motorflash-connect` | MotorFlash Connect (antes `motorflash-renting`) |
| `apex` | Apex |

Catálogo canónico: `src/catalog/products.ts`. Contenido rico:
`src/catalog/product-content.ts`.

---

## Estado actual del plan Multipublicador

Modelo **v5** vigente (16 jun 2026):

- `basePriceCents: 0`
- `exportacion_cochesnet` (select req): XS 36 / S 60 / M 36+coche / L
  48+coche / XL 60+coche / XXL 72+coche. **Incluye cargador básico**.
- `exportacion_verticales` (select req): XS 24 / S 36 / M-XXL por coche.
- `cuentas_*` (6 inputs number, unitCents 0): informativos.
- `feed_datos` 12000, `modulo_tasacion` 5000, `creacion_premium` 0,
  `marcas_agua` 2400.

Vinculación: cambiar `exportacion_cochesnet` ajusta
`exportacion_verticales` al mismo tier (excepto si el cliente puso "No
publicar").

---

## Verificación rápida en producción

```bash
# Items del plan Multipublicador
curl -s "https://motorflashsolutions.vercel.app/precios?_=$RANDOM" -H "Cache-Control: no-cache" | \
  grep -oE 'exportacion_cochesnet|exportacion_verticales|cuentas_[a-z]+|tier_cargador|portal_[a-z]+' | \
  sort | uniq -c

# Últimos deploys
npx vercel@latest ls 2>&1 | head -10
```

---

## Estado actual (septiembre 2026)

### BD Postgres

- Integración Vercel Marketplace `motorflash-db` **activa**. `/admin`
  responde 200 y `getMainMenu()` sirve items desde Payload.
- Si vuelve a caer por `planLimitReached`, el patrón es: Vercel
  Dashboard → Storage → `motorflash-db` → Upgrade plan. Como
  alternativa, migrar a Neon (`pg_dump` + swap del `POSTGRES_URL` en
  Vercel envs, ~15-30 min sin cambios de código). Payload reconecta
  solo en 2-3 min sin redeploy.

### Rendimiento — carga móvil

- **Fuentes** (`Outfit`, `Geist`) migradas a `next/font/google` en
  `src/app/[locale]/(frontend)/layout.tsx`. Self-hosted por Next,
  expuestas como CSS variables `--font-outfit` y `--font-geist`
  (referenciadas desde `styles.css` y `tailwind.config.ts`). Material
  Symbols sigue como hoja externa por no estar en `next/font`.
- **Widget ElevenLabs** (`src/components/elevenlabs/ElevenLabsWidget.tsx`)
  ya no bloquea la hidratación: el `<elevenlabs-convai>` y su script
  se difieren hasta `requestIdleCallback` (o fallback de 2.5s), y se
  fuerzan al primer scroll/pointerdown/keydown. `Script` cargado con
  `strategy="lazyOnload"`. Añadido `preconnect` a `unpkg.com`. Esto
  arregla el bug de "el menú móvil no responde y la web se queda
  bloqueada" al tocar antes de que hidrate.

### Envío de emails de formularios

- Destinatario: variable Vercel `COMMERCIAL_EMAIL` (Sensitive). Fallback
  en código: `comercial@motorflash.com`.
- Formularios que envían: `submitContact.ts`, `submitQuote.ts`,
  `submitMultiQuote.ts` (`src/app/actions/`). Cada uno envía dos
  correos: comercial + confirmación al remitente.
- Transporte: `@payloadcms/email-nodemailer` con SMTP genérico. Envs:
  `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAILER_FROM`
  (todas Sensitive en Vercel producción).
- From display: `Motorflash Ibérica` (hardcoded en
  `src/payload.config.ts:132`).

### SEO — estado actual

Toda la web tiene aplicado el "SEO máximo" con helpers reutilizables:

- **Helpers en `src/lib/seo/`**:
  - `i18n-metadata.ts`: `buildPageMetadata`, `buildAlternates`,
    `buildOpenGraph`, `localizedPath`. Cubre `es | ca | en | zh` + `x-default`.
  - `schema.ts`: `pageSchema` (WebPage/AboutPage/ContactPage/CollectionPage/ItemPage),
    `serviceSchema`, `productSchema` (AggregateOffer + priceRange),
    `faqPageSchema`, `breadcrumbSchema`, `organizationSchema`,
    `websiteSchema`, `jsonLdScript`.
- Layout raíz: `hreflang` completo (4 locales + `x-default`),
  `alternateLocale`, robots granular (`max-image-preview: large`,
  `max-snippet: -1`) en producción.
- Todas las páginas usan `buildPageMetadata` + JSON-LD específico +
  breadcrumb schema. `/canal-denuncias` además incluye `FAQPage`.
- Sitemap dinámico en `src/app/sitemap.ts` con rutas estáticas +
  `/servicios/[slug]` + planes de precios + pages del CMS.
- Robots en `src/app/robots.ts`: solo indexa en `VERCEL_ENV=production`.

### Cambios recientes relevantes en la home

- Sección "Catálogo en una línea" reemplazada: antes `ProductsTimeline`,
  ahora `EcosystemZones` (`src/components/EcosystemZones.tsx`). Tres
  zonas conectadas (Industrial naranja / Publicación azul / Gestión
  comercial verde) + Apex como chip sutil abajo. Textos i18n en
  `src/lib/catalog-zones-content.ts`. `ProductsTimeline` queda sin
  usos pero se mantiene en el repo.

### Botón flotante WhatsApp

- Server component `src/components/WhatsAppButton.tsx`, montado en
  el layout raíz (`(frontend)/layout.tsx`). Abajo-izquierda para no
  colisionar con `<elevenlabs-convai>` (abajo-derecha).
- Teléfono: `+34 910 78 72 59` → `wa.me/34910787259` con mensaje
  pre-rellenado por locale.
- **Importante**: teléfono distinto al de `contact-content.ts` (`+34
  910 788 575`). WhatsApp es un canal independiente.

### Página `/canal-denuncias`

- Página completa con hero, quién puede usarlo, materias cubiertas,
  garantías, cómo funciona, FAQ (6 preguntas por locale), marco legal
  (Ley 2/2023 + Directiva UE 2019/1937) y CTA al Google Form.
- Cuatro locales completos. Link desde el footer.
- Ya incluida en `RESERVED_SLUGS` del catch-all CMS y en el sitemap.

---

## Tareas abiertas pendientes (no auto-cerrar)

- #33 — Crear primer admin en producción (requiere `ALLOW_FIRST_USER_REGISTRATION=1`
  temporal en Vercel; ver `src/middleware.ts`).
- #34 — Rotar claves expuestas (Resend, Stitch).
- Purgar historia de git si `.env.production` llegó al repo alguna vez
  (revisión de seguridad pendiente por el usuario).
- Follow-up SEO: reenviar `sitemap.xml` en Google Search Console y
  Bing Webmaster Tools tras el último despliegue de SEO global para
  acelerar reindexado.
- Follow-up UX: unificar el helper i18n interno de
  `canal-denuncias/page.tsx` (que duplica su propio `LOCALES`/`OG_LOCALE_MAP`/
  `HREFLANG_MAP`) con `src/lib/seo/i18n-metadata.ts` cuando toque
  refactor.

---

## Siguientes pasos recomendados

1. **Verificar rich results en producción**:
   - `https://search.google.com/test/rich-results` con:
     - `/canal-denuncias` (FAQPage, BreadcrumbList, WebPage, ContactPage)
     - `/servicios/dealer` (Service, BreadcrumbList, ItemPage)
     - `/precios/exportaciones` (Product con AggregateOffer,
       BreadcrumbList)
2. **Reenviar sitemap** en Google Search Console y Bing Webmaster
   Tools.
3. **Crear primer admin** en producción (#33). Requiere set temporal de
   `ALLOW_FIRST_USER_REGISTRATION=1` en Vercel (ver `src/middleware.ts`),
   crear usuario, luego quitar la env y redeploy.
4. **Rotar claves expuestas** (#34) — Resend y Stitch, según lista de
   revisión de seguridad.
