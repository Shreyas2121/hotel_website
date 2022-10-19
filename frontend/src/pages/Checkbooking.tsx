import React, { ReactEventHandler, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DisplayDetails from "../components/DisplayDetails/DisplayDetails";
import { Booking } from "../types/types";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import roomsBackground from "../assets/images/about_banner.jpg";

import "../components/parallaxImage.css";


interface Res {
  data: Booking[];
  loading: boolean;
}

export const Checkbooking = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [bookingDetails, setBookingDetails] = React.useState<Booking[]>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [del, setDel] = React.useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/reservation/get/${email}`
    );
    setBookingDetails(data);
    console.log(data);
    setLoading(false);
    setClicked(true);
  };

  useEffect(() => {
      const a = async() => {
        const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/reservation/get/${email}`
    );
    setBookingDetails(data);
    console.log(data);
    setLoading(false);
      }
      a();
  },[del,setDel])

  return (
    <header>
    <div
      className='p-5 text-center bg-image parallax'
      style={{ backgroundImage: `url(${roomsBackground})`, height: "20rem" }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>YOUR BOOKINGS</h1>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <Stack direction="horizontal" gap={3} style={{
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "600px",
        padding: "2rem",

      }}>
        <Form.Control
          ref={emailRef}
          type="email"
          className="me-auto"
          placeholder="Enter Email"
        />
        <Button onClick={handleSubmit} type="button" variant="secondary">
          Check
        </Button>
      </Stack>

    </div>
    <br />

    <Container style={{ minHeight: "50vh" }}>
      <br />

      <br />
      {clicked && (
        <div>
          {loading ? (
            <div></div>
          ) : (
            <div
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <DisplayDetails bookingDetails={bookingDetails} setDel={setDel} />
            </div>
          )}
        </div>
      )}
    </Container>
  </header>
  );
};

export default Checkbooking;
