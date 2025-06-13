"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Eye, Radio, UserCheck, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SecurityServicesPage() {
  const services = [
    {
      icon: <UserCheck size={24} />,
      title: "Manned Guarding",
      description: "Trained security personnel for round-the-clock protection of your premises.",
    },
    {
      icon: <Eye size={24} />,
      title: "CCTV Surveillance",
      description: "24/7 monitoring with advanced CCTV systems and remote surveillance capabilities.",
    },
    {
      icon: <Radio size={24} />,
      title: "Access Control",
      description: "Biometric and card-based access control systems for restricted areas.",
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Emergency Response",
      description: "Quick response teams for emergency situations and crisis management.",
    },
  ];

  const keyFeatures = [
    "PSARA Licensed Security Agency",
    "Ex-Servicemen & Trained Personnel",
    "24/7 Control Room Operations",
    "Regular Security Audits",
    "Background Verified Staff",
    "Customized Security Solutions",
    "Fire Safety & Evacuation Training",
    "Incident Management System",
  ];

  const securityTypes = [
    "Corporate Security",
    "Industrial Security",
    "Residential Security",
    "Event Security",
    "VIP Protection",
    "Cash-in-Transit",
    "Retail Security",
    "Hospital Security",
  ];

  const training = [
    {
      title: "Basic Security Training",
      modules: ["Security fundamentals", "Access control", "Emergency response", "Report writing"],
    },
    {
      title: "Advanced Training",
      modules: ["Crisis management", "Fire safety", "First aid", "Crowd control"],
    },
    {
      title: "Specialized Training",
      modules: ["VIP protection", "Cyber security awareness", "Anti-terrorism", "Disaster management"],
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
              Security Services
            </h1>
            <p className="text-xl text-gray-600">
              PSARA licensed security services providing comprehensive protection for 
              your people, property, and assets with trained professionals.
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
                Professional Security Solutions You Can Trust
              </h2>
              <p className="text-gray-600 mb-6">
                As a PSARA licensed security agency, Visskan Associates provides comprehensive 
                security solutions backed by trained professionals, many of whom are ex-servicemen. 
                Our security services combine human expertise with advanced technology to create 
                multi-layered protection for your facilities.
              </p>
              <p className="text-gray-600 mb-6">
                With extensive experience in securing critical infrastructure including ISRO, 
                BEL, and HAL facilities, we understand the importance of maintaining the highest 
                security standards while ensuring smooth operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">PSARA Licensed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">2000+ Security Personnel</span>
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
                <Shield size={100} className="text-gray-400" />
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
              Our Security Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your specific requirements
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
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Security Types */}
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
                Why Choose Our Security Services
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
                Security Solutions For
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {securityTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-red-600 hover:text-white transition-colors duration-300"
                  >
                    <p className="font-medium">{type}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
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
              Comprehensive Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our security personnel undergo rigorous training to ensure professional service delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {training.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                <ul className="space-y-2">
                  {program.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-red-600 mr-2">•</span>
                      {module}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Standards */}
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
              Our Security Standards
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-600">Background Verified</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-600">Control Room</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">&lt;5min</div>
              <p className="text-gray-600">Response Time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Secure Your Premises with Professional Security Services
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment and customized solution for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Request Security Audit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 