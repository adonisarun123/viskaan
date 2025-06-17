import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Visskan Elite Services - Get Quote for Facility Management Services",
  description: "Contact Visskan Elite Services for facility management solutions. Located in Bangalore, serving across India. Call +91-80-23197874 or email info@viskaneliteservices.com for quotes.",
  keywords: [
    "contact Visskan Elite Services",
    "facility management quote",
    "Visskan contact number",
    "facility management bangalore contact",
    "housekeeping services quote",
    "security services enquiry",
    "manpower supply contact",
    "facility management consultation"
  ],
  openGraph: {
    title: "Contact Visskan Elite Services - Facility Management Experts",
    description: "Get in touch for professional facility management services. Expert consultation for security, housekeeping, manpower supply across India.",
    url: "https://viskaneliteservices.com/contact",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Visskan Elite Services - Get Professional Quotes",
    description: "Contact us for facility management solutions. Located in Bangalore, serving across India with expert consultation."
  },
  alternates: {
    canonical: "https://viskaneliteservices.com/contact"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 