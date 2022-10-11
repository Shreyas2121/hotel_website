import React from "react";
import "./service.css";

import image1 from "../../assets/images/bell.png";
import image2 from "../../assets/images/coffee.png";
import image3 from "../../assets/images/car-front.png";
import image4 from "../../assets/images/spa.png";

const Service = () => {
  return (
    <>
      <section className="tm-servicesection">
        <div className="tm-service">
          <img className="tm-serimage" src={image1} />
          <div>
            <p className="b">Room Service</p>
            <p> Enjoy your stay with excellent and timely room service </p>{" "}
          </div>
        </div>
        <div className="tm-service">
          <img className="tm-serimage" src={image2} />
          <div>
            <p className="b">Free Breakfast</p>
            <p> Enjoy Free breakfast every morning</p>{" "}
          </div>
        </div>
      </section>
      <section className="tm-servicesection">
        <div className="tm-service">
          <img className="tm-serimage" src={image3} />
          <div>
            <p className="b">Free Parking</p>
            <p> No need to pay any extra charges to park your vehicle </p>{" "}
          </div>
        </div>
        <div className="tm-service">
          <img className="tm-serimage" src={image4} />
          <div>
            <p className="b">Free Spa</p>
            <p> Relax at the inhouse Spa once every day of your stay </p>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
