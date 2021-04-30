import { ChakraProvider, Container } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppBar } from "./components/lib.js";
import { queryClient } from "./configs/queryClient.js";
import { theme } from "./theme/index.js";
const Countries = React.lazy(() =>
  import(/* webpackChunkName: "app" */ "./pages/countries")
);
const Country = React.lazy(() =>
  import(/* webpackChunkName: "app" */ "./pages/country")
);

function Routes() {
  return (
    <Suspense fallback={<>preloader</>}>
      <Router>
        <div>
          <nav>
            <AppBar />
          </nav>

          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route path="/:name">
              <Country />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Container maxW="1440px">
        <Routes />
      </Container>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
