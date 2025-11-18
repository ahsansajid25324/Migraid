import React, { useState } from "react";
import { Box, Flex, Heading, Image, Button, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Line from "./../../assets/images/Line.png";
import "./../../App.css";
import img from "./../../assets/images/otherBg.png";
import Arrow from "../../assets/icons/Arrow";
import ConsultationModal from "./ConsultationModal";

function OtherPageHeroSection({ title, subtitle, descript, btn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <Box
        py={{ base: 20, lg: 8 }}
        bgImage={img}
        bgSize="cover"
        h={{ base: "auto", lg: "80vh" }}
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
          alignItems={"center"}
          py={{ base: 4 }}
          px={{ base: 4, lg: 12 }}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Box
            borderRadius="md"
            maxW={{ base: "auto", md: "600px", lg: "800px" }}
            color="white"
          >
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
              <Image w="28px" h="4px" src={Line} />

              <Text
                fontSize={{ base: "12px", lg: "16px" }}
                fontFamily={"Poppins"}
                fontWeight={"400"}
                color="rgba(34, 185, 116, 1)"
              >
                {title}
              </Text>
            </Flex>

            <Heading
              mt={{ base: "4px", lg: "0" }}
              lineHeight={{ base: "42px", lg: "66px" }}
              fontSize={{ base: "28px", lg: "42px", xl: "46px" }}
              fontWeight={"600"}
              color="white"
            >
              {subtitle}
            </Heading>

            <Text
              mt={2}
              fontFamily={"Poppins"}
              color="white"
              fontSize={{ base: "12px", lg: "16px" }}
            >
              {descript}
            </Text>

            <Flex
              gap={4}
              mt={{ base: 4, lg: 6 }}
              flexWrap={"wrap"}
              justifyContent={"center"}
            >
              <Button
                borderRadius="24px"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeight="medium"
                bg="rgba(34, 185, 116, 1)"
                color="white"
                p={{ base: 5, lg: 6 }}
                onClick={openModal}
                rightIcon={<Arrow />}
                _hover={{ bg: "rgba(34, 185, 116, 0.9)" }}
              >
                {btn ? btn : "Book a Free Intake"}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default OtherPageHeroSection;
