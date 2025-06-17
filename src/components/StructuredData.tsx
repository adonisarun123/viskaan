import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'faq' | 'breadcrumb';
  data?: Record<string, unknown>;
}

const StructuredData = ({ type = 'organization', data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Visskan Associates",
      "alternateName": "Visskan Facility Management",
      "description": "End-to-End Facility Management Services trusted by Government, Corporates & Institutions across India since 1995",
      "url": "https://visskan.com",
      "logo": "https://visskan.com/logo.png",
      "foundingDate": "1995",
      "founders": [
        {
          "@type": "Person",
          "name": "Visskan Associates Founder"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-80-23197874",
        "contactType": "customer service",
        "email": "info@viskaneliteservices.com",
        "availableLanguage": ["English", "Hindi", "Kannada"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka", 
        "postalCode": "560001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/visskan-associates",
        "https://www.facebook.com/visskanassociates"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "ISO 9001:2015 Certification",
          "credentialCategory": "Quality Management"
        },
        {
          "@type": "EducationalOccupationalCredential", 
          "name": "PSARA License",
          "credentialCategory": "Security Services"
        }
      ]
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": baseOrganization.name,
      "alternateName": baseOrganization.alternateName,
      "description": baseOrganization.description,
      "url": baseOrganization.url,
      "logo": baseOrganization.logo,
      "foundingDate": baseOrganization.foundingDate,
      "founders": baseOrganization.founders,
      "contactPoint": baseOrganization.contactPoint,
      "address": baseOrganization.address,
      "sameAs": baseOrganization.sameAs,
      "hasCredential": baseOrganization.hasCredential,
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Bank Transfer, UPI",
      "openingHours": "Mo-Sa 09:00-18:00",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Karnataka",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@type": "City",
          "name": "Bangalore"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "12.9716",
          "longitude": "77.5946"
        },
        "geoRadius": "50000"
      }
    };

    const services = {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": baseOrganization,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Facility Management Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facility Management",
              "description": "Comprehensive housekeeping, pest control, and maintenance services",
              "category": "Facility Management"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Security Services",
              "description": "PSARA-certified security guards, supervisors, and gunmen",
              "category": "Security"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Manpower Supply",
              "description": "Skilled, semi-skilled, and unskilled workforce solutions",
              "category": "Human Resources"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Driver Services",
              "description": "Professional verified drivers for corporate needs",
              "category": "Transportation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Horticulture Services", 
              "description": "Landscaping, garden maintenance, and vertical gardening",
              "category": "Landscaping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Canteen Services",
              "description": "FSSAI-certified canteen setup and management",
              "category": "Food Service"
            }
          }
        ]
      }
    };

    switch (type) {
      case 'localBusiness':
        return localBusiness;
      case 'service':
        return services;
      case 'faq':
      case 'breadcrumb':
        return data;
      default:
        return baseOrganization;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
};

export default StructuredData; 