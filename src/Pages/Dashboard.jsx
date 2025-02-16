import React, { useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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
  Skeleton,
  SkeletonCircle,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useQuery } from "@apollo/client";
import { getUserId } from "../helpers/getUserId";
import InfoModal from "../Components/Pages/InfoModal";
import { GET_USER_BY_ID } from "../graphql/queries/GetUserById";
import { UPDATE_PROFILE_IMAGE } from "../graphql/mutations/AddProfileImage";
import QuestionModal from "../Components/Pages/QuestionModal";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure();
  const userId = getUserId();
  const { data, refetch, loading } = useQuery(GET_USER_BY_ID, {
    variables: { id: userId },
  });
  const [updateProfileImage] = useMutation(UPDATE_PROFILE_IMAGE);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "migraidImages");
    formData.append("cloud_name", "dnncyiapr");

    fetch("https://api.cloudinary.com/v1_1/dnncyiapr/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data.secure_url;
        updateProfileImage({
          variables: {
            id: userId,
            profileImage: imageUrl,
          },
        }).then(() => {
          refetch();
        });
      })
      .catch((err) => console.error("Error uploading image:", err));
  };

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
        <Flex gap={4} alignItems={"center"}>
          {loading ? (
            // Skeleton View (Shown when loading)
            <>
              <SkeletonCircle size="62px" />
              <Box>
                <Skeleton height="20px" width="150px" mb={2} />
                <Skeleton height="16px" width="200px" />
              </Box>
            </>
          ) : (
            <>
              <Image
                w="62px"
                h="62px"
                borderRadius="full"
                src={data?.user?.profileImage}
                alt="Profile"
              />
              <Box>
                <Flex alignItems="center" gap={4}>
                  <Text mb={1} fontWeight={"600"} fontSize="lg">
                    {data?.user?.firstName} {data?.user?.lastName}
                  </Text>
                  <Icon
                    as={EditIcon}
                    w={5}
                    h={5}
                    onClick={onOpenInfo}
                    cursor="pointer"
                    color="gray.500"
                  />
                </Flex>
                <Text fontSize="sm" color="gray.500">
                  {data?.user?.email}
                </Text>
              </Box>
            </>
          )}
        </Flex>
      </Box>

      <InfoModal data={data} isOpen={isOpenInfo} onClose={onCloseInfo} />

      <Box w="90%" mx="auto" py={{ base: 8, lg: 12 }}>
        <Tabs colorScheme="green" variant={"unstyled"}>
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
            <QuestionModal isOpen={isOpen} onClose={onClose} />

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
