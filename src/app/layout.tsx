import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Visskan Associates | Facility Management Services Since 1995",
  description: "End-to-End Facility Management Services trusted by Government, Corporates & Institutions across India. Security, Housekeeping, Manpower Supply, and more.",
  keywords: "facility management, security services, housekeeping, manpower supply, Bangalore, India",
  openGraph: {
    title: "Visskan Associates | Facility Management Services",
    description: "Professional facility management services since 1995",
    url: "https://visskan.com",
    siteName: "Visskan Associates",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
