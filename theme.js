import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "'Poppins', Arial, sans-serif",
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "'Poppins', Arial, sans-serif",
      },
    },
  },
});

export default theme;
