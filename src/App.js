import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Reviews from "./Pages/Reviews";
import Blogs from "./Pages/Blogs";
import PciCompliance from "./Pages/PCI";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ShowQuestions from "./Pages/ShowQuestions";


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pci-compliance" element={<PciCompliance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />


        {/* Registration */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/showQuestions" element={<ShowQuestions />} />



      </Routes>
    </div>
  );
}

export default App;
