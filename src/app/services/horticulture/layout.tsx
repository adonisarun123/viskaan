import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horticulture & Landscaping Services - Garden Maintenance | Visskan Elite',
  description: 'Professional horticulture and landscaping services by Visskan Elite. Garden design, maintenance, vertical gardening, plant supply for corporate and residential properties.',
  keywords: [
    'horticulture services bangalore',
    'landscaping services',
    'garden maintenance',
    'vertical gardening',
    'corporate landscaping',
    'garden design services',
    'plant maintenance',
    'landscape contractor'
  ],
  openGraph: {
    title: 'Professional Horticulture & Landscaping Services',
    description: 'Expert horticulture services including garden design, maintenance, and landscaping for corporate and residential properties.',
    url: 'https://viskaneliteservices.com/services/horticulture',
    type: 'website'
  },
  alternates: {
    canonical: 'https://viskaneliteservices.com/services/horticulture'
  }
};

export default function HorticultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 