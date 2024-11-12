import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Contact from "./../../assets/images/Contact.png";
import WLine from "../../assets/images/WLine.png";
import CustomButton from "../UI/CustomButton";

const ContactSection = () => {
  return (
    <Flex
      bg="rgba(34, 185, 116, 1)"
      mt={{ base: 8, lg: 16 }}
      borderRadius="20px"
      mx={{ base: 0, lg: 2 }}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 4, md: 6 }}
    >
      <Box w={{ base: "100%", md: "35%" }} borderRadius={"20px"}>
        <Image
          objectFit={"cover"}
          h="330px"
          w="100%"
          borderRadius="20px"
          src={Contact}
        />
      </Box>
      <Box p={{ base: 4, md: 0 }} flex="1" w={{ base: "100%", md: "50%" }}>
        <Flex alignItems="center" gap={2}>
          <Image w="30px" h="3px" src={WLine} />
          <Text color="white" fontSize={{ base: "16px", lg: "18px" }}>
            CONTACT US
          </Text>
        </Flex>

        <Heading
          color="white"
          fontSize={{ base: "1.6rem", lg: "2.2rem" }}
          fontWeight="600"
          mt={2}
        >
          Get in Touch With Us
        </Heading>

        <Text
          mt="8px"
          color="rgba(255, 255, 255, 1)"
          fontSize={{ base: "16px", lg: "16px" }}
          fontWeight="400"
          w="95%"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit in vel officia ea aliquid soluta, assumenda suscipit
          quidem architecto a non neque ex saepe ratione distinctio quibusdam.
          Iusto, soluta nobis?
        </Text>
        <Box mt={4}>
          <CustomButton showBorder={true} color="white" showIcon={true} height="50px">
            Contact Us
          </CustomButton>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactSection;
