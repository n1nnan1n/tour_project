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
import Customized from "./Pic/Customized.jpg";
import one_day from "./Pic/one_day.jpg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
function Home() {
  return (
    <>
     <div class="bg" style={{paddingTop:'30px'}}>
     <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          
            <Image
              style={{ width: "1000px", height: "330px", marginBottom: "10%" }}
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
            style={{ width: "1000px", height: "330px", marginBottom: "10%" }}
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
            style={{ width: "1000px", height: "330px", marginBottom: "10%" }}
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
      <Container style={{ marginBottom: "25px" }}>
        <div class="border-bottom lh-1 py-3">
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
        </div>
      </Container>
      <div style={{ backgroundColor: "#B7C0C7" }}>
        <Container style={{ marginBottom: "20px" }}>
          <div class="border-bottom lh-1 py-3">
            <Row>
              <Col>
                <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                  Our Tours
                </p>
              </Col>
            </Row>
            <Stack direction="horizontal" gap={5}>
              <Card style={{ width: "18rem", height: "120px" }}>
                <Card.Img variant="top" src={main_pic} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem", height: "120px" }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    color: "#ff6251",
                    fontSize: "30px",
                    marginTop: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    Passionate service
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", height: "120px" }}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    color: "#77bb41",
                    fontSize: "30px",
                    marginTop: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    Respect the locals culture & support localsr
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", height: "120px" }}>
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  style={{
                    color: "#3a88fe",
                    fontSize: "30px",
                    marginTop: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    Multi languages tours
                  </Card.Title>
                </Card.Body>
              </Card>
            </Stack>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Home;
