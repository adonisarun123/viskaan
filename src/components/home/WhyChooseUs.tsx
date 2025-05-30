"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Leaf, TrendingDown } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Professional Workforce",
      description: "Over 3600 trained professionals delivering quality services with expertise and dedication.",
    },
    {
      icon: <Globe size={32} />,
      title: "Regional Expertise",
      description: "Strong presence across Karnataka with deep understanding of local requirements and regulations.",
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainable Practices",
      description: "Eco-friendly solutions and green practices integrated into all our service offerings.",
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Cost Efficiency",
      description: "Competitive pricing without compromising on quality, helping you optimize operational costs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-[#003366]">Visskan Associates</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 1995, we've been setting industry standards in facility management services. 
              Our commitment to excellence, professional workforce, and customer-centric approach 
              make us the preferred partner for leading organizations across India.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="text-[#4CAF50] mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Stats Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#00284d] rounded-2xl transform rotate-3"></div>
            
            {/* Content Card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Our Commitment to Excellence
              </h3>
              
              {/* Achievement List */}
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Certified Operations",
                  "PSARA Licensed Security Services",
                  "100% Statutory Compliance",
                  "24/7 Customer Support",
                  "Regular Training Programs",
                  "Technology-Enabled Services",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-[#4CAF50] flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4">Trusted by:</p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
                  <span>ISRO</span>
                  <span>•</span>
                  <span>BEL</span>
                  <span>•</span>
                  <span>HAL</span>
                  <span>•</span>
                  <span>IIMB</span>
                  <span>•</span>
                  <span>Toshiba</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 