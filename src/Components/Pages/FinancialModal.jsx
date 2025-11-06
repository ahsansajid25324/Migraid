import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Spinner,
} from "@chakra-ui/react";

const FinancialModal = ({ isOpen, onClose }) => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const handleLoad = () => setIsFormLoaded(true);

  useEffect(() => {
    if (isOpen) {
      setIsFormLoaded(false);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius={{ base: "16px", lg: "20px" }}>
        <ModalCloseButton />
        <ModalBody p={0}>
          {!isFormLoaded && (
            <Box
              height="500px"
              width="99%"
              borderRadius="12px"
              bg="rgba(255, 255, 255, 0.1)"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="rgba(255, 255, 255, 0.2)"
                color="rgba(34, 185, 116, 1)"
                size="xl"
              />
            </Box>
          )}
          <Box style={{ display: isFormLoaded ? "block" : "none" }}>
            <iframe
              className="fieldContWrapper"
              aria-label="Financial Assistance Request Form"
              style={{
                height: "500px",
                width: "99%",
                border: "none",
                borderRadius: "12px",
              }}
              src="https://forms.zohopublic.com/IDEATORSCUP/form/FinancialAssistanceRequestForm/formperma/rvIOAHuW4uuNWUKyPGdMHozAl5vHnh4WUaAOlX4gSeo"
              title="Financial Assistance Request Form"
              onLoad={handleLoad}
            ></iframe>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FinancialModal;
