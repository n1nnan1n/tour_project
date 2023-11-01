import React from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import main_pic from "./Pic/main_pic.jpg";
import Customized from "./Pic/Customized.jpg";
import one_day from "./Pic/one_day.jpg";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
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
              <a class="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <>
          <div class="border-bottom lh-1 py-1" style={{ marginBottom: "20px" }}>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
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

      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          
            <Image
              style={{ width: "1000px", height: "330px", marginBottom: "10%",marginLeft:'17%' }}
              src={main_pic}
              fluid
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}

          <Image
            style={{ width: "1000px", height: "330px", marginBottom: "10%",marginLeft:'17%' }}
            src={Customized}
            fluid
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Image
            style={{ width: "1000px", height: "330px", marginBottom: "10%",marginLeft:'17%' }}
            src={one_day}
            fluid
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
{/* 
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container> */}

      </>
  );

}
export default navbar;
