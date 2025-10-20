import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Grid,
  Button,
  Flex,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./splide-progress.css";
import Expert from "../../assets/images/expertBg.png";

import Line from "../../assets/images/Line.png";
import Arrow from "../../assets/icons/Arrow";
import ConsultationModal from "./ConsultationModal";

const ExpertSections = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const splideRef = useRef(null);
  // Service cards data
  const services = [
    {
      title: "Free Intake & Case Assessment",
      description:
        "30-minute screening to assess your case, set priorities, and suggest next steps.",
    },
    {
      title: "Family-Based Immigration",
      description:
        "Help with family petitions, consular processing, fiancé(e) visas, and reunification.",
    },
    {
      title: "Naturalization & Citizenship",
      description:
        "Support for naturalization, N-400 forms, interview prep, and study materials.",
    },
    {
      title: "Asylum & Humanitarian Protection",
      description:
        "Screening and referrals for asylum seekers and humanitarian legal support.",
    },
    {
      title: "Deportation Defense Referrals",
      description:
        "Assessment and referral to trusted pro bono or low-cost immigration attorneys.",
    },
    {
      title: "DACA & Youth Services",
      description:
        "DACA renewals, eligibility checks, and support for youth exploring status options.",
    },
    {
      title: "Community Clinics & Workshops",
      description:
        "Free clinics for forms, naturalization workshops, and know-your-rights sessions.",
    },
    {
      title: "Document Preparation & Filing Support",
      description:
        "Help preparing forms, organizing documents, and filing applications.",
    },
    {
      title: "Refugee & Newcomer Resettlement Support",
      description:
        "Guidance on housing, benefits, jobs, school, and local resources.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = services.length;

  // Animation for service cards
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation for mobile cards
  const { ref: mobileCardsRef } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <Box
        bgImage={Expert}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        px={{ base: 4, lg: 8 }}
      >
        <Flex
          py={{ base: 6, lg: 12 }}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box>
            <Flex align="center" gap={2} ref={headingRef}>
              <Image src={Line} w="24px" h="3px" />
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
                  EXPERT GUIDANCE
                </Text>
              </motion.div>
            </Flex>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "24px", lg: "32px" }}
                mt={{ base: 0, lg: 2 }}
                color="#fff"
              >
                Our Services
              </Heading>
            </motion.div>
            <Box ref={descRef}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Text
                  fontSize={{ base: "12px", lg: "14px" }}
                  color="#ffff"
                  mt={2}
                  maxW="700px"
                >
                  We specialize in person-focused services. If you're an
                  individual or family seeking help, here's how we can support
                  you.
                </Text>
              </motion.div>
            </Box>
          </Box>
          <Box
            marginInlineEnd={{ base: "auto", lg: "0" }}
            mt={{ base: 4, lg: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                borderRadius="24px"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeight="medium"
                bg="rgba(34, 185, 116, 1)"
                color="white"
                p={{ base: 5, lg: 6 }}
                rightIcon={<Arrow />}
                _hover={{ bg: "rgba(34, 185, 116, 0.9)" }}
                onClick={openModal}
              >
                Book a Free Intake
              </Button>
            </motion.div>
          </Box>
        </Flex>

        {/* Mobile view with Splide carousel */}
        <Box
          display={{ base: "block", lg: "none" }}
          pb={6}
          position="relative"
          ref={mobileCardsRef}
          px={0}
          mx={0}
        >
          <Box
            className="slider-container"
            mx="auto"
            maxW="100%"
            overflow="visible"
          >
            <Splide
              ref={splideRef}
              options={{
                perPage: 1,
                perMove: 1,
                autoplay: true,
                speed: 1000,
                rewind: true,
                gap: "10px",
                rewindByDrag: true,
                pagination: false,
                arrows: false,
                focus: 0,
                trimSpace: false,
                width: "100%",
                fixedWidth: "75%",
                start: 0,
                type: "slide",
                classes: {
                  slide: "splide__slide",
                  page: "splide__pagination__page",
                },
              }}
              onMoved={(splide, newIndex) => {
                setCurrentSlide(newIndex);
              }}
              onMounted={(splide) => {
                setCurrentSlide(splide.index);
              }}
            >
              {services.map((service, index) => (
                <SplideSlide key={index}>
                  <Box
                    bg={
                      currentSlide === index
                        ? "rgba(34, 185, 116, 1)"
                        : "rgba(34,185, 116, 0.8)"
                    }
                    height={"100%"}
                    borderRadius="16px"
                    transition="all 0.4s ease "
                    transform={
                      currentSlide === index ? "scale(1)" : "scale(0.98)"
                    }
                    opacity={currentSlide === index ? 1 : 0.95}
                  >
                    <Box
                      width="100%"
                      height="100%"
                      color="#ffff"
                      p={4}
                      textAlign={"left"}
                      display="flex"
                      flexDirection="column"
                      boxShadow={
                        currentSlide === index
                          ? "0px 8px 16px rgba(0, 0, 0, 0.2)"
                          : "0px 4px 8px rgba(0, 0, 0, 0.1)"
                      }
                      border={
                        currentSlide === index
                          ? "2px solid rgba(255, 255, 255, 0.8)"
                          : "1px solid rgba(34, 185, 116, 0.5)"
                      }
                      borderRadius="16px"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                          descInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <Heading
                          as="h3"
                          fontSize="18px"
                          fontWeight={currentSlide === index ? "600" : "500"}
                          mb={3}
                        >
                          {service.title}
                        </Heading>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={
                          descInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 40 }
                        }
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <Text
                          fontSize="14px"
                          lineHeight="1.8"
                          fontWeight="400"
                          opacity={currentSlide === index ? 1 : 0.9}
                        >
                          {service.description}
                        </Text>
                      </motion.div>
                    </Box>
                  </Box>
                </SplideSlide>
              ))}
            </Splide>
            {/* Splide progress bar */}
            <div className="splide__progress" style={{ marginTop: 16 }}>
              <div
                className="splide__progress__bar"
                style={{
                  background: "#fff",
                  height: 5,
                  width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                  transition: "width 0.3s",
                }}
              />
            </div>
          </Box>
        </Box>

        {/* Desktop/Tablet view with grid */}
        <Grid
          pb={{ base: 6, lg: 12 }}
          templateColumns={{
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={{ md: 5, lg: 6 }}
          display={{ base: "none", lg: "grid" }}
          ref={cardsRef}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              style={{ height: "100%" }}
            >
              <Box
                bg="transparent"
                color="#ffff"
                p={5}
                borderRadius="16px"
                border="1px solid rgba(34, 185, 116, 0.8)"
                transition="all 0.3s ease"
                _hover={{
                  borderColor: "rgba(34, 185, 116, 1)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                }}
                height="100%"
                display="flex"
                flexDirection="column"
                position="relative"
                overflow="hidden"
                style={{ borderRadius: "16px" }}
              >
                <Heading
                  as="h3"
                  fontSize={{ md: "20px", lg: "24px" }}
                  fontWeight="600"
                  mb={0}
                >
                  {service.title}
                </Heading>
                <Text mt={4}>{service.description}</Text>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ExpertSections;
