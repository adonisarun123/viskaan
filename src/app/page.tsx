"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  Car, 
  Leaf, 
  Coffee,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CertificationsSlider from "@/components/home/CertificationsSlider";
import ClientsSlider from "@/components/home/ClientsSlider";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Certifications */}
      <CertificationsSlider />

      {/* Clients */}
      <ClientsSlider />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
