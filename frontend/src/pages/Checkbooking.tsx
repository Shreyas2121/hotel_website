import React, { ReactEventHandler } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DisplayDetails from "../components/DisplayDetails/DisplayDetails";
import { Booking } from "../types/types";
import axios from "axios";

interface Res {
  data: Booking[];
  loading: boolean;
}

export const Checkbooking = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [bookingDetails, setBookingDetails] = React.useState<Booking[]>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/reservation/${email}`
    );
    setBookingDetails(data);
    setLoading(false);
    setClicked(true);
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Button onClick={handleSubmit} variant="outline-primary" type="button">
          Check Booking
        </Button>
      </Form>
      <br />
      {clicked && (
        <div>
          {loading ? (
            <div></div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {bookingDetails.map((booking) => {
                return <DisplayDetails bookingDetails={booking} />;
              })}
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Checkbooking;
