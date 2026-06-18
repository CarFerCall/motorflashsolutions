---
title: "Web Motorflash Solutions — Briefing de presentación"
subtitle: "Estructura, contenido y propósito por sección"
author: "Motorflash Ibérica Negocios"
date: "Junio 2026"
---

# Resumen ejecutivo

**Motorflashsolutions.vercel.app** es la web corporativa de Motorflash
Ibérica Negocios. Su función es **presentar el ecosistema completo de
productos** (15 servicios), generar leads cualificados a través del
formulario de contacto y del configurador de precios, y reforzar la
autoridad de marca de Motorflash en el sector del automóvil mediante
casos de éxito reales y un discurso técnico de hub conectado.

Está construida en **Next.js 16 + Payload CMS** sobre Postgres
(Vercel). El equipo de contenido edita el menú principal, los planes
de precios y páginas adicionales desde el panel de administración sin
tocar código; el contenido editorial estable de cada producto vive en
el repositorio.

Audiencias principales:

1. **Concesionarios independientes** que buscan profesionalizar su
   operativa sin perder agilidad.
2. **Grupos de concesionarios** que necesitan visión consolidada y
   control multi-sede.
3. **Fabricantes y marcas oficiales** que coordinan red comercial y
   buscan métricas a nivel marca/país.

\newpage

# 1. Página principal (Home)

**URL:** `/`
**Objetivo:** presentar el ecosistema completo, demostrar autoridad
con cifras, y mover al visitante hacia un producto concreto o al
contacto.

La home incluye un **menú desplegable sticky** justo bajo el navbar
que muestra los 12 epígrafes de la página y permite saltar a
cualquier sección con scroll suave.

## 1.1 Hero

- **Titular:** "La solución 360 para marcas y concesionarios del motor".
- **Subtítulo:** "Tu asistente invisible: rápido, preciso y siempre
  disponible. Tecnología que conecta cada servicio para hacerlo más
  inteligente y vender más".
- **CTAs:** *Ver nuestros servicios* · *Contactar ahora* · *Trabaja
  con nosotros*.
- **Chip eyebrow:** "IA Integrada · Automoción".

## 1.2 Catálogo en una línea (timeline de productos)

Línea de tiempo horizontal con los 15 productos del ecosistema en
una sola vista. Cada producto aparece con su icono y nombre. El
visitante recorre toda la oferta de un vistazo sin scrollear por
fichas individuales.

- **Titular:** "15 productos. Un único ecosistema".
- **Lead:** "Desde la publicación del stock hasta la gestión del fin
  de renting, cada pieza encaja con el resto. Recorre la línea para
  verlos todos".

## 1.3 Social proof bar

Banda inferior con tres cifras clave en una sola línea:

- **+1.500 concesionarios** usan Motorflash.
- **+70.000 llamadas** gestionadas al mes.
- **30.000 vehículos VO** publicados al mes.

## 1.4 Sobre Motorflash

Bloque de presentación corporativa con dos párrafos y 4 cifras
animadas (contadores) en la derecha:

- **+20 años** en el sector.
- **+1.500** clientes activos.
- **10 M€** facturación 2024.
- **+200 especialistas en IT**.

Mensaje: experiencia analizando datos del mercado VO, equipo de IT
propio, escala operativa real.

## 1.5 Qué resolvemos

Bloque "antes / ahora" con 6 cards. Cada card muestra un dolor real
del concesionario (subir stock portal a portal, fichas incompletas,
leads dispersos, fotos mediocres, llamadas perdidas, stock que no
rota) y la solución Motorflash correspondiente.

## 1.6 Cómo te ayudamos

Workflow de 4 pasos numerados: **Publica → Capta → Atiende → Vende**.
Cada paso explica brevemente la pieza del ecosistema que cubre esa
fase del ciclo comercial.

## 1.7 Resultados reales (banda naranja destacada)

Sección con fondo naranja corporativo y 4 stats animadas:

- **+30 h** ahorradas al mes por concesionario.
- **+50 %** más leads cualificados.
- **+25 %** menos tiempo de gestión.
- **+15 %** más margen por venta.

Cifras "medidas en clientes activos durante los últimos 12 meses".

## 1.8 Catálogo de productos (carrusel)

Carrusel horizontal con flechas con todas las fichas de producto
para que el visitante explore el catálogo completo en formato visual.

## 1.9 Ecosistema técnico (teaser)

Bloque oscuro con un mini diagrama HUB animado. Mensaje: "Motorflash
es el HUB que conecta todo tu stack". Lleva a la página completa
`/ecosistema-tecnico` con CTA "Ver el diagrama completo".

Cifras: **8 hubs · +40 integraciones · 1 punto de entrada**.

## 1.10 Para quién

Tres cards segmentando el público objetivo:

