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
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Calendar() {
  const location = useLocation();
  const navigate = useNavigate();

  const userID = location.state.userID;
  const tourID = location.state.tourID;
  const tourPrice = location.state.tourPrice;
  const tourImage1 = location.state.tourImage1;

  //must axios closed date
  function disableWeekends(date) {
    // วันที่ 6 คือวันเสาร์ และ วันที่ 0 คือวันอาทิตย์
    return date.day() === 0 || date.day() === 6;
  }

  const [date, setDate] = React.useState(dayjs());
  const [numberValue, setNumberValue] = useState(1);


const [total, setTotal] = useState(0);
const price = location.state.tourPrice;

const handleInputChange = (e) => {
    setNumberValue(e.target.value);
  };
 
  useEffect(() => {
    const calculatedTotal = numberValue * price;
    setTotal(calculatedTotal);
  }, [numberValue, price]);

  console.log(numberValue);
  console.log(date);
  // const handleSubmit = (e) => {  // Process form submission here
  //   e.preventDefault();
    
  //   window.alert(`Selected Date: ${date}\nNumber of persons: ${numberValue}\nPrice: ${total}`); 
  //   window.location.href = `/checkout`;
   
  //  console.log("Selected Date:", date);
  //   console.log("Number of persons:", numberValue);
  //   console.log("price:", total);
  // };
  return (
    <>
      <div className="bg" style={{ paddingTop: "20px" }}>
        <Container>
          <p
            style={{ fontSize: "25px", fontWeight: "bold", textAlign: "left" }}
          >
            {location.state.tourName}
          </p>
          <Row>
            <Col >
              <div
               className="picright"
              >
                <img
          src={location.state.tourImage1}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        />
              </div>
            </Col>
            <Col>
            <Row>
             
              <div  className="picdown">
              <img
          src={location.state.tourImage2}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>

<div  className="picdown">
<img
          src={location.state.tourImage3}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>
        
            </Row>
            <Row>
             
              <div  className="pictop">
              <img
          src={location.state.tourImage4}
          style={{ width: "100%", height: "100%" }}
          alt="First slide"
        /></div>

<div  className="pictop">
          <img
          src={location.state.tourImage5}
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
                  {location.state.tourPriceDetail}
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
                  {location.state.tourCancellation}
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
                      value={date}
                      shouldDisableDate={disableWeekends}
                      onChange={(newValue) => setDate(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <p  style={{ marginTop: '20px',fontWeight:'bold',textAlign:"left"}}>GUESTS<br></br>
<input  type="number"
        // style={{ width: '230px' }}
        value={numberValue}
        onChange={handleInputChange}
        className="input"
        min={'1'}
        max={'10'}
       /></p>
        <p style={{textAlign:'left',float:'left',fontWeight:'bold'}}>Price: <br></br>Total:</p>
        <p style={{textAlign:'right',float:'right'}}>{price}<br></br>{total}</p>
          
        <Button type="submit"  value={numberValue} onClick={()=>{navigate('/Checkout',{replace:true , state:{ userID , tourID, tourImage1 , tourPrice , numberValue , date : date.toISOString()}})}}  style={{width:'230px',fontWeight:'bold', marginTop: '20px',fontFamily:'Roboto Slab' }}>RESERVE</Button>
                 
                
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default Calendar;
