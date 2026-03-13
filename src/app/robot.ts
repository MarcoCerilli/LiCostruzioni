import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Protegge le tue API
    },
    sitemap: 'https://www.li-costruzionisrl.it/sitemap.xml',
  }
}