import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeToggler from "./ColorModeToggler";

export const Message = ({ title, description, status }) => {
  return (
    <Box my={2}>
      <Alert status={status} borderRadius={10}>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
        {!!description && <AlertDescription>{description}</AlertDescription>}
      </Alert>
    </Box>
  );
};

export const LoadingSpinner = () => {
  return (
    <Center my={2}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.400"
        size="xl"
      />
    </Center>
  );
};

export const AppBar = () => (
  <Flex alignItems="center" height={78}>
    <Box>
      <Link as={RouterLink} to="/">
        <Heading as="h1" size="md">
          Where in the world?
        </Heading>
      </Link>
    </Box>
    <Spacer />
    <Box>
      <ColorModeToggler />
    </Box>
  </Flex>
);
