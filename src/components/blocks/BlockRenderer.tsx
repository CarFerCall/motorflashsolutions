import { HeroBlock } from './HeroBlock'
import { RichTextBlock } from './RichTextBlock'
import { FeatureGridBlock } from './FeatureGridBlock'
import { CtaBannerBlock } from './CtaBannerBlock'
import { TestimonialsBlock } from './TestimonialsBlock'
import { ProductCarouselBlock } from './ProductCarouselBlock'
import { FAQBlock } from './FAQBlock'
import { ImageTextBlock } from './ImageTextBlock'

interface AnyBlock {
  blockType: string
  [key: string]: any
}

/**
 * Renderiza los bloques de una página según su `blockType`. Cada bloque
 * tiene un componente React equivalente; los nombres deben coincidir con
 * el `slug` de la definición del bloque en src/blocks.
 */
export function BlockRenderer({ blocks }: { blocks: AnyBlock[] | null | undefined }) {
  if (!blocks || !blocks.length) return null
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={i} {...(block as any)} />
          case 'richText':
            return <RichTextBlock key={i} {...(block as any)} />
          case 'featureGrid':
            return <FeatureGridBlock key={i} {...(block as any)} />
          case 'ctaBanner':
            return <CtaBannerBlock key={i} {...(block as any)} />
          case 'testimonials':
            return <TestimonialsBlock key={i} {...(block as any)} />
          case 'productCarousel':
            return <ProductCarouselBlock key={i} {...(block as any)} />
          case 'faq':
            return <FAQBlock key={i} {...(block as any)} />
          case 'imageText':
            return <ImageTextBlock key={i} {...(block as any)} />
          default:
            return null
        }
      })}
    </>
  )
}
