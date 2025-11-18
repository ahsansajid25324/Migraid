import React from "react";
import {
  DrawerHeader,
  DrawerCloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Box,
  Image,
  Spacer,
  Button,
  Divider,
  VStack,
} from "@chakra-ui/react";

import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { links } from "../../data/NavbarItems";
import CustomButton from "../UI/CustomButton";
import { HamburgerIcon } from "@chakra-ui/icons";
function NavbarDrawer({ isOpen, onClose, openNavbar }) {
  const [activePath, setActivePath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePathChange = () => {
      setActivePath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePathChange);
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  return (
    <div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#004E64">
          <DrawerCloseButton />
          <DrawerHeader p={0}>
            <Box
              p={2}
              alignItems={"center"}
              bg="transparent"
              position="sticky"
              top={0}
              zIndex={1000}
              display={{ base: "flex", xl: "none" }}
            >
              <Box ml={4}>
                <Image src={logo} w="92px" h="16px" />
              </Box>
              <Spacer />
              <Box>
                <Button onClick={onClose} variant="ghost">
                  <HamburgerIcon color="white" />
                </Button>
              </Box>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {links.map((link, index) => {
                const isActive = activePath === link.href;
                return (
                  <Box key={index} w="100%">
                    <Link
                      to={link.href}
                      style={{
                        color: isActive ? "#22B974" : "white",
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        textDecoration: "none",
                        fontWeight: isActive ? "bold" : "normal",
                        borderBottom: isActive ? "2px solid #22B974" : "none",
                        transition: "all 0.2s",
                      }}
                      onClick={onClose}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.color = "#22B974";
                          e.target.style.borderBottom = "3px solid #22B974";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.color = "white";
                          e.target.style.borderBottom = "none";
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                    <Divider mt="4" borderColor="white" />
                  </Box>
                );
              })}
            </VStack>

            <Box mt={4} w="100%" textAlign="center">
              <CustomButton
                fontSize="18px"
                showIcon={true}
                w="100%"
                p={6}
                color="white"
              >
                Donate
              </CustomButton>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarDrawer;
