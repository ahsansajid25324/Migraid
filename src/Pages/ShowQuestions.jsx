import React from "react";
import Footer from "../Components/Pages/Footer";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import { Box, Flex, Textarea, Text, Button } from "@chakra-ui/react";

const ShowQuestions = () => {
  return (
    <div>
      <NonImgHeroSection title="Questions"></NonImgHeroSection>

      <Flex
        w={{ base: "100%", md: "80%" }}
        py={12}
        mx="auto"
        flexDirection={"column"}
      >
        <Box w="100%">
          <Text mb={2}>Questions - 01</Text>
          <Textarea placeholder="Enter you Question"></Textarea>
        </Box>
        <Box w="100%" mt={4}>
          <Text mb={2}>Questions - 02</Text>
          <Textarea placeholder="Enter you Question"></Textarea>
        </Box>

        <Button mt={2} colorScheme="green">
          Submit
        </Button>
      </Flex>

      <Footer></Footer>
    </div>
  );
};

export default ShowQuestions;
