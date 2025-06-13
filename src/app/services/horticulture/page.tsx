"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, ArrowRight, CheckCircle, TreePine, Flower, Sprout, Droplets, Sun } from "lucide-react";

export default function HorticulturePage() {
  const services = [
    {
      icon: <TreePine size={32} />,
      title: "Landscape Design",
      description: "Professional landscape design and planning for commercial and residential spaces.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Garden Maintenance",
      description: "Regular maintenance services including pruning, weeding, and plant care.",
    },
    {
      icon: <Flower size={32} />,
      title: "Vertical Gardening",
      description: "Modern vertical garden solutions for space-efficient green installations.",
    },
    {
      icon: <Sprout size={32} />,
      title: "Plant Supply",
      description: "Quality plants, saplings, and gardening materials from trusted nurseries.",
    },
  ];

  const keyFeatures = [
    "Expert landscape architects and horticulturists",
    "Sustainable and eco-friendly practices",
    "Seasonal plant selection and care",
    "Automated irrigation system installation",
    "Organic fertilizers and pest control",
    "Regular maintenance schedules",
    "Plant health monitoring",
    "Soil testing and improvement",
    "Seasonal flower arrangements",
    "Green certification support"
  ];

  const gardenTypes = [
    "Corporate Campuses",
    "Educational Institutions",
    "Healthcare Facilities",
    "Residential Complexes",
    "Hotels & Resorts",
    "Industrial Parks",
    "Government Buildings",
    "Shopping Centers",
    "Rooftop Gardens",
    "Terrace Gardens",
    "Indoor Plants",
    "Medicinal Gardens"
  ];

  const specialties = [
    {
      title: "Landscape Architecture",
      description: "Complete landscape design from concept to implementation",
      icon: <TreePine size={24} />,
      color: "bg-green-600"
    },
    {
      title: "Irrigation Systems",
      description: "Modern drip and sprinkler irrigation solutions",
      icon: <Droplets size={24} />,
      color: "bg-blue-600"
    },
    {
      title: "Plant Care",
      description: "Expert plant selection, care, and maintenance services",
      icon: <Leaf size={24} />,
      color: "bg-emerald-600"
    },
    {
      title: "Seasonal Services",
      description: "Year-round garden care adapted to seasonal requirements",
      icon: <Sun size={24} />,
      color: "bg-yellow-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Site Assessment",
      description: "Detailed analysis of soil, climate, and space requirements"
    },
    {
      step: "2",
      title: "Design Planning",
      description: "Custom landscape design based on your preferences and budget"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Professional installation with quality plants and materials"
    },
    {
      step: "4",
      title: "Maintenance",
      description: "Ongoing care and maintenance to ensure healthy growth"
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
              Horticulture Services
            </h1>
            <p className="text-xl text-gray-600">
              Professional landscaping, garden maintenance, and horticulture solutions 
              creating beautiful, sustainable green spaces for your environment.
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
                Creating Green Spaces That Inspire
              </h2>
              <p className="text-gray-600 mb-6">
                Viskan Elite Services brings nature closer to your workspace and living areas 
                through expert horticulture services. Our team of qualified landscape architects 
                and horticulturists create sustainable, beautiful green spaces that enhance 
                your environment while promoting well-being.
              </p>
              <p className="text-gray-600 mb-6">
                From corporate campuses to residential complexes, we provide comprehensive 
                landscaping solutions including design, installation, and ongoing maintenance 
                to ensure your green spaces thrive year-round.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">500+ Gardens Maintained</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">Eco-Friendly Practices</span>
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
                <Leaf size={100} className="text-gray-400" />
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
              Our Horticulture Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive landscaping and garden maintenance solutions for all types of spaces
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
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
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
              Our Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services that set us apart in the horticulture industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${specialty.color} text-white p-6 flex items-center`}>
                  <div className="mr-4">{specialty.icon}</div>
                  <h3 className="text-2xl font-bold">{specialty.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Garden Types */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Our Horticulture Services
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
                Types of Gardens We Create
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {gardenTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 text-center hover:bg-green-600 hover:text-white transition-colors duration-300"
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
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to creating and maintaining beautiful green spaces
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
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
              Ready to Create Your Green Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your landscaping needs and transform your space 
              into a beautiful, sustainable green environment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
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