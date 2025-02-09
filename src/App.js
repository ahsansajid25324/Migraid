import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import Payment from "./Pages/Payment";
import ScheduleMeeting from "./Pages/ScheduleMeeting";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminCase from "./Pages/AdminCase";

import { PublicRoute, PrivateRoute } from "./helpers/auth";
import AuthLayout from "./layouts/MainLayout";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {/* Public Routes (Accessible to everyone) */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pci-compliance" element={<PciCompliance />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route element={<PublicRoute />}>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AuthLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="showQuestions" element={<ShowQuestions />} />
          <Route path="paymentDetails" element={<Payment />} />
          <Route path="scheduleMeeting" element={<ScheduleMeeting />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="adminCase" element={<AdminCase />} />
        </Route>
      </Route>

      {/* Catch-All Route (Redirects unknown paths to home) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
