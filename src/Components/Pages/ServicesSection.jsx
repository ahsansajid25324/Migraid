import DetailFormat from "./DetailFormat";
import Services from "../../assets/images/anty.png";

import { Flex, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ServicesSection = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
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
          title="EVENTS & CLINICS"
          margin="20px"
          alwaysShowFullContent={true}
          SubTitle="Free community clinics & workshops"
          btn="See Upcoming Events"
          content="We run recurring free legal clinics and workshops. Sign up for the next session or request an outreach visit for your community group. Events include naturalization clinics, DACA renewal help, and know-your-rights sessions."
        ></DetailFormat>
      </Box>
      <Box w={{ base: "100%", lg: "42%" }} mt={{ base: 6, lg: 0 }} ref={imgRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={Services} />
        </motion.div>
      </Box>
    </Flex>
  );
};

export default ServicesSection;
