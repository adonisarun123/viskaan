"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ClientsSlider = () => {
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

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-[#FFB300]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider; 