import { getLocale } from 'next-intl/server'

const PHONE_INTL = '34910787259'
const PHONE_DISPLAY = '+34 910 78 72 59'

const LABEL: Record<string, string> = {
  es: 'Contactar por WhatsApp',
  ca: 'Contactar per WhatsApp',
  en: 'Contact us on WhatsApp',
  zh: '通过 WhatsApp 联系我们',
}

const PRESET_MESSAGE: Record<string, string> = {
  es: 'Hola, me gustaría más información sobre Motorflash.',
  ca: 'Hola, m’agradaria més informació sobre Motorflash.',
  en: 'Hi, I would like more information about Motorflash.',
  zh: '您好,我想了解更多关于 Motorflash 的信息。',
}

/**
 * Botón flotante de WhatsApp visible en todas las páginas del sitio
 * (montado desde el layout raíz de `(frontend)`).
 *
 * Se posiciona abajo-izquierda para no colisionar con el widget de
 * ElevenLabs (`<elevenlabs-convai>`), que va abajo-derecha por defecto.
 *
 * Server component: sin JS de cliente. El texto del label y el mensaje
 * pre-rellenado se traducen por locale activo de next-intl.
 */
export async function WhatsAppButton() {
  const localeRaw = ((await getLocale()) as string) || 'es'
  const locale = ['es', 'ca', 'en', 'zh'].includes(localeRaw) ? localeRaw : 'es'
  const label = LABEL[locale] ?? LABEL.es
  const message = PRESET_MESSAGE[locale] ?? PRESET_MESSAGE.es
  const href = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${PHONE_DISPLAY}`}
      title={`${label} — ${PHONE_DISPLAY}`}
      className="fixed bottom-6 left-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      style={{ background: '#25D366' }}
    >
      {/* Logotipo oficial de WhatsApp (SVG inline, no depende de fuentes externas) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="white"
        aria-hidden
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001.5C5.649.5.5 5.649.5 12c0 2.096.55 4.145 1.595 5.945L.5 23.5l5.696-1.487a11.446 11.446 0 0 0 5.805 1.577h.005c6.352 0 11.5-5.149 11.502-11.5 0-3.074-1.196-5.964-3.367-8.137A11.437 11.437 0 0 0 12.001.5zm0 21.078h-.004a9.559 9.559 0 0 1-4.866-1.334l-.35-.207-3.62.947.965-3.525-.228-.361a9.573 9.573 0 0 1-1.467-5.098c.001-5.28 4.301-9.578 9.578-9.578 2.559 0 4.964.998 6.774 2.809a9.531 9.531 0 0 1 2.807 6.777c-.003 5.28-4.302 9.578-9.579 9.578z" />
      </svg>
    </a>
  )
}
