import React from "react";
import { Box, Flex, Text, Image, Heading, Grid } from "@chakra-ui/react";

import ValueBg from "../../assets/images/workBg.png";
import Line from "../../assets/images/Line.png";

import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";

const steps = [
  {
    image: Image1,
    description: "Book a free intake (30 min)",
  },
  {
    image: Image2,
    description:
      "Get a personalized plan and fee options (sliding scale / pro bono if eligible)",
  },
  {
    image: Image3,
    description:
      "Ongoing support document prep, referrals, and follow-up appointments",
  },
  {
    image: Image4,
    description: "Community resources & integration support",
  },
];

const WorkSection = () => {
  return (
    <Box
      as="section"
      bgImage={ValueBg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box pt={{ base: 6, lg: 16 }} pb={{ base: 0, lg: 16 }} px={{ base: 4, lg: 8 }}>
        <Flex align="center" gap={2}>
          <Image src={Line} w="24px" h="3px" />
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color={"rgba(34, 185, 116, 1)"}
            fontWeight={"500"}
          >
            OUR PROCESS
          </Text>
        </Flex>
        <Heading fontSize={{ base: "22px", lg: "28px" }} mt={2} maxW="700px">
          How We Work
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
          mt={{ base: 6, lg: 8 }}
          gap={{ base: 4, lg: 0 }}
        >
          {steps.map((step, idx) => (
            <Flex key={idx} direction="column">
              <Image
                src={step.image}
                w={{ base: 12, lg: 16 }}
                h={{ base: 12, lg: 16 }}
                mb={4}
              />
              <Text textAlign="left" maxW={"300px"} color="#444">
                {step.description}
              </Text>
              {idx < steps.length - 1 && (
                <Box
                  display={{ base: "none", md: "block" }}
                  position="absolute"
                  right={0}
                  top="50%"
                  transform="translateY(-50%)"
                  h="80px"
                  w="1px"
                  bg="#C6E9D5"
                  zIndex={1}
                />
              )}
            </Flex>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkSection;
