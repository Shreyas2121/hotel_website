import React, {useState} from "react";
import "./roomcards.css";
import { Carousel } from "react-bootstrap";
import "./slider.css"
import { UseFetch } from "../../customHook/UseFetch";
import {Review} from "../../types/types";
import { Rating } from '@mui/material';


interface Res {
    data: {
      Reviews: Review[];
    };
    loading: boolean;
  }

const Reviewcards = () => {
    const { data, loading }: Res = UseFetch("http://127.0.0.1:5000/reviews");


    return (
        <Carousel>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                data?.Reviews?.map((review) => (

        <Carousel.Item>
            
            <div className="tm-review">
            <div className="tm-reviews_details">
            <div className="Reviewer-details">
            <p className="reviewer-name">Name: {review.name} </p>
            <p className="reviewer-email">Email: {review.email}</p> 
            </div>  
           
            <div className="Review-rating-card">
           
            <p className="rating">Rating: <Rating name="read-only" value={review.rating} readOnly /> </p>
            <p className="The-review">Review: {review.reviews}</p>
            </div>
            </div>
            </div>
        </Carousel.Item>
        ))
            )}
       </Carousel>
    );
};

export default Reviewcards;