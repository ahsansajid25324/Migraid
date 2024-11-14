import React from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import ServicesSection from "../Components/Pages/ServicesSection";

function About() {
  return (
    <>
      <OtherPageHeroSection title="ABOUT US" subtitle="We Are Migraid" />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default About;
