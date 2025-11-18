import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import contactBg from "../../assets/images/genericBg.png";
import ConsultationModal from "./ConsultationModal";
const GenericContact = () => {
  const { ref: sectionRef } = useInView({
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
        my={{ base: 10, lg: 12 }}
        bgRepeat="no-repeat"
        borderRadius={{ base: "16px", lg: "20px" }}
        mx={{ base: 4, lg: 8 }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 6 }}
      >
        <Flex
          borderRadius="lg"
          color="white"
          justifyContent="space-between"
          p={{ base: 4, lg: 8 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex="1" mr={{ md: 12, lg: 20 }}>
            <Heading
              color="white"
              fontSize={{ base: "1.4rem", lg: "2.2rem" }}
              fontWeight="600"
              maxW={"400px"}
            >
              Community Partnership & Education{" "}
            </Heading>

            <Text
              maxW={"500px"}
              mt="12px"
              color="rgba(255, 255, 255, 1)"
              w="95%"
            >
              We know that strong communities empower immigrants to thrive.
              That’s why MigRaid partners with local organizations, volunteers,
              schools, and advocates to extend our reach and create lasting
              impact.
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
          <Box flex="1" ml={{ md: 12 }} mt={{ base: 6, md: 0 }}>
            <Box
              fontWeight="semibold"
              fontSize={{ base: "md", md: "lg" }}
              mb={4}
            >
              Our outreach includes:
            </Box>

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
                    <circle cx="10" cy="10" r="8" fill="#fff" />
                    <path
                      d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                      fill="#22B974"
                    />
                  </svg>
                </Box>
                <Text fontSize="md">
                  Free “Know Your Rights” and naturalization workshops
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
                    <circle cx="10" cy="10" r="8" fill="#fff" />
                    <path
                      d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                      fill="#22B974"
                    />
                  </svg>
                </Box>
                <Text fontSize="md">
                  Collaboration with community centers, faith-based groups, and
                  local leaders{" "}
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
                    <circle cx="10" cy="10" r="8" fill="#fff" />
                    <path
                      d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                      fill="#22B974"
                    />
                  </svg>
                </Box>
                <Text fontSize={{ base: "md", md: "md" }}>
                  Volunteer training for aspiring community navigators
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
                    <circle cx="10" cy="10" r="8" fill="#fff" />
                    <path
                      d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                      fill="#22B974"
                    />
                  </svg>
                </Box>
                <Text fontSize={{ base: "md", md: "md" }}>
                  Volunteer training for aspiring community navigators{" "}
                </Text>
              </Flex>{" "}
              <Flex mb={4} gap={2} align={"center"}>
                <Box fontSize="xl">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="8" fill="#fff" />
                    <path
                      d="M8.5 12.5L5.5 9.5L6.5 8.5L8.5 10.5L13.5 5.5L14.5 6.5L8.5 12.5Z"
                      fill="#22B974"
                    />
                  </svg>
                </Box>
                <Text fontSize={{ base: "md", md: "md" }}>
                  Through education and partnership, we turn knowledge into
                  empowerment.{" "}
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default GenericContact;
