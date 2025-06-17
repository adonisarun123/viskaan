import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve - Facility Management Across Sectors | Visskan Elite',
  description: 'Visskan Elite Services serves diverse industries: Government, MNCs, aerospace, healthcare, education, manufacturing with specialized facility management solutions.',
  keywords: [
    'facility management industries',
    'government facility services',
    'aerospace facility management',
    'healthcare facility services',
    'educational facility management',
    'manufacturing facility services',
    'corporate facility management',
    'institutional services'
  ],
  openGraph: {
    title: 'Industries We Serve - Specialized Facility Management Solutions',
    description: 'Serving diverse industries with specialized facility management: Government, aerospace, healthcare, education, manufacturing across India.',
    url: 'https://viskaneliteservices.com/industries',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/industries'
  }
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 