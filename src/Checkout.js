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
  const [orderID, setOrderID] = useState('');

  const prepareData = {
    user_id: location.state.order_userID,
    tour_id: location.state.order_tourID,
    quantity: location.state.order_quantity,
    tour_date: location.state.order_tourDate,
    tour_price: location.state.order_tourprice,
    total_price: location.state.order_totalprice,
  };
  
  const originalDate = new Date(prepareData.tour_date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);

  useEffect(() => {
    setOrderID(location.state.order_id);
    console.log(location.state.order_id);
    let isMounted = true;
    axios
    .post("http://localhost:3001/create-checkout-session", prepareData)
    .then((response) => {
      if (isMounted) {
        setClientSecret(response.data.clientSecret);
        const getorderurl = `http://localhost:3001/getwaitingorder/${location.state.order_id}`;
        axios.get(getorderurl)
        .then((responseorder) => {
          if (isMounted) {
            console.log(responseorder.data);
            setTitle(responseorder.data.title);
            setuser_fname(responseorder.data.user_firstname);
            setuser_lname(responseorder.data.user_lastname);
          }
          return null;
        })
        .catch((error) => console.error("Error fetching data:", error));
      }
      return null;
    })
    .catch((error) => console.error("Error fetching data:", error));

  // Cleanup function to handle unmounting
  return () => {
    isMounted = false;
  };
}, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <div style={{width:'100%',padding:'2%'}}>
            <h2>[ Order id ] : {location.state.order_id}<br></br>[ Name ] : {title} {user_fname} {user_lname}<br></br>[ Tour date ] : {formattedDate}<br></br>[ Person(s) ] : {prepareData.quantity}</h2>
          </div>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;