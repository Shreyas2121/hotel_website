import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Room } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { border, padding } from "@mui/system";

interface Status {
  Basic: number;
  Suite: number;
  Deluxe: number;
}
interface Props {
  roomData: Room;
  checkin: Date;
  checkout: Date;
  status: Status;
}

const Roomcards = ({ roomData, checkin, checkout, status }: Props) => {
  const [no, setNo] = useState(0);
  const roomType = roomData.room_type;
  const roomPrice = Number(roomData.room_price);

  const check = () => {
    console.log(status);
    let keys = Object.keys(status);
    if (keys.includes(roomType)) {
      if (status[roomType] > 0) {
        return true;
      } else {
        return false;
      }
    }
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
        <MDBCol size="md">
          <PhotoSlider images={Object.values(roomData.room_images)} />
        </MDBCol>
        <MDBCol md="6">
          <h3>{roomData.room_type}</h3>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Max Occupancy:
            </span>{" "}
            {roomData.room_max_occ}
          </p>
          <div style={{ display: "flex" }}>
            <span>Amenities: </span>
            {roomData?.room_amenties.map((room) => (
              <p style={{ marginRight: "5px" }}> {room}</p>
            ))}
          </div>
          <p>{roomData.room_desc}</p>
        </MDBCol>
        <MDBCol
          size="md"
          style={{
            alignSelf: "center",
          }}
        >
          {check() ? (
            <div
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Available
              <p
                id="booknow"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "0.5rem",
                }}
              >
                <Link
                  to="/booking"
                  state={{
                    no: 1,
                    checkin,
                    checkout,
                    roomType,
                    roomPrice,
                    key: "Room",
                  }}
                  style={{
                    fontSize: "1.5rem",
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "green",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  Book Now
                </Link>
              </p>
            </div>
          ) : (
            <div
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Sold Out
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Roomcards;
