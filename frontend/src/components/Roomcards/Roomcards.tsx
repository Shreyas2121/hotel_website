import React from 'react'
import './roomcards.css';

import image1 from "../../assets/images/luxury.png";
import image2 from "../../assets/images/delux.png";
import image3 from "../../assets/images/premier.png";

export const Roomcards = () => {
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
    </section>
  );
};

export default Roomcards;