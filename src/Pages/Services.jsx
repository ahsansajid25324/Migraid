import React from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import ServicesSection from "../Components/Pages/ServicesSection";
import ContactSection from "../Components/Pages/ContactSection";
import ExpertSection from "../Components/Pages/ExpertSection";
function Services() {
  return (
    <>
      <OtherPageHeroSection
        title="SERVICES"
        subtitle="What We Do"
        descript="Helping businesses & individuals make the American dream a reality!"
      />
      <ServicesSection />
      <ExpertSection />

      {/* <AnswerQuestionSection /> */}
      <ContactSection showY={true} margin={12} />
      <Footer />
    </>
  );
}

export default Services;
