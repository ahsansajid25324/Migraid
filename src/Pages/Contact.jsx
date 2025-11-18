import React from "react";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";
import { Box, Button, Grid, Flex, Text, Image } from "@chakra-ui/react";
import { contactData } from "./../data/ContactData";
import { useForm } from "react-hook-form";
import FormInput from "./../Components/Pages/FormInput";
import Footer from "../Components/Pages/Footer";
import Phone from ".././assets/images/Phone.png";
import DetailFormat from "../Components/Pages/DetailFormat";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Img from "../assets/images/anty.png";
import Expert from "../assets/images/cc.png";
import Map from "../assets/images/newMap.png";
import Mail from "../assets/images/mail.png";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
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
        backgroundColor={"#F6F6F6"}
        alignItems="stretch"
        borderRadius={{ base: "8px", lg: "12px" }}
        p={{ base: 4, lg: 6 }}
      >
        <Box
          w={{ base: "100%", lg: "40%" }}
          display="flex"
          flexDirection="column"
          bgImage={Expert}
          borderRadius={{ base: "8px", lg: "12px" }}
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          <Box borderRadius={{ base: "8px", lg: "24px" }} flex="1">
            <Flex
              px={{ base: 4, lg: 8 }}
              pt={{ base: 6, lg: 8 }}
              pb={{ base: 8, md: 8 }}
              direction="column"
              height="100%"
            >
              <Box>
                <Text color="white" fontSize={{ base: "20px", lg: "24px" }}>
                  Contact Information
                </Text>
              </Box>

              <Box mt={{ base: 6, lg: 10 }}>
                <Flex gap={4} alignItems={"center"}>
                  <Box>
                    <Image w="48px" h="48px" src={Phone}></Image>
                  </Box>
                  <Box>
                    <Text color="rgba(192, 192, 192, 1)">Phone Number</Text>
                    <Text fontSize="16px" color="white">
                      888 512 2168
                    </Text>
                  </Box>
                </Flex>
                <Flex mt={8} gap={4} alignItems={"center"}>
                  <Box>
                    <Image w="48px" h="48px" src={Mail}></Image>
                  </Box>
                  <Box>
                    <Text color="rgba(192, 192, 192, 1)">Email</Text>

                    <Text fontSize="16px" color="white">
                      filing@migraid.co{" "}
                    </Text>
                  </Box>
                </Flex>
                <Flex mt={8} gap={4} alignItems={"center"}>
                  <Box>
                    <Image w="48px" h="48px" src={Map}></Image>
                  </Box>
                  <Box>
                    <Text color="rgba(192, 192, 192, 1)">Location</Text>

                    <Text fontSize="16px" color="white" w={{base:'200px', lg: 'auto'}}>
                      PO BOX 770161, HOUSTON, TX, 77215{" "}
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
                  checkboxLabel={
                    "I agree, By clicking here, I will receive SMS from Migraid."
                  }
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3504056876486!2d-95.54175902461007!3d29.738570475078998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c315bf1e3717%3A0x66dbc46fcf5b40ab!2s2600%20S%20Gessner%20Rd%20%23%20420%2C%20Houston%2C%20TX%2077063%2C%20USA!5e0!3m2!1sen!2s!4v1763313494835!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps showing Lucky One Mall location"
        ></iframe>
      </Flex>
      <Flex
        h="auto"
        py={{ base: 6, lg: 12 }}
        px={{ base: 4, lg: 12 }}
        alignItems="center"
        bg="#ffff"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <DetailFormat
            title="WHY CHOOSE US"
            margin="20px"
            alwaysShowFullContent={true}
            SubTitle="Empowering You with Expert Guidance"
            btn="See Upcoming Events"
            content="We deliver personalized consultation services designed to support your success. With a team of seasoned professionals from diverse fields, we offer expert, actionable guidance tailored to your unique situation. We understand that every client has different needs, so we focus on providing clear insights, fresh perspectives, and solutions that truly make an impact. Our commitment to excellence is shown through our confidentiality, attention to detail, and dedication to exceeding your expectations. By choosing us, you gain a trusted partner who genuinely cares about helping you navigate challenges and achieve your goals with confidence."
          ></DetailFormat>
        </Box>
        <Box
          w={{ base: "100%", lg: "42%" }}
          mt={{ base: 6, lg: 0 }}
          ref={imgRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src={Img} />
          </motion.div>
        </Box>
      </Flex>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
