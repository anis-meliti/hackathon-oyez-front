import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./SignUp.css";

function SignUp() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
    studyField: ""
  });
  const changeHandler = e => {
    setUser({
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventdefault();
    console.log(user);
  };

  return (
    <Container className="mr-auto form-cont ">
      <Form>
        <Form.Row className="form-title">
          <h4>Please fill all the fiealds</h4>
        </Form.Row>
        <Form.Row>
          <Form.Group onChange={changeHandler}>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
              name="fullName"
              type="text"
              placeholder="Full name"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password2"
              type="password"
              placeholder="Confirm password"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Study Field:</Form.Label>
            <Form.Control
              name="studyField"
              placeholder="Study Field"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button
            className="btn-submit"
            variant="primary"
            type="submit"
            onSubmit={e => handleSubmit(e)}
          >
            Submit
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
}

export default SignUp;