- Concesionarios independientes (Pyme · Multimarca).
- Grupos de concesionarios (Grupo · Multi-sede).
- Fabricantes y marcas oficiales (Fabricante · Marca).

## 1.11 Testimonios

3 citas anónimas con cargo y región (sin marca por NDA) más enlace a
*Historias de éxito completas →* `/historias-de-exito`.

## 1.12 Nuestra historia (teaser)

Bloque con imagen del equipo y dos párrafos: "Desde 2007 con Audi
Selection Plus como primer gran cliente hasta el ecosistema completo
con IA". Lleva a la página `/compania`.

## 1.13 Contact CTA

Banda oscura final con titular "¿Hablamos sobre tu negocio?",
formulario CTA y teléfono **+34 910 788 575**.

\newpage

# 2. Servicios (listado de productos)

**URL:** `/servicios`
**Objetivo:** servir de directorio rápido a las 15 fichas de producto.

Grid responsivo con todas las cards de producto del catálogo. Cada
card lleva a su ficha individual `/servicios/{slug}`.

## 2.1 Catálogo completo

| Producto | Slug | Pitch |
| --- | --- | --- |
| Dealer | `dealer` | Gestión inteligente del VO de principio a fin. |
| Multipublicador | `exportaciones` | Publica una vez, aparece en todos los portales. |
| CRM4YOU | `crm4you` | El CRM para grupos de concesionarios. |
| Contact Center | `contact-center` | Atención omnicanal, eficiencia total. |
| Photocall IA (Spyne) | `spyne` | Fotografía y vídeo de coches con IA. |
| WhatsApp Business | `motorflash-message` | WhatsApp profesional para VO. |
| Mobile Tracking | `motorflash-mobile-tracking` | Trazabilidad móvil. |
| Inteligencia Artificial | `ia` | IA conversacional + Quality Monitoring. |
| Servicios Web | `soluciones-web` | Webs corporativas para concesionarios. |
| Marketing Digital | `marketing-digital` | Campañas para automoción. |
| Portal de publicación | `portal-publicacion` | Publicación + gestión de stock. |
| Lead Factory | `lead-factory` | Generación de leads cualificados. |
| Soluciones para fabricantes | `soluciones-fabricantes` | Marcas oficiales. |
| MotorFlash Connect | `motorflash-connect` | Vídeos IA fin de renting. |
| Apex | `apex` | Plataforma premium. |

\newpage

# 3. Fichas de producto individuales

**URL:** `/servicios/{slug}`
**Objetivo:** explicar en profundidad cada producto y mover al usuario
hacia el formulario de contacto o al configurador de precios.

## 3.1 Plantilla genérica (GenericProductPage)

La mayoría de fichas siguen un layout estándar de 5 bloques:

1. **Hero**: breadcrumb, chip de categoría, titular, intro corta, dos
   CTAs ("Solicitar información" / "Ver todos los servicios") y, a la
   derecha, icono grande del producto (o imagen real, ej. WhatsApp).
2. **Highlights**: tarjetas con cifras destacadas (98 % conversión,
   +100 plantillas, RGPD, etc.) + bullets de "en profundidad".
3. **Features**: grid de funcionalidades con icono + título + descripción.
4. **Process**: pasos numerados del onboarding (típicamente 3-4 pasos:
   análisis → integración → puesta en marcha).
5. **CTA**: banda final con "¿Empezamos?" y botón a `/contacto?servicio={slug}`.

Al final aparece un bloque **"Otros servicios"** con 8 productos
más para fomentar la navegación cruzada.

## 3.2 Páginas custom

Algunos productos tienen su propia plantilla con secciones a medida:

- **CRM4YOU** (`/servicios/crm4you`): caso premium del catálogo,
  highlight visible.
- **Photocall IA (Spyne)** (`/servicios/spyne`): incluye un slider
  before/after con la sustitución de fondos del producto.
- **Inteligencia Artificial** (`/servicios/ia`): sección dedicada al
  Quality Monitoring y la IA conversacional WhatsApp/WebChat/Voz.
- **Contact Center** (`/servicios/contact-center`): tarifas y modelo
  operativo detallado.
- **Servicios Web** (`/servicios/soluciones-web`): showroom de
  ejemplos de webs entregadas.
- **Portal de publicación** (`/servicios/portal-publicacion`):
  arquitectura del portal.

## 3.3 Bloque destacado: Multipublicador

`/servicios/exportaciones` incluye además del layout estándar un
**diagrama "Cómo funciona"** justo debajo del hero:

- Hub central "MOTORFLASH" con icono de coche.
- Flecha "Envía a".
- Grid responsive con los 7 portales destino: **Coches.net ·
  AutoScout24 · Sumauto · Wallapop · Autocasión · Coches.com ·
  Motorflash.com**.
- Pie con stats: **+50 portales · 99 % API · <5 min · 24/7**.

\newpage

