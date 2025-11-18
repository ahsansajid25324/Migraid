import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import contactBg from "../../assets/images/genericBg.png";
import ConsultationModal from "./ConsultationModal";
const NotaryContact = () => {
  const { ref: sectionRef } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          w={"100%"}
          justifyContent="space-between"
          p={{ base: 4, lg: 8 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex="1" mr={{ md: 12, lg: 18 }} w="100%">
            <Heading
              color="white"
              fontSize={{ base: "1.4rem", lg: "2.2rem" }}
              fontWeight="600"
              maxW={"500px"}
            >
              Transparent Pricing for Online Notarization{" "}
            </Heading>

            <Text
              maxW={"700px"}
              mt="12px"
              color="rgba(255, 255, 255, 1)"
              w="95%"
            >
              We believe in clear, upfront pricing with no hidden fees. Our
              online notarization service is designed to be accessible, secure,
              and fully compliant with U.S. notarial law.
            </Text>
            <Box mt="16px">
              <Box
                border="1px solid white"
                borderRadius="16px"
                display="inline-flex"
                p={4}
              >
                <Text
                  fontSize="32px"
                  fontWeight="bold"
                  color="white"
                  display="inline-flex"
                >
                  $25
                </Text>
                <Text fontSize="14px" mt="12px" color="white" display="inline-flex" ml={2}>
                  per document
                </Text>
              </Box>
            </Box>
          </Box>
          <Box flex="1" ml={{ md: 12, lg: 20 }} mt={{ base: 6, md: 0 }}>
            <Box
              fontWeight="semibold"
              fontSize={{ base: "md", md: "lg" }}
              mb={4}
            >
              Your fee includes:{" "}
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
                  Live online notarization with a licensed notary{" "}
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
                <Text fontSize="md">Secure Microsoft Teams session link</Text>
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
                  Identity verification & compliance screening{" "}
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
                <Text fontSize={"md"}>
                  Digital notarized document delivered to your email{" "}
                </Text>
              </Flex>{" "}
              <Text fontSize={"md"}>
                No hidden charges. No extra tech fees. Refunds available if the
                notary session has not started.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default NotaryContact;
