"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gray-50"></div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Speak to Our Experts Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us help you optimize your facility management operations with our 
            comprehensive services and experienced team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#FFB300] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a200] transition-colors duration-200"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a 
              href="tel:+918023197874" 
              className="inline-flex items-center justify-center gap-2 bg-white text-[#003366] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-[#003366]"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-[#FFB300]">25+</span>
              <span className="text-sm">Years of Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-[#FFB300]">3600+</span>
              <span className="text-sm">Trained Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-[#FFB300]">500+</span>
              <span className="text-sm">Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 