import React, { useState } from "react";
import "./roomcards.css";

import { Hall } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  hallData: Hall;
  checkin: Date;
}

const Roomcards = ({ hallData, checkin }: Props) => {
  const hallType = hallData.hall_type;
  const hallPrice = Number(hallData.hall_price);

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
      <p id="status">STATUS : Availabel/Not Available</p>

      <p id="booknow">
      <Link to="/booking" state={{ checkin, hallType, hallPrice}}>
        Book Now
      </Link>
      </p>
    </div>
  );
};

export default Roomcards;
