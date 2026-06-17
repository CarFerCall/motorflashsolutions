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

- **Nunca** subir `.env` al repo ni al CLI de Vercel — `.vercelignore`
  ya lo bloquea. Si lo tocas, mantén la regla.
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

## Tareas abiertas pendientes (no auto-cerrar)

- #33 — Crear primer admin en producción.
- #34 — Rotar claves expuestas (Resend, Stitch).
