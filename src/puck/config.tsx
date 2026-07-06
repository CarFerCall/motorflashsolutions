import type { Config } from '@measured/puck'
import { HeroBlock } from '@/components/blocks/HeroBlock'
import { RichTextBlock } from '@/components/blocks/RichTextBlock'
import { FeatureGridBlock } from '@/components/blocks/FeatureGridBlock'
import { CtaBannerBlock } from '@/components/blocks/CtaBannerBlock'
import { TestimonialsBlock } from '@/components/blocks/TestimonialsBlock'
import { ProductCarouselBlock } from '@/components/blocks/ProductCarouselBlock'
import { FAQBlock } from '@/components/blocks/FAQBlock'
import { ImageTextBlock } from '@/components/blocks/ImageTextBlock'

/**
 * Configuración del editor visual Puck para landings de Motorflash.
 *
 * Cada componente es una "block" arrastrable desde la paleta lateral
 * del editor. El render reutiliza los mismos componentes React que se
 * usan en el frontend público — así nunca se desincroniza el editor
 * con la web pública.
 */

export type LandingData = {
  content: any[]
  root: { title?: string }
  zones: Record<string, any[]>
}

const PRODUCT_OPTIONS = [
  { value: 'dealer', label: 'Dealer / Stock' },
  { value: 'exportaciones', label: 'Multipublicador' },
  { value: 'crm4you', label: 'CRM4YOU' },
  { value: 'contact-center', label: 'Contact Center' },
  { value: 'spyne', label: 'Photocall IA' },
  { value: 'motorflash-message', label: 'WhatsApp Business' },
  { value: 'ia', label: 'Motorflash IA' },
  { value: 'soluciones-web', label: 'Web / Marketplace' },
  { value: 'marketing-digital', label: 'Marketing Digital' },
  { value: 'lead-factory', label: 'Lead Exclusive' },
  { value: 'soluciones-fabricantes', label: 'Fabricantes' },
  { value: 'motorflash-connect', label: 'Fleet Manager' },
  { value: 'apex', label: 'Apex' },
]

