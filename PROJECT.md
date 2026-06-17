# Motorflash Ibérica — Documentación técnica del proyecto

Web corporativa de Motorflash Ibérica Negocios construida con **Next.js 16
(App Router + Turbopack) + React 19 + TypeScript** y **Payload CMS v3** como
backend headless. Una sola aplicación sirve el sitio público (`/`), el panel
de administración (`/admin`) y la API de Payload (`/api/*`).

Este archivo es la referencia única del proyecto: arquitectura, decisiones,
operaciones comunes y dónde está cada cosa. Léelo entero la primera vez,
después úsalo como índice.

---

## 1. Resumen funcional

El sitio sirve a tres audiencias:

1. **Visitante público**: navega productos en `/servicios/{slug}`,
   configura precios en `/precios/{slug}` (o el configurador multi-producto
   en `/precios`), lee casos de éxito y el ecosistema técnico, y envía
   contacto/cotizaciones por formularios.
2. **Equipo comercial**: recibe las cotizaciones en su email
   (`COMMERCIAL_EMAIL`) y ve las solicitudes guardadas en la colección
   `Quotes` desde `/admin`.
3. **Equipo de contenido**: edita páginas (Page builder con Puck),
   navbar (global `MainMenu`) y tarifas (colección `PricingPlans`) desde
   `/admin` sin tocar código.

Todo el contenido de productos vive en el código (`src/catalog/`) porque es
estable y se versiona con git; solo lo que cambia con frecuencia comercial
(planes de precios, menú, páginas extra) está en Payload.

---

## 2. Stack y versiones

| Capa | Tecnología | Versión |
| --- | --- | --- |
| Runtime | Node | `>=20` (Vercel ejecuta 22) |
| Framework | Next.js | `^16.2` (App Router + Turbopack en dev) |
| UI | React | `^19.2` |
| Lenguaje | TypeScript | `^5.7` |
| CSS | Tailwind CSS | `^3.4` + tokens propios (`mf-*`) |
| CMS | Payload | `latest` (v3) |
| Editor de páginas | `@measured/puck` | `^0.20` |
| Editor rich text | `@payloadcms/richtext-lexical` | latest |
| BD producción | Postgres (Vercel/Neon) | adaptador `@payloadcms/db-postgres` |
| BD desarrollo | SQLite (archivo `motorflash.db`) | adaptador `@payloadcms/db-sqlite` |
| Email | Nodemailer | SMTP (Mailpit en dev, Resend en prod) |
| Imágenes | `sharp` | Vercel lo soporta nativo |
| Hosting | Vercel | tier Hobby suficiente |
| CI/CD | Vercel GitHub App | push a `main` → deploy a prod |

---

## 3. Estructura del repo

