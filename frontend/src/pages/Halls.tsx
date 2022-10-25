import React, { useState } from "react";

import { UseFetch } from "../customHook/UseFetch";
import { Hall } from "../types/types";
import Hallcards from "../components/Cards/Hallcards";
import axios from "axios";
import Button from "react-bootstrap/Button";

import "../components/parallaxImage.css";

import roomsBackground from "../assets/images/about_banner.jpg";

interface Res {
  data: {
    halls: Hall[];
  };
  loading: boolean;
}

interface Status {
  Wedding: number;
  Conference: number;
  Birthday: number;
}

interface ResStatus {
  data: Status;
}

const Halls = () => {
  const { data, loading }: Res = UseFetch(
    "http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/booking/hall/getDetails"
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [status, setStatus] = useState<Status>();

  // const [hallData, setHallData] = useState([]);

  const [clicked, setClicked] = useState(false);

  const [value, setValue] = useState("");

  const selectRef = React.useRef<HTMLSelectElement>(null);

  let checkin = new Date(checkIn);
  let checkout = new Date(checkOut);

  const conv = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const formatedCheckIn = checkin.toISOString();
    const formatedCheckOut = checkout.toISOString();
    const valueNew = selectRef.current.value;

    const { data }: ResStatus = await axios.post(
      "http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/booking/hall/check",
      { checkIn: formatedCheckIn, checkOut: formatedCheckOut },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
                    className="dates"
                    aria-label="Default select example"
                    ref={selectRef}
                    style={{ width: "10rem", padding: "0.1rem 0.8rem 0" }}
                  >
                    <option>Select Type</option>
                    <option value="Conference">Conference</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                  </select>
                  From :{" "}
                  <input
                    id="check-in"
                    className="dates"
                    min={new Date().toISOString().split("T")[0]}
                    type="date"
                    onChange={(e) => setCheckIn(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                  To:{" "}
                  <input
                    id="check-out"
                    className="dates"
                    min={conv(checkin)}
                    max={conv(
                      new Date(checkin.setMonth(checkin.getMonth() + 1))
                    )}
                    type="date"
                    disabled={checkIn === ""}
                    onChange={(e) => setCheckOut(e.target.value)}
                    onKeyDown={(e) => e.preventDefault()}
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
              if (hall.hall_type === value) {
                return (
                  <Hallcards
                    key={hall.hall_id}
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
