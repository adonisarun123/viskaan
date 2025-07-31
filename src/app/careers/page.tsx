"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Heart, TrendingUp, Award, Clock, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Facility Manager",
      location: "Bangalore",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead facility operations for major client sites, ensuring quality service delivery and team management.",
      requirements: [
        "Bachelor's degree in Facility Management or related field",
        "Experience with ISO 9001:2015 implementation",
        "Strong leadership and communication skills",
        "Knowledge of statutory compliance"
      ],
    },
    {
      title: "Security Supervisor",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "3-5 years",
      description: "Supervise security operations ensuring safety and compliance with PSARA regulations.",
      requirements: [
        "Ex-servicemen preferred",
        "PSARA training certificate",
        "Physical fitness and alertness",
        "Good communication skills"
      ],
    },
    {
      title: "Housekeeping Staff",
      location: "Bangalore",
      type: "Full-time",
      experience: "0-2 years",
      description: "Maintain cleanliness and hygiene standards across client facilities.",
      requirements: [
        "Basic education (8th standard)",
        "Attention to detail",
        "Physical fitness",
        "Willingness to learn"
      ],
    },
    {
      title: "Canteen Chef",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead kitchen operations in corporate canteens, ensuring food quality and safety standards.",
      requirements: [
        "Culinary degree or diploma",
        "FSSAI knowledge",
        "Experience in bulk cooking",
        "Menu planning skills"
      ],
    },
    {
      title: "HR Executive",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      description: "Handle recruitment, compliance, and employee relations for our growing workforce.",
      requirements: [
        "Bachelor's degree in HR or related field",
        "Knowledge of labour laws",
        "PF/ESI compliance experience",
        "Good interpersonal skills"
      ],
    },
  ];

  const benefits = [
    {
      icon: <Heart size={32} />,
      title: "Health & Insurance",
      description: "Comprehensive ESI coverage and group health insurance for you and your family",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Career Growth",
      description: "Clear career progression paths with regular training and skill development programs",
    },
    {
      icon: <Users size={32} />,
      title: "Work Environment",
      description: "Inclusive workplace culture with opportunities to work at prestigious client locations",
    },
    {
      icon: <Award size={32} />,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs for outstanding contributions",
    },
    {
      icon: <Clock size={32} />,
      title: "Work-Life Balance",
      description: "Flexible shifts and leave policies ensuring healthy work-life balance",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Job Security",
      description: "Stable employment with a 30+ year established company and statutory benefits",
    },
  ];

  const careerStats = [
    { number: "2500+", label: "Current Employees" },
    { number: "95%", label: "Employee Retention" },
    { number: "500+", label: "Annual Promotions" },
    { number: "100%", label: "Statutory Compliance" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Join Our Growing Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a rewarding career with India's leading facility management company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Work With Viskan?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe our employees are our greatest asset. Join us to be part of a company 
              that values growth, integrity, and employee welfare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#003366] text-white rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {careerStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-[#003366] mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
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
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-1" /> {job.location}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-1" /> {job.type}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-1" /> {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#00284d] transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-[#4CAF50] mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
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
              What Our Employees Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">
                "Working at Visskan for 8 years has been a journey of growth. 
                The company truly cares about employee development and provides 
                opportunities to work with prestigious clients."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Ramesh Kumar</p>
                <p className="text-sm text-gray-500">Facility Manager</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">
                "The training programs and career advancement opportunities here 
                are excellent. I started as a security guard and now supervise 
                a team of 50+ personnel."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Suresh Babu</p>
                <p className="text-sm text-gray-500">Security Supervisor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">
                "Visskan provides job security and treats employees with respect. 
                The PF and ESI benefits ensure our families are protected."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Lakshmi Devi</p>
                <p className="text-sm text-gray-500">Housekeeping Staff</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              How to Apply
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Application Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Submit Application</h4>
                    <p className="text-gray-600">Send your resume to our HR department or apply through the form below</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Initial Screening</h4>
                    <p className="text-gray-600">Our HR team will review your application and contact shortlisted candidates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Interview Process</h4>
                    <p className="text-gray-600">Face-to-face interview with department heads and HR team</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Document Verification</h4>
                    <p className="text-gray-600">Background verification and document submission</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Onboarding</h4>
                    <p className="text-gray-600">Welcome to the Visskan family with comprehensive orientation</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#003366] text-white rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Send Your Application</h4>
                <p className="mb-4">Email your resume with the job title in subject line to:</p>
                <a href="mailto:hr@viskaneliteservices.com" className="flex items-center text-[#FFB300] hover:text-[#e6a200]">
                  <Mail size={20} className="mr-2" />
                  hr@viskaneliteservices.com
                </a>
              </div>
            </div>
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
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join a company that values your contribution and invests in your future
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
            >
              Contact HR Department
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 