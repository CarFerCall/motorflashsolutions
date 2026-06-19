import Image from 'next/image'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { orderedProducts } from '@/catalog/products'

type LocaleKey = 'es' | 'en' | 'zh'

const COPY: Record<LocaleKey, {
  tagline: string
  productsHeading: string
  viewAll: string
  companyHeading: string
  aboutUs: string
  successStories: string
  pricing: string
  contact: string
  hqHeading: string
  hqAddress1: string
  hqAddress2: string
  isoQuality: string
  isoSecurity: string
  isoQualityTitle: string
  isoSecurityTitle: string
  copyright: string
  privacy: string
  cookies: string
  legal: string
}> = {
  es: {
    tagline: 'La solución 360 para marcas y concesionarios del motor. Tecnología con IA integrada desde 2007.',
    productsHeading: 'Productos',
    viewAll: 'Ver todos →',
    companyHeading: 'La Compañía',
    aboutUs: 'Conócenos',
    successStories: 'Historias de éxito',
    pricing: 'Precios',
    contact: 'Contacto',
    hqHeading: 'Sede Madrid',
    hqAddress1: 'Calle Basauri 17 – Edf. B, Bajo Izq. D',
    hqAddress2: '28023 Madrid, España',
    isoQuality: 'ISO 9001 · Calidad',
    isoSecurity: 'ISO 27001 · Seguridad',
    isoQualityTitle: 'Sistema de Gestión de la Calidad',
    isoSecurityTitle: 'Sistema de Gestión de la Seguridad de la Información',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    legal: 'Aviso Legal',
  },
  en: {
    tagline: 'The 360 solution for automotive brands and dealerships. AI-integrated technology since 2007.',
    productsHeading: 'Products',
    viewAll: 'View all →',
    companyHeading: 'The Company',
    aboutUs: 'About us',
    successStories: 'Success stories',
    pricing: 'Pricing',
    contact: 'Contact',
    hqHeading: 'Madrid HQ',
    hqAddress1: 'Calle Basauri 17 – Bldg. B, Lower Left D',
    hqAddress2: '28023 Madrid, Spain',
    isoQuality: 'ISO 9001 · Quality',
    isoSecurity: 'ISO 27001 · Security',
    isoQualityTitle: 'Quality Management System',
    isoSecurityTitle: 'Information Security Management System',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: 'Privacy',
    cookies: 'Cookies',
    legal: 'Legal notice',
  },
  zh: {
    tagline: '面向汽车品牌与经销商的 360 解决方案。自 2007 年起集成 AI 的技术。',
    productsHeading: '产品',
    viewAll: '查看全部 →',
    companyHeading: '公司',
    aboutUs: '关于我们',
    successStories: '成功案例',
    pricing: '价格',
    contact: '联系我们',
    hqHeading: '马德里总部',
    hqAddress1: 'Calle Basauri 17 – B 座,下左 D',
    hqAddress2: '28023 马德里,西班牙',
    isoQuality: 'ISO 9001 · 质量',
    isoSecurity: 'ISO 27001 · 安全',
    isoQualityTitle: '质量管理体系',
    isoSecurityTitle: '信息安全管理体系',
    copyright: '© {year} Motorflash Ibérica de Negocios S.L. Precise automotive technology.',
    privacy: '隐私政策',
    cookies: 'Cookies',
    legal: '法律声明',
  },
}

export async function Footer() {
  const products = orderedProducts().slice(0, 6)
  const year = new Date().getFullYear()
  const locale = ((await getLocale()) as LocaleKey) || 'es'
  const t = COPY[locale] ?? COPY.es

  return (
    <footer className="bg-white border-t border-outline-variant pt-20 pb-12">
      <div className="mf-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo-motorflash.png" alt="Motorflash" width={140} height={32} className="mb-4" style={{ height: 32, width: 'auto' }} />
            <p className="text-sm text-on-surface-variant">{t.tagline}</p>
            <div className="flex gap-3 mt-4">
              {['share', 'public'].map((icon) => (
                <a key={icon} href="#" className="w-12 h-12 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">{t.productsHeading}</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/servicios/${p.slug}`} className="hover:text-primary transition-colors">{p.name}</Link>
                </li>
              ))}
              <li className="mt-2">
                <Link href="/servicios" className="font-bold text-on-surface hover:text-primary">{t.viewAll}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">{t.companyHeading}</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li><Link href="/compania" className="hover:text-primary transition-colors">{t.aboutUs}</Link></li>
              <li><Link href="/historias-de-exito" className="hover:text-primary transition-colors">{t.successStories}</Link></li>
              <li><Link href="/precios" className="hover:text-primary transition-colors">{t.pricing}</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider mb-6">{t.hqHeading}</h5>
            <p className="text-sm text-on-surface-variant mb-3">
              {t.hqAddress1}<br />{t.hqAddress2}
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container border border-outline-variant" title={t.isoQualityTitle}>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoQuality}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container border border-outline-variant" title={t.isoSecurityTitle}>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.isoSecurity}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-12 pt-8 border-t border-outline-variant">
          <p className="text-xs text-on-surface-variant m-0">{t.copyright.replace('{year}', String(year))}</p>
          <div className="flex gap-6 text-xs font-bold text-on-surface-variant">
            <a href="#" className="hover:text-primary">{t.privacy}</a>
            <a href="#" className="hover:text-primary">{t.cookies}</a>
            <a href="#" className="hover:text-primary">{t.legal}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
