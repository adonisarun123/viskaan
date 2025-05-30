"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you contact us",
        "Company information for business inquiries",
        "Usage data and analytics to improve our services",
        "Cookies and similar tracking technologies",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To respond to your inquiries and requests",
        "To send important updates about our services",
        "To improve our website and user experience",
        "To comply with legal obligations",
      ],
    },
    {
      title: "3. Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "We may share information with trusted service providers",
        "We may disclose information when required by law",
        "Business transfers may involve sharing of information",
      ],
    },
    {
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures",
        "Regular security assessments and updates",
        "Encrypted data transmission and storage",
        "Limited access to personal information",
      ],
    },
    {
      title: "5. Your Rights",
      content: [
        "Access to your personal information",
        "Correction of inaccurate information",
        "Deletion of your information (subject to legal requirements)",
        "Opt-out of marketing communications",
      ],
    },
    {
      title: "6. Contact Information",
      content: [
        "For privacy-related questions: privacy@visskanassociates.com",
        "Phone: +91-080-23336810",
        "Address: #1510, 19th Main, 2nd Sector, HSR Layout, Bangalore - 560102",
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 mb-8">
              At Visskan Associates ("we," "our," or "us"), we are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-[#4CAF50] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Updates to This Policy</h3>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 