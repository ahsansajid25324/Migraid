import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Line from "../../assets/images/Line.png";
const SectionHeading = ({
  color,
  subcolor,
  heading,
  subHeading,
  subHeadingTitle,
}) => {
  return (
    <Box>
      <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
        <Image w="30px" h="3px" src={Line}></Image>
        <Text
          fontFamily={"Poppins"}
          color={color}
          fontSize={{ base: "16px", lg: "18px" }}
        >
          {heading}
        </Text>
        <Image w="30px" h="3px" src={Line}></Image>
      </Flex>

      <Heading
        color={subcolor}
        fontSize={{ base: "1.6rem", lg: "2.2rem" }}
        fontWeight={"600"}
        mt={2}
        textAlign={"center"}
        fontFamily="'Plus Jakarta Sans'"
      >
        {subHeadingTitle}
      </Heading>

      {subHeading ? (
        <Heading
          mx="auto"
          mt="8px"
          textAlign={"center"}
          fontFamily="'Poppins'"
          color=" rgba(17, 17, 17, 1)"
          fontSize={{ base: "18px", lg: "16px" }}
          fontWeight={"400"}
          w={{ base: "90%", md: "70%", lg: "80%" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          veritatis facilis debitis veritatis facilis debitis
        </Heading>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SectionHeading;
