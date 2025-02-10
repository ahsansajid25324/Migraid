import React, { useEffect } from "react";

import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import Per from "../assets/images/Per.png";
import { EditIcon } from "@chakra-ui/icons";
import { useQuery } from "@apollo/client";

import QuestionModal from "../Components/Pages/QuestionModal";
import { motion } from "framer-motion";
import { getUserId } from "../helpers/getUserId";
import InfoModal from "../Components/Pages/InfoModal";
import { GET_USER_BY_ID } from "../graphql/queries/GetUserById";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure();

  const userId = getUserId();

  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: { id: userId },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        w={{ base: "100%", md: "80%" }}
        mx="auto"
        px={{ base: 4, lg: 0 }}
        pt={{ base: 10, lg: 12 }}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Box>
            <Flex gap={4} alignItems={"center"}>
              <Box>
                <Image
                  w="62px"
                  h="62px"
                  borderRadius="full"
                  src={Per}
                  alt="Profile"
                />
              </Box>
              <Box>
                <Flex alignItems="center" gap={4}>
                  <Text mb={1} fontWeight={"600"} fontSize="lg">
                    Ahsan Sajid
                  </Text>
                  <Icon
                    as={EditIcon}
                    w={5}
                    onClick={onOpenInfo}
                    h={5}
                    cursor="pointer"
                    color="gray.500"
                  />
                </Flex>
                <Text fontSize="sm" color="gray.500">
                  sajidashan67@gmail.com
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box pt={4} ml={{ base: "auto", lg: "initial" }}>
            <Button
              color="rgba(34, 185, 116, 1)"
              borderRadius={"20px"}
              height={"52px"}
              fontSize={{ base: "14px", lg: "16px" }}
              variant={"outline"}
              _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
              border={"1px solid rgba(34, 185, 116, 1) "}
            >
              Upload Profile Picture
            </Button>
          </Box>
        </Flex>
      </Box>

      <InfoModal isOpen={isOpenInfo} onClose={onCloseInfo}></InfoModal>

      <Box w="90%" mx="auto" py={{ base: 8, lg: 12 }}>
        <Tabs colorScheme="green " variant={"unstyled"}>
          <TabList
            display="grid"
            gridTemplateColumns={{
              base: "1fr 1fr",
              md: "1fr 1fr 1fr",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Tab
              fontSize={{ base: "16px", lg: "20px" }}
              color="rgba(130, 130, 130, 1)"
              _selected={{
                fontWeight: "600",
                color: "rgba(34, 185, 116, 1)",
                borderColor: "rgba(34, 185, 116, 1)",
                borderBottom: "2px solid rgba(34, 185, 116, 1)",
              }}
            >
              Pay By Questions
            </Tab>
            <Tab
              fontSize={{ base: "16px", lg: "20px" }}
              color="rgba(130, 130, 130, 1)"
              _selected={{
                fontWeight: "600",
                color: "rgba(34, 185, 116, 1)",
                borderColor: "rgba(34, 185, 116, 1)",
                borderBottom: "2px solid rgba(34, 185, 116, 1)",
              }}
            >
              Book a Consultation
            </Tab>
            <Tab
              fontSize={{ base: "16px", lg: "20px" }}
              color="rgba(130, 130, 130, 1)"
              _selected={{
                fontWeight: "600",
                color: "rgba(34, 185, 116, 1)",
                borderColor: "rgba(34, 185, 116, 1)",
                borderBottom: "2px solid rgba(34, 185, 116, 1)",
              }}
            >
              My Cases
            </Tab>
          </TabList>

          <TabPanels pt={{ base: 0, lg: 6 }}>
            <TabPanel>
              <Box w={{ base: "100%", lg: "80%" }} mx="auto" mt={4}>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  flexDirection={{ base: "column", lg: "row" }}
                >
                  <Box
                    display={"flex"}
                    gap={{ base: 4, lg: 8 }}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Text fontSize={{ base: "18px", lg: "22px" }}>
                      Total Payment for Questions:{" "}
                      <Text as="span" color="green.500">
                        $0
                      </Text>
                    </Text>
                    <Text fontSize={{ base: "18px", lg: "22px" }}>
                      Total Number of Questions:{" "}
                      <Text as="span" color="green.500">
                        $0
                      </Text>
                    </Text>
                  </Box>
                  <Box pt={{ base: 4, lg: 0 }}>
                    <Button
                      fontSize={{ base: "14px", lg: "16px" }}
                      borderRadius={"32px"}
                      bg="rgba(34, 185, 116, 1)"
                      height={"52px"}
                      color="white"
                      _hover={{ bg: "rgba(34, 185, 116, 1)" }}
                      _active={{ bg: "rgba(34, 185, 116, 1)" }}
                      onClick={onOpen}
                    >
                      Pay By Questions
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <QuestionModal isOpen={isOpen} onClose={onClose}></QuestionModal>

            <TabPanel>
              <Box w="80%" mx="auto" mt={4}>
                <Text>Here you can book consultations.</Text>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box w="80%" mx="auto" mt={4}>
                <Text>Your submitted cases will appear here.</Text>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </motion.div>
  );
};

export default Dashboard;
