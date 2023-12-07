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

  const orderData = {
    userID: location.state.userID,
    tourID: location.state.tourID,
    tourPrice: location.state.tourPrice,
    numberValue: location.state.numberValue,
    date: new Date(location.state.date).toISOString(),
  };

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    axios
    // .post("http://localhost:3001/create-checkout-session", orderData)
    .post("https://tourapi-hazf.onrender.com/create-checkout-session", orderData)
    .then((response) => setClientSecret(response.data.clientSecret))
    .catch((error) => console.error("Error fetching data:", error));

    axios
    .post("http://localhost:3001/ordercalculate", orderData)
    .then((response) => setClientSecret(response.data.clientSecret))
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
            <p>User ID: {orderData.userID}</p>
            <p>Tour ID: {orderData.tourID}</p>
            <p>Tour Price: {orderData.tourPrice}</p>
            <p>Number Value: {orderData.numberValue}</p>
            <p>Date:{" "}
  {new Date(orderData.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</p>
          </div>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;