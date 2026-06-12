import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

interface Props {
  title: string
  description?: string | null
  buttonLabel: string
  buttonUrl: string
  style?: 'orange' | 'dark' | 'light'
}

export function CtaBannerBlock({ title, description, buttonLabel, buttonUrl, style = 'orange' }: Props) {
  const styles = {
    orange: { background: '#ff8000', color: '#fff', btn: 'bg-white text-primary' },
    dark: { background: '#121414', color: '#fff', btn: 'btn-primary' },
    light: { background: '#fff5e6', color: '#1a1c1c', btn: 'btn-primary' },
  } as const
  const s = styles[style]
  return (
    <section className="py-16">
      <div className="mf-container">
        <Reveal>
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{ background: s.background, color: s.color }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: s.color }}>{title}</h2>
            {description && <p className="mb-8 max-w-xl mx-auto" style={{ color: s.color, opacity: 0.85 }}>{description}</p>}
            <Link
              href={buttonUrl}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all ${s.btn}`}
            >
              {buttonLabel}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
