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
            <SplideSlide key={review.id} >
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
                    w="52px"
                    h="52px"
                    mb={2}
                  ></Image>
                  <Text fontFamily={"Poppins"} fontSize="md" mb={2}>
                    {review.text}
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
                    mt="2"
                    fontSize="lg"
                    fontWeight={"600"}
                  >
                    {review.name}
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
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
            icon={<FaChevronLeft fontSize={{ base: "24px", lg: "28px" }} />}
            onClick={() => splideRef.current.splide.go("-1")}
            mr={4}
            borderRadius="full"
            boxSize={{ base: "40px", lg: "60px" }}
            bg="rgba(2, 2, 38, 1)"
            color="white"
            _hover={{ bg: "rgba(2, 2, 38, 20)", color: "white" }}
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight fontSize={{ base: "24px", lg: "28px" }} />}
            onClick={() => splideRef.current.splide.go("+1")}
            borderRadius="full"
            color="white"
            boxSize={{ base: "40px", lg: "60px" }}
            bg="rgba(34, 185, 116, 1)"
            _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
