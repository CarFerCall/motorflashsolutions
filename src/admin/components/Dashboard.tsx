import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

const fmt = (cents: number) =>
  `${(cents / 100).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €`

function timeAgo(date: Date): string {
  const now = Date.now()
  const diff = Math.max(0, now - date.getTime())
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'hace un momento'
  if (m < 60) return `hace ${m} min`
  const h = Math.floor(m / 60)
  if (h < 24) return `hace ${h} h`
  const d = Math.floor(h / 24)
  if (d < 30) return `hace ${d} días`
  return date.toLocaleDateString('es-ES')
}

// Tiles que reflejan el contenido editable real — los Globals y colecciones
// que negocio va a tocar todos los días. Cada uno apunta al endpoint del
// admin correspondiente.
const PAGE_TILES: { href: string; icon: string; title: string; hint: string }[] = [
  { href: '/admin/globals/home-page', icon: '🏠', title: 'Home', hint: 'Hero, KPIs, secciones, CTAs' },
  { href: '/admin/globals/company-page', icon: '🏢', title: 'Compañía', hint: 'Sobre Motorflash, valores e historia' },
  { href: '/admin/globals/ecosystem-page', icon: '🛰️', title: 'Ecosistema técnico', hint: 'HUB e integraciones' },
  { href: '/admin/globals/services-listing-page', icon: '📋', title: 'Servicios (listado)', hint: 'Catálogo público' },
  { href: '/admin/globals/pricing-page', icon: '💰', title: 'Precios', hint: 'Textos del configurador' },
  { href: '/admin/globals/success-stories-page', icon: '⭐', title: 'Casos de éxito', hint: 'Hero y CTA' },
  { href: '/admin/globals/contact-page', icon: '✉️', title: 'Contacto', hint: 'Bloque oscuro y datos' },
  { href: '/admin/globals/footer', icon: '🦶', title: 'Pie de página', hint: 'Tagline, columnas, sellos ISO' },
  { href: '/admin/globals/main-menu', icon: '🧭', title: 'Menú principal', hint: 'Servicios y subdesplegables' },
]

const CATALOG_TILES = [
  { href: '/admin/collections/products', icon: '📦', title: 'Productos', hint: '15 productos del catálogo' },
  { href: '/admin/collections/product-content', icon: '📝', title: 'Fichas de producto', hint: 'Contenido rico de cada slug' },
  { href: '/admin/collections/success-cases', icon: '🏆', title: 'Casos de éxito', hint: '5 clientes con look propio' },
  { href: '/admin/collections/media', icon: '🖼️', title: 'Imágenes', hint: 'Logos y fotografías subidas' },
]

const OPERATIVE_TILES = [
  { href: '/admin/collections/pricing-plans', icon: '🏷️', title: 'Planes de precios', hint: 'Items y tarifas del configurador' },
  { href: '/admin/collections/quotes', icon: '📨', title: 'Cotizaciones recibidas', hint: 'Solicitudes desde la web' },
  { href: '/admin/collections/pages', icon: '🧱', title: 'Landings (Puck)', hint: 'Páginas con drag-and-drop' },
  { href: '/admin/collections/users', icon: '👤', title: 'Usuarios', hint: 'Altas y contraseñas' },
]

export default async function Dashboard() {
  const payload = await getPayload({ config })

  const [
    { totalDocs: totalQuotes },
    { totalDocs: newQuotes },
    { totalDocs: activePlans },
    { docs: recentQuotes },
  ] = await Promise.all([
    payload.find({ collection: 'quotes', limit: 0, depth: 0 }),
    payload.find({ collection: 'quotes', where: { status: { equals: 'new' } }, limit: 0, depth: 0 }),
    payload.find({ collection: 'pricing-plans', where: { enabled: { equals: true } }, limit: 0, depth: 0 }),
    payload.find({ collection: 'quotes', limit: 5, sort: '-createdAt', depth: 0 }),
  ])

  const monthAgo = new Date()
  monthAgo.setDate(monthAgo.getDate() - 30)
  const { totalDocs: monthlyQuotes } = await payload.find({
    collection: 'quotes',
    where: { createdAt: { greater_than_equal: monthAgo.toISOString() } },
    limit: 0,
    depth: 0,
  })

  const monthlyValueCents = (
    await payload.find({
      collection: 'quotes',
      where: { createdAt: { greater_than_equal: monthAgo.toISOString() } },
      limit: 1000,
      depth: 0,
    })
  ).docs.reduce((acc, q: any) => acc + (q.totalCents ?? 0), 0)

  return (
    <div className="mf-dashboard-shell">
      <header className="mf-dashboard__header">
        <h1 className="mf-dashboard__title">Hola 👋</h1>
        <p className="mf-dashboard__subtitle">
          Resumen del CMS de Motorflash Ibérica.
        </p>
      </header>

      {/* KPIs */}
      <div className="mf-dashboard">
        <div className="mf-kpi mf-kpi--accent">
          <div className="mf-kpi__icon">📩</div>
          <p className="mf-kpi__label">Cotizaciones nuevas</p>
          <p className="mf-kpi__value">{newQuotes}</p>
          <p className="mf-kpi__sub">
            {newQuotes === 0 ? 'Todo al día' : 'Pendientes de revisar'}
          </p>
        </div>

        <div className="mf-kpi">
          <div className="mf-kpi__icon">📊</div>
          <p className="mf-kpi__label">Cotizaciones último mes</p>
          <p className="mf-kpi__value">{monthlyQuotes}</p>
          <p className="mf-kpi__sub">Valor estimado: {fmt(monthlyValueCents)}</p>
        </div>

        <div className="mf-kpi">
          <div className="mf-kpi__icon">💼</div>
          <p className="mf-kpi__label">Total cotizaciones</p>
          <p className="mf-kpi__value">{totalQuotes}</p>
          <p className="mf-kpi__sub">Desde el inicio</p>
        </div>

        <div className="mf-kpi">
          <div className="mf-kpi__icon">⚙️</div>
          <p className="mf-kpi__label">Planes activos</p>
          <p className="mf-kpi__value">{activePlans}</p>
          <p className="mf-kpi__sub">Con configurador público</p>
        </div>
      </div>

      {/* Editar páginas de la web */}
      <section className="mf-dashboard__section">
        <div className="mf-dashboard__section-head">
          <h2 className="mf-section-heading">Editar páginas de la web</h2>
          <p className="mf-section-lead">Cada bloque es una página del sitio. Edita textos por idioma desde la pestaña superior.</p>
        </div>
        <div className="mf-tile-grid">
          {PAGE_TILES.map((t) => (
            <Link key={t.href} href={t.href} className="mf-tile">
              <span className="mf-tile__icon">{t.icon}</span>
              <span className="mf-tile__title">{t.title}</span>
              <span className="mf-tile__hint">{t.hint}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Catálogo */}
      <section className="mf-dashboard__section">
        <div className="mf-dashboard__section-head">
          <h2 className="mf-section-heading">Catálogo y contenido</h2>
          <p className="mf-section-lead">Productos, fichas, casos y media que se muestran a lo largo de la web.</p>
        </div>
        <div className="mf-tile-grid">
          {CATALOG_TILES.map((t) => (
            <Link key={t.href} href={t.href} className="mf-tile">
              <span className="mf-tile__icon">{t.icon}</span>
              <span className="mf-tile__title">{t.title}</span>
              <span className="mf-tile__hint">{t.hint}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Operativa */}
      <section className="mf-dashboard__section">
        <div className="mf-dashboard__section-head">
          <h2 className="mf-section-heading">Operativa</h2>
          <p className="mf-section-lead">Configurador de precios, leads y administración.</p>
        </div>
        <div className="mf-tile-grid">
          {OPERATIVE_TILES.map((t) => (
            <Link key={t.href} href={t.href} className="mf-tile">
              <span className="mf-tile__icon">{t.icon}</span>
              <span className="mf-tile__title">{t.title}</span>
              <span className="mf-tile__hint">{t.hint}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Últimas cotizaciones */}
      {recentQuotes.length > 0 && (
        <section className="mf-dashboard__section">
          <div className="mf-dashboard__section-head">
            <h2 className="mf-section-heading">Últimas cotizaciones</h2>
            <Link href="/admin/collections/quotes" className="mf-section-link">Ver todas →</Link>
          </div>
          <div className="mf-quotes-list">
            {recentQuotes.map((q: any) => (
              <Link key={q.id} href={`/admin/collections/quotes/${q.id}`} className="mf-quote-row">
                <div className="mf-quote-row__main">
                  <div className="mf-quote-row__title">{q.productName} · {q.contactName}</div>
                  <div className="mf-quote-row__meta">{q.email} · {timeAgo(new Date(q.createdAt))}</div>
                </div>
                <div className="mf-quote-row__side">
                  <div className="mf-quote-row__amount">{fmt(q.totalCents ?? 0)}</div>
                  <div
                    className="mf-quote-row__status"
                    style={{ color: statusColor(q.status) }}
                  >
                    {statusLabel(q.status)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function statusLabel(s: string): string {
  return ({
    new: 'Nueva',
    contacted: 'Contactado',
    quoted: 'Presupuesto enviado',
    won: 'Ganada',
    lost: 'Perdida',
  } as Record<string, string>)[s] ?? s
}

function statusColor(s: string): string {
  return ({
    new: '#ff8000',
    contacted: '#2563eb',
    quoted: '#7c3aed',
    won: '#16a34a',
    lost: '#9ca3af',
  } as Record<string, string>)[s] ?? '#454747'
}
