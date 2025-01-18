import { Tab } from "@chakra-ui/react";
import React from "react";

const CustomTab = ({ label }) => {
  return (
    <div>
      <Tab
        _selected={{
          color: "rgba(34, 185, 116, 1)",
          borderColor: "rgba(34, 185, 116, 1)",
        }}
        _hover={{ color: "rgba(34, 185, 116, 1)" }}
        color="gray.500"
      >
        {label}
      </Tab>
    </div>
  );
};

export default CustomTab;
