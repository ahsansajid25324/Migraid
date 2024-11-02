// theme.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/plus-jakarta-sans"; // Import Plus Jakarta Sans
import "@fontsource/poppins"; // Import Poppins

const customTheme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, Arial, sans-serif",
    body: "Poppins, Arial, sans-serif",
    text: "Poppins,Arial, sans-serif", // This line is redundant, can be removed
  },
});

// Export the theme
export default customTheme;
