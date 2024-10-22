import React from "react";
import DetailFormat from "./DetailFormat";
import Services from "../../assets/images/Services.png";
import Vector from "../../assets/images/Vector.png";

import { Flex, Box, Image } from "@chakra-ui/react";
const ServicesSection = () => {
  return (
    <Flex
      h="auto"
      py={{ base: 8, lg: 20 }}
      px={{ base: 4, lg: 12 }}
      alignItems="center"
      justifyContent={"space-between"}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box w={{ base: "100%", lg: "50%" }}>
        <DetailFormat
          title="EXPERT GUIDANCE"
          margin="20px"
          SubTitle="Our Services"
          btn="Our Services"
        ></DetailFormat>
      </Box>
      <Box
        ml={{ base: "auto" }}
        w={{ base: "70%", lg: "42%" }}
        mt={{ base: 6, lg: 0 }}
        position="relative"
      >
        <Image src={Services} />
        <Image src={Vector} position="absolute" bottom={-5} left={-5} w="70%" />
      </Box>
    </Flex>
  );
};

export default ServicesSection;
