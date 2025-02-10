import React from "react";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const NavbarDropDown = ({ size }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={
          <Flex align="center">
            <Avatar
              size={size}
              name="User Name"
              src="https://bit.ly/broken-link"
            />
            <ChevronDownIcon color="white" boxSize={6} ml={2} />
          </Flex>
        }
        variant="unstyled"
      />

      <MenuList bg=" rgba(2, 2, 38, 1)" color="white">
        <MenuItem
        borderBottom={'1px solid rgba(34,185,116,1)'}
          bg=" rgba(2, 2, 38, 1)"
          _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}

          onClick={() => {
            dispatch(logout());
            nav("/login");
          }}
        >
          Logout
        </MenuItem>
        <MenuItem
          bg=" rgba(2, 2, 38, 1)"
          _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}

         
        >
          Setting
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavbarDropDown;
