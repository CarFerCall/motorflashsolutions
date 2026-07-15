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
    name: 'Dealer + Multipublicación',
    menuLabel: 'Dealer + Multipub.',
    menuOrder: 10,
    tagline: 'Gestión inteligente del VO y multipublicación en +16 portales.',
    heroTitle: 'Tu stock siempre bajo control, publicado en todos los portales',
    intro:
      'Dealer + Multipublicación unifica la gestión inteligente del VO y la publicación multi-portal en una sola plataforma. Crea, revisa y publica tu stock desde un único entorno con un 99 % de integración API con los principales portales: Coches.net, AutoScout24, Wallapop, Autocasión, Motorflash y muchos más. Controla la calidad, analiza precios, exporta a todos los portales con un clic y gana tiempo para lo que importa: vender.',
    icon: 'hub',
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
    slug: 'motorchat',
    name: 'Motor-Chat',
    menuLabel: 'Motor-Chat',
    menuOrder: 75,
    tagline: 'IA que atiende tus chats de Coches.net y Wallapop al instante.',
    heroTitle: 'Cada chat sin responder es un cliente perdido',
    intro:
      'Motor-Chat es la IA de Motorflash que atiende tus chats de Coches.net, Wallapop y Milanuncios al instante, cualifica al cliente, genera el lead y lo envía directamente a tu CRM. Automático, 24/7 y sin dejar ni un mensaje sin contestar.',
    icon: 'smart_toy',
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
    name: 'Servicios Web',
    menuLabel: 'Servicios Web',
    menuOrder: 90,
    tagline: 'Webs y marketplaces para concesionarios: 3 niveles, de Única a Platinum.',
    heroTitle: 'Webs y marketplaces de automoción, en 30 días',
    intro:
      'Web 100 % automoción con 3 niveles (Platinum, Silver y Única). Publicación real de stock, CMS autogestionable, calculadora financiera, pasarela de pago, SEO y analítica de fábrica. Infraestructura 99,9 %, SSL, anti-DDoS y WAF incluidos. Integrado nativamente con CRM4YOU, Contact Center, MF Message y CHATWEB MF.',
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
    slug: 'lead-factory',
    name: 'Lead Motorflash.com',
    menuLabel: 'Lead Motorflash',
    menuOrder: 110,
    tagline: 'Captación de leads con intención de compra real.',
    heroTitle: 'Leads Motorflash.com: dos modalidades, una promesa',
    intro:
      'Captación de leads con intención de compra real, a partir del tráfico orgánico de Motorflash.com y de la mayor base de stock e inventario del mercado. Elige entre leads cualificados por sistema de scoring o prospects sin cualificar para cualificación interna. Sin coste de inversión publicitaria: solo pagas por lo que recibes.',
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
    slug: 'motorflash-connect',
    name: 'Fleet Manager',
    menuLabel: 'Fleet Manager',
    menuOrder: 135,
    tagline: 'Vídeos IA personalizados para retener clientes de renting.',
    heroTitle: 'Convierte cada fin de contrato de renting en una nueva venta',
    intro:
      'Fleet Manager genera y envía vídeos comerciales personalizados con IA a cada cliente cuyo renting está a punto de finalizar. El cliente recibe una pieza única con su nombre, su coche actual y hasta 5 propuestas reales para renovar, cambiar o quedarse el vehículo. Tu equipo cierra ventas con cero trabajo manual.',
    icon: 'autorenew',
  },
  {
    slug: 'apex',
    name: 'Apex by Motorflash Solutions',
    menuLabel: 'Apex (Todo en uno)',
    menuOrder: 140,
    tagline: 'Vende más. Gestiona menos.',
    heroTitle: 'Vende más. Gestiona menos.',
    intro:
      'El CRM para concesionarios que centraliza inventario, leads y multipublicación en una sola plataforma. Multiposting en +16 portales, del lead al contrato sin salir de la herramienta. Sin permanencia. Alta en 24 h.',
    icon: 'workspaces',
  },
]

import type { ProductLocale } from './products-i18n'
import { localize } from './products-localize'

export type { ProductLocale }

export const productBySlug = (slug: string, locale: ProductLocale = 'es'): Product | undefined => {
  const p = products.find((p) => p.slug === slug)
  return p ? localize(p, locale) : undefined
}

export const orderedProducts = (locale: ProductLocale = 'es'): Product[] =>
  [...products].sort((a, b) => a.menuOrder - b.menuOrder).map((p) => localize(p, locale))

