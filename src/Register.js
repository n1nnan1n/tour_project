import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Register() {
  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
        <div class="border-bottom lh-1 py-3">
          <header class="border-bottom lh-1 py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
              <div class="col-12 text-center">
                <a
                  class="blog-header-logo text-body-emphasis text-decoration-none"
                  href="#"
                >
                  BEYOND THE TRAILS
                </a>
              </div>
            </div>
          </header>
          <header class="border-bottom lh-1 py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
              <div class="col-12 text-center">
                <h class="blog-header-logo text-body-emphasis text-decoration-none">
                  Register
                </h>
              </div>
            </div>
          </header>
          <Row>
            <Form>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Firstname
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Firstname" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Form>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default Register;
