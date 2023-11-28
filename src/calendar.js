import React, { useState } from "react";
import "./App.css";
import Footer from './Footer';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Oneday from './Oneday';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import unseen3 from './Pic/unseentour/InD1O0dN.jpeg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Calendar() {
    function disableWeekends(date) {
        // วันที่ 6 คือวันเสาร์ และ วันที่ 0 คือวันอาทิตย์
        return date.day() === 0 || date.day() === 6;
      }
      
      const [value, setValue] = React.useState(dayjs('2022-04-17'));
    
      const handleClick = event => {
        <Oneday />
      };
     

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setCount(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log('Selected Date:', value);
    console.log('Number of persons:', count);
    // Add your logic for form submission or API call here
  };
  return (
    <div className='bg' style={{paddingTop:'20px'}}><h1 >Book</h1>
    
     
     <div style={{
        margin: '40px',paddingBottom:'50px'
      }}> 
        <Container >
        <Row>
        <Col style={{overflow:'Hidden',height:'400px',marginTop:'-30px'}}><img
             className='imgall'
                     src={unseen3}
                     style={{width:'100%',height:'100%'}}
                     alt="First slide"
                   />
        </Col>
        <Col>
    
            <div style={{float:'left',marginLeft:'15px'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
          
            label="Select Tour Date"
            value={value}
            shouldDisableDate={disableWeekends} 
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
      
   <Form onSubmit={handleSubmit}>
                  <div className="counter">
                    <h2>Number of Persons:</h2>
                    <div className="counter-input">
                      <Button onClick={handleDecrement} className="decrementBtn">-</Button>
                      <input type="number" value={count} onChange={handleInputChange} />
                      <Button onClick={handleIncrement} className="incrementBtn">+</Button>
                    </div>
                  </div>
                  <Button type="submit">Submit</Button>
                </Form>
      </div>
      </Col>
      </Row>
      </Container>
      </div>
    <Footer/>
    </div>
  )
}

export default Calendar;