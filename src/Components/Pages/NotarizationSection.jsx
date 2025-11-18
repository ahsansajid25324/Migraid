import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import Consult from "../../assets/images/ConsultService.png";

import Community from "../../assets/images/community.png";
import Access from "../../assets/images/access.png";
import Expert from "../../assets/images/valuesBg.png";
import Line from "../../assets/images/Line.png";
const values = [
  {
    title: "Book Appointment",
    img: Consult,
    description: "Choose your preferred time with a certified public notary.",
  },
  {
    title: "Pay Securely",
    img: Access,
    description: "Confirm your booking with fully encrypted payment.",
  },
  {
    title: "Meet on Teams",
    img: Community,
    description:
      "Join your secure Microsoft Teams session to complete notarization.",
  },
];

const NoatrizationSection = () => {
  const borderColor = useColorModeValue("#E5E7EB", "gray.700");
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation for value cards
  const cardRefs = useRef(values.map(() => React.createRef()));
  const [cardInViews, setCardInViews] = useState(values.map(() => false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardInViews((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <Box
      as="section"
      flexDirection="column"
      bgImage={Expert}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box py={{ base: 6, lg: 16 }} px={{ base: 4, lg: 8 }}>
        <Flex align="center" gap={2} ref={headingRef}>
          <Image src={Line} w="24px" h="3px"></Image>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={"rgba(34, 185, 116, 1)"}
              fontWeight={"500"}
            >
              SECURE 3 - STEP PROCESS
            </Text>
          </motion.div>
        </Flex>
        <Box ref={descRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Heading
              fontSize={{ base: "20px", lg: "28px" }}
              fontWeight={"600"}
              mt={2}
              maxW="700px"
            >
              How It Works
            </Heading>
          </motion.div>
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr  " }}
          gap={{ base: 4, lg: 6 }}
          mt={{ base: 6, lg: 8 }}
        >
          {values.map((val, idx) => (
            <Box ref={cardRefs.current[idx]} key={val.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  cardInViews[idx]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
              >
                <Flex
                  alignItems={"center"}
                  bg="transparent"
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="12px"
                  p={4}
                  gap={4}
                  flexDirection={{ base: "column", md: "row" }}
                  boxShadow="sm"
                  flex={1}
                >
                  <Image
                    marginInlineEnd="auto"
                    w="52px"
                    h="52px"
                    src={val?.img}
                  />
                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "18px", lg: "20px" }}
                      fontWeight={500}
                      mb={3}
                    >
                      {val.title}
                    </Heading>
                    <Text color="#444">{val.description}</Text>
                  </Box>
                </Flex>
              </motion.div>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NoatrizationSection;
