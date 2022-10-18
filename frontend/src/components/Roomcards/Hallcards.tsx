import React, { LinkHTMLAttributes, useState } from "react";

import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Hall } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


interface Props {
  hallData: Hall;
  checkin: Date;
  bookedHalls: Array<string>;
}

const Hallcards = ({ hallData, checkin, bookedHalls }: Props) => {
  const hallType = hallData.hall_type;
  const hallPrice = Number(hallData.hall_price);

  const linkRef = React.useRef<any>(null);

  const check = (type: string) => {
    const status = bookedHalls.includes(type) ? true : false;
    // linkRef.current!.innerText = status ? "Booked" : "Available";
    return status;
  };

  return (
  <MDBContainer
      className="shadow-4-strong"
      style={{
        margin: "1rem auto",
        padding: "1rem",
      }}
    >
      <MDBRow>
        <MDBCol size="md" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}>
          <PhotoSlider images={Object.values(hallData.hall_image)} />
        </MDBCol>
        
        <MDBCol md="6">
          <h3>{hallData.hall_type}</h3>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Max Occupancy:
            </span>{" "}
            {hallData.hall_max_occ}
          </p>
          <p>{hallData.hall_desc}</p>
          <div style={{ display: "flex" }}>
            <span style={{
                fontWeight: "bold",
              }}>Amenities: </span>
            {hallData?.hall_amenties.map((room) => (
              <p style={{ marginRight: "5px", marginLeft:"5px" }}>✓ {room}</p>
            ))}
          </div>
          
        </MDBCol>

        <MDBCol
          size="md"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft:"8rem"
          }}
        >
          <div>
            <p style={{fontSize: "0.8rem", marginBottom:0}}>Per day for a hall</p>
            <p style={{fontSize: "1.5rem", fontWeight:"bold"}}>₹ {hallPrice}/-</p>
          </div>

          <p
            id="booknow">
            {check(hallType) ? (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "grey",
                  borderRadius: "0.5rem",
                }}
              >
                Sold Out
              </p>
            ) : (
              <Link
                ref={linkRef}
                to="/booking"
                state={{
                  no: 1,
                  checkin: checkin,
                  checkout: new Date(),
                  roomType: hallType,
                  roomPrice: hallPrice,
                  key: "Hall",
                }}
                style={{
                  fontSize: "1rem",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#1E90FF",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                Book Now
              </Link>
            )}
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Hallcards;
