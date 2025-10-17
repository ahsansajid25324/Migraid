import { Image, Box, Text } from "@chakra-ui/react";
import Arrow from "../../assets/icons/Arrow";
import Services from "../../assets/images/Services.png";

const Banner = () => {
  return (
    <Box
      position="relative"
      borderRadius={{ base: "18px", lg: "28px" }}
      overflow="hidden"
      mx={{ base: 4, lg: 8 }}
      mt={{ base: 6, lg: 12 }}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      py={{ base: 14, lg: 10 }}
    >
      <Image
        src={Services}
        alt="Airport Immigration"
        objectFit="cover"
        w="100%"
        filter="brightness(0.6)"
        position="absolute"
        top={0}
        left={0}
        h="100%"
        zIndex={1}
      />
      <Box
        position="relative"
        zIndex={2}
        w={{ base: "95%", md: "80%", lg: "50%" }}
        color="white"
        justifyItems={{ base: "left", lg: "initial" }}
        textAlign={{ base: "left", lg: "left" }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <Box
            h="3px"
            w={{ base: "24px", lg: "40px" }}
            bg="rgba(34, 185, 116, 1)"
            borderRadius="2px"
            mr={2}
          />

          <Text
            fontSize={{ base: "14px", lg: "16px" }}
            color="#FFFFF"
            fontWeight={"500"}
          >
            BOOK A CONSULTATION
          </Text>
          <Box
            h="3px"
            w={{ base: "24px", lg: "40px" }}
            bg="rgba(34, 185, 116, 1)"
            borderRadius="2px"
            ml={2}
          />
        </Box>
        <Box>
          <Box
            as="h1"
            fontWeight="700"
            fontSize={{ base: "26px", md: "3xl", lg: "3.2rem" }}
            lineHeight={{ base: "2.2rem", md: "3.5rem", lg: "4rem" }}
            mb={{ base: 2, lg: 4 }}
          >
            EMPOWERING EVERY
            <br />
            STEP OF YOUR
            <br />
            <Box as="span" color="white">
              IMMIGRATION JOURNEY
            </Box>
          </Box>
          <Text
            fontSize={{ base: "14px", lg: "16px" }}
            color="white"
            w={{ base: "95%", lg: "90%" }}
            mb={4}
          >
            Whether you’re applying for residency, finding local resources, or
            building a new life, our team provides the information, clarity, and
            support you need to succeed.
          </Text>

          <Box>
            <Box
              as="a"
              href="#consultation"
              bg="rgba(34, 185, 116, 1)"
              color="white"
              px={{ base: 4, lg: 8 }}
              py={{ base: 3, lg: 4 }}
              borderRadius={{ base: "28px", lg: "32px" }}
              fontWeight="600"
              fontSize={{ base: "14px", md: "lg" }}
              display="inline-flex"
              alignItems="center"
              boxShadow="md"
              _hover={{ bg: "rgba(34, 185, 116, 0.85)" }}
              transition="background 0.2s"
            >
              Book A Consultation
              <Box as="span" ml={2} display="flex" alignItems="center">
                <Arrow
                  color="#fff"
                  width={{ base: 16, lg: 20 }}
                  height={{ base: 16, lg: 20 }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
