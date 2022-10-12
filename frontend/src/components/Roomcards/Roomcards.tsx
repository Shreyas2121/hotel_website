import React from "react";
import "./roomcards.css";

// import image1 from "../../assets/images/luxury.png";
// import image2 from "../../assets/images/delux.png";
// import image3 from "../../assets/images/premier.png";
import { Room } from "../../types/types";

interface Props {
  roomData: Room;
}

const Roomcards = ({ roomData }: Props) => {
  console.log(roomData);
  return (
    <section className="slider room flex">
      <div className="tm-rooms">
        <img src={roomData.room_images.living_room} />
        <p className="s">{roomData.room_type}</p>
      </div>
    </section>
  );
};

export default Roomcards;
