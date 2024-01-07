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
import button from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import bg from './pic/bg.jpg'
import axios from "axios";

export const Adlogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:3001/adminlogin', { email, password });
      const response = await axios.post('https://tourapi-hazf.onrender.com/adminlogin', { email, password });
      console.log(email, password)
      const token = response.data.token;

      localStorage.setItem('token', token);

      onLogin(true);

      navigate('/dashboard/AdHome');

      // Redirect to the homepage or another route
      // window.location.href = '/dashboard/AdHome';
    } catch (error) {
      console.error('Error during login:', error.response.error);
      setError('Invalid username or password');
      // Handle login error, e.g., display an error message to the user
    }
  };
  return (
   
    <div className="wrapper">
    <div class="bg" style={{backgroundImage:`url(${bg})`,width:'100%',height:'900px',backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>
      {/* <Container style={{ marginBottom: "20px" }}> */}
      <Container>
        <Row>
          
          <Col>
            <div className="bgblur"  style={{padding:'100px',marginLeft:'20%', marginTop: "10%",width:'60%',height:'85%'}}>
       
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
                  <p style={{color:'white',fontWeight:'bold',fontSize:'45px'}}>ADMIN LOGIN</p>
                </div>
              </div>

              <Row style={{paddingLeft:'10%'}}>
  
       
    
                <Form >
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="email"
                  >
                    <Col sm="10">
                      <Form.Label  style={{float:'left',color:'black'}}>
                      <p style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Email</p>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="password"
                  >
                    <Col sm="10">
                      <Form.Label style={{float:'left',color:'black'}}>
                        <p  style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>password</p>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Button
                   onClick={handleLogin}
                   className='button'  size="sm" style={{width:'35%',marginRight:'20%',marginTop:'30px',fontSize:'20px',marginTop:'30px' ,fontFamily: 'Roboto Slab',fontWeight:'bold',backgroundColor:'#FDB000',borderColor:"black"}}>Sign In</Button>
                </Form>
              </Row>
                      
  <div className="d-grid gap-2 buttonlog" >
  

    {/* <Button 
    onClick={Register} 
    className='button2' variant="secondary" size="sm" style={{fontSize:'20px', fontFamily: 'Roboto Slab',fontWeight:'bold'}}>
    Register
    </Button> */}
    {/* <Button href="Adlogin" className='button3' variant="secondary" size="sm" style={{fontSize:'20px', fontFamily: 'Roboto Slab',fontWeight:'bold'}}>
   Admin Login
    </Button> */}
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
}
export default Adlogin;