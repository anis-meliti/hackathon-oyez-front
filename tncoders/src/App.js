import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// ******Components
import SignUp from "./components/header/SignUp/SignUp";
import SignUpInstitution from "./components/header/SignUp/SignUpInstitution";
import Header from "./components/header/Header";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
// ******Css Import ******
import "./App.css";

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
        <Slider />
      <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
