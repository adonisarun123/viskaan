"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the services of Visskan Associates, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      title: "2. Services Description",
      content: "Visskan Associates provides facility management services including but not limited to housekeeping, security services, manpower supply, horticulture, canteen services, and professional drivers. Specific terms for each service will be outlined in individual service agreements.",
    },
    {
      title: "3. Service Agreements",
      content: "Individual service agreements will supersede these general terms where applicable. Each service engagement will be governed by a specific contract outlining scope, duration, pricing, and other relevant terms.",
    },
    {
      title: "4. Client Responsibilities",
      content: "Clients agree to provide necessary access, information, and cooperation required for service delivery. Clients must ensure a safe working environment for our personnel and comply with all applicable laws and regulations.",
    },
    {
      title: "5. Payment Terms",
      content: "Payment terms will be specified in individual service agreements. Late payments may incur additional charges. We reserve the right to suspend services for non-payment after appropriate notice.",
    },
    {
      title: "6. Confidentiality",
      content: "Both parties agree to maintain confidentiality of proprietary information shared during the course of service delivery. This obligation survives the termination of the service agreement.",
    },
    {
      title: "7. Liability Limitations",
      content: "Visskan Associates liability is limited to the value of services provided. We are not liable for indirect, consequential, or punitive damages. We maintain appropriate insurance coverage as required by law.",
    },
    {
      title: "8. Termination",
      content: "Either party may terminate services as per the notice period specified in the service agreement. Immediate termination may occur in cases of material breach, subject to cure provisions.",
    },
    {
      title: "9. Compliance",
      content: "We operate in full compliance with all applicable laws including labor laws, PSARA regulations, FSSAI guidelines, and maintain all required licenses and certifications.",
    },
    {
      title: "10. Dispute Resolution",
      content: "Any disputes arising from these terms or service delivery will first be addressed through good faith negotiations. If unresolved, disputes will be subject to arbitration under Indian law.",
    },
    {
      title: "11. Modifications",
      content: "We reserve the right to modify these terms at any time. Continued use of our services after modifications constitutes acceptance of the updated terms.",
    },
    {
      title: "12. Governing Law",
      content: "These terms are governed by the laws of India and the courts of Bangalore, Karnataka shall have exclusive jurisdiction over any disputes.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Terms of Service</h1>
            <p className="text-xl text-gray-600">Effective Date: December 2024</p>
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
          >
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                Welcome to Visskan Associates. These Terms of Service ("Terms") govern your use of our services 
                and form a binding legal agreement between you and Visskan Associates.
              </p>
            </div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Information</h3>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>Email: info@visskanassociates.com</p>
                <p>Phone: +91-080-23336810</p>
                <p>Address: #1510, 19th Main, 2nd Sector, HSR Layout, Bangalore - 560102</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-sm text-gray-500"
            >
              <p>
                By using our services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 