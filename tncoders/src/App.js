import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import SignUp from "./components/header/SignUp/SignUp";
import SignUpInstitution from "./components/header/SignUp/SignUpInstitution";

import Header from "./components/header/Header";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Route exact path="/" />
        <Switch>
          <Route exact path="/signupuser" component={SignUp} />
          <Route exact path="/signupinstitution" component={SignUpInstitution} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
