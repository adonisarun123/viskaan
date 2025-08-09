"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ClientsSlider = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const clients = [
    { 
      name: "ISRO", 
      fullName: "Indian Space Research Organisation",
      logo: "/images/isro.jpeg" 
    },
    { 
      name: "BEL", 
      fullName: "Bharat Electronics Limited",
      logo: "/images/bel.png" 
    },
    { 
      name: "HAL", 
      fullName: "Hindustan Aeronautics Limited",
      logo: "/images/hal.jpeg" 
    },
    { 
      name: "IIM-B", 
      fullName: "Indian Institute of Management Bangalore",
      logo: "/images/iimb.png" 
    },
    { 
      name: "Toshiba", 
      fullName: "Toshiba Corporation",
      logo: "/images/toshiba.png" 
    },
    { 
      name: "Bosch", 
      fullName: "Robert Bosch GmbH",
      logo: "/images/bosch.jpeg" 
    },
    { 
      name: "IIA", 
      fullName: "Indian Institute of Astrophysics",
      logo: "/images/iia.png" 
    },
    { 
      name: "BMRCL", 
      fullName: "Bangalore Metro Rail Corporation Limited",
      logo: "/images/bmrcl.png" 
    },
    { 
      name: "Skanray", 
      fullName: "Skanray Technologies Limited",
      logo: "/images/skanray.webp" 
    },
  ];

  const testimonials = [
    {
      quote: "Visskan Associates has been our trusted facility management partner for over 10 years. Their professional approach and quality service delivery is commendable.",
      author: "Senior Manager",
      company: "BEL",
    },
    {
      quote: "The security services provided by Visskan are top-notch. Their trained personnel and systematic approach ensure complete peace of mind.",
      author: "Admin Head",
      company: "ISRO",
    },
    {
      quote: "We appreciate Visskan's commitment to sustainability and their eco-friendly practices in facility management.",
      author: "Facility Manager",
      company: "Toshiba",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Esteemed Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading government institutions, MNCs, and organizations across India
          </p>
        </motion.div>

        {/* Client Logos */}
        <div className="mb-16 overflow-hidden">
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-48 h-24 relative group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <Image
                    src={client.logo}
                    alt={`${client.fullName} logo`}
                    width={200}
                    height={80}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index < 3}
                    sizes="(max-width: 768px) 180px, 200px"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {client.fullName}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Certificates */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ISRO Experience Certificate",
              image: "/images/experience/isro-certificate.svg",
              description: "Certificate of experience from Indian Space Research Organisation",
            },
            {
              title: "BEL Experience Certificate",
              image: "/images/experience/bel-certificate.svg",
              description: "Certificate of experience from Bharat Electronics Limited",
            },
            {
              title: "IIM-B Experience Certificate",
              image: "/images/experience/iimb-certificate.svg",
              description: "Certificate of experience from Indian Institute of Management Bangalore",
            },
          ].map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{certificate.title}</h3>
              <p className="text-sm text-gray-600 text-center mb-4">{certificate.description}</p>
              
              {/* Hover Certificate View */}
              <div className="absolute inset-0 bg-black bg-opacity-90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                <div className="relative">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={600}
                    height={450}
                    className="rounded-lg shadow-xl max-w-full h-auto cursor-pointer"
                    sizes="(max-width: 768px) 90vw, 600px"
                    onClick={() => setSelectedCertificate(certificate.image)}
                  />
                  <div 
                    className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setSelectedCertificate(certificate.image)}
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">Hover to view certificate</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCertificate}
              alt="Certificate Full View"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl max-w-full h-auto"
              sizes="(max-width: 768px) 95vw, 800px"
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientsSlider; 