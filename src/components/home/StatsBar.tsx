"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const StatsBar = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "28+",
      label: "Years of Excellence",
      description: "Since 1995"
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Across India"
    },
    {
      icon: Award,
      number: "ISO 9001",
      label: "Certified",
      description: "Quality Assured"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      description: "Always Available"
    }
  ];

  return (
    <section className="py-16 bg-[#003366]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent size={40} className="text-[#FFB300]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar; 