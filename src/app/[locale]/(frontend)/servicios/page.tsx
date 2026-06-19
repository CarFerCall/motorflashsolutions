import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'

type LocaleKey = 'es' | 'ca' | 'en' | 'zh'

const COPY: Record<LocaleKey, {
  metaTitle: string
  metaDescription: string
  metaOg: string
  eyebrow: string
  title: string
  lead: string
  viewProduct: string
  comingSoon: string
}> = {
  es: {
    metaTitle: 'Servicios',
    metaDescription: '15 productos integrados entre sí para cubrir el ciclo comercial completo del concesionario: publicación, stock, captación de leads, atención al cliente, IA y reporting.',
    metaOg: '15 productos integrados que cubren el ciclo comercial completo del concesionario.',
    eyebrow: 'Catálogo de Servicios',
    title: 'Toda la tecnología para vender más coches',
    lead: '15 productos integrados entre sí para cubrir el ciclo comercial completo del concesionario: publicación, stock, captación de leads, atención al cliente, IA y reporting.',
    viewProduct: 'Ver',
    comingSoon: 'Próximamente',
  },
  ca: {
    metaTitle: 'Serveis',
    metaDescription: "15 productes integrats entre si per cobrir el cicle comercial complet del concessionari: publicació, estoc, captació de leads, atenció al client, IA i reporting.",
    metaOg: 'Catàleg de 15 productes integrats que cobreixen tot el cicle comercial.',
    eyebrow: 'Catàleg de Serveis',
    title: 'Tota la tecnologia per vendre més cotxes',
    lead: "15 productes integrats entre si per cobrir el cicle comercial complet del concessionari: publicació, estoc, captació de leads, atenció al client, IA i reporting.",
    viewProduct: 'Veure',
    comingSoon: 'Properament',
  },
  en: {
    metaTitle: 'Services',
    metaDescription: '15 integrated products covering the dealership’s full sales cycle: publication, stock, lead capture, customer service, AI and reporting.',
    metaOg: "15 integrated products covering the dealership's full sales cycle.",
    eyebrow: 'Services catalogue',
    title: 'The technology to sell more cars',
    lead: "15 integrated products covering the dealership’s full sales cycle: publication, stock, lead capture, customer service, AI and reporting.",
    viewProduct: 'See',
    comingSoon: 'Coming soon',
  },
  zh: {
    metaTitle: '服务',
    metaDescription: '15 款相互集成的产品,覆盖经销店完整销售周期:发布、库存、潜客获取、客户服务、AI 与报告。',
    metaOg: '15 款相互集成的产品,覆盖经销店完整销售周期。',
    eyebrow: '服务目录',
    title: '为卖出更多车而生的全部技术',
    lead: '15 款相互集成的产品,覆盖经销店完整销售周期:发布、库存、潜客获取、客户服务、AI 与报告。',
    viewProduct: '查看',
    comingSoon: '即将推出',
  },
}

export async function generateMetadata() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/servicios' },
    openGraph: { title: `${t.metaTitle} — Motorflash`, description: t.metaOg, url: '/servicios' },
  }
}

export default async function ServiciosPage() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const products = orderedProducts(locale)
  const t = COPY[locale] ?? COPY.es

  return (
    <section className="py-32">
      <div className="mf-container">
        <div className="text-center mb-12">
          <span className="mf-eyebrow">{t.eyebrow}</span>
          <h1 className="text-4xl md:text-display-lg font-semibold mb-3">{t.title}</h1>
          <p className="text-on-surface-variant mx-auto max-w-2xl">{t.lead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/servicios/${product.slug}`}
              className={`mf-product-card h-full block ${product.highlight ? 'highlight' : ''}`}
            >
              <div className="mf-icon-tile">
                <span className="material-symbols-outlined">{product.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <p className={`mb-4 ${product.highlight ? '' : 'text-on-surface-variant'}`}>{product.tagline}</p>
              <span className={`inline-flex items-center gap-2 font-bold ${product.highlight ? '' : 'text-primary'}`}>
                {t.viewProduct} {product.name}
                <span className="material-symbols-outlined">east</span>
              </span>
              {product.placeholder && (
                <span className="mt-3 inline-flex mf-chip" style={{ fontSize: 10 }}>{t.comingSoon}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
