/**
 * Catálogo de productos Motorflash Ibérica.
 * Fuente de verdad para nombres, slugs, taglines, hero copy y orden de menú.
 * Contenido rico (features, highlights, process, cta) en /catalog/product-content.ts.
 */

export interface Product {
  slug: string
  name: string
  menuLabel: string
  menuOrder: number
  tagline: string
  heroTitle: string
  intro: string
  icon: string // Material Symbols Outlined
  highlight?: boolean
  placeholder?: boolean
}

export const products: Product[] = [
  {
    slug: 'dealer',
    name: 'Dealer',
    menuLabel: 'Dealer / Stock',
    menuOrder: 10,
    tagline: 'Gestión inteligente del VO de principio a fin.',
    heroTitle: 'Tu stock siempre bajo control, desde la creación hasta la venta',
    intro:
      'Dealer es la plataforma de gestión inteligente del VO diseñada para trabajar con grandes y pequeños volúmenes de stock. Crea, revisa y publica tu stock desde un único entorno. Controla la calidad, analiza precios y mejora la eficiencia de todo el proceso.',
    icon: 'inventory_2',
  },
  {
    slug: 'exportaciones',
    name: 'Multipublicador',
    menuLabel: 'Multipublicador',
    menuOrder: 20,
    tagline: 'Publica una vez, aparece en todos los portales.',
    heroTitle: 'Publica tu stock en un solo clic. Máxima visibilidad.',
    intro:
      'Publica en Coches.net, Autocasión, AutoScout24, Wallapop y más, con un 99 % de integración API con los principales portales. Mantén tu stock actualizado y gana tiempo para lo que importa: vender.',
    icon: 'dynamic_feed',
  },
  {
    slug: 'crm4you',
    name: 'CRM4YOU',
    menuLabel: 'CRM4YOU',
    menuOrder: 30,
    tagline: 'El CRM para grupos de concesionarios.',
    heroTitle: 'Convierte cada oportunidad en una venta real',
    intro:
      'CRM4YOU crea una experiencia comercial completa: desde la creación del stock hasta la venta. El único CRM del sector diseñado para gestionar múltiples ubicaciones, marcas y concesionarios. Procesos personalizados, trazabilidad total e IA para ayudarte a cerrar más ventas en menos tiempo.',
    icon: 'hub',
    highlight: true,
  },
  {
    slug: 'contact-center',
    name: 'Contact Center',
    menuLabel: 'Contact Center',
    menuOrder: 40,
    tagline: 'Atención omnicanal, eficiencia total.',
    heroTitle: 'Atención omnicanal, eficiencia total',
    intro:
      'Más de 70.000 llamadas al mes gestionadas. Nuestro Contact Center atiende, analiza y mejora cada conversación gracias a la inteligencia artificial y al sistema de Quality Monitoring, que evalúa el rendimiento y la atención de forma automática.',
    icon: 'support_agent',
  },
  {
    slug: 'spyne',
    name: 'Photocall IA (Spyne)',
    menuLabel: 'Photocall IA (Spyne)',
    menuOrder: 50,
    tagline: 'Fotografía y vídeo de coches con IA.',
    heroTitle: 'La solución de IA para tus catálogos de coches',
    intro:
      'Solución de inteligencia artificial para transformar tus imágenes de manera sencilla y rápida, logrando resultados de alta calidad profesional. Crea vídeos 360°, elimina fondos y genera fichas de vehículo que venden por ti, directamente desde tu móvil.',
    icon: 'photo_camera',
  },
  {
    slug: 'motorflash-message',
    name: 'WhatsApp Business',
    menuLabel: 'WhatsApp Business',
    menuOrder: 60,
    tagline: 'Conversaciones inteligentes con IA en WhatsApp.',
    heroTitle: 'Conversaciones inteligentes, atención inmediata',
    intro:
      'Tus clientes ya están en WhatsApp, y tú puedes estar disponible en cualquier momento. Con la IA de Message gestionas conversaciones reales, concertas citas y das seguimiento sin depender de horarios. Seguro, conectado con tu CRM y 100 % adaptado a la normativa RGPD.',
    icon: 'chat',
  },
  {
    slug: 'motorflash-mobile-tracking',
    name: 'Imagen avanzada + RCS',
    menuLabel: 'Imagen avanzada + RCS',
    menuOrder: 70,
    tagline: 'Fotografía IA y mensajería RCS para tus vehículos.',
    heroTitle: 'Fotografía IA y mensajería evolucionada para presentar mejor tus vehículos',
    intro:
      'Fotografía, vídeo y mejoras automáticas con IA para presentar cada vehículo de forma más atractiva. Complementado con RCS: mensajería visual, segura y multimedia que convierte hasta un 300 % más que un SMS tradicional.',
    icon: 'photo_library',
  },
  {
    slug: 'ia',
    name: 'Motorflash IA',
    menuLabel: 'Motorflash IA',
    menuOrder: 80,
    tagline: 'IA conversacional para tu concesionario, 24/7.',
    heroTitle: 'Tres soluciones de IA para conversar con tus clientes',
    intro:
      'Transforma la atención al cliente de tu concesionario con inteligencia artificial conversacional. Capta leads, resuelve dudas y concerta citas sin intervención humana, a cualquier hora, en el canal que tu cliente ya usa.',
    icon: 'psychology',
  },
  {
    slug: 'soluciones-web',
    name: 'Web / Marketplace',
    menuLabel: 'Web / Marketplace',
    menuOrder: 90,
    tagline: 'Tu concesionario online, diseñado para convertir.',
    heroTitle: 'Tu concesionario online, diseñado para convertir',
    intro:
      'Web 100 % automoción: gestión de stock, leads, renting, tasaciones y más, con una experiencia de usuario fluida y profesional. CMS propio potenciado por IA y estructura SEO friendly desde el primer día.',
    icon: 'language',
  },
  {
    slug: 'marketing-digital',
    name: 'Marketing Digital',
    menuLabel: 'Marketing Digital (SEO/SEA)',
    menuOrder: 100,
    tagline: 'SEO, SEA y Social Ads orientados a vender coches.',
    heroTitle: 'Estrategias digitales para vender más coches',
    intro:
      'Conocemos el mercado de la automoción y sabemos que cada concesionario necesita una estrategia diferente. Nuestro equipo combina experiencia en marketing, análisis y tecnología para mejorar la visibilidad de tu negocio. Creamos acciones personalizadas en SEO, SEA y Social Ads, siempre orientadas a la venta.',
    icon: 'trending_up',
  },
  {
    slug: 'portal-publicacion',
    name: 'Clasificados (Motorflash.com)',
    menuLabel: 'Clasificados (Motorflash.com)',
    menuOrder: 110,
    tagline: 'Visibilidad extra en el portal de Motorflash.com.',
    heroTitle: 'Visibilidad extra para tus vehículos en Motorflash.com',
    intro:
      'En Motorflash.com encontrarás la visibilidad extra para tus vehículos. Aprovecha el tráfico cualificado de nuestro portal especializado en automoción para impulsar la venta de tu stock.',
    icon: 'directions_car',
  },
  {
    slug: 'lead-factory',
    name: 'Lead Exclusive',
    menuLabel: 'Lead Exclusive (5 Estrellas)',
    menuOrder: 120,
    tagline: 'Leads verificados, filtrados y listos para convertir.',
    heroTitle: 'Leads verificados, filtrados y listos para convertirse en clientes',
    intro:
      'Recibe solo compradores con intención real de compra. Cada lead pasa por un proceso de verificación y cualificación con scoring de 0 a 100 antes de llegar a tu equipo de ventas. Más tiempo cerrando ventas, menos gestionando contactos que no convierten.',
    icon: 'star',
  },
  {
    slug: 'soluciones-fabricantes',
    name: 'Soluciones para Fabricantes',
    menuLabel: 'Soluciones para Fabricantes',
    menuOrder: 130,
    tagline: 'Tecnología para marcas y redes de concesionarios.',
    heroTitle: 'Soluciones tecnológicas para fabricantes y marcas',
    intro:
      'Plataforma integral pensada para fabricantes que necesitan coordinar su red de concesionarios, unificar la calidad de publicación y obtener métricas consolidadas a nivel marca.',
    icon: 'factory',
    placeholder: true,
  },
  {
    slug: 'motorflash-renting',
    name: 'MotorFlash Connect',
    menuLabel: 'MotorFlash Connect',
    menuOrder: 135,
    tagline: 'Vídeos IA personalizados para retener clientes de renting.',
    heroTitle: 'Convierte cada fin de contrato de renting en una nueva venta',
    intro:
      'MotorFlash Connect genera y envía vídeos comerciales personalizados con IA a cada cliente cuyo renting está a punto de finalizar. El cliente recibe una pieza única con su nombre, su coche actual y hasta 5 propuestas reales para renovar, cambiar o quedarse el vehículo. Tu equipo cierra ventas con cero trabajo manual.',
    icon: 'autorenew',
  },
  {
    slug: 'apex',
    name: 'Apex by Motorflash Solutions',
    menuLabel: 'Apex (Todo en uno)',
    menuOrder: 140,
    tagline: 'La suite todo en uno de Motorflash Solutions.',
    heroTitle: 'Apex: la suite todo en uno de Motorflash Solutions',
    intro:
      'Una sola plataforma que integra publicación, gestión de stock, CRM, IA conversacional, contact center y reporting unificado. Pensada para concesionarios que quieren consolidar todo su ecosistema digital en una única herramienta.',
    icon: 'workspaces',
    placeholder: true,
  },
]

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug)

export const orderedProducts = (): Product[] =>
  [...products].sort((a, b) => a.menuOrder - b.menuOrder)
