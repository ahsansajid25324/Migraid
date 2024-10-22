import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Image, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import TestLogo from "./../../assets/images/TestLogo.png";

export default function Blogs() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  const blogs = [
    {
      title: "Navigating Visa Complexities in 2024",
      date: "October 19, 2023",
      author: "Admin",
      image: "path_to_image_1", // Replace with your image URLs
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Understanding Global Work Permits",
      date: "October 18, 2023",
      author: "Admin",
      image: "path_to_image_2",
      description:
        "The quic m is simply dummy text of the prik brown fox jumps over the lazy dog.",
    },
    {
      title: "How to Apply for Schengen Visa in 2024",
      date: "October 18, 2023",
      author: "Admin",
      image: "path_to_image_3",
      description:
        "The quic m is simply dummy text of the prik brown fox jumps over the lazy dog.",
    },
    {
      title: "Navigating Visa Complexities in 2024",
      date: "October 19, 2023",
      author: "Admin",
      image: "path_to_image_1", // Replace with your image URLs
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Understanding Global Work Permits",
      date: "October 18, 2023",
      author: "Admin",
      image: "path_to_image_2",
      description:
        "The quic m is simply dummy text of the prik brown fox jumps over the lazy dog.",
    },
    {
      title: "How to Apply for Schengen Visa in 2024",
      date: "October 18, 2023",
      author: "Admin",
      image: "path_to_image_3",
      description:
        "The quic m is simply dummy text of the prik brown fox jumps over the lazy dog.",
    },
    // Add more blogs as needed
  ];

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {blogs.map((blog, index) => (
          <>
            <Flex mt={8}>
              <Box
                p={4}
                mx={2}
                key={index}
                border="1px solid #e2e8f0"
                borderRadius="md"
                boxShadow="md"
              >
                <Image src={TestLogo} alt={blog.title} borderRadius="md" />
                <Flex mt={2} justify="space-between">
                  <Text fontSize="sm" color="gray.500">
                    {blog.date}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    By {blog.author}
                  </Text>
                </Flex>
                <Text mt={2} fontWeight="bold" fontSize="lg">
                  {blog.title}
                </Text>
                <Text mt={2} fontSize="sm" noOfLines={3}>
                  {blog.description}
                </Text>
                <Button
                  mt={3}
                  size="sm"
                  colorScheme="teal"
                  rightIcon={<ChevronRightIcon />}
                >
                  Read More
                </Button>
              </Box>
            </Flex>
          </>
        ))}
      </Slider>
      <Flex justifyContent="center" mt={8} mb={{ base: 8, lg: 20 }}>
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon fontSize="28px" />}
          onClick={() => sliderRef.current.slickPrev()}
          mr={4}
          borderRadius="full"
          boxSize="60px"
          bg="white"
          color="rgba(34, 185, 116, 1)"
          _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon fontSize="28px" />}
          onClick={() => sliderRef.current.slickNext()}
          borderRadius="full"
          bg="white"
          boxSize="60px"
          color="rgba(34, 185, 116, 1)"
          _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
        />
      </Flex>
    </>
  );
}
