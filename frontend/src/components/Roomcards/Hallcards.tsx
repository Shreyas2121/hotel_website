import React, { useState } from "react";
import "./roomcards.css";

import { Hall } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  hallData: Hall;
}

const Roomcards = ({ hallData }: Props) => {
  const [no, setNo] = useState(0);

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

      <div>
        <button onClick={(e) => setNo((prev) => prev - 1)}>-</button>
        <span>{no}</span>
        <button onClick={(e) => setNo((prev) => prev + 1)}>+</button>
      </div>

      <Link to="/booking" state={no}>
        Book Now
      </Link>
    </div>
  );
};

export default Roomcards;
