import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import Consult from "../../assets/images/ConsultService.png";
import Expert from "../../assets/images/valuesBg.png";
import Community from "../../assets/images/community.png";
import Access from "../../assets/images/access.png";
import Integrity from "../../assets/images/integrity.png";

const values = [
  {
    title: "Equity & Empowerment",
    img: Consult,
    description:
      "Every person, regardless of status, origin, or circumstance, deserves equal opportunity and respect. MigRaid stands against discrimination in all forms and actively works to ensure inclusion in every service we provide.<br/>We don’t just help clients complete paperwork, we help them rebuild confidence, independence, and hope.",
  },
  {
    title: "Our Guiding Philosophy",
    img: Access,
    description:
      "Migration is not just movement — it’s transformation.<br/>Migraid was founded on the belief that when people are given fair guidance, compassion, and opportunity, they don’t just survive — they thrive.<br/>Together, we build a future where every immigrant feels safe, supported, and seen.",
  },
  {
    title: "What this means in practice",
    img: Integrity,
    description:
      "One-on-one attention during every intake and case review.<br/>Clear, accessible explanations (no confusing legal jargon).<br/>Emotional support through difficult steps in the process.",
  },
  {
    title: "Integrity & Confidentiality",
    img: Community,
    description:
      "Trust is the foundation of everything we do. <br/>Clients share some of the most personal details of their lives — and we protect that trust fiercely.",
  },
];

const ValuesEmpowerment = () => {
  const borderColor = useColorModeValue("#E5E7EB", "gray.700");

  const cardRefs = useRef(values.map(() => React.createRef()));
  const [cardInViews, setCardInViews] = useState(values.map(() => false));

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardInViews((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      bgImage={Expert}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box py={{ base: 6, lg: 16 }} px={{ base: 4, lg: 8 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 4, lg: 6 }}
          mt={{ base: 6, lg: 8 }}
          flex={"1"}
        >
          {values.map((val, idx) => (
            <Box ref={cardRefs.current[idx]} key={val.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  cardInViews[idx]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
              >
                <Flex
                  alignItems={"center"}
                  bg="transparent"
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="12px"
                  p={4}
                  gap={4}
                  flexDirection={{ base: "column", md: "row" }}
                  boxShadow="sm"
                  flex={1}
                >
                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "18px", lg: "20px" }}
                      fontWeight={500}
                      mb={3}
                    >
                      {val.title}
                    </Heading>
                    <Text color="#444">
                      <Text
                        color="#444"
                        dangerouslySetInnerHTML={{ __html: val.description }}
                      />
                    </Text>
                  </Box>
                </Flex>
              </motion.div>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ValuesEmpowerment;
