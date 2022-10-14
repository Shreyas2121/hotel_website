import React, { useState } from "react";
import "./roomcards.css";

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
    <div className="tm-rooms">
      <img src={roomData.room_images.living_room} />
      <div className="tm-rooms__details">
        <p className="roomtype">Type: {roomData.room_type}</p>
        <p className="roomprice">Price: {roomData.room_price}</p>
        <p>Max Occupancy: {roomData.room_max_occ}</p>
        <p className="roomdesc">Description: {roomData.room_desc}</p>
        <p className="roomamenities">Amenities: {roomData.room_amenties}</p>
      </div>
      {check() ? <div>Available</div> : <div>Not Available</div>}

      <div id="no_of_rooms">
        <button
          className="no_of_rooms_btn"
          onClick={(e) => setNo((prev) => prev - 1)}
        >
          -
        </button>
        <span>{no}</span>
        <button
          className="no_of_rooms_btn"
          onClick={(e) => setNo((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <p id="booknow">
        <Link
          to="/booking"
          state={{ no, checkin, checkout, roomType, roomPrice }}
        >
          Book Now
        </Link>
      </p>
    </div>
  );
};

export default Roomcards;
