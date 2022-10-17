import React from "react";
import { Button } from "react-bootstrap";
import { Booking } from "../../types/types";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

interface Props {
  bookingDetails: Booking;
}

const handleSubmit = async (id: string) => {
  const res = await axios.delete(`http://127.0.0.1:5000/reservation/${id}`);
  if (res.status === 200) {
    toast.success("Reservation deleted successfully");
  }
};

const DisplayDetails = ({ bookingDetails }: Props) => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Room Type</th>
          <th>No. of rooms</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{bookingDetails.booking_username}</td>
          <td>{bookingDetails.booking_check_in}</td>
          <td>{bookingDetails.booking_check_out}</td>
          <td>{bookingDetails.booking_room_type}</td>
          <td>{bookingDetails.booking_no_of_rooms}</td>
          <td>{bookingDetails.booking_total}</td>
          <td><Button onClick={(e) => handleSubmit(bookingDetails._id)}>Cancel Booking</Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default DisplayDetails;
