"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, ArrowRight, CheckCircle, Briefcase, Wrench, GraduationCap } from "lucide-react";

export default function ManpowerPage() {
  const services = [
    {
      icon: <Briefcase size={32} />,
      title: "Administrative Staff",
      description: "Qualified administrative personnel for office operations and support functions.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Technical Personnel",
      description: "Skilled technicians and engineers for specialized technical requirements.",
    },
    {
      icon: <Users size={32} />,
      title: "General Workforce",
      description: "Semi-skilled and unskilled workers for various operational needs.",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Retired Officials",
      description: "Experienced retired professionals for consultancy and advisory roles.",
    },
  ];

  const keyFeatures = [
    "Comprehensive background verification",
    "Skills assessment and matching",
    "Statutory compliance (PF, ESI, etc.)",
    "Flexible deployment options",
    "Performance monitoring systems",
    "Training and development programs",
    "Replacement guarantee",
    "24/7 HR support",
    "Competitive compensation packages",
    "Regular performance reviews"
  ];

  const industries = [
    "Manufacturing",
    "IT & Technology",
    "Healthcare",
    "Education",
    "Government",
    "Aerospace",
    "Automotive",
    "Pharmaceuticals",
    "Banking & Finance",
    "Retail & FMCG",
    "Construction",
    "Logistics"
  ];

  const categories = [
    {
      title: "Skilled Personnel",
      roles: ["Engineers", "Technicians", "Specialists", "Supervisors"],
      color: "bg-purple-600"
    },
    {
      title: "Semi-Skilled Workers",
      roles: ["Machine Operators", "Quality Inspectors", "Maintenance Staff", "Coordinators"],
      color: "bg-blue-600"
    },
    {
      title: "Administrative Staff",
      roles: ["Office Assistants", "Data Entry", "Receptionists", "Clerks"],
      color: "bg-green-600"
    },
    {
      title: "General Workers",
      roles: ["Helpers", "Packers", "Loaders", "Support Staff"],
      color: "bg-orange-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Understanding your manpower needs, skills required, and deployment timeline"
    },
    {
      step: "2",
      title: "Sourcing & Screening",
      description: "Identifying candidates through our network and conducting thorough screening"
    },
    {
      step: "3",
      title: "Selection & Training",
      description: "Final selection based on requirements and providing necessary training"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Professional deployment with ongoing HR support and performance monitoring"
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
              Manpower Supply Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive workforce solutions providing highly skilled, skilled, semi-skilled and administrative personnel with complete statutory compliance and performance guarantee.
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
                Your Trusted Manpower Partner
              </h2>
              <p className="text-gray-600 mb-6">
                Viskan Elite Services specializes in providing quality manpower solutions across
                various industries. With our extensive network and rigorous selection process,
                we ensure that you get the right talent for your specific requirements.
              </p>
              <p className="text-gray-600 mb-6">
                From skilled technicians to administrative staff, we handle the entire recruitment
                process, statutory compliance, and ongoing HR support, allowing you to focus on
                your core business operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">2500+ Active Personnel</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#4CAF50] mr-2" />
                  <span className="font-semibold">100% Compliance</span>
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
                <Users size={100} className="text-gray-400" />
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
              Our Manpower Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive workforce solutions across different skill levels and functions
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
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
              Workforce Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of our manpower supply across different skill levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`${category.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {category.roles.map((role, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="text-[#4CAF50] mr-2" size={16} />
                        <span className="text-gray-700 text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Industries */}
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
                Why Choose Our Manpower Services
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
                    className="bg-white rounded-lg p-4 text-center hover:bg-purple-600 hover:text-white transition-colors duration-300"
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
              Our Recruitment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to finding and deploying the right talent
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
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
              Need Quality Manpower?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your manpower requirements and get a customized
              workforce solution for your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
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