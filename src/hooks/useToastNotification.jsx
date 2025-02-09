import { useToast } from "@chakra-ui/react";

const useToastNotification = () => {
  const toast = useToast();

  const showToast = (message, status = "info") => {
    toast({
      title: message,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
     

    });
  };

  return showToast;
};

export default useToastNotification;
