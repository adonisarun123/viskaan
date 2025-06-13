"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const services = [
    "Facility Management",
    "Security Services",
    "Drivers",
    "Manpower Supply",
    "Horticulture",
    "Canteen Services",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our experts for customized facility management solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                      placeholder="ABC Corporation"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#003366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00284d] transition-colors duration-200"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                      <p className="text-gray-600">
                        #2, 3rd Floor, 1st Main,<br />
                        Muneshwara Block, Mahalakshmi Layout,<br />
                        Bangalore – 560086
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+918023197874" className="hover:text-[#003366]">
                          +91 80 23197874
                        </a>
                        <br />
                        <a href="tel:+918023197959" className="hover:text-[#003366]">
                          +91 80 23197959
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#FFB300] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:mani@visskanaviation.com" className="hover:text-[#003366]">
                          mani@visskanaviation.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5563095!2d77.53895!3d12.9999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwMzInMjAuMiJF!5e0!3m2!1sen!2sin!4v1635959020000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-[#003366] text-white">
        <div className="container text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-200 mb-6">
            Our team is available to discuss your requirements
          </p>
          <a
            href="tel:+918023197874"
            className="inline-flex items-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
          >
            <Phone size={20} />
            Call Now: +91 80 23197874
          </a>
        </div>
      </section>
    </div>
  );
} 