```
motorflash_iberica_next/
├── PROJECT.md                ← este archivo
├── CLAUDE.md                 ← referencia rápida para asistentes (Claude Code)
├── DEPLOY.md                 ← guía paso a paso de deploy a Vercel
├── README.md                 ← plantilla genérica de Payload (no usar como guía)
├── package.json              ← scripts y deps
├── next.config.ts            ← config Next (Turbopack, redirects, headers)
├── tailwind.config.ts        ← tokens y utilidades de marca
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.cjs
├── .env / .env.example       ← variables de entorno
├── .vercelignore             ← evita que `vercel CLI` suba `.env` local
├── motorflash.db             ← SQLite local (en .gitignore)
├── scripts/
│   └── sync-schema.mjs       ← seed + migraciones idempotentes (clave)
├── public/
│   └── images/
│       ├── products/         ← whatsapp.webp, hero genéricos, etc.
│       └── logo-motorflash.png
└── src/
    ├── payload.config.ts     ← bootstrap Payload (DB, email, admin, plugins)
    ├── seed.ts               ← seed inicial (poco usado, hoy preferimos sync-schema)
    ├── admin/                ← componentes del panel admin
    │   └── components/       ← Logo, Icon, Dashboard, PlanPreviewLink
    ├── app/
    │   ├── (frontend)/       ← sitio público
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                  ← home
    │   │   ├── styles.css                ← variables CSS y utilidades mf-*
    │   │   ├── compania/
    │   │   ├── contacto/
    │   │   │   └── gracias/
    │   │   ├── ecosistema-tecnico/
    │   │   ├── historias-de-exito/
    │   │   ├── servicios/
    │   │   │   ├── page.tsx              ← listado
    │   │   │   └── [slug]/page.tsx       ← ficha producto (GenericProductPage)
    │   │   ├── precios/
    │   │   │   ├── page.tsx              ← configurador multi-producto
    │   │   │   └── [slug]/
    │   │   │       ├── page.tsx          ← configurador por producto
    │   │   │       └── gracias/
    │   │   └── [slug]/page.tsx           ← páginas dinámicas desde Pages collection
    │   ├── (payload)/        ← rutas internas Payload (admin + API)
    │   │   ├── admin/[[...segments]]/
    │   │   └── api/[...slug]/
    │   ├── actions/          ← server actions
    │   │   ├── submitContact.ts
    │   │   ├── submitQuote.ts
    │   │   └── submitMultiQuote.ts
    │   └── api/              ← rutas API custom (vacío por ahora)
    ├── blocks/               ← definiciones de bloques Payload (Hero, FAQ, etc.)
    ├── catalog/
    │   ├── products.ts       ← lista canónica de productos (slug, nombre, hero)
    │   └── product-content.ts ← contenido rico por producto (features, process, cta)
    ├── collections/
    │   ├── Users.ts          ← auth admin
    │   ├── Pages.ts          ← páginas custom con Puck
    │   ├── PricingPlans.ts   ← planes/tarifas configurables
    │   └── Quotes.ts         ← cotizaciones recibidas
    ├── globals/
    │   └── MainMenu.ts       ← menú principal editable
    ├── components/
    │   ├── Navbar.tsx / NavbarClient.tsx
    │   ├── Footer.tsx
    │   ├── ContactForm.tsx
    │   ├── PricingConfigurator.tsx       ← UI del configurador multi-producto
    │   ├── pricing/PricingConfigurator.tsx ← UI configurador por producto
    │   ├── product/
    │   │   ├── GenericProductPage.tsx    ← layout estándar de servicio
    │   │   └── stitch/                   ← páginas custom por producto
    │   │       ├── Crm4you.tsx
    │   │       ├── Spyne.tsx
    │   │       ├── Ia.tsx
    │   │       ├── ContactCenter.tsx
    │   │       ├── SolucionesWeb.tsx
    │   │       └── PortalPublicacion.tsx
    │   ├── blocks/                       ← renderizadores para los Payload blocks
    │   ├── EcosystemHub.tsx              ← diagrama HUB animado
    │   ├── HistoryTimeline.tsx
    │   ├── ProductsTimeline.tsx
    │   ├── BeforeAfterSlider.tsx         ← slider Spyne
    │   ├── AnimatedCounter.tsx, Reveal.tsx ← micro-animaciones IntersectionObserver
    │   ├── PuckRender.tsx, PageLivePreview.tsx
    ├── lib/
    │   ├── payload.ts        ← helpers para obtener instancia Payload server-side
    │   ├── pricing.ts        ← normalización de items de plan
    │   ├── multiQuotePricing.ts ← lógica del configurador multi-producto
    │   ├── navigation.ts     ← lectura/normalización del menú
    │   └── seo/              ← metadatos
    └── puck/                 ← configuración Puck (catálogo de componentes editables)
```

---

## 4. Catálogo de productos

`src/catalog/products.ts` exporta la lista canónica. Cada slug del catálogo
puede tener tres "caras":

1. **Ficha pública** (`/servicios/{slug}`) → renderiza con
   `GenericProductPage` o con un componente custom en `components/product/stitch/`.
2. **Contenido rico** en `src/catalog/product-content.ts` (highlights,
   features, process steps, CTA).
3. **Plan de precios** (`/precios/{slug}`) si existe un `PricingPlans` con
   el mismo `productSlug` (creado por `scripts/sync-schema.mjs`).

### Slugs actuales

