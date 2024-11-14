import { Box, Image, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import CustomButton from "../UI/CustomButton";
import useDrawer from "../../hooks/useDrawer";
import NavbarDrawer from "./NavbarDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";
import { links } from "../../data/NavbarItems";
import { Link } from "react-router-dom";

import PLogo from "../../assets/images/PLogo.png";

const NavLink = ({ href, children }) => {
  return (
    <Box position="relative" display="inline-block" mx={3}>
      <Text
        as={Link}
        to={href}
        color="white"
        cursor={"pointer"}
        fontFamily={"Poppins"}
        fontSize="16px"
        _hover={{
          color: "white",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-5px",
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "rgba(34, 185, 116, 1)",
          },
        }}
      >
        {children}
      </Text>
    </Box>
  );
};

function Navbar() {
  const {
    isOpen: isOpenNavbar,
    openDrawer: openNavbar,
    closeDrawer: closeNavbar,
  } = useDrawer();

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Box
        px={12}
        py={6}
        alignItems={"center"}
        bg={scrollNav ? "rgba(2, 2, 38, 1)" : "transparent"}
        transition="background-color 0.3s ease"
        position="sticky"
        top={0}
        zIndex={1000}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Image src={logo} alt="Logo" />
        </Box>

        <Box
          w="70%"
          display="flex"
          alignItems="center"
          // justifyContent="space-around"
          justifyContent={{base:'space-around',lg:'space-between',xl:'space-around'}}
        >
          <Box display="flex" alignItems="center" mr={{ lg: 6, xl: 12 }}>
            {links.map((link, index) => (
              <React.Fragment key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
                {index < links.length - 1 && <Text color="white">|</Text>}
              </React.Fragment>
            ))}
          </Box>

          <Box gap={4} display={{ base: "none", lg: "none", xl: "flex" }}>
            <CustomButton color="white" width="120px" height="45px">
              Login
            </CustomButton>
            <CustomButton color="white" width="120px" height="45px">
              Signup
            </CustomButton>
          </Box>

          <Box display={{ base: "none", lg: "flex", xl: "none" }}>
            <Button onClick={openNavbar} variant="ghost">
              <HamburgerIcon color="white" />
            </Button>{" "}
          </Box>
        </Box>
      </Box>

      <Box
        p={4}
        alignItems={"center"}
        bg={scrollNav ? "rgba(2, 2, 38, 1)" : "transparent"}
        transition="background-color 0.3s ease"
        position="sticky"
        top={0}
        zIndex={1000}
        display={{ base: "flex", lg: "none" }}
      >
        <Box>
          <Image src={scrollNav ? logo : PLogo} w="92px" h="16px"></Image>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Button onClick={openNavbar} variant="ghost">
            <HamburgerIcon color="black" />
          </Button>{" "}
        </Box>

        <NavbarDrawer
          isOpen={isOpenNavbar}
          onClose={closeNavbar}
        ></NavbarDrawer>
      </Box>
    </>
  );
}

export default Navbar;
