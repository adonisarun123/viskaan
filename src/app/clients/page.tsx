"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building, Users, Trophy, TrendingUp } from "lucide-react";

export default function ClientsPage() {
  const majorClients = [
    {
      name: "ISRO - Indian Space Research Organisation",
      category: "Aerospace & Defense",
      services: [
        "Facility Management",
        "Security Services",
        "Specialized Cleaning",
      ],
      duration: "25+ years",
      description:
        "Providing comprehensive facility management services to India's premier space agency.",
    },
    {
      name: "Bharat Electronics Limited (BEL)",
      category: "Defense Electronics",
      services: ["Facility Management", "Security", "Technical Manpower"],
      duration: "25+ years",
      description:
        "Supporting BEL's critical defense electronics manufacturing facilities.",
    },
    {
      name: "Hindustan Aeronautics Limited (HAL)",
      category: "Aerospace & Defense",
      services: ["Industrial Cleaning", "Security Services", "Manpower Supply"],
      duration: "5+ years",
      description:
        "Maintaining high standards at India's aerospace and defense manufacturer.",
    },
    {
      name: "IIM Bangalore",
      category: "Education",
      services: ["Campus Maintenance", "Horticulture", "Canteen Services"],
      duration: "8+ years",
      description:
        "Complete campus management for India's premier business school.",
    },
    {
      name: "Bengaluru Metro Rail Corporation",
      category: "Infrastructure",
      services: ["Station Maintenance", "Cleaning Services", "Security"],
      duration: "7+ years",
      description: "Ensuring clean and safe metro stations across Bengaluru.",
    },
    {
      name: "Toshiba",
      category: "Technology",
      services: ["Office Maintenance", "Technical Staff", "Pantry Services"],
      duration: "25+ years",
      description:
        "Comprehensive facility services for Toshiba's India operations.",
    },
  ];

  const testimonials = [
    {
      name: "Rakesh Kumar",
      position: "Facility Manager",
      company: "ISRO",
      rating: 5,
      quote:
        "Visskan Associates has been our trusted partner for over 15 years. Their commitment to quality and ability to handle sensitive environments is exceptional. They understand the criticality of our operations and have never compromised on service standards.",
    },
    {
      name: "Priya Sharma",
      position: "Administrative Head",
      company: "IIM Bangalore",
      rating: 5,
      quote:
        "The campus maintenance and canteen services provided by Visskan are top-notch. Their team is professional, responsive, and goes above and beyond to ensure our students and faculty have a comfortable environment.",
    },
    {
      name: "Ajay Menon",
      position: "Operations Director",
      company: "Bengaluru Metro",
      rating: 5,
      quote:
        "Managing the cleanliness and security of metro stations requires exceptional coordination and reliability. Visskan has proven their capability time and again, maintaining our stations to international standards.",
    },
    {
      name: "Sarah Chen",
      position: "Facility Coordinator",
      company: "Toshiba India",
      rating: 5,
      quote:
        "We appreciate Visskan's attention to detail and their proactive approach to facility management. Their ISO certification and professional workforce have made them an invaluable partner.",
    },
  ];

  const clientCategories = [
    { category: "Government & PSUs", count: 25, icon: <Building size={24} /> },
    { category: "Aerospace & Defense", count: 15, icon: <Trophy size={24} /> },
    { category: "Education & Research", count: 30, icon: <Users size={24} /> },
    {
      category: "Corporate & Technology",
      count: 40,
      icon: <TrendingUp size={24} />,
    },
  ];

  const allClients = [
    "ISRO",
    "BEL",
    "HAL",
    "NAL",
    "IIMB",
    "IIAP",
    "Metro Rail",
    "CEAT",
    "Bosch",
    "Toshiba",
    "CFTRI",
    "Skanray",
    "BHEL",
    "HCL",
    "HMT",
    "Government Offices",
    "Karnataka PSUs",
    "Research Institutes",
    "Hospitals",
    "Manufacturing Plants",
    "IT Parks",
    "Business Centers",
    "Universities",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">
              Our Esteemed Clients
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by India's leading organizations for over 25 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Statistics */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3 text-[#003366]">
                  {cat.icon}
                </div>
                <div className="text-3xl font-bold text-[#003366] mb-1">
                  {cat.count}+
                </div>
                <p className="text-gray-600">{cat.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Clients */}
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
              Major Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving prestigious organizations across various sectors with
              dedication and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-[#003366] text-white px-3 py-1 rounded-full">
                      {client.category}
                    </span>
                    <span className="bg-[#4CAF50] text-white px-3 py-1 rounded-full">
                      {client.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{client.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Services Provided:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 relative"
              >
                <Quote
                  className="absolute top-4 right-4 text-gray-200"
                  size={48}
                />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#FFB300] fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-[#003366] font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Certificates */}
      {/* <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Experience Certificates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A testament to our service quality and long-standing client trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                org: "ISRO",
                img: "/certificates/isro.jpg",
                link: "/certificates/isro.pdf",
              },
              {
                org: "IIM Bangalore",
                img: "/certificates/iim.jpg",
                link: "/certificates/iim.pdf",
              },
              {
                org: "Bengaluru Metro",
                img: "/certificates/metro.jpg",
                link: "/certificates/metro.pdf",
              },
              {
                org: "Toshiba India",
                img: "/certificates/toshiba.jpg",
                link: "/certificates/toshiba.pdf",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-md group"
              >
                <img
                  src={cert.img}
                  alt={`${cert.org} Certificate`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#003366] font-semibold px-4 py-2 rounded shadow hover:bg-gray-200 transition"
                  >
                    View
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* All Clients Grid */}
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
              Our Client Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive list of organizations that trust us with their
              facility management needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg hover:bg-[#003366] hover:text-white transition-all duration-300"
              >
                <p className="font-medium">{client}</p>
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
              Join Our Growing Client Base
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience the Visskan difference - where quality meets
              reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
              >
                Become a Client
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
