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
import bg from './Pic/bg.jpg'
import { useEffect, useState } from "react";
import Select from "react-select";
// import axios from "axios";

function Register() {
  // axios.post('localhost:9000/registe')
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
      <div  class="bgsign" >
        {/* <Container style={{ marginBottom: "20px" }}> */}

        <Container>
       
          <Row>
            <Col>
              {" "}
              <div className="bgblur"  style={{padding:'30px', marginTop: "10%",width:'60%',height:'85%'}}>
       
              <div class="border-bottom lh-1 py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                  <div
                    class="col-12 text-center"
                    
                  >
                    <p style={{
                     
                      marginBottom: "50px",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                    }}>Register</p>
                  </div>
                </div>

                <Row >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
               
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
               
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          <Form.Group as={Col} md="4" controlId="validationCustom02">
             <Form.Label>nationality</Form.Label>
          <Select
      
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            />
         
          </Form.Group>
          </Row>
          <Row className="mb-4" style={{marginBottom:'5px'}}>
          <Form.Group as={Col} md="8" controlId="validationCustom02">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="E-mail"
               
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>phone</Form.Label>
              <Form.Control type="number" placeholder="Phone" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone.
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
          <Row className="mb-4">
           
           
          <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
          
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Password" placeholder="Confirm Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Confirm Password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control type="date" placeholder="Birthdate" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Birthdate.
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>food allergy</Form.Label>
              <Form.Control type="text" placeholder="food allergy" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid food allergy.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>special requirement</Form.Label>
              <Form.Control type="text" placeholder="special requirement" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid special_requirement.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
        </Form>
                
                </Row>
              </div>          
    <div className="d-grid gap-3" style={{width:'30%',marginLeft:'35%'}}>
      <Button  style={{fontSize:'20px',marginTop:'30px' ,fontFamily: 'Roboto Slab',fontWeight:'bold'}}>
       REGISTER
      </Button>
    
      <Button style={{fontSize:'20px', fontFamily: 'Roboto Slab',fontWeight:'bold'}} variant="secondary" href='Login' >
       LOGIN
      </Button>
    </div></div>
            </Col>
          </Row>
         
        </Container>
        {/* </Container> */}
      </div>
    </>
  );
}

export default Register;
