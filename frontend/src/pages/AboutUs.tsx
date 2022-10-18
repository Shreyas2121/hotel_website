import React from "react";
import Reviewcards from "../components/Roomcards/Reviewcards";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import React from "react";
import { Card, Button } from "react-bootstrap";
import roomsBackground from "../assets/images/about_banner.jpg";




const Aboutus = () => {

  const navigate = useNavigate();

const NavigateToAddReview = () => {
   navigate("/addreview/");
};

  return (
  <div>
    <header>
    <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: `url(${roomsBackground})`, height: "20rem" }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>ABOUT US</h1>
            <br />
            <br />
            <br />
            

        
          </div>
        </div>
      </div>
    </div>
    <p>
       <h1>Top Reviews</h1>
    </p>
    <Reviewcards />
    <br/>
    <br/>
    
          <Button onClick={NavigateToAddReview}>
            Add Review
          </Button>
        <br/>
        <br/>

      
    </header>
    </div>
  );
};

export default Aboutus;
