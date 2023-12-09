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

  const prepareData = {
    user_id: location.state.order_userID,
    tour_id: location.state.order_tourID,
    quantity: location.state.order_quantity,
    tour_date: location.state.order_tourDate,
    tour_price: location.state.order_tourprice,
    total_price: location.state.order_totalprice
  };
  const tour_date = new Date(prepareData.tour_date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const tour_date_format = tour_date.toLocaleDateString('en-US', options);
  const [month, day, year] = tour_date_format.split('/');
  const tourDate = `${day}/${month}/${year}`;

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    axios
    .post("http://localhost:3001/create-checkout-session", prepareData)
    // .post("https://tourapi-hazf.onrender.com/create-checkout-session", orderData)
    .then((response) => 
    setClientSecret(response.data.clientSecret)
    // ,
    // axios
    // .post("http://localhost:3001/ordercalculate", orderData)
    // .then((response) => setClientSecret(response.data.clientSecret))
    // .catch((error) => console.error("Error fetching data:", error))
    )
    .catch((error) => console.error("Error fetching data:", error));

    
}, []);



  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <div>
            <p>User ID: {prepareData.user_id}</p>
            <p>Tour ID: {prepareData.tour_id}</p>
            <p>Tour Price: {prepareData.tour_price}</p>
            <p>Quantity: {prepareData.quantity}</p>
            <p>Total Price: {prepareData.total_price}</p>
            <p>Date(dd/mm/yyyy):{tourDate}</p>
          </div>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;