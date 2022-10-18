import React from "react";
import "./grid.css";

import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

import image1 from "../../assets/images/luxury.png";
import image2 from "../../assets/images/delux.png";
import image3 from "../../assets/images/premier.png";
import image4 from "../../assets/images/luxury.png";
import image5 from "../../assets/images/deluxroom.png";
import image6 from "../../assets/images/premiumroom.png";

const PhotoGrid = () => {
  return (
    <MDBContainer style={{ width: "80%", margin: "auto", padding: "8%" }}>
      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <MDBTypography tag="h1" className="mb-0">
          Accomadation
        </MDBTypography>
        <MDBTypography tag="small" className="text-muted">
          We all live in an age that belongs to the young at heart. Life that is
          becoming extremely fast.
        </MDBTypography>
      </div>
      <MDBRow
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        className="mb-3"
      >
        <MDBCol size="3">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={image1} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Basic</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="3">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={image2} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Suite</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="3">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={image3} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Delux</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />

      <MDBRow
        className="mb-3"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <MDBCol size="3">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={image4} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Wedding Hall</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="3">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={image5} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Conference Hall</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="3">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={image6} fluid alt="..." />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Birthday Party</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PhotoGrid;
