import React from "react";
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
import { Text,Box  } from "@chakra-ui/react";
function Home() {
  return (
    <>
      <HeroSection />
      <Banner
        img={Services}
        title="BOOK A CONSULTATION"
        subtitle="EMPOWERING EVERY STEP OF YOUR IMMIGRATION JOURNEY"
        content="Whether you're applying for residency, finding local resources, or building a new life, our team provides the information, clarity, and support you need to succeed."
        btncontent="Book A Consultation"
        alignment="right"
      />
      <AboutSection />
      <ValuesSection />
      <Box bg="#004E64">
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          nisi, odio corporis vero tempore voluptatem itaque magni suscipit
          harum aperiam maiores, nam perferendis consequatur placeat odit
          doloremque soluta unde alias quia autem quis, aspernatur cumque enim
          debitis! Ex cum libero a ducimus modi, dolorum illum. Consequatur
          possimus tempora aut autem labore quia non praesentium! Obcaecati in,
          nesciunt commodi architecto error tenetur accusamus suscipit tempore
          velit nostrum temporibus deserunt officia? Minus laborum non id, eaque
          perspiciatis explicabo doloribus quos pariatur reiciendis incidunt
          delectus. Odio autem facere, totam veniam eligendi delectus sed. Sed
          veritatis, beatae molestiae natus ea quisquam assumenda voluptas,
          perspiciatis nisi eveniet repudiandae veniam soluta qui accusamus
          atque! Temporibus quisquam asperiores enim at ex iste necessitatibus
          deserunt quos debitis ut, inventore exercitationem! Aspernatur?
        </Text>
      </Box>
      <WorkSection />
      <Banner
        img={Women}
        title="FINANCIAL ASSITANCE"
        subtitle="SLIDING SCALE & FINANCE HELP"
        content="We offer sliding-scale fees and pro bono assistance for low-income clients. Donations and grants fund our free clinics and casework. If you need a fee waiver or reduced rate, please tell us at intake — we'll work with you."
        btncontent="Apply for Financial Assistance"
        alignment="left"
      />

      <ServicesSection />

      <ContactSection />
      <TestimonialsSection />

      <BlogSection />
      <Footer />
    </>
  );
}

export default Home;
