import React, { useState } from "react";
import { Modal, FormControl, Button } from "react-bootstrap";

function Popup({ show, handleClose }) {
  const [userCred, setUserCred] = useState({
    email: "",
    password: ""
  });
  const changeHandler = e => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          name="email"
          type="email"
          placeholder="Please enter your e-mail..."
          onChange={changeHandler}
        />

        <FormControl
          name="password"
          type="password"
          placeholder="Please enter your Password"
          onChange={changeHandler}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
