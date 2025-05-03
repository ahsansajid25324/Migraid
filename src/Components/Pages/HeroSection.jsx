import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img from "./../../assets/images/HeroBg.png";
import Navbar from "./Navbar";
import CustomButton from "../UI/CustomButton";
import ConsultationForm from "./ConsultationForm";
import GlobalImage from "./../../assets/images/Global.png";
import "./../../App.css";
import HeroLine from "../../assets/images/HeroLine.png";
import Pround from "../../assets/images/Pround.png";

import HeroBg from "../../assets/images/HeroPBg.png";

function HeroSection() {
  return (
    <>
      <Box
        pt={{ base: 12, lg: 20 }}
        pb={{ base: 6, lg: 20 }}

        bg={{ base: "white", lg: "transparent" }}
        bgImage={{ base: HeroBg, lg: img }}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position={"relative"}
        display="flex"
        flexDirection="column"
      >
        <Image
          w="fit-content"
          src={HeroLine}
          h={{ base: "auto", xl: "100vh" }}
          alt="Hero Line"
          display={{ base: "none", lg: "block" }}
          position="absolute"
          top={0}
          right={{ base: 0, lg: 20 }}
          zIndex={1}
        />

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
              <Image
                src={GlobalImage}
                display={{ base: "none", lg: "block" }}
              />
              <Image src={Pround} display={{ base: "block", lg: "none" }} />

              <Text
                fontSize={{ base: "16px", lg: "24px" }}
                color={{ base: "black", lg: "white" }} // Text color change for better visibility
                fontFamily={"Poppins"}
                fontWeight={"400"}
              >
                GLOBAL SOLUTIONS
              </Text>
            </Flex>

            <Heading
              mt={{ base: "12px", lg: "0" }}
              lineHeight={"66px"}
              fontSize={{ base: "48px", lg: "42px", xl: "52px" }}
              fontWeight={"600"}
              color={{ base: "black", lg: "white" }}
            >
              Migration{" "}
              <Text
                as="span"
                color={{ base: "rgba(34, 185, 116, 1)", lg: "white" }}
              >
                Consultation
              </Text>{" "}
              That Aims to Bring the World Closer
            </Heading>

            <Text
              lineHeight={{ base: "32px", lg: "26px" }}
              mt={2}
              fontFamily={"Poppins"}
              fontSize={"16px"}
              color={{ base: "black", lg: "white" }} // Paragraph text color change
              fontWeight={"400"}
            >
              At Migraid, we provide expert consultation services to help
              individuals and businesses navigate the complexities of global
              migration.
            </Text>

            <Flex gap={4} mt={4} flexWrap={"wrap"}>
              <CustomButton
                color={{ base: "rgba(34, 185, 116, 1)", lg: "white" }}
                showIcon={true}
                height="58px"
              >
                Book a Consultation
              </CustomButton>
              <CustomButton
                color={{ base: "rgba(34, 185, 116, 1)", lg: "white" }}
                showIcon={true}
                height="58px"
              >
                Learn More
              </CustomButton>
            </Flex>
          </Box>

          <Box
          zIndex={'1'}
            display={{ base: "none", lg: "block" }}
            w="100%"
            mt={{ base: 8, lg: 10 }}
            borderRadius="md"
          >
            <ConsultationForm></ConsultationForm>
          </Box>
        </Flex>
      </Box>

      <Box
        bg="rgba(2, 2, 38, 0.91)"
        py={{ base: 12, lg: 0 }}
        px={4}
        display={{ base: "block", lg: "none" }}
        w="100%"
      >
        <ConsultationForm></ConsultationForm>
      </Box>
    </>
  );
}

export default React.memo(HeroSection);

