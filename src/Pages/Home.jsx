import React, { useEffect } from "react";
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
import ExpertSection from "../Components/Pages/ExpertSection";

function Home() {
  // 🧭 Handle hash-based scrolling when the page loads
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  // 💬 Load Zendesk widget when the page mounts
  useEffect(() => {
    // Check if the script is already loaded (to prevent duplicates)
    if (document.getElementById("ze-snippet")) return;

    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=407014fb-0de6-47f9-8332-022b890b137d";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup when leaving page (optional)
      const existingScript = document.getElementById("ze-snippet");
      if (existingScript) existingScript.remove();
      delete window.zE; // remove Zendesk global object
    };
  }, []);

  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      <Banner
        img={Services}
        title="BOOK A CONSULTATION"
        subtitle="EMPOWERING EVERY STEP OF YOUR IMMIGRATION JOURNEY"
        content="Whether you're applying for residency, finding local resources, or building a new life, our team provides the information, clarity, and support you need to succeed."
        btncontent="Book A Consultation"
        alignment="right"
      />

      <div id="about">
        <AboutSection />
      </div>
      <div id="values">
        <ValuesSection />
      </div>
      <div id="services">
        <ExpertSection />
      </div>

      <WorkSection />

      <Banner
        img={Women}
        title="FINANCIAL ASSISTANCE"
        subtitle="SLIDING SCALE & FINANCE HELP"
        content="We offer sliding-scale fees and pro bono assistance for low-income clients. Donations and grants fund our free clinics and casework. If you need a fee waiver or reduced rate, please tell us at intake — we'll work with you."
        btncontent="Apply for Financial Assistance"
        alignment="left"
      />

      <div id="work">
        <ServicesSection />
      </div>

      <div>
        <ContactSection />
      </div>

      {/* <TestimonialsSection /> */}
      <BlogSection />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Home;
