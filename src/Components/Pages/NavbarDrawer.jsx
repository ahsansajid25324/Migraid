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

import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/images/Logo.png";
import { links } from "../../data/NavbarItems";
import CustomButton from "../UI/CustomButton";
import { useSelector } from "react-redux";

function NavbarDrawer({ isOpen, onClose, openNavbar }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
                    to={link.href}
                    color="white"
                    as={Link}
                    fontSize="18px"
                    fontFamily="Poppins"
                  >
                    {link.label}
                  </Text>
                  <Divider mt="4" borderColor="white" />
                </Box>
              ))}
            </VStack>

            <Box mt={8}>
              {!isAuthenticated ? (
                <>
                  <CustomButton
                    mb={6}
                    path="/login"
                    color="white"
                    width="100%"
                    height="56px"
                  >
                    Login
                  </CustomButton>
                  <CustomButton
                    path="/signup"
                    color="white"
                    width="100%"
                    height="56px"
                  >
                    Sign Up
                  </CustomButton>
                </>
              ) : null}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarDrawer;
