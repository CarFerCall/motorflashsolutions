/**
 * Lectura del menú principal desde el global de Payload. Server-side,
 * cacheado por locale en el ciclo de petición (Next/React cache).
 *
 * El global MainMenu tiene `localized: true` en los labels: cada
 * idioma se almacena en su propia columna. El frontend pasa el locale
 * activo en cada query (payload.findGlobal({ slug, locale })) y
 * Payload aplica fallback al defaultLocale (es) si la traducción
 * concreta no existe.
 *
 * Adicionalmente, mantenemos un diccionario MENU_LABEL_DICT como
 * **red de seguridad**: si tras pedir el locale activo Payload nos
 * devuelve la versión española (porque la traducción en BD aún no
 * está sembrada), aplicamos el diccionario en memoria. Esto permite
 * iterar el contenido del menú desde el admin sin tener que sembrar
 * todas las traducciones a mano antes de cada cambio.
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

/**
 * Lee el menú principal en el idioma indicado. Aplica fallback de
 * Payload (defaultLocale = 'es') si falta una traducción.
 *
 * Cache por idioma: dos llamadas con el mismo locale en el mismo
 * render no disparan dos queries.
 */
export const getMainMenu = cache(async (locale: MenuLocale = 'es'): Promise<MainMenuData> => {
  try {
    const payload = await getPayloadClient()
    // El cast a `any` evita conflicto con `payload-types.ts` mientras
    // no se regenere — el tipo de locale auto-generado se actualizará
    // al hacer `payload generate:types` tras añadir la localization.
    const data = (await payload.findGlobal({ slug: 'main-menu' as any, locale: locale as any })) as any
    const menu: MainMenuData = {
      items: Array.isArray(data?.items) ? data.items : [],
      cta: data?.cta ?? null,
    }
    return locale === 'es' ? menu : applyDictionaryFallback(menu, locale)
  } catch {
    return { items: [], cta: null }
  }
})

// Diccionario de respaldo: traducciones conocidas de los labels más
// habituales del menú de Motorflash. Se aplica SOLO si el campo
// llega en español tras pedir un locale distinto (es decir, no hay
// traducción todavía en el CMS para ese label).
export const MENU_LABEL_DICT: Record<string, { ca: string; en: string; zh: string }> = {
  // Top-level items habituales.
  'Servicios': { ca: 'Serveis', en: 'Services', zh: '服务' },
  'Compañía': { ca: 'Companyia', en: 'Company', zh: '公司' },
  'La Compañía': { ca: 'La Companyia', en: 'The Company', zh: '公司' },
  'Empresa': { ca: 'Empresa', en: 'Company', zh: '公司' },
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
  // Productos / sub-items habituales del catálogo.
  'Dealer / Stock': { ca: 'Dealer / Estoc', en: 'Dealer / Stock', zh: '经销商库存(Dealer)' },
  'Multipublicador': { ca: 'Multipublicador', en: 'Multipublisher', zh: '多平台发布器' },
  'CRM4YOU': { ca: 'CRM4YOU', en: 'CRM4YOU', zh: 'CRM4YOU' },
  'Contact Center': { ca: 'Contact Center', en: 'Contact Center', zh: '客服中心' },
  'Photocall IA': { ca: 'Photocall IA', en: 'Photocall AI', zh: 'AI 摄影棚(Spyne)' },
  'Photocall IA (Spyne)': { ca: 'Photocall IA (Spyne)', en: 'Photocall AI (Spyne)', zh: 'AI 摄影棚(Spyne)' },
  'WhatsApp Business': { ca: 'WhatsApp Business', en: 'WhatsApp Business', zh: 'WhatsApp 企业版' },
  'Imagen avanzada + RCS': { ca: 'Imatge avançada + RCS', en: 'Advanced Image + RCS', zh: '高级图像 + RCS' },
  'Motorflash IA': { ca: 'Motorflash IA', en: 'Motorflash AI', zh: 'Motorflash 人工智能' },
  'Servicios Web': { ca: 'Serveis Web', en: 'Web Services', zh: '网站服务' },
  'Marketing Digital (SEO/SEA)': { ca: 'Marketing Digital (SEO/SEA)', en: 'Digital Marketing (SEO/SEA)', zh: '数字营销(SEO/SEA)' },
  'Marketing Digital': { ca: 'Marketing Digital', en: 'Digital Marketing', zh: '数字营销' },
  'Clasificados (Motorflash.com)': { ca: 'Classificats (Motorflash.com)', en: 'Classifieds (Motorflash.com)', zh: '分类信息(Motorflash.com)' },
  'Lead Exclusive': { ca: 'Lead Exclusive', en: 'Lead Exclusive', zh: '独家潜客(Lead Exclusive)' },
  'Lead Exclusive (5 Estrellas)': { ca: 'Lead Exclusive (5 Estrelles)', en: 'Lead Exclusive (5-Star)', zh: '独家潜客(5 星)' },
  'MotorFlash Connect': { ca: 'MotorFlash Connect', en: 'MotorFlash Connect', zh: 'MotorFlash 互联' },
  'Soluciones para Fabricantes': { ca: 'Solucions per a Fabricants', en: 'Manufacturer Solutions', zh: '主机厂解决方案' },
  'Apex (Todo en uno)': { ca: 'Apex (Tot en un)', en: 'Apex (All-in-one)', zh: 'Apex(一体化)' },
  'Ver catálogo completo': { ca: 'Veure el catàleg complet', en: 'View full catalogue', zh: '查看完整目录' },
  // CTA habituales.
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

/**
 * Aplica el diccionario de respaldo si el label viene en español
 * (Payload devolvió fallback porque no hay traducción específica
 * en el locale pedido). Útil mientras el CMS no esté sembrado con
 * todas las traducciones.
 */
function applyDictionaryFallback(menu: MainMenuData, locale: MenuLocale): MainMenuData {
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
