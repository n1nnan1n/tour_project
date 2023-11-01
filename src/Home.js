import React from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <>
      <Navbar />
      <Container style={{marginBottom:"20px"}} >
        <div class="border-bottom lh-1 py-3">
        <Row>
          <Col>
            <p style={{ fontSize:"23px" , fontWeight:"bold",marginTop:'10px'}}>Why customers choose us</p>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={5}>
          <Card style={{ width: "18rem",height:"120px"}}>
            <FontAwesomeIcon icon={faStar} style={{color: "#fecb3e",fontSize:"30px",marginTop:"10px"}} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Best Private tour</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem",height:"120px"}}>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff6251",fontSize:"30px",marginTop:"10px"}} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Passionate service</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem",height:"120px"}}>
          <FontAwesomeIcon icon={faUser} style={{color: "#77bb41",fontSize:"30px",marginTop:"10px"}} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Respect the locals culture & support localsr</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem",height:"120px"}}>
          <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#3a88fe",fontSize:"30px",marginTop:"10px"}} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Multi languages tours</Card.Title>
            </Card.Body>
          </Card>
        </Stack>
    </div>
      </Container>
    </>
  );
}
export default Home;
