import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import img from "./../../assets/images/blueBg.png";
import Navbar from "./Navbar";
import CustomButton from "../UI/CustomButton";
import ConsultationForm from "./ConsultationForm";
import ConsultationModal from "./ConsultationModal";
import "./../../App.css";

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      <Box
        pt={{ base: 12, lg: 20 }}
        pb={{ base: 6, lg: 20 }}
        bgImage={img}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position={"relative"}
        display="flex"
        flexDirection="column"
      >
        <Box position="fixed" top={0} left={0} right={0} zIndex={1000}>
          <Navbar />
        </Box>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          flex="1"
          justifyContent={"center"}
          alignItems={"center"}
          py={{ base: 4 }}
          px={{ base: 4, lg: 12 }}
        >
          <Box w="100%" borderRadius="md">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                mt={{ base: "12px", lg: "50px" }}
                lineHeight={{ base: "42px", lg: "66px" }}
                fontSize={{ base: "32px", lg: "42px", xl: "46px" }}
                fontWeight={"600"}
                color="#FFFFFF"
                width="100%"
              >
                Compassionate Immigration Help{" "}
                <span style={{ color: "rgba(34, 185, 116, 1)" }}>
                  Free & Low Cost
                </span>{" "}
                Services for Individuals and Families
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Text
                lineHeight={{ base: "32px", lg: "26px" }}
                mt={2}
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeight={"400"}
                color={{ base: "white", lg: "white" }}
              >
                We’re a nonprofit legal aid team guiding people through visas,
                asylum, family reunification, naturalization, and resettlement.
                Trusted, confidential, and community-focused.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Flex gap={4} mt={4} flexWrap={"wrap"}>
                <CustomButton padding={6} color="white" showIcon={true} onClick={openModal}>
                  Book a Free Intake
                </CustomButton>
                <CustomButton padding={6} color="white" showIcon={true}>
                  Donate
                </CustomButton>
              </Flex>
            </motion.div>
          </Box>

          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Box
              zIndex={"1"}
              w="100%"
              mt={{ base: 8, lg: 10 }}
              borderRadius="md"
            >
              <ConsultationForm />
            </Box>
          </motion.div>
        </Flex>
      </Box>
    </>
  );
}

export default React.memo(HeroSection);
