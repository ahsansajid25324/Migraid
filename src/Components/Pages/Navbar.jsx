import { Box, Image, Text, Button, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import CustomButton from "../UI/CustomButton";
import useDrawer from "../../hooks/useDrawer";
import NavbarDrawer from "./NavbarDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";
import { links } from "../../data/NavbarItems";

import { useNavigate } from "react-router-dom";

const NavLink = ({ href, children }) => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setActivePath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePathChange);
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
    setActivePath(href);
  };

  const isActive = activePath === href;

  return (
    <Box position="relative" display="inline-block" mx={3}>
      <Text
        as="a"
        href={href}
        onClick={handleClick}
        color={isActive ? "#22B974" : "#ffff"}
        fontWeight={isActive ? "bold  " : "normal"}
        borderBottom={isActive ? "3px solid #22B974" : "none"}
        cursor={"pointer"}
        fontFamily={"Poppins"}
        fontSize="16px"
        transition="all 0.2s"
        _hover={
          isActive
            ? { color: "#22B974" }
            : {
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
              }
        }
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
        bg={scrollNav ? "#004E64" : "transparent"}
        transition="background-color 0.3s ease"
        position="sticky"
        top={0}
        zIndex={1000}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        data-navbar="true"
      >
        <Box>
          <Image src={logo} alt="Logo" />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent={{
            base: "space-around",
            lg: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" mr={{ lg: 6, xl: 12 }}>
            {links.map((link, index) => (
              <React.Fragment key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
                {index < links.length - 1 && <Text color="white">|</Text>}
              </React.Fragment>
            ))}
          </Box>

          <Box gap={4} display={{ base: "none", lg: "flex" }}>
            <CustomButton
              p={5}
              color="white"
              onClick={() =>
                window.open(
                  "https://www.paypal.com/ncp/payment/PHUSY8N28BM2W",
                  "_blank"
                )
              }
            >
              Donate
            </CustomButton>

            <CustomButton p={5} color="white" path="/notary">
              Notarization
            </CustomButton>
          </Box>
        </Box>
      </Box>

      <Box
        p={4}
        alignItems={"center"}
        bg={scrollNav ? "#004E64" : "transparent"}
        transition="background-color 0.3s ease"
        position="sticky"
        top={0}
        zIndex={1000}
        display={{ base: "flex", lg: "none" }}
        data-navbar="true"
      >
        <Box>
          <Image src={logo} w="92px" h="16px"></Image>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Button onClick={openNavbar} variant="ghost">
            <HamburgerIcon color="white" />
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
