import React, {useState} from "react";
import "./roomcards.css";

import {Review} from "../../types/types";
import {Link, useNavigate} from "react-router-dom";

interface Props {
    reviewData: Review;
}

const Reviewcards = ({reviewData}: Props) => {
    const reviewRating = reviewData.rating;
    const reviewerName = reviewData.name;
    const reviewDesc = reviewData.reviews;
    const reviewDate = reviewData.email;

    return (
        <div className="tm-review">
            <div className="tm-reviews_details">
            <div className="Reviewer-details">
            <p className="reviewer-name">Name: {reviewData.name} </p>
            <p className="reviewer-email">Email: {reviewData.email}</p>
                
            </div>  
           
            <div className="Review-rating-card">
            <p className="rating">Rating: {reviewData.rating}</p>
            <p className="The-review">Review: {reviewData.reviews}</p>
            </div>
            </div>
        </div>
    );
};

export default Reviewcards;