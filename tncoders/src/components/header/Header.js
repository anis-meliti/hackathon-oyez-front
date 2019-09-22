import React, { Fragment, useState } from "react";
import { Navbar, Button, FormControl, Nav, Form } from "react-bootstrap";
import Popup from "./Popup";
import SignUpPopup from "./SignUpPopUP";

function Header() {
  const [show, setShow] = useState({
    showSignIn: false,
    showSignUp: false
  });
  const { showSignIn, showSignUp } = show;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tn Coders</Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="md-4" />
        </Form>

        <Nav className="ml-auto">
          <Button
            variant="outline-primary"
            onClick={() => setShow({ showSignIn: true })}
          >
            Login
          </Button>
          <Button
            variant="outline-success "
            onClick={() => setShow({ showSignUp: true })}
          >
            {" "}
            Sign Up
          </Button>
        </Nav>
      </Navbar>
      <Popup show={showSignIn} handleClose={handleClose} />
      <SignUpPopup show={showSignUp} handleClose={handleClose} />
    </Fragment>
  );
}

export default Header;
