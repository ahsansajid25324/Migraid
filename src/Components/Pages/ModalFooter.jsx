import { Flex, Button } from "@chakra-ui/react";
import React from "react";
const ModalFooter = ({ onClose, btnText }) => {
  return (
    <Flex
      w="100%"
      flexWrap={"wrap"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        color="rgba(130, 130, 130, 1)"
        borderRadius={"16px"}
        onClick={onClose}
        bg="white"
        border="1px solid rgba(130, 130, 130, 1)"
      >
        Close
      </Button>

      <Button color="white" bg="rgba(34, 185, 116, 1)" borderRadius={"16px"}>
        {btnText}
      </Button>
    </Flex>
  );
};

export default ModalFooter;
