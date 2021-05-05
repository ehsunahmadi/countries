import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const CountryDetailField = ({ field }) => {
  const { name, value, renderComponent } = field;

  return (
    <Box pb={1}>
      <Text display="inline" fontWeight="bold">
        {name + ": "}
      </Text>
      {renderComponent ? (
        renderComponent()
      ) : (
        <Text display="inline">{value}</Text>
      )}
    </Box>
  );
};

export default CountryDetailField;
