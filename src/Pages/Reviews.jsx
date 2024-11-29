import React from "react";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import TestimonialsSection from "../Components/Pages/TestimonialsSection";
import ContactSection from "../Components/Pages/ContactSection";
import Footer from "../Components/Pages/Footer";

const Reviews = () => {
  return (
    <div>
      <OtherPageHeroSection
        title="Reviews"
        subtitle="Customer Reviews"
        descript="See what our customers thing about our service. Hear it from them directly!"
      />
      <TestimonialsSection />
      <ContactSection showY={true} />
      <Footer />
    </div>
  );
};

export default Reviews;
