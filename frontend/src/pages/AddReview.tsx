import axios from "axios";
import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const AddReview = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ratingRef = useRef<HTMLInputElement>(null);
    const reviewRef = useRef<HTMLTextAreaElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const rating = ratingRef.current?.value;
        const review = reviewRef.current?.value;
    
     
        const data = {
            name,
            email,
            rating,
            review,
        };
    
        const res = await axios.post(`http://127.0.0.1:5000/reviews`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.data == "Review Added") {
          alert(res.data);
        } else {
          alert(res.data);
        }
      };
    

  return (
    <div>
        <div>Add A Review</div>
        <Container>
        <br />
        <Form>
            <div className="elem-group">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            name="visitor_name"
            placeholder="Type your name Here "
            pattern="[A-Z\sa-z]{3,20}"
          />
        </div>
        <div className="elem-group">
          <label htmlFor="email">Your E-mail</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="visitor_email"
            placeholder="john.doe@email.com"
            pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          />
        </div>
        <div className="elem-group">
            <label htmlFor="rating">Rating</label>
            <input
            ref={ratingRef}
            type="number"
            id="rating"
            name="visitor_rating"
            placeholder="Type your rating here"
            min="1"
            max="5"
            />
        </div>
        <div className="elem-group">
            <label htmlFor="review">Review</label>
            <textarea
            ref={reviewRef}
            id="review"
            name="visitor_review"
            placeholder="Type your review here"
            rows={5}
            cols={50}
            defaultValue={""}
            />
        </div>
        <button  type="button" onClick={handleSubmit}>
          Submit Review
        </button>
        </Form>
        </Container>
    </div>
  );
};

export default AddReview