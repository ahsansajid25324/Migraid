import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Flex,
  
  ModalBody,
  ModalFooter,
  Textarea,
} from "@chakra-ui/react";
import Footer from "./ModalFooter";
const AnswerModal = ({ isOpen, onClose }) => {
 
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent
        borderRadius={"16px"}
        maxWidth={{ base: "90%", sm: "80%", md: "50%", lg: "30%" }}
      >
        <ModalHeader>Question:</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Textarea placeholder="Annswer here"></Textarea>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Footer btnText="Submit Answer" onClose={onClose}></Footer>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AnswerModal;
