import React from 'react';
import { useEffect,useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Editpro from './Editpro';
import { Button } from 'react-bootstrap';
import axios from 'axios';

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
          const formattedBirthDate = BirthDate.toLocaleDateString('en-US', options);
  
          setprofileDetail({
            p_id:data._id,
            p_title:data.title,
            p_firstname:data.fname.charAt(0).toUpperCase() + data.fname.slice(1),
            p_lastname: data.lname.charAt(0).toUpperCase() + data.lname.slice(1),
            p_phone: data.phone,
            p_nation: data.nationality,
            p_birth: formattedBirthDate,
            p_passport: data.passport_no,
            p_passport_exp: data.passport_exp,
            p_food_allergy: data.food_allergy,
            p_special: data.special_req
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

      
  

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>

       <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '300px' }}>
                <div style={{ width: '100%',textAlign:'center',marginTop:'80px'}}>
             
                  <MDBTypography tag="h1">{profileDetail.p_title} {profileDetail.p_firstname} {profileDetail.p_lastname}</MDBTypography>
                  <MDBCardText>{profileDetail.p_nation}</MDBCardText> 
                  <Button href='Editpro'>Edit profile</Button>
                   
                </div>
                
              </div>
              <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                  <p className="lead fw-normal mb-1">Details</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Phone : {profileDetail.p_phone}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">National : {profileDetail.p_nation}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Passport Number : {profileDetail.p_passport}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Passport Expire : {profileDetail.p_passport_exp}</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Food Allergy : {profileDetail.p_food_allergy}</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Special Requirement : {profileDetail.p_special}</MDBCardText>
                  </div>
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}