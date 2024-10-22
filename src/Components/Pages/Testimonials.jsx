import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Box, Image, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { reviews } from "../../data/TestimonialsData";
import "./../../index.css";
import TestLogo from "./../../assets/images/TestLogo.png";
const Testimonials = () => {
  const splideRef = useRef(null);

  return (
    <Box as="section" pt={8}>
      <Box className="slider-container" mx="auto">
        <Splide
          ref={splideRef}
          options={{
            perPage: 2,
            autoplay: true,
            speed: 1000,
            rewind: true,
            gap: "20px",
            rewindByDrag: true,
            pagination: false,
            arrows: false,
            breakpoints: {
              768: {
                perPage: 1,
              },
              992: {
                perPage: 2,
              },
              1280: {
                perPage: 2,
              },
            },
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <Flex
                gap={8}
                p={6}
                alignItems={"center"}
                flexDirection={{ base: "column", xl: "row" }}
                justifyContent={"center"}
              >
                <Box w={{ base: "100%", xl: "55%" }}>
                  <Image
                    src={review.image}
                    w="100%"
                    h="30vh"
                    alt=""
                    borderRadius="20px"
                  />
                </Box>
                <Box w="100%">
                  <Image
                    mx={{ base: "auto", md: "0" }}
                    src={TestLogo}
                    w="64px"
                    h="64px"
                    mb={2}
                  ></Image>
                  <Text fontSize="md" mb={2}>
                    {review.text}
                  </Text>
                  <Text mt="2" fontSize="lg" fontWeight={"600"}>
                    {review.name}
                  </Text>
                  <Text
                    color="rgba(127, 127, 127, 1)"
                    fontSize="md"
                    fontWeight={"600"}
                  >
                    {review.position}
                  </Text>
                </Box>
              </Flex>
            </SplideSlide>
          ))}
        </Splide>

        <Flex justifyContent="center" mt={8} mb={{ base: 8, lg: 20 }}>
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft fontSize={"28px"} />} // Set the font size for the icon
            onClick={() => splideRef.current.splide.go("-1")} // Decrease slide by 1
            mr={4}
            borderRadius="full"
            boxSize="60px"
            bg="white"
            color="rgba(34, 185, 116, 1)"
            _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight fontSize={"28px"} />}
            onClick={() => splideRef.current.splide.go("+1")} // Increase slide by 1
            borderRadius="full"
            bg="white"
            boxSize="60px"
            color="rgba(34, 185, 116, 1)"
            _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
