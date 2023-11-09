import React from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import main_pic from "./Pic/main_pic.jpg";
import grand1 from "./Pic/grand1.jpg";
import grand2 from "./Pic/grand2.jpg";
import grand5 from "./Pic/grand5jpg.jpg";
import customized from "./Pic/Customized.jpg";
import './App.css';
import Customized from "./Pic/Customized.jpg";
import outside1 from "./Pic/outside1.jpg";
import outside2 from "./Pic/outside2.jpg";
import outside3 from "./Pic/outside3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./Pic/one_day.jpg";
import Footer from "./Footer";
import video from "./Video/Home.mp4";

function Home() {
  return (
    <>
     <div style={{ width: "100%", height: "500px" }}>

        <video
             style={{ width: "100%", height: "500px" }}
              src={video}
              autoPlay loop muted
            />
           
    </div>
      
       {/* ---------------------------------------------------------------------------------------------- */}
     
        <div class="border-bottom lh-1 py-3" style={{width: "100%", height: "200px",backgroundColor:'white'}}>
        <Container style={{ marginBottom: "25px" }}>
             <Row>
            <Col>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginTop: "10px",
                
                }}
              >
                Why customers choose us
              </p>
            </Col>
          </Row>
          <Row md={4}>
            <Col style={{ textAlign: "center" }}>
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#fecb3e",
                  fontSize: "30px",
                  marginTop: "10px",
                }}
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                Best Private tour
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              {" "}
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: "#ff6251",
                  fontSize: "30px",
                  marginTop: "10px",
                }}
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                Passionate service
              </p>{" "}
            </Col>
            <Col style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  color: "#77bb41",
                  fontSize: "30px",
                  marginTop: "10px",
                }}
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {" "}
                Respect the locals culture & support localsr
              </p>{" "}
            </Col>

            <Col style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                icon={faEarthAmericas}
                style={{
                  color: "#3a88fe",
                  fontSize: "30px",
                  marginTop: "10px",
                }}
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {" "}
                Multi languages tours
              </p>{" "}
            </Col>
          </Row>  
           </Container>
        </div>
   
      
      <div style={{ backgroundColor: "#B7C0C7" }}>
        <Container>
          <div class="border-bottom lh-1 py-3">
            <Row>
              <Col>
                <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                  Our Tours
                </p>
              </Col>
            </Row>
        {/* ---------------------------------------------------------------------------------------------- */}
    <Stack direction="horizontal" gap={5}>
    <Carousel data-bs-theme="dark" style={{ width: "25rem", height: "230px" }}>
 
      <Carousel.Item style={{ width: "25rem", height: "300px" }}>
        <img
          className="d-block w-100"
          src={grand1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{color:"white",marginTop:'-150px',fontSize:'30px',fontWeight:'bold'}}>1 DAT BKK CITY TOURS</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "25rem", height: "300px" }}>
        <img
          className="d-block w-100"
          src={grand2}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item style={{ width: "25rem", height: "300px" }}>
        <img
          className="d-block w-100"
          src={grand5}
          alt="First slide"
        />
       
      </Carousel.Item>
    </Carousel>
{/*   
              <Card style={{ width: "18rem", height: "120px" }}>
                <Card.Img variant="top" src={main_pic} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card> */}
<Carousel data-bs-theme="dark" style={{ width: "25rem", height: "230px" }}>
<Carousel.Item style={{ width: "25rem", height: "225px" }}>
        <img
          className="d-block w-100"
          src={outside2}
          alt="First slide"
        />
        <Carousel.Caption>
        <h5 style={{color:"white",marginTop:'-18px',fontSize:'30px',fontWeight:'bold'}}>DAY TRIPS OUTSIDE BKK</h5>
       
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item style={{ width: "25rem", height: "225px" }}>
        <img
          className="d-block w-100"
          src={outside1}
          alt="First slide"
        />
       
      </Carousel.Item>
      
      <Carousel.Item style={{ width: "25rem", height: "225px" }}>
        <img
          className="d-block w-100"
          src={outside3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    <Carousel data-bs-theme="dark" style={{ width: "25rem", height: "230px" }}>
      <Carousel.Item style={{ width: "25rem", height: "300px" }}>
        <img
          className="d-block w-100"
          src={customized}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{color:"white",marginTop:'-150px',fontSize:'30px',fontWeight:'bold'}}>CUSTOMIZED TOUR</h5>
       
        </Carousel.Caption>
     
      
       
      </Carousel.Item>
    </Carousel>
    
            </Stack>
          </div>
        </Container>
      </div>
      <Footer/>
    </>
  );
}
export default Home;
