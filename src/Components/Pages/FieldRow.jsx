import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const FieldRow = ({
  label,
  question,
  value,
  valueColor = "inherit",
  isBold = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <Box
        display={question ? "inital" : "flex"}
        justifyContent="space-between"
        mb={2}
        flexWrap={'wrap'}
        alignItems="center"
      >
        <Text fontSize="md" fontWeight="bold">
          {label}
        </Text>
        <Box
          onClick={handleToggle}
          cursor="pointer"
          maxW={isExpanded ? "100%" : "90%"}
          overflow={isExpanded ? "visible" : "hidden"}
          textOverflow={isExpanded ? "unset" : "ellipsis"}
          whiteSpace={isExpanded ? "normal" : "nowrap"}
          color={valueColor}
        >
          <Text fontSize="md" fontWeight={isBold ? "bold" : "normal"}>
            {value}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default FieldRow;
