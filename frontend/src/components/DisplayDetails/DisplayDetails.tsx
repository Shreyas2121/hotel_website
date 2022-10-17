import React from "react";
import { Button } from "react-bootstrap";
import { Booking } from "../../types/types";
import Card from "react-bootstrap/Card";
import axios from "axios";
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
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Booking Details</Card.Title>
          <Card.Title>{bookingDetails.booking_username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name
          </Card.Subtitle>
          <Card.Text>
            <Card.Text>{bookingDetails.booking_useremail}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            <Card.Text>Email</Card.Text>
          </Card.Subtitle>
            <Card.Text>{bookingDetails.booking_check_in}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
            <Card.Text>Check-in Date</Card.Text>
          </Card.Subtitle>
            <Card.Text>{bookingDetails.booking_check_out}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
            <Card.Text>Check-out Date</Card.Text>
          </Card.Subtitle>
            <Card.Text>{bookingDetails.booking_room_type}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
            <Card.Text>Room Type</Card.Text>
          </Card.Subtitle>
            <Card.Text>{bookingDetails.booking_no_of_rooms}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
            <Card.Text>Number of Rooms</Card.Text>
          </Card.Subtitle>
            <Card.Text>{bookingDetails.booking_total}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
            <Card.Text>Total</Card.Text>
          </Card.Subtitle>
          </Card.Text>
          <Card.Link onClick={(e) => handleSubmit(bookingDetails._id)} as={Button}>
            Cancel Booking
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayDetails;
