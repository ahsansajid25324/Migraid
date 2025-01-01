import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Components/Pages/Footer";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import {
  Box,
  Grid,
  Input,
  Text,
  Flex,
  Button,
  Checkbox,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

import { paymentDetails } from "../data/PaymentData";

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div>
      <NonImgHeroSection title="Payment Details"></NonImgHeroSection>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w={{ base: "90%", md: "80%" }}
        py={12}
        mx="auto"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {paymentDetails.map((field, index) => (
            <Box key={index}>
              <Text mb={2}>{field.label}</Text>
              <FormControl isInvalid={errors[field.name]}>
                <Input
                  placeholder={field.placeholder}
                  {...register(field.name, field.validation)}
                />
                <FormErrorMessage>
                  {errors[field.name] && errors[field.name].message}
                </FormErrorMessage>
              </FormControl>
            </Box>
          ))}
        </Grid>

        <Flex alignItems= 'center'  gap={2} mt={6}>
          <Checkbox  colorScheme="green" {...register("saveCard")} />
          <Text>Save my card for faster payment in the future.</Text>
        </Flex>

        <Button
          type="submit"
          colorScheme="green"
          w={"fit-content"}
          alignSelf={"center"}
          borderRadius={"18px"}

          mt={8}
        >
          Confirm Payment
        </Button>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
