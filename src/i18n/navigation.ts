import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/**
 * Wrappers tipados de Link, redirect, etc. que aplican el prefijo
 * de locale automáticamente. Reemplazan a los de `next/link` y
 * `next/navigation` en el código del frontend público.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
