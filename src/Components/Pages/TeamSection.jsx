import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";

import Line from "../../assets/images/Line.png";

import Hurr from "../../assets/images/hurr.JPG";
import Joseph from "../../assets/images/joseph.jpeg";
export const teamData = [
  {
    name: "Hurr Murtaza",
    role: "Immigration specialist",
    image: Hurr,
  },
  {
    name: "Joseph Soliz",
    role: "Immigration specialist",
    image: Joseph,
  },
];

const TeamSection = () => {
  return (
    <Flex
      bg="rgba(246, 246, 246, 1)"
      justifyContent="center"
      py={{ base: 8, lg: 20 }}
      flexDirection="column"
    >
      <Box mb={8}>
        <SectionHeading
          subcolor="black"
          heading="Team"
          color="rgba(34, 185, 116, 1)"
          subHeading={true}
          subHeadingTitle={"Meet Our Team"}
        />
      </Box>

      <Box maxW="1200px" mx="auto">
        <Grid
          px={{ base: 4, lg: 8 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={12}
          py={{ base: 0, lg: 6 }}
        >
          {teamData.map((member, index) => (
            <Box key={index} textAlign="center">
              <Image
                src={member.image}
                alt={member.name}
                borderRadius="xl"
                border="4px solid rgba(34, 185, 116, 1)"
                boxSize="300px"
                mx="auto"
                mb={4}
                objectFit="cover"
              />
              {/* Member Details */}
              <Flex flexDirection={"column"} justifyItems={"center"}>
                <Text fontWeight="bold" fontSize="lg" mb={3}>
                  {member.name}
                </Text>
                <Image m="auto" w="15%" h="2px" src={Line}></Image>
                <Text fontSize="sm" mt={3} color="gray.500">
                  {member.role}
                </Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default TeamSection;
