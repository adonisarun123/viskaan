"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, TrendingUp, Calendar, Award } from "lucide-react";

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <Users size={40} />,
      value: 3600,
      suffix: "+",
      label: "Trained Workforce",
      color: "text-[#003366]",
    },
    {
      icon: <TrendingUp size={40} />,
      value: 100,
      prefix: "₹",
      suffix: " Cr+",
      label: "Group Turnover",
      color: "text-[#4CAF50]",
    },
    {
      icon: <Calendar size={40} />,
      value: 25,
      suffix: "+",
      label: "Years of Experience",
      color: "text-[#FFB300]",
    },
    {
      icon: <Award size={40} />,
      value: 500,
      suffix: "+",
      label: "Happy Clients",
      color: "text-[#003366]",
    },
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {isInView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CountUp Component
interface CountUpProps {
  start: number;
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const CountUp = ({ start, end, duration, prefix = "", suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    updateCount();
  }, [start, end, duration]);

  return (
    <>
      {prefix}{count}{suffix}
    </>
  );
};

export default StatsBar; 