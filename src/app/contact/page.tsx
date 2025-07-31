"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FieldValidation {
  [key: string]: {
    isValid: boolean;
    message: string;
    isTouched: boolean;
  };
}

interface ValidationRule {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  patternMessage?: string;
  customValidation?: (value: string) => boolean;
  customMessage?: string;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [fieldValidation, setFieldValidation] = useState<FieldValidation>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const services = [
    "Facility Management",
    "Security Services",
    "Drivers",
    "Manpower Supply",
    "Horticulture",
    "Canteen Services",
  ];

  // Validation rules
  const validationRules: ValidationRules = {
    name: {
      required: true,
      minLength: 3,
      maxLength: 100,
      pattern: /^[a-zA-Z\s]+$/,
      patternMessage: "Name should only contain letters and spaces"
    },
    email: {
      required: true,
      pattern: /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{2,}$/,
      patternMessage: "Email must have at least 3 characters before @, 3 characters after @, and 2 characters after the dot"
    },
    phone: {
      required: true,
      pattern: /^[5-9]\d{9}$/,
      patternMessage: "Phone number must be exactly 10 digits and start with 5-9."
    },
    company: {
      required: false,
      minLength: 3,
      maxLength: 100,
      pattern: /^[a-zA-Z0-9\s]+$/,
      patternMessage: "Company name must be at least 3 characters"
    },
    service: {
      required: true
    },
    message: {
      required: true,
      maxLength: 1000,
      customValidation: (value: string) => {
        const trimmedValue = value.trim();
        const nonSpaceChars = trimmedValue.replace(/\s/g, '');
        return nonSpaceChars.length >= 10;
      },
      customMessage: "Message must be at least 10 characters (excluding spaces)"
    }
  };

