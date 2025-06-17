import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Driver Services - Corporate & Personal Drivers | Visskan Elite',
  description: 'Professional driver services by Visskan Elite. Background verified drivers for corporate fleets, personal vehicles. Licensed, experienced drivers across Karnataka.',
  keywords: [
    'driver services bangalore',
    'corporate driver services',
    'professional drivers',
    'verified drivers',
    'chauffeur services',
    'fleet driver supply',
    'corporate transportation',
    'driver staffing services'
  ],
  openGraph: {
    title: 'Professional Driver Services - Verified & Experienced Drivers',
    description: 'Reliable driver services with background verified, licensed professionals for corporate and personal transportation needs.',
    url: 'https://viskaneliteservices.com/services/drivers',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/services/drivers'
  }
};

export default function DriversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 