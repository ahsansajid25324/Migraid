import React, { useEffect } from "react";
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
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../.././graphql/mutations/updateUser"; 
import { updateData } from "../../data/SignupData";
import FormInput from "./FormInput";
import Footer from "./ModalFooter";
import useToastNotification from "../../hooks/useToastNotification";

const InfoModal = ({ isOpen, onClose, data }) => {
  const [updateUser, { loading }] = useMutation(UPDATE_USER);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  useEffect(() => {
    if (data?.user) {
      setValue("firstName", data.user.firstName || "");
      setValue("lastName", data.user.lastName || "");
      setValue("email", data.user.email || "");
    }
  }, [data, setValue]);
  const showToast = useToastNotification();

  const onSubmit = async (formData) => {
    try {
      const response = await updateUser({
        variables: {
          id: data.user.id,
          ...formData,
        },
      });

      if (response.data.updateUser.success) {
        showToast(response.data.updateUser.message, "success");
        onClose();
      } else {
        showToast(response.data.updateUser.message, "error");
      }
    } catch (err) {
      showToast("Failed to update user. Try again!", "error");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent
        borderRadius="16px"
        maxW={{ base: "90%", sm: "80%", md: "50%", lg: "30%" }}
      >
        <ModalHeader>Profile Information</ModalHeader>
        <ModalCloseButton />

        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
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
                    defaultValue={data?.user[field.name] || ""}
                    options={field.options || []}
                    register={register}
                    errors={errors}
                    validation={field.validation}
                  />
                </Box>
              ))}
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Footer
              btnText="Update"
              onClose={onClose}
              isLoading={loading}
            />
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
