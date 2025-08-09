// Environment configuration with validation
const requiredEnvVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
} as const;

const optionalEnvVars = {
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL,
  SENDGRID_TO_EMAIL: process.env.SENDGRID_TO_EMAIL,
} as const;

// Validate required environment variables
function validateEnvVars() {
  const missingVars: string[] = [];
  
  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value) {
      missingVars.push(key);
    }
  });

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

// Validate environment variables in development
if (process.env.NODE_ENV === 'development') {
  validateEnvVars();
}

export const config = {
  // Site configuration
  site: {
    url: requiredEnvVars.NEXT_PUBLIC_SITE_URL || 'https://viskaneliteservices.com',
    name: 'Visskan Elite Services',
    description: 'Professional facility management company since 1995',
    phone: '+91 94 82145072',
    email: requiredEnvVars.NEXT_PUBLIC_CONTACT_EMAIL || 'info@viskaneliteservices.com',
    address: {
      street: '#2, 3rd Floor, 1st Main, Muneshwara Block, Mahalakshmi Layout',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560086',
      country: 'India',
    },
    businessHours: {
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
    },
  },

  // Contact configuration
  contact: {
    whatsapp: requiredEnvVars.NEXT_PUBLIC_WHATSAPP_NUMBER || '919482145072',
    email: requiredEnvVars.NEXT_PUBLIC_CONTACT_EMAIL || 'info@viskaneliteservices.com',
    phone: '+91 94 82145072',
  },

  // Services configuration
  services: [
    {
      id: 'facility-management',
      name: 'Facility Management',
      description: 'Comprehensive housekeeping, pest control, and maintenance services',
      icon: 'Home',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'security',
      name: 'Security Services',
      description: 'PSARA-certified guards, supervisors, and gunmen',
      icon: 'Shield',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 'drivers',
      name: 'Drivers',
      description: 'Verified professional drivers for corporates',
      icon: 'Car',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'manpower',
      name: 'Manpower Supply',
      description: 'Skilled, semi-skilled, and unskilled workforce',
      icon: 'Users',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'horticulture',
      name: 'Horticulture',
      description: 'Landscaping, garden maintenance, and vertical gardening',
      icon: 'Leaf',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'canteen',
      name: 'Canteen Services',
      description: 'FSSAI-certified canteen setup and management',
      icon: 'Coffee',
      color: 'from-orange-500 to-orange-600',
    },
  ],

  // Company information
  company: {
    name: 'Visskan Elite Services',
    founded: 1995,
    employees: 3600,
    clients: 500,
    certifications: ['ISO 9001:2015', 'PSARA License'],
    areas: ['Karnataka', 'India'],
  },

  // Social media
  social: {
    linkedin: 'https://www.linkedin.com/company/visskan-associates',
    facebook: 'https://www.facebook.com/visskanassociates',
  },

  // External services
  external: {
    googleMapsApiKey: optionalEnvVars.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleAnalyticsId: optionalEnvVars.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },

  // Email configuration
  email: {
    sendgridApiKey: optionalEnvVars.SENDGRID_API_KEY,
    fromEmail: optionalEnvVars.SENDGRID_FROM_EMAIL || 'noreply@viskaneliteservices.com',
    toEmail: optionalEnvVars.SENDGRID_TO_EMAIL || 'info@viskaneliteservices.com',
  },

  // SEO configuration
  seo: {
    defaultTitle: 'Visskan Elite Services - Professional Facility Management Company India',
    defaultDescription: 'Visskan Elite Services: India\'s premier facility management company since 1995. ISO 9001:2015 certified with 3600+ professionals.',
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
  },

  // Performance configuration
  performance: {
    maxImageSize: 1024 * 1024, // 1MB
    maxFileSize: 5 * 1024 * 1024, // 5MB
    cacheMaxAge: 60 * 60 * 24 * 7, // 7 days
  },

  // Security configuration
  security: {
    rateLimitWindow: 15 * 60 * 1000, // 15 minutes
    rateLimitMax: 5, // 5 requests per window
    csrfTokenExpiry: 60 * 60, // 1 hour
  },
} as const;

// Type exports
export type Config = typeof config;
export type ServiceConfig = typeof config.services[0];

// Utility functions
export function getServiceById(id: string) {
  return config.services.find(service => service.id === id);
}

export function getServiceUrl(id: string) {
  return `${config.site.url}/services/${id}`;
}

export function getFullAddress() {
  const { address } = config.site;
  return `${address.street}, ${address.city} - ${address.pincode}, ${address.state}, ${address.country}`;
}

export function getBusinessHours() {
  const { businessHours } = config.site;
  return {
    weekdays: businessHours.weekdays,
    saturday: businessHours.saturday,
    sunday: businessHours.sunday,
  };
} 