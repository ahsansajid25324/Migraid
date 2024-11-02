import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  Icon,
  Input,
  Button,
  Image,
  Grid,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Logo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py="10" px={{ base: "5", md: "20" }}>
      <Grid
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        wrap="wrap"
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
      >
        {/* Brand and Description */}
        <Box align="start" spacing="4">
          <Image src={Logo} alt="Logo" />
          <Text fontSize={{ base: "14px", lg: "16px" }} w={"300px"} mt={4}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <Flex mt="4" gap={3}>
            <Link href="#">
              <Icon as={FaFacebook} boxSize="6" />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} boxSize="6" />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} boxSize="6" />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} boxSize="6" />
            </Link>
          </Flex>
        </Box>

        {/* Useful Links */}
        <Box mt={{ base: "6", md: "0" }} m={{ base: "normal", lg: "auto" }}>
          <Heading fontSize={{ base: "20px", lg: "24px" }} mb={4}>
            Useful Links
          </Heading>

          <Flex flexDirection={"column"} rowGap={2}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Reviews</Link>
            <Link href="#">Contact Us</Link>
          </Flex>
        </Box>

        {/* Contact Us */}
        <Box mt={{ base: "6", md: "0" }}>
          <Heading fontSize={{ base: "20px", lg: "24px" }} mb={4}>
            Contact Us
          </Heading>
          <Flex>
            <Icon
              mt="4px"
              as={AiOutlineEnvironment}
              boxSize="6"
              mr="2"
              color="green.400"
            />
            <Text fontSize="16px" w="200px">
              8300 FM 1960 Rd W, Suite 450, Houston, TX, 77070
            </Text>
          </Flex>
          <Flex align="center" mt={4}>
            <Icon as={AiOutlinePhone} boxSize="6" mr="2" color="green.400" />
            <Text fontSize="16px">+1 (346) 346-0642</Text>
          </Flex>
          <Flex align="center" mt={4}>
            <Icon as={AiOutlineMail} boxSize="6" mr="3" color="green.400" />
            <Text fontSize="16px">Hello@Migraid.Us</Text>
          </Flex>
        </Box>

        <Box align="start" spacing="4" mt={{ base: "6", md: "0" }}>
          <Heading fontSize={{ base: "20px", lg: "24px" }} mb={4}>
            Newsletter
          </Heading>
          <Text fontSize="sm" mb={4}>
            Please subscribe to our newsletter to get all recent updates.
          </Text>
          <Flex as="form" w="100%" align="center" position="relative">
            <Input
              placeholder="Email"
              bg="white"
              color="black"
              borderRadius="20px"
              pr="50px"
            />
            <Button
              bg="green.400"
              color="white"
              borderRadius="20px"
              position="absolute"
              right="0"
              height="100%"
              _hover={{ bg: "green.500" }}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Grid>

      <Flex
        justifyContent="space-between"
        mt="10"
        direction={{ base: "column", md: "row" }}
        align={{ base: "normal", lg: "center" }}
        fontSize="sm"
      >
        <Text>©2024 Law Aid. All Rights Reserved.</Text>
        <Flex
          mt={{ base: "4", md: "0" }}
          gap={{base:2,lg:4}}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Link href="#">Term & Conditions</Link>{" "}
          <Link href="#">Privacy Policy</Link>{" "}
          <Link href="#">PCI Compliance Policy</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
