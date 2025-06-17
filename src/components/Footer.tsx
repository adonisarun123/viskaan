import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Facility Management", href: "/services/facility-management" },
    { name: "Security Services", href: "/services/security" },
    { name: "Drivers", href: "/services/drivers" },
    { name: "Manpower Supply", href: "/services/manpower" },
    { name: "Horticulture", href: "/services/horticulture" },
    { name: "Canteen Services", href: "/services/canteen" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Certifications", href: "/certifications" },
    { name: "Clients", href: "/clients" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const certifications = [
    "ISO 9001:2015",
    "PSARA Licensed",
    "FSSAI Certified",
    "PF/ESI Compliant",
    "GST Registered",
  ];

  return (
    <footer className="bg-[#003366] text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] to-[#FFC940]">VISKAN</h3>
              <p className="text-white text-sm uppercase tracking-wide">Elite Services</p>
            </div>
            <p className="text-gray-300 mb-4">
              End-to-End Facility Management Services Since 1995. Trusted by Government, 
              Corporates & Institutions across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FFB300] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB300] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB300] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFB300]">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFB300]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFB300]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  #2, 3rd Floor, 1st Main, Muneshwara Block, 
                  Mahalakshmi Layout, Bangalore – 560086
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <div className="text-gray-300 text-sm">
                  <a href="tel:+918023197874" className="hover:text-white transition-colors">
                    +91 80 23197874
                  </a>
                  <span className="mx-1">/</span>
                  <a href="tel:+918023197959" className="hover:text-white transition-colors">
                    23197959
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                            <a href="mailto:info@viskaneliteservices.com" className="text-gray-300 text-sm hover:text-white transition-colors">
              info@viskaneliteservices.com
            </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-600 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {certifications.map((cert) => (
              <div key={cert} className="text-sm text-gray-300">
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Viskan Elite Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 