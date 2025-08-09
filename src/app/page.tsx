import { Metadata } from "next";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CertificationsSlider from "@/components/home/CertificationsSlider";
import ClientsSlider from "@/components/home/ClientsSlider";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Viskan Elite Services - Professional Facility Management Company India | ISO 9001 Certified",
  description: "Viskan Elite Services: India's premier facility management company since 1995. ISO 9001:2015 certified with 3600+ professionals. PSARA licensed security, housekeeping, manpower supply, drivers, horticulture & canteen services across Karnataka.",
  keywords: [
    "facility management company india",
    "Viskan Elite Services",
    "professional facility management bangalore",
    "ISO 9001 facility management",
    "PSARA licensed security services",
    "housekeeping services bangalore",
    "manpower supply company karnataka",
    "corporate facility management",
    "government facility services india",
    "facility management contractor",
    "security guard services bangalore",
    "commercial cleaning services",
    "industrial facility management"
  ],
  openGraph: {
    title: "Viskan Elite Services - Premier Facility Management Company Since 1995",
    description: "ISO 9001:2015 certified facility management with 3600+ professionals. Comprehensive security, housekeeping, manpower supply solutions across India. Trusted by Government & MNCs.",
    url: "https://viskaneliteservices.com",
    siteName: "Viskan Elite Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viskan Elite Services - Professional Facility Management"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Viskan Elite Services - Professional Facility Management Company",
    description: "ISO 9001 certified facility management with 30+ years experience. Security, housekeeping, manpower supply across India.",
    images: ["/twitter-image.png"]
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
    canonical: "https://viskaneliteservices.com"
  }
};

// Structured data for FAQ (LLM optimization)
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What facility management services does Viskan Associates provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Viskan Associates provides comprehensive facility management services including: Security services (PSARA certified), Housekeeping and cleaning, Manpower supply, Driver services, Horticulture and landscaping, Canteen management, Pest control, and Maintenance services."
      }
    },
    {
      "@type": "Question", 
      "name": "Is Viskan Associates ISO certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Viskan Associates is ISO 9001:2015 certified for Quality Management Systems, ensuring consistent service delivery and customer satisfaction across all facility management operations."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas does Viskan Associates serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Viskan Associates primarily serves Karnataka state with a strong presence in Bangalore. We provide facility management services to Government institutions, MNCs, educational organizations, and healthcare facilities across the region."
      }
    }
  ]
};

