"use client";

import Link from "next/link";
import { Shield, Home, Users, Car, Leaf, Coffee, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: "Facility Management",
      description: "Comprehensive housekeeping, pest control, and maintenance services for your premises.",
      link: "/services/facility-management",
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Security Services", 
      description: "PSARA-certified guards, supervisors, and gunmen for complete security solutions.",
      link: "/services/security",
      color: "bg-red-500",
    },
    {
      icon: Car,
      title: "Drivers",
      description: "Verified professional drivers for corporates with flexible deployment options.",
      link: "/services/drivers",
      color: "bg-yellow-500",
    },
    {
      icon: Users,
      title: "Manpower Supply",
      description: "Skilled, semi-skilled, and unskilled workforce for various industry needs.",
      link: "/services/manpower",
      color: "bg-purple-500",
    },
    {
      icon: Leaf,
      title: "Horticulture",
      description: "Landscaping, garden maintenance, and vertical gardening solutions.",
      link: "/services/horticulture",
      color: "bg-green-500",
    },
    {
      icon: Coffee,
      title: "Canteen Services",
      description: "End-to-end canteen setup and management with FSSAI-certified operations.",
      link: "/services/canteen",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across multiple facility management domains with 
            trained professionals and modern equipment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link key={index} href={service.link} className="group">
                <article className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Header with Icon */}
                  <header className={`p-6 ${service.color} text-white`}>
                    <IconComponent size={48} className="mb-4" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </header>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="flex items-center text-[#003366] font-semibold group-hover:text-[#FFB300] transition-colors">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 