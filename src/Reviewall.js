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
import pic6 from './Pic/tattoo/501329.jpg';
import pic7 from './Pic/ayutthaya/g7dIgG1L.jpeg';
import pic8 from './Pic/farm/GtoxgKEP.jpeg';
import pic9 from './Pic/cook/EmJfLCeC.jpeg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Review1 from './Review1';
import { Rating } from 'primereact/rating';
import { useState, useEffect } from 'react';
import axios from 'axios';
        
import "primereact/resources/themes/lara-light-cyan/theme.css";

function Reviewall() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        axios.get('http://localhost:3001/getReviewCover')
            .then((response) => {
                // Assuming the response.data is an array of tours
                const fetchedTours = response.data;
                // Update the state with the fetched data
                setTours(fetchedTours);
                console.log(fetchedTours)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>Review</h1>
            <Container>
                <Row>
                        {tours.map((tour) => (
                    <Col>
                        <Card style={{width:'15rem',height: '24rem',margin:'1rem'}}>
                            <Card.Body key={tour._id}>
                                <Card.Img variant="top" src={tour.tour_image} style={{width:'13rem',height: '10rem',marginBottom:'1rem'}} />
                                <Card.Title>
                                    <p style={{ fontWeight: 'bold' }}>{tour.tour_name}</p>
                                </Card.Title>
                                <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
                                <Card.Text>{tour.description}</Card.Text>
                            </Card.Body>
                            <Button variant="primary" href={`/Review1/${tour.tour_name}`} style={{}}>read review</Button>
                        </Card>
                    </Col>
                    
                        ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
//   return (
//     <><h1 style={{marginTop:'20px',marginBottom:'20px'}}>Review</h1>
//     <Container>
//         <Row>
//             <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic1} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>Bangkok Grand Tour</p></Card.Title>

//         {/* <div className="card flex justify-content-center"> */}
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//         {/* </div> */}
   
        
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/Bangkok%20Grand%20Tour"'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic2}  style={{height: '10rem'}}/>
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>Bangkok unseen Tour</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/Bangkok%20unseen%20Tour'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic3}  style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>Bkk Instagram/ Tik Tok Tour </p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/Bkk%20Instagram%20TikTok%20Tour%20(For%20whose%20who%20love%20photos)'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic4} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>The ultimate of the floating market tour</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/The%20ultimate%20of%20the%20floating%20market%20tour'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     </Row>
//     <Row>
//             <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic5} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>Half day floating market tour</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/Half%20day%20floating%20market%20tour'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic6} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>The sacred tattoo tour</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/The%20sacred%20tattoo%20tour%20(Sakyant)'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic7} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>Ayutthaya highlight tour</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/Ayutthaya%20highlight%20tour'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic8} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}>The Scenic farm tour</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/The%20Scenic%20farm%20tour'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>
//     </Row>
//     <Row>
//             <Col>
//         <Card style={{width: '18rem',height: '25rem',marginBottom:'35px' }}>
//         <Card.Img variant="top" src={pic9} style={{height: '10rem'}} />
//         <Card.Body>
//             <Card.Title><p style={{fontWeight:'bold'}}> Cooking class</p></Card.Title>
//             <Rating value={5} disabled cancel={false} className='flex justify-content-center'/>
//             <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" href='/Review1/Cooking%20class'>Go somewhere</Button>
//         </Card.Body>
//         </Card>
//     </Col>

//     </Row>
//     </Container>
//     <Footer/>
//     </>
//   )
}

export default Reviewall