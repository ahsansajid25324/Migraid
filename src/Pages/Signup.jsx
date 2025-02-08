import React, { useEffect } from "react";
import NonImgHeroSection from "../Components/Pages/NonImgHeroSection";
import { useForm } from "react-hook-form";
import { Box, Button, Flex, Link, Grid, Text } from "@chakra-ui/react";
import { registrationData } from "./../data/SignupData";
import FormInput from "../Components/Pages/FormInput";
import Footer from "../Components/Pages/Footer";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../graphql/mutations/registerUser";
import useToastNotification from "../hooks/useToastNotification"; // Import custom hook

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser, { loading, data }] = useMutation(REGISTER_USER);
  const showToast = useToastNotification();
  const nav = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await registerUser({ variables: formData });
    } catch (err) {
      showToast("Internal server error. Please try again.", "error");
    }
  };

  useEffect(() => {
    if (data?.register?.success && !loading) {
      showToast(data.register.message, "success");
      setTimeout(() => {
        nav("/login");
      }, 1000); 
    } else if (data?.register?.message && !loading) {
      showToast(data.register.message, "error");
    }
  }, [data, loading, nav, showToast]);

  return (
    <div>
      <NonImgHeroSection title="Sign Up" />
      <Box
        as="form"
        m="auto"
        py={{ base: 8, lg: 14 }}
        borderRadius="20px"
        onSubmit={handleSubmit(onSubmit)}
        maxW={{ base: "90%", lg: "38%" }}
      >
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={3} mb={4}>
          {registrationData.map((field, index) => (
            <Box
              key={index}
              gridColumn={{ base: "auto", lg: index > 1 ? "span 2" : "auto" }}
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
          _hover={{ bg: "rgb(78, 215, 154)", color: "white" }}
          borderRadius="24px"
          isLoading={loading}
        >
          Register
        </Button>

        <Flex justifyContent="center" alignItems="center" mt={5} gap={4}>
          <Text color="gray">
            Already have an account?{" "}
            <Link
              as={ReactRouterLink}
              to="/login"
              color="rgba(34, 185, 116, 1)"
              fontWeight="bold"
            >
              Login
            </Link>
          </Text>
        </Flex>
      </Box>
      <Footer />
    </div>
  );
};

export default Signup;
