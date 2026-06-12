import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

interface Props {
  eyebrow?: string | null
  icon?: string | null
  title: string
  subtitle?: string | null
  ctas?: Array<{ label: string; url: string; variant?: 'primary' | 'secondary' }> | null
}

export function HeroBlock({ eyebrow, icon, title, subtitle, ctas }: Props) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="mf-container">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            {(eyebrow || icon) && (
              <span className="mf-chip mb-6 mx-auto">
                {icon && <span className="material-symbols-outlined">{icon}</span>}
                {eyebrow && <span>{eyebrow}</span>}
              </span>
            )}
            <h1 className="text-4xl md:text-display-lg font-semibold leading-tight mb-6">{title}</h1>
            {subtitle && <p className="text-lg text-on-surface-variant mb-10">{subtitle}</p>}
            {ctas && ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {ctas.map((c, i) => (
                  <Link key={i} href={c.url} className={c.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
