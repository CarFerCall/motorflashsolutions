'use client'

/**
 * Animación del Multipublicador: muestra cómo un anuncio de coche
 * se replica desde Motorflash hacia los principales portales del
 * sector. Pensada para vivir justo debajo del hero de
 * /servicios/exportaciones (slug: 'exportaciones').
 *
 * No depende de librerías de animación: usa SVG + CSS keyframes
 * para los "destellos" que viajan a cada portal y un keyframe de
 * pulso para resaltar cada portal cuando recibe el anuncio.
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

// viewBox del SVG. El contenedor padre adopta esta misma proporción
// (aspect-ratio) para que los portales HTML posicionados en % caigan
// exactamente sobre los extremos de las líneas SVG sin descentrado.
const VIEW_W = 880
const VIEW_H = 480
const CENTER_X = VIEW_W / 2
const CENTER_Y = VIEW_H / 2
const RADIUS_X = 310
const RADIUS_Y = 165

// Reparte los portales en un óvalo alrededor del centro empezando
// desde arriba y avanzando en sentido horario.
const portalPositions = PORTALS.map((p, i) => {
  const angle = (i / PORTALS.length) * Math.PI * 2 - Math.PI / 2
  return {
    ...p,
    x: CENTER_X + RADIUS_X * Math.cos(angle),
    y: CENTER_Y + RADIUS_Y * Math.sin(angle),
  }
})

const TRAVEL_DURATION = 2.6 // segundos por viaje
const STAGGER = TRAVEL_DURATION / PORTALS.length // desfase entre destellos

export function MultipublicadorAnimation() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden" aria-label="Animación: cómo Motorflash publica tu stock en los portales">
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,128,0,0.08), transparent 60%)' }} />

      <div className="mf-container">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <span className="mf-eyebrow">Cómo funciona</span>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Un solo clic. Tu coche en cada portal.
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant">
            Subes el vehículo una vez a Motorflash y replicamos su anuncio en tiempo real a Coches.net, AutoScout24, Wallapop y el resto de portales del sector.
          </p>
        </div>

        {/* Diagrama estático para móvil (la animación SVG queda
            ilegible en pantallas estrechas). Muestra Motorflash
            arriba, una flecha de "envío" y un grid 2×4 con los 7
            portales como destinos. */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <div
              className="flex items-center gap-3 rounded-2xl text-white shadow-2xl px-5 py-3"
              style={{
                background: 'linear-gradient(135deg, #ff8c1a 0%, #ff7000 60%, #d96f00 100%)',
                boxShadow: '0 12px 28px rgba(255,128,0,0.40), 0 0 0 8px rgba(255,128,0,0.10)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                directions_car
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-sm">MOTORFLASH</div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Publica · 1 clic</div>
              </div>
            </div>
            <div className="flex flex-col items-center my-3" aria-hidden>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                south
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Envía a</span>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                south
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {PORTALS.map((p) => (
              <div
                key={`mobile-portal-${p.id}`}
                className="bg-white border border-outline-variant rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm"
              >
                <span
                  className="flex items-center justify-center rounded-lg shrink-0"
                  style={{ width: 28, height: 28, background: 'rgba(255,128,0,0.10)' }}
                >
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>
                    {p.icon}
                  </span>
                </span>
                <span className="text-xs font-semibold text-on-surface leading-tight">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Animación SVG completa: solo desktop/tablet (≥ md). */}
        <div
          className="relative mx-auto hidden md:block"
          style={{ maxWidth: 760, aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
        >
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-hidden
          >
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 128, 0, 0.45)" />
                <stop offset="60%" stopColor="rgba(255, 128, 0, 0.12)" />
                <stop offset="100%" stopColor="rgba(255, 128, 0, 0)" />
              </radialGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,128,0,0.5)" />
                <stop offset="100%" stopColor="rgba(255,128,0,0.05)" />
              </linearGradient>
            </defs>

            {/* Resplandor del centro */}
            <circle cx={CENTER_X} cy={CENTER_Y} r="220" fill="url(#hubGlow)" />

            {/* Líneas conectoras */}
            {portalPositions.map((p) => (
              <line
                key={`line-${p.id}`}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={p.x}
                y2={p.y}
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            ))}

            {/* "Destellos" que viajan del centro a cada portal */}
            {portalPositions.map((p, i) => {
              const delay = i * STAGGER
              const dx = p.x - CENTER_X
              const dy = p.y - CENTER_Y
              return (
                <g
                  key={`spark-${p.id}`}
                  style={{
                    // Animación CSS que mueve el grupo desde (0,0) a
                    // (dx, dy) relativo al centro. La posición base
                    // del grupo es (CENTER_X, CENTER_Y).
                    transform: `translate(${CENTER_X}px, ${CENTER_Y}px)`,
                    animation: `mfTravel-${i} ${TRAVEL_DURATION}s linear ${delay}s infinite`,
                  }}
                >
                  <circle r="9" fill="rgba(255,128,0,0.18)" />
                  <circle r="5" fill="#ff8000" />
                  <circle r="2.5" fill="#ffffff" />
                  <style>{`
                    @keyframes mfTravel-${i} {
                      0%   { transform: translate(${CENTER_X}px, ${CENTER_Y}px); opacity: 0; }
                      8%   { opacity: 1; }
                      85%  { opacity: 1; }
                      100% { transform: translate(${CENTER_X + dx}px, ${CENTER_Y + dy}px); opacity: 0; }
                    }
                  `}</style>
                </g>
              )
            })}
          </svg>

          {/* Centro: Motorflash + coche */}
          <div
            className="absolute"
            style={{
              left: `${(CENTER_X / VIEW_W) * 100}%`,
              top: `${(CENTER_Y / VIEW_H) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="relative flex flex-col items-center justify-center rounded-2xl text-white shadow-2xl"
              style={{
                width: 'clamp(108px, 13vw, 152px)',
                aspectRatio: '1 / 1',
                background: 'linear-gradient(135deg, #ff8c1a 0%, #ff7000 60%, #d96f00 100%)',
                boxShadow: '0 14px 36px rgba(255,128,0,0.40), 0 0 0 10px rgba(255,128,0,0.10)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}>
                directions_car
              </span>
              <span className="font-display font-bold mt-0.5" style={{ fontSize: 'clamp(10px, 0.95vw, 12px)' }}>
                MOTORFLASH
              </span>
              <span className="uppercase tracking-widest opacity-80" style={{ fontSize: 'clamp(8px, 0.7vw, 10px)' }}>
                Publica · 1 clic
              </span>
            </div>
          </div>

          {/* Portales en órbita */}
          {portalPositions.map((p, i) => {
            const delay = i * STAGGER
            return (
              <div
                key={`portal-${p.id}`}
                className="absolute"
                style={{
                  left: `${(p.x / VIEW_W) * 100}%`,
                  top: `${(p.y / VIEW_H) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="bg-white border border-outline-variant rounded-xl shadow-md flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 whitespace-nowrap"
                  style={{
                    // El portal "pulsa" justo cuando el destello llega
                    // (al final del ciclo). Empieza con su delay y se
                    // repite con el mismo periodo.
                    animation: `mfPortalPulse ${TRAVEL_DURATION}s ease-out ${delay + TRAVEL_DURATION * 0.9}s infinite`,
                  }}
                >
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>
                    {p.icon}
                  </span>
                  <span className="text-[11px] md:text-xs font-semibold text-on-surface">
                    {p.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pie con stats sintéticas */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
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

      <style>{`
        @keyframes mfPortalPulse {
          0%, 80% { box-shadow: 0 6px 16px rgba(0,0,0,0.08); transform: translate(-50%, -50%) scale(1); }
          88%     { box-shadow: 0 0 0 10px rgba(255,128,0,0.22), 0 12px 28px rgba(255,128,0,0.30); transform: translate(-50%, -50%) scale(1.08); }
          100%    { box-shadow: 0 6px 16px rgba(0,0,0,0.08); transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  )
}