  // Real-time validation function
  const validateField = (name: string, value: string): { isValid: boolean; message: string } => {
    const rules = validationRules[name];
    if (!rules) return { isValid: true, message: '' };

    // Required field validation
    if (rules.required && !value.trim()) {
      return { isValid: false, message: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` };
    }

    // Skip further validation if field is not required and empty
    if (!rules.required && !value.trim()) {
      return { isValid: true, message: '' };
    }

    // Min length validation
    if (rules.minLength && value.trim().length < rules.minLength) {
      return { isValid: false, message: `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters` };
    }

    // Max length validation
    if (rules.maxLength && value.trim().length > rules.maxLength) {
      return { isValid: false, message: `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than ${rules.maxLength} characters` };
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      return { isValid: false, message: rules.patternMessage || 'Invalid format' };
    }

    // Custom validation for message field
    if (rules.customValidation && !rules.customValidation(value)) {
      return { isValid: false, message: rules.customMessage || 'Invalid format' };
    }

    return { isValid: true, message: '' };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Update character count for message field (excluding spaces)
    if (name === 'message') {
      const nonSpaceChars = value.replace(/\s/g, '');
      setCharacterCount(nonSpaceChars.length);
    }

    // Real-time validation
    const validation = validateField(name, value);
    
    setFieldValidation(prev => ({
      ...prev,
      [name]: {
        ...validation,
        isTouched: true
      }
    }));

    // Update errors state
    if (validation.isValid) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    } else {
      setErrors(prev => ({
        ...prev,
        [name]: validation.message
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Mark field as touched and validate
    const validation = validateField(name, value);
    
    setFieldValidation(prev => ({
      ...prev,
      [name]: {
        ...validation,
        isTouched: true
      }
    }));

    if (!validation.isValid) {
      setErrors(prev => ({
        ...prev,
        [name]: validation.message
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(fieldName => {
      const validation = validateField(fieldName, formData[fieldName as keyof FormData]);
      
      if (!validation.isValid) {
        newErrors[fieldName] = validation.message;
        isValid = false;
      }

      // Mark all fields as touched
      setFieldValidation(prev => ({
        ...prev,
        [fieldName]: {
          ...validation,
          isTouched: true
        }
      }));
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('.border-red-300') as HTMLElement;
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Thank you for your message! We will get back to you within 24 hours.');
        
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setFieldValidation({});
        setCharacterCount(0);
      } else {
        setSubmitStatus('error');
        if (result.error === 'Too many requests. Please try again later.') {
          setSubmitMessage('You have submitted too many requests. Please wait 15 minutes before trying again.');
        } else if (result.error === 'Failed to send email. Please try again later or contact us directly.') {
          setSubmitMessage('We are experiencing technical difficulties. Please call us directly or try again later.');
        } else {
          setSubmitMessage(result.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatus = () => {
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our experts for customized facility management solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">{submitMessage}</p>
                  </div>
                  <button
                    onClick={clearStatus}
                    className="text-green-600 hover:text-green-800"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800">{submitMessage}</p>
                  </div>
                  <button
                    onClick={clearStatus}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all ${
                        fieldValidation.name?.isTouched && !fieldValidation.name?.isValid
                          ? 'border-red-300 bg-red-50'
                          : fieldValidation.name?.isTouched && fieldValidation.name?.isValid
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                    {fieldValidation.name?.isTouched && !fieldValidation.name?.isValid && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                    {fieldValidation.name?.isTouched && fieldValidation.name?.isValid && (
                      <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle size={14} />
                        Name looks good!
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all ${
                        fieldValidation.email?.isTouched && !fieldValidation.email?.isValid
                          ? 'border-red-300 bg-red-50'
                          : fieldValidation.email?.isTouched && fieldValidation.email?.isValid
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="john@company.com"
                      disabled={isSubmitting}
                    />
                    {fieldValidation.email?.isTouched && !fieldValidation.email?.isValid && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                    {fieldValidation.email?.isTouched && fieldValidation.email?.isValid && (
                      <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle size={14} />
                        Email looks good!
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all ${
                        fieldValidation.phone?.isTouched && !fieldValidation.phone?.isValid
                          ? 'border-red-300 bg-red-50'
                          : fieldValidation.phone?.isTouched && fieldValidation.phone?.isValid
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                      disabled={isSubmitting}
                    />
                    {fieldValidation.phone?.isTouched && !fieldValidation.phone?.isValid && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.phone}
                      </p>
                    )}
                    {fieldValidation.phone?.isTouched && fieldValidation.phone?.isValid && (
                      <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle size={14} />
                        Phone number looks good!
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all ${
                        fieldValidation.company?.isTouched && !fieldValidation.company?.isValid
                          ? 'border-red-300 bg-red-50'
                          : fieldValidation.company?.isTouched && fieldValidation.company?.isValid && formData.company.trim()
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="ABC Corporation"
                      disabled={isSubmitting}
                    />
                    {fieldValidation.company?.isTouched && !fieldValidation.company?.isValid && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.company}
                      </p>
                    )}
                    {fieldValidation.company?.isTouched && fieldValidation.company?.isValid && formData.company.trim() && (
                      <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle size={14} />
                        Company name looks good!
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all ${
                      fieldValidation.service?.isTouched && !fieldValidation.service?.isValid
                        ? 'border-red-300 bg-red-50'
                        : fieldValidation.service?.isTouched && fieldValidation.service?.isValid
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {fieldValidation.service?.isTouched && !fieldValidation.service?.isValid && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.service}
                    </p>
                  )}
                  {fieldValidation.service?.isTouched && fieldValidation.service?.isValid && (
                    <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle size={14} />
                      Service selected!
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message * <span className="text-gray-500 text-xs">({characterCount}/1000 non-space characters)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all resize-none ${
                      fieldValidation.message?.isTouched && !fieldValidation.message?.isValid
                        ? 'border-red-300 bg-red-50'
                        : fieldValidation.message?.isTouched && fieldValidation.message?.isValid
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-300'
                    }`}
                    placeholder="Please describe your requirements..."
                    disabled={isSubmitting}
                  />
                  {fieldValidation.message?.isTouched && !fieldValidation.message?.isValid && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                  {fieldValidation.message?.isTouched && fieldValidation.message?.isValid && (
                    <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle size={14} />
                      Message looks good!
                    </p>
                  )}
                  <div className="mt-1 text-xs text-gray-500">
                    {characterCount > 900 && (
                      <span className="text-orange-500">Approaching character limit</span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 ${
                    isSubmitting || Object.keys(errors).length > 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#003366] hover:bg-[#00284d] text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                      <p className="text-gray-600">
                        #2, 3rd Floor, 1st Main,<br />
                        Muneshwara Block, Mahalakshmi Layout,<br />
                        Bangalore – 560086
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919900615903" className="hover:text-[#003366] transition-colors">
                          +91 99006 15903
                        </a> / 
                        <a href="tel:+919845948819" className="hover:text-[#003366] transition-colors">
                          +91 98459 48819
                        </a> / 
                        <a href="tel:+919845952248" className="hover:text-[#003366] transition-colors">
                          +91 98459 52248
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@viskaneliteservices.com" className="hover:text-[#003366] transition-colors">
                          info@viskaneliteservices.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#003366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-[#003366] text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3 pb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• ISO 9001:2015 Certified</li>
                  <li>• PSARA Licensed Security Services</li>
                  <li>• 30+ Years of Experience</li>
                  <li>• 2500+ Professional Staff</li>
                  <li>• FSSAI Registered</li>
                  <li>• 24/7 Customer Support</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}