import "./service.css";
import "../parallaxImage.css"

import {MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
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
    }}
    className="parallax"
    >
      <br/>
      <div className="container-top-div">
        <MDBTypography tag='h1' className='mb-0' style={{color:"black", fontWeight:"bold"}}>
          Royal Facilities
        </MDBTypography>
        <MDBTypography tag='small' className='text-muted'>
          Who are in extremely love with eco friendly system
        </MDBTypography>
      </div>


      <MDBRow className='mb-3'>
        <MDBCol md='3'>
        <MDBCard className="boxes">
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
        <MDBCard className="boxes">
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
        <MDBCard className="boxes">
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

      <MDBRow
      className='mb-3'>
        <MDBCol md='3'>
        <MDBCard className="boxes">
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
        <MDBCard className="boxes">
          <MDBCardBody>
            <img className="tm-serimage" src={image5} />
            <MDBCardTitle>Sports CLub</MDBCardTitle>
            <MDBCardText>
              Enjoy your stay with excellent and timely room service
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>        </MDBCol>
        <MDBCol md='3'>
        <MDBCard className="boxes">
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
    
  );
};

export default Service;