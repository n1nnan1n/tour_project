import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Image } from "react-bootstrap";
import trip_outside from "./Pic/trip_outside.jpg";
import button from "react-bootstrap";


function Register() {
  return (
    <>
      <div class="bg">
        {/* <Container style={{ marginBottom: "20px" }}> */}

        <Container>
          <Row>
            <Col>
              <Image
                style={{
                  width: "500px",
                  height: "700px",
                  marginBottom: "10%",
                  marginTop: "10%",
                }}
                src={trip_outside}
                fluid
              />
            </Col>
            <Col>
              {" "}
              <div class="border-bottom lh-1 py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                  <div
                    class="col-12 text-center"
                    style={{
                      marginTop: "30%",
                      marginBottom: "20px",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <h>Register</h>
                  </div>
                </div>

                <Row style={{paddingLeft:'10%'}}>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Col sm="10">
                        <Form.Label  style={{float:'left',fontWeight:'bold'}}>
                          Firstname
                        </Form.Label>
                        <Form.Control type="text" placeholder="Firstname" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Col sm="10">
                        <Form.Label style={{float:'left',fontWeight:'bold'}}>
                          Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Col sm="10">
                        <Form.Label  style={{float:'left',fontWeight:'bold'}}>
                          Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Col sm="10">
                        <Form.Label style={{float:'left',fontWeight:'bold'}}>
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          type=" ConfirmPassword"
                          placeholder=" ConfirmPassword"
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Row>
              </div>          
    <div className="d-grid gap-2" style={{marginTop:'30px',width:'50%',marginLeft:'25%'}}>
      <Button className='button'  size="lg">
        REGISTER
      </Button>
      <Button variant="secondary" size="lg">
        LOGIN
      </Button>
    </div>
            </Col>
  

          </Row>
        </Container>

        {/* </Container> */}
      </div>
    </>
  );
}
export default Register;