# 4. Precios y configurador

**URL:** `/precios` (multi-producto) y `/precios/{slug}` (por producto)
**Objetivo:** cualificar leads que ya están evaluando el coste y
recoger sus selecciones en formato cotización.

## 4.1 Configurador multi-producto

El visitante combina varios servicios y ve el total mensual en vivo.
Cada producto se despliega con sus opciones configurables:
**selects, inputs numéricos y checkboxes**. Al enviar el formulario,
la cotización se guarda en la BD (colección `Quotes`) y se envía por
email al equipo comercial (`comercial@motorflash.com`).

## 4.2 Ejemplo de plan: Multipublicador

Plan vigente del producto Multipublicador en el configurador:

- **Exportación a Coches.net** (obligatorio, incluye cargador básico):
  - XS · 36 €/mes (15-50 vehículos)
  - S · 60 €/mes (51-100 vehículos)
  - M · 36 €/mes + 0,48 €/coche (101-150)
  - L · 48 €/mes + 0,48 €/coche (151-250)
  - XL · 60 €/mes + 0,48 €/coche (251-500)
  - XXL · 72 €/mes + 0,48 €/coche (501-1.000)
- **Exportación a verticales** (obligatorio): XS 24 € / S 36 € / M-XXL
  por coche.
- **Cuentas por portal** (6 inputs informativos sin coste): Coches.net,
  Sumauto, Coches.com, Autocasión, AutoScout24, Wallapop.
- **Add-ons opcionales**: Feed de datos (120 €), Módulo de tasación
  (50 €), Creación premium por VIN (se cotiza aparte), Marcas de agua
  (24 €).

Cambiar el tier de Coches.net sincroniza automáticamente el tier de
verticales (xs → xs, s → s, m/l/xl/xxl → por_coche).

\newpage

# 5. Casos de éxito

**URL:** `/historias-de-exito`
**Objetivo:** generar confianza con clientes reales y reforzar la
amplitud del ecosistema (clientes que usan todo, clientes que usan una
sola pieza).

## 5.1 Hero

Titular: "Clientes que confían en nosotros desde hace años". Lead corto
y al grano.

## 5.2 Cinta de logotipos

Cinta superior con los logotipos oficiales (PNG) de los clientes en
cards blancas con sombra. Cada logo es ancla al caso correspondiente.
Última card: "+1.500 clientes más".

## 5.3 Casos detallados

Cada caso ocupa una sección completa con look & feel corporativo del
cliente (banner con su color, stats en su tono, quote con su tinta).
Estructura común:

- **Banner corporativo** con logo del cliente + tagline + badge.
- **Headline + intro** explicando el contrato (qué producto/s usan).
- **4 stats** clave del cliente (productos, leads, conversión, etc.).
- **Cita textual** del cliente.
- **Ecosistema contratado**: lista de los productos de Motorflash que
  tiene el cliente.

### 5.3.1 Jarmauto

- Cliente #1 de la compañía. Grupo multimarca en Madrid.
- Ecosistema completo: **Web · CRM4YOU · Contact Center · Marketing Digital**.
- Stats: 4 productos · +180 % leads · −32 % CPL · 360° visión.
- Look & feel: monocromo negro Jarmauto.

### 5.3.2 Ocasionplus

- Red nacional de VO. Especialista en stock.
- Ecosistema: **exportación · multipublicación · tasación online**.
- Stats: 3 servicios · +45 % rotación · −28 % días de venta · 24 h tasación.
- Look & feel: cian #00A3D7 + azul marino.

### 5.3.3 Flexicar

- Mayor red de VO de Iberia.
- Producto único: **Motorflash Message** (WhatsApp).
- Stats: 1 servicio · +180 centros · +62 % respuestas < 5 min · ES+PT.
- Look & feel: naranja #F37B20 + negro.

### 5.3.4 Muy Car

- Cliente desde el primer día del negocio.
- Ecosistema: **CRM4YOU · Web · Motorflash Message**.
- Stats: 3 productos · Día 1 · ×3,2 leads · 24/7.
- Look & feel: verde #1FB44E + negro.

### 5.3.5 Auto Elia

- Concesionario oficial Volvo y Lynk & Co.
- Ecosistema: **Web · Marketing Digital · Publicación stock · Motorflash Exclusive**.
- Stats: 4 productos · +74 % leads cualificados · +55 % conversión · Exclusive.
- Look & feel: azul Volvo + dorado premium.

## 5.4 CTA final

Banda naranja: "¿Quieres que tu marca sea el próximo caso?" con CTA
a `/contacto`.

\newpage

# 6. Ecosistema técnico

**URL:** `/ecosistema-tecnico`
**Objetivo:** explicar a nivel técnico la arquitectura de hubs que
conecta el stack del concesionario, dirigido a comprador técnico
(CIO, Dirección IT, jefes de producto).

