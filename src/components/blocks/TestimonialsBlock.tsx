import { Reveal } from '@/components/Reveal'

interface Item {
  quote: string
  author: string
  role?: string | null
}

interface Props {
  eyebrow?: string | null
  title?: string | null
  items: Item[]
}

export function TestimonialsBlock({ eyebrow, title, items }: Props) {
  return (
    <section className="py-20">
      <div className="mf-container">
        {(eyebrow || title) && (
          <Reveal>
            <div className="text-center mb-12">
              {eyebrow && <span className="mf-eyebrow">{eyebrow}</span>}
              {title && <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>}
            </div>
          </Reveal>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}>
              <figure className="bg-white rounded-2xl border border-outline-variant p-6 h-full flex flex-col">
                <span className="material-symbols-outlined text-primary mb-3" style={{ fontSize: 28 }}>format_quote</span>
                <blockquote className="text-on-surface text-base mb-4 flex-1">{t.quote}</blockquote>
                <figcaption className="border-t border-outline-variant pt-3">
                  <p className="font-semibold m-0">{t.author}</p>
                  {t.role && <p className="text-sm text-on-surface-variant m-0">{t.role}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
