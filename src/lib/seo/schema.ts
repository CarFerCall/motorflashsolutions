import { absoluteUrl, getSiteUrl } from './site-url'

const NAP = {
  legalName: 'Motorflash Ibérica de Negocios S.L.',
  brandName: 'Motorflash',
  street: 'Calle Basauri 17, Edf. B, Bajo Izq. D',
  city: 'Madrid',
  postalCode: '28023',
  country: 'ES',
  phone: '+34910788575',
  email: 'comercial@motorflash.com',
  foundingDate: '2007',
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${getSiteUrl()}/#organization`,
    name: NAP.brandName,
    legalName: NAP.legalName,
    url: getSiteUrl(),
    logo: absoluteUrl('/images/logo-motorflash.png'),
    foundingDate: NAP.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: NAP.phone,
        email: NAP.email,
        contactType: 'sales',
        areaServed: ['ES', 'PT'],
        availableLanguage: ['Spanish'],
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'ISO 9001',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${getSiteUrl()}/#website`,
    url: getSiteUrl(),
    name: NAP.brandName,
    inLanguage: 'es-ES',
    publisher: { '@id': `${getSiteUrl()}/#organization` },
  }
}

export function serviceSchema(params: {
  name: string
  description: string
  slug: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: absoluteUrl(`/servicios/${params.slug}`),
    image: params.image ? absoluteUrl(params.image) : absoluteUrl('/images/logo-motorflash.png'),
    provider: { '@id': `${getSiteUrl()}/#organization` },
    serviceType: 'SaaS para concesionarios y marcas del motor',
    areaServed: { '@type': 'Country', name: 'España' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Concesionarios, grupos de concesionarios y fabricantes del sector del motor',
    },
  }
}

/**
 * Schema genérico WebPage/AboutPage/ContactPage/CollectionPage.
 * `type` cambia el `@type`. Todo lo demás es común: url, name, description,
 * inLanguage, publisher, breadcrumb ref.
 */
export function pageSchema(params: {
  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage'
  path: string
  name: string
  description?: string
  inLanguage: string
  breadcrumbId?: string
  image?: string
}) {
  const pageUrl = absoluteUrl(params.path)
  return {
    '@context': 'https://schema.org',
    '@type': params.type,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: params.name,
    description: params.description,
    inLanguage: params.inLanguage,
    isPartOf: { '@id': `${getSiteUrl()}/#website` },
    publisher: { '@id': `${getSiteUrl()}/#organization` },
    ...(params.breadcrumbId ? { breadcrumb: { '@id': params.breadcrumbId } } : {}),
    ...(params.image ? { primaryImageOfPage: absoluteUrl(params.image) } : {}),
  }
}

export function faqPageSchema(path: string, items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/**
 * Product schema para páginas de configurador de precio. `priceRange`
 * evita comprometerse a un precio exacto (los planes son configurables).
 */
export function productSchema(params: {
  name: string
  description: string
  slug: string
  priceCurrency?: string
  priceRange?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    url: absoluteUrl(`/precios/${params.slug}`),
    image: params.image ? absoluteUrl(params.image) : absoluteUrl('/images/logo-motorflash.png'),
    brand: { '@id': `${getSiteUrl()}/#organization` },
    ...(params.priceRange
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: params.priceCurrency ?? 'EUR',
            priceRange: params.priceRange,
            availability: 'https://schema.org/InStock',
            url: absoluteUrl(`/precios/${params.slug}`),
            seller: { '@id': `${getSiteUrl()}/#organization` },
          },
        }
      : {}),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>, id?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
    })),
  }
}

export function jsonLdScript(schema: Record<string, unknown> | Array<Record<string, unknown>>) {
  return JSON.stringify(schema).replace(/</g, '\\u003c')
}
