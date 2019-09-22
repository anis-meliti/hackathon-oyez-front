import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./SignUp.css";

function SignUpInstitution() {
  const [instit, setinstit] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
    description: "",
    link: ""
  });
  const changeHandler = e => {
    setinstit({
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventdefault();
    console.log(instit);
  };

  return (
    <Container className="mr-auto form-cont ">
      <Form>
        <Form.Row className="form-title">
          <h4>Please fill all the fiealds</h4>
        </Form.Row>
        <Form.Row>
          <Form.Group onChange={changeHandler}>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              name="Name"
              type="text"
              placeholder="Name"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.Label>Location:</Form.Label>
            <Form.Control
              name="text"
              type="text"
              placeholder="Enter your location"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
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
            <Form.Label>Password:</Form.Label>
            <Form.Control
              name="password2"
              type="password"
              placeholder="Confirm password"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              name="description"
              placeholder="description"
              onChange={changeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Link to your website:</Form.Label>
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

export default SignUpInstitution;