## 6.1 Diagrama HUB animado

Visualización circular con Motorflash en el centro y 8 sub-hubs
orbitando: DMS, Portales, CRM, Financieras, Logística, Bases de
datos (JATO/Autovista/Carfax), Fabricantes, Conectividad.

Cada sub-hub muestra sus integraciones reales (Keyloop, Autoline,
Quiter, Coches.net, Santander, BBVA, etc.).

## 6.2 Mensaje principal

"Motorflash es el punto único de integración entre tu DMS, los
portales, tu CRM, las financieras, la logística y las bases de datos
del sector".

## 6.3 Cifras

- **8 hubs** funcionales.
- **+40 integraciones** activas.
- **1 punto de entrada** para todo el ecosistema.

\newpage

# 7. Compañía

**URL:** `/compania`
**Objetivo:** transmitir cultura, historia y propuesta de empleo
("Trabaja con nosotros").

Contenido:

- Historia de Motorflash desde 2007 (Audi Selection Plus como primer
  gran cliente) hasta hoy.
- Equipo: foto + cifras de plantilla.
- Sección "Trabaja con nosotros" (ancla `#trabaja-con-nosotros`) con
  cultura, beneficios y proceso de selección.

\newpage

# 8. Contacto

**URL:** `/contacto` (y `/contacto/gracias` post-envío)
**Objetivo:** captar el lead.

Formulario con nombre, empresa, email, teléfono, servicio de interés
(prerelleno si llegan desde una ficha de producto vía
`?servicio={slug}`) y mensaje libre. Al enviar:

1. Se guarda en la BD (colección `Quotes` o entidad de contacto).
2. Se envía email a `comercial@motorflash.com` con todos los datos.
3. El usuario es redirigido a `/contacto/gracias`.

\newpage

# 9. Navbar, footer y elementos transversales

## 9.1 Navbar

Menú principal editable desde el panel admin (global `MainMenu`).
Items por defecto: **Servicios · Compañía · Casos de éxito · Precios ·
Ecosistema técnico · Contacto**.

## 9.2 Footer

Información corporativa, enlaces legales, sociales, dirección y
teléfono.

## 9.3 Elementos visuales recurrentes

- **Tipografía display** para titulares.
- **Color primario** naranja `#FF8000` (acentos, CTAs, stats).
- **Material Symbols Outlined** como sistema de iconografía único.
- **Cards `mf-product-card`** con sombra suave y hover.
- **Animaciones scroll-driven** con `IntersectionObserver` (Reveal,
  AnimatedCounter) — sin librerías pesadas.

\newpage

# Anexo · Stack y arquitectura técnica

- **Frontend**: Next.js 16 (App Router + Turbopack), React 19, TypeScript 5.7.
- **CMS**: Payload v3 (rutas `/admin` y `/api/*`).
- **Editor de páginas**: Puck (drag-and-drop) con Live Preview.
- **BD**: Postgres en producción (Vercel/Neon), SQLite en desarrollo.
- **CSS**: Tailwind 3 + tokens propios (`mf-*`).
- **Email**: Nodemailer (Mailpit en dev, SMTP real en prod).
- **Hosting**: Vercel. Deploy con `git push main`.
- **Esquema**: sincronización idempotente vía `scripts/sync-schema.mjs`
  que corre antes de `next build`. Los planes de precios y las
  migraciones de items viven en este script.

## Colecciones editables desde admin

- **Pages** (páginas custom con drag-and-drop).
- **MainMenu** (menú principal).
- **PricingPlans** (planes/tarifas por producto).
- **Quotes** (cotizaciones recibidas).
- **Users** (acceso al admin).

## Endpoints clave

- `/admin` — panel de administración.
- `/api/*` — API REST de Payload (auto-generada).
- `/servicios/{slug}` — fichas de producto.
- `/precios` y `/precios/{slug}` — configurador.
- `/historias-de-exito` — casos de éxito.

\newpage

# Anexo · Cifras de referencia para discurso comercial

| Magnitud | Cifra |
| --- | --- |
| Concesionarios activos | +1.500 |
| Llamadas gestionadas/mes | +70.000 |
| Vehículos publicados/mes | 30.000 |
| Equipo IT | +200 especialistas |
| Años en el sector | +20 |
| Facturación 2024 | 10 M€ |
| Portales conectados | +50 |
| Integración por API | 99 % |
| Productos del catálogo | 15 |
| Hubs técnicos | 8 |
| Integraciones técnicas activas | +40 |

## Resultados típicos del cliente (cifras de marketing)

- **+30 h/mes** ahorradas por concesionario.
- **+50 %** más leads cualificados.
- **−25 %** tiempo de gestión.
- **+15 %** margen por venta.

---

*Documento generado a partir del contenido vivo en
`motorflashsolutions.vercel.app` (junio 2026).*
