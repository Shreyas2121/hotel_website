import React from "react";
import { UseFetch } from "../customHook/UseFetch";
import { Room } from "../types/types";

interface Res {
  data: Room;
  loading: boolean;
}

const Rooms = () => {
  // let roomData: Room;
  const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/booking/room/getDetails"
  );
  // roomData = res.data;

  return <div style={{ minHeight: "100vh" }}>Rooms</div>;
};

export default Rooms;
