import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Spinner,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeToggler from "./ColorModeToggler";

export const Message = ({ title, description, status }) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  return (
    <Alert
      status={status}
      borderRadius={10}
      width="xl"
      backgroundColor={
        colorMode === "dark" ? colors.darkBlue : colors.lightGray
      }
    >
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      {!!description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
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

export const AppBar = () => {
  const {
    sizes: { appBarHeight, maxWidth },
    colors,
  } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        display="flex"
        pos="fixed"
        alignItems="center"
        height={appBarHeight}
        backgroundColor={colorMode === "dark" ? colors.blue : colors.white}
        width="100%"
        left="0"
        right="0"
        top="0"
      >
        <Container maxW={maxWidth}>
          <Flex justify="space-between" alignItems="center">
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
        </Container>
      </Box>
      <Spacer height={appBarHeight} />
    </>
  );
};
