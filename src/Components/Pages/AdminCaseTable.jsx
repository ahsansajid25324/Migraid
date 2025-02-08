import {
  Box,
  Table,
  Thead,
  Tr,
  Flex,
  IconButton,
  Th,
  Tbody,
  Td,
 } from "@chakra-ui/react";
import React from "react";

import { FaUpload, FaEdit, FaTrash } from "react-icons/fa";

import { caseData, caseFields } from "../../data/AdminData";
const AdminCaseTable = ({ isMobile }) => {
  return (
    <Box p={{ base: 6, lg: 8 }} display={isMobile ? "none" : "block"}>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {caseFields.map((field) => (
              <Th key={field.key}>{field.label}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {caseData.map((item, rowIndex) => (
            <Tr key={rowIndex}>
              {caseFields.map((field) => (
                <Td key={field.key}>{item[field.key]}</Td>
              ))}
              <Td>
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
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdminCaseTable;
