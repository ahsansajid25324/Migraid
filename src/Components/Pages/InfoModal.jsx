import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Box,
  ModalBody,
  ModalFooter,
  Grid,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { updateData } from "../../data/SignupData";
import FormInput from "./FormInput";

import Footer from "./ModalFooter";
const InfoModal = ({ isOpen, onClose }) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
      <ModalOverlay />
      <ModalContent
        borderRadius={"16px"}
        maxWidth={{ base: "90%", sm: "80%", md: "50%", lg: "30%" }}
      >
        <ModalHeader>Profile Information:</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form" m="auto" borderRadius="20px">
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={3}
              mb={4}
            >
              {updateData.map((field, index) => (
                <Box
                  key={index}
                  gridColumn={{
                    base: "auto",
                    lg: index > 1 ? "span 2" : "auto",
                  }}
                >
                  <FormInput
                    type={field.type}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    component={field.component}
                    options={field.options || []}
                    register={register}
                    errors={errors}
                    validation={field.validation}
                  />
                </Box>
              ))}
            </Grid>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Footer btnText="Update" onClose={onClose}></Footer>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
