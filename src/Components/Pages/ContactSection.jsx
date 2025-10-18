import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import WLine from "../../assets/images/WLine.png";
import CustomButton from "../UI/CustomButton";
import contactBg from "../../assets/images/contactBg.png";
const ContactSection = ({ showY }) => {
  return (
    <Flex
      position="relative"
      bgImage={contactBg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius={{ base: "16px", lg: "20px" }}
      mx={{ base: 4, lg: 12 }}
      mb={12}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 4, md: 6 }}
    >
      <Box px={{ base: 4, lg: 8 }} py={{ base: 6, lg: 8 }}>
        <Flex alignItems="center" gap={2}>
          <Image w="30px" h="3px" src={WLine} />
          <Text color="white" fontSize={{ base: "14px", lg: "16px" }}>
            VOLUNTEER & DONATE
          </Text>
        </Flex>

        <Heading
          color="white"
          fontSize={{ base: "1.4rem", lg: "2.2rem" }}
          fontWeight="600"
          mt={2}
        >
          Help us serve more families
        </Heading>

        <Text maxW={"900px"} mt="8px" color="rgba(255, 255, 255, 1)" w="95%">
          We rely on volunteers, pro bono lawyers, and donors to keep services
          free or affordable. Support our work by donating, volunteering as a
          community navigator, or offering pro bono legal time.
        </Text>
        <Box mt={4} display="flex" gap={4} flexWrap={"wrap"}>
          <CustomButton
            invertHoverColors={true}
            p={5}
            showBorder={true}
            color="white"
            showIcon={true}
          >
            Donate
          </CustomButton>
          <CustomButton
            invertHoverColors={true}
            p={5}
            showBorder={true}
            color="white"
            showIcon={true}
          >
            Volunteer
          </CustomButton>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactSection;
