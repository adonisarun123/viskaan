import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Facility Management Services - Housekeeping & Maintenance | Visskan Elite',
  description: 'Comprehensive facility management services by Visskan Elite: Professional housekeeping, cleaning, pest control, maintenance for corporate, commercial & institutional facilities.',
  keywords: [
    'facility management services bangalore',
    'professional housekeeping services',
    'commercial cleaning services',
    'institutional facility management',
    'corporate housekeeping',
    'facility maintenance services',
    'pest control services',
    'building maintenance',
    'janitorial services',
    'facility management company'
  ],
  openGraph: {
    title: 'Professional Facility Management Services - Complete Solutions',
    description: 'Expert facility management including housekeeping, cleaning, maintenance. ISO certified services for corporate and institutional facilities.',
    url: 'https://viskaneliteservices.com/services/facility-management',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/services/facility-management'
  }
};

export default function FacilityManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 