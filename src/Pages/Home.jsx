import Services from "../assets/images/banner.png";
import Women from "../assets/images/woman.jpg";
import React, { useEffect, useState, Suspense, lazy } from "react";
import HeroSection from "../Components/Pages/HeroSection";
const AboutSection = lazy(() => import("../Components/Pages/AboutSection"));
const ServicesSection = lazy(() =>
  import("../Components/Pages/ServicesSection")
);
const BlogSection = lazy(() => import("../Components/Pages/BlogSection"));
const Footer = lazy(() => import("../Components/Pages/Footer"));
const Banner = lazy(() => import("../Components/Pages/Banner"));
const ValuesSection = lazy(() => import("../Components/Pages/ValuesSection"));
const WorkSection = lazy(() => import("../Components/Pages/WorkSection"));
const ContactSection = lazy(() => import("../Components/Pages/ContactSection"));
const ExpertSection = lazy(() => import("../Components/Pages/ExpertSection"));

function Home() {
  const [showRest, setShowRest] = useState(false);
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
      const existingScript = document.getElementById("ze-snippet");
      if (existingScript) existingScript.remove();
      delete window.zE; // remove Zendesk global object
    };
  }, []);

  // Remove duplicate and incorrect return block above
  useEffect(() => {
    // Show rest of the sections after 500ms
    const timer = setTimeout(() => setShowRest(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      {showRest && (
        <Suspense
          fallback={
            <div
              style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f7f8fa", // match your site background
                width: "100%",
              }}
            >
              <div
                className="loader"
                style={{
                  width: 48,
                  height: 48,
                  border: "6px solid #e0e0e0",
                  borderTop: "6px solid #22B974",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
            </div>
          }
        >
          <div className="fade-init fade-in-up">
            <Banner
              img={Services}
              title="BOOK A CONSULTATION"
              subtitle="EMPOWERING EVERY STEP OF YOUR IMMIGRATION JOURNEY"
              content="Whether you're applying for residency, finding local resources, or building a new life, our team provides the information, clarity, and support you need to succeed."
              alignment="right"
              btncontent="Book a Consultation"
              show={true}
            />
            <AboutSection />

            <ValuesSection />
            <ExpertSection />
            <WorkSection />
            <Banner
              img={Women}
              title="FINANCIAL ASSISTANCE"
              subtitle="SLIDING SCALE & FINANCE HELP"
              content="We offer sliding-scale fees and pro bono assistance for low-income clients. Donations and grants fund our free clinics and casework. If you need a fee waiver or reduced rate, please tell us at intake — we'll work with you."
              btncontent="Apply for Financial Assistance"
              alignment="left"
              show={false}
            />
            <ServicesSection />

            <ContactSection />
            <BlogSection />
            <Footer />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default Home;
