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
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from "react";
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';

function NavbarComponent() {

  const [userID, setUserID] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userFname, setUserFname] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Split the token into its parts
        const [, payloadBase64,] = token.split('.');
        const decodedPayload = atob(payloadBase64);

        // Parse the decoded payload as JSON
        const { _id,fname,email } = JSON.parse(decodedPayload);
        console.log(_id,fname,email)

        setUserID(_id);
        setUserFname(fname.charAt(0).toUpperCase() + fname.slice(1));
        setUserEmail(email);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Implement logout logic, clear the token, and update the state
    localStorage.removeItem('token');
    setUserEmail('');
    setIsLoggedIn(false);
    // Redirect to the homepage or another route
    window.location.href = '/';
  };

  return (
    <div className="wrapper" style={{ textAlign:"center"}}>
    

 <header class="border-bottom lh-1 py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1"></div>
            <div class="col-4 text-center" >
              <a
                class="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
              <h1 style={{fontSize:'28px',fontWeight:'bold',fontFamily: "Playfair Display"}}>BEYOND THE TRAILS</h1>  
              </a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center" >
            {isLoggedIn ? (
              <>
                <span class="text-black me-2" style={{fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto"}}>Welcome, {userFname}</span>
                <Button
                  variant="dark"
                  style={{ marginRight: '15px', fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/register" class="btn btn-dark" style={{ marginRight: '5px', backgroundColor: '#063d8c' , fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto"}}>
                  Register
                </Link>
                <Link to="/login" class="btn btn-outline-dark" style={{ marginRight: '15px' , fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto"}}>
                  Login
                </Link>
              </>
            )}
            </div>
          </div>
        </header>
          <Navbar expand="lg"  collapseOnSelect style={{backgroundColor:"#063d8c"}}>
      <Container fluid>
        {/* <Navbar.Brand href="#" className="fontnav">Navbar scroll</Navbar.Brand> */}
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:"45vh"}}>
             <Nav.Item >
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' href="About">About Us</Nav.Link>
              </Nav.Item>
      
   
              <NavDropdown style={{marginRight:"50px"}}  className='fontnav' title="Day Trips" id="fontnav" >
                <NavDropdown.Item eventKey="4.1" href="/Bangkok%20Grand%20Tour">Bangkok grand tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/Bangkok%20unseen%20Tour">bangkok unseen tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3" href="/Bkk%20Instagram%20TikTok%20Tour%20(For%20whose%20who%20love%20photos)">bkk Instargram/Tiktok</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/The%20ultimate%20of%20the%20floating%20market%20tour">The ultimate of the floating market</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/Half%20day%20floating%20market%20tour">Half day floating market</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/The%20sacred%20tattoo%20tour%20(Sakyant)">The sacred tattoo tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/Ayutthaya%20highlight%20tour">Ayutthaya highlight tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/The%20Scenic%20farm%20tour">The scenic farm tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/Cooking%20class">Cooking class</NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link'  href="Customized">Customized tour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' eventKey="#" href="Reviewall">
                  Review
                </Nav.Link>
              </Nav.Item>
              <NavDropdown style={{marginRight:"50px"}} id="fontnav" className='fontnav' title="Language">
                <NavDropdown.Item eventKey="4.1">English Google (Noto Color Emoji - Unicode 15.1)</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Zhōngguó 🇨🇳</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Deutsch 🇩🇪</NavDropdown.Item>
                
                <NavDropdown.Divider />
            
              </NavDropdown>
              
          
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      
          </div>
       
     
  );

}
export default NavbarComponent;

