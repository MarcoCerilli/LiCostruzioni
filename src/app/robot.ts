import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Protegge le tue API
    },
    sitemap: 'https://www.L.I-Costruzionisrl.it/sitemap.xml',
  }
}