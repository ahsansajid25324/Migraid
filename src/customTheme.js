// theme.js
import { Button, extendTheme } from "@chakra-ui/react";
// No need to import font files since they're already linked in index.html

const customTheme = extendTheme({
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

// Export the theme
export default customTheme;