// New Modern Hero Component
const ModernHeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-4">
      {/* Background Decorative Elements - Reduced Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Keep only a few subtle floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/15 rounded-full" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-amber-400/20 rounded-full" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-green-500/25 rounded-full"></div>
        
        {/* Static decorative elements */}
        <div className="absolute top-16 left-20 w-14 h-14 bg-blue-400/20 rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-amber-400/25 rotate-12"></div>
        <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-green-400/20 rotate-45"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-3 text-blue-600 font-medium text-base">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Professional Facility Management</span>
            </div>

            {/* Main Headline with Glossy Effects */}
            <div className="space-y-4 pt-20 lg:pt-0 mt-20 lg:mt-0">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2">Excellence in</span>
                <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3" 
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #1f2937 0%, #374151 25%, #6b7280 50%, #374151 75%, #1f2937 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}>
                  Facility Management
                </span>
                <span className="block text-4xl lg:text-5xl leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent font-extrabold mr-4"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 25%, #60a5fa 50%, #3b82f6 75%, #2563eb 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 2px 4px rgba(37,99,235,0.3))'
                        }}>
                    2500+
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent font-extrabold"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #f97316 0%, #fb923c 25%, #fdba74 50%, #fb923c 75%, #f97316 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 2px 4px rgba(249,115,22,0.3))'
                        }}>
                    Professionals
                  </span>
                </span>
                <span className="block text-4xl lg:text-5xl text-gray-700 mt-2 mb-4 font-bold">Nationwide</span>
              </h1>
              
              <br />
              <br />
              
              <p className="text-lg text-gray-600 leading-loose max-w-2xl font-medium mb-8">
              With over three decades of proven excellence, we are an ISO 9001:2015 certified, PSARA-licensed, and FSSAI-approved company, delivering comprehensive end-to-end facility management services across India.
              </p>
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            
            {/* Large Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large check mark background */}
              <div className="w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center rotate-12 shadow-2xl"
                     style={{
                       boxShadow: '0 20px 40px rgba(34,197,94,0.3)'
                     }}>
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Orange/Red accent shape */}
              <div className="absolute top-16 right-12 w-28 h-36 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl transform rotate-12 shadow-2xl"
                   style={{
                     boxShadow: '0 15px 35px rgba(249,115,22,0.4)'
                   }}></div>
              
              {/* Yellow accent shape */}
              <div className="absolute bottom-20 right-16 w-24 h-28 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl transform -rotate-6 shadow-xl"
                   style={{
                     boxShadow: '0 12px 30px rgba(245,158,11,0.4)'
                   }}></div>
              
              {/* Blue accent elements */}
              <div className="absolute top-24 left-12 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-xl"
                   style={{
                     boxShadow: '0 10px 25px rgba(59,130,246,0.4)'
                   }}></div>
            </div>
            
            {/* Professional Person Container */}
            <div className="relative z-10">
              {/* Main person image area */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[2rem] flex items-end justify-center overflow-hidden shadow-2xl border border-white/50"
                   style={{
                     boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                   }}>
                {/* Professional person placeholder */}
                <div className="w-full h-5/6 bg-gradient-to-t from-blue-200/30 to-transparent rounded-t-[2rem] flex items-center justify-center">
                  <div className="text-9xl">👨‍💼</div>
                </div>
              </div>

              {/* Google-style floating card */}
              <div className="absolute top-20 right-12 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
                   style={{
                     boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                   }}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
              </div>

              {/* Floating Profile Card */}
              <div className="absolute bottom-16 -left-16 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 w-72"
                   style={{
                     boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
                   }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">VA</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Viskan Elite Services</div>
                    <div className="text-gray-600">Facility Management Expert</div>
                    <div className="flex text-yellow-400 text-lg mt-1">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-12 -left-12 bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
                   style={{
                     boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                   }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">ISO 9001</span>
                </div>
                <div className="text-sm text-gray-500">Certified Quality</div>
              </div>

              <div className="absolute top-1/3 -right-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                   style={{
                     boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                   }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>

              <div className="absolute bottom-8 right-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                   style={{
                     boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                   }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <span className="font-semibold text-gray-700">PSARA</span>
                </div>
              </div>
            </div>

            {/* Only keep minimal floating elements */}
            <div className="absolute top-12 right-20 w-16 h-16 bg-blue-500/20 rounded-full"></div>
            <div className="absolute bottom-12 left-16 w-14 h-14 bg-amber-400/25 rounded-full"></div>
            <div className="absolute top-40 left-8 w-12 h-12 bg-green-500/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-amber-500 opacity-20"></div>
    </section>
  );
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
        {/* New Modern Hero Section */}
        <section aria-label="Hero - Viskan Associates Introduction">
          <ModernHeroSection />
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
        <section aria-label="Why Choose Viskan Associates">
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
        <h1>Viskan Associates: Facility Management Company Profile</h1>
        <p>
          <strong>Company:</strong> Viskan Associates<br/>
          <strong>Industry:</strong> Facility Management and Security Services<br/>
          <strong>Founded:</strong> 1995<br/>
          <strong>Location:</strong> Bangalore, Karnataka, India<br/>
          <strong>Service Area:</strong> Karnataka State, India<br/>
          <strong>Certifications:</strong> ISO 9001:2015, PSARA Licensed<br/>
          <strong>Phone:</strong> +91-80-23197874<br/>
                      <strong>Email:</strong> info@viskaneliteservices.com<br/>
          <strong>Core Services:</strong> Security Services, Housekeeping, Manpower Supply, Driver Services, Horticulture, Canteen Management<br/>
          <strong>Client Types:</strong> Government Institutions, Multinational Corporations, Educational Organizations, Healthcare Facilities<br/>
          <strong>Key Clients:</strong> ISRO, BEL, HAL, IIMB, Toshiba, Bosch<br/>
          <strong>Workforce:</strong> 3600+ trained professionals<br/>
          <strong>Value Proposition:</strong> End-to-end facility management solutions with 30+ years of experience, ISO certified quality, PSARA licensed security, and comprehensive compliance
        </p>
      </div>
    </>
  );
}

