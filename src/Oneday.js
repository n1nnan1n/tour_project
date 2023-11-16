import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import grand1 from './Pic/grandtour/grand1.jpg'
import Button from 'react-bootstrap/Button';
import Grandtour from './Grandtour';
export default function Oneday() {
  return (
<>
    <div>
<h1 style={{color:"#063d8c",fontWeight:'bold',paddingTop:'10px',fontSize:'30px',marginBottom:'20px'}}>1 Day Bangkok city tour</h1>
<Container>
      <Row >
        <Col sm={8} >  <img
                style={{ width: "100%", height: "60vh" }}
                src={grand1}
                alt="First slide"
              /></Col>
        <Col sm={3}>
            <div className='head1day'>
<h3>Bangkok Grand Tour
</h3>
            </div>
            <div className='detail1day'>
    <h2 style={{textAlign:'left'}}>Tour Price for Private tour (THAI BAHT)</h2>
    <h4 style={{textAlign:'left'}}>- for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)
</h4>
<h2 style={{textAlign:'left',color:'red'}}>Cancellation Policy</h2>
<h4 style={{textAlign:'left'}}>- Plans are subject to change, and sometimes unexpectedly, so you can cancel your event free of charge within 7 days before the tour starts.
</h4>
<h2 style={{color:"#063d8c",fontSize:'30px',marginTop:'30px'}}>-8,820 BHT</h2>
<Button href="Grandtour" style={{marginTop:'10px'}} variant="primary" size="lg" active>
        See More
      </Button>{' '}
    </div>
        </Col>
      </Row>
     
    </Container>

      <Row md={4} >
        <Col >  <img
        className='imgall'
                src={grand1}
                alt="First slide"
              /></Col>
        <Col ><img
        className='imgall'
                src={grand1}
                alt="First slide"
              /></Col>
        <Col><img
        className='imgall'
                src={grand1}
                alt="First slide"
              /></Col>
        <Col><img
        className='imgall'
                src={grand1}
                alt="First slide"
              /></Col>
      </Row>

    </div>
    {/* -------------------------------------------------------------------------------------------------------- */}
     <div style={{marginTop:'30px'}}>
     <Container>
           <Row >
             <Col sm={8} >  <img
                     style={{ width: "100%", height: "60vh" }}
                     src={grand1}
                     alt="First slide"
                   /></Col>
             <Col sm={3}>
                 <div className='head1day'>
     <h3>Bangkok Grand Tour
     </h3>
                 </div>
                 <div className='detail1day'>
         <h2 style={{textAlign:'left'}}>Tour Price for Private tour (THAI BAHT)</h2>
         <h4 style={{textAlign:'left'}}>- for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)
     </h4>
     <h2 style={{textAlign:'left',color:'red'}}>Cancellation Policy</h2>
     <h4 style={{textAlign:'left'}}>- Plans are subject to change, and sometimes unexpectedly, so you can cancel your event free of charge within 7 days before the tour starts.
     </h4>
     <h2 style={{color:"#063d8c",fontSize:'30px',marginTop:'30px'}}>-8,820 BHT</h2>
     <Button href="Grandtour" style={{marginTop:'10px'}} variant="primary" size="lg" active>
             See More
           </Button>{' '}
         </div>
             </Col>
           </Row>
          
         </Container>
     
           <Row md={4} >
             <Col >  <img
             className='imgall'
                     src={grand1}
                     alt="First slide"
                   /></Col>
             <Col ><img
             className='imgall'
                     src={grand1}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={grand1}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={grand1}
                     alt="First slide"
                   /></Col>
           </Row>
     
         </div>
         </>
  )
}
