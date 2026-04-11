import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EDUSANNA Global Educational Platform',
    short_name: 'EDUSANNA',
    description: 'Global Educational Platform - Elevate Your Mind',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    scope: '/',
    icons: [
      {
        src: '/edusanna-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/edusanna-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    screenshots: [
      {
        src: '/edusanna-logo.png',
        sizes: '540x720',
        type: 'image/png'
      }
    ],
    categories: ['education', 'productivity'],
    orientation: 'portrait-primary',
    prefer_related_applications: false,
  }
}
