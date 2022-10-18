import React, {useState} from "react";
import "./roomcards.css";
import { Carousel } from "react-bootstrap";
import "./slider.css"
import { UseFetch } from "../../customHook/UseFetch";
import {Review} from "../../types/types";
import { Rating } from '@mui/material';
import image1 from "../../assets/images/HotelReview.png";

import Person from "../../assets/images/person.png";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


interface Res {
    data: {
      Reviews: Review[];
    };
    loading: boolean;
  }

const Reviewcards = () => {
    const { data, loading }: Res = UseFetch("http://127.0.0.1:5000/reviews");


    return (
      <div style={{width:"40%", padding:"1rem", margin:"1rem", }}>
        <Carousel>
            {loading ? (
              <h1>Loading...</h1>
          ) : (
              data?.Reviews?.map((review) => (
            
            <Carousel.Item interval={5000}>
                <MDBContainer className="shadow-4-strong" style={{
                margin:"1rem auto",
                padding:"1rem",
                }}>
                  
                  <MDBRow>
                <MDBCol md="3">
                  <img src={Person} style={{ height:"100px", width:"100px"}}/> 
                </MDBCol>
                <MDBCol md="6">
                  <h3></h3>
                  <p>{review.reviews}</p>
                  <h6>{review.name}</h6>
                  <p className="rating" style={{display:"flex"}}>Rating  :<Rating name="read-only" value={review.rating} readOnly /> </p>
                </MDBCol> 
              </MDBRow>

            </MDBContainer>
            </Carousel.Item>
          ))
          )}
          
          </Carousel>
      </div>
    );
};

export default Reviewcards;