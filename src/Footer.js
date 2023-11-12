import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; 
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import tripadvisor from "./Pic/footer/tripadvisor.jpg";
import './App.css';
import Image from "react-bootstrap/Image";
function Footer() {
  return (
    <Form style={{ backgroundColor: "#3a88fe", paddingTop: "25px" }}>
      <Container>
        <Row style={{ color: "white", textAlign: "left", fontSize: "20px", }}>
            
            <h1 style={{fontSize:'25px',fontWeight:'bold', textAlign: "center",marginBottom:'20px'}}>
              Beyond the trails is operated by Tourism Authority of Thailand
              licensed No. 14/03750
            </h1>
            
          <Col>
            {/* <Form.Control placeholder="First name" /> */}
            
            <p style={{textAlign:'center',fontWeight:'bold'}}> Contact US :</p>
            <p> Email: beyondthetrail2023@gmail.com</p>
            <p> Tel/whats App: +66897759912 +660909675287</p>
            <p> Line ID : olyoil536982</p>
          </Col>
          <Col>
            <p style={{textAlign:'center',fontWeight:'bold'}}>Follower US :</p>
           <a className="contact"> <FontAwesomeIcon icon={faInstagram} style={{color: "#d357fe",fontSize:'50px',marginLeft:'100px',float:'left',textAlign:'center'}} />
          </a>
          <a className="contact">
            <FontAwesomeIcon icon={faTiktok} style={{color: "#e63b7a",float:'left',fontSize:'50px',marginLeft:'100px'}} />
           </a>
           <a className="contact"> <FontAwesomeIcon icon={faFacebook} style={{color: "#0061ff",float:'left',fontSize:'50px',marginLeft:'100px'}} />
             <Image
              style={{width:'55px',height:'55px',marginLeft:'100px',float:'left',textAlign:'center'}}
              src={tripadvisor}
              fluid
            /></a>
            <p style={{float:'left',marginLeft:'80px',fontWeight:'bold'}}>Instagram</p>
            <p style={{float:'left',marginLeft:'75px',fontWeight:'bold'}}>Tiktok</p>
            <p style={{float:'left',marginLeft:'80px',fontWeight:'bold'}}>Facebook</p>
            <p style={{float:'left',marginLeft:'60px',fontWeight:'bold'}}>Tripadvisor</p>
          </Col>
        </Row>
        <Row>
          <footer class="pt-3 mt-4 border-top" style={{color:'white'}}>
            ©copyright 2023-all rights reserved
          </footer>
        </Row>
      </Container>
    </Form>
  );
}

export default Footer;
