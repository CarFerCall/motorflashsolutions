/**
 * Diagrama del Multipublicador: muestra Motorflash como hub central
 * que envía el anuncio del coche a los principales portales del
 * sector. Vive justo debajo del hero de
 * /servicios/exportaciones (slug: 'exportaciones').
 *
 * Versión estática (sin animación) — más legible que el diagrama
 * en órbita anterior, especialmente en móvil. Se inyecta vía
 * AFTER_HERO_BY_SLUG en GenericProductPage.
 */

const PORTALS = [
  { id: 'cochesnet', label: 'Coches.net', icon: 'directions_car' },
  { id: 'autoscout24', label: 'AutoScout24', icon: 'search' },
  { id: 'sumauto', label: 'Sumauto', icon: 'sell' },
  { id: 'wallapop', label: 'Wallapop', icon: 'storefront' },
  { id: 'autocasion', label: 'Autocasión', icon: 'two_wheeler' },
  { id: 'cochescom', label: 'Coches.com', icon: 'time_to_leave' },
  { id: 'motorflash', label: 'Motorflash.com', icon: 'bolt' },
]

export function MultipublicadorAnimation() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden" aria-label="Cómo Motorflash publica tu stock en los portales">
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,128,0,0.08), transparent 60%)' }} />

      <div className="mf-container">
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <span className="mf-eyebrow">Cómo funciona</span>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Un solo clic. Tu coche en cada portal.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant">
            Subes el vehículo una vez a Motorflash y replicamos su anuncio en tiempo real a Coches.net, AutoScout24, Wallapop y el resto de portales del sector.
          </p>
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
                <div className="font-display font-bold text-sm md:text-base">MOTORFLASH</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-80">
                  Publica · 1 clic
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center my-3 md:my-4" aria-hidden>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>south</span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary">
                Envía a
              </span>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>south</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 md:gap-3">
            {PORTALS.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-outline-variant rounded-xl px-3 py-3 md:px-3 md:py-4 flex items-center gap-2 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              >
                <span
                  className="flex items-center justify-center rounded-lg shrink-0"
                  style={{ width: 32, height: 32, background: 'rgba(255,128,0,0.10)' }}
                >
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                    {p.icon}
                  </span>
                </span>
                <span className="text-xs md:text-[13px] font-semibold text-on-surface leading-tight">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pie con stats sintéticas */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { v: '+50', l: 'Portales conectados' },
            { v: '99 %', l: 'Integración por API' },
            { v: '<5 min', l: 'Hasta publicar' },
            { v: '24/7', l: 'Sincronización automática' },
          ].map((s) => (
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
