"use client";

import { motion } from "framer-motion";
import {
  Building,
  CheckCircle,
  Users,
  Wrench,
  ShieldCheck,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function FacilityManagementPage() {
  const services = [
    {
      icon: <ClipboardList size={24} />,
      title: "Integrated Facility Management",
      description:
        "Complete management of all facility services under one umbrella for seamless operations.",
    },
    {
      icon: <Wrench size={24} />,
      title: "Technical Services",
      description:
        "Electrical, plumbing, HVAC maintenance, and specialized equipment management.",
    },
    {
      icon: <Users size={24} />,
      title: "Industrial Manpower Supply",
      description:
        "We provide all categories of manpower tailored to meet the specific needs of industries and logistics.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Compliance Management",
      description:
        "Ensuring adherence to all statutory requirements and safety standards.",
    },
  ];

  const keyFeatures = [
    "24/7 Emergency Response Team",
    "ISO 9001:2015 Certified Processes",
    "Technology-Enabled Service Delivery",
    "Customized Service Level Agreements",
    "Regular Performance Audits",
    "Sustainability Initiatives",
    "Cost Optimization Strategies",
    "Vendor Management Services",
  ];

  const industries = [
    "Corporate Offices",
    "Manufacturing Plants",
    "Educational Institutions",
    "Healthcare Facilities",
    "Government Buildings",
    "IT Parks & Tech Centers",
    "Retail & Commercial Spaces",
    "Residential Complexes",
  ];

  const process = [
    {
      step: 1,
      title: "Site Assessment",
      description:
        "Comprehensive evaluation of facility requirements and current state",
    },
    {
      step: 2,
      title: "Custom Solution Design",
      description: "Tailored service plans based on specific needs and budget",
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "Smooth transition and deployment of services with minimal disruption",
    },
    {
      step: 4,
      title: "Continuous Monitoring",
      description:
        "Regular audits and performance tracking for service excellence",
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4 pb-2">
              Facility Management Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive facility solutions that ensure operational
              excellence, compliance, and optimal resource utilization for your
              organization.
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2">
                Complete Facility Solutions Under One Roof
              </h2>
              <p className="text-gray-600 mb-6">
                With over 30 years of experience, Viskan Elite Services delivers
                integrated facility management services that combine technical
                expertise, operational efficiency, and cost-effectiveness. Our
                comprehensive approach ensures your facilities operate at peak
                performance while maintaining the highest standards of safety
                and compliance.
              </p>
              <p className="text-gray-600 mb-6">
                From day-to-day maintenance to strategic facility planning, we
                handle every aspect of facility management, allowing you to
                focus on your core business operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">ISO Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">250+ Facilities Managed</span>
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
                <Building size={100} className="text-gray-400" />
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
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive facility management services tailored to your
              specific needs
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
                <div className="w-12 h-12 bg-[#003366] text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
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
                Key Features of Our Service
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
                    <CheckCircle
                      className="text-[#4CAF50] mr-3 flex-shrink-0"
                      size={20}
                    />
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
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-[#003366] hover:text-white transition-colors duration-300"
                  >
                    <p className="font-medium">{industry}</p>
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
              A systematic approach to delivering excellence in facility
              management
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
                <div className="w-16 h-16 bg-[#003366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Choosing Visskan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Cost Optimization
              </h3>
              <p className="text-blue-700">
                Reduce operational costs by up to 20% through efficient resource
                management and preventive maintenance strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Enhanced Productivity
              </h3>
              <p className="text-green-700">
                Create optimal working environments that boost employee
                productivity and satisfaction through well-maintained
                facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                Risk Mitigation
              </h3>
              <p className="text-purple-700">
                Ensure compliance with all regulations and minimize operational
                risks through proactive management and regular audits.
              </p>
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
              Ready to Optimize Your Facility Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our experts design a customized facility management solution
              for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-all duration-200"
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
