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
    
        // setValidated(true);
      };
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
            <div style={{
            marginTop:"4%",
            width:"30%",
            fontSize: "16px",
            float:"left"
          }}>
          <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            />
          </div>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>food allergy</Form.Label>
              <Form.Control type="text" placeholder="food allergy" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid food allergy.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>phone</Form.Label>
              <Form.Control type="number" placeholder="Phone" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        
          
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
