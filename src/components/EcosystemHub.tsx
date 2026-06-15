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

/**
 * Visualización animada del ecosistema de integraciones de Motorflash.
 *
 * Disposición en círculo: el HUB MOTORFLASH ocupa el centro, los 8
 * sub-hubs se reparten alrededor en una circunferencia. Líneas SVG
 * animadas con stroke-dasharray conectan el centro con cada hub. Al
 * pulsar un hub se expande la lista de integraciones.
 *
 * Pensada para desktop. En móvil cae a una lista vertical clásica para
 * no perder legibilidad.
 */
export function EcosystemHub({ hubs }: Props) {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  // Posiciones en porcentaje sobre el viewBox 100x100 del SVG.
  // Repartimos los hubs uniformemente alrededor del HUB central.
  const radius = 38
  const positions = hubs.map((_, i) => {
    const angle = (i / hubs.length) * Math.PI * 2 - Math.PI / 2
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    }
  })

  return (
    <>
      {/* Diagrama (desktop) */}
      <div className="hidden lg:block relative w-full" style={{ aspectRatio: '1 / 1', maxWidth: 880, margin: '0 auto' }}>
        {/* SVG con conexiones animadas y halo central */}
        <svg
          viewBox="0 0 100 100"
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
          <circle cx="50" cy="50" r="22" fill="url(#centerGlow)" className="mf-hub-pulse" />

          {/* Conexiones del centro a cada sub-hub */}
          {positions.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke="url(#connLine)"
              strokeWidth={0.35}
              className="mf-hub-line"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
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
          const p = positions[i]
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
                zIndex: isActive ? 10 : 2,
              }}
              aria-expanded={isActive}
              aria-label={h.name}
            >
              <div
                className={`w-full h-full rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-105'
                }`}
                style={{
                  background: isActive ? 'rgba(255, 128, 0, 0.10)' : '#ffffff',
                  border: `2px solid ${isActive ? '#ff8000' : 'rgba(0,0,0,0.08)'}`,
                  boxShadow: isActive
                    ? '0 16px 48px rgba(255, 128, 0, 0.30)'
                    : '0 6px 20px rgba(0, 0, 0, 0.06)',
                }}
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{h.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface mt-1 px-2 leading-tight">{h.shortLabel}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Detalle del hub activo (debajo del diagrama, desktop) */}
      {activeKey && (
        <div className="hidden lg:block max-w-3xl mx-auto mt-8 bg-white border-2 border-primary/30 rounded-3xl p-7 shadow-xl">
          <DetalleHub hub={hubs.find((h) => h.key === activeKey)!} />
        </div>
      )}

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

function DetalleHub({ hub }: { hub: EcosystemHub }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-2xl">{hub.icon}</span>
        </div>
        <h3 className="text-xl font-semibold m-0">{hub.name}</h3>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
        {hub.integrations.length} integraciones disponibles
      </p>
      <ul className="flex flex-wrap gap-2">
        {hub.integrations.map((i) => (
          <li
            key={i}
            className="text-sm font-semibold px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant hover:border-primary/40 transition-colors"
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  )
}
