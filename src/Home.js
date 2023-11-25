
import React, { useState } from 'react';
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

import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Home() {

  function disableWeekends(date) {
    // วันที่ 6 คือวันเสาร์ และ วันที่ 0 คือวันอาทิตย์
    return date.day() === 0 || date.day() === 6;
  }
  
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const handleClick = event => {
    <Oneday />
  };
  return (
    <div className="wrapper">
      <div style={{
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'

      }}>
        {/* ------------------------------- video --------------------------- */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', width: "100vw", maxHeight: '45vw', overflow: "hidden" }}
        >
          <video
            style={{ width: "100%", height: "100%", objectFit: 'contain', objectPosition: 'bottom' }}
            object
            src={video}
            autoPlay
            loop
            muted
          />
        </div>

        {/* ------------------------------- layer 2 --------------------------- */}
        <div  
          style={{
            width: "100%", height: '500px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'end',
            position: 'absolute', bottom: '0px', zIndex: '1000',
            background: 'linear-gradient(to bottom, rgba(0, 123, 255, 0) 0%, rgba(0, 123, 255, 0.7) 100%)',
          }}
        >
          <img style={{
            width: '130px', height: '130px',
            filter: "drop-shadow(2px 2px 6px rgba(0, 0, 100, .6)"
          }}
            src="logo_1.png">
          </img>
          <span style={{
            fontFamily: 'Jost', fontSize: '90px', color: 'white', lineHeight: '90px',
            textShadow: "2px 2px 10px rgba(0, 0, 100, 0.5)"
          }}>
            Explore The Amazing
          </span>
          <span style={{
            fontFamily: 'Jost', fontSize: '40px', color: 'white', lineHeight: '40px'
            , textShadow: "2px 2px 10px rgba(0, 0, 100, 0.5)"
          }}>
            experiences in Thailand<br />
          </span>

          
          <button className="greenButton" style={{
            fontFamily: 'Jost', fontSize: '18px', fontWeight: 400, color: 'white', lineHeight: '18px', padding: '15px 20px 15px 20px',
            marginTop: '20px',
            borderRadius: '40px'
          }}>
            Explore
          </button>
          <br />
        </div>
      </div>

      <div style={{
        margin: '40px'
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Uncontrolled picker"
            defaultValue={dayjs('2022-04-17')}
            shouldDisableDate={disableWeekends} 
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Select Tour Date"
            value={value}
            shouldDisableDate={disableWeekends} 
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      <div
        style={{ width: "100%", height: "400px", backgroundColor: "white", paddingTop: '100px' }}
      >
        <Container style={{ marginBottom: "0px" }}>
          <Row>
            <Col>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginTop: "50px",
                  marginBottom: "80px",
                  fontFamily: 'Roboto Slab'
                }}
              >
                Why customers choose us
              </p>
            </Col>
          </Row>
          <Row md={4}>
            <Col style={{ textAlign: "center" }}>
              {" "}
  
              <FontAwesomeIcon icon={faStar} style={{ color: "#fecb3e", fontSize: '60px' }} />
              <p style={{ marginTop: "40px", fontSize: "20px", fontFamily: 'Roboto Slab' }}>
                Best Private tour
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              {/* <img
        style={{ width: "100px", height: "100px" }}
        src={icon2}
        alt="First slide"
      /> */}
              <FontAwesomeIcon icon={faHeart} style={{ color: "#ED5252", fontSize: '60px' }} />
              <p style={{ marginTop: "40px", fontSize: "20px", fontFamily: 'Roboto Slab' }}>
                Passionate service
              </p>{" "}
            </Col>
            <Col style={{ textAlign: "center" }}>
              {/* <img
        style={{ width: "100px", height: "100px" }}
        src={icon3}
        alt="First slide"
      /> */}
              <FontAwesomeIcon icon={faUser} style={{ color: "#88D261", fontSize: '60px' }} />
              <p style={{ marginTop: "40px", fontSize: "20px", fontFamily: 'Roboto Slab' }}>
                {" "}
                Respect the locals culture & support localsr
              </p>{" "}
            </Col>

            <Col style={{ textAlign: "center" }}>
              {/* <img
        style={{ width: "100px", height: "100px" }}
        src={icon4}
        alt="First slide"
      /> */}
              <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#3a88fe", fontSize: '60px' }} />
              <p style={{ marginTop: "40px", fontSize: "20px", fontFamily: 'Roboto Slab' }}>
                {" "}
                Multi languages tours
              </p>{" "}
            </Col>
          </Row>
        </Container>
      </div>



      <div style={{ backgroundColor: "#063d8c", height: "350px", marginTop: '30px', paddingTop: '20px' }}>
        <Container>
          <div class="lh-1 py-3">
            <Row>
              <Col>
                <h1
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "30px",
                    fontFamily: 'Roboto Slab'
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
              <a href="Daytrip">
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
              </a>
              <a href="Customized">
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
              </a>
            </Stack>
          </div>
        </Container>
      </div>
      <Footer />
    </div >
  );
}
export default Home;
