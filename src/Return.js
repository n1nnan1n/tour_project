import React, { useState, useEffect } from "react";
import {
    Navigate
  } from "react-router-dom";
import axios from "axios";

import Alert from '@mui/material/Alert';
const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      axios
      .get(`http://localhost:3001/session-status?session_id=${sessionId}`)
      // .get(`https://tourapi-hazf.onrender.com/session-status?session_id=${sessionId}`)
      .then((response) => {
        const data = response.data;
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);
  
    if (status === 'open') {
      return (
        <Navigate to="/checkout" />
      )
    }
  
    if (status === 'complete') {
      return (
        <section id="success">  
          <Alert severity="success" color="info" >
          <p className="fontreturn">
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          
        
              This is a success alert — check it out!
              </p>
            </Alert>
        </section>
      
      )
      
       
        
        }
      
    }
  
  
export default Return;