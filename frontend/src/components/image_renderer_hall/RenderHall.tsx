import React from "react";
// import { UseFetch } from '../../customHook/UseFetch'
import "./render_hall.css";
// import image2 from "../../assets/images/hall2.jpg";
// import image1 from "../../assets/images/meetinghall.png";

const RenderHall = () => {
  return (
    // data=UseFetch('http://localhost:5000/api/halls')
    <section className="tm-hall-booking">
      <form>
        <div className="tm-form">
          <label htmlFor="halls" id="inlinelable">
            <h1>HALL BOOKING</h1>
          </label>
          <div />

          <div className="tm-hall">
            <div>
              <img src="" />
              <p>
                <h2>Conference Room</h2>
              </p>
            </div>
            <br />

            <div>
              <img className="hall-images" src="" />
              <p>
                <h2>Wedding Hall</h2>
              </p>
            </div>
          </div>

          <br />
          <br />

          <div className="form2">
            <div className="tm-form3">
              <div className="sel_date">
                <label htmlFor="date1" className="arrival">
                  <h4>Choose a Date </h4>
                </label>
                <input type="date" name="date" className="date" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="selection">
            <select name="Halls" id="halls">
              <option value="Conference Room">Conference Room</option>
              <option value="Wedding Halls">Wedding Halls</option>
            </select>
          </div>

          <br />
          <br />

          <div className="tm-num1" id="handleCounter2">
            <label htmlFor="number1"> Number of Guests</label>
            <br />
            <button type="button" className="counter-minus btn btn-primary">
              -
            </button>
            <input type="text" name="number1" id="number1" defaultValue={1} />
            <button type="button" className="counter-plus btn btn-primary">
              +
            </button>
          </div>

          <br />
          <div className="input_name">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <br />
          <div className="submit">
            <input type="submit" id="sub" defaultValue="Proceed" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default RenderHall;
