import React, { useState } from "react";

import Card from 'react-bootstrap/Card';
import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Room } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

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
    <Card style={{ width: '25%', margin:"1rem" }}>
    <div style={{margin:"0.5rem"}}>
      <PhotoSlider images={Object.values(roomData.room_images)} />
    </div>
    <Card.Body>
      <Card.Title>{roomData.room_type}</Card.Title>
      <Card.Text>
      {roomData.room_price}
      </Card.Text>
      <Card.Text>
      {roomData.room_desc}
      </Card.Text>
      <Card.Text>
      {roomData.room_max_occ}
      </Card.Text>
      <Card.Text>
      {roomData.room_amenties}
      </Card.Text>
      {check() ? <div 
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    textAlign: "center"
                    }}
                >
                  Available
                </div> : <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    textAlign: "center"
                    }}
                >
                  Not Available
                </div>}

      <p id="booknow"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "0.5rem",
          }}
      >
        <Link
          to="/booking"
          state={{ no:1, checkin, checkout, roomType, roomPrice }}
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
    </Card.Body>
    </Card>
  );
};

export default Roomcards;