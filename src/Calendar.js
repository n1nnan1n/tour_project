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

  const [order_userID, setorder_userID] = useState('');
  const [order_tourID, setorder_tourID] = useState('');
  const [order_tourprice, setorder_tourprice] = useState('');
  const [order_quantity, setorder_quantity] = useState();
  const [order_tourDate, setorder_tourDate] = useState('');
  const [order_totalprice, setorder_totalprice] = useState('');

  const userID = location.state.userID;
  const tourID = location.state.tourID;
  const tourImage1 = location.state.tourImage1;
  const price = location.state.tourPrice;

  //must axios closed date
  function disableWeekends(date) {
    // วันที่ 6 คือวันเสาร์ และ วันที่ 0 คือวันอาทิตย์
    return date.day() === 0 || date.day() === 6;
  }

  const [date, setDate] = React.useState(dayjs());
  const [numberValue, setNumberValue] = useState(1);

  const [total, setTotal] = useState(0);


const handleInputChange = (e) => {
    setNumberValue(e.target.value);
  };
 
  useEffect(() => { 
    const calculatedTotal = numberValue * price;
    setTotal(calculatedTotal);
    const orderData ={
      user_id:userID,
      tour_id:tourID,
      quantity:Number(numberValue),
      tour_date:date
    }
    axios
    .post("http://localhost:3001/ordercalculate", orderData)
    // .post("https://tourapi-hazf.onrender.com/create-checkout-session", orderData)
    .then((response) => {
      setorder_userID(response.data.user_id);
      setorder_tourID(response.data.tour_id); // assuming there is a property named tour_id
      setorder_quantity(response.data.quantity); // assuming there is a property named quantity
      setorder_tourDate(response.data.tour_date); // assuming there is a property named tour_date
      setorder_totalprice(response.data.total_price);
      setorder_tourprice(response.data.tour_price);
    })
    .catch((error) => console.error("Error fetching data:", error));
    console.log(orderData);
  }, [userID,tourID,date,numberValue, price]);
  

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
        value={numberValue}
        onChange={handleInputChange}
        className="input"
        min={'1'}
        max={'10'}
       /></p>
        <p style={{textAlign:'left',float:'left',fontWeight:'bold'}}>Price: <br></br>Total:</p>
        <p style={{textAlign:'right',float:'right'}}>{price}<br></br>{total}</p>
          
        <Button type="submit"  value={numberValue} onClick={()=>{navigate('/Checkout',{replace:true , state:{ order_userID , order_tourID , order_quantity , order_tourDate , order_totalprice , order_tourprice , tourImage1 }})}}  style={{width:'230px',fontWeight:'bold', marginTop: '20px',fontFamily:'Roboto Slab' }}>RESERVE</Button>
                 
                
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
