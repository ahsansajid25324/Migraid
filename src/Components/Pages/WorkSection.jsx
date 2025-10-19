import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Flex, Text, Image, Heading, Grid } from "@chakra-ui/react";

import ValueBg from "../../assets/images/workBg.png";
import Line from "../../assets/images/Line.png";

import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";

const steps = [
  {
    image: Image1,
    description: "Book a free intake (30 min)",
  },
  {
    image: Image2,
    description:
      "Get a personalized plan and fee options (sliding scale / pro bono if eligible)",
  },
  {
    image: Image3,
    description:
      "Ongoing support document prep, referrals, and follow-up appointments",
  },
  {
    image: Image4,
    description: "Community resources & integration support",
  },
];

const WorkSection = () => {
  // Animation for heading and subtitle
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: subtitleRef, inView: subtitleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  // Animation for step cards
  const cardRefs = useRef(steps.map(() => React.createRef()));
  const [cardInViews, setCardInViews] = useState(steps.map(() => false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardInViews(prev => {
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
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <Box
      as="section"
      bgImage={ValueBg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box pt={{ base: 6, lg: 16 }} pb={{ base: 0, lg: 16 }} px={{ base: 4, lg: 8 }}>
        <Flex align="center" gap={2} ref={headingRef}>
          <Image src={Line} w="24px" h="3px" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={"rgba(34, 185, 116, 1)"}
              fontWeight={"500"}
            >
              OUR PROCESS
            </Text>
          </motion.div>
        </Flex>
        <Box ref={subtitleRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Heading fontSize={{ base: "22px", lg: "28px" }} mt={2} maxW="700px">
              How We Work
            </Heading>
          </motion.div>
        </Box>
        <Grid
          templateColumns={{ base: "1fr" ,md: `repeat(${steps.length * 2 - 1}, 1fr)` }}
          mt={{ base: 6, lg: 8 }}
          gap={{ base: 4, lg: 0 }}
        >
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" ref={cardRefs.current[idx]}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={cardInViews[idx] ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
                >
                  <Flex direction="column" align="center" justify="center">
                    <Image
                      src={step.image}
                      w={{ base: 12, lg: 16 }}
                      h={{ base: 12, lg: 16 }}
                      mb={4}
                    />
                    <Text textAlign="center" maxW={"240px"} color="#444">
                      {step.description}
                    </Text>
                  </Flex>
                </motion.div>
              </Box>
              {idx < steps.length - 1 && (
                <Box
                    justifySelf="center"
                  alignSelf="center"
                  h="80px"
                  w="1px"
                  bg="#22B974"
                  borderRadius="full"
                />
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkSection;
