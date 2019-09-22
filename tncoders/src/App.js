import React from "react";
// ******Components
import SignUp from "./components/header/SignUp/SignUp";
import SignUpInstitution from "./components/header/SignUp/SignUpInstitution";
import Header from "./components/header/Header";
import Slider from "./components/Slider/Slider";
// ******Bootstrap*******
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ******Css Import ******
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" />
      <Switch>
        <Route exact path="/signupuser" component={SignUp} />
        <Route exact path="/signupinstitution" component={SignUpInstitution} />
      </Switch>
      <Slider />
    </Router>
  );
}

export default App;
