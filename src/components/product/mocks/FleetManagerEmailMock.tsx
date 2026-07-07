import type { ProductContentLocale } from '@/catalog/product-content'

type Labels = {
  greeting: string
  contractLine: (name: string, car: string) => React.ReactNode
  question: string
  options: { title: string; sub: string }[]
  optOut: string
  giveBack: string
}

const NAME = 'Carlos'
const CAR = 'Audi A3'

const LABELS: Record<ProductContentLocale, Labels> = {
  es: {
    greeting: 'Hola',
    contractLine: (name, car) => (
      <>
        Tu contrato de renting del <span className="font-semibold text-on-surface">{car}</span>.
      </>
    ),
    question: '¿Qué prefieres hacer?',
    options: [
      { title: 'Renovar con un modelo nuevo', sub: '560 €/mes · Audi A3' },
      { title: 'Renovar con menos km/años', sub: '500 €/mes' },
      { title: 'Comprar tu coche', sub: '450 €/mes · 35.000 € al contado' },
    ],
    optOut: 'No quiero ninguna opción',
    giveBack: 'Devolver el vehículo',
  },
  ca: {
    greeting: 'Hola',
    contractLine: (name, car) => (
      <>
        El teu contracte de rènting de l&apos;<span className="font-semibold text-on-surface">{car}</span>.
      </>
    ),
    question: 'Què prefereixes fer?',
    options: [
      { title: 'Renovar amb un model nou', sub: '560 €/mes · Audi A3' },
      { title: 'Renovar amb menys km/anys', sub: '500 €/mes' },
      { title: 'Comprar el teu cotxe', sub: '450 €/mes · 35.000 € al comptat' },
    ],
    optOut: 'No vull cap opció',
    giveBack: 'Retornar el vehicle',
  },
  en: {
    greeting: 'Hi',
    contractLine: (name, car) => (
      <>
        Your leasing contract for the <span className="font-semibold text-on-surface">{car}</span>.
      </>
    ),
    question: 'What would you like to do?',
    options: [
      { title: 'Renew with a new model', sub: '€560/mo · Audi A3' },
      { title: 'Renew with fewer km/years', sub: '€500/mo' },
      { title: 'Buy your car', sub: '€450/mo · €35,000 cash' },
    ],
    optOut: 'None of the above',
    giveBack: 'Return the vehicle',
  },
  zh: {
    greeting: '您好',
    contractLine: (name, car) => (
      <>
        您的 <span className="font-semibold text-on-surface">{car}</span> 租赁合同。
      </>
    ),
    question: '您想怎么做?',
    options: [
      { title: '续约新车型', sub: '560 €/月 · Audi A3' },
      { title: '续约但减少公里/年份', sub: '500 €/月' },
      { title: '买断您的车', sub: '450 €/月 · 一次性 35.000 €' },
    ],
    optOut: '以上皆不选',
    giveBack: '归还车辆',
  },
}

export function FleetManagerEmailMock({ locale = 'es' }: { locale?: ProductContentLocale }) {
  const t = LABELS[locale] ?? LABELS.es
  return (
    <div className="relative rounded-3xl border border-outline-variant bg-white shadow-2xl overflow-hidden">
      <div className="p-5 md:p-7">
        {/* Saludo */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold leading-tight">
            {t.greeting} <span className="text-primary">{NAME}</span>,
          </h3>
          <p className="text-sm text-on-surface-variant mt-1">{t.contractLine(NAME, CAR)}</p>
        </div>

        {/* Video card */}
        <div
          className="relative rounded-2xl overflow-hidden mb-6"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 65%, #262626 100%)' }}
        >
          <div className="p-5">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <span className="block text-white font-bold text-[11px]">MotorFlash Ibérica</span>
                <span className="mt-1 block h-0.5 w-6 bg-primary" />
              </div>
              <span className="text-white/60 text-[10px]">
                Para <span className="font-semibold text-white">Carlos F. Calleja</span>
              </span>
            </div>
            <div className="flex items-end gap-4">
              <div>
                <span className="block text-primary text-[10px] uppercase tracking-widest font-bold mb-1">
                  {t.greeting.toUpperCase()}
                </span>
                <span className="block h-0.5 w-4 bg-primary mb-1.5" />
                <span className="block text-white text-4xl md:text-5xl font-black leading-none">{NAME}</span>
              </div>
              <div className="flex-1 flex items-end justify-end">
                <span className="material-symbols-outlined text-white/25" style={{ fontSize: 92 }}>
                  directions_car
                </span>
              </div>
            </div>
            {/* Controles de reproducción */}
            <div className="mt-6 flex items-center gap-3 text-white/70 text-xs">
              <span className="material-symbols-outlined text-white" style={{ fontSize: 20 }}>
                play_arrow
              </span>
              <span className="tabular-nums">0:01 / 0:44</span>
              <div className="flex-1 mx-2 h-0.5 bg-white/20 rounded overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '4%' }} />
              </div>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                volume_up
              </span>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                fullscreen
              </span>
            </div>
          </div>
        </div>

        {/* Pregunta */}
        <p className="text-center font-bold mb-4 text-sm md:text-base">{t.question}</p>

        {/* Grid de opciones */}
        <div className="grid grid-cols-3 gap-2.5">
          {t.options.map((o, i) => (
            <div
              key={i}
              className="rounded-xl border border-outline-variant p-2.5 flex flex-col hover:border-primary/40 transition-colors"
            >
              <div className="w-full aspect-[4/3] rounded-lg bg-surface-container-low mb-2.5 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 26 }}>
                  directions_car
                </span>
              </div>
              <div className="flex items-start gap-1.5 min-w-0">
                <span className="w-4 h-4 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold leading-tight mb-0.5">{o.title}</p>
                  <p className="text-[9px] text-on-surface-variant leading-tight">{o.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pie */}
        <div className="mt-4 pt-3 border-t border-outline-variant text-center text-[11px]">
          <span className="text-primary font-semibold underline underline-offset-2">{t.giveBack}</span>
          <span className="text-on-surface-variant mx-2">·</span>
          <span className="text-on-surface-variant">{t.optOut}</span>
        </div>
      </div>
    </div>
  )
}
