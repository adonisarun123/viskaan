"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/lib/config";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = config.services.map(service => ({
    name: service.name,
    href: `/services/${service.id}`,
  }));

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Certifications", href: "/certifications" },
    { name: "Clients", href: "/clients" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${config.contact.phone}`} className="flex items-center gap-2 hover:text-[#FFB300] transition-colors">
              <Phone size={14} />
              {config.contact.phone}
            </a>
            <a href={`mailto:${config.contact.email}`} className="hidden sm:flex items-center gap-2 hover:text-[#FFB300] transition-colors">
              <Mail size={14} />
              {config.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>ISO 9001 Certified</span>
            <span>|</span>
            <span>FSSAI Compliant</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">PSARA Licensed</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
        <nav className="container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 md:w-16 md:h-16">
                    <img 
                      src="/images/ViskanLogo.png" 
                      alt="Viskan Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-black text-[#003366] tracking-wide leading-none transition-all duration-300 group-hover:text-[#00284d]">
                      VISKAN
                    </span>
                    <div className="relative mt-1">
                    <span className="text-xs md:text-sm font-semibold text-[#4CAF50] tracking-widest uppercase leading-none transition-all duration-300 group-hover:text-[#3d8b40]">
                      Elite Services
                    </span>
                    </div>
                    <span className="text-xs font-semibold text-[#4CAF50] tracking-wider uppercase leading-none mt-1">
                      Since 1995 • 30 Years
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="flex items-center gap-1 text-gray-700 hover:text-[#003366] font-medium transition-colors"
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#003366] font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 mt-2 transition-all duration-200 ${
                        servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-gray-50 hover:text-[#003366] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#003366] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t"
              >
                <div className="py-4 space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#003366] font-medium transition-colors"
                          >
                            {link.name}
                            <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                          </button>
                          {servicesOpen && (
                            <div className="pl-8 py-2 space-y-2 bg-gray-50">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 text-gray-600 hover:text-[#003366] transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#003366] font-medium transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-2">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header; 