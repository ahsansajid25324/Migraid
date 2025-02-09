import { Box, Image, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import CustomButton from "../UI/CustomButton";
import useDrawer from "../../hooks/useDrawer";
import NavbarDrawer from "./NavbarDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";
import { links } from "../../data/NavbarItems";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PLogo from "../../assets/images/PLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const NavLink = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <Box position="relative" display="inline-block" mx={3}>
      <Text
        as={Link}
        color={isActive ? "rgba(34, 185, 116, 1)" : "white"}
        to={href}
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

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const location = useLocation();
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

  const dispatch = useDispatch();
  const nav = useNavigate();
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
          justifyContent={{
            base: "space-around",
            lg: "space-between",
            xl: "space-around",
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

          <Box gap={4} display={{ base: "none", lg: "none", xl: "flex" }}>
            {isAuthenticated ? (
              // <Button onClick={()=>dispatch(logout())}>Logout</Button>

              <Button
                borderRadius="32px"
                fontSize={{ base: "14px", lg: "18px" }}
                flexWrap="wrap"
                color="white"
                width="120px"
                height="45px"
                fontWeight="medium"
                border={"1px solid rgba(34, 185, 116, 1)"}
                bg="transparent"
                _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
                onClick={() => {
                  dispatch(logout());
                  nav("/login");
                }}
                fontFamily="Poppins"
              >
                Logout
              </Button>
            ) : (
              <>
                <CustomButton
                  path="/login"
                  color="white"
                  width="120px"
                  height="45px"
                >
                  Login
                </CustomButton>
                <CustomButton
                  path="/signup"
                  color="white"
                  width="120px"
                  height="45px"
                >
                  Signup
                </CustomButton>
              </>
            )}
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
          <Image
            src={
              location.pathname === "/home" ? (scrollNav ? logo : PLogo) : logo
            }
            w="92px"
            h="16px"
          ></Image>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Button onClick={openNavbar} variant="ghost">
            <HamburgerIcon
              color={
                location.pathname === "/home"
                  ? scrollNav
                    ? "white"
                    : "black"
                  : "white"
              }
            />
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
