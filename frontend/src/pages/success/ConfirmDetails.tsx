import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./success.css";

const ConfirmDetails = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Your Booking is confirmed!!</h5>
        <p className="card-text">
          <span>Name: </span>
          {state.name}
        </p>
        <p className="card-text">
          <span>Email: </span>
          {state.email}
        </p>
        <p className="card-text">
          <span>Check-in: </span>
          {state.checkin?.toDateString()}
        </p>
        <p className="card-text">
          <span>Check-out: </span>
          {state.checkout?.toDateString()}
        </p>
        <p className="card-text">
          <span>Room Type: </span>
          {state.roomType}
        </p>
        <p className="card-text">
          <span>Total Price: </span>
          {state.total}
        </p>
        <button onClick={() => navigate("/")} id="btn">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmDetails;
