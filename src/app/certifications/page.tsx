"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, FileCheck, Users, Briefcase } from "lucide-react";
import Image from "next/image";

export default function CertificationsPage() {
  const certifications = [
    {
      icon: <Award size={64} />,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "Certified for maintaining international quality standards in all our facility management services.",
      benefits: [
        "Consistent service quality",
        "Continuous improvement processes",
        "Customer satisfaction focus",
        "Risk management approach"
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield size={64} />,
      title: "PSARA Licensed",
      subtitle: "Private Security Agencies Regulation Act",
      description: "Fully licensed under PSARA to provide security services across multiple states.",
      benefits: [
        "Government approved security agency",
        "Trained and verified security personnel",
        "Legal compliance assured",
        "Regular audits and inspections"
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FileCheck size={64} />,
      title: "FSSAI Certified",
      subtitle: "Food Safety and Standards Authority of India",
      description: "Certified to operate canteen and food services with highest safety standards.",
      benefits: [
        "Hygienic food preparation",
        "Quality ingredients sourcing",
        "Trained food handlers",
        "Regular health checks"
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Briefcase size={64} />,
      title: "GST Compliant",
      subtitle: "Goods and Services Tax",
      description: "Fully GST compliant ensuring transparent and legal financial transactions.",
      benefits: [
        "Transparent billing",
        "Input tax credit benefits",
        "Legal compliance",
        "Digital transaction records"
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Users size={64} />,
      title: "PF & ESI Registered",
      subtitle: "Provident Fund & Employee State Insurance",
      description: "Registered with PF and ESI to ensure employee welfare and social security.",
      benefits: [
        "Employee retirement benefits",
        "Medical insurance coverage",
        "Legal employment practices",
        "Worker welfare assured"
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <CheckCircle size={64} />,
      title: "Labour License",
      subtitle: "Contract Labour Regulation",
      description: "Licensed under Contract Labour Act ensuring fair employment practices.",
      benefits: [
        "Legal employment contracts",
        "Fair wage practices",
        "Worker rights protection",
        "Regulatory compliance"
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  const complianceStandards = [
    "Environmental Health & Safety Standards",
    "Data Protection and Privacy Policies",
    "Anti-Corruption and Ethics Policy",
    "Workplace Safety Regulations",
    "Minimum Wages Act Compliance",
    "Sexual Harassment Prevention Policy",
    "Equal Opportunity Employment",
    "Child Labour Prevention"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] to-[#00284d]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Compliance</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your assurance of quality, safety, and legal compliance in every service we deliver
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Certifications */}
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
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of certification and compliance to ensure 
              reliable, legal, and quality services for all our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-8 bg-gradient-to-r ${cert.color} text-white text-center`}>
                  <div className="flex justify-center mb-4">{cert.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm opacity-90">{cert.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle size={16} className="text-[#4CAF50] mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
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
              Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond certifications, we adhere to comprehensive compliance standards 
              ensuring ethical and responsible business practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-[#003366] hover:text-white transition-colors duration-300"
              >
                <p className="font-medium">{standard}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Our Certifications Matter
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-[#4CAF50] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600">International standards ensure consistent, high-quality service delivery across all operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#4CAF50] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Legal Protection</h3>
                    <p className="text-gray-600">Complete compliance protects both our clients and employees from legal complications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#4CAF50] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Employee Welfare</h3>
                    <p className="text-gray-600">PF, ESI, and fair labor practices ensure our workforce is well-protected and motivated.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#4CAF50] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Risk Mitigation</h3>
                    <p className="text-gray-600">Proper certifications and compliance reduce operational and reputational risks.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Certification Benefits for Clients
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Shield size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Verified and trusted service provider</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <FileCheck size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Compliance with all regulations</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <Award size={20} className="text-purple-600 mr-3" />
                  <span className="text-gray-700">Quality guaranteed services</span>
                </div>
                <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <Users size={20} className="text-orange-600 mr-3" />
                  <span className="text-gray-700">Ethically managed workforce</span>
                </div>
              </div>
            </motion.div>
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
              Partner with a Certified Leader
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience the confidence that comes with choosing a fully certified 
              and compliant facility management partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
              >
                Request Certification Details
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-all duration-200"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 