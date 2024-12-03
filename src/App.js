import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Reviews from "./Pages/Reviews";
import Blogs from "./Pages/Blogs";
import PciCompliance from "./Pages/PCI";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pci-compliance" element={<PciCompliance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
    </div>
  );
}

export default App;
