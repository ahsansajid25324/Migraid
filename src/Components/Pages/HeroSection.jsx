import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img from "./../../assets/images/HeroBg.png";
import Navbar from "./Navbar";
import CustomButton from "../UI/CustomButton";
import ConsultationForm from "./ConsultationForm";
import GlobalImage from "./../../assets/images/Global.png";
import "./../../App.css";
function HeroSection() {
  return (
    <Box
      py={{ base: 12, lg: 8 }}
      bgImage={img}
      bgSize="cover"
      h={{ base: "auto", lg: "100vh" }}
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection="column"
    >
      <Box position="fixed" top={0} left={0} right={0} zIndex={1000}>
        <Navbar />
      </Box>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        flex="1"
        justifyContent={"center"}
        alignItems={"center"}
        py={{ base: 4 }}
        px={{ base: 4, lg: 12 }}
      >
        <Box w="100%" borderRadius="md" mt={{ base: "20px", lg: "0px" }}>
          <Flex gap={2} alignItems={"center"}>
            <Image src={GlobalImage}></Image>
            <Text
              fontSize={{ base: "16px", lg: "24px" }}
              color="white"
              fontFamily={"Poppins"}
              fontWeight={"400"}
            >
              GLOBAL SOLUTIONS
            </Text>
          </Flex>

          <Heading
            mt={{ base: "12px", lg: "0" }}
            lineHeight={"60px"}
            fontSize={{ base: "48px", lg: "42px", xl: "52px" }}
            fontWeight={"600"}
            color={"white"}
          >
            Migration Consultancy That Aims to Bring the World Closer
          </Heading>
          <Text
            lineHeight={"26px"}
            mt={2}
            fontFamily={"Poppins"}
            fontSize={"16px"}
            color="white"
            fontWeight={"400"}
          >
            At Migraid, we provide expert consultation services to help
            individuals and businesses navigate the complexities of global
            migration.
          </Text>

          <Flex gap={4} mt={4} flexWrap={"wrap"}>
            <CustomButton color="white" showIcon={true} height="58px">
              Book a Consultation
            </CustomButton>
            <CustomButton color="white" showIcon={true} height="58px">
              Learn More
            </CustomButton>
          </Flex>
        </Box>

        <Box w="100%" mt={{ base: 8, lg: 10 }} borderRadius="md">
          <ConsultationForm></ConsultationForm>
        </Box>
      </Flex>
    </Box>
  );
}

export default HeroSection;
