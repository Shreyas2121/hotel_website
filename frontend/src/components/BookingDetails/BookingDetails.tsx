import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UseFetch } from "../../customHook/UseFetch";
import { Addon } from "../../types/types";
// import { Addon } from "../Addons/Addon";
import "./bookingdetails.css";

interface ResAddon {
  data: {
    addOn_type: Addon;
  };
  loading: boolean;
}

export const BookingDetails = () => {
  const location = useLocation();
  console.log(location.state);

  const { data, loading }: ResAddon = UseFetch(
    "http://127.0.0.1:5000/booking/addon/"
  );

  const [selectCheck, setSelectCheck] = useState({
    addon: [],
  });

  const type = data?.addOn_type;
  // const ent = Object.entries(type);

  const handleAddon = (e) => {
    if (e.target.checked) {
      setSelectCheck({
        addon: [...selectCheck.addon, e.target.value],
      });
    }
    if (!e.target.checked) {
      setSelectCheck({
        addon: selectCheck.addon.filter((item) => item !== e.target.value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bookingdetails_container">
      <form>
        <div className="elem-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="visitor_name"
            placeholder="John Doe"
            pattern="[A-Z\sa-z]{3,20}"
            // required=""
          />
        </div>
        <div className="elem-group">
          <label htmlFor="email">Your E-mail</label>
          <input
            type="email"
            id="email"
            name="visitor_email"
            placeholder="john.doe@email.com"
            // required=""
          />
        </div>
        <hr />
        <div className="elem-group inlined">
          <label htmlFor="adult">Guests</label>
          <p></p>
        </div>
        <div className="elem-group inlined">
          <label htmlFor="checkin-date">Date : </label>
          <p></p>
        </div>
        <div className="elem-group">
          <label htmlFor="room-selection">Room Type</label>
          <p></p>
        </div>
        <hr />

        {/* <Addon /> */}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="checkbox-container">
            {Object.entries(type).map(([key, value]) => (
              <div>
                <input
                  className="checkbox-input"
                  id={key}
                  name={key}
                  value={key}
                  type="checkbox"
                  onChange={handleAddon}
                />
                <label className="checkbox">
                  {key} : {value}
                </label>
              </div>
            ))}
          </div>
        )}

        <div className="elem-group">
          <label htmlFor="message">Special Request?</label>
          <textarea
            id="message"
            name="visitor_message"
            placeholder="Tell us anything else that might be important."
            // required=""
            defaultValue={""}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Book The Rooms
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;
