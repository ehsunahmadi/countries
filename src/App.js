import {
  Box,
  ChakraProvider,
  Container,
  Progress,
  useColorMode,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React, { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppBar } from "./components/lib.js";
import { queryClient } from "./configs/queryClient.js";
import { theme } from "./configs/theme.js";

const Countries = React.lazy(() =>
  import(/* webpackChunkName: "app" */ "./pages/countries")
);
const Country = React.lazy(() =>
  import(/* webpackChunkName: "app" */ "./pages/country")
);

function Routes() {
  const { colors, sizes } = useTheme();
  const { colorMode } = useColorMode();
  return (
    <Suspense fallback={<Progress size="xs" isIndeterminate />}>
      <Router>
        <Box
          backgroundColor={
            colorMode === "dark" ? colors.darkBlue : colors.lightGray
          }
          height="100vh"
        >
          <Container maxW={sizes.maxWidth}>
            <div>
              <nav>
                <AppBar />
              </nav>

              <Switch>
                <Route exact path="/">
                  <Countries />
                </Route>
                <Route path="/:id">
                  <Country />
                </Route>
              </Switch>
            </div>
          </Container>
        </Box>
      </Router>
    </Suspense>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