| Slug | Nombre comercial | Página | Plan en BD |
| --- | --- | --- | --- |
| `dealer` | Dealer | GenericProductPage | sí |
| `exportaciones` | Multipublicador | GenericProductPage | sí (modelo v5) |
| `crm4you` | CRM4YOU | `stitch/Crm4you.tsx` | sí |
| `contact-center` | Contact Center | `stitch/ContactCenter.tsx` | sí |
| `spyne` | Photocall IA (Spyne) | `stitch/Spyne.tsx` | — |
| `motorflash-message` | WhatsApp Business | GenericProductPage (hero con `whatsapp.webp`) | sí |
| `motorflash-mobile-tracking` | Mobile Tracking | GenericProductPage | — |
| `ia` | Inteligencia Artificial | `stitch/Ia.tsx` | — |
| `soluciones-web` | Servicios Web | `stitch/SolucionesWeb.tsx` | sí |
| `marketing-digital` | Marketing Digital | placeholder | — |
| `portal-publicacion` | Portal de publicación | `stitch/PortalPublicacion.tsx` | — |
| `lead-factory` | Lead Factory | placeholder | — |
| `soluciones-fabricantes` | Soluciones para fabricantes | placeholder | — |
| `motorflash-connect` | MotorFlash Connect | GenericProductPage | (renombrado desde `motorflash-renting`) |
| `apex` | Apex | placeholder | — |

> Si añades un producto nuevo: edita `products.ts`, opcionalmente añade
> `product-content.ts` y, si lleva precio, una entrada en el seed de
> `scripts/sync-schema.mjs`.

---

## 5. Payload CMS

`src/payload.config.ts` arranca Payload con cuatro colecciones y un global.

### Adaptador de BD (auto-detección)

```ts
const databaseUri = process.env.VERCEL_ENV
  ? process.env.POSTGRES_URL || DATABASE_URL || DATABASE_URI || 'file:./motorflash.db'
  : process.env.DATABASE_URI || POSTGRES_URL || DATABASE_URL || 'file:./motorflash.db'
const usesPostgres = /^postgres(ql)?:\/\//.test(databaseUri)
```

- En **Vercel** prioriza la URL de Postgres real e ignora cualquier
  `DATABASE_URI` heredada del `.env` local (que apuntaría a SQLite).
- En **local** manda `DATABASE_URI` (por defecto SQLite,
  `file:./motorflash.db`).
- El adaptador Postgres usa `push: true` — **no usamos migraciones**;
  el sync de schema lo hace `scripts/sync-schema.mjs` antes de `next build`.

### Colecciones

- **`Users`** (`collections/Users.ts`): auth del admin. La primera cuenta
  se crea entrando a `/admin` en producción la primera vez.
- **`Pages`** (`collections/Pages.ts`): páginas editables con
  **Puck** (drag-and-drop, live preview). Disponibles en `/{slug}`.
- **`PricingPlans`** (`collections/PricingPlans.ts`): planes/tarifas por
  producto. Estructura: `productSlug`, `productName`, `basePriceCents`,
  `billingCycle`, `enabled`, `items[]`. Cada `item` puede ser tipo
  `number`, `select` o `checkbox` (ver §6).
- **`Quotes`** (`collections/Quotes.ts`): cotizaciones recibidas
  (producto, selecciones, total, datos de contacto). El server action
  `submitMultiQuote.ts` guarda aquí y manda email a `COMMERCIAL_EMAIL`.

### Globals

- **`MainMenu`** (`globals/MainMenu.ts`): items del menú principal con
  enlaces internos/externos. `src/lib/navigation.ts` lo lee y normaliza
  para el `Navbar`.

### Blocks (Payload)

Definidos en `src/blocks/*.ts` y renderizados por
`components/blocks/BlockRenderer.tsx`. Se usan dentro de la
colección `Pages` para construir layouts sin código:

`Hero · FeatureGrid · ImageText · ProductCarousel · Testimonials · FAQ · CtaBanner · RichText`.

### Live Preview

Configurado en `payload.config.ts` con tres breakpoints (mobile/tablet/
desktop). Para la colección `Pages` apunta a `/{slug}?livePreview=true`,
que renderiza con `PageLivePreview.tsx`.

---

## 6. Configurador de precios

Dos modos de entrada:

1. **Por producto** (`/precios/{slug}`): UI focalizada en un solo plan.
2. **Multi-producto** (`/precios`): el cliente combina varios servicios y
   ve un total agregado. UI en `components/PricingConfigurator.tsx`,
   lógica de cálculo en `src/lib/multiQuotePricing.ts`.

### Modelo de datos (`PricingPlans.items[]`)

Cada item tiene un `itemKey` único dentro del plan y uno de tres tipos:

