import React from "react";
import HeroSection from "../Components/Pages/HeroSection";
import AboutSection from "../Components/Pages/AboutSection";
import AnswerQuestionSection from "../Components/Pages/AnswersQuestionSection";
import ServicesSection from "../Components/Pages/ServicesSection";
import TestimonialsSection from "../Components/Pages/TestimonialsSection";
import BlogSection from "../Components/Pages/BlogSection";
import Footer from "../Components/Pages/Footer";
import Banner from "../Components/Pages/Banner";
import ValuesSection from "../Components/Pages/ValuesSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <AboutSection />
      <ValuesSection />
      <AnswerQuestionSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default Home;
