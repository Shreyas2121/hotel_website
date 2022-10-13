import React from "react";
import { Addon } from "../Addons/Addon";
import "./bookingdetails.css";

export const BookingDetails = () => {
  return (
    <div className="bookingdetails_container">
      <form action="reservation.php" method="post">
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
        <div className="elem-group">
          <label htmlFor="phone">Your Phone</label>
          <input
            type="tel"
            id="phone"
            name="visitor_phone"
            placeholder="498-348-3872"
            pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
            // required=""
          />
        </div>
        <hr />
        <div className="elem-group inlined">
          <label htmlFor="adult">Adults</label>
          <input
            type="number"
            id="adult"
            name="total_adults"
            placeholder="2"
            min={1}
            // required=""
          />
        </div>
        <div className="elem-group inlined">
          <label htmlFor="child">Children</label>
          <input
            type="number"
            id="child"
            name="total_children"
            placeholder="2"
            min={0}
            // required=""
          />
        </div>
        <div className="elem-group inlined">
          <label htmlFor="checkin-date">Check-in Date</label>
          <input type="date" id="checkin-date" name="checkin" />
        </div>
        <div className="elem-group inlined">
          <label htmlFor="checkout-date">Check-out Date</label>
          <input type="date" id="checkout-date" name="checkout"  />
        </div>
        <div className="elem-group">
          <label htmlFor="room-selection">Room Type</label>
          <input type="text" id="room-selection" name="room_type" placeholder="Deluxe" />
        </div>
        <hr />

        <Addon  />

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
        <button type="submit">Book The Rooms</button>
      </form>
    </div>
  );
};

export default BookingDetails;
