import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/obrigado', '/obrigado-sem', '/personalize'],
      },
    ],
    sitemap: 'https://eracx.com.br/sitemap.xml',
  }
}
