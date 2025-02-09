import React from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations/loginUser";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useToastNotification from "../hooks/useToastNotification";
import { Box, Button, Grid, Text, Flex, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { loginData } from "../data/SignupData";
import FormInput from "../Components/Pages/FormInput";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showToast = useToastNotification();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const onSubmit = async (formData) => {
    try {
      const { data } = await loginUser({ variables: formData });
  
      if (data?.login?.success) {
        dispatch(loginSuccess(data.login.token));
        
        navigate("/dashboard");
        setTimeout(() => {
          showToast(data.login.message, "success");
        }, 1000);

      } else {
        showToast(data?.login?.message || "Login failed. Please try again.", "error");
      }
    } catch (err) {
      showToast("Internal server error. Please try again.", "error");
    }
  };
  

  return (
    <Box
      as="form"
      m="auto"
      py={{ base: 8, lg: 14 }}
      borderRadius="20px"
      onSubmit={handleSubmit(onSubmit)}
      maxW={{ base: "90%", lg: "38%" }}
    >
      <Grid templateColumns="1fr" gap={3} mb={4}>
        {loginData.map((field, index) => (
          <Box key={index}>
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
        borderRadius="24px"
        _hover={{ bg: "rgb(78, 215, 154)", color: "white" }}
        isLoading={loading}
      >
        Login
      </Button>

      <Flex justifyContent="center" alignItems="center" mt={5} gap={4}>
        <Text color="gray">
          Don't have an account?{" "}
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
  );
};

export default Login;
