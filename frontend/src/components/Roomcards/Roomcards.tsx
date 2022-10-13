import React, { useState } from "react";
import "./roomcards.css";

import { Room } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  roomData: Room;
  checkin: Date;
  checkout: Date;
}

const Roomcards = ({ roomData, checkin, checkout }: Props) => {
  const [no, setNo] = useState(0);
  const roomType = roomData.room_type;

  return (
    <div className="tm-rooms">
      <img src={roomData.room_images.living_room} />
      <div className="tm-rooms__details">
        <p className="roomtype">Type: {roomData.room_type}</p>
        <p className="roomprice">Price: {roomData.room_price}</p>
        <p>Max Occupancy: {roomData.room_max_occ}</p>
        <p className="roomdesc">Description: {roomData.room_desc}</p>
        <p className="roomamenities">Amenities: {roomData.room_amenties}</p>
      </div>
      <p id="status">STATUS : Availabel/Not Available</p>

      <div>
        <button onClick={(e) => setNo((prev) => prev - 1)}>-</button>
        <span>{no}</span>
        <button onClick={(e) => setNo((prev) => prev + 1)}>+</button>
      </div>

      <Link to="/booking" state={{ no, checkin, checkout, roomType }}>
        Book Now
      </Link>
    </div>
  );
};

export default Roomcards;
