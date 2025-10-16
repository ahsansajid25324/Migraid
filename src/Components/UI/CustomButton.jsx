import { Button } from "@chakra-ui/react";
import Arrow from "../../assets/icons/Arrow";
import { useNavigate, useLocation } from "react-router-dom";

const CustomButton = ({
  children,
  color,
  showBorder,
  onClick,
  background,
  width,
  height,
  path,
  showIcon,
  activeBgColor = "rgba(34, 185, 116, 1)",
  inactiveBgColor = "transparent",
  ...props
}) => {
  const nav = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Button
      borderRadius="24px"
      fontSize={{ base: "14px", lg: "16px" }}
      p={5}
      color={color}
      fontWeight="medium"
      bg={isActive ? activeBgColor : background || inactiveBgColor}
      border={
        showBorder ? "1px solid white" : "1px solid rgba(34, 185, 116, 1)"
      }
      _hover={{ bg: "rgba(34, 185, 116, 1)", color: "white" }}
      fontFamily="Poppins"
      onClick={() => nav(path)}
      {...props}
      rightIcon={showIcon ? <Arrow /> : null}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
