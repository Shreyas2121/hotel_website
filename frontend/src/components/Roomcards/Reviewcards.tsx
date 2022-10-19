import React, {useEffect, useState} from "react";
import "./roomcards.css";
import { Card, Carousel } from "react-bootstrap";
import "./slider.css"
import { UseFetch } from "../../customHook/UseFetch";
import {Review} from "../../types/types";
import { Rating } from '@mui/material';
import image1 from "../../assets/images/HotelReview.png";
import axios from "axios";

import Person from "../../assets/images/person.png";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


interface Res {
    data: {
      Reviews: Review[];
    };
    loading: boolean;
  }

const Reviewcards = ({featured}) => {
  console.log(featured);
   const { data, loading }: Res = UseFetch(`http://127.0.0.1:5000/reviews/${featured}`);
    return (
      <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
    

        <Carousel>
                {loading ? (
              <h1>Loading...</h1> 
              
          ) : (

              data?.Reviews?.map((review) => (
                
                <Carousel.Item >
                <div className="carousel-inner py-4">
                <div className="carousel-item active" style={{

                }}>
                  
                  <div className="container" style={{
                    height:"25rem",
                    }}>
                     
                    <div className="row">
                    
                      <div className="col-lg-14 shadow-4-strong" id="review-cards">
                        <img className="rounded-circle shadow-1-strong mb-4"
                          src={Person} alt="avatar"
                          style={{width: "10%"}} />
                        <h5 className="Review-name">{review.name}</h5>
                        <p><Rating name="read-only" value={review.rating} readOnly /> </p>
                        <p className="review-text">
                          <i className="fas fa50%-quote-left pe-2"></i>
                         {review.reviews}
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                        </ul>
                        <Card/>
                      </div>
                     
{/* 
                      <div className="col-lg-4">
                        <img className="rounded-circle shadow-1-strong mb-4"
                          src={Person} alt="avatar"
                          style={{width: "20%"}} />
                        <h5 className="mb-3">{review.name}</h5>
                        <p><Rating name="read-only" value={review.rating} readOnly /> </p>
                        <p className="text-muted">
                          <i className="fas fa50%-quote-left pe-2"></i>
                         {review.reviews}
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                        </ul>
                      </div>

                      <div className="col-lg-4">
                        <img className="rounded-circle shadow-1-strong mb-4"
                          src={Person} alt="avatar"
                          style={{width: "20%"}} />
                        <h5 className="mb-3">{review.name}</h5>
                        <p><Rating name="read-only" value={review.rating} readOnly /> </p>
                        <p className="text-muted">
                          <i className="fas fa50%-quote-left pe-2"></i>
                         {review.reviews}
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                          <li><i className="fas fa-star fa-sm"></i></li>
                        </ul>
                      </div> */}

                    </div>
                  </div>
                </div>
                </div>
                </Carousel.Item>
    )))}     </Carousel>
   

  </div>











      // <div style={{width:"40%", padding:"1rem", margin:"1rem", }}>
      //   <Carousel>
          //   {loading ? (
          //     <h1>Loading...</h1>
          // ) : (
          //     data?.Reviews?.map((review) => (
              
          //   <Carousel.Item interval={5000}>
          //       <MDBContainer classNameName="shadow-4-strong" style={{
          //       margin:"1rem auto",
          //       padding:"1rem",
          //       }}>
               
          //         <MDBRow>
          //       <MDBCol md="3">
          //         <img src={Person} style={{ height:"100px", width:"100px"}}/> 
          //       </MDBCol>
          //       <MDBCol md="6">
          //           <h3></h3>
          //           <p>{review.reviews}</p>
          //           <h6>{review.name}</h6>
                    // <p classNameName="rating" style={{display:"flex"}}>Rating  :<Rating name="read-only" value={review.rating} readOnly /> </p>
                  
          //       </MDBCol> 
          //     </MDBRow>

          //   </MDBContainer>
          //   </Carousel.Item>
  
          // ))
          // )}
          
      //     </Carousel>
      // </div>
    );
};

export default Reviewcards;