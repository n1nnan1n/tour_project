import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from './Pic/about/wat1.jpeg'
import about2 from './Pic/about/pic1.jpg'
import Footer from './Footer';

export default function About() {
  return (
    <>
    <div className="wrapper" style={{paddingLeft:'10%',paddingRight:'10%'}}>
        <h1 style={{padding:'20px'}}>About us</h1>
        <div className='fillter'style={{backgroundColor:'#FFFAEC',width:"100%",height:'100%',padding:'20px',marginBottom:'40px'}}>
        <Row>
        <Col xs={6}>
            <h1 ><div className='detailabout'>
                   Let Beyond the Trails be your first choice for unique private tours in and around Bangkok. For example, Thaka floating market, where you can immerse yourself in the local culture as the neighbourhood vendors ply their wares from their floating stalls, or Ayutthaya, the ancient capital city of Siam, filled with temples and palaces dating back to the 15th and 16th centuries. If you already have some ideas for your trip, let us help you to customize your tour to meet your needs and make sure that you have a fantastic time while in Thailand.
                   </div></h1>
<h1 ><div className='detailabout'>
    The story of Beyond the Trails begins with 2 friends who have worked in the tourism business in Thailand and South East Asia for more than 15 years. We have the background and knowledge to create memorable and distinctive encounters during your time in Thailand.
</div>
</h1>

        </Col>
        <Col xs={6}><img
                style={{ width: "100%", height: "100%" }}
                src={about1}
                alt="First slide"
              /></Col>
      </Row>
      <Row style={{marginTop:'30px'}}>
        <Col 
        //  style={{width: "700px", height: "600px" ,overflow:'hidden',marginTop:'10px'}}
        ><img
        style={{ width: "100%" , height: "650px" }}
                src={about2}
                alt="First slide"
              /></Col>
        <Col xs={6}>
            <h1 ><div className='detailabout'>
                   Let Beyond the Trails be your first choice for unique private tours in and around Bangkok. For example, Thaka floating market, where you can immerse yourself in the local culture as the neighbourhood vendors ply their wares from their floating stalls, or Ayutthaya, the ancient capital city of Siam, filled with temples and palaces dating back to the 15th and 16th centuries. If you already have some ideas for your trip, let us help you to customize your tour to meet your needs and make sure that you have a fantastic time while in Thailand.
</div></h1>
<h1 ><div className='detailabout'>
    
Beyond the Trails is a tour operator registered in Thailand and run by experienced locals. Our goal is to connect our clients with the genuine local culture of Bangkok. We want you to witness both the highlights and hidden gems that make up our home city of Bangkok and its surrounding areas and also further afield in Thailand. Thailand has many beautiful and exotic spots for you to see and every tour is guaranteed private and organized exclusively for you. Alternatively, you can design your own trip and let us help you to bring it to life by organizing accommodation and transfers for you. On your tour, you will come across the ´must see´ highlights of Bangkok and also, the rarely visited, but equally fascinating places in Bangkok that only the locals know about. Join us and let us introduce you to the authentic Bangkok!
</div>
</h1>

        </Col>
        
      </Row>
        </div> 
        </div>
        <Footer/>
       </>
  )
}
