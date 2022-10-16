import React, { useState } from "react";

import { UseFetch } from "../customHook/UseFetch";
import { Hall } from "../types/types";
import Hallcards from "../components/Roomcards/Hallcards";
import axios from "axios";

import "../components/search.css";

import Slider from "../components/Slider/Slider";

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
    const selectedDate = `${checkin.getDate()}/${
      checkin.getMonth() + 1
    }/${checkin.getFullYear()}`;

    setCheckIn(selectedDate);
    setClicked(true);

    const { data }: ResHallS = await axios.post(
      "http://127.0.0.1:5000/booking/hall/check",
      { date: selectedDate },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setHallData(data);
  };

  return (
    <div style={{ margin: "2%" }}>
      <Slider />
      <div id="search" className="search"  style={{
          display: "flex",
        }}>
        <p>
          Date:{" "}
          <input
            min={new Date().toISOString().split("T")[0]}
            type="date"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </p>
        <div>
        <button id="checkAvailability" onClick={handleSearch}>Check Availability</button>
      </div>
      </div>
      {!clicked ? (
        <div></div>
      ) : (
        <div style={{ display: "flex", justifyContent:"space-evenly"}}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.halls.map((hall) => (
              <Hallcards
                key={hall.hall_id}
                hallData={hall}
                checkIn={checkIn}
                bookedHalls={hallData}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Halls;
