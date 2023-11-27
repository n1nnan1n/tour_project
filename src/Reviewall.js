import React from 'react'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./App.css";
import pic1 from './Pic/grandtour/apwv1J-2.jpeg';
import pic2 from './Pic/unseentour/RSYJH54h.jpeg';
import pic3 from './Pic/tiktoktour/1Kc_vTa5.jpeg';
import pic4 from './Pic/market/XyEwsKWw.jpeg';
import pic5 from './Pic/half/ErenTsct.jpeg';
import pic6 from './Pic/unseentour/8kF2b78O.jpeg';
import pic7 from './Pic/unseentour/8kF2b78O.jpeg';
import pic8 from './Pic/unseentour/8kF2b78O.jpeg';
import pic9 from './Pic/unseentour/8kF2b78O.jpeg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Reviewall() {
  return (
    <><h1 style={{marginTop:'20px',marginBottom:'20px'}}>Reviewall</h1>
    <Container>
        <Row>
            <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bangkok Grand Tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic2} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bangkok unseen Tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bkk Instagram/ Tik Tok Tour </p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic4} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>The ultimate of the floating market tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    </Row>
    <Row>
            <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic5} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Half day floating market tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic6} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bangkok Grand Tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic7} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bangkok Grand Tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic8} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bangkok Grand Tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
    </Row>
    <Row>
            <Col>
        <Card style={{ width: '18rem',marginBottom:'35px' }}>
        <Card.Img variant="top" src={pic9} />
        <Card.Body>
            <Card.Title><p style={{fontWeight:'bold'}}>Bangkok Grand Tour</p></Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>

    </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default Reviewall