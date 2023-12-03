
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
import { useNavigate } from 'react-router-dom';


function Tour1() {
  const navigate = useNavigate();

    let { tour_name } = useParams(); 
    const [tourData, setTourData] = useState({}); // Initialize as an empty object
    const [userID, setUserID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFname, setUserFname] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [tourID, setTourID] = useState('');
    const [tourName, setTourName] = useState('');
    const [tourImage1, setTourImage1] = useState('');
    const [tourImage2, setTourImage2] = useState('');
    const [tourImage3, setTourImage3] = useState('');
    const [tourImage4, setTourImage4] = useState('');
    const [tourImage5, setTourImage5] = useState('');
    const [tourPriceDetail, setTourPriceDetail] = useState('');
    const [tourCancellation, setTourCancellation] = useState('');
    const [tourPrice, setTourPrice] = useState('');

    console.log(tourImage1);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Split the token into its parts
          const [, payloadBase64,] = token.split('.');
          const decodedPayload = atob(payloadBase64);
  
          // Parse the decoded payload as JSON
          const { _id,fname,email } = JSON.parse(decodedPayload);
          console.log(_id,fname,email)
  
          setUserID(_id);
          setUserFname(fname);
          setUserEmail(email);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error parsing token:', error);
        }
      }

      const fetchTourData = async () => {
        try {
          // const URL = 'https://tourapi-hazf.onrender.com/tourinfo/'+tour_name; // Assuming fetching a specific tour
          const URL = 'https://tourapi-hazf.onrender.com/tourinfo/'+tour_name;
          // console.log(URL);
          const response = await axios.get(URL);
          const data = response.data;
  
          // Assuming the API returns a single object for the tour data
          if (data && data.tour_name && data.tour_description&& data.tour_itinerary&& data.price_detail && data.tour_cancelpolicy && data.tour_image) {
            setTourData(data);
            setTourID(data._id);
            setTourName(data.tour_name);
            setTourImage1(data.tour_image[0]);
            setTourImage2(data.tour_image[1]);
            setTourImage3(data.tour_image[2]);
            setTourImage4(data.tour_image[3]);
            setTourImage5(data.tour_image[4]);
            setTourPriceDetail(data.price_detail)
            setTourPrice(data.price)
            setTourCancellation(data.tour_cancelpolicy)
            setIsLoggedIn(true);
            console.log(data._id,data.tour_name)
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

      // const handleBookNow = () => {
      //   if (isLoggedIn) {
      //     console.log('Navigating with user and tour data:', { userID, userFname, userEmail, tourID, tourName });
      //     navigate({ pathname: "/Calendar", replace:true , state: { userID, userFname, userEmail, tourID, tourName}});
      //   } else {
      //     navigate("/Login");
      //   }
      // };
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
{isLoggedIn ? (
              <>
                <Button
                  variant="dark"
                  style={{ marginRight: '15px', fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto" }}
                  onClick={()=>{navigate('/Calendar',{replace:true , state:{ userID, userFname, userEmail, tourID, tourName , tourImage1 , tourImage2 , tourImage3 , tourImage4 , tourImage5 , tourPriceDetail , tourCancellation , tourPrice}})}}>
                  Book now
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" class="btn btn-outline-dark" style={{ marginRight: '15px' , fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto"}}>
                  Login
                </Link>
              </>
            )}
  {/* <Button variant="primary" style={{ marginTop: '30px' }} onClick={handleBookNow}>
      Book Now
  </Button> */}
 {/* <Button variant="primary" style={{marginTop:'30px'}} href="Calendar" >Book Now</Button> */}

</div>  </Container>
<Footer/>
</div>

</>
)}

export default Tour1;
