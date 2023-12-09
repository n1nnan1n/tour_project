import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from './Pic/ayutthaya/LIaolqBL.jpeg'
import about2 from './Pic/about/pic1.jpg'
import Footer from './Footer';
import { Rating } from "primereact/rating";
function Review1() {
  return (
    <>
    <div className="wrapper" style={{paddingLeft:'10%',paddingRight:'10%'}}>

     
        <h1 style={{padding:'20px'}}>Review </h1>
        <div className='fillter'style={{backgroundColor:'#FFFAEC',width:"100%",height:'100%',borderRadius:'20px',padding:'20px',marginBottom:'40px'}}>
       
      <Row >
        <Col 
        //  style={{width: "700px", height: "600px" ,overflow:'hidden',marginTop:'10px',borderRadius:'60px'}}
        >
            <img
                style={{ width: "100%",borderRadius:'10px' , height: "600px" }}
                src={about2}
                alt="First slide"
              /></Col>
        <Col xs={6}>
        <h1 className='fontheder' style={{float:'left'}}>Nametour </h1>


        <div style={{float:'left',marginTop:'25px',marginLeft:'20px'}}>
         {/* <h2 style={{float:'left'}}>Rating : </h2>   */}
          <Rating value={5} readOnly cancel={false} />
        </div>
  
<h1 style={{float:'left',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'20px'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tellus eu turpis laoreet mattis. Vivamus ac nunc vitae tellus hendrerit posuere. Vivamus ex lectus, venenatis et est eget, consectetur viverra nisl. In hac habitasse platea dictumst. Integer vitae quam tortor. Maecenas in euismod lacus, nec pretium augue. Phasellus non fringilla nisi, id egestas massa. Vivamus nec sem sed tortor porttitor viverra. Donec vel urna leo. Suspendisse pharetra aliquam mi, ut elementum ligula congue eu. Proin vitae dolor finibus, varius erat vel, tempus ipsum. Suspendisse accumsan mattis commodo. Praesent semper, velit non venenatis laoreet, tortor nunc congue orci, sit amet aliquet libero tellus sed leo.


</h1>

        </Col>
        
      </Row>
        </div> 
        <div className='fillter'style={{backgroundColor:'#FFFAEC',width:"100%",height:'100%',borderRadius:'20px',padding:'20px',marginBottom:'40px'}}>
       
       <Row >
         <Col 
         //  style={{width: "700px", height: "600px" ,overflow:'hidden',marginTop:'10px',borderRadius:'60px'}}
         >
             <img
                 style={{ width: "100%",borderRadius:'10px' , height: "600px" }}
                 src={about2}
                 alt="First slide"
               /></Col>
         <Col xs={6}>
         <h1 className='fontheder' style={{float:'left'}}>Nametour </h1>
 
 
         <div style={{float:'left',marginTop:'25px',marginLeft:'20px'}}>
          {/* <h2 style={{float:'left'}}>Rating : </h2>   */}
           <Rating value={5} readOnly cancel={false} />
         </div>
   
 <h1 style={{float:'left',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify',fontSize:'20px'}}>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat tellus eu turpis laoreet mattis. Vivamus ac nunc vitae tellus hendrerit posuere. Vivamus ex lectus, venenatis et est eget, consectetur viverra nisl. In hac habitasse platea dictumst. Integer vitae quam tortor. Maecenas in euismod lacus, nec pretium augue. Phasellus non fringilla nisi, id egestas massa. Vivamus nec sem sed tortor porttitor viverra. Donec vel urna leo. Suspendisse pharetra aliquam mi, ut elementum ligula congue eu. Proin vitae dolor finibus, varius erat vel, tempus ipsum. Suspendisse accumsan mattis commodo. Praesent semper, velit non venenatis laoreet, tortor nunc congue orci, sit amet aliquet libero tellus sed leo.
 
 
 </h1>
 
         </Col>
         
       </Row>
         </div> 
        </div>
        <Footer/>
       </>
    
  )
}

export default Review1