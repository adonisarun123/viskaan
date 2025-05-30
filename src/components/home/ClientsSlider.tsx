"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ClientsSlider = () => {
  const clients = [
    { name: "ISRO", logo: "/clients/isro.png" },
    { name: "BEL", logo: "/clients/bel.png" },
    { name: "HAL", logo: "/clients/hal.png" },
    { name: "IIMB", logo: "/clients/iimb.png" },
    { name: "Toshiba", logo: "/clients/toshiba.png" },
    { name: "Bosch", logo: "/clients/bosch.png" },
    { name: "CEAT", logo: "/clients/ceat.png" },
    { name: "Metro Rail", logo: "/clients/metro.png" },
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center flex-wrap gap-8 md:gap-12"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center px-4">
                  <span className="text-gray-700 font-semibold text-center">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
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
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
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