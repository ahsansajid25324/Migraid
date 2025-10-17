import { Text, Heading, Flex, Image, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Line from "../../assets/images/Line.png";
import Consult from "../../assets/images/ConsultService.png";
import CustomButton from "../UI/CustomButton";
import img from "../../assets/images/01.png";
const DetailFormat = ({
  title,
  SubTitle,
  margin,
  showValues,
  SubTitleMargin,
  btn,
}) => {
  const [showFullText, setShowFullText] = useState(false);

  // Define the full text
  const fullText = `
    Migraid is a dedicated team of experienced paralegals, business
    consultants & life coaches that are committed to providing expert
    support and guidance to individuals navigating the complexities of
    immigration and resettlement processes. With a deep understanding of
    local US resources, we strive to empower our clients with accurate
    information and efficient assistance to achieve their relocation goals
    with confidence.
  `;

  const truncatedTextBase = `${fullText.substring(0, 200)}...`; // For smaller screens
  const truncatedTextLg = `${fullText.substring(0, 400)}...`; // For larger screens

  return (
    <Box>
      {title ? (
        <Flex gap={3} alignItems={"center"}>
          <Image w="30px" h="3px" src={Line} alt="Line separator" />
          <Text
            fontSize={{base:"14px",lg:"18px"}}
            color={"rgba(34, 185, 116, 1)"}
            fontWeight={"500"}
          >
            {title}
          </Text>
        </Flex>
      ) : (
        <Image w="52px" h="52px" src={Consult} alt="Consult service icon" />
      )}

      <Heading
        fontFamily="'Plus Jakarta Sans'"
        fontWeight={"500"}
        mt={SubTitleMargin}
      >
        {SubTitle}
      </Heading>

      {/* Container for text with a fade-out effect */}
      <Box
        position="relative"
        mt="10px"
        fontSize={"16px"}
        lineHeight={"30px"}
        fontWeight={"500"}
        color={"#4A4A4A"}
      >
        <Text>
          {showFullText
            ? fullText
            : window.innerWidth < 768
            ? truncatedTextBase
            : truncatedTextLg}
        </Text>

        {/* Fade-out overlay */}
        {!showFullText && (
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height={{ base: "30px", lg: "50px" }}
            bgGradient="linear(to-t, white, rgba(255, 255, 255, 0))"
          />
        )}
      </Box>

      <Button
        onClick={() => setShowFullText(!showFullText)}
        color="rgba(34, 185, 116, 1)"
        variant="link"
        mt="5px"
        colorScheme="green"
        _focus={{ boxShadow: "none" }}
        _active={{ color: "rgba(34, 185, 116, 1)" }}
      >
        {showFullText ? "See less" : "See more"}
      </Button>

      {showValues && (
        <Flex
          flexWrap={"wrap"}
          mt={6}
          columnGap={{ base: 4, lg: 6 }}
          rowGap={3}
        >
          <Box display="flex" gap={2} alignItems={"center"}>
            <Image w="52px" h="52px" src={Consult} alt="Consult icon" />
            <Text
              fontFamily="'Poppins'"
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight={"500"}
            >
              Our Missions
            </Text>
          </Box>
          <Box display="flex" gap={2} alignItems={"center"}>
            <Image w="52px" h="52px" src={Consult} alt="Consult icon" />
            <Text
              fontFamily="'Poppins'"
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight={"500"}
            >
              Our Values
            </Text>
          </Box>
        </Flex>
      )}

      <Box mt={margin}>
        <CustomButton
          showIcon={true}
          color="rgba(34, 185, 116, 1)"
          height="50px"
        >
          {btn}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default DetailFormat;
