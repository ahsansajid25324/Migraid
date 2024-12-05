import React, { useState, useRef } from "react";
import Footer from "../Components/Pages/Footer";
import { Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "../Components/Pages/Navbar";
import ContactSection from "../Components/Pages/ContactSection";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
function PrivacyPolicy() {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Introduction");

  const sections = {
    Introduction: (
      <div id="Introduction">
        <Text color="rgba(34, 185, 116, 1)" fontSize={"28px"}>
          1. Introduction
        </Text>
        <Text color="rgba(153, 153, 153, 1)">
          This PCI Compliance Policy establishes the guidelines and procedures
          for Migraid to ensure the security of payment card data in accordance
          with the Payment Card Industry Data Security Standard (PCI DSS).
          Compliance with PCI DSS is essential to protect cardholder data,
          maintain customer trust, and mitigate the risk of data breaches and
          financial loss.
        </Text>
      </div>
    ),
    Scope: (
      <div id="Scope">
        <Text color="rgba(34, 185, 116, 1)" fontSize={"28px"}>
          2. Scope
        </Text>
        <Text color="rgba(153, 153, 153, 1)">
          This policy applies to all employees, contractors, and third-party
          service providers who handle, process, transmit, or store payment card
          data on behalf of Migraid. It encompasses all systems, processes, and
          facilities involved in payment card transactions, including but not
          limited to point-of-sale (POS) terminals, e-commerce platforms, and
          back-office systems.
        </Text>
      </div>
    ),
    PolicyStatements: (
      <div id="PolicyStatements">
        <Text color="rgba(34, 185, 116, 1)" fontSize={"28px"}>
          3. Policy Statements
        </Text>
        <Text color="rgba(153, 153, 153, 1)">
          Payment card data must be protected against unauthorized access,
          disclosure, and alteration at all times. Strong encryption and secure
          cryptographic protocols must be used to safeguard cardholder data
          during transmission over public networks.
        </Text>
      </div>
    ),
    Responsibilities: (
      <div id="Responsibilities">
        <Text color="rgba(34, 185, 116, 1)" fontSize={"28px"}>
          4. Responsibilities
        </Text>
        <Text color="rgba(153, 153, 153, 1)">
          Details about responsibilities will go here.
        </Text>
      </div>
    ),
    Enforcement: (
      <div id="Enforcement">
        <Text color="rgba(34, 185, 116, 1)" fontSize={"28px"}>
          5. Enforcement
        </Text>
        <Text color="rgba(153, 153, 153, 1)">
          Details about enforcement will go here.
        </Text>
      </div>
    ),
    ReviewAndRevision: (
      <div id="ReviewAndRevision">
        <Text color="rgba(34, 185, 116, 1)" fontSize={"28px"}>
          6. Review and Revision
        </Text>
        <Text color="rgba(153, 153, 153, 1)">
          Details about review and revision will go here.
        </Text>
      </div>
    ),
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const targetSection = document.getElementById(id);
    if (targetSection && contentRef.current) {
      const contentPosition = contentRef.current.getBoundingClientRect().top;
      const targetPosition = targetSection.getBoundingClientRect().top;
      contentRef.current.scrollBy({
        top: targetPosition - contentPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
     
      <NonImgHeroSection title="Privacy Policy"></NonImgHeroSection>
      <Flex Flex p={{ base: "8px", lg: "20px" }}>
        <Box w="20%" p="20px" display={{ base: "none", lg: "flex" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {Object.keys(sections).map((section) => (
              <li
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  margin: "10px 0",
                  cursor: "pointer",
                  color:
                    activeSection === section
                      ? "rgba(34, 185, 116, 1)"
                      : "black",
                  fontWeight: activeSection === section ? "bold" : "normal",
                }}
              >
                {section.replace(/([A-Z])/g, " $1")}
              </li>
            ))}
          </ul>
        </Box>

        <Box
          ref={contentRef}
          w={{ base: "100%", lg: "75%" }}
          padding="20px"
          height="70vh"
          overflowY="scroll"
        >
          {Object.values(sections).map((section, index) => (
            <Box key={index} style={{ marginBottom: "40px" }}>
              {section}
            </Box>
          ))}
        </Box>
      </Flex>
      <ContactSection showY={true} />

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
