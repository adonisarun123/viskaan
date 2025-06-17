import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Visskan Elite Services - 30+ Years in Facility Management | ISO 9001 Company",
  description: "Learn about Visskan Elite Services, established 1995. Leading facility management company with 3600+ professionals, ISO 9001:2015 certified. Expert leadership team delivering excellence across India.",
  keywords: [
    "about Visskan Elite Services",
    "facility management company history",
    "ISO 9001 certified company bangalore",
    "facility management leadership team",
    "30 years facility management experience",
    "professional facility management india",
    "Visskan company profile",
    "facility management expertise"
  ],
  openGraph: {
    title: "About Visskan Elite Services - 30+ Years of Facility Management Excellence",
    description: "Established 1995, Visskan Elite Services leads facility management in India with 3600+ professionals, ISO certification, and proven expertise serving Government & MNCs.",
    url: "https://viskaneliteservices.com/about",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Visskan Elite Services - 30+ Years of Excellence",
    description: "Leading facility management company since 1995. 3600+ professionals, ISO certified, serving Government & MNCs across India."
  },
  alternates: {
    canonical: "https://viskaneliteservices.com/about"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 