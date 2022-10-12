import React from "react";
import { UseFetch } from "../customHook/UseFetch";
import { Room } from "../types/types";

interface Res {
  data: {
    rooms: Room[];
  };
  loading: boolean;
}

const Rooms = () => {
  // let roomData: Room;
  const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/booking/room/getDetails"
  );
  // roomData = res.data;
  console.log(data.rooms[0].room_id);

  return <div style={{ minHeight: "100vh" }}>Rooms</div>;
};

export default Rooms;
