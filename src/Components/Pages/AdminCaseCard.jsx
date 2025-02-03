import React from "react";
import { FaUpload, FaEdit, FaTrash } from "react-icons/fa";
import { caseData } from "../../data/AdminData";
import { Box, Text, IconButton, Flex, Divider } from "@chakra-ui/react";
import FieldRow from "./FieldRow";

const AdminCaseCard = ({ isMobile }) => {
  return (
    <Box px={6} display={isMobile ? "block" : "none"}>
      {caseData.map((item, index) => (
        <Box
          key={index}
          mt={6}
          border="1px solid rgba(224, 225, 227, 1)"
          borderRadius="12px"
          background="white"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Box
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap={"wrap"}
          >
            <Box>
              <Text fontWeight="bold" fontSize="md">
                SL No {item.slNo}
              </Text>
            </Box>
            <Box>
              <Flex gap={2}>
                <IconButton
                  icon={<FaUpload />}
                  colorScheme="green"
                  size="sm"
                  aria-label="Upload"
                />
                <IconButton
                  icon={<FaEdit />}
                  colorScheme="blue"
                  size="sm"
                  aria-label="Edit"
                />
                <IconButton
                  icon={<FaTrash />}
                  colorScheme="red"
                  size="sm"
                  aria-label="Delete"
                />
              </Flex>
            </Box>
          </Box>
          <Divider w="100%" />

          <Box p={4}>
            <FieldRow label="Customer Name:" value={item.customerName} />
            <FieldRow label="Case Name" value={item.caseName} />
            <FieldRow label="Case No:" value={item.caseNo} />
            <FieldRow label="Total Budget" value={item.totalBudget} />
            <FieldRow label="Due Amount" value={item.dueAmount} />
            <FieldRow label="Case File" value={item.caseFile} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AdminCaseCard;
