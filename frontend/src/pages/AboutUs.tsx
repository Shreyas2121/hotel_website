import React from "react";
import Reviewcards from "../components/Roomcards/Reviewcards";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";



const Aboutus = () => {

  const navigate = useNavigate();

const NavigateToAddReview = () => {
   navigate("/addreview/");
};

  return (
    <div style={{ minHeight: "100vh", margin: "2%" }}>
      <div id="reviews" className="reviews">
        <p>
          <h1>Top Reviews</h1>
        </p>
        <Button  onClick={NavigateToAddReview}>
          Add Review
        </Button>
        
        <Reviewcards />
      </div>
    </div>
    
  );
};

export default Aboutus;
