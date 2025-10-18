import { Text, Heading, Flex, Image, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Line from "../../assets/images/Line.png";
import Consult from "../../assets/images/ConsultService.png";
import CustomButton from "../UI/CustomButton";
const DetailFormat = ({
  title,
  SubTitle,
  margin,
  showValues,
  content,
  SubTitleMargin,
  btn,
  alwaysShowFullContent = false,
}) => {
  const [showFullText, setShowFullText] = useState(alwaysShowFullContent);

  // Define the full text
  const fullText = content
    ? content
    : "Migraid is a nonprofit legal aid and resettlement organization dedicated to supporting individuals and families through immigration and adjustment-of-status processes. Our team includes experienced paralegals, accredited immigration advisers, community navigators, and life-coaches who work together to provide practical, compassionate assistance — from paperwork and legal referrals to post-arrival integration support.";

  const truncatedTextBase = `${fullText.substring(0, 200)}...`; // For smaller screens
  const truncatedTextLg = `${fullText.substring(0, 400)}...`; // For larger screens

  return (
    <Box>
      {title ? (
        <Flex gap={3} alignItems={"center"}>
          <Image w="30px" h="3px" src={Line} alt="Line separator" />
          <Text
            fontSize={{ base: "14px", lg: "16px" }}
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
        fontSize={{ base: "24px", lg: "28px" }}
        fontWeight={"500"}
        mt={SubTitleMargin}
      >
        {SubTitle}
      </Heading>

      {/* Container for text with a fade-out effect */}
      <Box position="relative" mt="10px" color="#444">
        <Text>
          {showFullText
            ? fullText
            : window.innerWidth < 768
            ? truncatedTextBase
            : truncatedTextLg}
        </Text>

        {/* Fade-out overlay */}
        {!showFullText && !alwaysShowFullContent && (
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

      {!alwaysShowFullContent && (
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
      )}

      {showValues && (
        <Flex
          flexWrap={"wrap"}
          mt={6}
          flexDirection={"column"}
          columnGap={{ base: 4, lg: 6 }}
          rowGap={3}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              marginInlineEnd={"auto"}
              gap={2}
            >
              <Image w="52px" h="52px" src={Consult} alt="Consult icon" />
              <Text fontSize={{ base: "16px", lg: "20px" }} fontWeight={"500"}>
                Our Missions
              </Text>
            </Box>

            <Box>
              <Text color="#444">
                To provide free and low-cost immigration guidance and legal
                support to individuals and families, empowering them with
                accurate information, compassionate advocacy, and connection to
                community resources.
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              marginInlineEnd={"auto"}
              gap={2}
            >
              <Image w="52px" h="52px" src={Consult} alt="Consult icon" />
              <Text fontSize={{ base: "16px", lg: "20px" }} fontWeight={"500"}>
                Our Values
              </Text>
            </Box>

            <Box>
              <Text color="#444">
                To provide free and low-cost immigration guidance and legal
                support to individuals and families, empowering them with
                accurate information, compassionate advocacy, and connection to
                community resources.
              </Text>
            </Box>
          </Box>
        </Flex>
      )}

      <Box mt={margin}>
        <CustomButton showIcon={true} color="rgba(34, 185, 116, 1)" p={5}>
          {btn}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default DetailFormat;
