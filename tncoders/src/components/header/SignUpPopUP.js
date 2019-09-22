import React from "react";
import { Modal, Col, Row } from "react-bootstrap";
import "./Popup.css";
import { withRouter } from "react-router-dom";

function SignUpPopUP({ show, handleClose, history }) {
  const handleClick = e => {
    if (e.target.id === "InstitutionSignUp") {
      history.push("/signupinstitution");
      handleClose();
    } else {
      history.push("/signupuser");
      handleClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose the type of sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col
              id="userSignUp"
              className="choice-cont"
              onClick={e => handleClick(e)}
            >
              Sign Up as a User
            </Col>
            <Col
              id="InstitutionSignUp"
              className="choice-cont"
              onClick={e => handleClick(e)}
            >
              Sign Up as an Institution
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default withRouter(SignUpPopUP);
