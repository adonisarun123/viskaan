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
  metadataBase: new URL('https://visskan.com'),
  title: {
    default: "Visskan Associates | Facility Management Services Since 1995",
    template: "%s | Visskan Associates"
  },
  description: "End-to-End Facility Management Services trusted by Government, Corporates & Institutions across India. Security, Housekeeping, Manpower Supply, and more since 1995.",
  keywords: [
    "facility management services", 
    "security services bangalore", 
    "housekeeping services", 
    "manpower supply india",
    "PSARA certified security",
    "ISO 9001 facility management",
    "corporate facility services",
    "government facility management",
    "bangalore facility management",
    "karnataka security services"
  ],
  authors: [{ name: "Visskan Associates" }],
  creator: "Visskan Associates",
  publisher: "Visskan Associates",
  category: "Business Services",
  classification: "Facility Management and Security Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visskan.com",
    siteName: "Visskan Associates",
    title: "Visskan Associates | Professional Facility Management Services",
    description: "Trusted facility management services since 1995. PSARA-certified security, housekeeping, manpower supply for Government, Corporates & Institutions across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Visskan Associates - Professional Facility Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visskan Associates | Facility Management Services",
    description: "Professional facility management services since 1995. Security, housekeeping, manpower supply across India.",
    images: ["/twitter-image.png"],
    creator: "@visskanassociates",
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
  alternates: {
    canonical: "https://visskan.com",
  },
  verification: {
    google: "google-site-verification-key",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
    "business.contact_data.country_name": "India",
    "business.contact_data.region": "Karnataka",
    "business.contact_data.locality": "Bangalore",
    "business.contact_data.phone_number": "+91-80-23197874",
    "business.contact_data.email": "mani@visskanaviation.com",
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
        <meta itemProp="email" content="mani@visskanaviation.com" />
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
