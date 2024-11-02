import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import img from "./../../assets/images/HeroBg.png";

import DetailFormat from "./DetailFormat";
import SectionHeading from "./SectionHeading";

function AnswerQuestionSection() {
  return (
    <Box
      bgImage={img}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      py={{ base: 8, lg: 20 }}
      px={{ base: 4, lg: 12 }}
    >
      <Flex justifyContent={"center"} textAlign={"center"}>
        <SectionHeading
          subcolor="white"
          heading="CONNECT WITH US"
          color="white"
        ></SectionHeading>
      </Flex>
      <Flex mx="auto">
        <Grid
          mt={{ base: 8, lg: 12 }}
          gap={8}
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        >
          <Box bg="white" p={4} borderRadius={"20px"}>
            <DetailFormat
              SubTitle="About Migraid"
              margin={12}
              SubTitleMargin={2}
              btn="Pay by Questions"
            ></DetailFormat>
          </Box>
          <Box p={4} borderRadius={"20px"} bg="white">
            <DetailFormat
              SubTitleMargin={2}
              margin={12}
              btn="Book a Consultation"
              SubTitle="About Migraid"
            ></DetailFormat>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
}

export default AnswerQuestionSection;
