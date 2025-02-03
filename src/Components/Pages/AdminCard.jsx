import React from "react";
import FieldRow from "./FieldRow";
import { Box, Text, Badge, Divider } from "@chakra-ui/react";

const AdminCard = ({ data, isMobile }) => {
  return (
    <div>
      <Box display={isMobile ? "block" : "none"}>
        {data.map((item, index) => (
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
              <Text fontWeight="bold" fontSize="md">
                SL. No. {item.slNo}
              </Text>
              <Badge colorScheme="green" fontSize="md">
                {item.questionStatus}
              </Badge>
            </Box>
            <Divider w="100%" />

            <Box p={4}>
              <FieldRow label="Customer Name:" value={item.customerName} />
              <FieldRow
                label="Payment Status:"
                value={item.paymentStatus}
                valueColor={
                  item.paymentStatus === "Paid" ? "green.500" : "red.500"
                }
                isBold
              />
              <FieldRow label="Date:" value={item.date} />
              <FieldRow
                label="Question:"
                question={true}
                value={item.question}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default AdminCard;
