import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Blogs from "./Blogs";
const BlogSection = () => {
  return (
    <Flex
      h="auto"
      py={{ base: 8, lg: 20 }}

      justifyContent={"center"}
      flexDirection="column"
    >
      <Box px={{ base: 4, lg: 12 }} >
        <Blogs></Blogs>
      </Box>
     
    </Flex>
  );
};

export default BlogSection;
