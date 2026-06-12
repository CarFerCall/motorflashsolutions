import { RichText } from '@payloadcms/richtext-lexical/react'
import { Reveal } from '@/components/Reveal'

interface Props {
  content: any
  width?: 'narrow' | 'wide'
  alignment?: 'left' | 'center'
}

export function RichTextBlock({ content, width = 'narrow', alignment = 'left' }: Props) {
  if (!content) return null
  return (
    <section className="py-16">
      <div className="mf-container">
        <Reveal>
          <div
            className={`${width === 'narrow' ? 'max-w-3xl' : 'max-w-5xl'} mx-auto ${alignment === 'center' ? 'text-center' : ''} prose prose-lg`}
          >
            <RichText data={content} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
