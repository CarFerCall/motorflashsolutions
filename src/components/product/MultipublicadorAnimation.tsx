/**
 * Diagrama del Multipublicador (multilingüe).
 */
import { getLocale } from 'next-intl/server'
import { getProductUiCopy, type ProductUiLocale } from '@/lib/product-ui-content'

const PORTALS = [
  { id: 'cochesnet', label: 'Coches.net', logo: '/images/portals/cochesnet.jpeg' },
  { id: 'autoscout24', label: 'AutoScout24', logo: '/images/portals/autoscout24.jpg' },
  { id: 'sumauto', label: 'Sumauto', logo: '/images/portals/sumauto.png' },
  { id: 'wallapop', label: 'Wallapop', logo: '/images/portals/wallapop.webp' },
  { id: 'autocasion', label: 'Autocasión', logo: '/images/portals/autocasion.png' },
  { id: 'cochescom', label: 'Coches.com', logo: '/images/portals/cochescom.webp' },
  { id: 'googleads', label: 'Google Ads / Merchant', logo: '/images/portals/googleads.png' },
  { id: 'motorflash', label: 'Motorflash.com', logo: '/images/portals/motorflash.png' },
]

export async function MultipublicadorAnimation() {
  const locale = ((await getLocale()) as ProductUiLocale) || 'es'
  const t = await getProductUiCopy(locale)
  return (
    <section className="py-12 md:py-20 relative overflow-hidden" aria-label={t.multiAriaLabel}>
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,128,0,0.08), transparent 60%)' }} />

      <div className="mf-container">
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <span className="mf-eyebrow">{t.multiEyebrow}</span>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{t.multiTitle}</h2>
          <p className="text-sm md:text-base text-on-surface-variant">{t.multiLead}</p>
        </div>

        {/* Diagrama: hub Motorflash arriba, flecha de envío y grid
            de portales debajo. Mismo layout en móvil y desktop;
            solo cambia el número de columnas del grid. */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div
              className="flex items-center gap-3 md:gap-4 rounded-2xl text-white shadow-2xl px-5 py-3 md:px-7 md:py-4"
              style={{
                background: 'linear-gradient(135deg, #ff8c1a 0%, #ff7000 60%, #d96f00 100%)',
                boxShadow: '0 14px 36px rgba(255,128,0,0.40), 0 0 0 10px rgba(255,128,0,0.10)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
                directions_car
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-sm md:text-base">{t.multiHubName}</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-80">{t.multiHubSubline}</div>
              </div>
            </div>

            <div className="flex flex-col items-center my-3 md:my-4" aria-hidden>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>south</span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary">{t.multiSendsTo}</span>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>south</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 md:gap-3">
            {PORTALS.map((p) => (
              <div
                key={p.id}
                title={p.label}
                className="bg-white border border-outline-variant rounded-xl p-3 md:p-4 flex items-center justify-center h-16 md:h-20 min-w-0 shadow-sm hover:shadow-md hover:border-primary/40 transition-all overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.label}
                  loading="lazy"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pie con stats sintéticas */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {t.multiStats.map((s) => (
            <div key={s.l} className="text-center bg-white border border-outline-variant rounded-xl p-3">
              <div className="font-display text-xl md:text-2xl font-bold text-primary leading-none mb-1">{s.v}</div>
              <div className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
