import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { formData } from "../../data/ConsultFormData";

const ConsultationModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent
        mx={{ base: 2, sm: 4 }}
        my={{ base: 4, sm: 8 }}
        borderRadius={{ base: "16px", lg: "20px" }}
        w={{ base: "95vw", sm: "auto" }}
        maxW={{ base: "98vw", sm: "400px", md: "600px" }}
      >
        <ModalHeader px={{ base: 4, sm: 6 }}>Book Your Free Consultation</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={{ base: 4, sm: 6 }}>
          <Box
            as="form"
            borderRadius={{ base: "16px", lg: "20px" }}
            onSubmit={handleSubmit(onSubmit)}
            pb={4}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={3}
              mb={4}
            >
              {formData.map((field, index) => (
                <Box
                  key={index}
                  gridColumn={
                    field.name === "service" || field.name === "message"
                      ? "1 / -1"
                      : "auto"
                  }
                >
                  <FormInput
                    type={field.type}
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
            <Button
              type="submit"
              bg="rgba(34, 185, 116, 1)"
              color="white"
              _hover={{ bg: "rgba(34, 185, 116, 0.8)" }}
              borderRadius={"24px"}
            >
              Get Started
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConsultationModal;
