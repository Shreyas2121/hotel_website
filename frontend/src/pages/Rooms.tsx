import React, { useState } from "react";
import Roomcards from "../components/Cards/Roomcards";
import "../components/search.css";

import { UseFetch } from "../customHook/UseFetch";
import { Room } from "../types/types";
import axios from "axios";

import "../components/parallaxImage.css";

import roomsBackground from "../assets/images/about_banner.jpg";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

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
  // window.scrollTo(0, 0);
  const { data, loading }: Res = UseFetch(
    `http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/booking/room/getDetails`
  );

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [status, setStatus] = useState<Status>();

  const [clicked, setClicked] = useState(false);

  let checkin = new Date(checkIn);
  let checkout = new Date(checkOut);

  const conv = (date: Date) => {
    date.setDate(date.getDate() + 1);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const handleSearch = async (e) => {
    if (checkIn === "" || checkOut === "") {
      toast.error("Please select checkin and checkout dates");
    }

    e.preventDefault();
    const formatedCheckIn = checkin.toISOString();
    const formatedCheckOut = checkout.toISOString();

    const { data }: ResStatus = await axios.post(
      "http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/booking/room/check",
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
    console.log(data);
    setStatus(data);
    setClicked(true);
    window.scrollTo({
      top: 800,
    });
  };

  return (
    <header>
      <div
        className="p-5 text-center bg-image parallax"
        style={{ backgroundImage: `url(${roomsBackground})`, height: "50rem" }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">ROOMS</h1>
              <h4 className="mb-3">AWAY FROM MONOTONOUS LIFE</h4>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "60%",
                  }}
                >
                  Check-in:{" "}
                  <input
                    id="check-in"
                    className="dates"
                    min={new Date().toISOString().split("T")[0]}
                    max={conv(checkout)}
                    type="date"
                    onChange={(e) => setCheckIn(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                  Check-out:{" "}
                  <input
                    id="check-out"
                    className="dates"
                    min={conv(checkin)}
                    max={
                      checkin.getMonth() === 11
                        ? `${checkin.getFullYear() + 1}-01-${
                            checkin.getDate() + 1
                          }`
                        : `${checkin.getFullYear()}-${checkin.getMonth() + 2}-${
                            checkin.getDate() + 1
                          }`
                    }
                    type="date"
                    disabled={checkIn === ""}
                    onChange={(e) => setCheckOut(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                </div>
                <Button
                  id="check-availability"
                  variant="primary"
                  size="sm"
                  onClick={handleSearch}
                >
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
        <div style={{ margin: "2rem" }}>
          <h6 style={{ marginLeft: "5%" }}>Select Room Type</h6>
          <hr />
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
