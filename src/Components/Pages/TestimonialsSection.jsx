import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import Testimonials from "./Testimonials";
import tower from "./../../assets/images/tower.png";
import Ptower from "./../../assets/images/Group.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialsSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Box
      h="auto"
      pt={{ base: 8, lg: 20 }}
      bg="rgba(246, 246, 246, 1)"
      px={{ base: 4, lg: 12 }}
      display="flex"
      position={"relative"}
      justifyContent={"center"}
      flexDirection="column"
    >
      <Box
        position="absolute"
        top={0}
        display={{ base: "block", lg: "none" }}
        left={0}
        right={0}
        bottom={0}
        bgImage={Ptower}
        bgSize={"contain"}
        bgRepeat="no-repeat"
        zIndex="0"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        display={{ base: "none", lg: "block" }}
        right={0}
        bottom={0}
        bgSize={"contain"}
        bgImage={tower}
        bgRepeat="no-repeat"
        zIndex="0"
      />

      <Box ref={headingRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionHeading
            subcolor="black"
            heading="TESTIMONIALS"
            color="rgba(34, 185, 116, 1)"
            subHeading={true}
            subHeadingTitle="What Our Customers are Saying"
            textTitle="Discover what our valued customers have to say about their experiences with Migraid's relocation services. From seamless immigration processes to personalized guidance, read firsthand testimonials showcasing our commitment to customer satisfaction."
          />
        </motion.div>
      </Box>
      <Box ref={testimonialsRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Testimonials />
        </motion.div>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
