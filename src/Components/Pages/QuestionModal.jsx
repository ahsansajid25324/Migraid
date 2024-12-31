import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Flex,
  ModalBody,
  ModalFooter,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const QuestionModal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const nav = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent
        borderRadius={"16px"}
        maxWidth={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
      >
        <ModalHeader>Pay by Questions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Hey, you can pay us by questions</ModalBody>

        <ModalFooter>
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <HStack spacing={4}>
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

            <Button
              color="white"
              bg="rgba(34, 185, 116, 1)"
              borderRadius={"16px"}
              onClick={() => nav("/showQuestions")}
            >
              Checkout
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuestionModal;
