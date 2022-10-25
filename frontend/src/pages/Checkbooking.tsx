import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DisplayDetails from "../components/DisplayDetails";
import { Booking, BookingHall } from "../types/types";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import roomsBackground from "../assets/images/about_banner.jpg";

import "../components/parallaxImage.css";

interface Res {
  data: Booking[];
  loading: boolean;
}

interface Hall{
  data_hall: BookingHall[];
  loading: boolean;
}

export const Checkbooking = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [bookingDetails, setBookingDetails] = React.useState<Booking[]>(null);
  const [bookingDetails1, setBookingDetails1] = React.useState<BookingHall[]>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [del, setDel] = React.useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/reservation/get/room/${email}`
    );
    setBookingDetails(data);
    const {data_hall} : Hall = await axios.get(
      `http://127.0.0.1:5000/reservation/get/hall/${email}`
    );
    setBookingDetails1(data_hall);
    console.log(data);
    setLoading(false);
    setClicked(true);
  };

  useEffect(() => {
    const a = async () => {
      const email = emailRef.current.value;
      setLoading(true);
      const { data }: Res = await axios.get(
        `http://127.0.0.1:5000/reservation/get/room/${email}`
      );
      setBookingDetails(data);
      const { data_hall }: Hall = await axios.get(
        `http://127.0.0.1:5000/reservation/get/hall/${email}`
      );
      setBookingDetails1(data_hall);
      setLoading(false);
    };
    a();
  }, [del, setDel]);

  return (
    <header>
      <div
        className="p-5 text-center bg-image parallax"
        style={{ backgroundImage: `url(${roomsBackground})`, height: "50rem" }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">YOUR BOOKINGS</h1>
            </div>
          </div>
        </div>

        <Stack
          direction="horizontal"
          gap={3}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "600px",
            padding: "2rem",
          }}
        >
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
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {bookingDetails.length ? (
                  <>
                  <p style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}>Room Bookings Found for this email: {emailRef.current.value} </p>
                  <DisplayDetails
                  bookingDetails={bookingDetails}
                  setDel={setDel}
                  />
                  </>
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    No Room Bookings Found for this email: {emailRef.current.value}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Container>

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
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {bookingDetails.length ? (
                  <>
                  <p style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}>Hall Bookings Found for this email: {emailRef.current.value} </p>
                  <DisplayDetails
                  bookingDetails={bookingDetails}
                  setDel={setDel}
                  />
                  </>
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    No Hall Bookings Found for this email: {emailRef.current.value}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Checkbooking;
