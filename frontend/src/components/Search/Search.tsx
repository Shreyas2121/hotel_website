import React from "react";
import "./search.css";

export const BookingDetails = () => {
  return (
    <div className="search">
      <p>Check-in: <input type="date" /></p><p>Check-out: <input type="date" /></p>
      <button>Search</button>
    </div>
  );
};

export default BookingDetails;
