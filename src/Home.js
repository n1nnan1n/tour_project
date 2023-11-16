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

import grand1 from "./Pic/firstpage/grand1.jpg";
import grand2 from "./Pic/firstpage/grand2.jpg";
import grand5 from "./Pic/firstpage/grand5jpg.jpg";
import customized from "./Pic/firstpage/Customized.jpg";
import "./App.css";
import Customized from "./Pic/firstpage/Customized.jpg";
import outside1 from "./Pic/firstpage/outside1.jpg";
import outside2 from "./Pic/firstpage/outside2.jpg";
import outside3 from "./Pic/firstpage/outside3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Footer from "./Footer";
import video from "./Video/Home.mp4";
import best from "./Pic/icon/best.svg";
import icon2 from "./Pic/icon/2.svg";
import icon3 from "./Pic/icon/3.svg";
import icon4 from "./Pic/icon/4.svg";
import Oneday from "./Oneday";

function Home() {
  const handleClick = event => {
    <Oneday/>
  };
  return (
    <div className="wrapper">
      <div
        style={{
          width: "100%",
          height: "500px",
          overflow: "hidden",
          display: "block",
        }}
      >
        <video
          style={{ width: "auto", height: "auto" }}
          src={video}
          autoPlay
          loop
          muted
        />
      </div>

      <div
        class=" lh-1 py-3"
        style={{ width: "100%", height: "300px", backgroundColor: "white" }}
      >
        <Container style={{ marginBottom: "25px" }}>
          <Row>
            <Col>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom:"80px"
                }}
              >
                Why customers choose us
              </p>
            </Col>
          </Row>
          <Row md={4}>
            <Col style={{ textAlign: "center" }}>
              {" "}
              <img
                style={{ width: "100px", height: "100px" }}
                src={best}
                alt="First slide"
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                Best Private tour
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <img
                style={{ width: "100px", height: "100px" }}
                src={icon2}
                alt="First slide"
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                Passionate service
              </p>{" "}
            </Col>
            <Col style={{ textAlign: "center" }}>
              <img
                style={{ width: "100px", height: "100px" }}
                src={icon3}
                alt="First slide"
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {" "}
                Respect the locals culture & support localsr
              </p>{" "}
            </Col>

            <Col style={{ textAlign: "center" }}>
              <img
                style={{ width: "100px", height: "100px" }}
                src={icon4}
                alt="First slide"
              />
              <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {" "}
                Multi languages tours
              </p>{" "}
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#063d8c" ,height:"350px",marginTop:'30px'}}>
        <Container>
          <div class="lh-1 py-3">
            <Row>
              <Col>
                <h1
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom:"30px"
                  }}
                >
                  Our Tours
                </h1>
              </Col>
            </Row>
            {/* ---------------------------------------------------------------------------------------------- */}
            <Stack direction="horizontal" gap={5}>
              <a href="Oneday">
            <Carousel
                data-bs-theme="dark"
                className="menu1"
                style={{ width: "25rem", height: "210px" }}
                 onClick={handleClick}
              > 
                <Carousel.Item style={{ width: "25rem", height: "225px" }}>
                  <img 
                  
                    className="d-block w-100"
                    src={grand1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                     
                    >
                      1 DAT BKK CITY TOURS
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item style={{ width: "25rem", height: "300px" }} >
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
              </Carousel></a>
             
              <Carousel
                data-bs-theme="dark"
                className="menu1"
                style={{ width: "25rem", height: "210px" }}
              >
                <Carousel.Item style={{ width: "25rem", height: "225px" }}>
                  <img
                    className="d-block w-100"
                    src={outside2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                  
                    >
                      DAY TRIPS OUTSIDE BKK
                    </h5>
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
              <Carousel
                data-bs-theme="dark"
                className="menu1"
                style={{ width: "25rem", height: "210px" }}
              >
                <Carousel.Item style={{ width: "25rem", height: "225px" }}>
                  <img
                    className="d-block w-100"
                    src={customized}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                     
                    >
                      CUSTOMIZED TOUR
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Stack>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
