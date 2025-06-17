import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Visskan Elite Services - 30+ Years in Facility Management Excellence',
  description: 'Learn about Visskan Elite Services, established 1995. Leading facility management company with 3600+ professionals, ISO 9001:2015 certified. Our vision, mission & leadership team.',
  keywords: [
    'about Visskan Elite Services',
    'facility management company history',
    'ISO 9001 certified company bangalore',
    'facility management leadership team',
    '30 years facility management experience',
    'professional facility management india',
    'Visskan company profile',
    'facility management expertise',
    'established facility management company'
  ],
  openGraph: {
    title: 'About Visskan Elite Services - 30+ Years of Facility Management Excellence',
    description: 'Established 1995, Visskan Elite Services leads facility management in India with 3600+ professionals, ISO certification, and proven expertise serving Government & MNCs.',
    url: 'https://viskaneliteservices.com/about',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 