"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Users, Building, Wrench, Leaf, Car } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-start pt-6 lg:pt-10 overflow-hidden bg-gradient-to-br from-[#003366] via-[#004080] to-[#0066CC]"
      itemScope 
      itemType="https://schema.org/Organization"
      aria-label="Viskan Elite Services - Professional Facility Management Services"
    >
      {/* Content Container */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start min-h-[65vh]">
          
          {/* Left Content - Clean, No Animations */}
          <div className="text-white">
            {/* Company Tagline */}
            <div className="flex items-center gap-2 text-[#FFB300] font-semibold text-lg mb-6">
              <div className="w-12 h-0.5 bg-[#FFB300]"></div>
              <span>Since 1995</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              End-to-End
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] to-[#FFC940]">
                Facility Management
              </span>
              <br />
              Services
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Trusted by Government, Corporates & Institutions across India with 
              ISO 9001:2015 certified quality and PSARA licensed security.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-[#FFB300] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e6a200] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Get Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm">Call us now</p>
                <a 
                  href="tel:+918023197874" 
                  className="text-lg font-semibold text-white hover:text-[#FFB300] transition-colors"
                >
                  +91 80 23197874
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Elements - Premium Design */}
          <div className="hidden lg:flex relative justify-center items-center h-[600px]">
            {/* Decorative blurred gradient blobs */}
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-br from-[#FFB300]/30 via-[#FFC940]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 right-0 w-96 h-96 bg-gradient-to-tr from-[#00FFAA]/20 via-transparent to-transparent rounded-full blur-3xl" />

            {/* Central Glass Card */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-60 h-60 bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <Building size={48} className="text-[#FFB300] mb-4" />
              <p className="text-white text-lg font-semibold text-center px-6">Your Facility,<br/>Our Expertise</p>
            </motion.div>

            {/* Service Icons Around Card */}
            {[
              { icon: Shield, color: "from-red-500 to-red-600", style: { top: "-30px", left: "50%", transform: "translateX(-50%)" }, delay: 0 },
              { icon: Users, color: "from-blue-500 to-blue-600", style: { top: "50%", right: "-30px", transform: "translateY(-50%)" }, delay: 0.1 },
              { icon: Wrench, color: "from-orange-500 to-orange-600", style: { bottom: "-30px", left: "50%", transform: "translateX(-50%)" }, delay: 0.2 },
              { icon: Leaf, color: "from-green-500 to-green-600", style: { top: "50%", left: "-30px", transform: "translateY(-50%)" }, delay: 0.3 },
              { icon: Car, color: "from-purple-500 to-purple-600", style: { top: "-20px", right: "-20px" }, delay: 0.4 },
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + srv.delay }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className={
                  `group absolute w-14 h-14 bg-gradient-to-br ${srv.color} rounded-full flex items-center justify-center shadow-lg transition-transform`
                }
                style={srv.style}
              >
                <srv.icon size={20} className="text-white" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {srv.icon === Shield ? 'Security' : srv.icon === Users ? 'Manpower' : srv.icon === Wrench ? 'Maintenance' : srv.icon === Leaf ? 'Horticulture' : 'Drivers'}
                </div>
              </motion.div>
            ))}

            {/* Stats Badges repositioned */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -top-10 right-24 bg-white/10 backdrop-blur-md rounded-xl p-4 text-white border border-white/20"
            >
              <div className="text-xl font-bold text-[#FFB300]">3600+</div>
              <div className="text-xs">Trained Staff</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-0 left-24 bg-white/10 backdrop-blur-md rounded-xl p-4 text-white border border-white/20"
            >
              <div className="text-xl font-bold text-[#4CAF50]">28+</div>
              <div className="text-xs">Years Experience</div>
            </motion.div>
          </div>

          {/* Mobile Simple Visual Removed for cleaner look */}
        </div>
      </div>
      
      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-75">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Company Overview</h2>
        <p>Viskan Elite Services is a leading facility management company established in 1995, providing comprehensive services including security, housekeeping, manpower supply, and maintenance solutions to government institutions, multinational corporations, and educational organizations across Karnataka, India.</p>
        <h3>Key Services</h3>
        <ul>
          <li>PSARA-certified security services</li>
          <li>Professional housekeeping and cleaning</li>
          <li>Skilled manpower supply</li>
          <li>Driver services</li>
          <li>Horticulture and landscaping</li>
          <li>Canteen management</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection; 