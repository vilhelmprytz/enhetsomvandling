import React from "react";
import "./App.css";

import LengthPage from "./components/pages/Length";
import IndexPage from "./components/pages/Index";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/length">
            <LengthPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
