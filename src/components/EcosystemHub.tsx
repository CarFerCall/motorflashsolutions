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
  // integraciones repartidas en un arco AMPLIO alrededor del sub-hub
  // activo. Como los otros sub-hubs se ocultan mientras tanto, las
  // integraciones tienen todo el espacio del canvas para sí.
  let integrationPositions: Array<{ x: number; y: number; label: string; ang: number }> = []
  if (activeHub) {
    const idx = hubs.findIndex((h) => h.key === activeKey)
    const baseAngle = hubAngles[idx]
    const subX = hubPositions[idx].x
    const subY = hubPositions[idx].y
    const n = activeHub.integrations.length

    // Las integraciones se reparten en un arco de hasta 180°
    // centrado HACIA AFUERA del HUB central (perpendicular máxima),
    // de modo que ningún extremo del arco quede entre el sub-hub y
    // el centro — evita que los pills caigan encima de la card del
    // sub-hub activo.
    const MAX_ARC = Math.PI // 180°
    const totalArc = Math.min(MAX_ARC, (Math.PI * 0.45) + n * (Math.PI / 14))
    const startAngle = baseAngle - totalArc / 2
    const stepAngle = n > 1 ? totalArc / (n - 1) : 0

    // Radio variable: más integraciones → más lejos para que los
    // pills no se monten entre sí. Forzado mínimo lejos del centro.
    const distance = n <= 2 ? 16 : n <= 4 ? 19 : n <= 6 ? 22 : n <= 8 ? 25 : 28

    // El centro del diagrama (card del sub-hub activo) tiene una
    // exclusión radial: si por azar una integración cae dentro de
    // ese radio, la empujamos hacia fuera siguiendo su mismo ángulo.
    const CENTER_EXCLUSION = 22

    integrationPositions = activeHub.integrations.map((label, i) => {
      const ang = n > 1 ? startAngle + stepAngle * i : baseAngle
      let x = subX + distance * Math.cos(ang)
      let y = subY + distance * Math.sin(ang)
      // Empuje fuera del centro si entra en la zona de exclusión.
      const dx = x - 50
      const dy = y - 50
      const distFromCenter = Math.sqrt(dx * dx + dy * dy)
      if (distFromCenter < CENTER_EXCLUSION && distFromCenter > 0.1) {
        const scale = CENTER_EXCLUSION / distFromCenter
        x = 50 + dx * scale
        y = 50 + dy * scale
      }
      return {
        x: Math.max(6, Math.min(94, x)),
        y: Math.max(6, Math.min(94, y)),
        label,
        ang,
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

          {/* Conexiones del centro a cada sub-hub. Las de los
              sub-hubs ocultos también desaparecen. */}
          {hubPositions.map((p, i) => {
            const isActiveLine = activeKey === hubs[i].key
            const isHiddenLine = activeHub != null && !isActiveLine
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
                  opacity: isHiddenLine ? 0 : 1,
                  transition: 'opacity 0.35s ease, stroke-width 0.3s ease',
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

        {/* Sub-hubs alrededor del centro. Los inactivos se ocultan
            cuando hay uno activo para liberar espacio a las
            integraciones y evitar solapes.
            Sólo el icono dentro del círculo — la etiqueta de texto
            se renderiza FUERA, debajo o encima según si el sub-hub
            está en la mitad inferior o superior, para que no se
            atraviese el círculo. */}
        {hubs.map((h, i) => {
          const isActive = activeKey === h.key
          const isHidden = activeHub != null && !isActive
          const p = hubPositions[i]
          return (
            <button
              key={`btn-${h.key}`}
              type="button"
              onClick={() => setActiveKey((k) => (k === h.key ? null : h.key))}
              className="absolute group mf-hub-node"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '15%',
                aspectRatio: '1 / 1',
                animationDelay: `${i * 0.12}s`,
                zIndex: isActive ? 20 : 4,
                opacity: isHidden ? 0 : 1,
                pointerEvents: isHidden ? 'none' : 'auto',
                transition: 'opacity 0.35s ease',
              }}
              aria-expanded={isActive}
              aria-hidden={isHidden}
              aria-label={h.name}
            >
              <div
                className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ? '' : 'group-hover:scale-105'
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
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 28 }}>{h.icon}</span>
              </div>
            </button>
          )
        })}

        {/* Etiquetas de los sub-hubs (fuera del círculo, posicionadas
            según el cuadrante para que no se solapen con la línea
            radial). Texto compacto y centrado. */}
        {hubs.map((h, i) => {
          const isActive = activeKey === h.key
          const isHidden = activeHub != null && !isActive
          const p = hubPositions[i]
          // Si el sub-hub está en la mitad superior del viewBox, la
          // etiqueta va ENCIMA del círculo; si está en la mitad
          // inferior, va DEBAJO. Ambos casos: hacia afuera del HUB
          // central.
          const isUpperHalf = p.y < 50
          // Offset desde el centro del círculo, lejos del centro:
          // 9% del viewBox (círculo radio ~7,5 + un poco de aire).
          const labelY = isUpperHalf ? p.y - 9.5 : p.y + 9.5
          return (
            <div
              key={`label-${h.key}`}
              className="absolute mf-hub-node pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${labelY}%`,
                transform: isUpperHalf ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
                animationDelay: `${i * 0.12 + 0.05}s`,
                width: '22%',
                opacity: isHidden ? 0 : 1,
                transition: 'opacity 0.35s ease',
                zIndex: isActive ? 21 : 4,
                textAlign: 'center',
              }}
              aria-hidden
            >
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-wider leading-tight ${
                  isActive ? 'text-primary' : 'text-on-surface'
                }`}
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                }}
              >
                {h.shortLabel}
              </span>
            </div>
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
              maxWidth: 'min(160px, 28vw)',
            }}
          >
            <div
              className="bg-white border border-primary/30 rounded-full text-center"
              style={{
                fontSize: 11,
                padding: '5px 12px',
                fontWeight: 600,
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                lineHeight: 1.2,
              }}
            >
              {p.label}
            </div>
          </div>
        ))}

        {/* Badge nombre del sub-hub activo + cerrar (en el centro,
            donde antes estaba el HUB Motorflash). */}
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
            <div className="bg-white border-2 border-primary rounded-2xl shadow-2xl px-4 py-3 text-center w-[200px] sm:w-[240px] max-w-[260px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>{activeHub.icon}</span>
                <h3 className="text-sm font-bold m-0 text-left flex-1">{activeHub.name}</h3>
                <button
                  type="button"
                  onClick={() => setActiveKey(null)}
                  aria-label="Cerrar"
                  className="w-7 h-7 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors shrink-0"
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
