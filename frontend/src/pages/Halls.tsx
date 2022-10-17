import React, { useState } from "react";

import { UseFetch } from "../customHook/UseFetch";
import { Hall } from "../types/types";
import Hallcards from "../components/Roomcards/Hallcards";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Slider from "../components/Slider/Slider";

import roomsBackground from "../assets/images/about_banner.jpg";
import { Placeholder } from "react-bootstrap";


interface Res {
  data: {
    halls: Hall[];
  };
  loading: boolean;
}

interface ResHallS {
  data: Array<string>;
}

const Halls = () => {
  const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/booking/hall/getDetails"
  );

  const [checkIn, setCheckIn] = useState("");
  const [hallData, setHallData] = useState([]);
  const [clicked, setClicked] = useState(false);

  let checkin = new Date(checkIn);

  const handleSearch = async (e) => {
    e.preventDefault();
    // const selectedDate = `${checkin.getDate()}/${
    //   checkin.getMonth() + 1
    // }/${checkin.getFullYear()}`;
    const selectedDate = checkin.toISOString();

    setCheckIn(selectedDate);
    setClicked(true);

    const { data }: ResHallS = await axios.post(
      "http://127.0.0.1:5000/booking/hall/check",
      { checkin: selectedDate },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setHallData(data);
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
              <h1 className='mb-3'>HALLS</h1>
              <h4 className='mb-3'>AWAY FROM MONOTONOUS LIFE</h4>
              <br />
              <br />
              <br />
              <div id="search" className="search"  style={{
          display: "flex",
          width: "40rem",
        }}>
        <div style={{width:"50%", display:"flex", justifyContent:"space-evenly"}}>
          Date :{" "}
          <input
          className="dates"
            min={new Date().toISOString().split("T")[0]}
            type="date"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div>
          <Button variant="primary" size="sm" onClick={handleSearch}>
          Check Availability
          </Button>{" "}
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>


      {!clicked ? (
        <div></div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.halls.map((hall) => (
              <Hallcards
                key={hall.hall_id}
                hallData={hall}
                checkin={checkin}
                bookedHalls={hallData}
              />
            ))
          )}
        </div>
      )}
      </header>
  );
};

export default Halls;
