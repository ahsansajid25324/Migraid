import React from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import ServicesSection from "../Components/Pages/ServicesSection";
import ContactSection from "../Components/Pages/ContactSection";
import AnswerQuestionSection from "../Components/Pages/AnswersQuestionSection";
function Services() {
  return (
    <>
      <OtherPageHeroSection
        title="Services"
        subtitle="What We Do"
        descript="Helping businesses & individuals make the American dream a reality!"
      />
      <ServicesSection />
      <AnswerQuestionSection />
      <ContactSection showY={true} />
      <Footer />
    </>
  );
}

export default Services;
