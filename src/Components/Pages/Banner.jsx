import { Image, Box, Text } from "@chakra-ui/react";
import Arrow from "../../assets/icons/Arrow";
import Line from "../../assets/images/Line.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
const Banner = ({
  img,
  title,
  subtitle,
  content,
  margin,
  btncontent,
  alignment = "right",
  show = true,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Modal component selection based on 'show' prop
  const ModalComponent = show
    ? ConsultationModal
    : require("./FinancialModal").default;

  return (
    <>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />

      <Box
        position="relative"
        borderRadius={{ base: "16px", lg: "28px" }}
        overflow="hidden"
        mx={{ base: 4, lg: 8 }}
        mb={margin ? margin : 0}
        mt={{ base: 8, lg: 12 }}
        display="flex"
        alignItems="center"
        justifyContent={alignment === "left" ? "flex-start" : "flex-end"}
        py={{ base: 8, lg: 10 }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background:
            alignment === "left"
              ? "linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.8))"
              : "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        }}
      >
        <Image
          src={img}
          alt="Airport Immigration"
          objectFit="cover"
          w="100%"
          filter="brightness(1)"
          position="absolute"
          top={0}
          left={0}
          h="100%"
          zIndex={0}
        />

        <Box
          ref={ref}
          position="relative"
          zIndex={2}
          w={{ base: "95%", md: "80%", lg: "50%" }}
          color="white"
          justifyItems={{ base: "left", lg: "initial" }}
          textAlign={{ base: "left", lg: "left" }}
          ml={{ base: 4, lg: 8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Box display="flex" gap={3} alignItems="center" mb={2}>
              <Image
                w={{ base: "24px", lg: "30px" }}
                h="3px"
                src={Line}
                alt="Line separator"
              />

              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                color="#FFFFF"
                fontWeight={"500"}
              >
                {title}
              </Text>
              <Image
                w={{ base: "24px", lg: "30px" }}
                h="3px"
                src={Line}
                alt="Line separator"
              />
            </Box>
          </motion.div>
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Box
                as="h1"
                width={{ base: "95%", lg: "100%" }}
                fontWeight="700"
                fontSize={{ base: "26px", md: "3xl", lg: "3.2rem" }}
                lineHeight={{ base: "2.2rem", md: "3.5rem", lg: "4rem" }}
                mb={{ base: 2, lg: 4 }}
              >
                {subtitle}
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                color="white"
                w={{ base: "95%", lg: "90%" }}
                mb={4}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Box>
                <Box
                  as="a"
                  href="#consultation"
                  bg="rgba(34, 185, 116, 1)"
                  color="white"
                  px={{ base: 4, lg: 4 }}
                  py={{ base: 3, lg: 3 }}
                  borderRadius={{ base: "28px", lg: "32px" }}
                  fontWeight="600"
                  fontSize={{ base: "14px", md: "18px" }}
                  display="inline-flex"
                  alignItems="center"
                  boxShadow="md"
                  _hover={{ bg: "rgba(34, 185, 116, 0.85)" }}
                  transition="background 0.2s"
                  onClick={openModal}
                >
                  {btncontent}
                  <Box as="span" ml={2} display="flex" alignItems="center">
                    <Arrow
                      color="#fff"
                      width={{ base: 16, lg: 20 }}
                      height={{ base: 16, lg: 20 }}
                    />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
