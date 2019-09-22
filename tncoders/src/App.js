import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/header/SignUp/SignUp";
import SignUpInstitution from "./components/header/SignUp/SignUpInstitution";

import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" />
      <Switch>
        <Route exact path="/signupuser" component={SignUp} />
        <Route exact path="/signupinstitution" component={SignUpInstitution} />
      </Switch>
    </Router>
  );
}

export default App;
