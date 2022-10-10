import React from "react";
import "./grid.css";

import image1 from "../../assets/images/luxury.png";
import image2 from "../../assets/images/delux.png";
import image3 from "../../assets/images/premier.png";
import image4 from "../../assets/images/luxury.png";
import image5 from "../../assets/images/deluxroom.png";
import image6 from "../../assets/images/premiumroom.png";

const PhotoGrid = () => {
  return (
    <section className="slider room flex">
      <div className="tm-rooms">
        <img src={image1} />
        <a href="rooms.html">
          {" "}
          <p className="s">Luxury Suite</p>{" "}
        </a>
      </div>
      <div className="tm-rooms">
        <img src={image2} />
        <a href="rooms.html">
          {" "}
          <p className="s">Delux Suite</p>
        </a>
      </div>
      <div className="tm-rooms">
        <img src={image3} />
        <a href="rooms.html">
          {" "}
          <p>Premier Suite</p>
        </a>
      </div>
      <div className="tm-rooms">
        <img src={image3} />
        <a href="rooms.html">
          {" "}
          <p className="s">Luxury Room</p>{" "}
        </a>
      </div>
      <div className="tm-rooms">
        <img src={image5} />
        <a href="rooms.html">
          {" "}
          <p>Delux Room</p>
        </a>
      </div>
      <div className="tm-rooms">
        <img src={image6} />
        <a href="rooms.html">
          {" "}
          <p>Premier Room</p>
        </a>
      </div>
    </section>
  );
};

export default PhotoGrid;
