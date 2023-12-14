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

  const [order_id, setorder_id] = useState('');

  const prepareData = {
    order_user_id: location.state.order_userID,
    order_user_email: location.state.order_user_email,
    order_tour_id: location.state.order_tourID,
    order_quantity: location.state.order_quantity,
    order_tour_date: location.state.order_tourDate,
    order_tour_price: location.state.order_tourprice,
    order_total_price: location.state.order_totalprice
  };

  const [orderedDetail, setOrderedDetail] = useState({
    ordered_status: '',
    ordered_title: '',
    ordered_user_id: '',
    ordered_user_firstname: '',
    ordered_user_lastname: '',
    ordered_user_email: '',
    ordered_tour_id: '',
    ordered_tour_name: '',
    ordered_tour_price: '',
    ordered_tour_date: '',
    ordered_quantity: '',
    ordered_total_price: '',
    ordered_createdAt: ''
  });

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
    const response = await axios.post('http://localhost:3001/successorder', orderdata);
    const responseData = response.data;
    // Any code here will run after the axios.post is complete
    console.log(responseData.order_id);
    setorder_id(responseData.order_id);

    const orderdetail = await axios.get('http://localhost:3001/getuserorder/'+responseData.order_id);
    const orderdetailData = orderdetail.data;
    
    setOrderedDetail({
      ordered_status: orderdetailData.order_status,
      ordered_title: orderdetailData.title,
      ordered_user_id: orderdetailData.user_id,
      ordered_user_firstname: orderdetailData.user_firstname,
      ordered_user_lastname: orderdetailData.user_lastname,
      ordered_user_email: orderdetailData.user_email,
      ordered_tour_id: orderdetailData.tour_id,
      ordered_tour_name: orderdetailData.tour_name,
      ordered_tour_price: orderdetailData.tour_price,
      ordered_tour_date: orderdetailData.tour_date,
      ordered_quantity: orderdetailData.quantity,
      ordered_total_price: orderdetailData.total_price,
      ordered_createdAt: orderdetailData.createdAt
    });

    setIsComplete(true);
  } catch (error) {
    console.error('Error posting order data:', error);
  }
};
const receieveTourDate = new Date(prepareData.order_tour_date);
const originalTourDate = new Date(orderedDetail.ordered_tour_date);
const originalCreatedAt = new Date(orderedDetail.ordered_createdAt);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const formattedreceieveTourDate = receieveTourDate.toLocaleDateString('en-US', options);
const formattedTourDate = originalTourDate.toLocaleDateString('en-US', options);
const formattedCreatedAt = originalCreatedAt.toLocaleDateString('en-US', options);

return (
  <div id="checkout">
    {clientSecret && !isComplete && (
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret, onComplete: handleComplete }}
      >
        <div style={{ width: '100%', padding: '2%' }}>
          <h2>[ Name ] : {location.state.order_title} {location.state.order_user_firstname} {location.state.order_user_lastname}<br></br>[ Tour name ] : {location.state.order_tour_name}<br></br>[ Tour date ] : {formattedreceieveTourDate}<br></br>[ Person(s) ] : {prepareData.order_quantity}</h2>
        </div>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    )}

    {isComplete && (
      <div>
        <h2>Payment successfully completed!</h2>
        <h2>Order ID : {order_id}<br></br>Name : {orderedDetail.ordered_title} {orderedDetail.ordered_user_firstname} {orderedDetail.ordered_user_lastname}<br></br>Email : {orderedDetail.ordered_user_email}<br></br>Tour name : {orderedDetail.ordered_tour_name}<br></br>Person(s) : {orderedDetail.ordered_quantity}<br></br>Total price : {orderedDetail.ordered_total_price}</h2>

      </div>
    )}
  </div>
);
};
export default CheckoutForm;