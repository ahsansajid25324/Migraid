import React, { useState, useEffect } from "react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";

import { Flex } from "@chakra-ui/react";

import AdminSearchButton from "../Components/Pages/AdminSearchButton";

import AdminCaseTable from "../Components/Pages/AdminCaseTable";
import AdminCaseCard from "../Components/Pages/AdminCaseCard";
const AdminCase = () => {
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

  return (
    <div>
      <NonImgHeroSection title="Case Details" />
      <Flex
        p={{ base: 6, lg: 8 }}
        justifySelf={{ base: "center", lg: "flex-end" }}
      >
        <AdminSearchButton
          show={false}
          title=" Add new case"
        ></AdminSearchButton>
      </Flex>

      <AdminCaseTable isMobile={isMobile}></AdminCaseTable>

      <AdminCaseCard isMobile={isMobile}></AdminCaseCard>
    </div>
  );
};

export default AdminCase;
