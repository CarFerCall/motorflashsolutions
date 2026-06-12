import { getMainMenu } from '@/lib/navigation'
import { NavbarClient } from './NavbarClient'

/**
 * Wrapper server-side que carga el menú desde el global y pasa los
 * datos al cliente. Así el menú es 100% editable desde admin sin
 * tener que tocar código.
 */
export async function Navbar() {
  const menu = await getMainMenu()
  return <NavbarClient menu={menu} />
}
