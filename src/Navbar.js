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

import Form from 'react-bootstrap/Form';

function NavbarComponent() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Split the token into its parts
        const [, payloadBase64,] = token.split('.');
        const decodedPayload = atob(payloadBase64);

        // Parse the decoded payload as JSON
        const { email } = JSON.parse(decodedPayload);
        console.log(email)

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
    <div className="navweb">
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
              <h1 style={{fontSize:'28px',fontWeight:'bold',fontFamily: "Playfair Display"}}>BEYOND THE TRAILS</h1>  
              </a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center" >
            {isLoggedIn ? (
              <>
                <span class="text-black me-2">Welcome, {userEmail}</span>
                <Button
                  variant="dark"
                  style={{ marginRight: '15px' }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/register" class="btn btn-dark" style={{ marginRight: '5px', backgroundColor: '#063d8c' }}>
                  Register
                </Link>
                <Link to="/login" class="btn btn-outline-dark" style={{ marginRight: '15px' }}>
                  Login
                </Link>
              </>
            )}
{/*              
              <a class="btn  btn-dark"style={{marginRight:'5px',backgroundColor:'#063d8c'}} ><Link to="/Register"style={{color:'white'}}>Register</Link>
              </a>
              <a class="btn  btn-outline-dark" style={{marginRight:'15px'}}><Link to="/login" style={{color:'#063d8c'}}>Login</Link>
              </a> */}
            </div>
          </div>
        </header>
<div style={{height:"70px",backgroundColor:"#063d8c",paddingTop:'5px'}} >
      <Container  style={{paddingLeft:'10%'}} >
        <Navbar data-bs-theme="dark">
          
              <Nav.Item >
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' href="About">About Us</Nav.Link>
              </Nav.Item>
      
   
              <NavDropdown style={{marginRight:"50px"}}  className='fontnav' title="Day Trips" id="Dropdown fontnav" >
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
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' href="Customized">Customized tour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' eventKey="#" href="ImageUploader">
                  Review
                </Nav.Link>
              </Nav.Item>
              <NavDropdown style={{marginRight:"50px"}}  className='fontnav' title="Language" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">English 🇬🇧</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Chinese 🇨🇳</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Germainy 🇬🇧</NavDropdown.Item>
                
                <NavDropdown.Divider />
            
              </NavDropdown>
              
          </Navbar>
          </Container>
</div>
</div>
</div>
         

          <div className="navphone">
          <Navbar expand="lg"  style={{backgroundColor:"#063d8c"}}>
      <Container fluid>
        <Navbar.Brand href="#" className="fontnav">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      
          </div>
          </div>
     
  );

}
export default NavbarComponent;
