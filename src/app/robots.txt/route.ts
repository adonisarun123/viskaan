import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viskaneliteservices.com';
  
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /_next/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /industries
Allow: /certifications
Allow: /clients
Allow: /careers`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
} 