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

interface Status {
  Basic: number;
  Suite: number;
  Deluxe: number;
}
interface ResStatus {
  data: Status;
}

const Rooms = () => {
  const { data, loading }: Res = UseFetch(
    `http://127.0.0.1:5000/booking/room/getDetails`
  );

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [status, setStatus] = useState<Status>();

  const [clicked, setClicked] = useState(false);

  let checkin = new Date(checkIn);
  let checkout = new Date(checkOut);

  const conv = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const formatedCheckIn = checkin.toISOString();
    const formatedCheckOut = checkout.toISOString();
    console.log(formatedCheckIn, formatedCheckOut);

    const { data }: ResStatus = await axios.post(
      "http://127.0.0.1:5000/booking/room/check",
      {
        checkIn: formatedCheckIn,
        checkOut: formatedCheckOut,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setStatus(data);
    setClicked(true);
  };

  return (
    <div style={{ minHeight: "100vh", margin: "2%" }}>
      <div className="search">
        <p>
          Check-in:{" "}
          <input
            min={new Date().toISOString().split("T")[0]}
            type="date"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </p>
        <p>
          Check-out:{" "}
          <input
            min={conv(checkin)}
            type="date"
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </p>
        <button onClick={handleSearch}>Check Availability</button>
      </div>
      {!clicked ? (
        <div></div>
      ) : (
        <div style={{ display: "flex", justifyContent:"space-evenly" }}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.rooms.map((room) => (
              <Roomcards
                key={room.room_id}
                roomData={room}
                checkin={checkin}
                checkout={checkout}
                status={status}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Rooms;
