import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Visskan Elite Services | Data Protection & Security",
  description: "Read Visskan Elite Services' privacy policy. Learn how we protect your personal data, our data collection practices, and your rights regarding information privacy.",
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: "https://viskaneliteservices.com/privacy"
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 