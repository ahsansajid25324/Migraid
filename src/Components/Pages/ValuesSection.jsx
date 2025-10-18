import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import Consult from "../../assets/images/ConsultService.png";

import Line from "../../assets/images/Line.png";
const values = [
  {
    title: "Client-Centered & Compassionate Help",
    description:
      "We listen with empathy and treat every individual and family with respect, dignity, and care. Our approach ensures that every client feels heard, supported, and guided through every step.",
  },
  {
    title: "Accessibility: Multilingual & Low-Cost Options",
    description:
      "We listen with empathy and treat every individual and family with respect, dignity, and care. Our approach ensures that every client feels heard, supported, and guided through every step.",
  },
  {
    title: "Integrity & Confidentiality",
    description:
      "Your story and documents are handled with absolute discretion and honesty. We uphold transparency, ethics, and confidentiality in every client relationship.",
  },
  {
    title: "Community Partnership & Education",
    description:
      "We collaborate with local organizations, volunteers, and advocates to expand our reach. Through workshops and outreach, we empower immigrants with knowledge and confidence.",
  },
];

const ValuesSection = () => {
  const cardBg = useColorModeValue("#fff", "gray.800");
  const borderColor = useColorModeValue("#E5E7EB", "gray.700");
  const sectionBg = useColorModeValue("#fafbfc", "gray.900");
  return (
    <Box as="section" bg={sectionBg}>
      <Box py={{ base: 6, lg: 16 }} px={{ base: 4, lg: 8 }}>
        <Flex align="center" gap={2}>
          <Image src={Line} w="24px" h="3px"></Image>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color={"rgba(34, 185, 116, 1)"}
            fontWeight={"500"}
          >
            CORE VALUES
          </Text>
        </Flex>
        <Text fontSize={{ base: "12px", lg: "14px" }} mt={2} maxW="700px">
          We center people — not profit. Our services prioritize safety,
          dignity, and a realistic pathway to a stable life in the U.S.
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 4, lg: 6 }}
          mt={{ base: 6, lg: 8 }}
        >
          {values.map((val, idx) => (
            <Flex
              key={val.title}
              alignItems={"center"}
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="12px"
              p={4}
              gap={4}
              flexDirection={{ base: "column", md: "row" }}
              boxShadow="sm"
              flex={1}
            >
              <Image marginInlineEnd="auto" w="52px" h="52px" src={Consult} />

              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "18px", lg: "20px" }}
                  fontWeight={500}
                  mb={3}
                >
                  {val.title}
                </Heading>
                <Text color="#444">{val.description}</Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ValuesSection;
