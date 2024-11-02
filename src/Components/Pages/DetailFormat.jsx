import { Text, Heading, Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import Line from "../../assets/images/Line.png";
import CustomButton from "../UI/CustomButton";
import Consult from "../../assets/images/ConsultService.png";
const DetailFormat = ({
  title,
  SubTitle,
  margin,
  showValues,
  SubTitleMargin,
  btn,
}) => {
  return (
    <Box>
      {title ? (
        <Flex gap={3} alignItems={"center"}>
          <Image w="30px" h="3px" src={Line}></Image>
          <Text
            fontSize={"18px"}
            color={" rgba(34, 185, 116, 1)"}
            fontWeight={"500"}
          >
            {title}
          </Text>
        </Flex>
      ) : (
        <Image w="52px" h="52px" src={Consult}></Image>
      )}

      <Heading
        fontFamily="'Plus Jakarta Sans'"
        fontWeight={"500"}
        mt={SubTitleMargin}
      >
        {" "}
        {SubTitle}
      </Heading>
      <Text
        mt="10px"
        fontFamily="'Poppins'"
        fontSize={"16px"}
        fontWeight={"400"}
      >
        Migraid is a dedicated team of experienced paralegals, business
        consultants & life coaches that are committed to providing expert
        support and guidance to individuals navigating the complexities of
        immigration and resettlement processes. With a deep understanding of
        local US resources, we strive to empower our clients with accurate
        information and efficient assistance to achieve their relocation goals
        with confidence.
        <Text
          as="span"
          color="rgba(34, 185, 116, 1)"
          cursor="pointer"
          onClick={() => console.log("See more clicked")}
        >
          {" "}
          See more...
        </Text>
      </Text>

      {showValues ? (
        <Flex
          flexWrap={"wrap"}
          mt={6}
          columnGap={{ base: 4, lg: 6 }}
          rowGap={3}
        >
          <Box display="flex" gap={2} alignItems={"center"}>
            <Image w="52px" h="52px" src={Consult}></Image>
            <Text
              fontFamily="'Poppins'"
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight={"500"}
            >
              Our Missions
            </Text>
          </Box>
          <Box display="flex" gap={2} alignItems={"center"}>
            <Image w="52px" h="52px" src={Consult}></Image>
            <Text
              fontFamily="'Poppins'"
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight={"500"}
            >
              Our Values
            </Text>
          </Box>
        </Flex>
      ) : (
        ""
      )}

      <Box mt={margin}>
        <CustomButton
          showIcon={true}
          color="rgba(34, 185, 116, 1)"
          height="50px"
        >
          {btn}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default DetailFormat;
