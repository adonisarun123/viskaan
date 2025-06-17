import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manpower Supply Services - Skilled & Semi-Skilled Workforce | Visskan Elite',
  description: 'Professional manpower supply services by Visskan Elite. Skilled, semi-skilled & unskilled workforce for industries, corporates. Background verified staff across Karnataka.',
  keywords: [
    'manpower supply services bangalore',
    'skilled manpower supply',
    'semi-skilled workforce',
    'contract labor supply',
    'temporary staffing services',
    'industrial manpower',
    'corporate staffing solutions',
    'workforce management',
    'labour contractor bangalore',
    'staff augmentation services'
  ],
  openGraph: {
    title: 'Professional Manpower Supply Services - Skilled Workforce Solutions',
    description: 'Reliable manpower supply services with skilled, verified professionals for industrial and corporate needs across Karnataka.',
    url: 'https://viskaneliteservices.com/services/manpower',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/services/manpower'
  }
};

export default function ManpowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 