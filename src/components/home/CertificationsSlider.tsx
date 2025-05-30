"use client";

import { motion } from "framer-motion";
import { Award, Shield, Utensils, FileCheck, Building } from "lucide-react";

const CertificationsSlider = () => {
  const certifications = [
    {
      icon: <Award size={48} />,
      title: "ISO 9001:2015",
      description: "Quality Management System Certified",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield size={48} />,
      title: "PSARA Licensed",
      description: "Private Security Agencies Regulation Act",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Utensils size={48} />,
      title: "FSSAI Certified",
      description: "Food Safety and Standards Authority",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FileCheck size={48} />,
      title: "PF/ESI Compliant",
      description: "100% Statutory Compliance",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Building size={48} />,
      title: "GST Registered",
      description: "Government Registered Entity",
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
            Certifications & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our certifications reflect our commitment to quality, safety, and regulatory compliance 
            across all service verticals.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${cert.color} text-white mb-4`}>
                {cert.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-[#003366] text-white py-8 px-6 rounded-2xl"
        >
          <p className="text-lg font-medium">
            All our operations are regularly audited to ensure highest standards of 
            quality and compliance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSlider; 