import React from "react";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import Footer from "../Components/Pages/Footer";
import BlogSection from "../Components/Pages/BlogSection";

const Blogs = () => {
  return (
    <div>
      <OtherPageHeroSection
        title="Blogs"
        subtitle="Customer Blogs"
        descript="See what our customers thing about our service. Hear it from them directly!"
      />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blogs;
