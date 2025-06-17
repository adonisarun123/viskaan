import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Visskan Elite Services - Join Our Facility Management Team',
  description: 'Build your career with Visskan Elite Services. Opportunities in facility management, security, housekeeping, operations across India. Join our team of 3600+ professionals.',
  keywords: [
    'careers Visskan Elite Services',
    'facility management jobs',
    'security guard jobs bangalore',
    'housekeeping supervisor jobs',
    'facility management careers',
    'jobs in security services',
    'employment opportunities bangalore',
    'facility management recruitment'
  ],
  openGraph: {
    title: 'Careers at Visskan Elite Services - Join Our Growing Team',
    description: 'Explore career opportunities in facility management with a leading company. 30+ years of growth, professional development opportunities.',
    url: 'https://viskaneliteservices.com/careers',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/careers'
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 