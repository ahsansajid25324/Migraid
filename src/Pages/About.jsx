import React from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import ServicesSection from "../Components/Pages/ServicesSection";
import TeamSection from "../Components/Pages/TeamSection";
import ContactSection from "../Components/Pages/ContactSection";
function About() {
  return (
    <>
      <OtherPageHeroSection
        title="ABOUT US"
        subtitle="We Are Migraid"
        descript="Get with us today to experience a seamless process for your migration!"
      />
      <ServicesSection />
      <TeamSection />
      <ContactSection showY={true} />
      <Footer />
    </>
  );
}

export default About;
