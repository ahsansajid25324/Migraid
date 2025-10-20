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
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/images/Logo.png";
import { links } from "../../data/NavbarItems";
import CustomButton from "../UI/CustomButton";

function NavbarDrawer({ isOpen, onClose, openNavbar }) {
  return (
    <div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(2, 2, 38, 1)">
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
              {links.map((link, index) => (
                <Box key={index} w="100%">
                  <Text
                    as="a"
                    href={link.href}
                    color="white"
                    fontSize="18px"
                    fontFamily="Poppins"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose(); // Close the drawer

                      // If we're not on home page, navigate to home page with hash
                      if (
                        window.location.pathname !== "/" &&
                        window.location.pathname !== "/home"
                      ) {
                        window.location.href = `/home${link.href}`;
                        return;
                      }

                      // Get the target section
                      const targetId = link.href.substring(1); // Remove the # character
                      const targetElement = document.getElementById(targetId);

                      if (targetElement) {
                        targetElement.scrollIntoView({
                          behavior: "smooth",
                        });

                        // Update URL hash without page jump
                        window.history.pushState(null, "", link.href);
                      }
                    }}
                  >
                    {link.label}
                  </Text>
                  <Divider mt="4" borderColor="white" />
                </Box>
              ))}
            </VStack>

            <Box mt={4} w="100%" textAlign="center">
              <CustomButton fontSize="18px" showIcon={true} w="100%" p={5} color="white">
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
