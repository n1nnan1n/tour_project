import { auth, googleProvider } from "./config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
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
import Register from "./Register.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import bg from './Pic/bg.jpg'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
   
    <div className="wrapper">
    <div class="bg" style={{backgroundImage:`url(${bg})`}}>
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
            <div style={{ marginTop: "30%",width:'100%',height:'60%',backgroundColor:'white',borderRadius:'10px'}}>
       
              <div class="row flex-nowrap justify-content-between align-items-center">
                <div
                  class="col-12 text-center"
                  style={{
                   
                    marginBottom: "20px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <h2 className="fonthead" style={{color:'black',marginTop:'20px'}}>LOGIN</h2>
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
                      <h2>Email</h2>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Col sm="10">
                      <Form.Label style={{float:'left',fontWeight:'bold'}}>
                        <h2>password</h2>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
                    </Col>
                  </Form.Group>

      
                </Form>
              </Row>
                      
  <div className="d-grid gap-2" style={{width:'50%',marginLeft:'25%',marginTop:'30px'}}>
  
<Button onClick={signIn} className='button'  size="lg">
Sign In
    </Button>
    <Button onClick={Register} className='button2' variant="secondary" size="lg">
    Register 
    </Button>
    {/* <Button onClick={signInWithGoogle} className='button2' variant="secondary" size="lg">
    <FontAwesomeIcon icon={faGooglePlus} style={{color: "#ff4013",fontSize:'30px',marginTop:'5px',marginRight:'15px'}} />
    SignIn With Google
     </Button> */}
  </div></div>
          </Col>


        </Row>
      </Container>

      {/* </Container> */}
    </div>

  </div>
  );
};
export default Login;