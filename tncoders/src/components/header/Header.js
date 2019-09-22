import React, { Fragment, useState } from "react";
import { Navbar, Button, FormControl, Nav, Form } from "react-bootstrap";
import Popup from "./Popup";
import SignUpPopup from "./SignUpPopUP";
import FIND_INSTITUTIONS from '../../graphql/queries/findInstitution';
import { Query } from 'react-apollo';
import Institution from './../Institution';
import './Header.css';

function Header() {
  const [show, setShow] = useState({
    showSignIn: false,
    showSignUp: false
  });
  const [search, setSearch] = useState("");
  const { showSignIn, showSignUp } = show;
  const handleClose = () => {
    setShow(false);
  };
  const handleChange = (e) => setSearch(e.target.value)
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tn Coders</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="md-4" onChange={(e) => handleChange(e)} />
          <div className="cart">
            <Query query={FIND_INSTITUTIONS} variables={{input: search}}>
              {
                ({ error, loading, data }) => {
                  if(error) return <h4>Error`${error}`</h4>;
                  if (loading) return <h4>Loading...</h4>;
                  return data.FindInstitution.map(
                    (element) => <Institution key={element.id} institution={element} search={search.length}/>);
                } 
              }
            </Query>        
          </div>
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