| Tipo | Campos | Cálculo |
| --- | --- | --- |
| `number` | `unitPriceCents`, `unit`, `min/max`, `default` | `qty × unitPriceCents`. Si `unitPriceCents === 0` se muestra como "X cuentas" sin sumar al total (uso informativo). |
| `select` | `selectOptions[]` con `value`, `label`, `priceCents`, `setupCents`, `isDefault` | suma `priceCents` y, si tiene `setupCents`, lo añade al pago único (no al mensual). |
| `checkbox` | `unitPriceCents`, `checkboxDefault` | si marcado suma `unitPriceCents`. Si es 0 se muestra como "seleccionado" sin sumar. |

Los inputs en el admin están en **euros**, no en céntimos (los hooks de
la colección los convierten). El frontend trabaja siempre con `*Cents`.

### Lógica de cálculo (`multiQuotePricing.ts`)

`computeProductLine(basePriceCents, items, selections)` devuelve:

```ts
{
  baseCents, itemsCents, totalCents,
  itemsDetail: [{ label, valueLabel, cents }, ...],
  setupCents, setupDetail
}
```

- Se ejecuta en cliente (resumen en vivo) y en server action (recálculo
  defensivo al enviar la cotización, para no fiarnos de lo que viene del
  cliente).
- `buildDefaultSelections(items)` genera la selección inicial.

### Vinculaciones específicas

`components/PricingConfigurator.tsx` tiene reglas de "selects que
se ajustan entre sí" cuando el cliente cambia uno. La activa hoy:

- **Multipublicador (`exportaciones`)**: al cambiar
  `exportacion_cochesnet`, `exportacion_verticales` se ajusta al
  mismo tier (xs→xs, s→s, m/l/xl/xxl→por_coche). Si el cliente puso
  "No publicar" en verticales, no se toca.

### Plan Multipublicador (modelo v5, vigente)

| Item | Tipo | Detalle |
| --- | --- | --- |
| `exportacion_cochesnet` | select (req) | XS 36 / S 60 / M 36+coche / L 48+coche / XL 60+coche / XXL 72+coche. **El cargador básico está fusionado** en estos precios. |
| `exportacion_verticales` | select (req) | XS 24 / S 36 / M-XXL por coche. |
| `cuentas_cochesnet` | number (0-50, def. 1, unitCents 0) | informativo, sin coste. |
| `cuentas_sumauto` | number | informativo. |
| `cuentas_cochescom` | number | informativo. |
| `cuentas_autocasion` | number | informativo. |
| `cuentas_autoscout24` | number | informativo. |
| `cuentas_wallapop` | number | informativo. |
| `feed_datos` | checkbox 12000 | feed de datos. |
| `modulo_tasacion` | checkbox 5000 | módulo de tasación. |
| `creacion_premium` | checkbox 0 | "creación premium por VIN" — se cotiza aparte. |
| `marcas_agua` | checkbox 2400 | marcas de agua. |

`basePriceCents: 0` (el cargador ya va dentro de Coches.net).

### Cotizaciones

- Cliente → submit del formulario → server action
  `submitMultiQuote.ts` →
  1) recalcula precios server-side desde `PricingPlans`,
  2) guarda en `Quotes`,
  3) manda email a `COMMERCIAL_EMAIL` con desglose.

---

## 7. Sincronización de schema y seed

`scripts/sync-schema.mjs` (~820 líneas) es el corazón del deploy.
Se ejecuta antes de `next build` en Vercel:

```json
"vercel-build": "payload generate:importmap && tsx ./scripts/sync-schema.mjs && next build"
```

**¿Por qué este orden?** SSG y RSC prerenderizan páginas (menú, planes)
durante `next build`; si el seed/migración corriera después, esas páginas
estáticas se quedarían con datos viejos.

### Qué hace

1. **Seed idempotente** de planes (`pricingSeed` array). Si el plan
   existe lo actualiza, si no lo crea. Compara por `productSlug`.
2. **Migraciones específicas** por producto, marcadas con guards
   idempotentes (revisan estado actual antes de aplicar). Cada bloque
   loguea con `[sync-schema] ↻ ...`.
3. **Migración de slug** legacy: `motorflash-renting` →
   `motorflash-connect`.

### Migraciones del Multipublicador (orden y guards)

