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
      const handleOrderCompletion = async () => {
        try {
          // Make a request to your backend to update the order status or perform other operations
          await axios.post('http://localhost:3001/success-order', { /* provide necessary data */ });
          console.log('Order completed successfully!');
        } catch (error) {
          console.error('Error completing order:', error);
        }
      };
    
      // Call the function to handle order completion
      handleOrderCompletion();
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
      
      )}

      if (status === 'canceled'){
        return (
          <section id="canceled">  
            <Alert severity="error" color="error" >
              <p className="fontreturn">
                Payment process canceled. If you have any questions, please contact support.
              </p>
            </Alert>
          </section>
        )
      }

      if (status === 'requires_payment_method') {
        return (
          <section id="payment-method">
            <Alert severity="warning" color="warning">
            <p className="fontreturn">
              Payment requires a valid payment method. Please provide a valid payment method.
            </p>
            </Alert>
          </section>
        );
      }
    
    if (status === 'incomplete'){
      return (
        <section id="incomplete">  
          <Alert severity="info" color="info">
            <p className="fontreturn">
              Payment is incomplete. Please review your order and complete the payment process.
            </p>
          </Alert>
        </section>
      )
    }
    if (status === 'unknown-status'){
      return (
        <section id="unknown-status">  
          <Alert severity="info" color="info">
            <p className="fontreturn">
              Unknown status. Please check your order status later or contact support.     
            </p>
          </Alert>
        </section>
      )
    }
}
  
  
export default Return;