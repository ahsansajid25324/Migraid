import { useToast } from "@chakra-ui/react";

const useToastNotification = () => {
  const toast = useToast();

  const showToast = (message, status = "info") => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
      position: "top",
      containerStyle: {
        paddingTop:2
      },

    });
  };

  return showToast;
};

export default useToastNotification;
