import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { formData } from "../../data/ConsultFormData";

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      as="form"
      bg="rgba(255, 252, 247, 1)"
      ml="auto"
      borderRadius={{ base: "16px", lg: "20px" }}
      onSubmit={handleSubmit(onSubmit)}
      maxW={{ base: "100%", lg: "80%" }}
      p={{ base: 4, lg: 6 }}
    >
      <Box mb="2">
        <Heading fontSize={{base:"20px",lg:"26px"}} fontWeight={"600"} color={"black"}>
          Book Your Free{" "}
          <Text as="span" color="rgba(34, 185, 116, 1)">
            Consultation
          </Text>
        </Heading>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={3} mb={4}>
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
  );
};

export default ConsultationForm;
