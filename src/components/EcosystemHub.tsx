'use client'

import { useState } from 'react'

export interface EcosystemHub {
  key: string
  name: string
  icon: string
  shortLabel: string
  integrations: string[]
}

interface Props {
  hubs: EcosystemHub[]
}

const VIEWBOX_SIZE = 100
const HUB_RADIUS_PERCENT = 38 // distancia del centro a los sub-hubs

/**
 * Visualización animada del ecosistema de integraciones de Motorflash.
 *
 * Estados:
 * - Reposo: HUB central + 8 sub-hubs alrededor.
 * - Sub-hub activo: el sub-hub se agranda, los demás se atenúan, el
 *   HUB central también, y las integraciones aparecen como mini-nodos
 *   conectados al sub-hub con líneas finas. Todo dentro del mismo
 *   canvas — no hay panel debajo.
 */
export function EcosystemHub({ hubs }: Props) {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const activeHub = activeKey ? hubs.find((h) => h.key === activeKey) ?? null : null

  // Posiciones radiales de los sub-hubs en % del viewBox.
  const hubAngles = hubs.map((_, i) => (i / hubs.length) * Math.PI * 2 - Math.PI / 2)
  const hubPositions = hubAngles.map((a) => ({
    x: 50 + HUB_RADIUS_PERCENT * Math.cos(a),
    y: 50 + HUB_RADIUS_PERCENT * Math.sin(a),
  }))

  // Cuando hay sub-hub activo, calculamos posiciones para sus
  // integraciones alrededor del sub-hub. Las distribuimos en un
  // arco hacia AFUERA del HUB central (para no solaparlas con él).
  let integrationPositions: Array<{ x: number; y: number; label: string }> = []
  if (activeHub) {
    const idx = hubs.findIndex((h) => h.key === activeKey)
    const baseAngle = hubAngles[idx]
    const subX = hubPositions[idx].x
    const subY = hubPositions[idx].y
    const n = activeHub.integrations.length

    // Apertura total del arco según número de integraciones.
    const totalArc = Math.min(Math.PI * 1.45, (Math.PI / 4) + n * (Math.PI / 14))
    const startAngle = baseAngle - totalArc / 2
    const stepAngle = n > 1 ? totalArc / (n - 1) : 0
    const distance = n <= 4 ? 14 : n <= 6 ? 16 : 18

    integrationPositions = activeHub.integrations.map((label, i) => {
      const ang = n > 1 ? startAngle + stepAngle * i : baseAngle
      return {
        x: subX + distance * Math.cos(ang),
        y: subY + distance * Math.sin(ang),
        label,
      }
    })
  }

  return (
    <>
      {/* Diagrama (desktop) */}
      <div
        className="hidden lg:block relative w-full"
        style={{ aspectRatio: '1 / 1', maxWidth: 920, margin: '0 auto' }}
      >
        <svg
          viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 128, 0, 0.30)" />
              <stop offset="100%" stopColor="rgba(255, 128, 0, 0)" />
            </radialGradient>
            <linearGradient id="connLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(255, 128, 0, 0.20)" />
              <stop offset="50%" stopColor="rgba(255, 128, 0, 0.65)" />
              <stop offset="100%" stopColor="rgba(255, 128, 0, 0.20)" />
            </linearGradient>
          </defs>

          {/* Halo central */}
          <circle
            cx="50"
            cy="50"
            r="22"
            fill="url(#centerGlow)"
            className="mf-hub-pulse"
            style={{ opacity: activeHub ? 0.18 : 1, transition: 'opacity 0.4s ease' }}
          />

          {/* Conexiones del centro a cada sub-hub */}
          {hubPositions.map((p, i) => {
            const isActiveLine = activeKey === hubs[i].key
            return (
              <line
                key={`line-main-${i}`}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke="url(#connLine)"
                strokeWidth={isActiveLine ? 0.55 : 0.35}
                className="mf-hub-line"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: activeHub && !isActiveLine ? 0.15 : 1,
                  transition: 'opacity 0.4s ease, stroke-width 0.3s ease',
                }}
              />
            )
          })}

          {/* Conexiones del sub-hub activo a sus integraciones */}
          {activeHub && integrationPositions.map((p, i) => {
            const idx = hubs.findIndex((h) => h.key === activeKey)
            return (
              <line
                key={`line-int-${i}`}
                x1={hubPositions[idx].x}
                y1={hubPositions[idx].y}
                x2={p.x}
                y2={p.y}
                stroke="rgba(255, 128, 0, 0.7)"
                strokeWidth={0.3}
                strokeDasharray="0.8 0.8"
                className="mf-hub-int-line"
                style={{ animationDelay: `${0.2 + i * 0.05}s` }}
              />
            )
          })}
        </svg>

        {/* Centro: HUB MOTORFLASH */}
        <div
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            aspectRatio: '1 / 1',
            opacity: activeHub ? 0.4 : 1,
            transition: 'opacity 0.4s ease',
            zIndex: activeHub ? 1 : 5,
          }}
        >
          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl mf-hub-center"
            style={{
              background: 'linear-gradient(135deg, #ff8000, #d96f00)',
              boxShadow: '0 20px 60px rgba(255, 128, 0, 0.35), 0 0 0 8px rgba(255, 128, 0, 0.10)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>hub</span>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-1">HUB</span>
            <span className="text-xs font-bold">Motorflash</span>
          </div>
        </div>

        {/* Sub-hubs alrededor del centro */}
        {hubs.map((h, i) => {
          const isActive = activeKey === h.key
          const isDimmed = activeHub != null && !isActive
          const p = hubPositions[i]
          return (
            <button
              key={h.key}
              type="button"
              onClick={() => setActiveKey((k) => (k === h.key ? null : h.key))}
              className="absolute group mf-hub-node"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '20%',
                aspectRatio: '1 / 1',
                animationDelay: `${i * 0.12}s`,
                zIndex: isActive ? 20 : 4,
                opacity: isDimmed ? 0.3 : 1,
                transition: 'opacity 0.4s ease',
              }}
              aria-expanded={isActive}
              aria-label={h.name}
            >
              <div
                className={`w-full h-full rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  isActive ? 'scale-115' : 'group-hover:scale-105'
                }`}
                style={{
                  background: isActive ? 'linear-gradient(135deg, rgba(255,128,0,0.18), rgba(255,128,0,0.05))' : '#ffffff',
                  border: `2px solid ${isActive ? '#ff8000' : 'rgba(0,0,0,0.08)'}`,
                  boxShadow: isActive
                    ? '0 20px 60px rgba(255, 128, 0, 0.40), 0 0 0 6px rgba(255, 128, 0, 0.15)'
                    : '0 6px 20px rgba(0, 0, 0, 0.06)',
                  transform: isActive ? 'scale(1.15)' : undefined,
                }}
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{h.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface mt-1 px-2 leading-tight">{h.shortLabel}</span>
              </div>
            </button>
          )
        })}

        {/* Integraciones del sub-hub activo */}
        {activeHub && integrationPositions.map((p, i) => (
          <div
            key={`int-${activeKey}-${i}`}
            className="absolute mf-hub-int-pop"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${0.25 + i * 0.05}s`,
              zIndex: 15,
            }}
          >
            <div
              className="bg-white border border-primary/30 rounded-full whitespace-nowrap"
              style={{
                fontSize: 10,
                padding: '4px 10px',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
              }}
            >
              {p.label}
            </div>
          </div>
        ))}

        {/* Badge nombre del sub-hub activo + cerrar */}
        {activeHub && (
          <div
            className="absolute mf-hub-int-pop"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 25,
              animationDelay: '0.05s',
            }}
          >
            <div className="bg-white border-2 border-primary rounded-2xl shadow-2xl px-5 py-3 text-center min-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{activeHub.icon}</span>
                <h3 className="text-sm font-bold m-0 text-left">{activeHub.name}</h3>
                <button
                  type="button"
                  onClick={() => setActiveKey(null)}
                  aria-label="Cerrar"
                  className="ml-auto w-7 h-7 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 18 }}>close</span>
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold m-0">
                {activeHub.integrations.length} integraciones
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Móvil/tablet: lista vertical de hubs expandibles */}
      <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
        <div
          className="rounded-2xl text-white p-5 text-center"
          style={{ background: 'linear-gradient(135deg, #ff8000, #d96f00)', boxShadow: '0 12px 32px rgba(255,128,0,0.30)' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>hub</span>
          <p className="text-[10px] uppercase tracking-widest opacity-90 mt-1">HUB</p>
          <p className="text-lg font-bold m-0">Motorflash</p>
        </div>
        {hubs.map((h) => {
          const isActive = activeKey === h.key
          return (
            <details
              key={h.key}
              open={isActive}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) setActiveKey(h.key)
                else if (activeKey === h.key) setActiveKey(null)
              }}
              className="bg-white border border-outline-variant rounded-2xl overflow-hidden group"
            >
              <summary className="flex items-center gap-3 p-4 cursor-pointer list-none">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{h.icon}</span>
                </div>
                <span className="flex-1 font-semibold">{h.name}</span>
                <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-5 pb-5 border-t border-outline-variant">
                <ul className="flex flex-wrap gap-2 mt-4">
                  {h.integrations.map((i) => (
                    <li key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          )
        })}
      </div>
    </>
  )
}
