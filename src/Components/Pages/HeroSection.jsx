import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img from "./../../assets/images/newBg.png";
import Navbar from "./Navbar";
import CustomButton from "../UI/CustomButton";
import ConsultationForm from "./ConsultationForm";
import "./../../App.css";

function HeroSection() {
  return (
    <>
      <Box
        pt={{ base: 12, lg: 20 }}
        pb={{ base: 6, lg: 20 }}
        bgImage={img}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position={"relative"}
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
          <Box w="100%" borderRadius="md">
            <Heading
              mt={{ base: "12px", lg: "50px" }}
              lineHeight={{ base: "46px", lg: "66px" }}
              fontSize={{ base: "32px", lg: "42px", xl: "46px" }}
              fontWeight={"600"}
              color="#FFFFFF"
              width="100%"
            >
              Compassionate Immigration Help{" "}
              <span style={{ color: "rgba(34, 185, 116, 1)" }}>
                Free & Low Cost
              </span>{" "}
              Services for Individuals and Families
            </Heading>

            <Text
              lineHeight={{ base: "32px", lg: "26px" }}
              mt={2}
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={"400"}
              color={{ base: "white", lg: "white" }}
            >
              We’re a nonprofit legal aid team guiding people through visas,
              asylum, family reunification, naturalization, and resettlement.
              Trusted, confidential, and community-focused.
            </Text>

            <Flex gap={4} mt={4} flexWrap={"wrap"}>
              <CustomButton color="white" showIcon={true}>
                Book a Free Intake
              </CustomButton>
              <CustomButton color="white" showIcon={true}>
                Donate
              </CustomButton>
            </Flex>
          </Box>

          <Box zIndex={"1"} w="100%" mt={{ base: 8, lg: 10 }} borderRadius="md">
            <ConsultationForm></ConsultationForm>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default React.memo(HeroSection);
