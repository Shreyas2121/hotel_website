import React, { useState } from "react";
import "./search.css";
import "react-calendar/dist/Calendar.css";

export const BookingDetails = () => {
  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let checkin = new Date(checkIn);
    let checkout = new Date(checkOut);
    console.log(checkin);
  };

  return (
    <div className="search">
      <p>
        Check-in:{" "}
        <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
      </p>
      <p>
        Check-out:{" "}
        <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
      </p>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default BookingDetails;
