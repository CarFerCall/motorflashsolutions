import { Reveal } from '@/components/Reveal'

interface Item {
  question: string
  answer: string
}

interface Props {
  eyebrow?: string | null
  title?: string | null
  items: Item[]
}

export function FAQBlock({ eyebrow, title, items }: Props) {
  return (
    <section className="py-20">
      <div className="mf-container max-w-3xl">
        {(eyebrow || title) && (
          <Reveal>
            <div className="text-center mb-10">
              {eyebrow && <span className="mf-eyebrow">{eyebrow}</span>}
              {title && <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>}
            </div>
          </Reveal>
        )}
        <div className="space-y-3">
          {items.map((f, i) => (
            <Reveal key={i}>
              <details className="bg-white rounded-2xl border border-outline-variant overflow-hidden group">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold list-none">
                  <span>{f.question}</span>
                  <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-5 text-on-surface-variant whitespace-pre-line">{f.answer}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
