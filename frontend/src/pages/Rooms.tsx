import React from "react";
import { UseFetch } from "../customHook/UseFetch";

const Rooms = () => {
  const { data, loading } = UseFetch(
    "http://127.0.0.1:5000/booking/room/getDetails"
  );

  console.log(data);

  return <div style={{ minHeight: "100vh" }}>Rooms</div>;
};

export default Rooms;
