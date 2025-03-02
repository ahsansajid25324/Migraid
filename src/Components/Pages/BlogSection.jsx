import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Blogs from "./Blogs";
import ContactSection from "./ContactSection";
const BlogSection = () => {
  return (
    <Flex
      h="auto"
      pt={{ base: 8, lg: 20 }}

      // px={{ base: 4, lg: 12 }}
      justifyContent={"center"}
      flexDirection="column"
    >
      <Box px={{ base: 4, lg: 12 }} >
        <Blogs></Blogs>
      </Box>
      <Box>
        <ContactSection ></ContactSection>
      </Box>
    </Flex>
  );
};

export default BlogSection;
