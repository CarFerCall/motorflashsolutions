import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import type { ProductLocale } from '@/catalog/products-i18n'
import {
  CATALOG_ZONES,
  ZONE_TO_SLUGS,
  type CatalogZone,
  type CatalogZonesLocale,
} from '@/lib/catalog-zones-content'

/**
 * Sección "Catálogo en una línea" (nuevo diseño por zonas).
 *
 * Tres zonas del ecosistema conectadas visualmente:
 *   Industrial → Publicación → Gestión comercial
 *
 * Cada zona tiene su propio color de acento, agrupa sus productos como
 * tarjetas link y se conecta con la siguiente mediante una flecha.
 * Apex se menciona al final como link sutil (chip con borde discontinuo),
 * sin robar protagonismo al ecosistema.
 *
 * En móvil el layout colapsa a una columna vertical con las flechas
 * girando 90º.
 */

interface ZoneStyle {
  accent: string // hex
  softBg: string // rgba
  iconBg: string
  borderSoft: string
  kickerColor: string
}

const ZONE_STYLE: Record<CatalogZone, ZoneStyle> = {
  industrial: {
    accent: '#ff8000',
    softBg: 'rgba(255,128,0,0.05)',
    iconBg: 'rgba(255,128,0,0.10)',
    borderSoft: 'rgba(255,128,0,0.20)',
    kickerColor: '#ff8000',
  },
  publication: {
    accent: '#2563eb',
    softBg: 'rgba(37,99,235,0.05)',
    iconBg: 'rgba(37,99,235,0.10)',
    borderSoft: 'rgba(37,99,235,0.20)',
    kickerColor: '#2563eb',
  },
  sales: {
    accent: '#10b981',
    softBg: 'rgba(16,185,129,0.05)',
    iconBg: 'rgba(16,185,129,0.10)',
    borderSoft: 'rgba(16,185,129,0.20)',
    kickerColor: '#10b981',
  },
}

function ZoneHeader({
  kicker,
  subtitle,
  style,
}: {
  kicker: string
  subtitle: string
  style: ZoneStyle
}) {
  return (
    <div className="text-center mb-6">
      <p
        className="text-xs md:text-[13px] font-black uppercase tracking-widest m-0"
        style={{ color: style.kickerColor }}
      >
        {kicker}
      </p>
      <p className="text-sm text-on-surface-variant mt-1 m-0">{subtitle}</p>
    </div>
  )
}

function ProductCard({
  slug,
  name,
  icon,
  style,
}: {
  slug: string
  name: string
  icon: string
  style: ZoneStyle
}) {
  return (
    <Link
      href={`/servicios/${slug}`}
      className="group flex flex-col items-center justify-start gap-2.5 rounded-2xl bg-white p-4 min-h-[112px] border transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{ borderColor: style.borderSoft }}
    >
      <span
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl transition-colors group-hover:brightness-95"
        style={{ background: style.iconBg }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 22, color: style.accent }}
        >
          {icon}
        </span>
      </span>
      <p
        className="text-[11px] md:text-xs font-bold uppercase tracking-tight text-on-surface text-center leading-tight m-0"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {name}
      </p>
    </Link>
  )
}

function ZoneBlock({
  zone,
  kicker,
  subtitle,
  products,
  columns,
  lead,
}: {
  zone: CatalogZone
  kicker: string
  subtitle: string
  products: Array<{ slug: string; name: string; icon: string }>
  columns: 1 | 2 | 3
  lead?: string
}) {
  const style = ZONE_STYLE[zone]
  const gridCols = columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
  return (
    <div
      className="rounded-3xl p-5 md:p-6 border"
      style={{ background: style.softBg, borderColor: style.borderSoft }}
    >
      <ZoneHeader kicker={kicker} subtitle={subtitle} style={style} />
      {lead && (
        <p className="text-xs text-on-surface-variant text-center -mt-4 mb-5 max-w-[220px] mx-auto m-0">
          {lead}
        </p>
      )}
      <div className={`grid ${gridCols} gap-3`}>
        {products.map((p) => (
          <ProductCard key={p.slug} slug={p.slug} name={p.name} icon={p.icon} style={style} />
        ))}
      </div>
    </div>
  )
}

function ArrowConnector() {
  return (
    <div className="flex items-center justify-center px-1" aria-hidden>
      {/* Desktop: flecha horizontal */}
      <span
        className="hidden lg:inline-flex items-center justify-center w-9 h-9 rounded-full text-white shadow-md"
        style={{ background: '#ff8000' }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>chevron_right</span>
      </span>
      {/* Móvil: flecha vertical */}
      <span
        className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-white shadow-md"
        style={{ background: '#ff8000' }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>expand_more</span>
      </span>
    </div>
  )
}

export async function EcosystemZones() {
  const localeRaw = ((await getLocale()) as string) || 'es'
  const locale = (['es', 'ca', 'en', 'zh'].includes(localeRaw)
    ? localeRaw
    : 'es') as CatalogZonesLocale
  const t = CATALOG_ZONES[locale]
  const products = orderedProducts(locale as ProductLocale)

  function productsFor(zone: CatalogZone) {
    return ZONE_TO_SLUGS[zone]
      .map((slug) => {
        const p = products.find((prod) => prod.slug === slug)
        if (!p) return null
        return { slug: p.slug, name: p.menuLabel ?? p.name, icon: p.icon }
      })
      .filter(Boolean) as Array<{ slug: string; name: string; icon: string }>
  }

  const industrial = productsFor('industrial')
  const publication = productsFor('publication')
  const sales = productsFor('sales')

  const apex = products.find((p) => p.slug === 'apex')

  return (
    <div className="mf-container">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <span className="mf-eyebrow">{t.eyebrow}</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 mb-3">{t.title}</h2>
        <p className="text-on-surface-variant leading-relaxed">{t.lead}</p>
      </div>

      {/* Zonas conectadas */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,220px)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 lg:gap-4 items-stretch">
        {/* Zona industrial */}
        <ZoneBlock
          zone="industrial"
          kicker={t.industrialKicker}
          subtitle={t.industrialSubtitle}
          lead={t.industrialLead}
          products={industrial}
          columns={1}
        />
        <ArrowConnector />

        {/* Zona publicación */}
        <ZoneBlock
          zone="publication"
          kicker={t.publicationKicker}
          subtitle={t.publicationSubtitle}
          products={publication}
          columns={3}
        />
        <ArrowConnector />

        {/* Zona gestión comercial */}
        <ZoneBlock
          zone="sales"
          kicker={t.salesKicker}
          subtitle={t.salesSubtitle}
          products={sales}
          columns={3}
        />
      </div>

      {/* Apex — mención sutil, no bloque destacado */}
      {apex && (
        <div className="mt-8 flex items-center justify-center">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 rounded-full border border-dashed text-sm text-on-surface-variant bg-white"
            style={{ borderColor: 'rgba(0,0,0,0.15)' }}
          >
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>
              workspaces
            </span>
            <span>{t.apexIntro}</span>
            <Link
              href={`/servicios/${apex.slug}`}
              className="font-bold text-primary hover:underline whitespace-nowrap"
            >
              {t.apexCta}
            </Link>
          </div>
        </div>
      )}

      {/* CTA final ver catálogo */}
      <div className="mt-6 text-center">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-sm font-bold text-on-surface hover:text-primary transition-colors"
        >
          {t.viewAllCta}
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
        </Link>
      </div>
    </div>
  )
}
