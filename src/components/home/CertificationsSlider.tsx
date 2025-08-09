"use client";

import { Award, Shield, Leaf, CheckCircle, ClipboardCheck } from "lucide-react";

const CertificationsSlider = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent service delivery and customer satisfaction.",
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "PSARA Licensed",
      description: "Private Security Agencies Regulation Act compliance for all security service operations.",
      color: "bg-red-500",
    },
    {
      icon: Leaf,
      title: "Green Certified",
      description: "Eco-friendly practices and sustainable solutions in all facility management services.",
      color: "bg-green-500",
    },
    {
      icon: CheckCircle,
      title: "PF/ESI Compliant",
      description: "Full compliance with statutory requirements for employee welfare and social security.",
      color: "bg-purple-500",
    },
    {
      icon: ClipboardCheck,
      title: "FSSAI Registered",
      description: "Ensuring adherence to food safety standards for hygienic and compliant food service operations.",
      color: "bg-yellow-500",
    },
    {
      icon: ClipboardCheck,
      title: "TAX Compliant",
      description: "Full compliance with all tax regulations and statutory requirements.",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-[#003366] text-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Maintaining the highest standards with recognized certifications and full regulatory compliance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <article key={index} className="text-center group">
                <div className={`${cert.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </article>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Trusted by Leading Organizations</h3>
          <p className="text-gray-300 mb-6">
            Our certified processes and compliant operations have earned the trust of government institutions, 
            multinational corporations, and prestigious educational organizations across India.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
            {["Government Institutions", "MNCs", "Educational Organizations", "Healthcare Facilities", "PSUs"].map((org, index) => (
              <span key={index} className="text-[#FFB300]">{org}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSlider; 