import React, { useState } from "react";

import { UseFetch } from "../customHook/UseFetch";
import { Hall } from "../types/types";
import Hallcards from "../components/Cards/Hallcards";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../components/search.css";

import "../components/parallaxImage.css";

import roomsBackground from "../assets/images/about_banner.jpg";

interface Res {
  data: {
    halls: Hall[];
  };
  loading: boolean;
}

interface Status {
  Birthday: number;
  Conference: number;
  Wedding: number;
}

interface ResStatus {
  data: Status;
}

const Halls = () => {
  const { data, loading }: Res = UseFetch(
    "hall"
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [status, setStatus] = useState<Status>();

  const [clicked, setClicked] = useState(false);

  const [value, setValue] = useState("");

  const selectRef = React.useRef<HTMLSelectElement>(null);

  let checkin = new Date(checkIn);
  let checkout = new Date(checkOut);

  const conv = (date: Date) => {
    
    if(date)
    {
      const newDate = new Date(date.setMonth(date.getMonth()+2));
      if (newDate.getMonth() < 10 && newDate.getDate() < 10) {
        return `${newDate.getFullYear()}-0${newDate.getMonth()+1}-0${newDate.getDate()}`;
      }
      return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`;
    }

  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const formatedCheckIn = checkin.toISOString();
    const formatedCheckOut = checkout.toISOString();
    const valueNew = selectRef.current.value;

    const { data }: ResStatus = await axios.get(`booking/hall/availability?checkIn=${formatedCheckIn}&checkOut=${formatedCheckOut}`);

    setValue(valueNew);
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
              <h1 className="mb-3">HALLS</h1>
              <h4 className="mb-3">AWAY FROM MONOTONOUS LIFE</h4>
              <br />
              <br />
              <br />
              <div
                id="search"
                className="search"
                style={{
                  display: "flex",
                  width: "80rem",
                  margin: "auto",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "2rem",
                  }}
                >
                  Type:
                  <select
                    className="input-select"
                    aria-label="Default select example"
                    ref={selectRef}
                    required
                  >
                    <option>Select Type</option>
                    <option value="Conference">Conference</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                  </select>
                  From :{" "}
                  <input
                    id="check-in"
                    className="input-date"
                    min={new Date().toISOString().split("T")[0]}
                    max={conv(checkout)}
                    type="date"
                    onChange={(e) => setCheckIn(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                    required
                  />
                  To:{" "}
                  <input
                    id="check-out"
                    className="input-date"
                    min={checkIn}
                    max={
                      
                      conv(checkin)
                    }
                    type="date"
                    disabled={checkIn === ""}
                    onChange={(e) => setCheckOut(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                    required
                  />
                </div>
                <div>
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
      </div>

      {!clicked ? (
        <div></div>
      ) : (
        <div style={{ margin: "2rem" }}>
          <h6 style={{ marginLeft: "5%" }}>Select Hall</h6>
          <hr />
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.halls.map((hall) => {
              if (hall.category === value) {
                return (
                  <Hallcards
                    key={hall._id}
                    hallData={hall}
                    checkin={checkin}
                    // bookedHalls={hallData}
                    checkout={checkout}
                    status={status}
                  />
                );
              }
            })
          )}
        </div>
      )}
    </header>
  );
};

export default Halls;
