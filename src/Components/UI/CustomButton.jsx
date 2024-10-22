import { Button } from "@chakra-ui/react";
import Arrow from "../../assets/icons/Arrow";

const CustomButton = ({ children,color, onClick, width, height, showIcon, ...props }) => {
  return (
    <Button
      borderRadius="32px"
     fontSize={{base:'14px',lg:'18px'}}
      flexWrap={'wrap'}
      width={width}
      color={color}
      bg="transparent"
      border="1px solid rgba(34, 185, 116, 1)"
      _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
      height={height}
      onClick={onClick}
      {...props}
      rightIcon={showIcon ? <Arrow></Arrow> : null} 
      
    >
      {children}
    </Button>
  );
};

export default CustomButton;
