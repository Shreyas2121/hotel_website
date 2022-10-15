import React from "react";
import { Container, Button } from "react-bootstrap";
import { Booking } from "../../types/types";
import Card from "react-bootstrap/Card";

interface Props {
  bookingDetails: Booking;
}

export const DisplayDetails = ({ bookingDetails }: Props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{bookingDetails.booking_username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link as={Button}>Cancel Booking</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayDetails;
