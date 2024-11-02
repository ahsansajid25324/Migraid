import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import Testimonials from "./Testimonials";
const TestimonialsSection = () => {
  return (
    <Flex
      h="auto"
      pt={{ base: 8, lg: 20 }}
      bg="rgba(246, 246, 246, 1)"
      px={{ base: 4, lg: 12 }}

      justifyContent={"center"}
      flexDirection="column"
    >
      <Box>
        <SectionHeading
          subcolor="black"
          heading="TESTIMONIALS"
          color="rgba(34, 185, 116, 1)"
          subHeading={true}
        ></SectionHeading>
      </Box>
      <Box>
        <Testimonials></Testimonials>
      </Box>
    </Flex>
  );
};

export default TestimonialsSection;
