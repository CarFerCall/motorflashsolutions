/**
 * Lectura del menú principal desde el global de Payload. Server-side,
 * cacheado en el ciclo de petición (Next/React cache).
 *
 * El global MainMenu no es todavía multilingüe (los labels viven en
 * Payload sin localized: true). Como solución intermedia, mapeamos
 * los labels conocidos en español a sus traducciones EN/ZH. Los
 * labels que no estén en el diccionario se quedan en su idioma
 * original.
 */
import { cache } from 'react'
import { getPayloadClient } from './payload'

export interface MenuChild {
  label: string
  url: string
  icon?: string | null
  description?: string | null
}

export interface MenuItem {
  label: string
  kind: 'link' | 'dropdown'
  url?: string | null
  newTab?: boolean
  children?: MenuChild[]
}

export interface MainMenuData {
  items: MenuItem[]
  cta?: { label?: string; url?: string } | null
}

export const getMainMenu = cache(async (): Promise<MainMenuData> => {
  try {
    const payload = await getPayloadClient()
    const data = (await payload.findGlobal({ slug: 'main-menu' as any })) as any
    return {
      items: Array.isArray(data?.items) ? data.items : [],
      cta: data?.cta ?? null,
    }
  } catch {
    return { items: [], cta: null }
  }
})

type MenuLocale = 'es' | 'en' | 'zh'

// Diccionario de labels conocidos del menú en español, con sus
// traducciones EN y ZH. Si el contenido del global cambia con
// labels distintos a los del diccionario, esos quedarán sin
// traducir. Para tener cobertura completa habría que activar
// localized: true en la colección y mantener el contenido por
// idioma directamente desde el admin.
const MENU_LABEL_DICT: Record<string, { en: string; zh: string }> = {
  // Top-level items habituales.
  'Servicios': { en: 'Services', zh: '服务' },
  'Compañía': { en: 'Company', zh: '公司' },
  'La Compañía': { en: 'The Company', zh: '公司' },
  'Empresa': { en: 'Company', zh: '公司' },
  'Casos de éxito': { en: 'Success stories', zh: '成功案例' },
  'Casos de Éxito': { en: 'Success stories', zh: '成功案例' },
  'Historias de éxito': { en: 'Success stories', zh: '成功案例' },
  'Precios': { en: 'Pricing', zh: '价格' },
  'Tarifas': { en: 'Pricing', zh: '价格' },
  'Contacto': { en: 'Contact', zh: '联系我们' },
  'Contactar': { en: 'Contact us', zh: '联系我们' },
  'Ecosistema técnico': { en: 'Tech ecosystem', zh: '技术生态' },
  'Ecosistema Técnico': { en: 'Tech ecosystem', zh: '技术生态' },
  'Inicio': { en: 'Home', zh: '首页' },
  'Productos': { en: 'Products', zh: '产品' },
  'Soluciones': { en: 'Solutions', zh: '解决方案' },
  // Productos / sub-items habituales del catálogo.
  'Dealer / Stock': { en: 'Dealer / Stock', zh: '经销商库存(Dealer)' },
  'Multipublicador': { en: 'Multipublisher', zh: '多平台发布器' },
  'CRM4YOU': { en: 'CRM4YOU', zh: 'CRM4YOU' },
  'Contact Center': { en: 'Contact Center', zh: '客服中心' },
  'Photocall IA': { en: 'Photocall AI', zh: 'AI 摄影棚(Spyne)' },
  'Photocall IA (Spyne)': { en: 'Photocall AI (Spyne)', zh: 'AI 摄影棚(Spyne)' },
  'WhatsApp Business': { en: 'WhatsApp Business', zh: 'WhatsApp 企业版' },
  'Imagen avanzada + RCS': { en: 'Advanced Image + RCS', zh: '高级图像 + RCS' },
  'Motorflash IA': { en: 'Motorflash AI', zh: 'Motorflash 人工智能' },
  'Servicios Web': { en: 'Web Services', zh: '网站服务' },
  'Marketing Digital (SEO/SEA)': { en: 'Digital Marketing (SEO/SEA)', zh: '数字营销(SEO/SEA)' },
  'Marketing Digital': { en: 'Digital Marketing', zh: '数字营销' },
  'Clasificados (Motorflash.com)': { en: 'Classifieds (Motorflash.com)', zh: '分类信息(Motorflash.com)' },
  'Lead Exclusive': { en: 'Lead Exclusive', zh: '独家潜客(Lead Exclusive)' },
  'Lead Exclusive (5 Estrellas)': { en: 'Lead Exclusive (5-Star)', zh: '独家潜客(5 星)' },
  'MotorFlash Connect': { en: 'MotorFlash Connect', zh: 'MotorFlash 互联' },
  'Soluciones para Fabricantes': { en: 'Manufacturer Solutions', zh: '主机厂解决方案' },
  'Apex (Todo en uno)': { en: 'Apex (All-in-one)', zh: 'Apex(一体化)' },
  'Ver catálogo completo': { en: 'View full catalogue', zh: '查看完整目录' },
  // CTA habituales.
  'Solicitar demo': { en: 'Request a demo', zh: '申请演示' },
  'Pedir demo': { en: 'Request a demo', zh: '申请演示' },
  'Contáctanos': { en: 'Contact us', zh: '联系我们' },
  'Trabaja con nosotros': { en: 'Work with us', zh: '加入我们' },
}

function translateLabel(label: string, locale: MenuLocale): string {
  if (locale === 'es' || !label) return label
  const t = MENU_LABEL_DICT[label]
  if (!t) return label
  return t[locale]
}

export function localizeMenu(menu: MainMenuData, locale: MenuLocale): MainMenuData {
  if (locale === 'es') return menu
  return {
    items: menu.items.map((item) => ({
      ...item,
      label: translateLabel(item.label, locale),
      children: item.children?.map((c) => ({ ...c, label: translateLabel(c.label, locale) })),
    })),
    cta: menu.cta ? { ...menu.cta, label: menu.cta.label ? translateLabel(menu.cta.label, locale) : menu.cta.label } : menu.cta,
  }
}
