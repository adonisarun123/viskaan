import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Visskan Elite Services Website Terms',
  description: 'Terms and Conditions for using Visskan Elite Services website and facility management services. Legal terms, conditions, and service agreements.',
  keywords: [
    'terms and conditions',
    'website terms',
    'service terms',
    'legal conditions',
    'Visskan terms'
  ],
  openGraph: {
    title: 'Terms & Conditions - Visskan Elite Services',
    description: 'Terms and conditions for using our website and services.',
    url: 'https://viskaneliteservices.com/terms',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/terms'
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 