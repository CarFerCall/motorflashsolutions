# Deploy a Vercel

Guía paso a paso para llevar este proyecto a producción.

## Lo que necesitas

1. **Cuenta GitHub** (gratis). Si no tienes: https://github.com/signup
2. **Cuenta Vercel** (gratis con tier Hobby). https://vercel.com/signup — recomendable usar "Sign in with GitHub" para que se conecten automáticamente.
3. **Base de datos Postgres**. Vercel Postgres es la opción más directa; alternativas: Neon (mismo motor), Supabase, Railway.
4. **Proveedor de email** para producción. Mailpit solo funciona en local. Opciones: Resend (recomendado, 100 emails/día gratis), Postmark, SendGrid, AWS SES.

## Paso 1 — Subir a GitHub

```bash
cd /Users/carlosfernandezcalleja/Developed/motorflash_iberica_next
# El repo ya está inicializado. Lo conectas al remoto:
git remote add origin https://github.com/<TU_USUARIO>/motorflash-iberica-next.git
git branch -M main
git push -u origin main
```

Antes crea el repo vacío en https://github.com/new (visibilidad **Private**).

## Paso 2 — Provisionar Postgres

### Opción A · Vercel Postgres (más sencilla)

1. Dashboard de Vercel → **Storage** → **Create Database** → **Postgres**.
2. Elige una región (Frankfurt para Europa: `fra1`).
3. Cuando termine, copia el valor de **`POSTGRES_URL`** o `DATABASE_URL` — esa será tu `DATABASE_URI`.

### Opción B · Neon (gratis, plan generoso)

1. https://neon.tech → Crea proyecto.
2. Copia la "Pooled connection string" → ese es tu `DATABASE_URI`.

## Paso 3 — Conectar a Vercel

1. Vercel Dashboard → **Add New… → Project**.
2. Importa el repo de GitHub que creaste.
3. En **Configure Project** → **Environment Variables**, añade:

| Variable | Valor |
| --- | --- |
| `PAYLOAD_SECRET` | Una cadena larga aleatoria. Genera con `openssl rand -base64 32`. |
| `DATABASE_URI` | La connection string de Postgres del paso 2. |
| `NEXT_PUBLIC_SERVER_URL` | `https://tu-proyecto.vercel.app` (o tu dominio final). |
| `SMTP_HOST` | Servidor de tu proveedor (ej. `smtp.resend.com`). |
| `SMTP_PORT` | `587` o `465`. |
| `SMTP_USER` | Usuario del proveedor (ej. `resend` para Resend). |
| `SMTP_PASS` | API key del proveedor. |
| `MAILER_FROM` | `no-reply@motorflash.com` (ojo: tu dominio debe estar verificado en el proveedor). |
| `COMMERCIAL_EMAIL` | `comercial@motorflash.com`. |

4. **Build Command** y **Output Directory**: dejar por defecto (Next.js los detecta).
5. **Deploy**.

## Paso 4 — Sembrar el primer admin + plan de CRM4YOU

La primera vez que entres a `https://tu-proyecto.vercel.app/admin` te llevará a crear el usuario admin. Una vez dentro:

- Manualmente puedes crear el plan de CRM4YOU desde **Comercial → Planes de precios → Create**.
- O **mejor**, lanzar el seed contra la BD de producción desde local:

  ```bash
  # Conecta tu local a la BD de producción solo para el seed:
  DATABASE_URI="<la_de_vercel>" npm run seed
  ```

## Paso 5 — Dominio personalizado

Vercel Dashboard → tu proyecto → **Settings → Domains** → añade `tudominio.com`. Sigue las instrucciones de Vercel para añadir el registro CNAME / A en tu DNS.

Actualiza luego `NEXT_PUBLIC_SERVER_URL` en Environment Variables al dominio final.

## Notas técnicas

- **SQLite no funciona en Vercel** (filesystem efímero). El proyecto detecta automáticamente si `DATABASE_URI` empieza por `postgres://` y carga el adaptador correcto.
- **Cold starts**: Payload tarda ~2 s en la primera petición de cada función serverless. Una vez calentada, las peticiones son instantáneas.
- **Sharp**: Vercel lo soporta nativamente. No necesitas configuración extra.
- **Tier Hobby** de Vercel: 100 GB de ancho de banda/mes, suficiente para un sitio corporativo.

## Troubleshooting

**Error de migraciones al primer deploy** → Payload con Postgres ejecuta migraciones en build. Si falla, en local:
```bash
DATABASE_URI="<la_de_vercel>" npm run payload migrate:create
DATABASE_URI="<la_de_vercel>" npm run payload migrate
```

**Emails no llegan en producción** → comprueba en el dashboard de tu proveedor (Resend, etc.) que el dominio del `MAILER_FROM` está verificado. Las cotizaciones se guardan igualmente en BD aunque el email falle.
