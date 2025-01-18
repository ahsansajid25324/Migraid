import React from "react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Flex,
  InputGroup,
  InputLeftElement,
  Button,
  Th,
  Td,
  Badge,
  Box,
  Input,
  HStack,
  useBreakpointValue,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FiExternalLink } from "react-icons/fi"; // Importing from react-icons

import CustomTab from "../Components/Pages/CustomTab";

const AdminDashboard = () => {
  const pendingAnswers = [
    {
      slNo: 1,
      question: "Lorem ipsum dolor sit",
      customerName: "Marlon Pollich",
      paymentStatus: "Paid",
      questionStatus: "Not Answered",
      date: "24-Jan-2024",
    },
    {
      slNo: 2,
      question: "Lorem ipsum amet consectetur.",
      customerName: "Joanne Schmidt",
      paymentStatus: "Paid",
      questionStatus: "Not Answered",
      date: "24-Jan-2024",
    },
  ];

  // Check the screen size to decide between table or card layout
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <div>
      <NonImgHeroSection title="Pay by Questions" />
      <Tabs p={{ base: 6, lg: 8 }} variant="line">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <TabList>
            <CustomTab label="Pending Answers" />
            <CustomTab label="Answered" />
          </TabList>
          <Flex
            w={{ base: "100%", lg: "fit-content" }}
            gap={3}
            mt={{ base: 6, lg: 0 }}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="rgba(34, 185, 116, 1)" />
                </InputLeftElement>
                <Input
                  border="1px solid rgba(34, 185, 116, 1)"
                  placeholder="Search"
                />
              </InputGroup>
            </Box>

            <Box>
              <Button
                w="100%"
                color="rgba(34, 185, 116, 1)"
                bg="white"
                fontSize="16px"
                fontWeight="500"
                _hover={{ color: "white", bg: "rgba(34, 185, 116, 1)" }}
                border="1px solid rgba(34, 185, 116, 1)"
                p={2}
                rightIcon={<FiExternalLink />}
              >
                Global Price is: $5
              </Button>
            </Box>
          </Flex>
        </Flex>

        <TabPanels>
          <TabPanel p={0}>
            <Box overflowX={"auto"}>
              {isMobile ? (
                // Display as Cards on mobile screens
                <Box mt={12}>
                  {pendingAnswers.map((item, index) => (
                    <Card key={index} mb={4}>
                      <CardBody>
                        <Text fontWeight="bold">Question: {item.question}</Text>
                        <Text>Customer: {item.customerName}</Text>
                        <Text>Status: {item.paymentStatus}</Text>
                        <Text>Question Status: {item.questionStatus}</Text>
                        <Text>Date: {item.date}</Text>
                      </CardBody>
                    </Card>
                  ))}
                </Box>
              ) : (
                // Display as Table on larger screens
                <Table mt={12} variant="striped" colorScheme="gray">
                  <Thead>
                    <Tr>
                      <Th>SL. No.</Th>
                      <Th>Question</Th>
                      <Th>Customer Name</Th>
                      <Th>Payment Status</Th>
                      <Th>Question Status</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {pendingAnswers.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.slNo}</Td>
                        <Td>{item.question}</Td>
                        <Td>{item.customerName}</Td>
                        <Td>
                          <Badge colorScheme="green">{item.paymentStatus}</Badge>
                        </Td>
                        <Td>
                          <Badge colorScheme="yellow">{item.questionStatus}</Badge>
                        </Td>
                        <Td>{item.date}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </Box>
          </TabPanel>

          <TabPanel>
            <Box>No Answered Questions Yet</Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
