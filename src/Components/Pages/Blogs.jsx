import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  IconButton,
  Grid,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { blogs } from "../../data/BlogsData";
import CustomButton from "../UI/CustomButton";
import Calender from "../../assets/images/Calender.png";
import user from "../../assets/images/user.png";
import Line from "../../assets/images/Line.png";
import blogsImage from "../../assets/images/blogImage.png";

export default function Blogs() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1280, // For screens 1024px and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For screens 768px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // For screens 480px and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box
          mx={{ base: 0, lg: 2 }}

          //  pl={{ base: 0, md: 2 }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Image w="30px" h="3px" src={Line}></Image>
            <Text
              color={"green"}
              fontFamily="'Poppins'"
              fontSize={{ base: "16px", lg: "18px" }}
            >
              INSIGHTS & UPDATES
            </Text>
          </Flex>

          <Heading
            color={"black"}
            fontSize={{ base: "1.6rem", lg: "2.2rem" }}
            fontWeight={"600"}
            fontFamily="'Plus Jakarta Sans'"
            textAlign={"center"}
          >
            Our Latest Blogs
          </Heading>
        </Box>
        <Box display={{ base: "none", md: "flex" }}>
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon fontSize={{ base: "24px", lg: "28px" }} />}
            onClick={() => sliderRef.current.slickPrev()}
            mr={4}
            borderRadius="full"
            boxSize={{ base: "40px", lg: "60px" }}
            color="rgba(34, 185, 116, 1)"
            bg="white"
            border={"1px solid rgba(34, 185, 116, 1)"}
            _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon fontSize={{ base: "24px", lg: "28px" }} />}
            onClick={() => sliderRef.current.slickNext()}
            borderRadius="full"
            // bg="white"
            boxSize={{ base: "40px", lg: "60px" }}
            color="rgba(34, 185, 116, 1)"
            bg="white"
            border={"1px solid rgba(34, 185, 116, 1)"}
            _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
          />
        </Box>
      </Flex>
      <Slider {...settings} ref={sliderRef}>
        {blogs.map((blog, index) => (
          <Flex mt={{ base: 6, lg: 8 }} key={index}>
            <Box
              mx={{ base: 0, lg: 2 }}
              p={4}
              bg="rgba(244, 244, 244, 1)"
              border="1px solid #e2e8f0"
              borderRadius="20px"
            >
              <Image
                w="100%"
                src={blogsImage}
                alt={blog.title}
                borderRadius="20px"
              />
              <Flex mt={4} gap={4}>
                <Flex gap={2} alignItems={"center"}>
                  <Image w="18px" h="18px" src={Calender}></Image>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize="sm"
                    color="rgba(17, 17, 17, 1)"
                  >
                    {blog.date}
                  </Text>
                </Flex>
                <Flex gap={2} alignItems={"center"}>
                  <Image w="18px" h="18px" src={user}></Image>

                  <Text
                    fontFamily={"Poppins"}
                    fontSize="sm"
                    color="rgba(17, 17, 17, 1)"
                  >
                    By {blog.author}
                  </Text>
                </Flex>
              </Flex>
              <Text
                fontFamily="'Plus Jakarta Sans'"
                mt={2}
                fontWeight="bold"
                fontSize="26px"
              >
                {blog.title}
              </Text>
              <Text
                mt={2}
                fontSize="sm"
                fontFamily={"Poppins"}
                color="rgba(17, 17, 17, 1)"
                isTruncated
              >
                {blog.description}
              </Text>

              <Box mt={4}>
                <CustomButton color="black" showIcon={true} height="50px">
                  Read More
                </CustomButton>
              </Box>
            </Box>
          </Flex>
        ))}
      </Slider>
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"center"}
        mt={{base:0,lg:8}}
      >
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon fontSize={{ base: "24px", lg: "28px" }} />}
          onClick={() => sliderRef.current.slickPrev()}
          mr={4}
          borderRadius="full"
          boxSize={{ base: "40px", lg: "60px" }}
          color="rgba(34, 185, 116, 1)"
          bg="white"
          border={"1px solid rgba(34, 185, 116, 1)"}
          _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon fontSize={{ base: "24px", lg: "28px" }} />}
          onClick={() => sliderRef.current.slickNext()}
          borderRadius="full"
          boxSize={{ base: "40px", lg: "60px" }}
          color="rgba(34, 185, 116, 1)"
          bg="white"
          border={"1px solid rgba(34, 185, 116, 1)"}
          _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
        />
      </Box>
    </>
  );
}
