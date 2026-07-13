/**
 * Utilidades para blindar cabeceras de email frente a inyección.
 *
 * Los campos de texto libre del usuario (nombre, referencia…) no pueden
 * llevar CR/LF ni caracteres de control cuando se meten en un `subject`
 * u otra cabecera SMTP: un atacante los usaría para inyectar más
 * cabeceras (`Bcc:`, `Content-Type:`…) o cortar el asunto por la mitad.
 * Ver GHSA-vvjj-xcjg-gr5g / GHSA-c7w3-x93f-qmm8 (nodemailer).
 */

// Control chars C0 + DEL. \r, \n, \t, \v, \f caen dentro de \x00-\x1f.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS_REGEX = /[\x00-\x1f\x7f]/g

/**
 * Deja el string listo para meter en una cabecera de email: sin CR/LF ni
 * otros caracteres de control, colapsa espacios y lo trunca a `maxLen`
 * para evitar asuntos gigantes.
 */
export function sanitizeHeader(value: string, maxLen = 200): string {
  return value
    .replace(CONTROL_CHARS_REGEX, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
}
