
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from "react-bootstrap/Container";
import ImageGallery from "react-image-gallery";
import pic1 from "./Pic/grandtour/grand1.jpg";
import pic2 from "./Pic/grandtour/-86SWmN5.jpeg";
import pic3 from "./Pic/grandtour/1AqWo8m6.jpeg";
import pic4 from "./Pic/grandtour/C78X-Lc-.jpeg";
import pic5 from "./Pic/grandtour/Do0thfI0.jpeg";
import pic6 from "./Pic/grandtour/Poe2v9Q5.jpeg";
import pic9 from "./Pic/grandtour/apwv1J-2.jpeg";
import pic10 from "./Pic/grandtour/wat1.jpeg";
import "./App.css";
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';
import Calendar from './Calendar'
function Tour1() {
  
const images = [
    {
      original: `${pic1}`,
      thumbnail: `${pic1}`,
    },
    {
      original: `${pic2}`,
      thumbnail: `${pic2}`,
    },
    {
      original: `${pic3}`,
      thumbnail: `${pic3}`,
    },
    {
      original: `${pic4}`,
      thumbnail: `${pic4}`,
    },
    {
      original: `${pic5}`,
      thumbnail: `${pic5}`,
    },
    {
      original: `${pic6}`,
      thumbnail: `${pic6}`,
    },
    {
      original: `${pic9}`,
      thumbnail: `${pic9}`,
    },
    {
      original: `${pic10}`,
      thumbnail: `${pic10}`,
    },
  ];
    const [tourData, setTourData] = useState({}); // Initialize as an empty object

    useEffect(() => {
      const fetchTourData = async () => {
        try {
          const URL = 'https://tourapi-hazf.onrender.com/tourinfo/Bangkok%20Grand%20Tour'; // Assuming fetching a specific tour
          const response = await axios.get(URL);
          const data = response.data;
  
          // Assuming the API returns a single object for the tour data
          if (data && data.tour_name && data.tour_description&& data.tour_itinerary&& data.price_detail&& data.tour_cancelpolicy) {
            setTourData(data);
          } else {
            console.error('Invalid data received:', data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchTourData();
    }, []);
return (
    <>
    <div  className='bg'>
     <Container >
          <div
            style={{ width: "60%", marginBottom: "30px", marginLeft: "20%" , paddingTop: "30px"}}
          >
            <ImageGallery
              items={images}
              showPlayButton={true}
              showFullscreenButton={true}
              slideInterval={1000}
              slideOnThumbnailOver={true}
              showIndex={false}
              onPlay={() => {
                alert("slideshow is now playing!");
              }}
            />
          </div>

        </Container>
{/* <div className='data-app'>
      {tourData && tourData.tour_name && tourData.tour_description ? (
        <div>
          <h1>{tourData.tour_name}</h1>
          <p>{tourData.tour_description}</p>
        </div>
      ) : (
        <p>No tour data available</p>
      )}
    </div> */}
 <div style={{ marginBottom: "30px",width:'90%',marginLeft:"70px" }}>
 <Tabs
defaultActiveKey="profile"
id="uncontrolled-tab-example"
className="tab"
data-bs-theme="dark"
>

<Tab eventKey="description" title="description">
  <Card.Body className="cardgrand">
   
    <Card.Title ><h1 >{tourData.tour_name}</h1></Card.Title>
    <Card.Text>
      
          <p style={{textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_description}</p>
    </Card.Text>
   
  </Card.Body>
</Tab>
<Tab eventKey="Itinerary" title="Itinerary">
  <Card.Body className="cardgrand">
      <Card.Title><h1>Itinerary</h1></Card.Title>
      <Card.Text>
      <p style={{textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_itinerary}</p>
      </Card.Text>
     
    </Card.Body>
</Tab>
<Tab eventKey="Price" title="Price">
<Card.Body className="cardgrand">
      <Card.Title> <h1 style={{fontSize:'23px',fontWeight:'bold'}}>Tour Price for Private tour (THAI BAHT)
</h1></Card.Title>
      <Card.Text>
      <p style={{textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.price_detail}</p>
      <Card.Title> <h1 style={{fontSize:'23px',fontWeight:'bold'}}>Cancelpolicy
</h1></Card.Title>
      <p style={{textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_cancelpolicy}</p>
      </Card.Text>
     
    </Card.Body>
</Tab>

<Tab eventKey="review" title="review">
<Card.Body className="cardgrand">
      <Card.Title><h1>Review</h1></Card.Title>
      <Card.Text>
      <p style={{textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_description}</p>
      </Card.Text>
      
    </Card.Body>
</Tab>
</Tabs>
 <Button variant="primary" style={{marginTop:'30px'}} href="Calendar">Book Now</Button>
</div> 
<Footer/>
</div>

</>
)}

export default Tour1;
