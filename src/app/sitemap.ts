import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.li-costruzionisrl.it'
  
  // Array delle città target
  const cities = ['terracina', 'latina', 'roma', 'sabaudia', 'san-felice-circeo', 'fondi']
  
  // Array dei servizi principali (slug)
  const services = ['ristrutturazioni', 'nuove-costruzioni', 'manutenzione', 'progettazione']

  // 1. Pagine Istituzionali (Priorità Massima)
  const staticRoutes = ['', '/servizi', '/progetti', '/contatti', '/chi-siamo'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    })
  )

  // 2. Pagine dei Servizi Specifici (Priorità Alta)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/servizi/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 3. Pagine SEO Locali (Città)
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/servizi-edili-${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. Combinazioni Servizio + Città (Long-tail Keywords)
  // Questo genera URL tipo /servizi/ristrutturazioni-roma
  const deepSeoRoutes = services.flatMap((service) => 
    cities.map((city) => ({
      url: `${baseUrl}/servizi/${service}-${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...deepSeoRoutes]
}