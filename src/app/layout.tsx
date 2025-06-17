import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003366',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://viskaneliteservices.com'),
  title: {
    default: 'Visskan Elite Services - Professional Facility Management Company India',
    template: '%s | Visskan Elite Services'
  },
  description: 'Visskan Elite Services: India\'s premier facility management company since 1995. ISO 9001:2015 certified with 3600+ professionals providing security, housekeeping, manpower supply, and comprehensive facility solutions.',
  keywords: [
    'facility management company india',
    'Visskan Elite Services',
    'professional facility management',
    'ISO 9001 certified',
    'PSARA licensed security',
    'housekeeping services',
    'manpower supply',
    'corporate facility services'
  ],
  authors: [{ name: 'Visskan Elite Services' }],
  creator: 'Visskan Elite Services',
  publisher: 'Visskan Elite Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://viskaneliteservices.com',
    siteName: 'Visskan Elite Services',
    title: 'Visskan Elite Services - Professional Facility Management Company',
    description: 'ISO 9001:2015 certified facility management with 3600+ professionals. Comprehensive security, housekeeping, manpower supply solutions across India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Visskan Elite Services - Professional Facility Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visskan Elite Services - Professional Facility Management',
    description: 'ISO 9001 certified facility management with 30+ years experience across India.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/LocalBusiness">
      <head>
        {/* Critical CSS inlined to prevent blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *{box-sizing:border-box;border:0 solid #e0e0e0}
            body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;background-color:#f5f5f5;color:#333;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            h1,h2,h3,h4,h5,h6{font-weight:700;margin:0}
            .min-h-screen{min-height:100vh}
            .flex{display:flex}
            .flex-col{flex-direction:column}
            .flex-grow{flex-grow:1}
            .font-sans{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}
            .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
            .from-\\[\\#003366\\]{--tw-gradient-from:#003366 var(--tw-gradient-to, rgba(0, 51, 102, 0));--tw-gradient-to:rgba(0, 51, 102, 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}
            .via-\\[\\#004080\\]{--tw-gradient-to:rgba(0, 64, 128, 0);--tw-gradient-stops:var(--tw-gradient-from), #004080, var(--tw-gradient-to)}
            .to-\\[\\#0066CC\\]{--tw-gradient-to:#0066cc}
          `
        }} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero-bg.svg" as="image" type="image/svg+xml" />
        
        {/* Additional meta tags for LLM optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data */}
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
        <StructuredData type="service" />
      </head>
      <body 
        className="min-h-screen flex flex-col font-sans"
        itemScope 
        itemType="https://schema.org/LocalBusiness"
      >
        {/* Microdata for LLM understanding */}
        <meta itemProp="name" content="Visskan Associates" />
        <meta itemProp="description" content="Professional facility management services since 1995" />
        <meta itemProp="telephone" content="+91-80-23197874" />
        <meta itemProp="email" content="info@viskaneliteservices.com" />
        <meta itemProp="foundingDate" content="1995" />
        <meta itemProp="areaServed" content="Karnataka, India" />
        
        <Header />
        <main className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
