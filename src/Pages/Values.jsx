import React, { useState } from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import Guarrante from "../assets/images/guarrante.png";

import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import accessibility from "../assets/images/acc.png";
import { motion } from "framer-motion";
import Arrow from "../assets/icons/Arrow";
// Removed tick image, using SVG inline instead
import Services from "../assets/images/valuesImg.png";

import { useInView } from "react-intersection-observer";
import DetailFormat from "../Components/Pages/DetailFormat";
import ConsultationModal from "../Components/Pages/ConsultationModal";
import ValuesEmpowerment from "../Components/Pages/ValuesEmpowerment";
import GenericContact from "../Components/Pages/GenericContact";
function Values() {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <OtherPageHeroSection
        title="OUR VALUES"
        subtitle="People Before Profit"
        descript="At Migraid, we believe that immigration help should be grounded in humanity, not bureaucracy. Every story matters, and every person deserves dignity, respect, and a fair chance to build a stable life in the United States. We measure success not by numbers or fees, but by the lives we help rebuild."
      />

      <Flex
        h="auto"
        py={{ base: 6, lg: 12 }}
        px={{ base: 4, lg: 12 }}
        alignItems="center"
        bg="#ffff"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "100%", lg: "42%" }}
          ref={imgRef}
          mb={{ base: 8, lg: 0 }}
        >
          <Image src={Services} />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
          <DetailFormat
            title="Client-Focused Care"
            margin="16px"
            alwaysShowFullContent={true}
            SubTitle="Client-Centered & Compassionate Help"
            showButton={true}
            content="Every journey is unique. We listen first, with empathy and patience, to understand each client’s goals and challenges. Whether someone is applying for residency, seeking asylum, or reuniting with family, our team walks beside them with care, respect, and honesty."
          ></DetailFormat>
        </Box>
      </Flex>

      <Flex>
        <Box
          bgImage={accessibility}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          position="relative"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={{ base: 8, md: 16 }}
        >
          <Flex
            px={{ base: 4, md: 12 }}
            borderRadius="lg"
            color="white"
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box flex="1" mr={{ md: 12 }} mb={{ base: 8, md: 0 }}>
              <Box
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
                fontWeight="bold"
                mb={4}
                letterSpacing="tight"
              >
                Accessibility for All
              </Box>
              <Box fontSize={"md"}>
                We are committed to making immigration guidance affordable and
                understandable for everyone — regardless of language,
                background, or financial situation.
              </Box>
            </Box>
            <Box flex="1" ml={{ md: 12 }}>
              <Box
                fontWeight="semibold"
                fontSize={{ base: "md", md: "lg" }}
                mb={4}
              >
                Our accessibility promise includes:
              </Box>
              {/* <Box>
                <Flex align={"center"} mb={3} gap={2}>
                  <Box fontSize="xl">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="8" fill="#22B974" />
                      <path
                        d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Box>
                    <Text>
                      {" "}
                      Multilingual services: English, Spanish, Arabic, Urdu, and
                      more
                    </Text>
                  </Box>
                </Flex>
                <Flex align={"center"} mb={3} gap={2}>
                  <Box fontSize="xl">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="8" fill="#22B974" />
                      <path
                        d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Box>
                    <Text>
                      {" "}
                      Sliding-scale and pro bono options for low-income families
                    </Text>
                  </Box>
                </Flex>
                <Flex align={"center"} mb={3} gap={2}>
                  <Box fontSize="xl">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="8" fill="#22B974" />
                      <path
                        d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Box>
                    <Text>
                      {" "}
                      Community outreach clinics that bring free help directly
                      to neighborhoods Because justice should never depend on
                      the size of your wallet.
                    </Text>
                  </Box>
                </Flex>
              </Box> */}

              <Box mb={6}>
                <Flex mb={4} gap={2} align={"center"}>
                  <Box fontSize="xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="8" fill="#22B974" />
                      <path
                        d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Text fontSize="md">
                    Multilingual services: English, Spanish, Arabic, Urdu, and
                    more
                  </Text>
                </Flex>
                <Flex align="center" mb={4} gap={2}>
                  <Box fontSize="xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="8" fill="#22B974" />
                      <path
                        d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Text fontSize="md">
                    Sliding-scale and pro bono options for low-income families{" "}
                  </Text>
                </Flex>
                <Flex mb={4} gap={2} align={"center"}>
                  <Box fontSize="xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="8" fill="#22B974" />
                      <path
                        d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Text fontSize={{ base: "md", md: "md" }}>
                    Community outreach clinics that bring free help directly to
                    neighborhoods Because justice should never depend on the
                    size of your wallet.{" "}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        h="auto"
        py={{ base: 6, lg: 12 }}
        px={{ base: 4, lg: 12 }}
        alignItems="center"
        bg="#ffff"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          px={{ base: 2, md: 8 }}
          w={{ base: "100%", lg: "50%" }}
          py={{ base: 4, md: 8 }}
        >
          <Text
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
            fontWeight="500"
            mb={8}
            color="#181C3A"
          >
            We guarantee
          </Text>
          <Box mb={6}>
            <Flex mb={4} gap={2} align={"center"}>
              <Box fontSize="xl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="8" fill="#22B974" />
                  <path
                    d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text fontSize="md">
                Confidential handling of all personal information and case
                materials
              </Text>
            </Flex>
            <Flex align="center" mb={4} gap={2}>
              <Box fontSize="xl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="8" fill="#22B974" />
                  <path
                    d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text fontSize="md">
                Transparent communication about every step of the process
              </Text>
            </Flex>
            <Flex mb={4} gap={2} align={"center"}>
              <Box fontSize="xl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="8" fill="#22B974" />
                  <path
                    d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text fontSize={{ base: "md", md: "md" }}>
                Honest assessments, even when answers are difficult to hear
              </Text>
            </Flex>
          </Box>
          <Text fontSize={{ base: "md", md: "md" }} mb={{ base: 6, lg: 8 }}>
            Our ethical responsibility is to serve each person with truth,
            fairness, and discretion.
          </Text>
          <Box mb={{ base: 6, lg: 0 }}>
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
          </Box>
        </Box>

        <Box
          w={{ base: "100%", lg: "42%" }}
          ref={imgRef}
          mb={{ base: 8, lg: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src={Guarrante} />
          </motion.div>
        </Box>
      </Flex>

      <ValuesEmpowerment />
      <GenericContact />

      <Footer />
    </>
  );
}

export default Values;
