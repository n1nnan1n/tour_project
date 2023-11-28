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
              <h1 style={{fontSize:'28px',fontWeight:'bold',fontFamily: "Playfair Display"}}>BEYOND THE TRAILS</h1>  
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
<div className="wrapper" style={{height:"70px",backgroundColor:"#063d8c",paddingTop:'5px'}} >
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
                <Nav.Link style={{marginRight:"50px"}} id="fontnav" className='link' eventKey="#" href="Reviewall">
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

     
  );

}
export default navbar;
