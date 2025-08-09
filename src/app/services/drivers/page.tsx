"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Car, ArrowRight, CheckCircle, Shield, Clock, Users } from "lucide-react";

export default function DriversPage() {
  const services = [
    {
      icon: <Car size={32} />,
      title: "Corporate Drivers",
      description: "Professional drivers for executive transportation and corporate fleet management.",
    },
    {
      icon: <Users size={32} />,
      title: "Personal Drivers",
      description: "Reliable personal drivers for families and individuals with flexible schedules.",
    },
    {
      icon: <Clock size={32} />,
      title: "On-Demand Services",
      description: "Flexible driver services available on-demand for special events and occasions.",
    },
  ];

  const keyFeatures = [
    "Background verified and police cleared drivers",
    "Valid commercial driving licenses",
    "Extensive local area knowledge",
    "Professional appearance and conduct",
    "Multilingual communication skills",
    "Emergency response training",
    "Vehicle maintenance awareness",
    "Customer service excellence",
    "Punctuality and reliability",
    "Confidentiality and discretion"
  ];

  const vehicleTypes = [
    "Sedans & Hatchbacks",
    "SUVs & Premium Cars",
    "Commercial Vehicles",
    "Luxury Vehicles",
    "Mini Buses",
    "Tempo Travelers"
  ];

  const process = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Understanding your specific driver requirements and vehicle types"
    },
    {
      step: "2",
      title: "Driver Selection",
      description: "Matching qualified drivers based on your needs and preferences"
    },
    {
      step: "3",
      title: "Documentation",
      description: "Complete verification of licenses, background checks, and documentation"
    },
    {
      step: "4",
      title: "Deployment",
      description: "Professional driver deployment with ongoing support and monitoring"
    }
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
              Professional Driver Services
            </h1>
            <p className="text-xl text-gray-600">
              Reliable, verified, and professional drivers for all your transportation needs
              with complete background verification and commercial licensing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Trusted Driver Solutions for Every Need
              </h2>
              <p className="text-gray-600 mb-6">
                Viskan Elite Services provides professional driver services with a focus on safety,
                reliability, and customer satisfaction. Our drivers undergo rigorous background
                verification, possess valid commercial licenses, and are trained in professional
                conduct and customer service.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need corporate drivers for executive transportation, personal drivers
                for family use, or specialized drivers for events, we have the right professionals
                to meet your requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">100+ Verified Drivers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">24/7 Support</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-gray-200 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Car size={100} className="text-gray-400" />
              </div>
            </motion.div>
          </div>
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
              Our Driver Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional driver solutions tailored to different transportation needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Vehicle Types */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Our Drivers
              </h2>
              <div className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-[#4CAF50] mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Vehicle Categories We Support
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {vehicleTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                  >
                    <p className="font-medium">{type}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to providing reliable driver services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Need Professional Drivers?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your driver requirements and get a customized solution
              for your transportation needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
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