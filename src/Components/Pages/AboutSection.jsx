import React from "react";

import { Box, Image, Flex, Text, Grid } from "@chakra-ui/react";
import PImage from "../../assets/images/Person.png";
import Consult from "../../assets/images/ConsultService.png";
import DetailFormat from "./DetailFormat";
function AboutSection() {
  return (
    <Flex
      py={{ base: 8, lg: 20 }}
      px={{ base: 4, lg: 12 }}
      alignItems="center"
      justifyContent={"space-between"}
      flexDirection={{ base: "column-reverse", lg: "row" }}
    >
      

      <Grid
        templateColumns={ "repeat(2, 1fr)" }
        w={{ base: "100%", lg: "42%" }}
        mt={{ base: 8, lg: 0 }}
        gap={4}
      >
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <Box flex="1">
            <Image w="100%" borderRadius="20px" src={PImage} />
          </Box>
          <Box
            mt={4}
            alignItems="center"
            bg="white"
            justifyContent="center"
            border="1px solid rgba(34, 185, 116, 1)"
            borderRadius="20px"
            gap={2}
            p={{ base: 2, lg: 4 }}
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <Image w="52px" h="52px" src={Consult} />
            <Text fontSize={{ base: "1rem", lg: "1.2rem" }} fontWeight="500">
              Consultation Services
            </Text>
          </Box>
        </Box>

        {/* Right Section with Experience and Image */}
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <Box
            mb={4}
            flex="1"
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            border="1px solid rgba(34, 185, 116, 1)"
            borderRadius="20px"
            gap={2}
            p={{ base: 2, lg: 4 }}
            textAlign="center"
            color="white"
            bg="rgba(34, 185, 116, 1)"
          >
            <Text fontWeight="500">
              <Text
                as="span"
                fontSize={{ base: "2rem", lg: "3rem" }}
                fontWeight="bold"
              >
                25
              </Text>
              <Text as="span" fontSize={{ base: "1rem", lg: "1.2rem" }} ml={1}>
                / Years of Experience
              </Text>
            </Text>
          </Box>
          <Box flex="1">
            <Image w="100%" borderRadius="20px" src={PImage} />
          </Box>
        </Box>
      </Grid>

      <Box w={{ base: "100%", lg: "50%" }}>
        <DetailFormat
          title="WHO WE ARE"
          margin="6"
          showValues={true}
          btn="Read More About Us"
          SubTitle="About Migraid"
        ></DetailFormat>
      </Box>
    </Flex>
  );
}

export default AboutSection;
