import React from 'react';
import { useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Editpro from './Editpro';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import Row from "react-bootstrap/Row";

import {
  MDBTypography,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
export default function Profile() {
  const [profileDetail, setprofileDetail] = useState({
    p_title: '',
    p_firstname: '',
    p_lastname: '',
    p_phone: '',
    p_nation: '',
    p_birth: '',
    p_passport: '',
    p_passport_exp: '',
    p_food_allergy: '',
    p_special: ''
  });
  const [orders, setOrders] = useState({});

  const [formatorderdate, setformatorderdate] = useState('');
  const [formattourdate, setformattourdate] = useState('');

  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to the homepage or another route
    window.location.href = '/login';
  }

  useEffect(() => {
    
    if (token) {
      try {
        // Split the token into its parts
        const [, payloadBase64,] = token.split('.');
        const decodedPayload = atob(payloadBase64);

        // Parse the decoded payload as JSON
        const { _id,fname,email,exp,expiresIn } = JSON.parse(decodedPayload);
        console.log(_id,fname,email,exp,expiresIn )
        document.cookie = `token=${token}; path=/; max-age=${expiresIn}; HttpOnly`;
        if (token) {
          try {
            const { exp } = JSON.parse(atob(token.split('.')[1]));
        
            if (exp * 1000 < Date.now()) {
              // Token expired, remove from localStorage
              localStorage.removeItem('token');
            }
          } catch (error) {
            console.error('Error parsing token:', error);
          }
        }

        axios.get('https://tourapi-hazf.onrender.com/profile/'+_id)
        .then(response => {
          const data = response.data;
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          const BirthDate = new Date(data.birthdate);
          const PassportExpDate = new Date(data.passport_exp);
          const formattedBirthDate = BirthDate.toLocaleDateString('en-US', options);
          const formattedPassportExpDate = PassportExpDate.toLocaleDateString('en-US', options);
  
          setprofileDetail({
            p_id:data._id,
            p_email:data.email,
            p_title:data.title,
            p_firstname:data.fname.charAt(0).toUpperCase() + data.fname.slice(1),
            p_lastname: data.lname.charAt(0).toUpperCase() + data.lname.slice(1),
            p_phone: data.phone,
            p_nation: data.nationality,
            p_birth: formattedBirthDate,
            p_passport: data.passport_no,
            p_passport_exp: formattedPassportExpDate,
            p_food_allergy: data.food_allergy,
            p_special: data.special_req
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

          const fetchOrder = async () => {
            try {
              const ordersResponse = await axios.get(`https://tourapi-hazf.onrender.com/getalluserorder/${_id}`);
              const ordersData = ordersResponse.data.map(order => {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          
                // Format tour_date
                const tourDate = new Date(order.tour_date);
                const formattedTourDate = tourDate.toLocaleDateString('en-US', options);
          
                // Format createdAt
                const createdAtDate = new Date(order.createdAt);
                const formattedCreatedAt = createdAtDate.toLocaleDateString('en-US', options);
          
                return {
                  ...order,
                  formattedTourDate,
                  formattedCreatedAt
                };
              });
          
              setOrders(ordersData);
              console.log(ordersData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          
          fetchOrder();
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

      
  

  return (<section style={{ backgroundColor: '#eee' }}>
  <MDBContainer className="py-5">
    <MDBRow>
  
      <MDBCol lg="4">
        <MDBCard className="mb-4">
          <MDBCardBody className="text-center">
            {/* <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle"
              style={{ width: '150px' }}
              fluid />
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <MDBBtn>Follow</MDBBtn>
              <MDBBtn outline className="ms-1">Message</MDBBtn>
            </div> */}
               <div style={{ width: '100%',textAlign:'center',marginTop:'80px'}}>
             
                           <MDBTypography tag="h1">{profileDetail.p_title} {profileDetail.p_firstname} {profileDetail.p_lastname}</MDBTypography>
                            <MDBCardText>{profileDetail.p_nation}</MDBCardText> 
                           <Button href='Editpro'>Edit profile</Button>
                            
                          </div>
          </MDBCardBody>
        </MDBCard>

        
     

      </MDBCol>
      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Email :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_email}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Phone :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted"> {profileDetail.p_phone}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Birthdate :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_birth}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>National : </MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_nation}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Passport Number :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_passport}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Passport Expire :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_passport_exp}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Food Allergy :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_food_allergy}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText className='prodetail'>Requirement :</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profileDetail.p_special}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
          </MDBCardBody>
        </MDBCard>

     
                
        
          {/* <MDBCol md="6">
            <MDBCard className="mb-4 mb-md-0">
            
              <MDBCardBody>
                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                </MDBProgress>

                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                </MDBProgress>

                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                </MDBProgress>

                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                </MDBProgress>

                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                </MDBProgress>
              </MDBCardBody>
               
            </MDBCard>
          </MDBCol> */}

<MDBCol >
        {/* <MDBCard className="mb-4"> */}
          <>
                       {Array.isArray(orders) && orders.length > 0 ? (
                         orders.map((order) => (
                        
          <MDBCardBody>
                      <div key={order._id} className="p-4" style={{ backgroundColor: 'lightgray',marginBottom:'20px'}}>
                              <MDBCardText className="font-italic mb-1 prodetail1">Order id: </MDBCardText><MDBCardText className="font-italic mb-1 prodetail2">{order._id}</MDBCardText>
                              <MDBCardText className="font-italic mb-1 prodetail1">Order date: </MDBCardText> <MDBCardText className="font-italic mb-1 prodetail2">{order.formattedCreatedAt}</MDBCardText>
                              <MDBCardText className="font-italic mb-1 prodetail1">Tour name: </MDBCardText> <MDBCardText className="font-italic mb-1 prodetail2">{order.tour_name}</MDBCardText>
                             <MDBCardText className="font-italic mb-1 prodetail1">Tour date: </MDBCardText>  <MDBCardText className="font-italic mb-1 prodetail2"> {order.formattedTourDate}</MDBCardText>
                              <MDBCardText className="font-italic mb-1 prodetail1">Tour price:</MDBCardText>  <MDBCardText className="font-italic mb-1 prodetail2">{order.tour_price}</MDBCardText>
                              <MDBCardText className="font-italic mb-1 prodetail1">Person:</MDBCardText>  <MDBCardText className="font-italic mb-1 prodetail2"> {order.quantity}</MDBCardText>
                             <MDBCardText className="font-italic mb-1 prodetail1">Total price: </MDBCardText><MDBCardText className="font-italic mb-1 prodetail2"> {order.total_price}</MDBCardText>
                              
                           </div>

          </MDBCardBody>
            ))
            ) : (
              <MDBCardText className="font-italic mb-0">{orders.message}</MDBCardText>
            )}
            </>
            
              
             
          </MDBCol>

      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>

    // <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff', height:"100%" }}>

    //    <MDBContainer className="py-5 h-100">
    //     <MDBRow className="justify-content-center align-items-center h-100">
    //     <MDBCol lg="3" > <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '300px' ,float:'left'}}>
    //             <div style={{ width: '100%',textAlign:'center',marginTop:'80px'}}>
             
    //               <MDBTypography tag="h1">{profileDetail.p_title} {profileDetail.p_firstname} {profileDetail.p_lastname}</MDBTypography>
    //               <MDBCardText>{profileDetail.p_nation}</MDBCardText> 
    //               <Button href='Editpro'>Edit profile</Button>
                   
    //             </div>
                
    //           </div> </MDBCol>
    //           <MDBCol >
    //         <MDBCard>
            
    //           <MDBCardBody className="text-black p-4">
    //           <div className="mb-5">
    //               <p className="lead fw-normal mb-1">Details</p>
    //                <div className="p-4" style={{ backgroundColor: '#f8f9fa'}}>
                   
                    
                   
    //                <Row>
    //                   <Col style={{textAlign:'left'}}>
    //                   <MDBCardText className="font-italic mb-1 prodetail">Email :</MDBCardText><MDBCardText className="font-italic mb-1"> {profileDetail.p_email}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-1 prodetail">Phone : </MDBCardText> <MDBCardText className="font-italic mb-1"> {profileDetail.p_phone}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-1 prodetail">Birthdate : </MDBCardText> <MDBCardText className="font-italic mb-1"> {profileDetail.p_birth}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-1 prodetail">National : </MDBCardText>                    <MDBCardText className="font-italic mb-1">{profileDetail.p_nation}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-1 prodetail">Passport Number :</MDBCardText>  <MDBCardText className="font-italic mb-1"> {profileDetail.p_passport}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-1 prodetail">Passport Expire :</MDBCardText><MDBCardText className="font-italic mb-1">{profileDetail.p_passport_exp}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-0 prodetail">Food Allergy : </MDBCardText><MDBCardText className="font-italic mb-0"> {profileDetail.p_food_allergy}</MDBCardText>
    //                 <MDBCardText className="font-italic mb-0 prodetail" >Special Requirement :</MDBCardText><MDBCardText className="font-italic mb-0">{profileDetail.p_special}</MDBCardText>
    //                 </Col>

    //                 </Row>
                  
    //                 </div>
    //             </div>

    //             <div className="mb-5">
    //               <p className="lead fw-normal mb-1">Order history</p>
    //               <div className="p-4" style={{ backgroundColor: '#f8f9fa', overflow: 'auto', maxHeight: '300px' }}>
    //                 <>
    //                   {Array.isArray(orders) && orders.length > 0 ? (
    //                     orders.map((order) => (

    //                         <div key={order._id} className="p-4" style={{ backgroundColor: 'lightgray',marginBottom:'20px',textAlign:'left'}}>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Order id: </MDBCardText><MDBCardText className="font-italic mb-1 ">{order._id}</MDBCardText>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Order date: </MDBCardText> <MDBCardText className="font-italic mb-1 ">{order.formattedCreatedAt}</MDBCardText>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Tour name: </MDBCardText> <MDBCardText className="font-italic mb-1 ">{order.tour_name}</MDBCardText>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Tour date: </MDBCardText>  <MDBCardText className="font-italic mb-1 "> {order.formattedTourDate}</MDBCardText>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Tour price:</MDBCardText>  <MDBCardText className="font-italic mb-1 ">{order.tour_price}</MDBCardText>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Person:</MDBCardText>  <MDBCardText className="font-italic mb-1 "> {order.quantity}</MDBCardText>
    //                           <MDBCardText className="font-italic mb-1 prodetail">Total price: </MDBCardText><MDBCardText className="font-italic mb-1 "> {order.total_price}</MDBCardText>
                              
    //                         </div>

    //                     ))
    //                   ) : (
    //                     <MDBCardText className="font-italic mb-0">{orders.message}</MDBCardText>
    //                   )}
    //                   </>
        
    //     </div>
    //             </div>

    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    // </div>
  );
}