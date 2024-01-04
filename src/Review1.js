import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from './Pic/ayutthaya/LIaolqBL.jpeg'
import about2 from './Pic/about/pic1.jpg'
import Footer from './Footer';
// import { Rating } from "primereact/rating";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Review1() {
  let { tour_name } = useParams();
  const [reviewDetail, setReviewDetail] = useState([]);
  const [tour_img, settour_img] = useState([]);


  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`https://tourapi-hazf.onrender.com/getTourReviewByName/${tour_name}`);
        // const response = await axios.get(`http://localhost:3001/getTourReviewByName/${tour_name}`);
        
        const { reviews, tourImage } = response.data;
        setReviewDetail(reviews);
        settour_img(tourImage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchReview();
  }, [tour_name]);

  return (
    <>
      <div className="wrapper" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <h1 style={{ padding: '20px' }}>Review </h1>

        {Array.isArray(reviewDetail) && reviewDetail.length > 0 ? (
          <>

            {reviewDetail.map((review) => (
              <div
                key={review._id}
                className="fillter"
                style={{
                  backgroundColor: '#FFFAEC',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  padding: '20px',
                  marginBottom: '40px',
                }}
              >
<Row>
    <Col xs={6}>
      {tour_img && (
        <img
          src={tour_img}
          alt="Tour Image"
          style={{ float: 'left', width: '100%', height: 'auto', borderRadius: '10px',margin:'-20px'}}
        />
      )}
    </Col>

    <Col xs={6}>
  <h1 className="fontheder" style={{ float: 'left', marginBottom: '20px' }}>
    {review.tour_name}
  </h1>
  <div style={{ float: 'left', marginTop: '15px', marginLeft: '20px' }}>
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
    </Stack>
  </div>

  <div style={{ float: 'left',width:'100%'}}>
  <h1
    style={{
      float: 'left',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'left',
      fontSize: '25px',
      marginTop: '15px',
    }}
  >
    Writer: {review.user_name}
  </h1>
  </div>
  <div style={{ float: 'left',width:'100%'}}>
  <h1
    style={{
      float: 'left',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'left',
      fontSize: '20px',
      marginTop: '15px',
      whiteSpace: 'pre-line', // Add this style to allow line breaks
    }}
  >
    {review.comment}
  </h1>
  </div>
</Col>
  </Row>
              </div>
            ))}
          </>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Review1;