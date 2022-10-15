import React, { LinkHTMLAttributes, useState } from "react";

import Card from 'react-bootstrap/Card';
import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Hall } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  hallData: Hall;
  checkIn: string;
  bookedHalls: Array<string>;
}

const Hallcards = ({ hallData, checkIn, bookedHalls }: Props) => {
  const hallType = hallData.hall_type;
  const hallPrice = Number(hallData.hall_price);

  const linkRef = React.useRef<any>(null);

  const check = (type: string) => {
    const status = bookedHalls.includes(type) ? true : false;
    // linkRef.current!.innerText = status ? "Booked" : "Available";
    return status;
  };

  return (

    <Card style={{ width: '25%', margin:"1rem" }}>
    <div style={{margin:"0.5rem"}}>
      <PhotoSlider images={hallData.hall_image} />
      </div>
    <Card.Body>
      <Card.Title>{hallData.hall_type}</Card.Title>
      <Card.Text>
      {hallData.hall_price}
      </Card.Text>
      <Card.Text>
      {hallData.hall_desc}
      </Card.Text>
      <Card.Text>
      {hallData.hall_max_occ}
      </Card.Text>
      <Card.Text>
      {hallData.hall_desc}
      </Card.Text>
      <Card.Text>
      {hallData.hall_amenties}
      </Card.Text>
      <div>
        <p id="booknow"
          style={{
            fontWeight: "bold",
            cursor: "pointer",
            textAlign: "center",
            fontSize: "1.5rem",
            margin: "0.5rem",
          }}
        >
          {check(hallType) ? (
            <p 
            style={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "grey",
              borderRadius: "0.5rem",
              }}>
              Sold Out
            </p>
          ) : (
            <Link
              ref={linkRef}
              to="/booking"
              state={{ checkin: checkIn, hallType, hallPrice }}
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "green",
                padding: "0.5rem",
              }}
            >
              Book Now
            </Link>
          )}
        </p>
      </div>
    </Card.Body>
    </Card>
  );
};

export default Hallcards;