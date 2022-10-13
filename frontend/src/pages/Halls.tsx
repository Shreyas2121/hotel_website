import React, { useState } from "react";

import { UseFetch } from "../customHook/UseFetch";
import { Hall } from "../types/types";
import Hallcards from "../components/Roomcards/Hallcards";

interface Res {
  data: {
    halls: Hall[];
  };
  loading: boolean;
}  


const Halls = () => {

  const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/booking/hall/getDetails"
  );

  const [checkIn, setCheckIn] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    let checkin = new Date(checkIn);
    console.log(checkin);
  };

  return (
    <div style={{ minHeight: "100vh", margin: "2%" }}>
    <div id="search" className="search">
      <p>
        Date:{" "}
        <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
      </p>
      <button onClick={handleSearch}>Search</button>
    </div>
    <div style={{ display: "flex" }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.halls.map((hall) => (
          <Hallcards key={hall.hall_id} hallData={hall} />
        ))
      )}
    </div>
  </div>

  );
};

export default Halls;
