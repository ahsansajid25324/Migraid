import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  HStack,
  Button,
  Text,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Footer from "./ModalFooter";
const QuestionModal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent
        borderRadius={"16px"}
        maxWidth={{ base: "90%", sm: "80%", md: "50%", lg: "30%" }}
      >
        <ModalHeader>Question Per Amount (USD)</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {" "}
          <HStack spacing={4} justifyContent={"center"}>
            <Button
              size="sm"
              borderRadius="full"
              onClick={decreaseQuantity}
              bg="gray.100"
            >
              -
            </Button>
            <Text color="rgba(34, 185, 116, 1)">{quantity}</Text>
            <Button
              size="sm"
              borderRadius="full"
              onClick={increaseQuantity}
              bg="gray.100"
            >
              +
            </Button>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Footer btnText="Update Amount" onClose={onClose}></Footer>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuestionModal;
