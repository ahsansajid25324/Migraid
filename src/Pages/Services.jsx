import React from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import ContactSection from "../Components/Pages/ContactSection";
import ExpertSection from "../Components/Pages/ExpertSection";
import DetailFormat from "../Components/Pages/DetailFormat";
import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Img from "../assets/images/uncle.png";
function Services() {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <OtherPageHeroSection
        title="SERVICES"
        subtitle="What We Do"
        descript="Helping businesses & individuals make the American dream a reality!"
      />
      <Flex
        h="auto"
        py={{ base: 6, lg: 12 }}
        px={{ base: 4, lg: 12 }}
        alignItems="center"
        bg="#ffff"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <DetailFormat
            title="MISSION"
            margin="20px"
            alwaysShowFullContent={true}
            SubTitle="Our Mission"
            btn="See Upcoming Events"
            content="At Migraid, our mission is to empower individuals and businesses seeking to relocate to the United States with comprehensive consultation services tailored to their unique needs. Whether assisting individuals in finding their ideal settlement location, connecting them with legal resources for visa applications, or providing guidance on essential tasks like opening bank accounts and securing housing, we strive to make the relocation process seamless and stress-free.
            Similarly, for businesses aiming to establish a presence in the U.S., we conduct thorough market research and analysis to identify opportunities and mitigate risks, guiding them through every step from market entry strategy to operational setup. Our commitment lies in fostering successful transitions by connecting our clients with a network"
          ></DetailFormat>
        </Box>
        <Box
          w={{ base: "100%", lg: "42%" }}
          mt={{ base: 6, lg: 0 }}
          ref={imgRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image  src={Img} />
          </motion.div>
        </Box>
      </Flex>
      <ExpertSection />

      <ContactSection showY={true} margin={12} />
      <Footer />
    </>
  );
}

export default Services;
