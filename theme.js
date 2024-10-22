import { extendTheme } from '@chakra-ui/react';
import 'typeface-poppins';
import 'typeface-plus-jakarta-sans';



const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`, // Use Plus Jakarta Sans for headings
    body: `'Poppins', sans-serif`, // Use Poppins for body text
  },
});

// Export the theme
export default theme;
