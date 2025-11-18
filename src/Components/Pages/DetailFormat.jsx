import { Text, Heading, Flex, Image, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import Line from "../../assets/images/Line.png";
import Mission from "../../assets/images/Mission.png";
import Vission from "../../assets/images/Vission.png";
import Consult from "../../assets/images/ConsultService.png";

import CustomButton from "../UI/CustomButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ConsultationModal from "./ConsultationModal";
const DetailFormat = ({
  title,
  SubTitle,
  margin,
  showValues,
  showButton = false,
  content,
  SubTitleMargin,
  btn,
  alwaysShowFullContent = false,
}) => {
  const [showFullText, setShowFullText] = useState(alwaysShowFullContent);

  // Define the full text
  const fullText = content
    ? content
    : "Migraid is a nonprofit legal aid and resettlement organization dedicated to supporting individuals and families through immigration and adjustment-of-status processes. Our team includes experienced paralegals, accredited immigration advisers, community navigators, and life-coaches who work together to provide practical, compassionate assistance — from paperwork and legal referrals to post-arrival integration support.";

  const truncatedTextBase = `${fullText.substring(0, 200)}...`; // For smaller screens
  const truncatedTextLg = `${fullText.substring(0, 400)}...`; // For larger screens
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <Box>
        {title ? (
          <Flex gap={3} alignItems={"center"}>
            <Image w="30px" h="3px" src={Line} alt="Line separator" />
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              color={"rgba(34, 185, 116, 1)"}
              fontWeight={"500"}
            >
              {title}
            </Text>
          </Flex>
        ) : (
          <Image w="52px" h="52px" src={Consult} alt="Consult service icon" />
        )}

        <Heading
          ref={headingRef}
          fontSize={{ base: "24px", lg: "28px" }}
          fontWeight={"500"}
          mt={SubTitleMargin}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {SubTitle}
          </motion.div>
        </Heading>

        {/* Container for text with a fade-out effect */}
        <Box position="relative" mt="10px" color="#444">
          <Text ref={textRef}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {showFullText
                ? fullText
                : window.innerWidth < 768
                ? truncatedTextBase
                : truncatedTextLg}
            </motion.div>
          </Text>

          {/* Fade-out overlay */}
          {!showFullText && !alwaysShowFullContent && (
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height={{ base: "30px", lg: "50px" }}
              bgGradient="linear(to-t, white, rgba(255, 255, 255, 0))"
            />
          )}
        </Box>

        {!alwaysShowFullContent && (
          <Button
            onClick={() => setShowFullText(!showFullText)}
            color="rgba(34, 185, 116, 1)"
            variant="link"
            mt="5px"
            colorScheme="green"
            _focus={{ boxShadow: "none" }}
            _active={{ color: "rgba(34, 185, 116, 1)" }}
          >
            {showFullText ? "See less" : "See more"}
          </Button>
        )}

        {showValues && (
          <Flex
            flexWrap={"wrap"}
            mt={6}
            flexDirection={"column"}
            columnGap={{ base: 4, lg: 6 }}
            rowGap={3}
          >
            <Box
              ref={missionRef}
              display="flex"
              flexDirection={"column"}
              gap={2}
              alignItems={"center"}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  marginInlineEnd={"auto"}
                  gap={2}
                >
                  <Image w="52px" h="52px" src={Mission} alt="Consult icon" />
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    fontWeight={"500"}
                  >
                    Our Missions
                  </Text>
                </Box>
                <Box>
                  <Text color="#444">
                    To provide free and low-cost immigration guidance and legal
                    support to individuals and families, empowering them with
                    accurate information, compassionate advocacy, and connection
                    to community resources.
                  </Text>
                </Box>
              </motion.div>
            </Box>
            <Box
              ref={valuesRef}
              display="flex"
              flexDirection={"column"}
              gap={2}
              alignItems={"center"}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  marginInlineEnd={"auto"}
                  gap={2}
                >
                  <Image w="52px" h="52px" src={Vission} alt="Consult icon" />
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    fontWeight={"500"}
                  >
                    Our Values
                  </Text>
                </Box>
                <Box>
                  <Text color="#444">
                    To provide free and low-cost immigration guidance and legal
                    support to individuals and families, empowering them with
                    accurate information, compassionate advocacy, and connection
                    to community resources.
                  </Text>
                </Box>
              </motion.div>
            </Box>
          </Flex>
        )}

        <Box mt={margin}>
          <CustomButton
            padding={6}
            color="rgba(34, 185, 116, 1)"
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
        </Box>
      </Box>
    </>
  );
};

export default DetailFormat;
