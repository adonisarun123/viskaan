import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications & Compliance - ISO 9001, PSARA Licensed | Visskan Elite',
  description: 'Visskan Elite Services certifications: ISO 9001:2015 quality management, PSARA licensed security, complete statutory compliance ensuring professional service standards.',
  keywords: [
    'ISO 9001 certification',
    'PSARA licensed company',
    'facility management certifications',
    'quality management certification',
    'security license PSARA',
    'statutory compliance',
    'certified facility management',
    'quality assurance'
  ],
  openGraph: {
    title: 'Certifications & Compliance - Quality Assured Services',
    description: 'ISO 9001:2015 certified, PSARA licensed facility management company ensuring quality and compliance in all services.',
    url: 'https://viskaneliteservices.com/certifications',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/certifications'
  }
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 