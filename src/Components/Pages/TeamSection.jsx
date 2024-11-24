import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import { teamData } from "../../data/TeamData";

import Line from "../../assets/images/Line.png";

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

      <Grid
            px={{ base: 4, lg: 12 }}

        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        py={{base:0,lg:6}}
      >
        {teamData.map((member, index) => (
          <Box   key={index} textAlign="center" py={{ base: 4, lg: 0 }} >
            <Image
              src={member.image}
              alt={member.name}
              borderRadius="full"
              border="2px solid rgba(34, 185, 116, 1)"
              boxSize="160px"
              mx="auto"
              p={2}
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
    </Flex>
  );
};

export default TeamSection;
