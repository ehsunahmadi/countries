import { Button } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router";

export default React.memo(function BackButton({
  component: Component,
  ...props
}) {
  const { goBack } = useHistory();

  if (Component) {
    return <Component onClick={goBack} {...props} />;
  }

  return (
    <Box pt="74px" pb="74px">
      <Button
        color="inherit"
        onClick={goBack}
        {...props}
        leftIcon={<ArrowBackIcon />}
        minW={120}
        size="md"
      >
        Back
      </Button>
    </Box>
  );
});
