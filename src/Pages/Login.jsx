import React from "react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import { useForm } from "react-hook-form";
import { Box, Button, Flex, Link, Grid, Text } from "@chakra-ui/react";

import { loginData } from "./../data/SignupData";
import FormInput from "../Components/Pages/FormInput";
import Footer from "../Components/Pages/Footer";

import { Link as ReactRouterLink } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <NonImgHeroSection title="Login"></NonImgHeroSection>
      <Box
        as="form"
        m="auto"
        py={{ base: 8, lg: 14 }}
        borderRadius={"20px"}
        onSubmit={handleSubmit(onSubmit)}
        maxW={{ base: "90%", lg: "38%" }}
      >
        <Grid templateColumns={'1fr'} gap={3} mb={4}>
          {loginData.map((field, index) => (
            <Box
              key={index}
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

        <Button
          type="submit"
          bg="rgba(34, 185, 116, 1)"
          color="white"
          w="full"
          borderRadius={"24px"}
        >
          Login
        </Button>

        <Flex justifyContent="center" alignItems="center" mt={5} gap={4}>
          <Text color="gray">
            Don't have an account? {" "}
            <Link
              as={ReactRouterLink}
              to="/signup"
              color="rgba(34, 185, 116, 1)"
              fontWeight="bold"
            >
              Signup
            </Link>
          </Text>
        </Flex>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Login;
