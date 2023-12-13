import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
  } from '@stripe/react-stripe-js';
  import axios from "axios";
import { useNavigate,useLocation} from 'react-router-dom';
  
const CheckoutForm = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to the homepage or another route
    window.location.href = '/login';
  }
  
  const location = useLocation();
  // const navigate = useNavigate();
  const stripePromise = loadStripe("pk_test_51OGNrcDiyx2jx89T4UZmtjLOXthkrMBdIr0HA4xQqvfr1UcWTvwwlzEnbWJtBmXpEjyZtoKRZyGY436VpQSj3r6P00KsovpnoJ");

  const [clientSecret, setClientSecret] = useState('');

  const prepareData = {
    order_title:location.state.order_title,
    order_user_id: location.state.order_userID,
    order_user_firstname: location.state.order_user_firstname,
    order_user_lastname: location.state.order_user_lastname,
    order_user_email: location.state.order_user_email,
    order_tour_id: location.state.order_tourID,
    order_tour_name: location.state.order_tour_name,
    order_quantity: location.state.order_quantity,
    order_tour_date: location.state.order_tourDate,
    order_tour_price: location.state.order_tourprice,
    order_total_price: location.state.order_totalprice,
  };
  console.log(prepareData);
  
  const originalDate = new Date(prepareData.order_tour_date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);


  useEffect(() => {
    axios.post("http://localhost:3001/create-checkout-session", prepareData)
    .then((response) => {
        setClientSecret(response.data.clientSecret);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <div style={{width:'100%',padding:'2%'}}>
            <h2>[ Name ] : {prepareData.order_title} {prepareData.order_user_firstname} {prepareData.order_user_lastname}<br></br>[ Tour name ] : {prepareData.order_tour_name}<br></br>[ Tour date ] : {formattedDate}<br></br>[ Person(s) ] : {prepareData.order_quantity}</h2>
          </div>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;