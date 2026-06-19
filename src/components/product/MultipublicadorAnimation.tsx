/**
 * Diagrama del Multipublicador (multilingüe).
 */
import { getLocale } from 'next-intl/server'

type LocaleKey = 'es' | 'en' | 'zh'

const COPY: Record<LocaleKey, {
  ariaLabel: string
  eyebrow: string
  title: string
  lead: string
  hubName: string
  hubSubline: string
  sendsTo: string
  stats: { v: string; l: string }[]
}> = {
  es: {
    ariaLabel: 'Cómo Motorflash publica tu stock en los portales',
    eyebrow: 'Cómo funciona',
    title: 'Un solo clic. Tu coche en cada portal.',
    lead: 'Subes el vehículo una vez a Motorflash y replicamos su anuncio en tiempo real a Coches.net, AutoScout24, Wallapop y el resto de portales del sector.',
    hubName: 'MOTORFLASH',
    hubSubline: 'Publica · 1 clic',
    sendsTo: 'Envía a',
    stats: [
      { v: '+50', l: 'Portales conectados' },
      { v: '99 %', l: 'Integración por API' },
      { v: '<5 min', l: 'Hasta publicar' },
      { v: '24/7', l: 'Sincronización automática' },
    ],
  },
  en: {
    ariaLabel: 'How Motorflash publishes your stock on portals',
    eyebrow: 'How it works',
    title: 'One click. Your car on every portal.',
    lead: 'Upload the vehicle once to Motorflash and we replicate its listing in real time to Coches.net, AutoScout24, Wallapop and the rest of the sector portals.',
    hubName: 'MOTORFLASH',
    hubSubline: 'Publish · 1 click',
    sendsTo: 'Sends to',
    stats: [
      { v: '+50', l: 'Connected portals' },
      { v: '99 %', l: 'API integration' },
      { v: '<5 min', l: 'To publication' },
      { v: '24/7', l: 'Automatic sync' },
    ],
  },
  zh: {
    ariaLabel: 'Motorflash 如何将您的库存发布到门户',
    eyebrow: '如何运作',
    title: '一键发布。您的车辆上线到每个门户。',
    lead: '车辆只需上传一次到 Motorflash,我们便会实时同步广告到 Coches.net、AutoScout24、Wallapop 及行业其他门户。',
    hubName: 'MOTORFLASH',
    hubSubline: '发布 · 一键',
    sendsTo: '发送至',
    stats: [
      { v: '+50', l: '已对接门户' },
      { v: '99 %', l: 'API 集成' },
      { v: '<5 分钟', l: '至发布' },
      { v: '24/7', l: '自动同步' },
    ],
  },
}

const PORTALS = [
  { id: 'cochesnet', label: 'Coches.net', icon: 'directions_car' },
  { id: 'autoscout24', label: 'AutoScout24', icon: 'search' },
  { id: 'sumauto', label: 'Sumauto', icon: 'sell' },
  { id: 'wallapop', label: 'Wallapop', icon: 'storefront' },
  { id: 'autocasion', label: 'Autocasión', icon: 'two_wheeler' },
  { id: 'cochescom', label: 'Coches.com', icon: 'time_to_leave' },
  { id: 'motorflash', label: 'Motorflash.com', icon: 'bolt' },
]

export async function MultipublicadorAnimation() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return (
    <section className="py-12 md:py-20 relative overflow-hidden" aria-label={t.ariaLabel}>
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,128,0,0.08), transparent 60%)' }} />

      <div className="mf-container">
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <span className="mf-eyebrow">{t.eyebrow}</span>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{t.title}</h2>
          <p className="text-sm md:text-base text-on-surface-variant">{t.lead}</p>
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
                <div className="font-display font-bold text-sm md:text-base">{t.hubName}</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-widest opacity-80">{t.hubSubline}</div>
              </div>
            </div>

            <div className="flex flex-col items-center my-3 md:my-4" aria-hidden>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>south</span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary">{t.sendsTo}</span>
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
          {t.stats.map((s) => (
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
