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
    <div class="bg">
      <div class="container">
        <header class="border-bottom lh-1 py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1"></div>
            <div class="col-4 text-center">
              <a
                class="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
                BEYOND THE TRAILS
              </a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
              <a class="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5"></circle>
                  <path d="M21 21l-5.2-5.2"></path>
                </svg>
              </a>
              <a class="btn  btn-secondary" style={{marginRight:'5px',color:'white'}}><Link to="/Register">Register</Link>
              </a>
              <a class="btn  btn-outline-secondary" style={{color:'white'}}><Link to="/login">Login</Link>
              </a>
            </div>
          </div>
        </header>

        <>
          <div class="border-bottom lh-1 py-1">
            <Nav className="justify-content-center" activeKey="/Home">
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
