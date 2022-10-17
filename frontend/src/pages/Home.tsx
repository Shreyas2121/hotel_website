import React from "react";
import PhotoGrid from "../components/Grid/PhotoGrid";
import Service from "../components/services/Service";
import Slider from "../components/Slider/Slider";
import Reviewcards from "../components/Roomcards/Reviewcards";
import { MDBContainer } from 'mdb-react-ui-kit';
import bannerImage from "../assets/images/banner_bg.jpg";

const Home = () => {
  
  return (
    // <MDBContainer fluid>
    //   <Slider />
    //   <br />
    //   <PhotoGrid />
    //   <Service />
    //   <br />
    //   <Reviewcards />
    // </MDBContainer>
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${bannerImage})`, height: "45rem" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Relax Your Mind</h1>
              <h4 className='mb-3'>AWAY FROM MONOTONOUS LIFE</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>

      <PhotoGrid />
      <Service />
      <br />
      <Reviewcards />

    </header>
  );
};

export default Home;
