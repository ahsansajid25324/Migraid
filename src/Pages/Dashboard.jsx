import React from "react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import Footer from "../Components/Pages/Footer";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Per from "../assets/images/Per.png";

const Dashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <NonImgHeroSection title="Dashboard"></NonImgHeroSection>

      {/* Profile Section */}
      <Box w="90%" mx="auto" pt={12}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Flex gap={4} alignItems={"center"}>
              <Box>
                <Image
                  w="56px"
                  h="56px"
                  borderRadius="full"
                  src={Per}
                  alt="Profile"
                />
              </Box>
              <Box>
                <Text mb={1} fontWeight={"600"} fontSize="lg">
                  Ahsan Sajid
                </Text>
                <Text fontSize="sm" color="gray.500">
                  sajidashan67@gmail.com
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Button
              m={2}
              color="rgba(34, 185, 116, 1)"
              borderRadius={"20px"}
              fontSize={'16px'}
              variant={"outline"}
              _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
              border={"1px solid rgba(34, 185, 116, 1) "}
            >
              Upload Profile Picture
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Tabs Section */}
      <Box w="90%" mx="auto" py={12}>
        <Tabs colorScheme="green " variant={"unstyled"}>
          <TabList justifyContent="center" alignItems="center">
            <Tab
              fontSize={"18px"}
              color="rgba(130, 130, 130, 1)"
              _selected={{
                color: "rgba(34, 185, 116, 1)",
                borderColor: "rgba(34, 185, 116, 1)",
                borderBottom: "2px solid rgba(34, 185, 116, 1)",
              }}
            >
              Pay By Questions
            </Tab>
            <Tab
              fontSize={"18px"}
              color="rgba(130, 130, 130, 1)"
              _selected={{
                color: "rgba(34, 185, 116, 1)",
                borderColor: "rgba(34, 185, 116, 1)",
                borderBottom: "2px solid rgba(34, 185, 116, 1)",
              }}
            >
              Book a Consultation
            </Tab>
            <Tab
              fontSize={"18px"}
              color="rgba(130, 130, 130, 1)"
              _selected={{
                color: "rgba(34, 185, 116, 1)",
                borderColor: "rgba(34, 185, 116, 1)",
                borderBottom: "2px solid rgba(34, 185, 116, 1)",
              }}
            >
              My Cases
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box w="80%" mx="auto" mt={4}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box display={'flex'} gap={8}> 
                    <Text fontSize="20px">
                      Total Payment for Questions:{" "}
                      <Text as="span" color="green.500">
                        $0
                      </Text>
                    </Text>
                    <Text fontSize="20px">
                      Total Number of Questions:{" "}
                      <Text as="span" color="green.500">
                        0
                      </Text>
                    </Text>
                  </Box>
                  <Box>
                    <Button borderRadius={'32px'} bg='rgba(34, 185, 116, 1)' color='white'>Pay By Questions</Button>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>

            {/* Book a Consultation Panel */}
            <TabPanel>
              <Text>Here you can book consultations.</Text>
            </TabPanel>

            {/* My Cases Panel */}
            <TabPanel>
              <Text>Your submitted cases will appear here.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
