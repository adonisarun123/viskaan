"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Home, Users, Car, Leaf, Coffee, ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Home size={48} />,
      title: "Facility Management",
      description: "Comprehensive housekeeping, pest control, and maintenance services for your premises.",
      features: [
        "Indoor & Outdoor Housekeeping",
        "Commercial & Institutional Cleaning",
        "Structural Glazing",
        "Pest & Rodent Control",
        "Modern Equipment & Techniques",
      ],
      link: "/services/facility-management",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield size={48} />,
      title: "Security Services",
      description: "PSARA-certified guards, supervisors, and gunmen for complete security solutions.",
      features: [
        "PSARA Licensed Guards",
        "Trained Supervisors",
        "Armed Security Personnel",
        "24/7 Security Coverage",
        "Comprehensive Insurance",
      ],
      link: "/services/security",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Car size={48} />,
      title: "Drivers",
      description: "Verified professional drivers for corporates with flexible deployment options.",
      features: [
        "Background Verified Drivers",
        "Commercial License Holders",
        "Flexible Deployment",
        "Corporate Fleet Management",
        "On-demand Services",
      ],
      link: "/services/drivers",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Users size={48} />,
      title: "Manpower Supply",
      description: "Skilled, semi-skilled, and unskilled workforce for various industry needs.",
      features: [
        "Skilled Technicians",
        "Semi-skilled Workers",
        "Administrative Staff",
        "Retired Officials",
        "Industry-specific Personnel",
      ],
      link: "/services/manpower",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Leaf size={48} />,
      title: "Horticulture",
      description: "Landscaping, garden maintenance, and vertical gardening solutions.",
      features: [
        "Landscape Design",
        "Garden Maintenance",
        "Vertical Gardening",
        "Plant & Soil Supply",
        "Pesticide Management",
      ],
      link: "/services/horticulture",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Coffee size={48} />,
      title: "Canteen Services",
      description: "End-to-end canteen setup and management with FSSAI-certified operations.",
      features: [
        "FSSAI Certified Operations",
        "Professional Chefs & Cooks",
        "Complete Kitchen Setup",
        "Menu Planning",
        "Hygiene Standards",
      ],
      link: "/services/canteen",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive facility management solutions tailored to your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:text-[#FFB300] transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality, professionalism, and customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Experienced Team",
                description: "3600+ trained professionals with industry expertise",
              },
              {
                title: "Quality Assurance",
                description: "ISO 9001 certified processes ensuring consistent quality",
              },
              {
                title: "Cost Effective",
                description: "Competitive pricing without compromising on service quality",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support for all services",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Facility Management?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let us create a customized solution that meets your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
              >
                Get Custom Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+918023197874"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003366] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Call: +91 80 23197874
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 