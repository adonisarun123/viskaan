"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Coffee, ArrowRight, ChefHat, Utensils, Shield } from "lucide-react";

export default function CanteenPage() {
  const services = [
    {
      icon: <ChefHat size={32} />,
      title: "Complete Kitchen Setup",
      description: "End-to-end kitchen design, equipment installation, and operational setup.",
    },
    {
      icon: <Utensils size={32} />,
      title: "Food Service Management",
      description: "Professional food preparation, serving, and dining area management.",
    },
    {
      icon: <Shield size={32} />,
      title: "FSSAI Compliance",
      description: "Complete food safety compliance with FSSAI certification and standards.",
    },
    {
      icon: <Coffee size={32} />,
      title: "Staff Management",
      description: "Trained chefs, cooks, and service staff for efficient canteen operations.",
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
            className="max-w-4xl"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-gray-600 hover:text-[#003366] mb-6 transition-colors"
            >
              <ArrowRight size={16} className="mr-2 rotate-180" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Canteen Services
            </h1>
            <p className="text-xl text-gray-600">
              Complete canteen setup and management services with FSSAI-certified operations, 
              professional chefs, and hygienic food preparation standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Canteen Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive canteen solutions from setup to daily operations management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Setup Your Canteen?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your canteen requirements and get a customized 
              food service solution for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Get Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 