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
  Link,
  VStack,
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
                  <Link
                    href={link.href}
                    color="white"
                    fontSize="18px"
                    fontFamily="Poppins"
                  >
                    {link.label}
                  </Link>
                  <Divider mt="4" borderColor="white" />
                </Box>
              ))}
            </VStack>
            <Box mt={8}>
              <CustomButton mb={6} color="white" width="100%" height="56px">
                Login
              </CustomButton>
              <CustomButton color="white" width="100%" height="56px">
                Sing Up
              </CustomButton>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarDrawer;