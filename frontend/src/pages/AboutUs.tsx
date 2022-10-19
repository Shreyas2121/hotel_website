import React from "react";
import Reviewcards from "../components/Roomcards/Reviewcards";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import React from "react";
import { Card, Button } from "react-bootstrap";
import hotelPicture from "../assets/images/abouts_us.png";
import roomsBackground from "../assets/images/about_banner.jpg";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

import "../components/parallaxImage.css";





const Aboutus = () => {
  return (
  <div>
    <header>
    <div
      className='p-5 text-center bg-image parallax'
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
    <br />

    <div className="container" style={{ height:"40rem", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
      <div className="row">
        <div className="col">
        <div>
            <h1>Our History</h1><br/>
              <p>Our properties and services have set industry level benchmark for us as well as our competitors.
                Making us Asias top hotel chains to serve world class Luxury that is truly uncompromised. A brand that works on principles and values.
                Perfectly situated in the heart of Jaipur's most renowned shopping district.
                The decor is a blend of traditional and contemporary, with a touch of modernity.
                Makes the hotel a perfect blend of luxury and comfort. The hotel is inspired by the rich heritage of the city.
                We are proud to be the best in the industry and we are working consistently to be the best in the industry for as long as the legacy stays.
              </p>
              </div>
        </div>
        <div className="col">
          <img src={hotelPicture} alt="useMango Photo" />
          </div>

      </div>

    </div>
    <Reviewcards/>
    </header>
    </div>
  );
};

export default Aboutus;
