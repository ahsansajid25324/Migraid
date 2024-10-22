import React from "react";
import HeroSection from "../Components/Pages/HeroSection";
import AboutSection from "../Components/Pages/AboutSection";
import AnswerQuestionSection from "../Components/Pages/AnswersQuestionSection";
import ServicesSection from "../Components/Pages/ServicesSection";
import TestimonialsSection from "../Components/Pages/TestimonialsSection";
import BlogSection from "../Components/Pages/BlogSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AnswerQuestionSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}

export default Home;