export const puckConfig: Config = {
  components: {
    Hero: {
      label: 'Hero (cabecera)',
      fields: {
        eyebrow: { type: 'text', label: 'Etiqueta superior' },
        icon: { type: 'text', label: 'Icono (Material Symbols)' },
        title: { type: 'text', label: 'Título' },
        subtitle: { type: 'textarea', label: 'Subtítulo' },
        ctas: {
          type: 'array',
          label: 'Botones (CTAs)',
          max: 2,
          arrayFields: {
            label: { type: 'text', label: 'Texto' },
            url: { type: 'text', label: 'URL' },
            variant: {
              type: 'select',
              label: 'Estilo',
              options: [
                { value: 'primary', label: 'Naranja' },
                { value: 'secondary', label: 'Blanco' },
              ],
            },
          },
          defaultItemProps: { label: '', url: '', variant: 'primary' },
        },
      },
      defaultProps: { title: 'Título principal', subtitle: '', ctas: [] },
      render: (props: any) => <HeroBlock {...props} />,
    },
    Texto: {
      label: 'Texto enriquecido',
      fields: {
        markdown: { type: 'textarea', label: 'Contenido (markdown ligero)' },
        width: {
          type: 'select',
          label: 'Ancho',
          options: [
            { value: 'narrow', label: 'Estrecho' },
            { value: 'wide', label: 'Ancho' },
          ],
        },
        alignment: {
          type: 'select',
          label: 'Alineación',
          options: [
            { value: 'left', label: 'Izquierda' },
            { value: 'center', label: 'Centrado' },
          ],
        },
      },
      defaultProps: { markdown: 'Escribe aquí…', width: 'narrow', alignment: 'left' },
      render: ({ markdown, width, alignment }: any) => (
        <section className="py-16">
          <div className="mf-container">
            <div
              className={`${width === 'narrow' ? 'max-w-3xl' : 'max-w-5xl'} mx-auto ${
                alignment === 'center' ? 'text-center' : ''
              }`}
            >
              <div className="whitespace-pre-line text-on-surface-variant leading-relaxed">{markdown}</div>
            </div>
          </div>
        </section>
      ),
    },
    GridFeatures: {
      label: 'Grid de features',
      fields: {
        eyebrow: { type: 'text', label: 'Etiqueta' },
        title: { type: 'text', label: 'Título' },
        description: { type: 'textarea', label: 'Descripción' },
        columns: {
          type: 'select',
          label: 'Columnas',
          options: [
            { value: '2', label: '2 columnas' },
            { value: '3', label: '3 columnas' },
            { value: '4', label: '4 columnas' },
          ],
        },
        features: {
          type: 'array',
          label: 'Features',
          arrayFields: {
            icon: { type: 'text', label: 'Icono' },
            title: { type: 'text', label: 'Título' },
            description: { type: 'textarea', label: 'Descripción' },
          },
          defaultItemProps: { icon: 'bolt', title: 'Feature', description: '' },
        },
      },
      defaultProps: { columns: '3', features: [{ icon: 'bolt', title: 'Feature 1', description: '' }] },
      render: (props: any) => <FeatureGridBlock {...props} />,
    },
    CTA: {
      label: 'CTA banner',
      fields: {
        title: { type: 'text', label: 'Título' },
        description: { type: 'textarea', label: 'Descripción' },
        buttonLabel: { type: 'text', label: 'Texto del botón' },
        buttonUrl: { type: 'text', label: 'URL del botón' },
        style: {
          type: 'select',
          label: 'Estilo',
          options: [
            { value: 'orange', label: 'Naranja' },
            { value: 'dark', label: 'Oscuro' },
            { value: 'light', label: 'Claro' },
          ],
        },
      },
      defaultProps: { title: '¿Hablamos?', buttonLabel: 'Contacto', buttonUrl: '/contacto', style: 'orange' },
      render: (props: any) => <CtaBannerBlock {...props} />,
    },
    Testimonios: {
      label: 'Testimonios',
      fields: {
        eyebrow: { type: 'text', label: 'Etiqueta' },
        title: { type: 'text', label: 'Título' },
        items: {
          type: 'array',
          label: 'Testimonios',
          arrayFields: {
            quote: { type: 'textarea', label: 'Cita' },
            author: { type: 'text', label: 'Autor' },
            role: { type: 'text', label: 'Cargo y empresa' },
          },
          defaultItemProps: { quote: '', author: '', role: '' },
        },
      },
      defaultProps: { items: [{ quote: '', author: '', role: '' }] },
      render: (props: any) => <TestimonialsBlock {...props} />,
    },
    CarruselProductos: {
      label: 'Carrusel de productos',
      fields: {
        eyebrow: { type: 'text', label: 'Etiqueta' },
        title: { type: 'text', label: 'Título' },
        description: { type: 'textarea', label: 'Descripción' },
        productSlugs: {
          type: 'array',
          label: 'Productos',
          arrayFields: {
            slug: {
              type: 'select',
              label: 'Producto',
              options: PRODUCT_OPTIONS,
            },
          },
          defaultItemProps: { slug: 'crm4you' },
        },
      },
      defaultProps: { productSlugs: [] },
      render: ({ productSlugs, ...rest }: any) => (
        <ProductCarouselBlock {...rest} productSlugs={(productSlugs ?? []).map((p: any) => p.slug).filter(Boolean)} />
      ),
    },
    FAQ: {
      label: 'FAQ',
      fields: {
        eyebrow: { type: 'text', label: 'Etiqueta' },
        title: { type: 'text', label: 'Título' },
        items: {
          type: 'array',
          label: 'Preguntas',
          arrayFields: {
            question: { type: 'text', label: 'Pregunta' },
            answer: { type: 'textarea', label: 'Respuesta' },
          },
          defaultItemProps: { question: '', answer: '' },
        },
      },
      defaultProps: { items: [{ question: '', answer: '' }] },
      render: (props: any) => <FAQBlock {...props} />,
    },
    ImagenTexto: {
      label: 'Imagen + texto',
      fields: {
        eyebrow: { type: 'text', label: 'Etiqueta' },
        title: { type: 'text', label: 'Título' },
        description: { type: 'textarea', label: 'Descripción' },
        imageUrl: { type: 'text', label: 'URL imagen' },
        imageAlt: { type: 'text', label: 'Alt de la imagen' },
        imageSide: {
          type: 'select',
          label: 'Imagen a la',
          options: [
            { value: 'left', label: 'Izquierda' },
            { value: 'right', label: 'Derecha' },
          ],
        },
        cta: {
          type: 'object',
          label: 'Botón opcional',
          objectFields: {
            label: { type: 'text', label: 'Texto' },
            url: { type: 'text', label: 'URL' },
          },
        },
      },
      defaultProps: { title: 'Título', imageSide: 'right', cta: { label: '', url: '' } },
      render: (props: any) => <ImageTextBlock {...props} />,
    },
  },
  categories: {
    cabecera: { title: 'Cabeceras', components: ['Hero'] },
    contenido: { title: 'Contenido', components: ['Texto', 'GridFeatures', 'ImagenTexto', 'FAQ'] },
    conversion: { title: 'Conversión', components: ['CTA', 'CarruselProductos', 'Testimonios'] },
  },
  root: {
    fields: {
      title: { type: 'text', label: 'Título interno de la página' },
    },
    defaultProps: { title: '' },
    render: ({ children }: any) => <>{children}</>,
  },
}
