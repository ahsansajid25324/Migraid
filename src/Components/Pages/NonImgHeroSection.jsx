import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import HeroLine from "../../assets/images/HeroLine.png";

const NonImgHeroSection = ({ title }) => {
  return (
    <Box
      py={{ base: 20, lg: 8 }}
      h={{ base: "30vh", lg: "40vh" }}
      bg="rgba(2, 2, 38, 1)"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Box position="fixed" top={0} left={0} right={0} zIndex={1000}>
        <Navbar />
      </Box>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        flex="1"
        alignItems={"center"}
        justifyContent={"center"}
        position="relative"
        zIndex={1}
      >
        <Box borderRadius="md" m={"auto"} position="relative" zIndex={2}>
          <Text
            mt={{ base: "32px", lg: "12px" }}
            fontSize={{ base: "24px", lg: "36px" }}
            fontFamily={"Poppins"}
            fontWeight={"600"}
            color="white"
          >
            {title}
          </Text>
        </Box>
      </Flex>

      <Box
        position="absolute"
        top={0}
        right={0}
        h="100%"
        w="30%"
        bgImage={`url(${HeroLine})`}
        bgSize="cover"
        bgPosition="center"
        zIndex={0}
      />
    </Box>
  );
};

export default NonImgHeroSection;
