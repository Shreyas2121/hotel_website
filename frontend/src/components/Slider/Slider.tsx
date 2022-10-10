import React from "react";
import "./slider.css";

import image1 from "../../assets/images/main_slider11.png";
import image2 from "../../assets/images/main_slider12.png";
import image3 from "../../assets/images/main_slider13.png";
import image4 from "../../assets/images/main_slider14.png";

import back from "../../assets/images/back.png";
import next from "../../assets/images/next.png";

const Slider = () => {
  return (
    <section className="tm-imgslider">
      <div className="slider single">
        <div>
          <div className="tm-slider">
            <img className="tm-sliderimage" src={image1} alt="Majestic Hotel" />
            <div className="tm-slidertext">
              <p className="bold"> Expierence</p>
              <p className="simple">The Beauty and ambience </p>
              <p className="simple">All in one place </p>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="tm-slider">
            <img className="tm-sliderimage" src={image2} alt="Majestic Hotel" />
            <div className="tm-slidertext">
              <p className="bold"> Expierence</p>
              <p className="simple">The tranquility </p>
              <p className="simple">in hotel spa and swimming pool </p>
            </div>
          </div>
        </div>
        <div>
          <div className="tm-slider">
            <img className="tm-sliderimage" src={image3} alt="Majestic Hotel" />
            <div className="tm-slidertext">
              <p className="bold"> Expierence</p>
              <p className="simple">The luxorious interiors </p>
              <p className="simple">in every hotel room </p>
            </div>
          </div>
        </div>
        <div>
          <div className="tm-slider">
            <img className="tm-sliderimage" src={image4} alt="Majestic Hotel" />
            <div className="tm-slidertext">
              <p className="bold"> Expirence</p>
              <p className="simple">The mesmerizing beach view </p>
              <p className="simple">from your room's balcony</p>
            </div>
          </div>
        </div> */}
      </div>
      <img src={back} className="left" />
      <img src={next} className="right" />
    </section>
  );
};

export default Slider;
