import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
  } from '@stripe/react-stripe-js';
  import axios from "axios";
  
const CheckoutForm = () => {
    const stripePromise = loadStripe("pk_test_51OGNrcDiyx2jx89T4UZmtjLOXthkrMBdIr0HA4xQqvfr1UcWTvwwlzEnbWJtBmXpEjyZtoKRZyGY436VpQSj3r6P00KsovpnoJ");

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    axios
    .post("http://localhost:3001/create-checkout-session")
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
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;