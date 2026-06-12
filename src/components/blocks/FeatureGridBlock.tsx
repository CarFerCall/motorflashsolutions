import { Reveal } from '@/components/Reveal'

interface Feature {
  icon?: string | null
  title: string
  description?: string | null
}

interface Props {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  columns?: '2' | '3' | '4'
  features: Feature[]
}

const gridCols = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
}

export function FeatureGridBlock({ eyebrow, title, description, columns = '3', features }: Props) {
  return (
    <section className="py-20">
      <div className="mf-container">
        {(eyebrow || title || description) && (
          <Reveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              {eyebrow && <span className="mf-eyebrow">{eyebrow}</span>}
              {title && <h2 className="text-3xl md:text-4xl font-semibold mb-3">{title}</h2>}
              {description && <p className="text-on-surface-variant">{description}</p>}
            </div>
          </Reveal>
        )}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {features.map((f, i) => (
            <Reveal key={i} delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}>
              <div className="bg-white rounded-2xl border border-outline-variant p-6 h-full">
                {f.icon && (
                  <div className="mf-icon-tile">
                    <span className="material-symbols-outlined">{f.icon}</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                {f.description && <p className="text-sm text-on-surface-variant">{f.description}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
