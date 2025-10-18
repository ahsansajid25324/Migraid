import DetailFormat from "./DetailFormat";
import Services from "../../assets/images/anty.png";

import { Flex, Box, Image } from "@chakra-ui/react";
const ServicesSection = () => {
  return (
    <Flex
      h="auto"
      py={{ base: 8, lg: 20 }}
      px={{ base: 4, lg: 12 }}
      alignItems="center"
      bg="#ffff"
      justifyContent={"space-between"}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box w={{ base: "100%", lg: "50%" }}>
        <DetailFormat
          title="EVENTS & CLINICS"
          margin="20px"
          alwaysShowFullContent={true}
          SubTitle="Free community clinics & workshops"
          btn="See Upcoming Events"
          content="We run recurring free legal clinics and workshops. Sign up for the next session or request an outreach visit for your community group. Events include naturalization clinics, DACA renewal help, and know-your-rights sessions."
        ></DetailFormat>
      </Box>
      <Box w={{ base: "100%", lg: "42%" }} mt={{ base: 6, lg: 0 }}>
        <Image src={Services} />
      </Box>
    </Flex>
  );
};

export default ServicesSection;
