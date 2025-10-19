import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Blogs from "./Blogs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const BlogSection = () => {
  const { ref: blogsRef, inView: blogsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <Flex
      h="auto"
      py={{ base: 8, lg: 20 }}
      justifyContent={"center"}
      flexDirection="column"
    >
      <Box px={{ base: 4, lg: 12 }} ref={blogsRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={blogsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Blogs />
        </motion.div>
      </Box>
    </Flex>
  );
};

export default BlogSection;
