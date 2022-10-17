import React, { useState } from "react";
import Roomcards from "../components/Roomcards/Roomcards";
import "../components/search.css";
import Slider from "../components/Slider/Slider";

import { UseFetch } from "../customHook/UseFetch";
import { Room } from "../types/types";
import axios from "axios";

import roomsBackground from "../assets/images/about_banner.jpg";
import Button from "react-bootstrap/Button";


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
    <header>
    <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: `url(${roomsBackground})`, height: "30rem" }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>ROOMS</h1>
            <h4 className='mb-3'>AWAY FROM MONOTONOUS LIFE</h4>
            <br />
            <br />
            <br />
            <div
        className="search"
        style={{
          display: "flex",
          width: "60rem",
          margin: "auto",
        }}
      >
        <div style={{display:"flex", justifyContent:"space-around", width:"60%"}}>
          Check-in:{" "}
          <input
          className="dates"
            min={new Date().toISOString().split("T")[0]}
            type="date"
            onChange={(e) => setCheckIn(e.target.value)}
          />


          Check-out:{" "}
          <input
          className="dates"
            min={conv(checkin)}
            type="date"
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <Button variant="primary" size="sm" onClick={handleSearch}>
        Check Availability
          </Button>{" "}
      </div>

          </div>
        </div>
      </div>
    </div>

    
      {!clicked ? (
        <div></div>
      ) : (
        <div style={{ margin:"2rem" }}>
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
    </header>
  );
};

export default Rooms;
