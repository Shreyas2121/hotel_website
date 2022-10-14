import React from "react";
import { useLocation } from "react-router-dom";

import BookingDetails from "../components/BookingDetails/BookingDetails";
import BookingDetailsHall from "../components/BookingDetails/BookingDetailsHall";

export const Booking = () => {
  const location = useLocation();
  const { roomType } = location.state;
  return <div>{roomType ? <BookingDetails /> : <BookingDetailsHall />}</div>;
};
