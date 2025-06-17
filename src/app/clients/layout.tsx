import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients - Trusted by Government, ISRO, BEL, HAL | Visskan Elite',
  description: 'Visskan Elite Services client portfolio: Trusted by Government institutions, ISRO, BEL, HAL, IIMB, Toshiba, Bosch and leading MNCs for facility management excellence.',
  keywords: [
    'Visskan Elite clients',
    'ISRO facility management',
    'BEL security services',
    'HAL facility services',
    'government facility management',
    'MNC facility services',
    'aerospace facility management',
    'trusted facility management'
  ],
  openGraph: {
    title: 'Our Clients - Trusted by Leading Organizations',
    description: 'Trusted facility management partner for Government, ISRO, BEL, HAL, and leading MNCs across India.',
    url: 'https://viskaneliteservices.com/clients',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/clients'
  }
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 