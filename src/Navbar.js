import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import main_pic from "./Pic/main_pic.jpg";
import Customized from "./Pic/Customized.jpg";
import one_day from "./Pic/one_day.jpg";
import App from "./App";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
    <div class="bg" style={{paddingBottom:'30px'}}>
      <div class="container">
        <header class="border-bottom lh-1 py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1"></div>
            <div class="col-4 text-center" >
              <a
                class="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
                BEYOND THE TRAILS
              </a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center" style={{paddingBottom:'20px'}}>
             
              <a class="btn  btn-dark"style={{marginRight:'5px'}} ><Link to="/Register"style={{color:'white'}}>Register</Link>
              </a>
              <a class="btn  btn-outline-dark"><Link to="/login" style={{color:'white'}}>Login</Link>
              </a>
            </div>
          </div>
        </header>

        <>
          <div class="border-bottom lh-1 py-1" >
            
            <Nav className="justify-content-center text" activeKey="/Home" >
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">About Us</Nav.Link>
              </Nav.Item>

              <NavDropdown title="Day Trips" id="nav-dropdown">
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
                <Nav.Link eventKey="#">Customized tour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#" disabled>
                  Review
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Language" id="nav-dropdown">
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
            </Nav>
          </div>
        </>
      </div>

     
      </div>
      

      </>
  );

}
export default navbar;
