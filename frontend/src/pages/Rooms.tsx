import React, { useEffect, useState } from "react";

import BookingDetails from "../components/BookingDetails/BookingDetails";
import Roomcards from "../components/Roomcards/Roomcards";
import "../components/search.css";

import { UseFetch } from "../customHook/UseFetch";
import { Room } from "../types/types";
import axios from "axios";

interface Res {
  data: {
    rooms: Room[];
  };
  loading: boolean;
}

const Rooms = () => {
  const { data, loading }: Res = UseFetch(
    `http://127.0.0.1:5000/booking/room/getDetails`
  );

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  let checkin = new Date(checkIn);
  let checkout = new Date(checkOut);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(checkin);
  };

  return (
    <div style={{ minHeight: "100vh", margin: "2%" }}>
      <div className="search">
        <p>
          Check-in:{" "}
          <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
        </p>
        <p>
          Check-out:{" "}
          <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
        </p>
        <button onClick={handleSearch}>Check Availability</button>
      </div>
      <div style={{ display: "flex" }}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data?.rooms.map((room) => (
            <Roomcards
              key={room.room_id}
              roomData={room}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Rooms;
