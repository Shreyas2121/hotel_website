import React, {useState} from "react";
import "./roomcards.css";
import { Carousel } from "react-bootstrap";
import "./slider.css"
import { UseFetch } from "../../customHook/UseFetch";
// import { Review } from "../types/types";

import {Review} from "../../types/types";
import {Link, useNavigate} from "react-router-dom";

const Reviewcards = () => {
    const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/reviews"
    );
    
    interface Res {
        data: {
        Reviews: Review[];
        };
        loading: boolean;
    }

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
                    <p className="rating">Rating: {review.rating}</p>
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