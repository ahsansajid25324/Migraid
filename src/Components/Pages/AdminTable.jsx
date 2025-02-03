import React, { useState } from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import AnswerModal from "./AnswerModal";

const AdminTable = ({ data, fields }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBadgeClick = (item) => {
    if (item.questionStatus === "Not Answered") {
      setSelectedItem(item);
      onOpen();
    }
  };

  return (
    <>
      <Table mt={12} variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {fields.map((field) => (
              <Th key={field.key}>{field.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, rowIndex) => (
            <Tr key={rowIndex}>
              {fields.map((field) => (
                <Td key={field.key}>
                  {field.isBadge ? (
                    <Badge
                      colorScheme={field.badgeColor}
                      cursor="pointer"
                      onClick={() => handleBadgeClick(item)}
                    >
                      {item[field.key]}
                    </Badge>
                  ) : (
                    item[field.key]
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <AnswerModal isOpen={isOpen} onClose={onClose}></AnswerModal>
    </>
  );
};

export default AdminTable;
