import React, { useRef, useState } from "react";
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

interface State {
  no: number;
  checkin: Date;
  checkout: Date;
  roomType: string;
}

export const BookingDetails = () => {
  const location = useLocation();
  const { no, checkin, checkout, roomType }: State = location.state;
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const specialReqRef = useRef<HTMLTextAreaElement>(null);

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

  const filtAddOn = () => {
    let a = {};
    selectCheck.addon.forEach((each) => {
      if (Object.keys(type).includes(each)) {
        a[each] = type[each];
      }
    });
    return a;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const specialReq = specialReqRef.current?.value;
    const selectedAddons = filtAddOn();
    const data = {
      name,
      email,
      specialReq,
      selectedAddons,
      no,
      checkin,
      checkout,
      roomType,
    };
    console.log(data);
  };

  return (
    <div className="bookingdetails_container">
      <form>
        <div className="elem-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            ref={nameRef}
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
            ref={emailRef}
            type="email"
            id="email"
            name="visitor_email"
            placeholder="john.doe@email.com"
            // required=""
          />
        </div>
        <hr />
        <div className="elem-group inlined">
          <label htmlFor="adult">No of rooms : {no}</label>
          <p></p>
        </div>
        <div className="elem-group inlined">
          <label htmlFor="checkin-date">Date : </label>
          <p>
            {checkin.getDate()}/{checkin.getMonth()}/{checkin.getFullYear()} -{" "}
            {checkout.getDate()}/{checkout.getMonth()}/{checkout.getFullYear()}
          </p>
        </div>
        <div className="elem-group">
          <label htmlFor="room-selection">Room Type</label>
          <p>{roomType}</p>
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
            ref={specialReqRef}
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
