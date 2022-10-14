import React, { LinkHTMLAttributes, useState } from "react";
import "./roomcards.css";

import { Hall } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="tm-rooms">
      <img src={hallData.hall_images} />
      <div className="tm-rooms__details">
        <p className="roomtype">Type: {hallData.hall_type}</p>
        <p className="roomprice">Price: {hallData.hall_price}</p>
        <p>Max Occupancy: {hallData.hall_max_occ}</p>
        <p className="roomdesc">Description: {hallData.hall_desc}</p>
        <p className="roomamenities">Amenities: {hallData.hall_amenties}</p>
      </div>
      <p id="status">
        STATUS : {check(hallType) ? "Not Available" : "Available"}{" "}
      </p>

      <p id="booknow">
        {check(hallType) ? (
          <p>Sold Out</p>
        ) : (
          <Link
            ref={linkRef}
            to="/booking"
            state={{ checkin, hallType, hallPrice }}
          >
            Book Now
          </Link>
        )}
      </p>
    </div>
  );
};

export default Hallcards;
