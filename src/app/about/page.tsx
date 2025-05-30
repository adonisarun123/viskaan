"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Target, Eye, Award } from "lucide-react";

export default function AboutPage() {
  const leadership = [
    {
      name: "V.S. Manimaran",
      designation: "Managing Director",
      bio: "Founder and visionary leader with over 25 years of experience in facility management.",
    },
    {
      name: "Tharani Ashok",
      designation: "Director",
      bio: "Strategic business development and operations management expert.",
    },
    {
      name: "Sanjeev Kumar",
      designation: "AVP Operations",
      bio: "Operational excellence leader ensuring service quality across all verticals.",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Visskan Associates</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in facility management since 1995
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Leading the Way in Facility Management
              </h2>
              <p className="text-gray-600 mb-4">
                Visskan Associates, established in 1995, is a trusted name in facility management 
                with a workforce of over 3600 professionals. We cater to government institutions, 
                MNCs, aerospace agencies, and more, delivering tailored solutions with high 
                professionalism and efficiency.
              </p>
              <p className="text-gray-600 mb-4">
                Our comprehensive range of services includes housekeeping, security, manpower supply, 
                drivers, horticulture, and canteen services. Each service is delivered with a 
                commitment to quality, safety, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                With ISO 9001 certification, PSARA license, and complete statutory compliance, 
                we ensure that our services meet the highest industry standards while maintaining 
                cost-effectiveness for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-[#003366] mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-800">25+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-[#4CAF50] mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-800">3600+</h3>
                <p className="text-gray-600">Professionals</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-[#FFB300] mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-800">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Target className="w-12 h-12 text-[#003366] mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-800">6</h3>
                <p className="text-gray-600">Service Verticals</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-12 h-12 text-[#003366]" />
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To become the market leader in facility management and logistics through continuous 
                improvement and customer delight. We strive to set new benchmarks in service quality 
                and operational excellence across all our service verticals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-[#4CAF50]" />
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To deliver reliable, technology-enabled services powered by lean management principles. 
                We are committed to providing cost-effective solutions while maintaining the highest 
                standards of quality, safety, and professionalism.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals driving Visskan&apos;s success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#00284d] text-white">
                    <span className="text-4xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-[#4CAF50] font-medium mb-3">{leader.designation}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 