```
v5 (vigente)  : si tiene tier_cargador → eliminar y fusionar precios en Coches.net
v4            : portal_* (checkbox) → cuentas_* (number sin coste)
v3            : tier_tamano → tier_cargador + selects de exportación
                (guard: skip si ya hay cuentas_*)
legacy        : check de portales (NO-OP en v5+: limpia portal_* si quedaran)
```

**Regla de oro de las migraciones idempotentes**: cada una mira el estado
actual del plan y solo modifica si encuentra la "forma vieja". Si añades
una migración nueva (v6, v7…), añade el guard correspondiente a las
anteriores para que no se pisen entre sí.

### Añadir un plan nuevo

1. Añade un objeto al array `pricingSeed` con `productSlug`,
   `productName`, `basePriceCents` y `items[]`.
2. Si el producto ya tiene plan en BD: añade un bloque de migración
   con guard que detecte la "forma vieja" y aplique los cambios.
3. Commit + push → Vercel ejecuta el seed automáticamente.

---

## 8. Variables de entorno

| Variable | Dev | Prod | Notas |
| --- | --- | --- | --- |
| `PAYLOAD_SECRET` | cualquier | aleatorio largo | `openssl rand -base64 32` |
| `DATABASE_URI` | `file:./motorflash.db` | — | en prod usar `POSTGRES_URL` |
| `POSTGRES_URL` / `DATABASE_URL` | — | string Postgres pooled | Vercel/Neon |
| `NEXT_PUBLIC_SERVER_URL` | `http://localhost:3100` | `https://motorflashsolutions.vercel.app` (o dominio final) | |
| `SMTP_HOST` | `localhost` (Mailpit) | `smtp.resend.com` | |
| `SMTP_PORT` | `1025` | `587` | |
| `SMTP_USER` | — | `resend` (para Resend) | |
| `SMTP_PASS` | — | API key del proveedor | |
| `MAILER_FROM` | `no-reply@motorflash.com` | id. (dominio verificado) | |
| `COMMERCIAL_EMAIL` | `comercial@motorflash.com` | id. | destino de cotizaciones |

⚠️ **`.vercelignore` incluye `.env*`** para evitar que `vercel CLI`
suba el `.env` local y pise las env vars del dashboard. Si lo cambias,
ten cuidado.

⚠️ **Push a Postgres con `NODE_ENV=production` falla**. El sync de
schema corre antes del build con dev forzado. Si tocas
`scripts/sync-schema.mjs` no pongas `NODE_ENV=production` arriba.

---

## 9. Scripts NPM

| Script | Qué hace |
| --- | --- |
| `npm run dev` | dev server local en `http://localhost:3100` (Turbopack). |
| `npm run devsafe` | borra `.next` antes de arrancar. |
| `npm run build` | `next build` puro (sin sync de schema; **no usar para deploy a prod**). |
| `npm run vercel-build` | `importmap → sync-schema → next build`. Lo que ejecuta Vercel. |
| `npm run start` | sirve la build (post-build). |
| `npm run lint` | ESLint. |
| `npm run generate:importmap` | genera el importmap de Payload (componentes admin). |
| `npm run generate:types` | genera `src/payload-types.ts` desde las colecciones. |
| `npm run seed` | ejecuta `src/seed.ts` (legacy; preferir `sync-schema.mjs`). |
| `npm run payload` | CLI de Payload (migraciones manuales, etc.). |

---

## 10. Deploy a Vercel

Guía detallada en `DEPLOY.md`. Resumen:

1. Push a `main` (repo `CarFerCall/motorflashsolutions`).
2. Vercel GitHub App detecta el push y arranca el deploy.
3. Ejecuta `vercel-build` (importmap → sync-schema → next build).
4. Producción: `motorflashsolutions.vercel.app`.

### Deploy manual desde local

```bash
npx vercel@latest --prod --yes        # deploy
npx vercel@latest cache purge --yes   # invalida CDN + data cache
```

Útil cuando quieres forzar un rebuild sin commit (raro).

### Si el repo es privado y los deploys quedan `UNKNOWN`

Re-autoriza la Vercel GitHub App en
https://github.com/settings/installations y dale acceso al repo.

---

## 11. Convenciones de código y estilo

- **Tailwind 3** + tokens propios. Variables CSS y utilidades `mf-*`
  declaradas en `src/app/(frontend)/styles.css`. Tipografía `font-display`
  para titulares grandes.
