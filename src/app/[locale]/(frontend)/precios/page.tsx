import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'
import { getPayloadClient } from '@/lib/payload'
import { Reveal } from '@/components/Reveal'
import { PricingConfigurator, type ConfiguratorProduct } from '@/components/PricingConfigurator'
import { normalizeItem, type RawPricingItem } from '@/lib/pricing'

type LocaleKey = 'es' | 'en' | 'zh'

const COPY: Record<LocaleKey, {
  metaTitle: string
  metaDescription: string
  metaOg: string
  eyebrow: string
  title: string
  lead: string
  noPlansPre: string
  noPlansLink: string
  noPlansPost: string
  onDemandEyebrow: string
  onDemandTitle: string
  onDemandLead: string
  onDemandCta: string
  fineTuneTitle: string
  fineTuneLead: string
}> = {
  es: {
    metaTitle: 'Precios',
    metaDescription: 'Configura los servicios de Motorflash que necesita tu concesionario y obtén una estimación en directo. Mensual, anual o pago único. Sin permanencia.',
    metaOg: 'Configura los servicios de Motorflash que necesita tu concesionario y obtén una estimación en directo. Sin permanencia.',
    eyebrow: 'Precios',
    title: 'Planes a tu medida',
    lead: 'Selecciona las herramientas que tu concesionario necesita y escala según tu volumen de negocio. Estimación en vivo, sin permanencia.',
    noPlansPre: 'Aún no hay planes activos en el CMS.',
    noPlansLink: 'Pide presupuesto',
    noPlansPost: '.',
    onDemandEyebrow: 'Más servicios',
    onDemandTitle: 'Soluciones a medida',
    onDemandLead: 'El resto del catálogo se cotiza según las necesidades de cada concesionario. Pide presupuesto sin compromiso.',
    onDemandCta: 'Solicitar presupuesto',
    fineTuneTitle: '¿Quieres afinar la configuración de un producto?',
    fineTuneLead: 'Para CRM4YOU y otros productos con módulos opcionales puedes entrar al configurador individual y elegir cada item.',
  },
  en: {
    metaTitle: 'Pricing',
    metaDescription: "Configure the Motorflash services your dealership needs and get a live estimate. Monthly, yearly or one-off. No long-term commitment.",
    metaOg: "Configure the Motorflash services your dealership needs and get a live estimate. No long-term commitment.",
    eyebrow: 'Pricing',
    title: 'Plans built for your scale',
    lead: 'Select the tools your dealership needs and scale to your business volume. Live estimate, no long-term commitment.',
    noPlansPre: 'No active plans in the CMS yet.',
    noPlansLink: 'Request a quote',
    noPlansPost: '.',
    onDemandEyebrow: 'More services',
    onDemandTitle: 'Tailored solutions',
    onDemandLead: 'The rest of the catalogue is quoted to fit each dealership. Ask for a no-strings proposal.',
    onDemandCta: 'Request a quote',
    fineTuneTitle: 'Want to fine-tune a product?',
    fineTuneLead: 'For CRM4YOU and other products with optional modules you can open the individual configurator and pick each item.',
  },
  zh: {
    metaTitle: '价格',
    metaDescription: '为您的经销店配置所需的 Motorflash 服务并实时获得估算。月付、年付或一次性付款。无长期绑定。',
    metaOg: '为您的经销店配置所需的 Motorflash 服务并实时获得估算。无长期绑定。',
    eyebrow: '价格',
    title: '量身定制的方案',
    lead: '选择您经销店所需的工具,按业务规模灵活扩展。实时估算,无长期绑定。',
    noPlansPre: 'CMS 中尚无启用的方案。',
    noPlansLink: '申请报价',
    noPlansPost: '。',
    onDemandEyebrow: '更多服务',
    onDemandTitle: '定制化方案',
    onDemandLead: '目录中的其他产品按每家经销店的需求报价。免费且无义务申请报价。',
    onDemandCta: '申请报价',
    fineTuneTitle: '想精细调整某款产品吗?',
    fineTuneLead: '对于 CRM4YOU 等带可选模块的产品,可进入单独的配置器逐项选择。',
  },
}

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: '/precios' },
    openGraph: { title: `${t.metaTitle} — Motorflash`, description: t.metaOg, url: '/precios' },
  }
}

export default async function PreciosPage() {
  const products = orderedProducts()
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  const payload = await getPayloadClient()
  const { docs: plans } = await payload.find({
    collection: 'pricing-plans',
    where: { enabled: { equals: true } },
    limit: 100,
  })
  const planBySlug = new Map<string, (typeof plans)[number]>(plans.map((p) => [p.productSlug, p]))

  const configurable: ConfiguratorProduct[] = products
    .map((p) => {
      const plan = planBySlug.get(p.slug)
      if (!plan) return null
      const items = (plan.items ?? []).map((raw) => normalizeItem(raw as RawPricingItem))
      if (plan.basePriceCents <= 0 && items.length === 0) return null
      return {
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        icon: p.icon,
        basePriceCents: plan.basePriceCents,
        items,
      }
    })
    .filter(Boolean) as ConfiguratorProduct[]

  const configurableSlugs = new Set(configurable.map((c) => c.slug))
  const onDemand = products.filter((p) => !configurableSlugs.has(p.slug))

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mf-container">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="mf-eyebrow">{t.eyebrow}</span>
              <h1 className="text-4xl md:text-display-lg font-semibold mb-3">{t.title}</h1>
              <p className="text-on-surface-variant mx-auto max-w-2xl">{t.lead}</p>
            </div>
          </Reveal>

          {configurable.length > 0 ? (
            <Reveal>
              <PricingConfigurator products={configurable} />
            </Reveal>
          ) : (
            <div className="text-center text-on-surface-variant py-12">
              {t.noPlansPre} <Link href="/contacto" className="text-primary underline">{t.noPlansLink}</Link>{t.noPlansPost}
            </div>
          )}
        </div>
      </section>

      {onDemand.length > 0 && (
        <section className="py-16 md:py-24" style={{ background: '#f9fafb' }}>
          <div className="mf-container">
            <Reveal>
              <div className="text-center mb-10">
                <span className="mf-eyebrow">{t.onDemandEyebrow}</span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3">{t.onDemandTitle}</h2>
                <p className="text-on-surface-variant mx-auto max-w-2xl">{t.onDemandLead}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onDemand.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(300, (i % 4) * 100) as 0 | 100 | 200 | 300}>
                  <div className="bg-white rounded-2xl border border-outline-variant p-6 h-full flex flex-col">
                    <div className="mf-icon-tile mb-4">
                      <span className="material-symbols-outlined">{p.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                    <p className="text-on-surface-variant text-sm mb-4">{p.tagline}</p>
                    <Link href={`/contacto?servicio=${p.slug}`} className="btn-secondary mt-auto">
                      {t.onDemandCta}
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {configurable.length > 0 && (
        <section className="py-16">
          <div className="mf-container">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">{t.fineTuneTitle}</h2>
                <p className="text-on-surface-variant mb-6">{t.fineTuneLead}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {configurable.slice(0, 6).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/precios/${p.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{p.icon}</span>
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  )
}
