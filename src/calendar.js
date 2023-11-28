import React from "react";
import "./App.css";
import Footer from "./Footer";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Oneday from "./Oneday";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import unseen3 from "./Pic/unseentour/InD1O0dN.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Calendar() {
  const [tourData, setTourData] = useState({}); // Initialize as an empty object
  let { tour_name } = useParams();
  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const URL = "https://tourapi-hazf.onrender.com/tourinfo/" + tour_name; // Assuming fetching a specific tour
        console.log(URL);
        const response = await axios.get(URL);
        const data = response.data;

        // Assuming the API returns a single object for the tour data
        if (data && data.price && data.price_detail && data.tour_cancelpolicy) {
          setTourData(data);
        } else {
          console.error("Invalid data received:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTourData();
  }, []);
  function disableWeekends(date) {
    // วันที่ 6 คือวันเสาร์ และ วันที่ 0 คือวันอาทิตย์
    return date.day() === 0 || date.day() === 6;
  }

  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const handleClick = (event) => {
    <Oneday />;
  };
  const [numberValue, setNumberValue] = useState(1);


const [total, setTotal] = useState(0); // กำหนด total ใน useState
const price = 10; // ตัวแปร price (สมมติว่าเป็น 10)

const handleInputChange = (e) => {
    setNumberValue(e.target.value);
  };
 
  useEffect(() => {
    const calculatedTotal = numberValue * price;
    setTotal(calculatedTotal);
  }, [numberValue, price]);
  const handleSubmit = (e) => {  // Process form submission here
    e.preventDefault();
    console.log("Selected Date:", value);
    console.log("Number of persons:", numberValue);
    console.log("price:", total);
    // Add your logic for form submission or API call here
  };
  return (
    <>
      <div className="bg" style={{ paddingTop: "20px" }}>
        <Container>
          <p
            style={{ fontSize: "25px", fontWeight: "bold", textAlign: "left" }}
          >
            Name Tour
          </p>
          <Row>
            <Col >
              <div
               className="picright"
              >
                <img
                  src={unseen3}
                  style={{ width: "100%", height: "100%" }}
                  alt="First slide"
                />
              </div>
            </Col>
            <Col>
            <Row>
             
              <div  className="picdown">
            <img
          src={unseen3}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>

<div  className="picdown">
            <img
          src={unseen3}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>
        
            </Row>
            <Row>
             
              <div  className="pictop">
            <img
          src={unseen3}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>

<div  className="pictop">
            <img
          src={unseen3}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>
        
            </Row>
            </Col>
          </Row>

          <div
            style={{
              paddingTop: "50px",
            }}
          >
            <Row>
            
              <Col sm={8}>
                <div
                  className="fillter"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom:'15px'
                  }}
                >
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Tour Price for Private tour (THAI BAHT)

                  </h1>{" "}
            
                    <p class="pt-2 mt-2 border-top"
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                     - 9,384 BHT for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)

                    </p>
                 
                </div>
                <div
                  className="fillter"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom:'15px'
                  }}
                >
                  <h1
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Cancellation Policy
                  </h1>{" "}
                 
                    <p class="pt-2 mt-2 border-top"
                      style={{
                        fontSize: "20px",
                        textAlign: "left",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                      -Plans are subject to change, and sometimes unexpectedly,
                      so you can cancel your event free of charge within 2 weeks
                      before the tour starts.
                    </p>
                  </div>
                
              </Col>
              <Col sm={4}>
                <div
                  className="fillter book"
                //   style={{
                //     float: "left",
                //     boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.25)', 
                //     width: "100%", 
                //     backgroundColor: "white",
                //     // borderRadius: "10px",
                //     padding: "30px 90px 30px 95px",
                //     marginBottom:'25px'
                
                //   }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Select Tour Date"
                      value={value}
                      shouldDisableDate={disableWeekends}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <p  style={{ marginTop: '20px',fontWeight:'bold',textAlign:"left"}}>GUESTS<br></br>
<input  type="number"
        // style={{ width: '230px' }}
        value={numberValue}
        onChange={handleInputChange}
        className="input"
       /></p>
        <p style={{textAlign:'left',float:'left',fontWeight:'bold'}}>Price: <br></br>Total:</p>
        <p style={{textAlign:'right',float:'right'}}>{price}<br></br>{total}</p>
          
           <Button type="submit"  value={numberValue}onClick={handleSubmit} style={{width:'230px',fontWeight:'bold', marginTop: '20px',fontFamily:'Roboto Slab' }}>RESERVE</Button>
                 
                
                </div>
              </Col>
            </Row>{" "}
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default Calendar;
