"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Home, Users, Car, Leaf, Coffee, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: "Facility Management",
      description: "Comprehensive housekeeping, pest control, and maintenance services for your premises.",
      link: "/services/facility-management",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield size={48} />,
      title: "Security Services",
      description: "PSARA-certified guards, supervisors, and gunmen for complete security solutions.",
      link: "/services/security",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Car size={48} />,
      title: "Drivers",
      description: "Verified professional drivers for corporates with flexible deployment options.",
      link: "/services/drivers",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Users size={48} />,
      title: "Manpower Supply",
      description: "Skilled, semi-skilled, and unskilled workforce for various industry needs.",
      link: "/services/manpower",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Leaf size={48} />,
      title: "Horticulture",
      description: "Landscaping, garden maintenance, and vertical gardening solutions.",
      link: "/services/horticulture",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Coffee size={48} />,
      title: "Canteen Services",
      description: "End-to-end canteen setup and management with FSSAI-certified operations.",
      link: "/services/canteen",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across multiple facility management domains with 
            trained professionals and modern equipment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.link}>
                <div className="group h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Icon Section */}
                  <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#003366] font-semibold group-hover:text-[#FFB300] transition-colors">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview; 