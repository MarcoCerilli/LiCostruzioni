import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.li-costruzionisrl.it'
  
  // Località coperte con pagina dedicata
  const cities = ['terracina', 'latina', 'roma', 'sabaudia', 'san-felice-circeo', 'fondi']

  // 1. Pagine Istituzionali
  const staticRoutes = ['', '/servizi', '/progetti', '/contatti', '/chi-siamo'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.9,
    })
  )

  // 2. Pagine SEO Locali (/servizi/[city])
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/servizi/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...cityRoutes]
}