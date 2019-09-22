import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid={true} className="main-footer">
      <Col md={8}>
        <Row>
          <h1>TnCoders</h1>
        </Row>
        <Row>
          Our website is the first web site in Tunisia
          <br />
          the collecte for you the training center where you can convert <br />
          from your field of expertise to the IT field, with more details that{" "}
          <br />
          you can found simply by doing your own reaserche
        </Row>
      </Col>
      <Col md={4} className="ml-auto">
        To contact us : Email: contact@contact.com
      </Col>
      <hr />
      <Row className="design-cont">
        this product is made by the <strong> Golden </strong> team N°4
      </Row>
    </Container>
  );
}

export default Footer;
