import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com', // Supporta tutti i sottodomini Google
        pathname: '/**',
      },
      // AGGIUNTA UNIVERSALE: Permette immagini da qualsiasi dominio HTTPS (Mapei, Kerakoll, ecc.)
      {
        protocol: 'https',
        hostname: '**', 
      },
      // Alcuni loghi potrebbero essere ancora in HTTP
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;