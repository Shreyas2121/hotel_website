import React from "react";
import "./roomcards.css";

import { Room } from "../../types/types";

interface Props {
  roomData: Room;
}

const Roomcards = ({ roomData }: Props) => {
  return (
      <div className="tm-rooms">
        <img src={roomData.room_images.living_room} />
        <div className="tm-rooms__details">
          <p className="roomtype">Type: {roomData.room_type}</p>
          <p className="roomprice">Price: {roomData.room_price}</p>
          <p className="roomdesc">Description: {roomData.room_desc}</p>
          <p className="roomamenities">Amenities: {roomData.room_amenties}</p>
        </div>
        <p id="status">STATUS : Availabel/Not Available</p>
        <button id="booknow">Book Now</button>
      </div>
  );
};

export default Roomcards;
