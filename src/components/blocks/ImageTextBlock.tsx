import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/Reveal'

interface Props {
  eyebrow?: string | null
  title: string
  description?: string | null
  imageUrl?: string | null
  imageAlt?: string | null
  imageSide?: 'left' | 'right'
  cta?: { label?: string; url?: string } | null
}

export function ImageTextBlock({ eyebrow, title, description, imageUrl, imageAlt, imageSide = 'right', cta }: Props) {
  return (
    <section className="py-20">
      <div className="mf-container">
        <Reveal>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${imageSide === 'left' ? 'lg:[&>div:first-child]:order-2' : ''}`}>
            <div>
              {eyebrow && <span className="mf-eyebrow">{eyebrow}</span>}
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
              {description && <p className="text-on-surface-variant mb-6 whitespace-pre-line">{description}</p>}
              {cta?.label && cta?.url && (
                <Link href={cta.url} className="btn-primary">
                  {cta.label}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              )}
            </div>
            {imageUrl ? (
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-outline-variant">
                {/^https?:\/\//.test(imageUrl) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imageUrl} alt={imageAlt ?? ''} className="w-full h-full object-cover" />
                ) : (
                  <Image src={imageUrl} alt={imageAlt ?? ''} fill className="object-cover" />
                )}
              </div>
            ) : (
              <div className="aspect-video rounded-3xl border border-dashed border-outline-variant flex items-center justify-center text-on-surface-variant text-sm">
                Sin imagen
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
