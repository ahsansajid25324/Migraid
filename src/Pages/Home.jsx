import React from "react";
import HeroSection from "../Components/Pages/HeroSection";
import AboutSection from "../Components/Pages/AboutSection";
import ServicesSection from "../Components/Pages/ServicesSection";
import TestimonialsSection from "../Components/Pages/TestimonialsSection";
import BlogSection from "../Components/Pages/BlogSection";
import Footer from "../Components/Pages/Footer";
import Banner from "../Components/Pages/Banner";
import ValuesSection from "../Components/Pages/ValuesSection";
import WorkSection from "../Components/Pages/WorkSection";
import Services from "../assets/images/banner.png";
import Women from "../assets/images/woman.jpg";
import ContactSection from "../Components/Pages/ContactSection";
import { Text, Box } from "@chakra-ui/react";
import ExpertSection from "../Components/Pages/ExpertSection";
function Home() {
  return (
    <>
      <HeroSection />
      <Banner
        img={Services}
        title="BOOK A CONSULTATION"
        subtitle="EMPOWERING EVERY STEP OF YOUR IMMIGRATION JOURNEY"
        content="Whether you're applying for residency, finding local resources, or building a new life, our team provides the information, clarity, and support you need to succeed."
        btncontent="Book A Consultation"
        alignment="right"
      />
      <AboutSection />
      <ValuesSection />

      <ExpertSection />
      <WorkSection />
      <Banner
        img={Women}
        title="FINANCIAL ASSITANCE"
        subtitle="SLIDING SCALE & FINANCE HELP"
        content="We offer sliding-scale fees and pro bono assistance for low-income clients. Donations and grants fund our free clinics and casework. If you need a fee waiver or reduced rate, please tell us at intake — we'll work with you."
        btncontent="Apply for Financial Assistance"
        alignment="left"
      />

      <ServicesSection />

      <ContactSection />
      <TestimonialsSection />

      <BlogSection />
      <Footer />
    </>
  );
}

export default Home;
