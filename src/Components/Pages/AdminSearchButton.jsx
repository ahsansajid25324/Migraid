import React from "react";

import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FiExternalLink } from "react-icons/fi";
const AdminSearchButton = ({ title, onOpen,show }) => {
  return (
      <Flex
        w={{ base: "100%", lg: "fit-content" }}
        gap={3}
        mt={{ base: 6, lg: 0 }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="rgba(34, 185, 116, 1)" />
            </InputLeftElement>
            <Input
              border="1px solid rgba(34, 185, 116, 1)"
              placeholder="Search"
            />
          </InputGroup>
        </Box>

        <Box>
          <Button
            w="100%"
            color="rgba(34, 185, 116, 1)"
            bg="white"
            fontSize="16px"
            onClick={onOpen}
            fontWeight="500"
            _hover={{ color: "white", bg: "rgba(34, 185, 116, 1)" }}
            border="1px solid rgba(34, 185, 116, 1)"
            p={2}
            rightIcon={show ? <FiExternalLink /> : null}  // ✅ Conditionally render the icon
            >
            {title}
          </Button>
        </Box>
      </Flex>
  );
};

export default AdminSearchButton;
