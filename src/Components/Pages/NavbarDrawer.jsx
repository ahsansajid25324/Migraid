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
              display={{ base: "flex", lg: "none" }}
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
                 
                  <Link href={link.href} color="white" fontSize="20px" >
                    {link.label}
                  </Link>
                  <Divider mt='4' borderColor="white" />
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarDrawer;
