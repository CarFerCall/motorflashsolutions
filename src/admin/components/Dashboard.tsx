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
    <div style={{ padding: '24px 0' }}>
      <h1
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 32,
          fontWeight: 600,
          margin: '0 0 8px',
          letterSpacing: '-0.02em',
        }}
      >
        Hola 👋
      </h1>
      <p style={{ color: '#454747', margin: '0 0 24px' }}>
        Resumen del CMS de Motorflash Ibérica.
      </p>

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

      <p className="mf-section-title">Accesos rápidos</p>
      <div className="mf-shortcuts">
        <Link href="/admin/collections/pricing-plans/create" className="mf-shortcut">
          <span className="mf-shortcut__icon">➕</span>
          <div>
            <p className="mf-shortcut__title">Crear plan de precios</p>
            <p className="mf-shortcut__hint">Da de alta el configurador de un nuevo producto</p>
          </div>
        </Link>

        <Link href="/admin/collections/pricing-plans" className="mf-shortcut">
          <span className="mf-shortcut__icon">🏷️</span>
          <div>
            <p className="mf-shortcut__title">Ver planes</p>
            <p className="mf-shortcut__hint">{activePlans} {activePlans === 1 ? 'plan activo' : 'planes activos'}</p>
          </div>
        </Link>

        <Link href="/admin/collections/quotes" className="mf-shortcut">
          <span className="mf-shortcut__icon">📨</span>
          <div>
            <p className="mf-shortcut__title">Bandeja de cotizaciones</p>
            <p className="mf-shortcut__hint">{newQuotes} {newQuotes === 1 ? 'nueva' : 'nuevas'}</p>
          </div>
        </Link>

        <Link href="/admin/collections/users" className="mf-shortcut">
          <span className="mf-shortcut__icon">👤</span>
          <div>
            <p className="mf-shortcut__title">Gestionar usuarios</p>
            <p className="mf-shortcut__hint">Altas, cambios de contraseña</p>
          </div>
        </Link>
      </div>

      {recentQuotes.length > 0 && (
        <>
          <p className="mf-section-title">Últimas cotizaciones</p>
          <div
            style={{
              background: '#fff',
              border: '1px solid #e2e2e2',
              borderRadius: 12,
              overflow: 'hidden',
              marginBottom: 32,
            }}
          >
            {recentQuotes.map((q: any, i) => (
              <Link
                key={q.id}
                href={`/admin/collections/quotes/${q.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderBottom: i < recentQuotes.length - 1 ? '1px solid #f0f0f0' : 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                  gap: 16,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>
                    {q.productName} · {q.contactName}
                  </div>
                  <div style={{ fontSize: 13, color: '#454747', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {q.email} · {timeAgo(new Date(q.createdAt))}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: 700, color: '#ff8000', fontSize: 16 }}>
                    {fmt(q.totalCents ?? 0)}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: statusColor(q.status),
                    }}
                  >
                    {statusLabel(q.status)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
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
