import React, { useState, useEffect } from "react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";

import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Box,
  useDisclosure,
  GlobalStyle,
} from "@chakra-ui/react";

import {
  pendingAnswers,
  pendingfields,
  answerFields,
  answers,
} from "../data/AdminData";
import CustomTab from "../Components/Pages/CustomTab";
import AdminSearchButton from "../Components/Pages/AdminSearchButton";
import AdminTable from "../Components/Pages/AdminTable";
import AdminCard from "../Components/Pages/AdminCard";
import GlobalAmoutModal from "../Components/Pages/GlobalAmoutModal"
const AdminDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  

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

          <AdminSearchButton show={true} onOpen={onOpen} title=" Global Price is: $5"></AdminSearchButton>
          
        </Flex>

        <TabPanels>
          <TabPanel p={0}>
            <Box overflowX={"auto"}>
              <Box
                display={isMobile ? "none" : "block"}
                transition="all 0.3s ease-in-out"
              >
                <AdminTable
                  data={pendingAnswers}
                  fields={pendingfields}
                ></AdminTable>
              </Box>

              <AdminCard isMobile={isMobile} data={pendingAnswers}></AdminCard>
            </Box>
          </TabPanel>

          <TabPanel p={0}>
            <Box overflowX={"auto"}>
              <Box
                display={isMobile ? "none" : "block"}
                transition="all 0.3s ease-in-out"
              >
                <AdminTable data={answers} fields={answerFields}></AdminTable>
              </Box>

              <AdminCard isMobile={isMobile} data={answers}></AdminCard>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <GlobalAmoutModal isOpen={isOpen} onClose={onClose}></GlobalAmoutModal>

    </div>
  );
};

export default AdminDashboard;
