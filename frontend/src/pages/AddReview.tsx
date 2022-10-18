import { Rating } from "@mui/material";
import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Reviews.css";
import image1 from "../assets/images/HotelReview.png";


const AddReview = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [rating, setRating] = useState<number>(0);
  const reviewRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const review = reviewRef.current?.value;


    const data = {
      name,
      email,
      rating,
      reviews: review,
    };

    const res = await axios.post("http://127.0.0.1:5000/reviews/", data, {
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
  
    <Container className="d-flex align-items-center justify-content-center" >
      <div className="review-form"  >
        
        <Form onSubmit={handleSubmit}>
          <Form.Group id="name">
            <Form.Label>Name : </Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <br/>
          <Form.Group id="email">
            <Form.Label>Email : </Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <br/>
          <Form.Group id="rating" style={{
            display: "flex",
          }}>
            <Form.Label>Rating :   </Form.Label>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Form.Group>
          <br/>
          <Form.Group id="review">
            <Form.Label>Review : </Form.Label>
              
            <Form.Control as="textarea" rows={3} ref={reviewRef} required />
          </Form.Group>
          <br/>
          <Button className="w-100" type="submit" ref={buttonRef}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddReview;
