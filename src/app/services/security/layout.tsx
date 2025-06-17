import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PSARA Licensed Security Services - Professional Security Guards | Visskan Elite',
  description: 'Professional PSARA licensed security services by Visskan Elite. Trained security guards, ex-servicemen, 24/7 surveillance, access control for corporate, industrial & residential security.',
  keywords: [
    'PSARA licensed security services',
    'security guard services bangalore',
    'corporate security solutions',
    'industrial security services',
    'professional security guards',
    'ex-servicemen security',
    '24/7 security services',
    'manned guarding services',
    'CCTV surveillance services',
    'access control systems',
    'security agency bangalore'
  ],
  openGraph: {
    title: 'PSARA Licensed Security Services - Professional Security Solutions',
    description: 'Expert security services with trained guards, ex-servicemen, 24/7 monitoring. Trusted by ISRO, BEL, HAL for comprehensive security solutions.',
    url: 'https://viskaneliteservices.com/services/security',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/services/security'
  }
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 