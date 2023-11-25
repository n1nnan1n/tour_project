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
function Calendar() {
    function disableWeekends(date) {
        // วันที่ 6 คือวันเสาร์ และ วันที่ 0 คือวันอาทิตย์
        return date.day() === 0 || date.day() === 6;
      }
      
      const [value, setValue] = React.useState(dayjs('2022-04-17'));
    
      const handleClick = event => {
        <Oneday />
      };
  return (
    <div className='bg' style={{paddingTop:'20px'}}><h1 >Book</h1>
     <div style={{
        margin: '40px',paddingBottom:'50px'
      }}>
        <Container style={{paddingLeft:'32%'}}>
        <div style={{marginRight:'15px',float:'left'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Uncontrolled picker"
            defaultValue={dayjs('2022-04-17')}
            shouldDisableDate={disableWeekends} 
            renderInput={(params) => <TextField {...params} />}
            
          />
            </LocalizationProvider>
            </div>
            <div style={{float:'left'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Tour Date"
            value={value}
            shouldDisableDate={disableWeekends} 
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
      </div>
      </Container>
      </div>
    <Footer/>
    </div>
  )
}

export default Calendar;