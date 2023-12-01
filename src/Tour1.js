
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
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Tour1() {
let { tour_name } = useParams(); 
    const [tourData, setTourData] = useState({}); // Initialize as an empty object

    useEffect(() => {
      const fetchTourData = async () => {
        try {
          // const URL = 'https://tourapi-hazf.onrender.com/tourinfo/'+tour_name; // Assuming fetching a specific tour
          const URL = 'https://tourapi-hazf.onrender.com/tourinfo/'+tour_name;
          console.log(URL);
          const response = await axios.get(URL);
          const data = response.data;
  
          // Assuming the API returns a single object for the tour data
          if (data && data.tour_name && data.tour_description&& data.tour_itinerary&& data.price_detail && data.tour_cancelpolicy && data.tour_image) {
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

    const images = (tourData.tour_image || []).map((base64String, index) => ({
      original: base64String,
      thumbnail: base64String,
      description: `Image ${index + 1}`,
    }));
  
return (
    <>
    <div  className='bg'>
    <div>
      {/* {tourData.tour_image?.map((base64String, index) => (
        <img
          key={index}
          src={`${base64String}`} // Assuming PNG format, adjust accordingly
          alt={`Image ${index + 1}`}
        />
      ))} */}
    </div>
     <Container >
          <div
            style={{ maxWidth: "770px", marginBottom: "30px",marginLeft: "20%" , paddingTop: "30px"}}
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
 <div style={{ marginBottom: "30px"  }}>
 <Tabs
defaultActiveKey="description"
id="uncontrolled-tab-example"
className="tab"
data-bs-theme="dark"
>

<Tab eventKey="description" title="description"  style={{width:'100%'}} >
  <Card.Body className="cardgrand" style={{overflow:'auto',width:'60%',wordWrap:'break-word',backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
   
    <Card.Title ><h1 >{tourData.tour_name}</h1></Card.Title>
    <Card.Text>
          <p style={{wordWrap:'break-word',whiteSpace:'break-spaces',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_description}</p>
    </Card.Text>
   
  </Card.Body>
</Tab>
<Tab eventKey="Itinerary" title="Itinerary">
  <Card.Body className="cardgrand"  style={{backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Card.Title><h1>Itinerary</h1></Card.Title>
      <Card.Text>
      <p style={{wordWrap:'break-word',whiteSpace:'break-spaces',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_itinerary}</p>
      </Card.Text>
     
    </Card.Body>
</Tab>
<Tab eventKey="Price" title="Price">
<Card.Body className="cardgrand " style={{backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Card.Title> <h1 style={{wordWrap:'break-word',whiteSpace:'break-spaces',fontSize:'23px',fontWeight:'bold'}}>Tour Price for Private tour (THAI BAHT)
</h1></Card.Title>
      <Card.Text>
      <p style={{wordWrap:'break-word',whiteSpace:'break-spaces',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.price_detail}</p>
      <Card.Title> <h1 style={{fontSize:'23px',fontWeight:'bold'}}>Cancelpolicy
</h1></Card.Title>
      <p style={{wordWrap:'break-word',whiteSpace:'break-spaces',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_cancelpolicy}</p>
      </Card.Text>
     
    </Card.Body>
</Tab>

<Tab eventKey="review" title="review">
<Card.Body className="cardgrand"  style={{backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Card.Title><h1>Review</h1></Card.Title>
      <Card.Text>
      {/* <p style={{wordWrap:'break-word',whiteSpace:'break-spaces',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'18px',margin:'30px'}}>{tourData.tour_description}</p> */}
      </Card.Text>
      
    </Card.Body>
</Tab>
</Tabs>
    <Link to={{ pathname: "Calendar", state: { tourData } }}>
      <Button variant="primary" style={{ marginTop: '30px' }}>Book Now</Button>
    </Link>
 {/* <Button variant="primary" style={{marginTop:'30px'}} href="Calendar" >Book Now</Button> */}

</div>  </Container>
<Footer/>
</div>

</>
)}

export default Tour1;
