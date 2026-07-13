'use client'

import { useEffect, useRef, useState } from 'react'
import {
  SAMPLE_PLATES,
  findByPlate,
  type VehicleData,
} from '@/data/publicacion-avanzada'

function formatPlate(p: string): string {
  const raw = p.trim().toUpperCase().replace(/[\s\-·]/g, '')
  if (raw.length < 5) return raw
  return `${raw.slice(0, 4)}·${raw.slice(4)}`
}

function ecoDefaults(comb: string) {
  const lower = comb.toLowerCase()
  const isPhev = lower.includes('ench')
  const isDiesel = lower.includes('diés') || lower.includes('diesel')
  return {
    co2: isPhev ? '35 g/km WLTP' : isDiesel ? '122 g/km WLTP' : '138 g/km WLTP',
    autonomia: isPhev ? '45 km' : '—',
    consumo: isPhev ? '2,1 l/100 km' : isDiesel ? '4,7 l/100 km' : '6,1 l/100 km',
  }
}

export function PlateDemo({ initialPlate }: { initialPlate?: string }) {
  const [value, setValue] = useState(initialPlate ?? SAMPLE_PLATES[0])
  const [vehicle, setVehicle] = useState<VehicleData | null>(() =>
    findByPlate(initialPlate ?? SAMPLE_PLATES[0]) ?? null,
  )
  const [notFound, setNotFound] = useState(false)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const resultRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const id = setInterval(() => setPlaceholderIdx((i) => (i + 1) % SAMPLE_PLATES.length), 2500)
    return () => clearInterval(id)
  }, [])

  const handleSubmit = (raw?: string) => {
    const target = (raw ?? value).trim()
    if (!target) return
    const v = findByPlate(target)
    if (v) {
      setVehicle(v)
      setNotFound(false)
      setValue(target.toUpperCase().replace(/[\s\-·]/g, ''))
      requestAnimationFrame(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      setVehicle(null)
      setNotFound(true)
    }
  }

  const placeholderPlate = formatPlate(SAMPLE_PLATES[placeholderIdx])

  return (
    <div className="font-display text-on-surface">
      {/* Hero + search card */}
      <section className="bg-white">
        <div className="mf-container py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 text-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-5">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>workspace_premium</span>
                Únicos en el mercado
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                Publicación <span className="text-primary">avanzada</span>
                <br />por matrícula
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-7 max-w-lg">
                Introduce una matrícula y recuperamos la versión exacta y el equipamiento opcional real de esa unidad. Datos verificados del fabricante, no estimaciones.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Fecha de matriculación y fabricación exactas',
                  'Versión, potencia, cilindrada y carrocería verificadas',
                  'Extras y opcionales de fábrica desglosados uno a uno',
                  'Etiqueta medioambiental DGT incluida',
                ].map((line) => (
                  <li key={line} className="flex gap-2 items-start text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0" style={{ fontSize: 18 }}>
                      check_circle
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-outline-variant bg-white shadow-xl shadow-black/5 p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Demo en vivo</p>
              <h2 className="text-lg font-bold mb-1">Consulta una matrícula</h2>
              <p className="text-sm text-on-surface-variant mb-5">
                Escribe una de las matrículas de ejemplo y pulsa Consultar para ver los datos reales del vehículo.
              </p>
              <div className="flex gap-2.5">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-4 rounded-sm bg-[#003399] text-[7px] font-black text-[#FFD700] flex items-center justify-center leading-none">
                    ES
                  </span>
                  <input
                    type="text"
                    value={value}
                    placeholder={placeholderPlate}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSubmit()
                    }}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-12 pr-4 py-3 text-lg font-black uppercase tracking-[3px] focus:border-primary focus:bg-white outline-none transition-colors placeholder:font-normal placeholder:tracking-[1px] placeholder:text-on-surface-variant/60"
                    aria-label="Matrícula"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="bg-primary text-white rounded-xl px-5 py-3 text-sm font-bold inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>search</span>
                  Consultar
                </button>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 15 }}>verified</span>
                Datos verificados directamente del fabricante vía VIN
              </p>
              {notFound && (
                <p className="mt-3 text-xs text-red-600">
                  Esa matrícula no está en la demo. Prueba con las de abajo.
                </p>
              )}
            </div>
          </div>

          {/* Chips */}
          <div className="mt-10 border-t border-outline-variant pt-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">
              Matrículas disponibles en esta demo
            </p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_PLATES.map((p) => {
                const active = value.toUpperCase().replace(/[\s\-·]/g, '') === p
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handleSubmit(p)}
                    className={`text-xs font-bold tracking-[2px] rounded-md px-3 py-1.5 transition-colors ${
                      active
                        ? 'bg-primary text-white border border-primary'
                        : 'border border-outline-variant text-on-surface bg-white hover:border-primary hover:text-primary'
                    }`}
                  >
                    {formatPlate(p)}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      {vehicle && (
        <section ref={resultRef} className="bg-surface-container-low border-t border-outline-variant">
          <div className="mf-container py-12 md:py-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 mb-7 p-5 md:p-6 rounded-2xl bg-white border border-outline-variant">
              <div className="inline-flex items-stretch bg-[#003399] text-white rounded-lg overflow-hidden border-2 border-[#001a6e] self-start">
                <div className="flex flex-col items-center justify-center px-2 border-r border-white/30 py-2">
                  <span className="text-[7px] font-black text-[#FFD700] leading-none">★★★</span>
                  <span className="text-[8px] font-black text-[#FFD700] mt-1 leading-none">ES</span>
                </div>
                <span className="text-lg md:text-xl font-black tracking-[3px] px-4 py-2 self-center">
                  {formatPlate(value)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  {vehicle.marca} {vehicle.modelo} {vehicle.version}
                </h2>
                <p className="text-xs text-on-surface-variant mt-1 truncate">
                  Datos verificados del fabricante · VIN: {vehicle.vin} · Consultado ahora
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 text-primary border border-primary/20 px-2 py-1 text-[11px] font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span>
                  Verificado
                </span>
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-widest border"
                  style={{
                    background: vehicle.ecoBg,
                    color: vehicle.ecoColor,
                    borderColor: vehicle.ecoBorder,
                  }}
                >
                  {vehicle.eco}
                </span>
              </div>
            </div>

            {/* Grid: ficha + historial/eco */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="rounded-2xl bg-white border border-outline-variant p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>directions_car</span>
                  Ficha técnica
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <Spec label="Marca" value={vehicle.marca} />
                  <Spec label="Modelo" value={vehicle.modelo} />
                  <Spec label="Versión" value={vehicle.version} accent />
                  <Spec label="Tracción" value={vehicle.traccion} />
                  <Spec label="Combustible" value={vehicle.comb} />
                  <Spec label="Potencia" value={`${vehicle.kw} kW / ${vehicle.cv} CV`} accent />
                  <Spec label="Cilindrada" value={vehicle.cilindrada} />
                  <Spec label="Cambio" value={vehicle.cambio} />
                  <Spec label="Puertas" value={vehicle.puertas} />
                  <Spec label="Plazas" value={vehicle.plazas} />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-white border border-outline-variant p-6">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>event</span>
                    Historial
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <Spec label="Fecha matriculación" value={vehicle.mat} accent />
                    <Spec label="Fecha fabricación" value={vehicle.fab} />
                  </div>
                </div>
                <div className="rounded-2xl bg-white border border-outline-variant p-6">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>eco</span>
                    Medioambiente
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Etiqueta DGT</p>
                      <p className="text-lg font-black" style={{ color: vehicle.ecoColor }}>{vehicle.eco}</p>
                    </div>
                    <Spec label="Emisiones CO₂" value={ecoDefaults(vehicle.comb).co2} />
                    <Spec label="Autonomía eléc." value={ecoDefaults(vehicle.comb).autonomia} />
                    <Spec label="Consumo comb." value={ecoDefaults(vehicle.comb).consumo} />
                  </div>
                </div>
              </div>
            </div>

            {/* Pintura */}
            <div className="rounded-2xl bg-white border border-outline-variant p-6 mb-4">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>palette</span>
                Color y acabado
              </h3>
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl border border-outline-variant flex-shrink-0"
                  style={{ background: vehicle.pintura.sw }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold">{vehicle.pintura.nombre}</p>
                  <p className="text-xs text-on-surface-variant">
                    Código {vehicle.pintura.code}
                    {vehicle.pintura.tipo ? ` · ${vehicle.pintura.tipo}` : ''}
                  </p>
                </div>
                {vehicle.pintura.precio && (
                  <p className="text-sm font-bold text-primary whitespace-nowrap">+ {vehicle.pintura.precio}</p>
                )}
              </div>
            </div>

            {/* Extras */}
            <div className="rounded-2xl bg-white border border-outline-variant p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>auto_awesome</span>
                Equipamiento opcional de fábrica
              </h3>
              {vehicle.extras.length === 0 ? (
                <p className="text-sm italic text-on-surface-variant">
                  Equipamiento opcional no disponible para este vehículo en el registro actual.
                </p>
              ) : (
                <div className="overflow-x-auto -mx-6">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant">
                        <th className="px-4 py-2 w-24">Código</th>
                        <th className="px-4 py-2">Descripción</th>
                        <th className="px-4 py-2 text-right w-32">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicle.extras.map((e, i) => (
                        <tr key={i} className="border-b border-outline-variant/50">
                          <td className="px-4 py-3">
                            <span className="inline-block bg-surface-container-low text-primary font-bold text-[11px] px-2 py-1 rounded-md tracking-wider">
                              {e.code}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-on-surface">{e.desc}</td>
                          <td className="px-4 py-3 text-right font-bold whitespace-nowrap">{e.precio}</td>
                        </tr>
                      ))}
                      {vehicle.total && (
                        <tr>
                          <td colSpan={2} className="px-4 pt-4 text-sm font-bold text-on-surface-variant text-right">
                            Precio base + pintura + opcionales
                          </td>
                          <td className="px-4 pt-4 text-right text-lg font-black text-primary whitespace-nowrap">
                            {vehicle.total}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function Spec({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">{label}</p>
      <p className={`text-sm font-semibold ${accent ? 'text-primary' : 'text-on-surface'}`}>{value}</p>
    </div>
  )
}
