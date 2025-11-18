
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { Box, Image, Flex, Text, Grid } from "@chakra-ui/react";
import PImage from "../../assets/images/Person.png";
import Girl from "../../assets/images/girl.png";

import Consult from "../../assets/images/ConsultService.png";
import DetailFormat from "./DetailFormat";
function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <Flex
      py={{ base: 6, lg: 12 }}
      px={{ base: 4, lg: 8 }}
      justifyContent={"space-between"}
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={"center"}
    >
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        w={{ base: "100%", lg: "42%" }}
        mt={{ base: 2, lg: 0 }}
        gap={4}
        ref={ref}
      >
          <motion.div
            style={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "100%" }}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box flex="1">
              <Image
                w="100%"
                borderRadius={{ base: "12px", lg: "20px" }}
                src={PImage}
              />
            </Box>
            <Box
              mt={4}
              alignItems="center"
              bg="white"
              justifyContent="center"
              border="1px solid rgba(34, 185, 116, 1)"
              borderRadius={{ base: "12px", lg: "20px" }}
              gap={2}
              p={{ base: 2, lg: 4 }}
              display="flex"
              flexDirection="column"
              textAlign="center"
            >
              <Image w="52px" h="52px" src={Consult} />
              <Text
                fontFamily="'Poppins'"
                fontSize={{ base: "1rem", lg: "1.2rem" }}
                fontWeight="500"
              >
                Consultation Services
              </Text>
            </Box>
          </motion.div>

        {/* Right Section with Experience and Image */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "100%" }}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Box
            mb={4}
            flex="1"
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            border="1px solid rgba(34, 185, 116, 1)"
            borderRadius={{ base: "12px", lg: "20px" }}
            gap={2}
            p={{ base: 2, lg: 4 }}
            textAlign="center"
            color="white"
            bg="rgba(34, 185, 116, 1)"
          >
            <Text>
              <Text
                as="span"
                fontSize={{ base: "1.6rem", lg: "2rem" }}
                fontWeight="bold"
              >
                1000 +
              </Text>
              <br></br>
              <Text as="span" fontSize={{ base: "1rem", lg: "1.2rem" }} ml={1}>
                Families settled
              </Text>
            </Text>
          </Box>
          <Box flex="1">
            <Image
              w="100%"
              borderRadius={{ base: "12px", lg: "20px" }}
              src={Girl}
            />
          </Box>
        </motion.div>
      </Grid>

      <Box w={{ base: "100%", lg: "50%" }} mt={{ base: 8, lg: 0 }}>
        <DetailFormat
          title="WHO WE ARE"
          margin="6"
          showValues={true}
          btn="Support Our Work"
          SubTitle="About Migraid"
          showButton={true}
        ></DetailFormat>
      </Box>
    </Flex>
  );
}

export default AboutSection;
