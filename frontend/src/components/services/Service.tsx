import React from "react";
import "./service.css";

import {MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

import servicesBackground from "../../assets/images/facilites_bg.jpg";

import image1 from "../../assets/images/bell.png";
import image2 from "../../assets/images/coffee.png";
import image3 from "../../assets/images/car-front.png";
import image4 from "../../assets/images/spa.png";
import image5 from "../../assets/images/car-front.png";
import image6 from "../../assets/images/spa.png";

const Service = () => {
  return (
    <MDBContainer fluid style={{
      height: "50rem",
      backgroundImage: `url(${servicesBackground})`,
    }}>
      <br/>
      <br/>
      <br/>
      <div style={{
        textAlign: "center",
        padding: "40px",
      }}>
        <MDBTypography tag='h1' className='mb-0' style={{color:"white", fontWeight:"bold"}}>
          Royal Facilities
        </MDBTypography>
        <MDBTypography tag='small' className='text-muted'>
          Who are in extremely love with eco friendly system
        </MDBTypography>
      </div>
      <br/>
      <br/>

      <MDBRow style={{
        display: "flex",
        justifyContent: "space-evenly",
        
      }}
      className='mb-3'>
        <MDBCol md='3'>
        <MDBCard>
          <MDBCardBody>
            <img className="tm-serimage" src={image1} />
            <MDBCardTitle>Swimming Pool</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol md='3'>
        <MDBCard>
          <MDBCardBody>
            <img className="tm-serimage" src={image2} />
            <MDBCardTitle>Gymnesium</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>        
        </MDBCol>

        <MDBCol md='3'>
        <MDBCard>
          <MDBCardBody>
            <img className="tm-serimage" src={image3} />
            <MDBCardTitle>Bar</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
      <br/>

      <MDBRow style={{
        display: "flex",
        justifyContent: "space-evenly",
        
      }}
      className='mb-3'>
        <MDBCol md='3'>
        <MDBCard>
          <MDBCardBody>
            <img className="tm-serimage" src={image4} />
            <MDBCardTitle>Restaurant</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md='3'>
        <MDBCard>
          <MDBCardBody>
            <img className="tm-serimage" src={image5} />
            <MDBCardTitle>Sports CLub</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>        </MDBCol>
        <MDBCol md='3'>
        <MDBCard>
          <MDBCardBody>
            <img className="tm-serimage" src={image6} />
            <MDBCardTitle>Spa</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    // <>
    //   <section className="tm-servicesection">
    //     <div className="tm-service">
    //       <img className="tm-serimage" src={image1} />
    //       <div>
    //         <p className="b">Room Service</p>
    //         <p> Enjoy your stay with excellent and timely room service </p>{" "}
    //       </div>
    //     </div>
    //     <div className="tm-service">
    //       <img className="tm-serimage" src={image2} />
    //       <div>
    //         <p className="b">Free Breakfast</p>
    //         <p> Enjoy Free breakfast every morning</p>{" "}
    //       </div>
    //     </div>
    //   </section>
    //   <section className="tm-servicesection">
    //     <div className="tm-service">
    //       <img className="tm-serimage" src={image3} />
    //       <div>
    //         <p className="b">Free Parking</p>
    //         <p> No need to pay any extra charges to park your vehicle </p>{" "}
    //       </div>
    //     </div>
    //     <div className="tm-service">
    //       <img className="tm-serimage" src={image4} />
    //       <div>
    //         <p className="b">Free Spa</p>
    //         <p> Relax at the inhouse Spa once every day of your stay </p>{" "}
    //       </div>
    //     </div>
    //   </section>
    // </>
    
  );
};

export default Service;
