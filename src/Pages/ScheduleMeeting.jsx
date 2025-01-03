import React from "react";
import Footer from "../Components/Pages/Footer";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import { InlineWidget } from "react-calendly";
const ScheduleMeeting = () => {
  return (
    <div>
      <NonImgHeroSection title="Meeting" />
      
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <InlineWidget 
          url="https://calendly.com/sajidahsan67/30min"
          styles={{ height: '100%', border: 'none' }} 
        />
      </div>

      <Footer />
    </div>
  );
};

export default ScheduleMeeting;
