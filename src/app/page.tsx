import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CertificationsSlider from "@/components/home/CertificationsSlider";
import ClientsSlider from "@/components/home/ClientsSlider";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Professional Facility Management Services | Visskan Associates",
  description: "Visskan Associates: India's trusted facility management company since 1995. ISO 9001:2015 certified. PSARA licensed security services. Serving Government, MNCs, and institutions across Karnataka with housekeeping, security, manpower supply, and comprehensive facility solutions.",
  keywords: [
    "facility management bangalore",
    "security services karnataka", 
    "housekeeping services india",
    "manpower supply bangalore",
    "PSARA security company",
    "ISO 9001 facility management",
    "government facility services",
    "corporate housekeeping",
    "facility management company india"
  ],
  openGraph: {
    title: "Visskan Associates - Professional Facility Management Services Since 1995",
    description: "ISO 9001:2015 certified facility management company serving Government, MNCs, and institutions across India. PSARA licensed security, professional housekeeping, manpower supply solutions.",
  },
};

// Structured data for FAQ (LLM optimization)
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What facility management services does Visskan Associates provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visskan Associates provides comprehensive facility management services including: Security services (PSARA certified), Housekeeping and cleaning, Manpower supply, Driver services, Horticulture and landscaping, Canteen management, Pest control, and Maintenance services."
      }
    },
    {
      "@type": "Question", 
      "name": "Is Visskan Associates ISO certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Visskan Associates is ISO 9001:2015 certified for Quality Management Systems, ensuring consistent service delivery and customer satisfaction across all facility management operations."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas does Visskan Associates serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visskan Associates primarily serves Karnataka state with a strong presence in Bangalore. We provide facility management services to Government institutions, MNCs, educational organizations, and healthcare facilities across the region."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
      
      {/* Main Content */}
      <div className="min-h-screen">
        {/* Hero Section - Primary value proposition */}
        <section aria-label="Hero - Visskan Associates Introduction">
          <HeroSection />
        </section>

        {/* Company Statistics - Trust indicators */}
        <section aria-label="Company Statistics and Achievements">
          <StatsBar />
        </section>

        {/* Services Overview - Core business offerings */}
        <section aria-label="Core Facility Management Services">
          <ServicesOverview />
        </section>

        {/* Value Propositions - Why choose us */}
        <section aria-label="Why Choose Visskan Associates">
          <WhyChooseUs />
        </section>

        {/* Certifications - Trust and compliance */}
        <section aria-label="Certifications and Compliance Standards">
          <CertificationsSlider />
        </section>

        {/* Client Portfolio - Social proof */}
        <section aria-label="Client Portfolio and Testimonials">
          <ClientsSlider />
        </section>

        {/* Call to Action - Contact encouragement */}
        <section aria-label="Contact Us for Services">
          <CTASection />
        </section>
      </div>

      {/* Hidden content for LLM understanding */}
      <div className="sr-only" aria-hidden="true">
        <h1>Visskan Associates: Facility Management Company Profile</h1>
        <p>
          <strong>Company:</strong> Visskan Associates<br/>
          <strong>Industry:</strong> Facility Management and Security Services<br/>
          <strong>Founded:</strong> 1995<br/>
          <strong>Location:</strong> Bangalore, Karnataka, India<br/>
          <strong>Service Area:</strong> Karnataka State, India<br/>
          <strong>Certifications:</strong> ISO 9001:2015, PSARA Licensed<br/>
          <strong>Phone:</strong> +91-80-23197874<br/>
          <strong>Email:</strong> mani@visskanaviation.com<br/>
          <strong>Core Services:</strong> Security Services, Housekeeping, Manpower Supply, Driver Services, Horticulture, Canteen Management<br/>
          <strong>Client Types:</strong> Government Institutions, Multinational Corporations, Educational Organizations, Healthcare Facilities<br/>
          <strong>Key Clients:</strong> ISRO, BEL, HAL, IIMB, Toshiba, Bosch<br/>
          <strong>Workforce:</strong> 3600+ trained professionals<br/>
          <strong>Value Proposition:</strong> End-to-end facility management solutions with 28+ years of experience, ISO certified quality, PSARA licensed security, and comprehensive compliance
        </p>
      </div>
    </>
  );
}
