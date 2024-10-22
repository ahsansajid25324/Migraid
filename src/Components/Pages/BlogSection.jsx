import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import Blogs from "./Blogs";
const BlogSection = () => {
  return (
    <Flex
      h="auto"
      py={{ base: 8, lg: 20 }}
      px={{ base: 4, lg: 12 }}
      justifyContent={"center"}
      flexDirection="column"
    >
      <Box>
        <SectionHeading
          subcolor="black"
          heading="Blogs"
          color="rgba(34, 185, 116, 1)"
        ></SectionHeading>
      </Box>
      <Box>
        <Blogs></Blogs>
      </Box>
    </Flex>
  );
};

export default BlogSection;
