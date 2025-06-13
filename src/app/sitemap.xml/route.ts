import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viskaneliteservices.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/facility-management',
    '/services/security',
    '/services/drivers',
    '/services/manpower',
    '/services/horticulture',
    '/services/canteen',
    '/industries',
    '/certifications',
    '/clients',
    '/careers',
    '/contact',
    '/privacy',
    '/terms'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : route.includes('/services/') ? '0.8' : '0.7'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
} 