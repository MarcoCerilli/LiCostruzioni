import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.L.I-Costruzionisrl.it'
  const cities = ['terracina', 'latina', 'roma', 'sabaudia', 'san-felice-circeo']
  
  // Pagine statiche
  const routes = ['', '/servizi', '/progetti', '/contatti', '/chi-siamo'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    })
  )

  // Pagine delle città (SEO locali)
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/servizi/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...cityRoutes]
}