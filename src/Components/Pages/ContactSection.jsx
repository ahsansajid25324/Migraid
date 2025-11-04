import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import WLine from "../../assets/images/WLine.png";
import CustomButton from "../UI/CustomButton";
import contactBg from "../../assets/images/contactBg.png";
import ConsultationModal from "./ConsultationModal";
const ContactSection = ({ showY, margin }) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <Flex
        ref={sectionRef}
        position="relative"
        bgImage={contactBg}
        bgSize="cover"
        bgPosition="center"
        my={margin || 0}
        bgRepeat="no-repeat"
        borderRadius={{ base: "16px", lg: "20px" }}
        mx={{ base: 4, lg: 12 }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={
            sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Box px={{ base: 4, lg: 8 }} py={{ base: 6, lg: 8 }}>
            <Flex alignItems="center" gap={2}>
              <Image w="30px" h="3px" src={WLine} />
              <Text color="white" fontSize={{ base: "14px", lg: "16px" }}>
                VOLUNTEER & DONATE
              </Text>
            </Flex>

            <Heading
              color="white"
              fontSize={{ base: "1.4rem", lg: "2.2rem" }}
              fontWeight="600"
              mt={2}
            >
              Help us serve more families
            </Heading>

            <Text
              maxW={"900px"}
              mt="8px"
              color="rgba(255, 255, 255, 1)"
              w="95%"
            >
              We rely on volunteers, pro bono lawyers, and donors to keep
              services free or affordable. Support our work by donating,
              volunteering as a community navigator, or offering pro bono legal
              time.
            </Text>
            <Box mt={4} display="flex" gap={2} flexWrap={"wrap"}>
              <CustomButton
                invertHoverColors={true}
                p={5}
                showBorder={true}
                color="white"
                showIcon={true}
                onClick={() =>
                  window.open(
                    "https://www.paypal.com/ncp/payment/PHUSY8N28BM2W",
                    "_blank"
                  )
                }
              >
                Donate
              </CustomButton>
              <CustomButton
                invertHoverColors={true}
                p={5}
                showBorder={true}
                color="white"
                showIcon={true}
                onClick={openModal}
              >
                Volunteer
              </CustomButton>
            </Box>
          </Box>
        </motion.div>
      </Flex>
    </>
  );
};

export default ContactSection;
