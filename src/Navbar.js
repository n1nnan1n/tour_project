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
   
    <div className="wrapper" style={{ textAlign:"center"}}>
      <div>
        <header class="border-bottom lh-1 py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1"></div>
            <div class="col-4 text-center" >
              <a
                class="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
              <h1 style={{fontSize:'28px',fontWeight:'bold'}}>BEYOND THE TRAILS</h1>  
              </a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center" >
             
              <a class="btn  btn-dark"style={{marginRight:'5px',backgroundColor:'#063d8c'}} ><Link to="/Register"style={{color:'white'}}>Register</Link>
              </a>
              <a class="btn  btn-outline-dark" style={{marginRight:'15px'}}><Link to="/login" style={{color:'#063d8c'}}>Login</Link>
              </a>
            </div>
          </div>
        </header>

      
        <Navbar data-bs-theme="dark" style={{height:"70px",paddingLeft:"25%",paddingRight:"20%",backgroundColor:"#063d8c"}} >
              <Nav.Item >
                <Nav.Link style={{marginRight:"50px"}} className='link' href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} className='link' href="#">About Us</Nav.Link>
              </Nav.Item>
      
   
              <NavDropdown style={{marginRight:"50px"}} className='link' title="Day Trips" id="Dropdown" >
                <NavDropdown.Item eventKey="4.1" href="Grandtour">Bangkok grand tour
</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                bangkok unseen tour

                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                bkk Instargram/Tiktok

                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item eventKey="4.4">
                The ultimate of the floating market
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
            Half day floating market
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">              
The sacred tattoo tour 
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">   
Ayutthaya highlight tour
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
The scenic farm tour
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
Cooking class
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} className='link' eventKey="#">Customized tour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} className='link' eventKey="#">
                  Review
                </Nav.Link>
              </Nav.Item>
              <NavDropdown style={{marginRight:"50px"}} className='link' title="Language" id="nav-dropdown">
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

     
  );

}
export default navbar;
