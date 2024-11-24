import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import Testimonials from "./Testimonials";
import tower from "./../../assets/images/tower.png";

import Ptower from "./../../assets/images/Group.png";

const TestimonialsSection = () => {
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

      <Box>
        <SectionHeading
          subcolor="black"
          heading="TESTIMONIALS"
          color="rgba(34, 185, 116, 1)"
          subHeading={true}
          subHeadingTitle='What Our Customers are Saying'

        ></SectionHeading>
      </Box>
      <Box>
        <Testimonials></Testimonials>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
