import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Canteen Management Services - FSSAI Certified Food Services | Visskan Elite',
  description: 'Professional canteen management services by Visskan Elite. FSSAI certified operations, complete kitchen setup, menu planning, hygiene standards for corporate canteens.',
  keywords: [
    'canteen management services',
    'FSSAI certified canteen',
    'corporate food services',
    'canteen setup services',
    'professional catering',
    'kitchen management',
    'institutional catering',
    'food service management'
  ],
  openGraph: {
    title: 'Professional Canteen Management Services - FSSAI Certified',
    description: 'Complete canteen management with FSSAI certified operations, professional chefs, and hygiene standards for corporate facilities.',
    url: 'https://viskaneliteservices.com/services/canteen',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/services/canteen'
  }
};

export default function CanteenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 