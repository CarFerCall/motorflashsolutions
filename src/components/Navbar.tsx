import { getLocale } from 'next-intl/server'
import { getMainMenu, type MenuLocale } from '@/lib/navigation'
import { NavbarClient } from './NavbarClient'

/**
 * Wrapper server-side que carga el menú principal desde el global de
 * Payload en el idioma activo (la propia query a Payload se encarga
 * de devolver los labels en el locale correcto gracias a
 * `localized: true` en `MainMenu.ts`).
 */
export async function Navbar() {
  const locale = ((await getLocale()) as MenuLocale) || 'es'
  const menu = await getMainMenu(locale)
  return <NavbarClient menu={menu} />
}
