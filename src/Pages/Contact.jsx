import React from "react";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import { Box, Button, Grid, Flex, Text, Image } from "@chakra-ui/react";
import { contactData } from "./../data/ContactData";
import { useForm } from "react-hook-form";
import FormInput from "./../Components/Pages/FormInput";
import Footer from "../Components/Pages/Footer";
import Phone from ".././assets/images/Phone.png";

const Contact = () => {
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
      <OtherPageHeroSection
        title="Contact Us"
        subtitle="Get in touch"
        descript="Share your thoughts, feedback, or inquiries."
      />

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        mx={{ base: 4, lg: 12 }}
        my={{ base: 6, lg: 12 }}
        alignItems="stretch"
      >
        <Box
          w={{ base: "100%", lg: "40%" }}
          display="flex"
          flexDirection="column"
        >
          <Box
            bg="rgba(2, 2, 38, 1)"
            borderRadius={{ base: "18px", lg: "24px" }}
            flex="1"
          >
            <Flex
              px={{ base: 6, lg: 8 }}
              py={{ base: 8, lg: 8 }}
              direction="column"
              height="100%"
            >
              <Box>
                <Text color="white" fontSize={"24px"}>
                  Contact Information
                </Text>
              </Box>

              <Box mt={{ base: 6, lg: 10 }}>
                <Flex gap={4} alignItems={"center"}>
                  <Box>
                    <Image w="62px" h="62px" src={Phone}></Image>
                  </Box>
                  <Box>
                    <Text color="rgba(192, 192, 192, 1)">Phone Number</Text>
                    <Text fontSize="16px" color="white" w="200px">
                      +1 (346) 346-0642{" "}
                    </Text>
                  </Box>
                </Flex>
                <Flex mt={8} gap={4} alignItems={"center"}>
                  <Box>
                    <Image w="62px" h="62px" src={Phone}></Image>
                  </Box>
                  <Box>
                    <Text color="rgba(192, 192, 192, 1)">Email</Text>

                    <Text fontSize="16px" color="white" w="200px">
                      hello@migraid.us{" "}
                    </Text>
                  </Box>
                </Flex>
                <Flex mt={8} gap={4} alignItems={"center"}>
                  <Box>
                    <Image w="62px" h="62px" src={Phone}></Image>
                  </Box>
                  <Box>
                    <Text color="rgba(192, 192, 192, 1)">Location</Text>

                    <Text fontSize="16px" color="white" w="200px">
                      8300 FM 1960 Rd W, Suite 450, Houston, TX, 77070
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          as="form"
          mx="auto"
          my={{ base: 6, lg: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          w={{ base: "100%", lg: "45%" }}
          display="flex"
          flexDirection="column"
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={3} mb={4}>
            {contactData.map((field, index) => (
              <Box
                key={index}
                gridColumn={
                  field.name === "fullName" || field.name === "phoneNumber"
                    ? "auto"
                    : "1 / -1"
                }
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
                  checkboxLabel={"I agree"}
                  validation={field.validation}
                />
              </Box>
            ))}
          </Grid>

          <Button
            type="submit"
            bg="rgba(34, 185, 116, 1)"
            color="white"
            w="102px"
            fontFamily="'Poppins'"
            h="46px"
            borderRadius={"24px"}
          >
            Submit
          </Button>
        </Box>
      </Flex>
      <Flex
        mx={{ base: 4, lg: 12 }}
        my={{ base: 6, lg: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38051.69389942457!2d67.08999883191336!3d24.90856892059569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4eb7183b97%3A0x35709df45c0003aa!2sLucky%20One%20Mall!5e0!3m2!1sen!2s!4v1733940346420!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps showing Lucky One Mall location"
        ></iframe>
      </Flex>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