- **Material Symbols Outlined** para iconos (las clases
  `material-symbols-outlined` están globales).
- Componentes server-side por defecto. `'use client'` solo donde haga
  falta interactividad (configurador, formularios, sliders).
- Animaciones scroll-driven con `IntersectionObserver` (no librerías
  pesadas). Ver `Reveal.tsx`, `AnimatedCounter.tsx`.
- Sin librería de estado: server actions + URL state.
- **Sin librería de tests**: validación manual contra el dev server.
- Precios en céntimos internamente (`*Cents`), en euros en el admin (UI
  + hooks de Payload los convierten).

---

## 12. Operaciones comunes

### Crear el primer admin en producción

Abre `https://<tu-dominio>/admin`. La primera vez te lleva a un wizard
para crear la cuenta admin. Una vez creada, se desactiva.

### Cambiar una tarifa concreta

- Opción A (rápida, no versionada): admin → Comercial → Planes de
  precios → editar.
- Opción B (versionada): editar el objeto correspondiente en
  `scripts/sync-schema.mjs` (seed) **y** añadir un bloque de migración
  idempotente para empujar el cambio a producción en el próximo deploy.

### Añadir un producto al menú

Admin → Globals → Main Menu → editar items. O bien código en
`src/globals/MainMenu.ts` si quieres cambiar la estructura.

### Editar contenido de la home / casos de éxito / ecosistema

Estos están en código (no en Payload):
- Home: `src/app/(frontend)/page.tsx` + `HistoryTimeline.tsx`,
  `ProductsTimeline.tsx`.
- Casos de éxito: `src/app/(frontend)/historias-de-exito/page.tsx`.
- Ecosistema técnico: `src/app/(frontend)/ecosistema-tecnico/page.tsx`
  + `EcosystemHub.tsx`.

### Verificar el estado de un plan en producción

```bash
curl -s "https://motorflashsolutions.vercel.app/precios" | \
  grep -oE 'cuentas_cochesnet|exportacion_cochesnet|tier_cargador' | \
  sort | uniq -c
```

---

## 13. Troubleshooting

### "Deploy en UNKNOWN" en Vercel

- ¿Repo privado y la GitHub App perdió acceso? Re-autoriza.
- ¿Falló el sync-schema? Mira los logs de la build: cualquier excepción
  durante `tsx ./scripts/sync-schema.mjs` aborta el deploy.

### "Las páginas se quedan con datos viejos"

- El cache de Vercel sirve la página estática. `npx vercel cache purge`
  o redeploy con cambio dummy.
- En navegador: Cmd+Shift+R para hard reload.

### "El seed pisa los cambios que hice en el admin"

Sí — es por diseño. `sync-schema.mjs` es la fuente de verdad de la
estructura. Los **valores** que cambies en el admin se preservan solo si
la migración correspondiente no los toca. Si quieres dejar un campo en
"manos del admin", asegúrate de que ningún bloque de migración escribe
sobre él.

### "Email no llega en producción"

- Comprueba en el dashboard de Resend/Postmark que el dominio del
  `MAILER_FROM` está verificado.
- Las cotizaciones se guardan en `Quotes` aunque el email falle —
  recupera desde admin.

### "Cold start de 2 s en la primera petición"

Normal en serverless. Una vez calentada, instantánea. Si te molesta,
mueve a Vercel Pro (function warming) o a un host con servidor persistente.

### "Tengo 'renting' corriendo en local en paralelo"

Si necesitas matar el dev server de este proyecto, identifica el PID
exacto antes de hacer `kill`. Nunca uses `pkill -f "next dev"` —
mataría también el dev server del otro proyecto.

---

## 14. Pendientes y tareas abiertas

- **Crear primer admin en producción** (tarea #33).
- **Rotar las claves expuestas** (Resend, Stitch — tarea #34). Las
  claves que aparecieron en mensajes previos del chat deben darse por
  comprometidas y rotarse.

---

## 15. Referencias internas

- `DEPLOY.md` — guía paso a paso de deploy a Vercel (BD, env vars,
  dominios).
- `README.md` — plantilla genérica de Payload, no representa este
  proyecto; usar `PROJECT.md` (este archivo) como referencia.
- `CLAUDE.md` — atajos y reglas operativas para asistentes (Claude
  Code). Apunta a este archivo como índice maestro.
