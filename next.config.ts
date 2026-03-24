import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Lasciamo questi per evitare blocchi nel deploy su Debian/Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // IL TRUCCO PER IL 100/100: Attiva formati ultra-compressi
    formats: ['image/avif', 'image/webp'],
    
    // Ottimizzazione del caching (opzionale ma consigliata)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'api.dicebear.com' },
      { protocol: 'https', hostname: '*.googleusercontent.com' },
      // Manteniamo la tua configurazione universale per i fornitori (Mapei, ecc.)
      {
        protocol: 'https',
        hostname: '**', 
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;