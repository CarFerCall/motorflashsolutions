import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { PlateDemo } from '@/components/publicacion-avanzada/PlateDemo'
import { breadcrumbSchema, jsonLdScript, pageSchema } from '@/lib/seo/schema'
import { absoluteUrl } from '@/lib/seo/site-url'
import { buildPageMetadata, HREFLANG_MAP, SEO_LOCALES, localizedPath, type SeoLocale } from '@/lib/seo/i18n-metadata'

const BC_HOME: Record<SeoLocale, string> = { es: 'Inicio', ca: 'Inici', en: 'Home', zh: '首页' }
const BC_PUB: Record<SeoLocale, string> = {
  es: 'Publicación avanzada',
  ca: 'Publicació avançada',
  en: 'Advanced publishing',
  zh: '高级发布',
}

const META: Record<SeoLocale, { title: string; description: string }> = {
  es: {
    title: 'Publicación avanzada · Demo por matrícula · Motorflash',
    description:
      'Consulta una matrícula española y recupera versión exacta, potencia, cambio, extras de fábrica y etiqueta DGT. Datos verificados del fabricante — solo Motorflash lo hace.',
  },
  ca: {
    title: 'Publicació avançada · Demo per matrícula · Motorflash',
    description:
      "Consulta una matrícula espanyola i recupera versió exacta, potència, canvi, extres de fàbrica i etiqueta DGT. Dades verificades del fabricant — només Motorflash ho fa.",
  },
  en: {
    title: 'Advanced publishing · License-plate demo · Motorflash',
    description:
      'Look up a Spanish license plate and retrieve the exact trim, power, transmission, factory options and DGT label. Manufacturer-verified data — only Motorflash does this.',
  },
  zh: {
    title: '高级发布 · 车牌查询演示 · Motorflash',
    description: '通过西班牙车牌获取精确的车型、动力、变速箱、原厂配置和 DGT 标签。厂家验证的数据 — 只有 Motorflash 提供。',
  },
}

function resolveLocale(): Promise<SeoLocale> {
  return getLocale().then((l) => (SEO_LOCALES.includes(l as SeoLocale) ? (l as SeoLocale) : 'es'))
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveLocale()
  const meta = META[locale]
  return buildPageMetadata({
    locale,
    path: '/publicacion-avanzada',
    title: meta.title,
    description: meta.description,
    keywords: [
      'publicación avanzada',
      'consulta matrícula',
      'datos VIN',
      'etiqueta DGT',
      'multipublicador',
      'Motorflash',
    ],
  })
}

export default async function PublicacionAvanzadaPage() {
  const locale = await resolveLocale()
  const path = localizedPath(locale, '/publicacion-avanzada')
  const pageUrl = absoluteUrl(path)
  const breadcrumbId = `${pageUrl}#breadcrumb`
  const meta = META[locale]
  const jsonLd = jsonLdScript([
    pageSchema({
      type: 'WebPage',
      path,
      name: meta.title,
      description: meta.description,
      inLanguage: HREFLANG_MAP[locale],
      breadcrumbId,
    }),
    breadcrumbSchema(
      [
        { name: BC_HOME[locale], url: localizedPath(locale, '/') },
        { name: BC_PUB[locale], url: path },
      ],
      breadcrumbId,
    ),
  ])

  return (
    <div className="font-display text-on-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PlateDemo />

      {/* CTA */}
      <section className="bg-white border-t border-outline-variant">
        <div className="mf-container py-16 md:py-20 text-center">
          <span className="mf-eyebrow">Diferenciador único</span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-4">
            ¿Quieres publicar con datos verificados de fábrica?
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            Somos el único multipublicador que verifica versión y extras por VIN. Sin estimaciones, con la etiqueta DGT correcta y con todo el equipamiento opcional desglosado uno a uno.
          </p>
          <Link
            href="/contacto?servicio=dealer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Solicitar Publicación avanzada
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
