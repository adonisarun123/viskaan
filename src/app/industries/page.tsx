"use client";

import { motion } from "framer-motion";
import { Building2, Plane, GraduationCap, Cpu, Factory, Train, Heart, Briefcase } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Plane size={48} />,
      title: "Aerospace & Defense",
      description: "Providing specialized facility management services to India's premier aerospace organizations.",
      clients: ["ISRO", "HAL", "NAL"],
      services: ["High-security facility management", "Clean room maintenance", "Specialized technical staff"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Cpu size={48} />,
      title: "Electronics & Technology",
      description: "Supporting technology leaders with comprehensive facility solutions.",
      clients: ["BEL", "Toshiba", "Tech Parks"],
      services: ["ESD-safe cleaning", "Technical manpower", "24/7 security services"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <GraduationCap size={48} />,
      title: "Education & Research",
      description: "Maintaining prestigious educational institutions and research facilities.",
      clients: ["IIMB", "IIAP", "Research Centers"],
      services: ["Campus maintenance", "Garden management", "Canteen services"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Train size={48} />,
      title: "Infrastructure & Transportation",
      description: "Ensuring smooth operations at critical infrastructure facilities.",
      clients: ["Metro Rail Corporation", "Airports", "Railway Stations"],
      services: ["Large-scale housekeeping", "Crowd management", "Technical maintenance"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Factory size={48} />,
      title: "Manufacturing",
      description: "Supporting manufacturing excellence with reliable facility services.",
      clients: ["CEAT", "Bosch", "Manufacturing Plants"],
      services: ["Industrial cleaning", "Skilled workforce", "Safety compliance"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Building2 size={48} />,
      title: "Corporate & IT",
      description: "Delivering premium services to corporate offices and IT companies.",
      clients: ["IT Parks", "Corporate Offices", "Business Centers"],
      services: ["Office maintenance", "Pantry management", "Professional drivers"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Heart size={48} />,
      title: "Healthcare",
      description: "Maintaining hygiene and safety standards in healthcare facilities.",
      clients: ["Hospitals", "Clinics", "Medical Centers"],
      services: ["Medical-grade cleaning", "Waste management", "Specialized staff"],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Government & PSUs",
      description: "Trusted partner for government institutions and public sector units.",
      clients: ["Government Offices", "PSUs", "Statutory Bodies"],
      services: ["Comprehensive facility management", "Security services", "Administrative support"],
      color: "from-indigo-500 to-indigo-600",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Industries We Serve</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized facility management solutions across diverse sectors with industry-specific expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
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
              Sector-Specific Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With over 25 years of experience, we understand the unique requirements of each industry
              and deliver customized solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-6 bg-gradient-to-r ${industry.color} text-white`}>
                  <div className="mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold">{industry.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Clients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map((client, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#4CAF50] mr-2">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
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
              Industry Coverage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#003366] mb-2">8+</div>
              <p className="text-gray-600">Industry Sectors</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">500+</div>
              <p className="text-gray-600">Active Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#FFB300] mb-2">95%</div>
              <p className="text-gray-600">Client Retention</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#003366] mb-2">24/7</div>
              <p className="text-gray-600">Service Availability</p>
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
              Looking for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our experts understand your industry's unique challenges and can design 
              a custom facility management solution for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
            >
              Discuss Your Requirements
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 