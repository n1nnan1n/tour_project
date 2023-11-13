import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ImageGallery from "react-image-gallery";
import pic1 from "./Pic/grandtour/grand1.jpg";
import pic2 from "./Pic/grandtour/-86SWmN5.jpeg";
import pic3 from "./Pic/grandtour/1AqWo8m6.jpeg";
import pic4 from "./Pic/grandtour/C78X-Lc-.jpeg";
import pic5 from "./Pic/grandtour/Do0thfI0.jpeg";
import pic6 from "./Pic/grandtour/Poe2v9Q5.jpeg";
import pic9 from "./Pic/grandtour/apwv1J-2.jpeg";
import pic10 from "./Pic/grandtour/wat1.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const images = [
  {
    original: `${pic1}`,
    thumbnail: `${pic1}`,
  },
  {
    original: `${pic2}`,
    thumbnail: `${pic2}`,
  },
  {
    original: `${pic3}`,
    thumbnail: `${pic3}`,
  },
  {
    original: `${pic4}`,
    thumbnail: `${pic4}`,
  },
  {
    original: `${pic5}`,
    thumbnail: `${pic5}`,
  },
  {
    original: `${pic6}`,
    thumbnail: `${pic6}`,
  },
  {
    original: `${pic9}`,
    thumbnail: `${pic9}`,
  },
  {
    original: `${pic10}`,
    thumbnail: `${pic10}`,
  },
];

export default function Grandtour() {
  return (
    <>
      <navbar />
      <div className="bg" style={{ padding: "30px" }}>
        <Container>
          <div
            style={{ width: "60%", marginBottom: "30px", marginLeft: "20%" }}
          >
            <ImageGallery
              items={images}
              showPlayButton={true}
              showFullscreenButton={true}
              slideInterval={1000}
              slideOnThumbnailOver={true}
              showIndex={false}
              onPlay={() => {
                alert("slideshow is now playing!");
              }}
            />
          </div>
          
        </Container>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      style={{
        backgroundColor: "#063d8c",
        width: "60%",
        marginLeft: "20%",
        borderRadius:"5px"
      }}
    >
      <Tab eventKey="description" title="description">
        <Card.Body style={{
                backgroundColor: "white",
                width: "60%",
                marginLeft: "20%"
                }}>
          <Card.Title>description</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Tab>
      <Tab eventKey="avaliability" title="avaliability">
        <Card.Body style={{
                backgroundColor: "white",
                width: "60%",
                marginLeft: "20%"
                }}>
            <Card.Title>description</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Tab>
      <Tab eventKey="map" title="map">
      <Card.Body style={{
                backgroundColor: "white",
                width: "60%",
                marginLeft: "20%"
                }}>
            <Card.Title>description</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Tab>
      <Tab eventKey="location" title="location">
      <Card.Body style={{
                backgroundColor: "white",
                width: "60%",
                marginLeft: "20%"
                }}>
            <Card.Title>description</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Tab>
      <Tab eventKey="review" title="review">
      <Card.Body style={{
                backgroundColor: "white",
                width: "60%",
                marginLeft: "20%"
                }}>
            <Card.Title>description</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Tab>
    </Tabs>


    {/* <Card style={{
              backgroundColor: "#063d8c",
              width: "60%",
              marginLeft: "20%",
            }}>
      <Card.Header>
      <Nav variant="tabs" defaultActiveKey="/home" >
              <Nav.Item>
                <Nav.Link href="">description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">avaliability</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                map
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                location
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                review
                </Nav.Link>
              </Nav.Item>
            </Nav>
      </Card.Header>
      <Card.Body style={{
              backgroundColor: "white",
              }}>
        <Card.Title>description</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
  

      </div>
    </>
  );
}
