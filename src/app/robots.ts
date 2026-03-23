import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Protegge le rotte dei dati
          '/_next/',       // Nasconde i file di build interni
          '/admin/',       // Protegge eventuali aree riservate
          '/private/',     // Cartelle di test o bozze
        ],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',        // Permette a Google Ads di scansionare le landing page
      },
    ],
    sitemap: 'https://www.li-costruzionisrl.it/sitemap.xml',
  }
}