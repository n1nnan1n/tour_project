import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import App from "./App";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "react-bootstrap";

function navbar() {
  return (
    <>
    <div  style={{paddingBottom:'20px' , float:"left" , textAlign:"center"}}>
      <div class="container">
        <header class="border-bottom lh-1 py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1"></div>
            <div class="col-4 text-center" >
              <a
                class="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
              <h1 style={{fontSize:'28px',fontWeight:'bold',float:"right"}}>BEYOND THE TRAILS</h1>  
              </a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center" >
             
              <a class="btn  btn-dark"style={{marginRight:'5px'}} ><Link to="/Register"style={{color:'white'}}>Register</Link>
              </a>
              <a class="btn  btn-outline-dark"><Link to="/login" style={{color:'white'}}>Login</Link>
              </a>
            </div>
          </div>
        </header>

      
        <Navbar bg="primary" data-bs-theme="dark" style={{textAlign:'center', width:'1900px' , float:"left"}}>
           
        {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
              <Nav.Item>
                <Nav.Link className='link' href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='link' href="#">About Us</Nav.Link>
              </Nav.Item>
      
   
              <NavDropdown className='link' title="Day Trips" id="Dropdown" >
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link className='link' eventKey="#">Customized tour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='link' eventKey="#">
                  Review
                </Nav.Link>
              </Nav.Item>
              <NavDropdown className='link' title="Language" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">English</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Thai</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
      
            
  
          </Navbar>
      
          </div>
          </div>

      </>
  );

}
export default navbar;
