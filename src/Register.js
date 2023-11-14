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
import trip_outside from "./Pic/firstpage/trip_outside.jpg";
import button from "react-bootstrap";

import { useEffect, useState } from "react";
import Select from "react-select";

function Register() {
  const [validated, setValidated] = useState(false);
    
      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
      const CountrySelect = () => {
        const [countries, setCountries] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState({});
      
        useEffect(() => {
          fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
          )
            .then((response) => response.json())
            .then((data) => {
              setCountries(data.countries);
              setSelectedCountry(data.userSelectValue);
            });
        }, []);
  return (
    
    
    <div className="wrapper">
      <div class="bg" >
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group> */}
             <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>nationality</Form.Label>
              <Form.Control type="text" placeholder="nationality" required />
              <Form.Control.Feedback type="invalid">
                Please select your nationality.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>food allergy</Form.Label>
              <Form.Control type="text" placeholder="food allergy" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid food allergy.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>phone</Form.Label>
              <Form.Control type="number" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group> */}
          
        </Form>
                  {/* <Form>
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
                  </Form> */}
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
    </div>
  );
}}
export default Register;
