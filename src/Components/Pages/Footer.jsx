import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Input,
  Button,
  Image,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import FooterBg from "../../assets/images/footerBg.png";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import FLine from "../../assets/images/FooterLine.png";
import Logo from "../../assets/images/Logo.png";

import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();
  return (
    <Box
      position="relative"
      bgImage={FooterBg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      py={{ base: "10", xl: "14" }}
      px={{ base: "5", xl: "20" }}
    >
      <Grid
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        wrap="wrap"
        templateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
        }}
      >
        {/* Brand and Description */}
        <Box align="start" spacing="4">
          <Image src={Logo} alt="Logo" />
          <Text fontSize={{ base: "14px", lg: "16px" }} w={"300px"} mt={4}>
            We believe everyone deserves access to honest, affordable
            immigration help. Migraid Foundation stands beside you — from your
            first question to your new beginning.
          </Text>
          <Flex mt="4" gap={3}>
              <a
                href="https://www.facebook.com/share/16QcCtgd9m/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaFacebook} boxSize="6" />
              </a>
              <a
                href="https://www.instagram.com/migraid.us?igsh=cjEzdHRqajA3M2Zh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaInstagram} boxSize="6" />
              </a>
              <Link href="#">
                <Icon as={FaTwitter} boxSize="6" />
              </Link>
              <Link href="#">
                <Icon as={FaLinkedin} boxSize="6" />
              </Link>
          </Flex>
        </Box>

        {/* Useful Links */}
        <Box mt={{ base: "6", md: "0" }} m={{ base: "normal", xl: "auto" }}>
          <Heading fontSize={{ base: "20px", lg: "24px" }} mb={4}>
            Useful Links
          </Heading>

          <Flex flexDirection={"column"} rowGap={2}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Clinics</Link>
            <Link href="#">Values</Link>
            <Link href="#">Contacts</Link>
          </Flex>
        </Box>

        {/* Contact Us */}
        <Box mt={{ base: "6", xl: "0" }}>
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
              2600 S Gessner Rd Ste 420, Houston, TX, 77063
            </Text>
          </Flex>
          <Flex align="center" mt={4}>
            <Icon as={AiOutlinePhone} boxSize="6" mr="2" color="green.400" />
            <Text fontSize="16px">+1 (888) 512-2168</Text>
          </Flex>
          <Flex align="center" mt={4}>
            <Icon as={AiOutlineMail} boxSize="6" mr="3" color="green.400" />
            <Text fontSize="16px">FILING@MIGRAID.CO</Text>
          </Flex>
        </Box>

        <Box align="start" spacing="4" mt={{ base: "6", xl: "0" }}>
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

      <Box mt="10">
        <Image src={FLine}></Image>
      </Box>

      <Flex
        justifyContent="space-between"
        mt="10"
        direction={{ base: "column", md: "row" }}
        align={{ base: "normal", lg: "center" }}
        fontSize="sm"
      >
        <Text>©2026 Migraid All Rights Reserved.</Text>
        <Flex
          zIndex={"1000"}
          mt={{ base: "4", md: "0" }}
          gap={{ base: 2, lg: 4 }}
          flexDirection={{ base: "column", lg: "row" }}
          align={{ base: "normal", lg: "center" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 2, lg: 4 }}
            align={{ base: "normal", lg: "center" }}
          >
            <Link href="#">Terms & Conditions</Link>
            <Text
              display={{ base: "none", lg: "flex" }}
              color="rgba(34, 185, 116, 1)"
            >
              |
            </Text>{" "}
            <Text
              cursor="pointer"
              onClick={() => nav("/privacy-policy")}
              _hover={{ textDecoration: "underline" }}
            >
              Privacy Policy
            </Text>
            <Text
              display={{ base: "none", lg: "flex" }}
              color="rgba(34, 185, 116, 1)"
            >
              |
            </Text>{" "}
            <Text
              cursor="pointer"
              onClick={() => nav("/pci-compliance")}
              _hover={{ textDecoration: "underline" }}
            >
              PCI Compliance Policy
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
