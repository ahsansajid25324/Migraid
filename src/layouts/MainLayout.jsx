import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import Footer from "../Components/Pages/Footer";

const AuthLayout = () => {
  const location = useLocation();

  const pageTitles = {
    "/signup": "Sign Up",
    "/login": "Login",
    "/dashboard": "Dashboard",
    "/showQuestions": "Questions",
    "/paymentDetails": "Payment",
    "/scheduleMeeting": "Schedule Meeting",
    "/adminDashboard": "Admin Dashboard",
    "/adminCase": "Admin Case",
  };

  const title = pageTitles[location.pathname] || "Page";

  return (
    <Box>
      <NonImgHeroSection title={title} />
      <Outlet /> 
      <Footer />
    </Box>
  );
};

export default AuthLayout;
