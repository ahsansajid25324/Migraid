import React from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import Women from "../assets/images/woman.jpg";

import Banner from "../Components/Pages/Banner";
import ClinicsSection from "../Components/Pages/ClinicsSection";
function Clinics() {
  return (
    <>
      <OtherPageHeroSection
        title="Clinics & Events"
        subtitle="Free Legal Aid Clinics & Community Workshops"
        descript="At Migraid, we believe access to justice should never depend on your income. Our community clinics and workshops offer free or low-cost immigration assistance led by accredited volunteers, paralegals, and legal navigators."
      />

      <ClinicsSection />
      <Banner
        img={Women}
        title="HOST A CLINIC"
        subtitle="Host a Clinic in Your Community"
        content="Organizations, schools, and faith groups can request an outreach clinic at their location.<br />Contact us at FILING@MIGRAID.CO to schedule a visit."
        btncontent="Donate"
        alignment="left"
        show={true}
        btnWork={true}
        margin={12}
      />
      <Footer />
    </>
  );
}

export default Clinics;
