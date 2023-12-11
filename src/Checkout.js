import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
  } from '@stripe/react-stripe-js';
  import axios from "axios";
import { useLocation} from 'react-router-dom';
  
const CheckoutForm = () => {
  const location = useLocation();
  const stripePromise = loadStripe("pk_test_51OGNrcDiyx2jx89T4UZmtjLOXthkrMBdIr0HA4xQqvfr1UcWTvwwlzEnbWJtBmXpEjyZtoKRZyGY436VpQSj3r6P00KsovpnoJ");

  const [clientSecret, setClientSecret] = useState('');

  const [title, setTitle] = useState('');
  const [user_fname, setuser_fname] = useState('');
  const [user_lname, setuser_lname] = useState('');

  const prepareData = {
    user_id: location.state.order_userID,
    tour_id: location.state.order_tourID,
    quantity: location.state.order_quantity,
    tour_date: location.state.order_tourDate,
    tour_price: location.state.order_tourprice,
    total_price: location.state.order_totalprice,
  };
  console.log(location.state.order_tourDate)
  const originalDate = new Date(prepareData.tour_date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    axios
    .post("http://localhost:3001/create-checkout-session", prepareData)
    // .post("https://tourapi-hazf.onrender.com/create-checkout-session", orderData)
    .then((response) => 
    setClientSecret(response.data.clientSecret))
    .catch((error) => console.error("Error fetching data:", error));
    
    axios
    .post("http://localhost:3001/placeorder", prepareData)
    .then(response => {
      setTitle(response.data.title);
      setuser_fname(response.data.user_firstname);
      setuser_lname(response.data.user_lastname);
    })
    .catch((error) => console.error("Error fetching data:", error))

}, []);



  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <div style={{width:'100%',padding:'2%'}}>
            <h2>Firstname : {title} {user_fname}<br></br>Tour day / Appointment day : {formattedDate}</h2>
          </div>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;