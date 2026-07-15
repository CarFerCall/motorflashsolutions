/**
 * Lectura del menú principal desde el global de Payload. Server-side,
 * cacheado en el ciclo de petición (Next/React cache).
 *
 * El global MainMenu **no está localizado en BD** todavía (los labels
 * viven en Payload sin `localized: true` para evitar una migración
 * destructiva sobre columnas con datos). Para mostrar el menú en otro
 * idioma aplicamos el diccionario `MENU_LABEL_DICT` server-side
 * después de leer el global. El plan a medio plazo es activar
 * `localized: true` en los campos junto con una migración SQL manual
 * que rellene los locales nuevos sin perder los datos actuales.
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

export type MenuLocale = 'es' | 'ca' | 'en' | 'zh'

// URLs que ocultamos temporalmente del menú público (siguen accesibles
// por URL directa para revisión interna). Cuando la sección esté lista
// para publicar, se quita de este set.
const HIDDEN_URLS = new Set<string>(['/precios'])

function filterHiddenItems(items: MenuItem[]): MenuItem[] {
  return items
    .filter((it) => !(it.url && HIDDEN_URLS.has(it.url)))
    .map((it) => ({
      ...it,
      children: it.children?.filter((c) => !HIDDEN_URLS.has(c.url)),
    }))
}

export const getMainMenu = cache(async (): Promise<MainMenuData> => {
  try {
    const payload = await getPayloadClient()
    const data = (await payload.findGlobal({ slug: 'main-menu' as any })) as any
    const rawItems = Array.isArray(data?.items) ? data.items : []
    return {
      items: filterHiddenItems(rawItems),
      cta: data?.cta ?? null,
    }
  } catch {
    return { items: [], cta: null }
  }
})

const MENU_LABEL_DICT: Record<string, { ca: string; en: string; zh: string }> = {
  // Top-level items habituales.
  'Servicios': { ca: 'Serveis', en: 'Services', zh: '服务' },
  'Compañía': { ca: 'Companyia', en: 'Company', zh: '公司' },
  'La Compañía': { ca: 'La Companyia', en: 'The Company', zh: '公司' },
  'La compañía': { ca: 'La companyia', en: 'The company', zh: '公司' },
  'Empresa': { ca: 'Empresa', en: 'Company', zh: '公司' },
  'Sostenibilidad': { ca: 'Sostenibilitat', en: 'Sustainability', zh: '可持续发展' },
  'Casos de éxito': { ca: "Casos d'èxit", en: 'Success stories', zh: '成功案例' },
  'Casos de Éxito': { ca: "Casos d'èxit", en: 'Success stories', zh: '成功案例' },
  'Historias de éxito': { ca: "Històries d'èxit", en: 'Success stories', zh: '成功案例' },
  'Precios': { ca: 'Preus', en: 'Pricing', zh: '价格' },
  'Tarifas': { ca: 'Tarifes', en: 'Pricing', zh: '价格' },
  'Contacto': { ca: 'Contacte', en: 'Contact', zh: '联系我们' },
  'Contactar': { ca: 'Contacta', en: 'Contact us', zh: '联系我们' },
  'Ecosistema técnico': { ca: 'Ecosistema tècnic', en: 'Tech ecosystem', zh: '技术生态' },
  'Ecosistema Técnico': { ca: 'Ecosistema Tècnic', en: 'Tech ecosystem', zh: '技术生态' },
  'Inicio': { ca: 'Inici', en: 'Home', zh: '首页' },
  'Productos': { ca: 'Productes', en: 'Products', zh: '产品' },
  'Soluciones': { ca: 'Solucions', en: 'Solutions', zh: '解决方案' },
  'Dealer / Stock': { ca: 'Dealer / Estoc', en: 'Dealer / Stock', zh: '经销商库存(Dealer)' },
  'Dealer + Multipublicación': { ca: 'Dealer + Multipublicació', en: 'Dealer + Multi-publishing', zh: 'Dealer + 多平台发布' },
  'CRM4YOU': { ca: 'CRM4YOU', en: 'CRM4YOU', zh: 'CRM4YOU' },
  'Contact Center': { ca: 'Contact Center', en: 'Contact Center', zh: '客服中心' },
  'Photocall IA': { ca: 'Photocall IA', en: 'Photocall AI', zh: 'AI 摄影棚(Spyne)' },
  'Photocall IA (Spyne)': { ca: 'Photocall IA (Spyne)', en: 'Photocall AI (Spyne)', zh: 'AI 摄影棚(Spyne)' },
  'WhatsApp Business': { ca: 'WhatsApp Business', en: 'WhatsApp Business', zh: 'WhatsApp 企业版' },
  'Motorflash IA': { ca: 'Motorflash IA', en: 'Motorflash AI', zh: 'Motorflash 人工智能' },
  'Motor-Chat': { ca: 'Motor-Chat', en: 'Motor-Chat', zh: 'Motor-Chat' },
  'Servicios Web': { ca: 'Serveis Web', en: 'Web Services', zh: '网站服务' },
  'Marketing Digital (SEO/SEA)': { ca: 'Marketing Digital (SEO/SEA)', en: 'Digital Marketing (SEO/SEA)', zh: '数字营销(SEO/SEA)' },
  'Marketing Digital': { ca: 'Marketing Digital', en: 'Digital Marketing', zh: '数字营销' },
  'Lead Exclusive': { ca: 'Lead Exclusive', en: 'Lead Exclusive', zh: '独家潜客(Lead Exclusive)' },
  'Lead Exclusive (5 Estrellas)': { ca: 'Lead Exclusive (5 Estrelles)', en: 'Lead Exclusive (5-Star)', zh: '独家潜客(5 星)' },
  'Fleet Manager': { ca: 'Fleet Manager', en: 'Fleet Manager', zh: 'Fleet Manager' },
  'Soluciones para Fabricantes': { ca: 'Solucions per a Fabricants', en: 'Manufacturer Solutions', zh: '主机厂解决方案' },
  'Apex (Todo en uno)': { ca: 'Apex (Tot en un)', en: 'Apex (All-in-one)', zh: 'Apex(一体化)' },
  'Ver catálogo completo': { ca: 'Veure el catàleg complet', en: 'View full catalogue', zh: '查看完整目录' },
  'Solicitar demo': { ca: 'Sol·licitar demo', en: 'Request a demo', zh: '申请演示' },
  'Pedir demo': { ca: 'Demanar demo', en: 'Request a demo', zh: '申请演示' },
  'Contáctanos': { ca: "Contacta'ns", en: 'Contact us', zh: '联系我们' },
  'Trabaja con nosotros': { ca: 'Treballa amb nosaltres', en: 'Work with us', zh: '加入我们' },
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
    cta: menu.cta
      ? { ...menu.cta, label: menu.cta.label ? translateLabel(menu.cta.label, locale) : menu.cta.label }
      : menu.cta,
  }
}
