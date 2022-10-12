import React, { useEffect, useState } from "react";
import BookingDetails from "../components/BookingDetails/BookingDetails";
import Roomcards from "../components/Roomcards/Roomcards";
import { UseFetch } from "../customHook/UseFetch";
import { Room } from "../types/types";
import axios from "axios";

interface Res {
  data: {
    rooms: Room[];
  };
  loading: boolean;
}

const Rooms = () => {
  const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/booking/room/getDetails"
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <BookingDetails />
      <div className="tm-rooms">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data?.rooms.map((room) => <Roomcards roomData={room} />)
        )}
      </div>
    </div>
  );
};

export default Rooms;
