import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Countries = React.lazy(() =>
  import(/* webpackChunkName: "app" */ "./pages/countries")
);
const Country = React.lazy(() =>
  import(/* webpackChunkName: "app" */ "./pages/country")
);

function App() {
  return (
    <Suspense fallback={<>preloader</>}>
      <Router>
        <div>
          <nav>where in the world?</nav>

          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route path="/:id">
              <Country />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
