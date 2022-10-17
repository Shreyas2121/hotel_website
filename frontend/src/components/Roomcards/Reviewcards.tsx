import React, {useState} from "react";
import "./roomcards.css";
import { Carousel } from "react-bootstrap";
import "./slider.css"
import { UseFetch } from "../../customHook/UseFetch";
import {Review} from "../../types/types";
import { Rating } from '@mui/material';
import image1 from "../../assets/images/HotelReview.png";


interface Res {
    data: {
      Reviews: Review[];
    };
    loading: boolean;
  }

const Reviewcards = () => {
    const { data, loading }: Res = UseFetch("http://127.0.0.1:5000/reviews");


    return (
      <div style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}>
        <Carousel >
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                data?.Reviews?.map((review) => (
                    
                  <Carousel.Item interval={5000}>
                    <div className="Review-rating-card">
                    <p className="rating">Rating: <Rating name="read-only" value={review.rating} readOnly /> </p>
                    <p className="reviewer-email">Email: {review.email}</p>
                    <p className="reviewer-name">Name: {review.name} </p>
                    <p className="The-review">Review: {review.reviews}</p>
                    </div>
                  </Carousel.Item>
                  
    
        ))
            )}
       </Carousel>
      </div>
    );
};

export default Reviewcards;