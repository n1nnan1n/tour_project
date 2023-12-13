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

  const [isComplete, setIsComplete] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [a_user_id, seta_user_id] = useState('');
  const [a_tour_id, seta_tour_id] = useState('');
  const [a_quantity, seta_quantity] = useState('');
  const [a_tour_date, seta_tour_date] = useState('');
  const [a_total_price, seta_total_price] = useState('');

  const prepareData = {
    order_user_id: location.state.order_userID,
    order_user_email: location.state.order_user_email,
    order_tour_id: location.state.order_tourID,
    order_quantity: location.state.order_quantity,
    order_tour_date: location.state.order_tourDate,
    order_tour_price: location.state.order_tourprice,
    order_total_price: location.state.order_totalprice
  };
  console.log({"prepare data":prepareData});
  
  const originalDate = new Date(prepareData.order_tour_date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString("en-GB", options);


  useEffect(() => {
    axios.post("http://localhost:3001/create-checkout-session", prepareData)
    .then((response) => {
        setClientSecret(response.data.clientSecret);
        // console.log({"checkout data":response.data.orderdata});
        seta_user_id(response.data.orderdata.order_user_id);
        seta_tour_id(response.data.orderdata.order_tour_id);
        seta_quantity(response.data.orderdata.order_quantity);
        seta_tour_date(response.data.orderdata.order_tour_date);
        seta_total_price(response.data.orderdata.order_total_price);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);

const handleComplete = async () => {
  try {
    const orderdata = {
      user_id: a_user_id,
      tour_id: a_tour_id,
      quantity: a_quantity,
      tour_date: a_tour_date,
      total_price: a_total_price
    };

    // Wait for the axios.post to complete before proceeding
    await axios.post('http://localhost:3001/successorder', orderdata);
    // Any code here will run after the axios.post is complete
    setIsComplete(true);
  } catch (error) {
    console.error('Error posting order data:', error);
  }
};



return (
  <div id="checkout">
    {clientSecret && !isComplete && (
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret, onComplete: handleComplete }}
      >
        <div style={{ width: '100%', padding: '2%' }}>
          <h2>[ Name ] : {location.state.order_title} {location.state.order_user_firstname} {location.state.order_user_lastname}<br></br>[ Tour name ] : {location.state.order_tour_name}<br></br>[ Tour date ] : {formattedDate}<br></br>[ Person(s) ] : {prepareData.order_quantity}</h2>
        </div>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    )}

    {isComplete && (
      <div>
        <h2>Payment successfully completed!</h2>
      </div>
    )}
  </div>
);
};
export default CheckoutForm;