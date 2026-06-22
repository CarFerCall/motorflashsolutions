import { getLocale } from 'next-intl/server'
import { getMainMenu, localizeMenu, type MenuLocale } from '@/lib/navigation'
import { NavbarClient } from './NavbarClient'

/**
 * Wrapper server-side que carga el menú desde el global y pasa los
 * datos al cliente. Aplica el diccionario de traducciones de labels
 * conocidos según el locale activo (ver lib/navigation.ts).
 */
export async function Navbar() {
  const menu = await getMainMenu()
  const locale = ((await getLocale()) as MenuLocale) || 'es'
  return <NavbarClient menu={localizeMenu(menu, locale)} />
}
